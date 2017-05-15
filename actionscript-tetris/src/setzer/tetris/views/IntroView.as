package setzer.tetris.views
{
	import com.greensock.TimelineLite;
	import com.greensock.TweenLite;

	import setzer.tetris.assets.Embeds;

	import setzer.tetris.factories.StarlingFactory;
	import setzer.tetris.utils.Colors;
	import setzer.tetris.utils.Texts;
	import setzer.tetris.utils.ViewPortSize;

	import starling.display.Image;

	import starling.display.Sprite;
	import starling.text.TextField;
	import starling.textures.Texture;

	public class IntroView extends Sprite
	{
		private var _txt:TextField;
		private var _logo:Image;

		public function IntroView()
		{
			addChild( StarlingFactory.getColorBackground() );

			_txt = StarlingFactory.getTextField( 300, Texts.DEVELOPER, Colors.DYNAMIC_TEXT );
			_txt.alignPivot();
			_txt.x = ViewPortSize.HALF_WIDTH;
			_txt.y = ViewPortSize.HALF_HEIGHT;
			_txt.alpha = 0;
			addChild( _txt );

			_logo = new Image( Texture.fromEmbeddedAsset( Embeds.LANGUAGE_IMAGE ) );
			_logo.pivotX = _logo.width * .5;
			_logo.x = ViewPortSize.HALF_WIDTH;
			_logo.y = ViewPortSize.MAX_HEIGHT - _logo.height;
			_logo.alpha = 0;
			addChild( _logo );

		}

		public function playAnimation():void
		{
			var timeline:TimelineLite = new TimelineLite();
			timeline.append( new TweenLite( _txt, .8, {scaleX:1.2, scaleY:1.2, alpha:1} ) );
			timeline.append( new TweenLite( _txt, 2, {scaleX:1.2, scaleY:1.2, alpha:1} ) );
			timeline.append( new TweenLite( _txt, .3, {scaleX:1, scaleY:1, alpha:0} ) );

			var timelineLogo:TimelineLite = new TimelineLite();
			timelineLogo.append( new TweenLite( _logo, .8, {alpha:1} ) );
			timelineLogo.append( new TweenLite( _logo, 2, {alpha:1} ) );
			timelineLogo.append( new TweenLite( _logo, .3, {alpha:0} ) );
		}
	}
}
