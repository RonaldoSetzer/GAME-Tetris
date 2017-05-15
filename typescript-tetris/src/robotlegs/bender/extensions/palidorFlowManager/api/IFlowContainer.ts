export interface IFlowContainer {

    addView(view: any): void;

    setView(view: any): void;

    removeCurrentView(): void;

    removeLastFloatingView(): void;

    removeAllFloatingViews(): void;

}
