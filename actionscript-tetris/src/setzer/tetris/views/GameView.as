package setzer.tetris.views
{
	import setzer.tetris.assets.AssetsInfo;
	import setzer.tetris.factories.StarlingFactory;
	import setzer.tetris.utils.MagicValues;
	import setzer.tetris.utils.ViewPortSize;
	import setzer.tetris.views.components.GridComponent;
	import setzer.tetris.views.components.HUDGameComponent;
	import setzer.tetris.views.components.NextPieceComponent;

	import starling.display.Image;
	import starling.display.Sprite;

	public class GameView extends Sprite
	{
		private var _gridComponent:GridComponent;
		private var _nextPieceComponent:NextPieceComponent;
		private var _hudComponent:HUDGameComponent;

		public function GameView()
		{
			createBackground();
		}

		private function createBackground():void
		{
			addChild( StarlingFactory.getColorBackground() );

			var grid:Image = StarlingFactory.getImage( AssetsInfo.GRID );
			grid.alignPivot();
			grid.x = MagicValues.BORDER_OFFSET + grid.pivotX;
			grid.y = 76 + grid.pivotY;
			addChild( grid );

			var nextPieceBg:Image = StarlingFactory.getImage( AssetsInfo.NEXT_TILE );
			nextPieceBg.x = ViewPortSize.MAX_WIDTH - nextPieceBg.width - MagicValues.BORDER_OFFSET;
			nextPieceBg.y = 76;
			addChild( nextPieceBg );
		}

		public function destroy():void
		{
			removeChild( _gridComponent );
			removeChild( _nextPieceComponent );
			removeChild( _hudComponent );

			_gridComponent = null;
			_nextPieceComponent = null;
			_hudComponent = null;
		}

		public function createComponents():void
		{
			_nextPieceComponent = new NextPieceComponent();
			_nextPieceComponent.x = ViewPortSize.MAX_WIDTH - 91 - MagicValues.BORDER_OFFSET + 1;
			_nextPieceComponent.y = 76 + 1;
			addChild( _nextPieceComponent );

			_gridComponent = new GridComponent();
			_gridComponent.x = MagicValues.BORDER_OFFSET;
			_gridComponent.y = 76;
			addChild( _gridComponent );

			_hudComponent = new HUDGameComponent();
			addChild( _hudComponent );
		}
	}
}
