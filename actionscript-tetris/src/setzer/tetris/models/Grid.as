package setzer.tetris.models
{
	public class Grid
	{
		private var _maxCols:uint;
		private var _maxRows:uint;
		private var _grid:Vector.<Vector.<Tile>>;

		public function Grid( cols:uint = 10, rows:uint = 20 )
		{
			_grid = new Vector.<Vector.<Tile>>();
			_maxCols = cols;
			_maxRows = rows;

			generateEmptyGrid();
		}

		private function generateEmptyGrid():void
		{
			var line:Vector.<Tile>;
			for ( var row:int = 0; row < _maxRows; row++ )
			{
				line = new Vector.<Tile>();
				for ( var col:int = 0; col < _maxCols; col++ )
				{
					line.push( null );
				}
				_grid.push( line );
			}
		}

		public function removeRow( index:uint ):Vector.<Tile>
		{
			var removedRow:Vector.<Tile> = getRow( index );
			_grid.splice( index, 1 );

			insertNewEmpytRow(0);

			return removedRow;
		}

		private function insertNewEmpytRow( index:int ):void
		{
			var newRow:Vector.<Tile> = new Vector.<Tile>();
			for ( var i:int = 0; i < _maxCols; i++ )
			{
				newRow.push(null);
			}
			_grid.splice(index,0,newRow);
		}

		public function getRow( index:uint ):Vector.<Tile>
		{
			return _grid[index];
		}

		public function get maxCols():uint
		{
			return _maxCols;
		}

		public function get maxRows():uint
		{
			return _maxRows;
		}

		public function isEmptyTile( col:uint, row:uint ):Boolean
		{
			return (_grid[row][col] == null);
		}

		public function setTile( tile:Tile, col:int, row:int ):void
		{
			_grid[row][col] = tile;
		}

		public function getTile( col:int, row:int ):Tile
		{
			return _grid[row][col] || null;
		}
	}
}
