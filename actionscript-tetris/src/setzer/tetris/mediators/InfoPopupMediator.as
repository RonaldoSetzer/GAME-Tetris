package setzer.tetris.mediators
{
	import robotlegs.bender.extensions.palidor.starlingIntegration.starlingViewMap.impl.StarlingMediator;

	import setzer.tetris.services.FlowService;
	import setzer.tetris.views.InfoPopup;

	import starling.events.Event;

	public class InfoPopupMediator extends StarlingMediator
	{
		[Inject]
		public var view:InfoPopup;

		[Inject]
		public var service:FlowService;

		override public function initialize():void
		{
			eventMap.mapListener( view.closeButton, Event.TRIGGERED, closeButton_onTriggeredHandler );
		}

		private function closeButton_onTriggeredHandler( e:Event ):void
		{
			service.showStartingPopup();
			view.removeFromParent();
		}

		override public function destroy():void
		{
			eventMap.unmapListeners();
		}
	}
}
