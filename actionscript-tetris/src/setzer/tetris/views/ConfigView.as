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

	public class ConfigView extends Sprite
	{
		private var _homeButton:Button;
		private var _resetButton:Button;

		public function ConfigView()
		{

			addChild( StarlingFactory.getColorBackground() );

			var title:TextField = StarlingFactory.getTextField( 100, Texts.CONFIG, Colors.DYNAMIC_TEXT, "left" );
			title.x = MagicValues.BORDER_OFFSET;
			title.y = 24;
			addChild( title );

			var hiScore:TextField = StarlingFactory.getTextField( 150, Texts.HI_SCORE + ":", Colors.DYNAMIC_TEXT, "left" );
			hiScore.x = MagicValues.BORDER_OFFSET;
			hiScore.y = 108;
			addChild( hiScore );

			_resetButton = StarlingFactory.getButton( AssetsInfo.BUTTON_RESET );
			_resetButton.pivotX = _resetButton.width;
			_resetButton.x = ViewPortSize.MAX_WIDTH - MagicValues.BORDER_OFFSET;
			_resetButton.y = 100;
			addChild( _resetButton );

			_homeButton = StarlingFactory.getButton( AssetsInfo.BUTTON_HOME );
			_homeButton.pivotX = _homeButton.width;
			_homeButton.x = ViewPortSize.MAX_WIDTH - MagicValues.BORDER_OFFSET;
			_homeButton.y = MagicValues.BORDER_OFFSET;
			addChild( _homeButton );
		}

		public function get resetButton():Button
		{
			return _resetButton;
		}

		public function get homeButton():Button
		{
			return _homeButton;
		}
	}
}
