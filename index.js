const core = require('@actions/core');

async function run() {
try {
  // Get aud and request token
  const aud = core.getInput('aud');
  const jwt = await core.getIDToken(aud);
  core.setOutput("jwt", jwt);
  core.exportVariable('JWT', jwt);
} catch (error) {
  core.setFailed(error.message);
}
}

run()
