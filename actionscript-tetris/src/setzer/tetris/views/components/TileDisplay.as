package setzer.tetris.views.components
{
	import starling.display.Image;
	import starling.textures.Texture;

	public class TileDisplay extends Image
	{
		private var _typeId:int;

		public function TileDisplay( texture:Texture, typeId:int )
		{
			super( texture );

			_typeId = typeId;
		}

		public function get typeId():int
		{
			return _typeId;
		}
	}
}
