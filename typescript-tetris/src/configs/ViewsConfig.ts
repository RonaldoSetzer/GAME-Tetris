import { IConfig, inject, injectable } from "@robotlegsjs/core";
import { IMediatorMap } from "@robotlegsjs/pixi";

import { GameOverPopupMediator } from "./../mediators/GameOverPopupMediator";
import { GameViewMediator } from "./../mediators/GameViewMediator";
import { GridComponentMediator } from "./../mediators/GridComponentMediator";
import { HomeViewMediator } from "./../mediators/HomeViewMediator";
import { HUDGameComponentMediator } from "./../mediators/HUDGameComponentMediator";
import { InfoPopupMediator } from "./../mediators/InfoPopupMediator";
import { IntroViewMediator } from "./../mediators/IntroViewMediator";
import { NextPieceComponentMediator } from "./../mediators/NextPieceComponentMediator";
import { OptionsViewMediator } from "./../mediators/OptionsViewMediator";
import { PausePopupMediator } from "./../mediators/PausePopupMediator";
import { ResetConfirmPopupMediator } from "./../mediators/ResetConfirmPopupMediator";
import { StartingPopupMediator } from "./../mediators/StartingPopupMediator";
import { GridComponent } from "./../views/components/GridComponent";
import { HUDGameComponent } from "./../views/components/HUDGameComponent";
import { NextPieceComponent } from "./../views/components/NextPieceComponent";
import { GameOverPopup } from "./../views/GameOverPopup";
import { GameView } from "./../views/GameView";
import { HomeView } from "./../views/HomeView";
import { InfoPopup } from "./../views/InfoPopup";
import { IntroView } from "./../views/IntroView";
import { OptionsView } from "./../views/OptionsView";
import { PausePopup } from "./../views/PausePopup";
import { ResetConfirmPopup } from "./../views/ResetConfirmPopup";
import { StartingPopup } from "./../views/StartingPopup";

@injectable()
export class ViewsConfig implements IConfig {
    @inject(IMediatorMap) private mediatorMap: IMediatorMap;

    public configure(): void {
        this.mapMediators();
    }
    private mapMediators(): void {
        this.mediatorMap.map(GameView).toMediator(GameViewMediator);
        this.mediatorMap.map(HomeView).toMediator(HomeViewMediator);
        this.mediatorMap.map(IntroView).toMediator(IntroViewMediator);
        this.mediatorMap.map(OptionsView).toMediator(OptionsViewMediator);

        this.mediatorMap.map(GridComponent).toMediator(GridComponentMediator);
        this.mediatorMap.map(HUDGameComponent).toMediator(HUDGameComponentMediator);
        this.mediatorMap.map(NextPieceComponent).toMediator(NextPieceComponentMediator);

        this.mediatorMap.map(GameOverPopup).toMediator(GameOverPopupMediator);
        this.mediatorMap.map(InfoPopup).toMediator(InfoPopupMediator);
        this.mediatorMap.map(PausePopup).toMediator(PausePopupMediator);
        this.mediatorMap.map(ResetConfirmPopup).toMediator(ResetConfirmPopupMediator);
        this.mediatorMap.map(StartingPopup).toMediator(StartingPopupMediator);
    }
}
