import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';
export function PhorkVersion3DarkIcon({
  title,
  titleId = uuid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432 432" aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M302.083 4.125c6.583 6.589 7.417 16.652-3.008 25.399L117.694 181.598c-8.314 7.315-9.127 16.741-3.818 23.059 5.316 6.327 14.757 7.142 23.078-.181L323.87 47.743c8.13-7.27 15.542-6.253 20.59-1.199 5.366 5.371 6.04 13.233-1.999 21.445L172.199 238.42c-7.833 7.838-7.833 17.299-2 23.137 5.841 5.847 15.338 5.825 23.179-2.021l170.21-170.382c8.175-8.182 16.068-7.381 21.424-2.02 5.027 5.032 5.373 13.072-1.202 20.517L226.4 292.557c-7.309 9.318-6.496 17.744-.182 23.059 6.322 5.323 15.762 4.508 23.079-3.819l152.667-179.262c8.536-10.758 18.813-9.6 25.399-3.008 5.474 5.479 6.17 14.138-.277 22.478-112.804 160.817-166.905 279.468-260.371 279.468H43.483C19.468 431.473 0 412.004 0 387.989V265.288C0 171.659 117.656 118.364 278.5 5.277c10-7.031 18.096-6.645 23.583-1.152z"
      />
    </svg>
  );
}

PhorkVersion3DarkIcon.displayName = 'PhorkVersion3DarkIcon';
