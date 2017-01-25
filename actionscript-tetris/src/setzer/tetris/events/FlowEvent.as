package setzer.tetris.events
{
	import starling.events.Event;

	public class FlowEvent extends Event
	{
		public static const SHOW_INTRO_VIEW:String = "showIntroView";
		public static const SHOW_HOME_VIEW:String = "showHomeView";
		public static const SHOW_GAME_VIEW:String = "showHUDGameView";
		public static const SHOW_CONIFG_VIEW:String = "showConfigView";

		public static const SHOW_STARTING_POPUP:String = "showStartingPopup";
		public static const SHOW_PAUSE_POPUP:String = "showPausePopup";
		public static const SHOW_GAME_OVER_POPUP:String = "showGameOverPopup";
		public static const SHOW_RESET_CONFIRM_POPUP:String = "showResetConfirmPopup";
		public static const SHOW_INFO_POPUP:String = "showInfoPopup";


		public function FlowEvent( type:String, bubbles:Boolean = false, data:Object = null )
		{
			super( type, bubbles, data );
		}
	}
}
