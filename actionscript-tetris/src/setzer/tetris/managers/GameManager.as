package setzer.tetris.managers
{
	import setzer.tetris.models.Grid;
	import setzer.tetris.models.Tile;
	import setzer.tetris.models.TileGroup;
	import setzer.tetris.services.GameService;

	public class GameManager
	{
		[Inject]
		public var gameService:GameService;

		private var _grid:Grid;
		private var _currentPiece:TileGroup;
		private var _tilesToUpdate:Vector.<Tile>;
		private var _tilesToRemove:Vector.<Tile>;

		public function createEmpytGrid( cols:uint = 10, rows:uint = 20 ):void
		{
			_grid = new Grid( cols, rows );
			_tilesToUpdate = new Vector.<Tile>();
			_tilesToRemove = new Vector.<Tile>();
		}

		public function addPiece( currentPiece:TileGroup ):void
		{
			_currentPiece = currentPiece;
			_currentPiece.moveHorizontal( 4 );
			addTilesToUpdate( _currentPiece.tiles );

			validateGameOver();
		}

		private function validateGameOver():void
		{
			if ( isMovementValid() == false )
			{
				gameService.gameOver();
			}
		}

		public function tickUpdate():void
		{
			moveCurrentPieceDown();
		}

		public function solveCompletedRows():void
		{
			var linesRemoved:int = 0;

			var updateTiles:Vector.<Tile> = new Vector.<Tile>();
			var removeTiles:Vector.<Tile> = new Vector.<Tile>();

			var isToRemove:Boolean;
			var hasToUpdate:Boolean;

			var tile:Tile;

			for ( var row:int = _grid.maxRows - 1; row > 0; row-- )
			{
				isToRemove = true;
				for ( var col:int = 0; col < _grid.maxCols; col++ )
				{
					tile = _grid.getTile( col, row );

					if ( tile && hasToUpdate )
					{
						tile.setPosition( col, row );
						_tilesToUpdate.push( tile );
					}

					isToRemove &&= tile;
				}
				if ( isToRemove )
				{
					removeTiles = removeTiles.concat( _grid.removeRow( row ) );
					hasToUpdate = true;
					row++;
					linesRemoved++;
				}
			}

			if ( linesRemoved > 0 )
				gameService.increasePoints( linesRemoved );

			_tilesToUpdate = _tilesToUpdate.concat( updateTiles );
			_tilesToRemove = _tilesToRemove.concat( removeTiles );
		}

		public function isMovementValid():Boolean
		{
			for each ( var tile:Tile in _currentPiece.tiles )
			{
				if ( isOffBounds( tile ) || isNotEmptyTile( tile ) )
					return false;
			}
			return true;
		}

		private function isNotEmptyTile( tile:Tile ):Boolean
		{
			return !_grid.isEmptyTile( tile.col, tile.row );
		}

		private function isOffBounds( tile:Tile ):Boolean
		{
			return tile.col < 0 || tile.col >= _grid.maxCols || tile.row < 0 || tile.row >= _grid.maxRows;
		}

		public function addTilesToUpdate( tiles:Vector.<Tile> ):void
		{
			_tilesToUpdate = _tilesToUpdate.concat( tiles );
		}

		public function getTilesToUpdate():Vector.<Tile>
		{
			return _tilesToUpdate;
		}

		public function getTilesToRemove():Vector.<Tile>
		{
			return _tilesToRemove;
		}

		public function moveCurrentPieceLeft():void
		{
			_currentPiece.moveHorizontal( -1 );

			if ( isMovementValid() == false )
				_currentPiece.rollbackX(); else
				addTilesToUpdate( _currentPiece.tiles );
		}

		public function moveCurrentPieceRight():void
		{
			_currentPiece.moveHorizontal( 1 );

			if ( isMovementValid() == false )
				_currentPiece.rollbackX(); else
				addTilesToUpdate( _currentPiece.tiles );
		}

		public function rotateCurrentPiece():void
		{
			_currentPiece.rotate();

			if ( isMovementValid() == false )
				_currentPiece.rollback(); else
				addTilesToUpdate( _currentPiece.tiles );
		}

		public function moveCurrentPieceDown():void
		{
			_currentPiece.moveVertical();

			if ( isMovementValid() == false )
			{
				_currentPiece.rollbackY();

				for ( var i:int = 0; i < _currentPiece.tiles.length; i++ )
				{
					_grid.setTile( _currentPiece.tiles[i], _currentPiece.tiles[i].col, _currentPiece.tiles[i].row );
				}
				solveCompletedRows();
				gameService.getNextPiece();
			} else
				addTilesToUpdate( _currentPiece.tiles );
		}
	}
}
