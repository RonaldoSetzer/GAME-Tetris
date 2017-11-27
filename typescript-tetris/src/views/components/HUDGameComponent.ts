import { Container, Text } from "pixi.js";

import { GameModel } from "./../../models/GameModel";
import { AtlasKeys } from "./../../utils/AtlasKeys";
import { Colors } from "./../../utils/Colors";
import { MagicValues } from "./../../utils/MagicValues";
import { PixiFactory } from "./../../utils/PixiFactory";
import { Texts } from "./../../utils/Texts";
import { ViewPortSize } from "./../../utils/ViewPortSize";
import { CustomButton } from "./CustomButton";
import { DoubleTextField } from "./DoubleTextField";

export class HUDGameComponent extends Container {
    private _linesText: DoubleTextField;
    private _scoreText: DoubleTextField;
    private _levelText: DoubleTextField;
    private _hiScoreText: DoubleTextField;

    private _pauseButton: CustomButton;
    public get pauseButton(): CustomButton {
        return this._pauseButton;
    }

    constructor() {
        super();

        this.createTextFields();
        this.createButtons();
    }
    public updateData(model: GameModel): void {
        this._linesText.text = String(model.lines);
        this._scoreText.text = String(model.score);
        this._levelText.text = String(model.level);
        this._hiScoreText.text = "0"; // String(model.hiScore);
    }
    private createButtons(): void {
        this._pauseButton = PixiFactory.getButton(AtlasKeys.BUTTON_PAUSE);
        this._pauseButton.x = ViewPortSize.MAX_WIDTH - 32;
        this._pauseButton.y = MagicValues.BORDER_OFFSET + 15;
        this.addChild(this._pauseButton);
    }
    private createTextFields(): void {
        const gameLabel: Text = PixiFactory.getText(Texts.TETRIS, Colors.DYNAMIC_TEXT);
        gameLabel.x = MagicValues.BORDER_OFFSET;
        gameLabel.y = 24;
        this.addChild(gameLabel);

        this._levelText = new DoubleTextField(Texts.LEVEL);
        this._levelText.x = ViewPortSize.MAX_WIDTH - MagicValues.BORDER_OFFSET;
        this._levelText.y = 184;
        this.addChild(this._levelText);

        this._scoreText = new DoubleTextField(Texts.SCORE);
        this._scoreText.x = ViewPortSize.MAX_WIDTH - MagicValues.BORDER_OFFSET;
        this._scoreText.y = 252;
        this.addChild(this._scoreText);

        this._linesText = new DoubleTextField(Texts.LINES);
        this._linesText.x = ViewPortSize.MAX_WIDTH - MagicValues.BORDER_OFFSET;
        this._linesText.y = 318;
        this.addChild(this._linesText);

        this._hiScoreText = new DoubleTextField(Texts.HI_SCORE);
        this._hiScoreText.x = ViewPortSize.MAX_WIDTH - MagicValues.BORDER_OFFSET;
        this._hiScoreText.y = 386;
        this.addChild(this._hiScoreText);
    }
}
