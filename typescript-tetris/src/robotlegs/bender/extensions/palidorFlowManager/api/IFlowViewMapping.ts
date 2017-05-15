export interface IFlowViewMapping {

    toFloatingView(viewClass: any): void;

    toView(viewClass: any): void;

    toRemoveCurrentView(): void;

    toRemoveLastFloatingView(): void;

    toRemoveAllFloatingViews(): void;

}
