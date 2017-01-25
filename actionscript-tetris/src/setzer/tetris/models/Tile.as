package setzer.tetris.models
{
	public class Tile
	{
		public static const TILE_WIDTH:int = 18;

		public var row:int;
		public var col:int;
		public var bRow:int;
		public var bCol:int;

		public function Tile( col:int = 0, row:int = 0 )
		{
			this.col = col;
			this.row = row;
			bCol = col;
			bRow = row;
		}

		public function clone():Tile
		{
			var tile:Tile = new Tile();
			tile.col = col;
			tile.row = row;
			tile.bCol = bCol;
			tile.bRow = bRow;

			return tile;
		}

		public function setPosition( col:int, row:int ):void
		{
			this.col = col;
			this.row = row;
		}

		public function toString():String
		{
			return "tile_col_" + col + "_row_" + row;
		}

	}
}
