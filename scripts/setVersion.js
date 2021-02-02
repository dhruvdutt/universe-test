const fs = require('fs');
const gitHubActions = require('@actions/github');
const gitHubActionsCore = require('@actions/core');

const STAGE = process.env.STAGE;

const context = gitHubActions.context;
const branchRef = context.payload.ref;
const latestCommit = context.payload.commits[0];

function setVersion() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
    let version = `${packageJson.version}-staging-${latestCommit.id.substr(0, 7)}`;

    if (STAGE === 'production') {
      version = packageJson.version;
    }

    // semver staging build on master - check for version upgrade commit by github actions bot
    if (
      STAGE === 'staging' &&
      branchRef.includes('master') &&
      latestCommit.name === 'github-actions[bot]' &&
      latestCommit.message.includes('build: update version')
    ) {
      version = `${packageJson.version}-staging`;
    }

    packageJson.version = version;
    fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));

    gitHubActionsCore.exportVariable('VERSION', version);
  } catch (err) {
    gitHubActionsCore.setFailed(`[Error] setVersion: ${err}`);
  }
}

setVersion();
