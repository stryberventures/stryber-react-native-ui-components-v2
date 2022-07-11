import React, {FC} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import CopyIcon from '../CopyIcon';
import './styles.css';
import {Tooltip} from '@stryberventures/gaia-react.tooltip';

interface ICodeBoxProps {
  children: string[];
}

const CodeBox: FC<ICodeBoxProps> = ({children}) => {
  const [copyString, setCopyString] = React.useState('Press to Copy');
  return (
    <div className="pre-wrapper">
      <pre className="pre">{children}</pre>
      <Tooltip title={copyString}>
        <CopyToClipboard
          text={children.join('')}
          onCopy={() => setCopyString('Copied!')}
        >
          <div
            className="copy-container"
            onMouseLeave={() => setCopyString('Press to Copy')}
          >
            <CopyIcon fill="#000" />
          </div>
        </CopyToClipboard>
      </Tooltip>
    </div>
  );
};

export default CodeBox;
