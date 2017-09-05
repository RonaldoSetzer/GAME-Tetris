import { AtlasKeys } from "./../utils/AtlasKeys";
import { FlowService } from "./../services/FlowService";
import { IntroView } from "../views/IntroView";

import { Mediator } from "@robotlegsjs/pixi";
import { inject, injectable } from "@robotlegsjs/core";

@injectable()
export class IntroViewMediator extends Mediator<IntroView> {

    @inject(FlowService)
    private flowService: FlowService;

    public initialize(): void {
        setTimeout(this.onTimerOut.bind(this), 3000, this);

        let loader = PIXI.loader
            .add(AtlasKeys.ATLAS_PNG)
            .add(AtlasKeys.ATLAS_XML)
            .load(this.onLoad);
    }

    public destroy(): void {
        this.eventMap.unmapListeners();
    }

    private onLoad() {
        AtlasKeys.update();
    }

    private onTimerOut() {
        this.flowService.setHomeView();
    }
}
