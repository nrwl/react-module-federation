import { ReleaseExecutorSchema } from './schema';
import executor from './executor';

const options: ReleaseExecutorSchema = {};

describe('Release Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
