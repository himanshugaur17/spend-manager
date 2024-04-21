import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { AndroidSmsManagerViewProps } from './AndroidSmsManager.types';

const NativeView: React.ComponentType<AndroidSmsManagerViewProps> =
  requireNativeViewManager('AndroidSmsManager');

export default function AndroidSmsManagerView(props: AndroidSmsManagerViewProps) {
  return <NativeView {...props} />;
}
