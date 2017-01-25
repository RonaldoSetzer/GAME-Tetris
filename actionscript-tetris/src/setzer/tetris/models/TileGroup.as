package setzer.tetris.models
{
	public class TileGroup
	{
		private var _tiles:Vector.<Tile>;
		private var _typeId:int;

		public function TileGroup( typeId:int, tiles:Vector.<Tile> )
		{
			_typeId = typeId;
			_tiles = tiles;
		}

		public function moveVertical( direction:int = 1 ):void
		{
			for ( var i:int = 0; i < tiles.length; i++ )
			{
				_tiles[i].bRow = _tiles[i].row;
				_tiles[i].row += direction;
			}
		}

		public function moveHorizontal( direction:int ):void
		{
			for ( var i:int = 0; i < tiles.length; i++ )
			{
				_tiles[i].bCol = _tiles[i].col;
				_tiles[i].col += direction;
			}
		}

		public function rotate():void
		{
			var anchorTile:Tile = _tiles[1];
			var newTile:Tile = new Tile();
			for ( var i:int = 0; i < _tiles.length; i++ )
			{
				_tiles[i].bCol = _tiles[i].col;
				_tiles[i].bRow = _tiles[i].row;
				newTile.col = _tiles[i].row - anchorTile.row;
				newTile.row = _tiles[i].col - anchorTile.col;
				_tiles[i].col = anchorTile.col - newTile.col;
				_tiles[i].row = anchorTile.row + newTile.row;
			}
		}

		public function rollback():void
		{
			for ( var i:int = 0; i < _tiles.length; i++ )
			{
				_tiles[i].col = _tiles[i].bCol;
				_tiles[i].row = _tiles[i].bRow;
			}
		}

		public function rollbackX():void
		{
			for ( var i:int = 0; i < _tiles.length; i++ )
			{
				_tiles[i].col = _tiles[i].bCol;
			}
		}

		public function rollbackY():void
		{
			for ( var i:int = 0; i < _tiles.length; i++ )
			{
				_tiles[i].row = _tiles[i].bRow;
			}
		}

		public function get tiles():Vector.<Tile>
		{
			return _tiles;
		}

		public function get typeId():int
		{
			return _typeId;
		}
	}
}