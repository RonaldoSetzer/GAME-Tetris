package setzer.tetris.views
{
	import setzer.tetris.assets.AssetsInfo;
	import setzer.tetris.factories.StarlingFactory;
	import setzer.tetris.utils.MagicValues;
	import setzer.tetris.utils.ViewPortSize;

	import starling.display.Button;
	import starling.display.Image;
	import starling.display.Sprite;

	public class HomeView extends Sprite
	{
		private var _startButton:Button;
		private var _configButton:Button;

		public function HomeView()
		{
			addChild( StarlingFactory.getColorBackground() );

			var logoTetris:Image = StarlingFactory.getImage( AssetsInfo.LOGO_TETRIS );
			logoTetris.x = ViewPortSize.HALF_WIDTH;
			logoTetris.y = ViewPortSize.MAX_HEIGHT * .3;
			logoTetris.alignPivot();
			addChild( logoTetris );

			_startButton = StarlingFactory.getButton( AssetsInfo.BUTTON_START );
			_startButton.x = ViewPortSize.HALF_WIDTH;
			_startButton.y = ViewPortSize.MAX_HEIGHT * .6;
			_startButton.alignPivot();
			addChild( _startButton );

			_configButton = StarlingFactory.getButton( AssetsInfo.BUTTON_CONFIG );
			_configButton.x = ViewPortSize.HALF_WIDTH;
			_configButton.y = _startButton.y + 10 + _configButton.height;
			_configButton.alignPivot();
			addChild( _configButton );

			var logoSetzer:Image = StarlingFactory.getImage( AssetsInfo.LOGO_SETZER );
			logoSetzer.x = MagicValues.BORDER_OFFSET;
			logoSetzer.y = ViewPortSize.MAX_HEIGHT - MagicValues.BORDER_OFFSET - logoSetzer.height;
			addChild( logoSetzer );
		}

		public function get startButton():Button
		{
			return _startButton;
		}

		public function get configButton():Button
		{
			return _configButton;
		}
	}
}
