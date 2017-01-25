package setzer.tetris.views.components
{
	import setzer.tetris.assets.AssetsInfo;
	import setzer.tetris.factories.StarlingFactory;
	import setzer.tetris.models.GameModel;
	import setzer.tetris.utils.Colors;
	import setzer.tetris.utils.MagicValues;
	import setzer.tetris.utils.Texts;
	import setzer.tetris.utils.ViewPortSize;

	import starling.display.Button;
	import starling.display.Sprite;
	import starling.text.TextField;

	public class HUDGameComponent extends Sprite
	{
		private var _linesText:DoubleTextField;
		private var _scoreText:DoubleTextField;
		private var _levelText:DoubleTextField;
		private var _hiScoreText:DoubleTextField;

		private var _pauseButton:Button;

		public function HUDGameComponent()
		{
			createTextFields();
			createButtons();
		}

		private function createButtons():void
		{
			_pauseButton = StarlingFactory.getButton( AssetsInfo.BUTTON_PAUSE );
			_pauseButton.pivotX = _pauseButton.width;
			_pauseButton.x = ViewPortSize.MAX_WIDTH - MagicValues.BORDER_OFFSET;
			_pauseButton.y = MagicValues.BORDER_OFFSET;
			addChild( _pauseButton );
		}

		private function createTextFields():void
		{
			var gameLabel:TextField = StarlingFactory.getTextField( 100, Texts.TETRIS, Colors.DYNAMIC_TEXT, "left" );
			gameLabel.x = MagicValues.BORDER_OFFSET;
			gameLabel.y = 24;
			addChild( gameLabel );

			_levelText = new DoubleTextField( Texts.LEVEL );
			_levelText.x = ViewPortSize.MAX_WIDTH - MagicValues.BORDER_OFFSET;
			_levelText.y = 184;
			addChild( _levelText );

			_scoreText = new DoubleTextField( Texts.SCORE );
			_scoreText.x = ViewPortSize.MAX_WIDTH - MagicValues.BORDER_OFFSET;
			_scoreText.y = 252;
			addChild( _scoreText );

			_linesText = new DoubleTextField( Texts.LINES );
			_linesText.x = ViewPortSize.MAX_WIDTH - MagicValues.BORDER_OFFSET;
			_linesText.y = 318;
			addChild( _linesText );

			_hiScoreText = new DoubleTextField( Texts.HI_SCORE );
			_hiScoreText.x = ViewPortSize.MAX_WIDTH - MagicValues.BORDER_OFFSET;
			_hiScoreText.y = 386;
			addChild( _hiScoreText );
		}

		public function updateData( model:GameModel ):void
		{
			_linesText.text = model.lines.toString();
			_scoreText.text = model.score.toString();
			_levelText.text = model.level.toString();
			_hiScoreText.text = model.hiScore.toString();
		}

		public function get pauseButton():Button
		{
			return _pauseButton;
		}
	}
}
