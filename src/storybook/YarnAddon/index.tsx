import React from 'react';
import {useParameter} from '@storybook/api';
import './styles.css';
import CodeBox from './CodeBox';

const PARAM_KEY = 'pkg';

type PackageType = {
  name: string;
  version: string;
  peerDependencies?: {[key: string]: string};
};

const YarnAddon = () => {
  const pkg: PackageType | null = useParameter(PARAM_KEY, null);

  if (!pkg) {
    return null;
  }

  const {name, version, peerDependencies} = pkg;
  const filteredPeerDependencies = peerDependencies
    ? Object.keys(peerDependencies).filter(
        peerName => peerName !== 'react-native' && peerName !== 'react',
      )
    : [];

  return (
    <div className="container">
      <h3 className="title">To install package:</h3>
      <CodeBox>
        yarn add {name}@{version}
      </CodeBox>
      {filteredPeerDependencies.length && (
        <>
          <h3 className="title">
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
