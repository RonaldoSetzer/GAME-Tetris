package setzer.tetris.commands
{
	import robotlegs.bender.extensions.commandCenter.api.ICommand;

	import setzer.tetris.managers.SharedObjectManager;
	import setzer.tetris.models.GameModel;
	import setzer.tetris.models.GameStatus;
	import setzer.tetris.services.FlowService;

	public class GameOverCommand implements ICommand
	{
		[Inject]
		public var model:GameModel;

		[Inject]
		public var flowService:FlowService;

		[Inject]
		public var sharedObjectManager:SharedObjectManager;

		public function execute():void
		{
			model.status = GameStatus.GAMEOVER;

			sharedObjectManager.updateHighScore();

			flowService.showGameOverPopup();
		}
	}
}
