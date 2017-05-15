import { IFlowViewMapping } from "./../api/IFlowViewMapping";
import { FlowManager } from "./FlowManager";

export class FlowViewMapping implements IFlowViewMapping {

    private _flowManager: FlowManager;
    private _event: string;

    constructor(event: string, flowManager: FlowManager) {
        this._event = event;
        this._flowManager = flowManager;
    }

    public toFloatingView(viewClass: any): void {
        this._flowManager.mapFloatingView(this._event, viewClass);
    }

    public toView(viewClass: any): void {
        this._flowManager.mapView(this._event, viewClass);
    }

    public toRemoveCurrentView(): void {
        this._flowManager.mapRemoveCurrentView(this._event);
    }

    public toRemoveLastFloatingView(): void {
        this._flowManager.mapRemoveLastFloatingView(this._event);
    }

    public toRemoveAllFloatingViews(): void {
        this._flowManager.mapRemoveAllFloatingViews(this._event);
    }
}
