package setzer.tetris.mediators
{
	import flash.utils.Dictionary;

	import robotlegs.bender.extensions.palidor.starlingIntegration.starlingViewMap.impl.StarlingMediator;

	import setzer.tetris.events.GameEvent;
	import setzer.tetris.factories.StarlingFactory;
	import setzer.tetris.managers.GameManager;
	import setzer.tetris.models.GameModel;
	import setzer.tetris.models.Tile;
	import setzer.tetris.services.GameService;
	import setzer.tetris.utils.GameUtils;
	import setzer.tetris.utils.TilePool;
	import setzer.tetris.views.components.GridComponent;
	import setzer.tetris.views.components.TileDisplay;

	import starling.display.DisplayObject;
	import starling.events.Event;
	import starling.events.KeyboardEvent;

	public class GridComponentMediator extends StarlingMediator
	{

		[Inject]
		public var model:GameModel;

		[Inject]
		public var gameService:GameService;

		[Inject]
		public var view:GridComponent;

		[Inject]
		public var gameManager:GameManager;

		private var _displays:Dictionary;

		private var _tick:int;

		override public function initialize():void
		{
			eventMap.mapListener( eventDispatcher, GameEvent.UPDATE_NEXT_PIECE, game_onUpdateNextPieceHandler );
			eventMap.mapListener( eventDispatcher, GameEvent.RESUME, game_onResumeGameHandler );
			eventMap.mapListener( eventDispatcher, GameEvent.PAUSE, game_onPauseGameHandler );
			eventMap.mapListener( eventDispatcher, GameEvent.GAME_OVER, game_onGameOVerHandler );
			eventMap.mapListener( eventDispatcher, GameEvent.CLEAR_GRID, game_onClearGridHandler );
		}

		private function game_onClearGridHandler( e:Event ):void
		{
			_displays = new Dictionary();
			_tick = 0;

			gameManager.createEmpytGrid();
			view.clear();
		}

		private function game_onGameOVerHandler( e:Event ):void
		{
			eventMap.unmapListener( view, Event.ENTER_FRAME, enterFrame_Handler );
			eventMap.unmapListener( view.stage, KeyboardEvent.KEY_DOWN, keyDown_onMovementHandler );
		}

		private function game_onPauseGameHandler( e:Event ):void
		{
			eventMap.unmapListener( view, Event.ENTER_FRAME, enterFrame_Handler );
			eventMap.unmapListener( view.stage, KeyboardEvent.KEY_DOWN, keyDown_onMovementHandler );
		}

		private function game_onResumeGameHandler( e:Event ):void
		{
			eventMap.mapListener( view.stage, KeyboardEvent.KEY_DOWN, keyDown_onMovementHandler );
			eventMap.mapListener( view, Event.ENTER_FRAME, enterFrame_Handler );
		}

		private function keyDown_onMovementHandler( e:KeyboardEvent ):void
		{
			e.stopImmediatePropagation();

			var methods:Object = {};
			methods[37] = gameManager.moveCurrentPieceLeft;
			methods[65] = gameManager.moveCurrentPieceLeft;
			methods[39] = gameManager.moveCurrentPieceRight;
			methods[68] = gameManager.moveCurrentPieceRight;
			methods[38] = gameManager.rotateCurrentPiece;
			methods[87] = gameManager.rotateCurrentPiece;
			methods[40] = gameManager.moveCurrentPieceDown;
			methods[83] = gameManager.moveCurrentPieceDown;

			if ( methods[e.keyCode] ) methods[e.keyCode]();

			updateDisplays();
		}

		private function enterFrame_Handler( e:Event ):void
		{
			_tick++;

			if ( _tick > GameUtils.getCurrentSpeed( model.level ) )
			{
				gameManager.tickUpdate();
				_tick = 0;
			}

			updateDisplays();

		}

		public function addPiece():void
		{
			gameManager.addPiece( model.currentPiece );

			var display:TileDisplay;
			for each ( var tile:Tile in model.currentPiece.tiles )
			{
				display = StarlingFactory.getTileDisplay( model.currentPiece.typeId );
				addDisplayToStage( tile, display );
				GameUtils.updateDisplayPositionByTile( tile, display );
			}
		}

		public function addDisplayToStage( tile:Tile, display:DisplayObject ):void
		{
			view.addChild( display );
			_displays[tile] = display;
		}

		private function updateDisplays():void
		{
			updateDisplaysPositions( gameManager.getTilesToUpdate() );
			removeDisplays( gameManager.getTilesToRemove() );
		}

		public function updateDisplaysPositions( tiles:Vector.<Tile> ):void
		{
			var tile:Tile;
			while ( tiles.length > 0 )
			{
				tile = tiles.pop();
				GameUtils.updateDisplayPositionByTile( tile, _displays[tile] );
			}
		}

		public function removeDisplays( tiles:Vector.<Tile> ):void
		{
			var tile:Tile;
			var tileDisplay:TileDisplay;

			while ( tiles.length > 0 )
			{
				tile = tiles.pop();
				tileDisplay = _displays[tile];
				tileDisplay.removeFromParent();

				TilePool.back( tileDisplay );

				delete _displays[tile];
			}
		}

		private function game_onUpdateNextPieceHandler( e:GameEvent ):void
		{
			addPiece();
		}

		override public function destroy():void
		{
			eventMap.unmapListeners();
		}
	}
}
