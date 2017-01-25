package setzer.tetris.models
{
	import flash.utils.Dictionary;

	public class TileGroupType
	{
		public static const TYPE_I:int = 0;
		public static const TYPE_Z:int = 1;
		public static const TYPE_S:int = 2;
		public static const TYPE_T:int = 3;
		public static const TYPE_L:int = 4;
		public static const TYPE_J:int = 5;
		public static const TYPE_O:int = 6;

		private static const TYPE_I_ARRAY:Array = [1, 3, 5, 7];
		private static const TYPE_Z_ARRAY:Array = [2, 4, 5, 7];
		private static const TYPE_S_ARRAY:Array = [3, 5, 4, 6];
		private static const TYPE_T_ARRAY:Array = [3, 5, 4, 7];
		private static const TYPE_L_ARRAY:Array = [2, 3, 5, 7];
		private static const TYPE_J_ARRAY:Array = [3, 5, 7, 6];
		private static const TYPE_O_ARRAY:Array = [2, 3, 4, 5];

		public static function getTypeArray( type:int ):Array
		{
			var dic:Dictionary = new Dictionary();
			dic[TYPE_I] = TYPE_I_ARRAY;
			dic[TYPE_Z] = TYPE_Z_ARRAY;
			dic[TYPE_S] = TYPE_S_ARRAY;
			dic[TYPE_T] = TYPE_T_ARRAY;
			dic[TYPE_L] = TYPE_L_ARRAY;
			dic[TYPE_J] = TYPE_J_ARRAY;
			dic[TYPE_O] = TYPE_O_ARRAY;

			return dic[type];
		}
	}
}
