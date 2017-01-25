package setzer.tetris.commands
{
	import robotlegs.bender.extensions.commandCenter.api.ICommand;

	import setzer.tetris.factories.TileGroupFactory;
	import setzer.tetris.managers.SharedObjectManager;
	import setzer.tetris.models.GameModel;
	import setzer.tetris.models.GameStatus;
	import setzer.tetris.services.FlowService;
	import setzer.tetris.services.GameService;

	public class CreateLevelCommand implements ICommand
	{
		[Inject]
		public var model:GameModel;

		[Inject]
		public var gameService:GameService;

		[Inject]
		public var flowService:FlowService;

		[Inject]
		public var sharedObjectManager:SharedObjectManager;

		public function execute():void
		{
			sharedObjectManager.getExternalData();

			model.clear();
			model.currentPiece = TileGroupFactory.getRandomTileGroup();
			model.nextPiece = TileGroupFactory.getRandomTileGroup();

			gameService.clearGrid();
			gameService.updateNextPiece();
			gameService.updateData();

			if ( model.status )
				flowService.showStartingPopup();
			else
				flowService.showInfoPopup();

			model.status = GameStatus.GAME;
		}
	}
}
