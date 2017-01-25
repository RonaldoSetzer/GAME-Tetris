package setzer.tetris.views
{
	import com.greensock.TimelineLite;
	import com.greensock.TweenLite;

	import setzer.tetris.factories.StarlingFactory;
	import setzer.tetris.utils.Colors;
	import setzer.tetris.utils.Texts;
	import setzer.tetris.utils.ViewPortSize;

	import starling.display.Sprite;
	import starling.text.TextField;

	public class IntroView extends Sprite
	{
		private var _txt:TextField;

		public function IntroView()
		{
			addChild( StarlingFactory.getColorBackground());

			_txt = StarlingFactory.getTextField( 300, Texts.DEVELOPER, Colors.DYNAMIC_TEXT );
			_txt.alignPivot();
			_txt.x = ViewPortSize.HALF_WIDTH;
			_txt.y = ViewPortSize.HALF_HEIGHT;
			_txt.alpha = 0;
			addChild( _txt );
		}

		public function playAnimation():void
		{
			var timeline:TimelineLite = new TimelineLite();
			timeline.append( new TweenLite( _txt, .8, {scaleX:1.2, scaleY:1.2, alpha:1} ) );
			timeline.append( new TweenLite( _txt, 1.2, {scaleX:1.2, scaleY:1.2, alpha:1} ) );
			timeline.append( new TweenLite( _txt, .3, {scaleX:1, scaleY:1, alpha:0} ) );
		}
	}
}
