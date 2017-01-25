package setzer.tetris.models
{
	import org.flexunit.Assert;

	public class TileTest
	{
		private var tile:Tile;

		[Before]
		public function setup():void
		{
			tile = new Tile();
		}

		[Test]
		public function testClone():void
		{
			tile.row = 1;
			tile.col = 1;

			var clone:Tile = tile.clone();

			Assert.assertEquals( tile.row, clone.row );
			Assert.assertEquals( tile.col, clone.col );
		}

		[Test]
		public function testToString():void
		{
			tile.row = 5;
			tile.col = 5;

			var str:String = tile.toString();

			Assert.assertEquals( str, "tile_col_5_row_5" );
		}
	}
}
