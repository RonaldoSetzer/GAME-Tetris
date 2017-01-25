package setzer.tetris.factories
{
	import setzer.tetris.assets.Assets;
	import setzer.tetris.assets.AssetsInfo;
	import setzer.tetris.utils.Colors;
	import setzer.tetris.utils.TilePool;
	import setzer.tetris.utils.ViewPortSize;
	import setzer.tetris.views.components.TileDisplay;

	import starling.display.Button;
	import starling.display.Image;
	import starling.display.Quad;
	import starling.display.Sprite;
	import starling.text.TextField;
	import starling.text.TextFormat;
	import starling.textures.Texture;
	import starling.textures.TextureSmoothing;

	public class StarlingFactory
	{

		public static function getTextField( width:int, text:String = "", color:uint = Colors.STATIC_TEXT, fontAlign:String = "center" ):TextField
		{
			var textFormat:TextFormat = new TextFormat( AssetsInfo.FONT_FAMILY, AssetsInfo.SIZE_DEFAULT, color, fontAlign );
			return new TextField( width, AssetsInfo.SIZE_DEFAULT + 2, text, textFormat );
		}

		public static function getImage( assetKey:String ):Image
		{
			var img:Image = new Image( Assets.getTexture( assetKey ) );
			img.textureSmoothing = TextureSmoothing.NONE;
			return img;
		}

		public static function getButton( key:String ):Button
		{
			var up:Texture = Assets.getTexture( key + "_up" );
			var down:Texture = Assets.getTexture( key + "_over" );
			var over:Texture = Assets.getTexture( key + "_over" );
			var button:Button = new Button( up, "", down, over );
			button.scaleWhenDown = .9;

			return button;
		}

		public static function getColorBackground( color:uint = Colors.BACKGROUND ):Quad
		{
			return new Quad( ViewPortSize.MAX_WIDTH, ViewPortSize.MAX_HEIGHT, color );
		}

		public static function getShadowBackground( color:uint = 0x000000, alpha:Number = .6 ):Quad
		{
			var bg:Quad = new Quad( ViewPortSize.MAX_WIDTH, ViewPortSize.MAX_HEIGHT, color );
			bg.alpha = alpha;
			return bg;
		}

		public static function getBoardBackground():Sprite
		{
			var container:Sprite = new Sprite();

			var bg1:Quad = new Quad( ViewPortSize.MAX_WIDTH, 102, Colors.STATIC_TEXT );
			bg1.alignPivot();

			var bg2:Quad = new Quad( ViewPortSize.MAX_WIDTH, 100, Colors.BACKGROUND );
			bg2.alignPivot();

			container.addChild( bg1 );
			container.addChild( bg2 );

			return container;
		}

		public static function getTileDisplay( typeId:int ):TileDisplay
		{
			return TilePool.getTileDisplay( typeId );
		}
	}
}
