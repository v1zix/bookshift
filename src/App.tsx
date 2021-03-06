/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { Navigation } from 'react-native-navigation';
import { registerScreens, Screens } from './screens';

const main = () => {
  // Icons are required on Android because of the Android library React Native Navigation
  // uses. They are not required on iOS, but the spacing on the text is usually off without them.
  // See: https://github.com/wix/react-native-navigation/issues/4684
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
      statusBar: {
        style: 'light',
        visible: true
      },
      layout: {
        direction: 'ltr'
      },
      bottomTabs: {
        titleDisplayMode: 'alwaysShow',
        backgroundColor: '#F7F8FB'
      },
      bottomTab: {
        // These colors are not in the palette, but it's much
        // closer to the design spec than the ones listed.
        // Previously had from the spec colors:
        // textColor: '#CBD2E1',
        // selectedTextColor: '#004FB4',
        textColor: '#9e9e9e',
        selectedTextColor: '#277ff7',
        iconColor: '#9e9e9e',
        selectedIconColor: '#277ff7',
        fontSize: 16,
        selectedFontSize: 16,
        fontFamily: 'Inter-SemiBold'
      }
    });
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              component: {
                name: Screens.MyShifts,
                options: {
                  bottomTab: {
                    text: 'My shifts',
                    icon: require('./assets/img/menu.png')
                  }
                }
              }
            },
            {
              component: {
                name: Screens.AvailableShifts,
                options: {
                  bottomTab: {
                    text: 'Available shifts',
                    icon: require('./assets/img/navicon_add.png')
                  }
                }
              }
            }
          ]
        }
      }
    });
  });
};

export default main;

// import React, {Fragment} from 'react';
// import { Navigation } from 'react-native-navigation';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App = () => {
//   const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;

//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {!usingHermes ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </Fragment>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// Navigation.registerComponent('bookshift.App', () => App);

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: 'bookshift.App'
//       }
//     }
//   });
// });

// export default App;
