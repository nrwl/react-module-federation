import { writeFileSync } from 'fs'
import { ReleaseExecutorSchema } from './schema';
import {ExecutorContext, ProjectConfiguration} from '@nx/devkit';

import { exec } from 'child_process';
import { promisify } from 'util';
const execa = promisify(exec);

const file = 'CHANGELOG.md'

export default async function runExecutor(options: ReleaseExecutorSchema, context: ExecutorContext) {
  const { workspace, root} = context;

  for (const name in  workspace.projects) {
    const config: ProjectConfiguration = workspace.projects[name]

    if (config.projectType !== 'application') {
      continue
    }

    const path = `${root}/${config.root}`;
    const releaseNotes = createReleaseNotes();

    writeFileSync(`${path}/${file}`, releaseNotes, { flag: 'a'})
  }

  await execa(`git add . && git commit -m 'chore(release): 1.35.1 [skip ci]'`)
  await execa(`git push`)

  return {
    success: true,
  };
}

const createReleaseDate = () => {
  const now = new Date();

  return {
    year: now.getFullYear(),
    month: `0${now.getMonth()}`.slice(-2),
    date: `0${now.getDate()}`.slice(-2)
  }
}

function createReleaseNotes() {
  const { year, month, date} = createReleaseDate()

  return `
## [1.10.1](https://github.com/mckesson/b2b-connect-ordering-idb-idb-bff/compare/v1.35.0...v1.35.1) (${year}-${month}-${date})

---

### Features

* **[XYZ-0000]** commit message goes here
* **[XYZ-0000]** commit message goes here
* **[XYZ-0000]** commit message goes here


### Bug Fixes

* **[XYZ-0000]** commit message goes here
* **[XYZ-0000]** commit message goes here
* **[XYZ-0000]** commit message goes here



  `.trimStart();
}
