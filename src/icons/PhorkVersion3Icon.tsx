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
    <svg
      width={537}
      height={537}
      viewBox="0 0 537 537"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M375.148 5.777c8.175 8.183 7.596 21.608-1.252 29.058L143.677 228.654c-7.841 6.601-8.851 18.306-2.258 26.152 6.603 7.857 18.326 8.869 26.177 2.26L404.688 57.461c6.787-5.714 16.817-5.282 23.087.994 6.664 6.67 6.664 17.477.001 24.148L211.365 299.219c-7.243 7.251-7.243 18.999.001 26.25 7.253 7.26 19.048 7.233 26.301-.027l216.347-216.554c6.652-6.659 17.469-6.683 24.122-.024 6.242 6.248 6.672 16.231.99 22.993L279.918 368.931c-6.594 7.847-5.583 19.552 2.257 26.153 7.851 6.609 19.575 5.597 26.177-2.26l193.319-230.065c7.445-8.859 20.88-9.438 29.059-1.252 6.797 6.804 7.662 17.557 2.139 25.431-140.088 199.709-209.758 349.538-325.831 349.538H54c-29.823 0-54-24.177-54-54V330.1C0 213.827 149.916 144.072 349.664 3.635c7.887-5.545 18.67-4.68 25.484 2.142z"
        fill="currentColor"
      />
    </svg>
  );
}

PhorkVersion3Icon.displayName = 'PhorkVersion3Icon';
