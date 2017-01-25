package setzer.tetris.mediators
{
	import robotlegs.bender.extensions.palidor.starlingIntegration.starlingViewMap.impl.StarlingMediator;

	import setzer.tetris.events.GameEvent;
	import setzer.tetris.models.GameModel;
	import setzer.tetris.services.FlowService;
	import setzer.tetris.services.GameService;
	import setzer.tetris.views.components.HUDGameComponent;

	import starling.events.Event;

	public class HUDGameComponentMediator extends StarlingMediator
	{
		[Inject]
		public var view:HUDGameComponent;

		[Inject]
		public var model:GameModel;

		[Inject]
		public var gameService:GameService;

		[Inject]
		public var flowService:FlowService;

		override public function initialize():void
		{
			eventMap.mapListener( view.pauseButton, Event.TRIGGERED, pauseButton_onTriggeredHandler );
			eventMap.mapListener( eventDispatcher, GameEvent.UPDATE_DATA, game_onUpdateHandler );
		}

		private function game_onUpdateHandler( e:Event ):void
		{
			view.updateData( model );
		}

		private function pauseButton_onTriggeredHandler( e:Event ):void
		{
			e.stopImmediatePropagation();

			gameService.pause();
			flowService.showPausePopup();
		}

		override public function destroy():void
		{
			eventMap.unmapListeners();
		}
	}
}
