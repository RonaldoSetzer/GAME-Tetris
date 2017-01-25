package setzer.tetris.services
{
	import setzer.tetris.events.GameEvent;

	import starling.events.EventDispatcher;

	public class GameService
	{
		[Inject]
		public var dispatcher:EventDispatcher;

		public function createLevel():void
		{
			dispatcher.dispatchEventWith( GameEvent.CREATE_LEVEL );
		}

		public function pause():void
		{
			dispatcher.dispatchEventWith( GameEvent.PAUSE );
		}

		public function resume():void
		{
			dispatcher.dispatchEventWith( GameEvent.RESUME );
		}

		public function gameOver():void
		{
			dispatcher.dispatchEventWith( GameEvent.GAME_OVER );
		}

		public function clearGrid():void
		{
			dispatcher.dispatchEventWith( GameEvent.CLEAR_GRID );
		}


		public function getNextPiece():void
		{
			dispatcher.dispatchEventWith( GameEvent.GET_NEXT_PIECE );
		}

		public function increasePoints( linesRemoved:int ):void
		{
			var event:GameEvent = new GameEvent( GameEvent.INCREASE_POINTS );
			event.lines = linesRemoved;
			dispatcher.dispatchEvent( event );
		}


		public function updateData():void
		{
			dispatcher.dispatchEvent( new GameEvent( GameEvent.UPDATE_DATA ) );
		}

		public function updateNextPiece():void
		{
			dispatcher.dispatchEvent( new GameEvent( GameEvent.UPDATE_NEXT_PIECE, true ) );
		}


	}
}
