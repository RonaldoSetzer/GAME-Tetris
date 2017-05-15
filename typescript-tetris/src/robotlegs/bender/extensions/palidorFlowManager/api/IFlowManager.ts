import { IFlowContainer } from "./IFlowContainer";
import { IFlowViewMapping } from "./IFlowViewMapping";

export let IFlowManager = Symbol("IFlowManager");
export interface IFlowManager {

    setFlowContainer(container:IFlowContainer):void;

    map(event: string): IFlowViewMapping;

}
