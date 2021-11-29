import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';

export function LinkIcon({ title, titleId = uuid(), ...initProps }: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-labelledby={titleId} {...props}>
      {title === undefined ? <title id={titleId}>{'Link'}</title> : title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M212.26 390.24l-60.33 60.33c-25.01 25.01-65.52 25.01-90.51.01-25-25-25-65.51 0-90.5L182.1 239.4c24.99-24.99 65.5-24.99 90.49 0 8.33 8.33 21.84 8.33 30.17 0 8.33-8.33 8.33-21.84 0-30.17-41.65-41.66-109.18-41.66-150.83 0L31.25 329.91c-41.66 41.65-41.66 109.18 0 150.83 41.65 41.68 109.17 41.68 150.85 0l60.33-60.33c8.33-8.33 8.33-21.84 0-30.17-8.33-8.33-21.84-8.33-30.17 0z"
      />
      <path
        fill="currentColor"
        d="M480.75 31.24c-41.65-41.65-109.2-41.65-150.85 0l-72.39 72.38c-8.33 8.33-8.33 21.84 0 30.17 8.33 8.33 21.84 8.33 30.17 0l72.39-72.38c24.99-24.99 65.52-24.99 90.51 0 24.99 24.99 24.99 65.5 0 90.49L317.85 284.64c-25 24.99-65.5 24.99-90.5 0-8.33-8.33-21.83-8.33-30.17 0-8.33 8.33-8.33 21.84 0 30.17 41.66 41.65 109.18 41.65 150.83 0l132.74-132.74c41.65-41.65 41.65-109.18 0-150.83z"
      />
    </svg>
  );
}

LinkIcon.displayName = 'LinkIcon';
