package setzer.tetris.configs
{
	import robotlegs.bender.extensions.mediatorMap.api.IMediatorMap;
	import robotlegs.bender.extensions.palidor.starlingCommandMap.api.IStarlingCommandMap;
	import robotlegs.bender.extensions.palidor.starlingIntegration.flowManager.api.IFlowManager;
	import robotlegs.bender.framework.api.IConfig;
	import robotlegs.bender.framework.api.IContext;

	import setzer.tetris.assets.Assets;
	import setzer.tetris.commands.CreateLevelCommand;
	import setzer.tetris.commands.GameOverCommand;
	import setzer.tetris.commands.GetNextPieceCommand;
	import setzer.tetris.commands.IncreasePointsCommand;
	import setzer.tetris.events.FlowEvent;
	import setzer.tetris.events.GameEvent;
	import setzer.tetris.managers.GameManager;
	import setzer.tetris.managers.SharedObjectManager;
	import setzer.tetris.mediators.ConfigViewMediator;
	import setzer.tetris.mediators.GameOverPopupMediator;
	import setzer.tetris.mediators.GameViewMediator;
	import setzer.tetris.mediators.GridComponentMediator;
	import setzer.tetris.mediators.HUDGameComponentMediator;
	import setzer.tetris.mediators.HomeViewMediator;
	import setzer.tetris.mediators.InfoPopupMediator;
	import setzer.tetris.mediators.IntroViewMediator;
	import setzer.tetris.mediators.NextPieceComponentMediator;
	import setzer.tetris.mediators.PausePopupMediator;
	import setzer.tetris.mediators.ResetConfirmPopupMediator;
	import setzer.tetris.mediators.StartingPopupMediator;
	import setzer.tetris.models.GameModel;
	import setzer.tetris.services.FlowService;
	import setzer.tetris.services.GameService;
	import setzer.tetris.utils.TilePool;
	import setzer.tetris.views.ConfigView;
	import setzer.tetris.views.GameOverPopup;
	import setzer.tetris.views.GameView;
	import setzer.tetris.views.HomeView;
	import setzer.tetris.views.InfoPopup;
	import setzer.tetris.views.IntroView;
	import setzer.tetris.views.PausePopup;
	import setzer.tetris.views.ResetConfimPopup;
	import setzer.tetris.views.StartingPopup;
	import setzer.tetris.views.components.GridComponent;
	import setzer.tetris.views.components.HUDGameComponent;
	import setzer.tetris.views.components.NextPieceComponent;

	import starling.events.EventDispatcher;

	public class GameConfig implements IConfig
	{
		[Inject]
		public var eventDispatcher:EventDispatcher;

		[Inject]
		public var mediatorMap:IMediatorMap;

		[Inject]
		public var context:IContext;

		[Inject]
		public var flowManager:IFlowManager;

		[Inject]
		public var commandMap:IStarlingCommandMap;

		public function configure():void
		{
			context.afterInitializing( init );
		}

		private function init():void
		{
			Assets.init();
			TilePool.init();

			mapModels();
			mapServices();
			mapMediators();
			mapCommands();
			mapManager();
			mapFlowManager();

			eventDispatcher.dispatchEvent( new FlowEvent( FlowEvent.SHOW_INTRO_VIEW ) );
		}

		private function mapManager():void
		{
			context.injector.map( GameManager ).asSingleton();
			context.injector.map( SharedObjectManager ).asSingleton();
		}

		private function mapCommands():void
		{
			commandMap.map( GameEvent.CREATE_LEVEL ).toCommand( CreateLevelCommand );
			commandMap.map( GameEvent.GET_NEXT_PIECE ).toCommand( GetNextPieceCommand );
			commandMap.map( GameEvent.INCREASE_POINTS ).toCommand( IncreasePointsCommand );
			commandMap.map( GameEvent.GAME_OVER ).toCommand( GameOverCommand );
		}

		private function mapModels():void
		{
			context.injector.map( GameModel ).asSingleton();
		}

		private function mapServices():void
		{
			context.injector.map( FlowService ).asSingleton();
			context.injector.map( GameService ).asSingleton();
		}

		private function mapMediators():void
		{
			mediatorMap.map( IntroView ).toMediator( IntroViewMediator );
			mediatorMap.map( HomeView ).toMediator( HomeViewMediator );
			mediatorMap.map( ConfigView ).toMediator( ConfigViewMediator );
			mediatorMap.map( GameView ).toMediator( GameViewMediator );

			mediatorMap.map( GridComponent ).toMediator( GridComponentMediator );
			mediatorMap.map( NextPieceComponent ).toMediator( NextPieceComponentMediator );
			mediatorMap.map( HUDGameComponent ).toMediator( HUDGameComponentMediator );

			mediatorMap.map( StartingPopup ).toMediator( StartingPopupMediator );
			mediatorMap.map( PausePopup ).toMediator( PausePopupMediator );
			mediatorMap.map( GameOverPopup ).toMediator( GameOverPopupMediator );
			mediatorMap.map( ResetConfimPopup ).toMediator( ResetConfirmPopupMediator );
			mediatorMap.map( InfoPopup ).toMediator( InfoPopupMediator );
		}

		private function mapFlowManager():void
		{
			flowManager.map( FlowEvent.SHOW_INTRO_VIEW ).toView( IntroView );
			flowManager.map( FlowEvent.SHOW_HOME_VIEW ).toView( HomeView );
			flowManager.map( FlowEvent.SHOW_GAME_VIEW ).toView( GameView );
			flowManager.map( FlowEvent.SHOW_CONIFG_VIEW ).toView( ConfigView );

			flowManager.map( FlowEvent.SHOW_STARTING_POPUP ).toFloatingView( StartingPopup );
			flowManager.map( FlowEvent.SHOW_PAUSE_POPUP ).toFloatingView( PausePopup );
			flowManager.map( FlowEvent.SHOW_GAME_OVER_POPUP ).toFloatingView( GameOverPopup );
			flowManager.map( FlowEvent.SHOW_RESET_CONFIRM_POPUP ).toFloatingView( ResetConfimPopup );
			flowManager.map( FlowEvent.SHOW_INFO_POPUP ).toFloatingView( InfoPopup );
		}
	}
}
