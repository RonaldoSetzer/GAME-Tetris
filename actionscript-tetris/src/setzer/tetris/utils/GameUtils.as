package setzer.tetris.utils
{
	import setzer.tetris.models.Tile;
	import setzer.tetris.views.components.TileDisplay;

	public class GameUtils
	{
		public static function getCurrentLevel( lines:int ):int
		{
			return Math.floor( lines / 10 + 1 );
		}

		public static function getCurrentSpeed( level:int ):int
		{
			return Math.max( 4, 19 - level );
		}

		public static function getPointsByLines( lines:int ):int
		{
			var bonus:int = Math.floor( lines * .9 );
			return ( (lines + bonus) * 100);
		}

		public static function updateDisplayPositionByTile( tile:Tile, display:TileDisplay ):void
		{
			if ( display == null || tile == null ) return;

			display.x = tile.col * Tile.TILE_WIDTH;
			display.y = tile.row * Tile.TILE_WIDTH;
		}
	}
}
