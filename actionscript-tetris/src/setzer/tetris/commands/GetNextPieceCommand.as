package setzer.tetris.commands
{
	import robotlegs.bender.extensions.commandCenter.api.ICommand;

	import setzer.tetris.factories.TileGroupFactory;
	import setzer.tetris.models.GameModel;
	import setzer.tetris.services.GameService;

	public class GetNextPieceCommand implements ICommand
	{
		[Inject]
		public var model:GameModel;

		[Inject]
		public var gameService:GameService;

		public function execute():void
		{
			model.currentPiece = model.nextPiece;
			model.nextPiece = TileGroupFactory.getRandomTileGroup();

			gameService.updateNextPiece();
			gameService.updateData();
		}
	}
}
