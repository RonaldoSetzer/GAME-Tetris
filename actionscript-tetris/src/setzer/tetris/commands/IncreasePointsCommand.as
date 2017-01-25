package setzer.tetris.commands
{
	import robotlegs.bender.extensions.commandCenter.api.ICommand;

	import setzer.tetris.events.GameEvent;
	import setzer.tetris.models.GameModel;
	import setzer.tetris.services.GameService;
	import setzer.tetris.utils.GameUtils;

	public class IncreasePointsCommand implements ICommand
	{

		[Inject]
		public var model:GameModel;

		[Inject]
		public var event:GameEvent;

		[Inject]
		public var gameService:GameService;

		public function execute():void
		{
			model.score += GameUtils.getPointsByLines( event.lines );
			model.level = GameUtils.getCurrentLevel( model.lines );
			model.lines += event.lines;

			gameService.updateData();
		}
	}
}
