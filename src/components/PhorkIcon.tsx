import { SvgIconProps, useThemeId } from '@phork/phorkit';
import { PhorkVersion3LightIcon } from 'icons/PhorkVersion3LightIcon';
import { PhorkVersion3DarkIcon } from 'icons/PhorkVersion3DarkIcon';

export const PhorkIcon = (props: SvgIconProps): React.ReactElement<SVGElement> => {
  const themeId = useThemeId();
  return themeId === 'dark' ? <PhorkVersion3DarkIcon {...props} /> : <PhorkVersion3LightIcon {...props} />;
};

PhorkIcon.displayName = 'PhorkIcon';
