package setzer.tetris.views
{
	import setzer.tetris.assets.AssetsInfo;
	import setzer.tetris.factories.StarlingFactory;
	import setzer.tetris.utils.Colors;
	import setzer.tetris.utils.MagicValues;
	import setzer.tetris.utils.Texts;
	import setzer.tetris.utils.ViewPortSize;

	import starling.display.Button;
	import starling.display.Sprite;
	import starling.text.TextField;

	public class PausePopup extends Sprite
	{
		private var _resumeButton:Button;
		private var _homeButton:Button;

		public function PausePopup()
		{
			addChild( StarlingFactory.getShadowBackground() );

			var boardBackground:Sprite = StarlingFactory.getBoardBackground();
			boardBackground.x = ViewPortSize.HALF_WIDTH;
			boardBackground.y = ViewPortSize.HALF_HEIGHT;
			addChild( boardBackground );

			_resumeButton = StarlingFactory.getButton( AssetsInfo.BUTTON_RESUME );
			_resumeButton.pivotX = _resumeButton.width;
			_resumeButton.x = ViewPortSize.MAX_WIDTH - MagicValues.BORDER_OFFSET;
			_resumeButton.y = MagicValues.BORDER_OFFSET;
			addChild( _resumeButton );

			_homeButton = StarlingFactory.getButton( AssetsInfo.BUTTON_HOME );
			_homeButton.pivotX = _homeButton.width;
			_homeButton.x = ViewPortSize.MAX_WIDTH - _resumeButton.width - MagicValues.BORDER_OFFSET - 4;
			_homeButton.y = MagicValues.BORDER_OFFSET;
			addChild( _homeButton );

			var pause:TextField = StarlingFactory.getTextField( 300, Texts.PAUSED, Colors.DYNAMIC_TEXT );
			pause.x = ViewPortSize.HALF_WIDTH;
			pause.y = ViewPortSize.HALF_HEIGHT;
			pause.scaleX = 1.2;
			pause.scaleY = 1.2;
			pause.alignPivot();
			addChild( pause );
		}

		public function get resumeButton():Button
		{
			return _resumeButton;
		}

		public function get homeButton():Button
		{
			return _homeButton;
		}
	}
}