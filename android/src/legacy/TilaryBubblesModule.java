package com.reactnativetilarybubbles;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class TilaryBubblesModule extends ReactContextBaseJavaModule {
  public static final String NAME = TilaryBubblesModuleImpl.NAME;

  TilaryBubblesModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  @NonNull
  public String getName() {
    return TilaryBubblesModuleImpl.NAME;
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    TilaryBubblesModuleImpl.multiply(a, b, promise);
  }
}
