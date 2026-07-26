import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';
export function PhorkVersion3Icon({
  title,
  titleId = uuid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M84 4v102a4 4 0 01-4 4h-8a2 2 0 01-2-2V58.964a4 4 0 10-8 0V108a2 2 0 01-2 2H50a2 2 0 01-2-2V59a4 4 0 00-8 0v49a2 2 0 01-2 2h-8a4 4 0 01-4-4V4a4 4 0 014-4h50a4 4 0 014 4z"
        fill="#FF6020"
      />
      <path d="M0 10C0 4.477 4.477 0 10 0h8v110h-8c-5.523 0-10-4.477-10-10V10z" fill="#FF0047" />
      <path d="M92 0h8c5.523 0 10 4.477 10 10v90c0 5.523-4.477 10-10 10h-8V0z" fill="#FCA60A" />
    </svg>
  );
}

PhorkVersion3Icon.displayName = 'PhorkVersion3Icon';
