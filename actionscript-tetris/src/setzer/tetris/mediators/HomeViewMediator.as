package setzer.tetris.mediators
{
	import robotlegs.bender.extensions.palidor.starlingIntegration.starlingViewMap.impl.StarlingMediator;

	import setzer.tetris.services.FlowService;
	import setzer.tetris.views.HomeView;

	import starling.events.Event;

	public class HomeViewMediator extends StarlingMediator
	{
		[Inject]
		public var view:HomeView;

		[Inject]
		public var service:FlowService;

		override public function initialize():void
		{
			eventMap.mapListener( view.configButton, Event.TRIGGERED, configButton_onTriggeredHandler );
			eventMap.mapListener( view.startButton, Event.TRIGGERED, startButton_onTriggeredHandler );
		}

		private function configButton_onTriggeredHandler( e:Event ):void
		{
			service.setConfigView();
		}

		private function startButton_onTriggeredHandler( e:Event ):void
		{
			service.setHUDGameView();
		}

		override public function destroy():void
		{
			eventMap.unmapListeners();
		}
	}
}
