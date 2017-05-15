import { IFlowContainer } from "./../api/IFlowContainer";
import { Container } from "pixi.js";

export class PixiContainer extends Container implements IFlowContainer {

    private _currentView: Container;
    private _floatingViews: Container[];

    constructor() {
        super();

        this._floatingViews = new Array<Container>();
    }

    public addView(view: any): void {
        if (this._floatingViews.indexOf(view) === -1) {
            this._floatingViews.push(view);
            this.addChild(view);
        }
    }

    public setView(view: any): void {
        this.removeCurrentView();

        this._currentView = view;
        this.addChildAt(view, 0);
    }

    public removeCurrentView(): void {
        if (this._currentView != null) {
            this.removeChild(this._currentView);
        }
    }

    public removeLastFloatingView(): void {
        if (this._floatingViews.length > 0) {
            this.removeChild(this._floatingViews.pop());
        }
    }

    public removeAllFloatingViews(): void {
        while (this._floatingViews.length > 0) {
            this.removeChild(this._floatingViews.pop());
        }
    }
}
