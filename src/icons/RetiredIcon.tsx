import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';

export function RetiredIcon({ title, titleId = uuid(), ...initProps }: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'Retired'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        fill="currentColor"
        d="M220 190h-60v20h20c2.65 0 5.2 1.05 7.07 2.93A9.974 9.974 0 01190 220c0 2.65-1.05 5.2-2.93 7.07A9.974 9.974 0 01180 230H60c-2.65 0-5.2-1.05-7.07-2.93A9.974 9.974 0 0150 220c0-2.65 1.05-5.2 2.93-7.07A9.974 9.974 0 0160 210h20v-20H20a10.1 10.1 0 01-3.83-.76 9.975 9.975 0 01-3.24-2.17 9.975 9.975 0 01-2.17-3.24A10.1 10.1 0 0110 180V20c0-1.31.26-2.61.76-3.83.5-1.21 1.24-2.31 2.17-3.24.93-.93 2.03-1.67 3.24-2.17A10.1 10.1 0 0120 10h200c1.31 0 2.61.26 3.83.76 1.21.5 2.31 1.24 3.24 2.17.93.93 1.67 2.03 2.17 3.24.5 1.22.76 2.52.76 3.83v160c0 1.31-.26 2.61-.76 3.83a9.975 9.975 0 01-2.17 3.24c-.93.93-2.03 1.67-3.24 2.17-1.22.5-2.52.76-3.83.76zM30 170h180V30H30v140zm110 20h-40v20h40v-20z"
      />
      <path
        fill="currentColor"
        d="M149.38 111.86c8.73 8.72-4.79 22.25-13.52 13.52l-16.26-16.26c-5.42 5.43-10.84 10.84-16.26 16.26-8.72 8.73-22.25-4.8-13.52-13.52 5.42-5.43 10.84-10.84 16.25-16.26-5.41-5.42-10.83-10.84-16.25-16.25-8.73-8.73 4.8-22.26 13.52-13.53 5.43 5.42 10.85 10.84 16.26 16.26l16.26-16.26c8.72-8.73 22.25 4.79 13.52 13.53-5.42 5.41-10.84 10.83-16.25 16.25 5.41 5.42 10.83 10.84 16.25 16.26z"
      />
    </svg>
  );
}

RetiredIcon.displayName = 'RetiredIcon';
