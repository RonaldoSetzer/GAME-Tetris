package setzer.tetris.mediators
{
	import robotlegs.bender.extensions.palidor.starlingIntegration.starlingViewMap.impl.StarlingMediator;

	import setzer.tetris.services.FlowService;
	import setzer.tetris.views.ConfigView;

	import starling.events.Event;

	public class ConfigViewMediator extends StarlingMediator
	{
		[Inject]
		public var view:ConfigView;

		[Inject]
		public var service:FlowService;

		override public function initialize():void
		{
			eventMap.mapListener( view.homeButton, Event.TRIGGERED, homeButton_onTriggeredHandler )
			eventMap.mapListener( view.resetButton, Event.TRIGGERED, resetButton_onTriggeredHandler )
		}

		private function homeButton_onTriggeredHandler( e:Event ):void
		{
			service.setHomeView();
		}

		private function resetButton_onTriggeredHandler( e:Event ):void
		{
			service.showResetConfirmPopup();
		}

		override public function destroy():void
		{
			eventMap.unmapListeners();
		}
	}
}
