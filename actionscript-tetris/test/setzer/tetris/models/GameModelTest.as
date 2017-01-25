package setzer.tetris.models
{
	import org.flexunit.asserts.assertEquals;

	public class GameModelTest
	{
		[Test]
		public function testClear():void
		{
			var model:GameModel = new GameModel();
			model.clear();

			assertEquals( model.level, 1 );
			assertEquals( model.lines, 0 );
			assertEquals( model.score, 0 );
		}
	}
}
