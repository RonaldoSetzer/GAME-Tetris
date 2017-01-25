package setzer.tetris.models
{
	import org.flexunit.Assert;

	public class GridTest
	{
		private var grid:Grid;

		[Before]
		public function setup():void
		{
			grid = new Grid();
		}


		[Test]
		public function testRemoveRow():void
		{
			var tile:Tile = new Tile( 0, 5 );
			grid.setTile( tile, 0, 5 );

			var removedRow:Vector.<Tile> = grid.removeRow( 5 );

			Assert.assertNull( grid.getTile( 0, 5 ) );
			Assert.assertEquals( tile, removedRow[0] );
			Assert.assertNull( grid.getTile( 0, grid.maxRows - 1 ) );
		}

		[Test]
		public function testGetRow():void
		{
			var tile:Tile = new Tile();
			grid.setTile( tile, 0, 0 );

			var gridRow:Vector.<Tile> = grid.getRow( 0 );

			Assert.assertEquals( tile, gridRow[0] );
		}

		[Test]
		public function testGenerateEmptyGrid():void
		{
			Assert.assertNotNull( grid.isEmptyTile( 0, 0 ) );
			Assert.assertNotNull( grid.isEmptyTile( grid.maxCols - 1, grid.maxRows - 1 ) );
		}

		[Test]
		public function testIsTileEmpty():void
		{
			grid.setTile( null, 0, 0 );
			Assert.assertTrue( grid.isEmptyTile( 0, 0 ) );

			grid.setTile( new Tile(), 0, 0 );
			Assert.assertFalse( grid.isEmptyTile( 0, 0 ) );
		}

		[Test]
		public function testGetTile():void
		{
			grid.setTile( null, 0, 0 );
			grid.setTile( new Tile( 1, 1 ), 1, 1 );

			Assert.assertNull( grid.getTile( 0, 0 ) );
			Assert.assertNotNull( grid.getTile( 1, 1 ) );
		}

		[Test]
		public function testSetTile():void
		{
			Assert.assertNull( grid.getTile( 0, 0 ) );

			var tile:Tile = new Tile();
			grid.setTile( tile, 0, 0 );

			Assert.assertEquals( tile, grid.getTile( 0, 0 ) );
		}
	}
}
