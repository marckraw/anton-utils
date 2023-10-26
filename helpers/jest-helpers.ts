import {join} from 'path';
import {lstatSync, readdirSync} from 'fs';

export const getPackageModuleMapper = ({currentPath, basePath}: {currentPath: string, basePath: string}) => {
  const splitDir = currentPath.split('/');
  const self = splitDir[splitDir.length - 1];
  const packages = readdirSync(basePath).filter((name => {
    return lstatSync(join(basePath, name)).isDirectory();
  }));

  return packages.reduce(
    (acc, name) => {
      if (name === self) {
        return acc;
      }
      return {
        ...acc,
        [`@ef-global/${name}(.*)$`]:
          `<rootDir>/../${name}/dist/$1`,
      };
    },
    {},
  );
};