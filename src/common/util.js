const path = require('path')
const fs = require('fs')

const abort = (message, logger = console, code = 1) => {
  logger.error(message)
  process.exit(code)
}

const enforce = (condition, message, logger, code) => {
  if (!condition) abort(message, logger, code)
}

const enforceOrThrow = (condition, message) => {
  if (!condition) throw new Error(message)
}

const getArtifact = (contractName, contractsBuildDir, logger) => {
  const artifactPath = path.resolve(contractsBuildDir, `${contractName}.json`)

  logger.debug(`Reading artifact file at ${artifactPath}`)
  enforceOrThrow(fs.existsSync(artifactPath), `Could not find ${contractName} artifact at ${artifactPath}`)

  // Stringify + parse to make a deep copy (to avoid bugs with PR #19)
  return JSON.parse(JSON.stringify(require(artifactPath)))
}

const extractCompilerVersion = (artifact) => {
  const metadata = JSON.parse(artifact.metadata)

  const compilerVersion = `v${metadata.compiler.version}`

  return compilerVersion
}

module.exports = {
  abort,
  enforce,
  enforceOrThrow,
  getArtifact,
  extractCompilerVersion
}
