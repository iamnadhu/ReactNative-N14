import * as React from 'react';

import {View, StyleSheet} from 'react-native';

import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number };
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 };
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {...state, red: state.red + action.payload};
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload};
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : {...state, blue: state.blue + action.payload};
    default:
      return state;
  }
};

const SquareUseReducerScreen = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  const {red, green, blue} = state;

  return (
    <View style={styles.containerStyle}>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({type: 'change_red', payload: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({type: 'change_green', payload: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({type: 'change_blue', payload: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})
        }
      />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 200,
          width: 200,
          marginTop: 20,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 50,
    marginHorizontal: 20,
  },
});

export default SquareUseReducerScreen;
