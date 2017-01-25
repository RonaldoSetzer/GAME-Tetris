package setzer.tetris.models
{
	public class GameModel
	{
		public var score:int;
		public var level:int;
		public var lines:int;
		public var hiScore:int;

		public var currentPiece:TileGroup;
		public var nextPiece:TileGroup;

		public var status:String;

		public function GameModel()
		{
			clear();
		}

		public function clear():void
		{
			score = 0;
			level = 1;
			lines = 0;
		}
	}
}
