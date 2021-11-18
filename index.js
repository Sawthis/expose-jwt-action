const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
try {
  // Get aud and request token
  const aud = core.getInput('aud');
  const jwt = await core.getIDToken(aud);
  core.setOutput("jwt", jwt);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
}

run()