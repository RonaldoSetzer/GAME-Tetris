package setzer.tetris.events
{
	import starling.events.Event;

	public class GameEvent extends Event
	{
		public static const CREATE_LEVEL:String = "createLevel";
		public static const GAME_OVER:String = "gameOver";
		public static const CLEAR_GRID:String = "clearGrid";

		public static const RESUME:String = "resume";
		public static const PAUSE:String = "pause";

		public static const GET_NEXT_PIECE:String = "getNextPiece";
		public static const INCREASE_POINTS:String = "increasePoints";

		public static const UPDATE_DATA:String = "updateData";
		public static const UPDATE_NEXT_PIECE:String = "updateNextPiece";

		public var lines:int;

		public function GameEvent( type:String, bubbles:Boolean = false, data:Object = null )
		{
			super( type, bubbles, data );
		}
	}
}
