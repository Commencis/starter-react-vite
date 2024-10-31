import packageJson from '../../package.json';

export type PackageInfo = {
  version: string;
  buildNumber: string;
};

export const getPackageInfo = (): PackageInfo => {
  return {
    version: packageJson.version,
    buildNumber: packageJson.build,
  };
};
