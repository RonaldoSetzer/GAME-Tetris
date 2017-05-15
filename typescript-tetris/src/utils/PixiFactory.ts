import { TileDisplay } from "./../views/components/TileDisplay";
import { CustomButton } from "./../views/components/CustomButton";
import { AtlasKeys } from "./AtlasKeys";
import { Colors } from "./Colors";
import { Texts } from "./Texts";
import { TilePool } from "./TilePool";
import { ViewPortSize } from "./ViewPortSize";

import { Graphics, Text, Container, Sprite, Texture } from "pixi.js";

export class PixiFactory {

    public static getColorBackground(color: number = Colors.BACKGROUND_DARK): Graphics {
        return this.getColorBox(ViewPortSize.MAX_WIDTH, ViewPortSize.MAX_HEIGHT, color);
    }

    public static getShadowBackground(): Graphics {
        let background: Graphics = this.getColorBox(ViewPortSize.MAX_WIDTH, ViewPortSize.MAX_HEIGHT);
        background.alpha = .6;
        return background;
    }

    public static getBoardBackground(): Container {
        let boardBackground: Graphics = this.getColorBox(ViewPortSize.MAX_WIDTH, 102, Colors.STATIC_TEXT);
        boardBackground.beginFill(Colors.BACKGROUND);
        boardBackground.drawRect(0, 1, ViewPortSize.MAX_WIDTH, 100);

        let board: Container = new Container();
        board.y = ViewPortSize.HALF_HEIGHT - 60;
        board.addChild(boardBackground);
        return board;
    }

    public static getButton(atlasKey: string): CustomButton {
        return new CustomButton(atlasKey);
    }

    public static getColorBox(width: number, heigth: number, color = 0x00000): Graphics {
        let background: Graphics = new Graphics();
        background.beginFill(color);
        background.drawRect(0, 0, width, heigth);
        return background;
    }

    public static getImage(atlasKey: string): Sprite {
        let texture: Texture = AtlasKeys.getTexture(atlasKey);
        return new Sprite(texture);
    }

    public static getText(text: string, color: number = Colors.DYNAMIC_TEXT, fontSize: number = Texts.FONT_SIZE_DEFAULT): Text {
        let style = new PIXI.TextStyle({
            align: "center",
            fill: color,
            fontFamily: "Arial",
            fontSize: fontSize,
            fontWeight: "bold"
        });

        return new PIXI.Text(text, style);
    }

    public static getTileDisplay(typeId: number): TileDisplay {
        return TilePool.getTileDisplay(typeId);
    }
}
