import BaseDistribution from './base-distribution';
import {NodeInputs} from './base-models';
import OfficialBuilds from './official_builds/official_builds';

enum Distributions {
  DEFAULT = '',
  CANARY = 'v8-canary',
  NIGHTLY = 'nightly',
  RC = 'rc'
}

export function getNodejsDistribution(
  installerOptions: NodeInputs
): OfficialBuilds {
  const versionSpec = installerOptions.versionSpec;
  if (
    versionSpec.includes(Distributions.NIGHTLY) ||
    versionSpec.includes(Distributions.CANARY) ||
    versionSpec.includes(Distributions.RC)
  ) {
    throw Error('Only Official Build supported for now');
  } else {
    return new OfficialBuilds(installerOptions);
  }
}
