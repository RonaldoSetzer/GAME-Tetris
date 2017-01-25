package setzer.tetris.views
{
	import com.greensock.TimelineLite;
	import com.greensock.TweenLite;
	import com.greensock.easing.Bounce;

	import setzer.tetris.factories.StarlingFactory;
	import setzer.tetris.utils.Colors;
	import setzer.tetris.utils.ViewPortSize;

	import starling.display.DisplayObject;
	import starling.display.Sprite;
	import starling.events.Event;
	import starling.text.TextField;

	public class StartingPopup extends Sprite
	{
		private var decreasingNumber:TextField;
		private var timeline:TimelineLite;
		private var count:int;
		private var background:DisplayObject;

		public function StartingPopup()
		{
			background = StarlingFactory.getShadowBackground();
			addChild( background );

			count = 3;

			decreasingNumber = StarlingFactory.getTextField( 40, "3", Colors.DYNAMIC_TEXT );
			decreasingNumber.alignPivot();
			decreasingNumber.x = ViewPortSize.HALF_WIDTH;
			decreasingNumber.y = ViewPortSize.HALF_HEIGHT;
			addChild( decreasingNumber );

			timeline = new TimelineLite( {onComplete:timeLineComplete} );
			timeline.append( new TweenLite( decreasingNumber, .4, {
				scaleX:1.5, scaleY:1.5, ease:Bounce.easeOut, onComplete:changeNumber
			} ) );
			timeline.append( new TweenLite( decreasingNumber, .4, {
				scaleX:1.5, scaleY:1.5, ease:Bounce.easeOut, onComplete:changeNumber
			} ) );
			timeline.append( new TweenLite( decreasingNumber, .4, {
				scaleX:1.5, scaleY:1.5, ease:Bounce.easeOut
			} ) );
			timeline.stop();
		}

		private function changeNumber():void
		{
			background.alpha -= .1;
			count -= 1;
			decreasingNumber.scaleX = .1;
			decreasingNumber.scaleY = .1;
			decreasingNumber.text = String( count );
		}

		private function timeLineComplete():void
		{
			timeline.stop();
			timeline = null;
			dispatchEvent( new Event( Event.COMPLETE ) );
		}

		public function destroy():void
		{
			removeFromParent();
		}

		public function start():void
		{
			timeline.restart();
		}
	}
}
