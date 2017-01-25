package setzer.tetris.mediators
{
	import robotlegs.bender.extensions.palidor.starlingIntegration.starlingViewMap.impl.StarlingMediator;

	import setzer.tetris.managers.SharedObjectManager;
	import setzer.tetris.views.ResetConfimPopup;

	import starling.events.Event;

	public class ResetConfirmPopupMediator extends StarlingMediator
	{
		[Inject]
		public var view:ResetConfimPopup;

		[Inject]
		public var sharedObjectManager:SharedObjectManager;

		override public function initialize():void
		{
			eventMap.mapListener( view.confirmButton, Event.TRIGGERED, confirmButton_onTriggeredHandler );
			eventMap.mapListener( view.cancelButton, Event.TRIGGERED, cancelButton_onTriggeredHandler );
		}

		private function confirmButton_onTriggeredHandler( e:Event ):void
		{
			sharedObjectManager.clear();
			view.removeFromParent();
		}

		private function cancelButton_onTriggeredHandler( e:Event ):void
		{
			view.removeFromParent();
		}

		override public function destroy():void
		{
			eventMap.unmapListeners();
		}
	}
}
