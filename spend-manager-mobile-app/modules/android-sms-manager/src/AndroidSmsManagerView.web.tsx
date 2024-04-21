import * as React from 'react';

import { AndroidSmsManagerViewProps } from './AndroidSmsManager.types';

export default function AndroidSmsManagerView(props: AndroidSmsManagerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
