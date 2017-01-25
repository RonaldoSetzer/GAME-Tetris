package setzer.tetris.mediators
{
	import robotlegs.bender.extensions.palidor.starlingIntegration.starlingViewMap.impl.StarlingMediator;

	import setzer.tetris.services.FlowService;
	import setzer.tetris.services.GameService;
	import setzer.tetris.views.GameView;

	public class GameViewMediator extends StarlingMediator
	{
		[Inject]
		public var view:GameView;

		[Inject]
		public var gameService:GameService;
		[Inject]
		public var flowService:FlowService;

		override public function initialize():void
		{
			view.createComponents();

			gameService.createLevel();
		}

		override public function destroy():void
		{
			view.destroy();
		}
	}
}
