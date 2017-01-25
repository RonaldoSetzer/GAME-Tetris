package setzer.tetris.assets
{
	import starling.text.BitmapFont;
	import starling.text.TextField;
	import starling.textures.Texture;
	import starling.textures.TextureAtlas;
	import starling.textures.TextureSmoothing;

	public class Assets
	{
		private static var _atlas:TextureAtlas;

		public static function init():void
		{
			var atlasTexture:Texture = Texture.fromEmbeddedAsset( Embeds.ATLAS_IMAGE );
			var atlasXML:XML = XML( new Embeds.ATLAS_XML() );
			_atlas = new TextureAtlas( atlasTexture, atlasXML );

			var fontTexture:Texture = Texture.fromEmbeddedAsset( Embeds.FONT_IMAGE );
			var font:BitmapFont = new BitmapFont( fontTexture, XML( new Embeds.FONT_XML() ) );
			font.smoothing = TextureSmoothing.NONE;

			TextField.registerBitmapFont( font );
		}

		public static function getTexture( preFix:String ):Texture
		{
			return _atlas.getTexture( preFix );
		}

		public static function getTileTexture( id:int ):Texture
		{
			var ids:Array = [
				AssetsInfo.TILE_01,
				AssetsInfo.TILE_02,
				AssetsInfo.TILE_03,
				AssetsInfo.TILE_04,
				AssetsInfo.TILE_05,
				AssetsInfo.TILE_06,
				AssetsInfo.TILE_07,
				AssetsInfo.TILE_08,
			];
			return _atlas.getTexture( ids[id] || ids[0] );
		}
	}
}
