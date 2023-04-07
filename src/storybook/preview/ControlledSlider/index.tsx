import {useState} from 'react';
import Text from '../../../components/Text';
import Slider from '../../../components/Slider';
import Button from '../../../components/Button';
import {View} from 'react-native';
import * as React from 'react';
import useStyles from './styles';

const ControlledSlider = () => {
  const [valUp, setSValUp] = useState(2);
  const [valDown, setValDown] = useState(1);
  const styles = useStyles();

  return (
    <>
      <Slider
        controlled
        value={[valDown, valUp]}
        onChange={newVal => {
          if (Array.isArray(newVal)) {
            setSValUp(newVal[1]);
            setValDown(newVal[0]);
          }
        }}
        max={10}
      />
      <Text style={styles.title}>Value Up:</Text>
      <View style={styles.container}>
        <Button onPress={() => setSValUp(sliderPrevVal => sliderPrevVal - 1)}>
          –
        </Button>
        <Text style={styles.value}>{valUp}</Text>
        <Button onPress={() => setSValUp(sliderPrevVal => sliderPrevVal + 1)}>
          +
        </Button>
      </View>
      <Text style={styles.title}>Value Down:</Text>
      <View style={styles.container}>
        <Button onPress={() => setValDown(sliderPrevVal => sliderPrevVal - 1)}>
          –
        </Button>
        <Text style={styles.value}>{valDown}</Text>
        <Button onPress={() => setValDown(sliderPrevVal => sliderPrevVal + 1)}>
          +
        </Button>
      </View>
    </>
  );
};

export default ControlledSlider;
