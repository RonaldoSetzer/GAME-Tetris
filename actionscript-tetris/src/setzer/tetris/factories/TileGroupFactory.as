package setzer.tetris.factories
{
	import setzer.tetris.models.Tile;
	import setzer.tetris.models.TileGroup;
	import setzer.tetris.models.TileGroupType;

	public class TileGroupFactory
	{
		public static function getTileGroup( typeId:int ):TileGroup
		{
			var tiles:Vector.<Tile> = getTilesByTypeArray( TileGroupType.getTypeArray( typeId ));
			return new TileGroup( typeId, tiles );
		}

		public static function getRandomTileGroup():TileGroup
		{
			var types:Array = [
				TileGroupType.TYPE_I,
				TileGroupType.TYPE_Z,
				TileGroupType.TYPE_S,
				TileGroupType.TYPE_T,
				TileGroupType.TYPE_L,
				TileGroupType.TYPE_J,
				TileGroupType.TYPE_O];
			var rndType:int = Math.floor( Math.random() * types.length );
			return getTileGroup( types[rndType] );
		}

		public static function getTilesByTypeArray( typeArray:Array ):Vector.<Tile>
		{
			var tiles:Vector.<Tile> = new Vector.<Tile>();
			var tile:Tile;

			for ( var i:int = 0; i < typeArray.length; i++ )
			{
				tile = new Tile();
				tile.col = typeArray[i] % 2;
				tile.row = int( typeArray[i] / 2 );
				tiles.push( tile );
			}
			return tiles;
		}
	}
}
