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

	public class InfoPopup extends Sprite
	{
		private var _closeButton:Button;

		public function InfoPopup()
		{
			addChild( StarlingFactory.getShadowBackground() );

			var boardBackground:Sprite = StarlingFactory.getBoardBackground();
			boardBackground.x = ViewPortSize.HALF_WIDTH;
			boardBackground.y = ViewPortSize.HALF_HEIGHT;
			addChild( boardBackground );

			_closeButton = StarlingFactory.getButton( AssetsInfo.BUTTON_CANCEL );
			_closeButton.pivotX = _closeButton.width;
			_closeButton.x = ViewPortSize.MAX_WIDTH - MagicValues.BORDER_OFFSET;
			_closeButton.y = MagicValues.BORDER_OFFSET;
			addChild( _closeButton );

			var commands:TextField = StarlingFactory.getTextField( 300, Texts.COMMANDS, Colors.DYNAMIC_TEXT );
			commands.x = ViewPortSize.HALF_WIDTH;
			commands.y = ViewPortSize.HALF_HEIGHT;
			commands.height = 300;
			commands.alignPivot();
			addChild( commands );
		}

		public function get closeButton():Button
		{
			return _closeButton;
		}
	}
}
