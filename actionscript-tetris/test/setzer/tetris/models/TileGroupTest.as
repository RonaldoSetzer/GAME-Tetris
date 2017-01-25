package setzer.tetris.models
{
	import org.flexunit.asserts.assertEquals;

	import setzer.tetris.factories.TileGroupFactory;

	public class TileGroupTest
	{
		private var tileGroup:TileGroup;
		private var tilesBackup:Vector.<Tile>;

		[Before]
		public function setup():void
		{
			tileGroup = TileGroupFactory.getRandomTileGroup();
			tilesBackup = generateTilesBackup( tileGroup.tiles );
		}

		private function generateTilesBackup( tiles:Vector.<Tile> ):Vector.<Tile>
		{
			var bkpTiles:Vector.<Tile> = new Vector.<Tile>();
			for ( var i:int = 0; i < tiles.length; i++ )
			{
				bkpTiles.push( tiles[i].clone() );

			}
			return bkpTiles;
		}

		[Test]
		public function testMoveVertical_down():void
		{
			tileGroup.moveVertical( 1 );

			var tile:Tile;
			var tileBefore:Tile;
			for ( var i:int = 0; i < tileGroup.tiles.length; i++ )
			{
				tile = tileGroup.tiles[i];
				tileBefore = tilesBackup[i];
				tileBefore.row += 1;

				assertEquals( tileBefore.col, tile.col );
				assertEquals( tileBefore.row, tile.row );
			}
		}

		[Test]
		public function testMoveVertical_up():void
		{
			tileGroup.moveVertical( -1 );

			var tile:Tile;
			var tileBefore:Tile;
			for ( var i:int = 0; i < tileGroup.tiles.length; i++ )
			{
				tile = tileGroup.tiles[i];
				tileBefore = tilesBackup[i];
				tileBefore.row -= 1;

				assertEquals( tileBefore.col, tile.col );
				assertEquals( tileBefore.row, tile.row );
			}
		}

		[Test]
		public function testMoveHorizontal_right():void
		{
			tileGroup.moveHorizontal( 1 );

			var tile:Tile;
			var tileBefore:Tile;
			for ( var i:int = 0; i < tileGroup.tiles.length; i++ )
			{
				tile = tileGroup.tiles[i];
				tileBefore = tilesBackup[i];
				tileBefore.col += 1;

				assertEquals( tileBefore.col, tile.col );
				assertEquals( tileBefore.row, tile.row );
			}
		}

		[Test]
		public function testMoveHorizontal_left():void
		{
			tileGroup.moveHorizontal( -1 );

			var tile:Tile;
			var tileBefore:Tile;
			for ( var i:int = 0; i < tileGroup.tiles.length; i++ )
			{
				tile = tileGroup.tiles[i];
				tileBefore = tilesBackup[i];
				tileBefore.col -= 1;

				assertEquals( tileBefore.col, tile.col );
				assertEquals( tileBefore.row, tile.row );
			}
		}

		[Test]
		public function testRotate():void
		{
			tileGroup.rotate();

			var tile:Tile;
			var tileBefore:Tile;

			var tempAnchor:Tile = tilesBackup[1];
			var tempTile:Tile = new Tile();
			for ( var i:int = 0; i < tileGroup.tiles.length; i++ )
			{
				tile = tileGroup.tiles[i];
				tileBefore = tilesBackup[i];

				tempTile.col = tileBefore.row - tempAnchor.row;
				tempTile.row = tileBefore.col - tempAnchor.col;
				tileBefore.col = tempAnchor.col - tempTile.col;
				tileBefore.row = tempAnchor.row + tempTile.row;

				assertEquals( tileBefore.col, tile.col );
				assertEquals( tileBefore.row, tile.row );
			}
		}

		[Test]
		public function testRollbackX():void
		{
			tileGroup.moveHorizontal( 1 );
			tileGroup.rollbackX();

			var tile:Tile;
			var tileBefore:Tile;

			for ( var i:int = 0; i < tileGroup.tiles.length; i++ )
			{
				tile = tileGroup.tiles[i];
				tileBefore = tilesBackup[i];

				assertEquals( tile.col, tileBefore.col );
				assertEquals( tile.col, tile.bCol );
			}
		}

		[Test]
		public function testRollbackY():void
		{
			tileGroup.moveVertical( 1 );
			tileGroup.rollbackY();

			var tile:Tile;
			var tileBefore:Tile;

			for ( var i:int = 0; i < tileGroup.tiles.length; i++ )
			{
				tile = tileGroup.tiles[i];
				tileBefore = tilesBackup[i];

				assertEquals( tile.row, tileBefore.row );
				assertEquals( tile.row, tile.bRow );
			}
		}

		[Test]
		public function testRollback():void
		{
			tileGroup.moveVertical( 1 );
			tileGroup.moveHorizontal( 1 );
			tileGroup.rollback();

			var tile:Tile;
			var tileBefore:Tile;

			for ( var i:int = 0; i < tileGroup.tiles.length; i++ )
			{
				tile = tileGroup.tiles[i];
				tileBefore = tilesBackup[i];

				assertEquals( tile.col, tileBefore.col );
				assertEquals( tile.row, tileBefore.row );

				assertEquals( tile.col, tile.bCol );
				assertEquals( tile.row, tile.bRow );
			}
		}
	}
}
