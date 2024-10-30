import packageJson from '../../package.json';

export const getPackageInfo = () => {
  return {
    version: packageJson.version,
    buildNumber: packageJson.build,
  };
};
