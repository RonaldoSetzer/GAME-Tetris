package setzer.tetris.mediators
{
	import robotlegs.bender.extensions.palidor.starlingIntegration.starlingViewMap.impl.StarlingMediator;

	import setzer.tetris.events.GameEvent;
	import setzer.tetris.factories.StarlingFactory;
	import setzer.tetris.models.GameModel;
	import setzer.tetris.models.Tile;
	import setzer.tetris.services.GameService;
	import setzer.tetris.views.components.NextPieceComponent;

	import starling.display.DisplayObject;

	public class NextPieceComponentMediator extends StarlingMediator
	{
		[Inject]
		public var model:GameModel;

		[Inject]
		public var gameService:GameService;

		[Inject]
		public var view:NextPieceComponent;

		override public function initialize():void
		{
			eventMap.mapListener( eventDispatcher, GameEvent.UPDATE_NEXT_PIECE, game_updateNextPieceHandler );
		}

		private function game_updateNextPieceHandler( e:GameEvent ):void
		{
			view.removeChildren();

			var display:DisplayObject;
			for ( var i:int = 0; i < model.nextPiece.tiles.length; i++ )
			{
				display = createDisplay( model.nextPiece.typeId );
				display.x = (model.nextPiece.tiles[i].col + 2) * Tile.TILE_WIDTH;
				display.y = model.nextPiece.tiles[i].row * Tile.TILE_WIDTH;
				display.pivotX = display.width * .5;
				view.addChild( display );
			}
		}

		private function createDisplay( assetId:int ):DisplayObject
		{
			return StarlingFactory.getTileDisplay( assetId );
		}

		override public function destroy():void
		{
			eventMap.unmapListeners();
		}
	}
}
