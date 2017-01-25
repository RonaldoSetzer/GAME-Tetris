package setzer.tetris.services
{
	import setzer.tetris.events.FlowEvent;

	import starling.events.EventDispatcher;

	public class FlowService
	{
		[Inject]
		public var eventDispatcher:EventDispatcher;

		//Views
		public function setHUDGameView():void
		{
			eventDispatcher.dispatchEventWith( FlowEvent.SHOW_GAME_VIEW );
		}

		public function setHomeView():void
		{
			eventDispatcher.dispatchEventWith( FlowEvent.SHOW_HOME_VIEW );
		}

		public function setConfigView():void
		{
			eventDispatcher.dispatchEventWith( FlowEvent.SHOW_CONIFG_VIEW );
		}

		//Floating Views
		public function showStartingPopup():void
		{
			eventDispatcher.dispatchEventWith( FlowEvent.SHOW_STARTING_POPUP );
		}

		public function showGameOverPopup():void
		{
			eventDispatcher.dispatchEventWith( FlowEvent.SHOW_GAME_OVER_POPUP );
		}

		public function showResetConfirmPopup():void
		{
			eventDispatcher.dispatchEventWith( FlowEvent.SHOW_RESET_CONFIRM_POPUP );
		}

		public function showPausePopup():void
		{
			eventDispatcher.dispatchEventWith( FlowEvent.SHOW_PAUSE_POPUP );
		}

		public function showInfoPopup():void
		{
			eventDispatcher.dispatchEventWith( FlowEvent.SHOW_INFO_POPUP );
		}
	}
}
