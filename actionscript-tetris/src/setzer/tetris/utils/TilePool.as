package setzer.tetris.utils
{
	import flash.utils.Dictionary;

	import setzer.tetris.assets.Assets;
	import setzer.tetris.views.components.TileDisplay;

	public class TilePool
	{
		public static var tileTypeLists:Dictionary;

		public static function init():void
		{
			tileTypeLists = new Dictionary();
		}

		public static function getTileDisplay( typeId:int ):TileDisplay
		{
			if ( tileTypeLists[typeId] == null ) tileTypeLists[typeId] = new Vector.<TileDisplay>();

			var list:Vector.<TileDisplay> = tileTypeLists[typeId];
			var tileDisplay:TileDisplay = list.shift() || new TileDisplay( Assets.getTileTexture( typeId ), typeId );
			tileDisplay.visible = true;

			return tileDisplay;
		}

		public static function back( tile:TileDisplay ):void
		{
			var list:Vector.<TileDisplay> = tileTypeLists[tile.typeId];
			tile.visible = false;

			if ( list.indexOf( tile ) == -1 )
				list.push( tile );
		}
	}
}
