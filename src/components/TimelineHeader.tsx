import styled from '@emotion/styled';
import { useContext } from 'react';
import {
  ButtonGroup,
  ColoredIconButton,
  Position,
  SvgIconProps,
  Theme,
  ThemeContext,
  useThemeId,
} from '@phork/phorkit';
import {
  HEADER_LEFT_OFFSET,
  HEADER_RIGHT_OFFSET,
  HEADER_TOP_OFFSET,
  SMALL_HEADER_LEFT_OFFSET,
  SMALL_HEADER_RIGHT_OFFSET,
  SMALL_HEADER_TOP_OFFSET,
} from 'config/sizes';
import { viewports } from 'config/viewports';
import { CreditsButton } from 'components/CreditsButton';
import { HeartIcon, TimelineIcon, MoonIcon, SunIcon } from '../icons';

// this uses margin rather than padding so that it affects the button group
const Container = styled.div<{ themeId: Theme }>`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  margin: ${HEADER_TOP_OFFSET}px ${HEADER_RIGHT_OFFSET}px ${HEADER_TOP_OFFSET}px ${HEADER_LEFT_OFFSET}px;
  padding-left: 50px;
  padding-right: 90px;
  position: relative;

  @media (max-width: ${viewports.small.max}px) {
    justify-content: flex-start;
    margin: ${SMALL_HEADER_TOP_OFFSET}px ${SMALL_HEADER_RIGHT_OFFSET}px ${SMALL_HEADER_TOP_OFFSET}px
      ${SMALL_HEADER_LEFT_OFFSET}px;
    padding-left: 0;
  }
`;

export const TimelineHeader = (): JSX.Element => {
  const themeId = useThemeId();
  const ThemeIcon: React.FC<SvgIconProps> = themeId === 'dark' ? SunIcon : MoonIcon;
  const toggleThemeLabel = themeId === 'dark' ? 'Use light theme' : 'Use dark theme';
  const iconColor = themeId === 'dark' ? 'P35' : 'P10';

  const { toggleThemeId } = useContext(ThemeContext);
  const handleThemeClick = () => toggleThemeId();

  return (
    <Container themeId={themeId}>
      <TimelineIcon height={40} />
      <Position location="right-center" variant="inside">
        <ButtonGroup spacing="comfy">
          <ColoredIconButton colorId={iconColor} key="theme" onClick={handleThemeClick} shape="circle" weight="inline">
            <ThemeIcon size={20} title={toggleThemeLabel} />
          </ColoredIconButton>

          <CreditsButton<typeof ColoredIconButton> key="credits">
            <ColoredIconButton colorId={iconColor} shape="circle" weight="inline">
              <HeartIcon size={20} title="Credits" />
            </ColoredIconButton>
          </CreditsButton>
        </ButtonGroup>
      </Position>
    </Container>
  );
};

TimelineHeader.displayName = 'TimelineHeader';
