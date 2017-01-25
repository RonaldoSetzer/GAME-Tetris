package setzer.tetris.views.components
{
	import setzer.tetris.factories.StarlingFactory;
	import setzer.tetris.utils.Colors;

	import starling.display.Sprite;
	import starling.text.TextField;

	public class DoubleTextField extends Sprite
	{
		private var _text:TextField;

		public function DoubleTextField( label:String )
		{
			var labelField:TextField = StarlingFactory.getTextField( 120, label, Colors.STATIC_TEXT, "right" );
			labelField.pivotX = labelField.width;
			addChild( labelField );

			_text = StarlingFactory.getTextField( 80, "0", Colors.DYNAMIC_TEXT, "right" );
			_text.pivotX = _text.width;
			_text.y = labelField.y + 30;
			addChild( _text );
		}

		public function get text():String
		{
			return _text.text;
		}

		public function set text( value:String ):void
		{
			_text.text = value;
		}
	}
}
