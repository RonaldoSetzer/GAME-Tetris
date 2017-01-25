package setzer.tetris.factories
{
	import org.flexunit.asserts.assertEquals;
	import org.flexunit.asserts.assertNotNull;

	import setzer.tetris.models.Tile;
	import setzer.tetris.models.TileGroup;
	import setzer.tetris.models.TileGroupType;

	public class TileGroupFactoryTest
	{
		[Test]
		public function testGetTileGroup():void
		{
			var tileGroup:TileGroup = TileGroupFactory.getTileGroup( TileGroupType.TYPE_I );
			assertNotNull( tileGroup );
			assertEquals( tileGroup.typeId, TileGroupType.TYPE_I );
			assertEquals( tileGroup.tiles.length, 4 )
		}

		[Test]
		public function testGetRandomTileGroup():void
		{
			var tileGroup:TileGroup = TileGroupFactory.getRandomTileGroup();
			assertNotNull( tileGroup );
		}

		[Test]
		public function testGetTilesByTypeArray():void
		{
			var array:Array = TileGroupType.getTypeArray( TileGroupType.TYPE_L );
			var tiles:Vector.<Tile> = TileGroupFactory.getTilesByTypeArray( array );

			assertNotNull( tiles );
			assertEquals( tiles.length, array.length );
			assertEquals( tiles[0].col, array[0] % 2 );
			assertEquals( tiles[0].row, int( array[0] / 2 ) );
		}
	}
}
