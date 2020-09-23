import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

import BottomTab from '../assets/images/BottomStack.svg';
import BottomCircle from '../assets/images/BottomCircle.svg';

import {fullWidth} from '../util';

// const fullWidth = Dimensions.get('window').width;
const widthpart = fullWidth / 3;

// const animPosition = new Animated.Value(widthpart);
const onTabNavigation = (value, circlePos, circleScale, toValue) => {
  Animated.spring(value, {
    toValue: {x: -widthpart * 2 + widthpart * toValue, y: 0},
    // friction: 10,
    // bounciness: 15,
    damping: 15,
    useNativeDriver: true,
  }).start();
  Animated.sequence([
    // Animated.timing(circleScale, {
    //   toValue: 0,
    //   duration: 500,
    //   //   easing: Easing.ease,
    //   useNativeDriver: true,
    // }),
    Animated.spring(circlePos, {
      toValue: {x: widthpart * toValue, y: 0},
      bounciness: 15,
      //   duration: 100,
      useNativeDriver: true,
    }),
    // Animated.timing(circleScale, {
    //   toValue: 1,
    //   duration: 500,
    //   //   easing: Easing.ease,
    //   useNativeDriver: true,
    // }),
  ]).start();
};
const BottomTabBar = ({state, descriptors, navigation}) => {
  const animPosition = useRef(new Animated.ValueXY({x: -widthpart * 2, y: 0}))
    .current;
  const circlePos = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const circleScale = useRef(new Animated.Value(1)).current;
  return (
    <>
      <Animated.View
        style={{
          ...Styles.CircleHighlighter,
          //   transform: circlePos.getTranslateTransform(),
          transform: [
            // {scale: circleScale},
            ...circlePos.getTranslateTransform(),
          ],
          opacity: circleScale,
        }}>
        <BottomCircle></BottomCircle>
      </Animated.View>
      <Animated.View
        style={{
          transform: animPosition.getTranslateTransform(),
          ...Styles.tabBackground,
        }}>
        <BottomTab></BottomTab>
      </Animated.View>

      <View style={Styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = (index) => {
            onTabNavigation(animPosition, circlePos, circleScale, index);
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              style={
                isFocused
                  ? {
                      transform: [
                        {
                          translateY: -20,
                        },
                        {
                          scale: 1.25,
                        },
                      ],

                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 5,
                      },
                      shadowOpacity: 0.5,
                      shadowRadius: 6.27,
                      elevation: 10,
                    }
                  : {}
              }
              testID={options.tabBarTestID}
              onPress={() => onPress(index)}>
              {options.tabBarIcon}
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  tabBackground: {
    // position: 'absolute',
    // transform: animPosition.getTranslateTransform(),
  },
  container: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    bottom: 10,
    flexDirection: 'row',
    // flex: 1,
    width: fullWidth,
  },
  CircleHighlighter: {
    position: 'absolute',
    bottom: 15,
    width: widthpart + 3,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,
    elevation: 10,

    // transform: [
    //   {
    //     translateX: widthpart * 2,
    //   },
    // ],
  },
});

export default BottomTabBar;
