package setzer.tetris.views.components
{
	import setzer.tetris.utils.TilePool;

	import starling.display.Sprite;

	public class GridComponent extends Sprite
	{
		public function clear():void
		{
			while ( numChildren > 0 )
			{
				if ( getChildAt( 0 ) is TileDisplay )
					TilePool.back( TileDisplay( getChildAt( 0 ) ) );
				removeChildAt( 0 );
			}
		}
	}
}
