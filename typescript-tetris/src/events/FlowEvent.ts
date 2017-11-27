import { Event } from "@robotlegsjs/core";

export class FlowEvent extends Event {
    public static SHOW_GAME_VIEW = "showGameView";
    public static SHOW_HOME_VIEW = "showHomeView";
    public static SHOW_INTRO_VIEW = "showIntroView";
    public static SHOW_OPTIONS_VIEW = "showOptionsView";

    public static SHOW_GAME_OVER_POPUP = "showGameOverPopup";
    public static SHOW_INFO_POPUP = "showInfoPopup";
    public static SHOW_PAUSE_POPUP = "showPausePopup";
    public static SHOW_RESET_CONFIRM_POPUP = "showResetConfirmPopup";
    public static SHOW_STARTING_POPUP = "showStartingPopup";

    public static CLOSE_POPUP = "closePopup";

    constructor(type: string) {
        super(type);
    }
}
