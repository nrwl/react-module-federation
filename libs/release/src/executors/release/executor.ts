import { ReleaseExecutorSchema } from './schema';

export default async function runExecutor(options: ReleaseExecutorSchema) {
  console.log('Executor ran for Release', options);
  return {
    success: true,
  };
}
