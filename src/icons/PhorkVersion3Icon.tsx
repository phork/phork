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
        d="M375.148 5.777c8.175 8.183 7.596 21.608-1.252 29.058L143.677 228.653c-7.841 6.601-8.851 18.306-2.258 26.153 6.602 7.857 18.326 8.869 26.177 2.259L404.688 57.46c6.787-5.714 16.817-5.282 23.087.994 6.664 6.67 6.664 17.477.001 24.148L211.365 299.218c-7.243 7.251-7.243 18.999.001 26.25 7.253 7.26 19.048 7.233 26.301-.027l216.347-216.554c6.652-6.659 17.469-6.684 24.122-.025 6.243 6.249 6.673 16.233.991 22.995L279.918 368.931c-6.594 7.847-5.583 19.552 2.257 26.152 7.851 6.61 19.575 5.598 26.177-2.259l193.319-230.066c7.444-8.859 20.88-9.438 29.059-1.251 6.797 6.804 7.662 17.557 2.139 25.431-140.088 199.709-209.758 349.538-325.831 349.538H42c-23.196 0-42-18.804-42-42V330.1C0 213.827 149.916 144.072 349.664 3.635c7.887-5.545 18.67-4.68 25.484 2.142z"
        fill="currentColor"
      />
    </svg>
  );
}

PhorkVersion3Icon.displayName = 'PhorkVersion3Icon';
