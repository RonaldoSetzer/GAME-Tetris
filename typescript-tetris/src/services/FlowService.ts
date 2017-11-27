import { EventDispatcher, IEventDispatcher, inject, injectable } from "@robotlegsjs/core";
import { PalidorEvent } from "@robotlegsjs/pixi-palidor";

import { FlowEvent } from "./../events/FlowEvent";

@injectable()
export class FlowService {
    @inject(IEventDispatcher) private eventDispatcher: IEventDispatcher;

    // Views
    public setGameView(): void {
        this.dispatchEventWith(FlowEvent.SHOW_GAME_VIEW);
    }
    public setHomeView(): void {
        this.dispatchEventWith(FlowEvent.SHOW_HOME_VIEW);
    }
    public setOptionsView(): void {
        this.dispatchEventWith(FlowEvent.SHOW_OPTIONS_VIEW);
    }
    // Floating Views
    public showGameOverPopup(): void {
        this.dispatchEventWith(FlowEvent.SHOW_GAME_OVER_POPUP);
    }
    public showInfoPopup(): void {
        this.dispatchEventWith(FlowEvent.SHOW_INFO_POPUP);
    }
    public showPausePopup(): void {
        this.dispatchEventWith(FlowEvent.SHOW_PAUSE_POPUP);
    }
    public showResetConfirmPopup(): void {
        this.dispatchEventWith(FlowEvent.SHOW_RESET_CONFIRM_POPUP);
    }
    public showStartingPopup(): void {
        this.dispatchEventWith(FlowEvent.SHOW_STARTING_POPUP);
    }
    // extras
    public closePopup(): void {
        this.dispatchEventWith(PalidorEvent.REMOVE_LAST_FLOATING_VIEW_ADDED);
    }
    public dispatchEventWith(type: string): void {
        (<EventDispatcher>this.eventDispatcher).dispatchEventWith(type);
    }
}
