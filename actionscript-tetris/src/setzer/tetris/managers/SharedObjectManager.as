package setzer.tetris.managers
{
	import flash.net.SharedObject;

	import setzer.tetris.models.GameModel;
	import setzer.tetris.utils.MagicValues;

	public class SharedObjectManager
	{
		[Inject]
		public var model:GameModel;

		public function getExternalData():void
		{
			var so:SharedObject = SharedObject.getLocal( MagicValues.SHARED_OBJECT_NAME );

			if ( so.data.hiScore )
			{
				model.hiScore = int( so.data.hiScore );

				trace( "hiScore: " + model.hiScore.toString() );
			}
			so.close();
		}

		public function updateHighScore():void
		{
			var so:SharedObject = SharedObject.getLocal( MagicValues.SHARED_OBJECT_NAME );

			var currentHiScore:int = int( so.data.hiScore );
			var score:int = model.score;
			var hiScore:int = Math.max( currentHiScore, score );

			if ( so.data.hiScore != null )
			{
				trace( "hiScore: " + currentHiScore + " to " + hiScore );
			}
			model.hiScore = hiScore;
			so.data.hiScore = hiScore;

			so.flush();
			so.close();
		}

		public function clear():void
		{
			var so:SharedObject = SharedObject.getLocal( MagicValues.SHARED_OBJECT_NAME );
			var currentHiScore:int = int( so.data.hiScore );

			if ( so.data.hiScore != null )
			{
				trace( "hiScore: " + currentHiScore + " to " + 0 );
			}

			model.hiScore = 0;
			so.data.hiScore = 0;

			so.flush();
			so.close();
		}
	}
}
