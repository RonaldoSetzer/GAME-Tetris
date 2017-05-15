import { FlowViewMapping } from "./FlowViewMapping";
import { IFlowManager } from "./../api/IFlowManager";
import { IFlowViewMapping } from "./../api/IFlowViewMapping";
import { IFlowContainer } from "./../api/IFlowContainer";

import { injectable, inject, IEventMap, IEventDispatcher } from "robotlegs";

@injectable()
export class FlowManager implements IFlowManager {

    @inject(IEventMap)
    public eventMap: IEventMap;

    @inject(IEventDispatcher)
    public eventDispatcher: IEventDispatcher;

    public flowContainer: IFlowContainer;

    private _views: Map<string, any>;

    constructor() {
        this._views = new Map<string, any>();
    }

    public setFlowContainer(container: IFlowContainer): void {
        this.flowContainer = container;
    }

    public map(event: string): IFlowViewMapping {
        let clazz = this._views.get(event);
        if (clazz != null) {
            return null;
        }
        return new FlowViewMapping(event, this);
    }
    public mapView(eventString: string, viewClass: any): void {
        this._views.set(eventString, viewClass);
        this.eventMap.mapListener(this.eventDispatcher, eventString, this.onSetCurrentView, this);
    }

    public mapFloatingView(eventString: string, viewClass: any): void {
        this._views.set(eventString, viewClass);
        this.eventMap.mapListener(this.eventDispatcher, eventString, this.onAddFloatingView, this);
    }

    public mapRemoveCurrentView(eventString: string): void {
        this.eventMap.mapListener(this.eventDispatcher, eventString, this.onRemoveCurrentView, this);
    }

    public mapRemoveLastFloatingView(eventString: string): void {
        this.eventMap.mapListener(this.eventDispatcher, eventString, this.onRemoveLastFloatingView, this);
    }

    public mapRemoveAllFloatingViews(eventString: string): void {
        this.eventMap.mapListener(this.eventDispatcher, eventString, this.onRemoveAllFloatingView, this);
    }

    private onSetCurrentView(e: any): void {

        let clazz = this._views.get(e.type);
        if (clazz != null) {
            this.flowContainer.setView(new clazz());
        }
    }

    private onAddFloatingView(e: any): void {
        let clazz = this._views.get(e.type);
        if (clazz != null) {
            this.flowContainer.addView(new clazz());
        }
    }

    private onRemoveCurrentView(): void {
        this.flowContainer.removeCurrentView();
    }

    private onRemoveLastFloatingView(): void {
        this.flowContainer.removeLastFloatingView();
    }

    private onRemoveAllFloatingView(): void {
        this.flowContainer.removeAllFloatingViews();
    }
}
