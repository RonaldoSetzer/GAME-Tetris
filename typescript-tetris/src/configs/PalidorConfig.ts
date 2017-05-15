
import { FlowEvent } from "./../events/FlowEvent";
import { FlowService } from "./../services/FlowService";

import { GameOverPopup } from "./../views/GameOverPopup";
import { GameView } from "./../views/GameView";
import { HomeView } from "./../views/HomeView";
import { InfoPopup } from "./../views/InfoPopup";
import { IntroView } from "./../views/IntroView";
import { OptionsView } from "./../views/OptionsView";
import { PausePopup } from "./../views/PausePopup";
import { ResetConfirmPopup } from "./../views/ResetConfirmPopup";
import { StartingPopup } from "./../views/StartingPopup";

import { IFlowManager } from "./../robotlegs/bender/extensions/palidorFlowManager/api/IFlowManager";
import { PixiContainer } from "./../robotlegs/bender/extensions/palidorFlowManager/impl/PixiContainer";

import { injectable, IConfig, inject, IContext } from "robotlegs";

@injectable()
export class PalidorConfig implements IConfig {

    @inject(IContext)
    public context: IContext;

    @inject(IFlowManager)
    public flowManager: IFlowManager;

    public configure(): void {
        this.mapPalidor();
    }

    private mapPalidor(): void {
        this.context.injector.bind(FlowService).to(FlowService).inSingletonScope();

        this.flowManager.map(FlowEvent.SHOW_GAME_VIEW).toView(GameView);
        this.flowManager.map(FlowEvent.SHOW_HOME_VIEW).toView(HomeView);
        this.flowManager.map(FlowEvent.SHOW_OPTIONS_VIEW).toView(OptionsView);

        this.flowManager.map(FlowEvent.SHOW_GAME_OVER_POPUP).toFloatingView(GameOverPopup);
        this.flowManager.map(FlowEvent.SHOW_INFO_POPUP).toFloatingView(InfoPopup);
        this.flowManager.map(FlowEvent.SHOW_PAUSE_POPUP).toFloatingView(PausePopup);
        this.flowManager.map(FlowEvent.SHOW_RESET_CONFIRM_POPUP).toFloatingView(ResetConfirmPopup);
        this.flowManager.map(FlowEvent.SHOW_STARTING_POPUP).toFloatingView(StartingPopup);

        this.flowManager.map(FlowEvent.CLOSE_POPUP).toRemoveLastFloatingView();
    }
}
