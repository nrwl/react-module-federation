import { writeFileSync } from 'fs'
import { ReleaseExecutorSchema } from './schema';
import { ExecutorContext } from '@nx/devkit';

import { exec } from 'child_process';
import { promisify } from 'util';
const execa = promisify(exec);

const file = 'CHANGELOG.md'

export default async function runExecutor(options: ReleaseExecutorSchema, context: ExecutorContext) {
  const { projectName, workspace, root} = context;

  for (const name in  workspace.projects) {
    if (projectName === name) {
      const path = `${root}/${workspace.projects[name].root}`;

      writeFileSync(`${path}/${file}`, 'changelog \n', { flag: 'a'})
    }
  }

  await execa(`git add . && git commit -m 'chore(release): 1.35.1 [skip ci]'`)
  await execa(`git push`)

  return {
    success: true,
  };
}
