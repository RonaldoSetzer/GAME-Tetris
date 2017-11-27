import { Container, Sprite, Text } from "pixi.js";

import { AtlasKeys } from "./../utils/AtlasKeys";
import { Colors } from "./../utils/Colors";
import { PixiFactory } from "./../utils/PixiFactory";
import { Texts } from "./../utils/Texts";
import { ViewPortSize } from "./../utils/ViewPortSize";

export class IntroView extends Container {
    constructor() {
        super();

        this.setupBackground();
        this.setupImages();
        this.setupText();
    }

    private setupBackground(): void {
        this.addChild(PixiFactory.getColorBackground());
    }
    private setupImages(): void {
        const logo: Sprite = PIXI.Sprite.fromImage(AtlasKeys.LOGO_TYPESCRIPT);
        logo.anchor.x = 0.5;
        logo.x = ViewPortSize.HALF_WIDTH;
        logo.y = ViewPortSize.MAX_HEIGHT - 64;
        this.addChild(logo);
    }
    private setupText(): void {
        const title: Text = PixiFactory.getText(Texts.DEVELOPER, Colors.GAME_ITEMS, Texts.FONT_SIZE_DEFAULT + 6);
        title.anchor.set(0.5);
        title.x = ViewPortSize.HALF_WIDTH;
        title.y = ViewPortSize.HALF_HEIGHT;
        this.addChild(title);
    }
}
