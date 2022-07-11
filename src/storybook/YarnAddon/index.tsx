import React from 'react';
import {useParameter} from '@storybook/api';
import './styles.css';
import CodeBox from './CodeBox';

const PARAM_KEY = 'pkg';

interface IYarnAddonProps {
  active?: boolean;
}

type PackageType = {
  name: string;
  version: string;
  peerDependencies?: {[key: string]: string};
};

const YarnAddon: React.FC<IYarnAddonProps> = ({active}) => {
  const pkg: PackageType | null = useParameter(PARAM_KEY, null);

  if (!pkg || !active) {
    return null;
  }

  const {name, version, peerDependencies} = pkg;
  const filteredPeerDependencies = peerDependencies
    ? Object.keys(peerDependencies).filter(
        peerName => peerName !== 'react-native' && peerName !== 'react',
      )
    : [];

  return (
    <div className="yarn-container">
      <h3 className="yarn-title">To install package:</h3>
      <CodeBox>
        yarn add {name}@{version}
      </CodeBox>
      {!!filteredPeerDependencies.length && (
        <>
          <h3 className="yarn-title">
            ⚠️ Make sure that all needed peer dependencies are also installed
            ⚠️:
          </h3>
          <CodeBox>
            yarn add{' '}
            {Object.keys(peerDependencies)
              .filter(
                peerName => peerName !== 'react-native' && peerName !== 'react',
              )
              .join(' \\\n')}
          </CodeBox>
        </>
      )}
    </div>
  );
};

export default YarnAddon;
