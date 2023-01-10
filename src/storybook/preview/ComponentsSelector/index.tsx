import * as React from 'react';
import {useEffect, useState} from 'react';
import useStyles from './styles';
import CheckBox from '../../../components/Checkbox';
import CodeBox from '../../YarnAddon/CodeBox';
import {View} from 'react-native';
import Text from '../../../components/Text';

const ComponentsSelector = () => {
  const styles = useStyles();
  const [allData, setAllData] = useState<string[]>([]);
  const [installData, setInstallData] = useState<string[]>([]);
  const components: string[] = [];

  const context = require.context('../../../components', true, /package.json$/);

  context.keys().forEach((key: string) => {
    const fileLink = key.replace('./', '');
    const name = fileLink.substring(0, fileLink.indexOf('/'));
    components.push(name);
  });

  const removeDuplicates = (arr: string[]) =>
    arr.filter((item, index) => arr.indexOf(item) === index);
  const componentsFiltered = removeDuplicates(components);

  const handleChange = (checked: boolean, name: string) => {
    jsonFile(name).then(r => {
      const pkgData = [];
      pkgData.push(`${r.name}`);
      if (Object.entries(r.peerDependencies)[0]) {
        Object.entries(r.peerDependencies).map(item => {
          if (item[0] !== 'react' && item[0] !== 'react-native') {
            pkgData.push(`${item[0]}`);
          }
        });
      }
      if (checked) {
        setAllData([...allData, ...pkgData]);
      } else {
        const filtered = allData
          .join()
          .replace(pkgData.join(), '')
          .replace(',,', ',')
          .replace(/^,/, '')
          .replace(/,$/, '')
          .split(',')
          .filter(i => i);
        setAllData([...filtered]);
      }
    });
  };
  useEffect(() => setInstallData(removeDuplicates(allData)), [allData]);
  const jsonFile = async (name: string) =>
    await import(`../../../components/${name}/package.json`);

  return (
    <View style={styles.selectorContainer}>
      <View>
        {componentsFiltered &&
          componentsFiltered.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <CheckBox
                label={item}
                name={item}
                size="small"
                onChange={handleChange}
              />
            </View>
          ))}
      </View>
      <View style={styles.codeBoxContainer}>
        <Text style={styles.title} variant="h4">
          To install selected:
        </Text>
        <CodeBox>yarn add {installData.join(' \\\n')}</CodeBox>
      </View>
    </View>
  );
};

export default ComponentsSelector;
