import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-tilary-bubbles' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const TilaryBubblesModule = isTurboModuleEnabled
  ? require('./NativeTilaryBubbles').default
  : NativeModules.TilaryBubbles;

const TilaryBubbles = TilaryBubblesModule
  ? TilaryBubblesModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return TilaryBubbles.multiply(a, b);
}
