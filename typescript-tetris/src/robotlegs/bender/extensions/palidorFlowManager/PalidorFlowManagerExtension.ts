import { FlowManager } from "./impl/FlowManager";
import { IFlowManager } from "./api/IFlowManager";
import { IContext, IExtension, IInjector } from "robotlegs";

export class PalidorFlowManagerExtension implements IExtension {

    private _flowManager: IFlowManager;

    public extend(context: IContext): void {

        context.injector.bind(IFlowManager).to(FlowManager).inSingletonScope();

    }
}
