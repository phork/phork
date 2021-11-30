import styled from '@emotion/styled';
import { ThemeProps, StraddledTimeline, useThemeId, ThemeColorIds, Typography, EyeIcon } from '@phork/phorkit';
import { useOpenLogoModal } from 'hooks/useOpenLogoModal';
import { GithubIcon } from 'icons/GithubIcon';
import { LinkIcon } from 'icons/LinkIcon';
import { RetiredIcon } from 'icons/RetiredIcon';
import { TwitterIcon } from 'icons/TwitterIcon';
import { TimelineItem } from './TimelineItem';
import { TimelineLabel } from './TimelineLabel';

const SMALL_TIMELINE_BREAKPOINT = 520;

type TimelineProps = Pick<ThemeProps, 'themeId'> & {
  width?: number;
};

const StyledTimeline = styled(StraddledTimeline)`
  font-size: 14px;
  letter-spacing: 1.2px;
`;

export const Timeline = ({ themeId: initThemeId, width = 800 }: TimelineProps): JSX.Element => {
  const themeId = useThemeId(initThemeId);
  const leftWidth = width < SMALL_TIMELINE_BREAKPOINT ? 0 : 116;
  const rightWidth = width - leftWidth;

  const labelWidth = leftWidth || rightWidth;
  const labelPosition = leftWidth ? 'left-center' : 'right-center';

  const itemWidth = rightWidth;
  const itemPosition = 'right-center';

  const { handleClick: openLogoModal } = useOpenLogoModal();

  let counter = 1;

  return (
    <StyledTimeline leftWidth={leftWidth} rightWidth={rightWidth} spacing="cozy">
      <TimelineLabel first position={labelPosition} themeId={themeId} width={labelWidth}>
        2006
      </TimelineLabel>
      <TimelineItem
        colorId={`P${(++counter * 5).toString().padStart(2, '0')}` as ThemeColorIds}
        links={[
          {
            id: 'retired',
            icon: <RetiredIcon size={20} />,
          },
        ]}
        month="January"
        position={itemPosition}
        tags={[
          { id: 'php', label: 'PHP 5' },
          { id: 'retired', label: 'Retired' },
        ]}
        themeId={themeId}
        width={itemWidth}
      >
        Started developing the Phork CMS for internal use only
      </TimelineItem>
      <TimelineLabel position={labelPosition} themeId={themeId} width={labelWidth}>
        2009
      </TimelineLabel>
      <TimelineItem
        colorId={`P${(++counter * 5).toString().padStart(2, '0')}` as ThemeColorIds}
        links={[
          {
            id: 'demo',
            icon: <LinkIcon size={16} />,
            url: 'http://phorklabs.com',
          },
        ]}
        month="September"
        position={itemPosition}
        themeId={themeId}
        width={itemWidth}
      >
        Registered <Typography variants="italic">phorklabs.com</Typography>
      </TimelineItem>
      <TimelineItem
        colorId={`P${(++counter * 5).toString().padStart(2, '0')}` as ThemeColorIds}
        links={[
          {
            id: 'twitter',
            icon: <TwitterIcon size={19} />,
            url: 'https://twitter.com/phorknews/status/3992050094',
          },
          {
            id: 'github',
            icon: <GithubIcon size={19} />,
            url: 'https://github.com/phork/framework',
          },
        ]}
        month="September"
        position={itemPosition}
        tags={[
          { id: 'php', label: 'PHP 5' },
          { id: 'open', label: 'Open source' },
          { id: 'retired', label: 'Retired' },
        ]}
        themeId={themeId}
        width={itemWidth}
      >
        Released the Phork Framework
      </TimelineItem>
      <TimelineLabel position={labelPosition} themeId={themeId} width={labelWidth}>
        2010
      </TimelineLabel>
      <TimelineItem
        colorId={`P${(++counter * 5).toString().padStart(2, '0')}` as ThemeColorIds}
        links={[
          {
            id: 'demo',
            icon: <LinkIcon size={16} />,
            url: 'https://phork.org',
          },
        ]}
        month="July"
        position={itemPosition}
        themeId={themeId}
        width={itemWidth}
      >
        Registered <Typography variants="italic">phork.org</Typography>
      </TimelineItem>
      <TimelineLabel position={labelPosition} themeId={themeId} width={labelWidth}>
        2011
      </TimelineLabel>
      <TimelineItem
        colorId={`P${(++counter * 5).toString().padStart(2, '0')}` as ThemeColorIds}
        links={[
          {
            id: 'demo',
            icon: <LinkIcon size={16} />,
            url: 'https://phorkit.org',
          },
        ]}
        month="March"
        position={itemPosition}
        themeId={themeId}
        width={itemWidth}
      >
        Registered <Typography variants="italic">phorkit.org</Typography>
      </TimelineItem>
      <TimelineItem
        colorId={`P${(++counter * 5).toString().padStart(2, '0')}` as ThemeColorIds}
        links={[
          {
            id: 'github',
            icon: <GithubIcon size={19} />,
            url: 'https://github.com/phork/phorkit-legacy',
          },
        ]}
        month="March"
        position={itemPosition}
        tags={[
          { id: 'php', label: 'PHP 5' },
          { id: 'open', label: 'Open source' },
          { id: 'retired', label: 'Retired' },
        ]}
        themeId={themeId}
        width={itemWidth}
      >
        Released Phork/it (legacy)
      </TimelineItem>
      <TimelineLabel position={labelPosition} themeId={themeId} width={labelWidth}>
        2013
      </TimelineLabel>
      <TimelineItem
        colorId={`P${(++counter * 5).toString().padStart(2, '0')}` as ThemeColorIds}
        links={[
          {
            id: 'twitter',
            icon: <TwitterIcon size={19} />,
            url: 'https://twitter.com/phorklabs/status/447954219610292224',
          },
          {
            id: 'github',
            icon: <GithubIcon size={19} />,
            url: 'https://github.com/phork/microphork',
          },
        ]}
        month="July"
        position={itemPosition}
        tags={[
          { id: 'php', label: 'PHP 5' },
          { id: 'open', label: 'Open source' },
          { id: 'retired', label: 'Retired' },
        ]}
        themeId={themeId}
        width={itemWidth}
      >
        Released the Microphork framework
      </TimelineItem>
      <TimelineLabel position={labelPosition} themeId={themeId} width={labelWidth}>
        2014
      </TimelineLabel>
      <TimelineItem
        colorId={`P${(++counter * 5).toString().padStart(2, '0')}` as ThemeColorIds}
        links={[
          {
            id: 'demo',
            icon: <LinkIcon size={16} />,
            url: 'http://phork.met',
          },
        ]}
        month="February"
        position={itemPosition}
        themeId={themeId}
        width={itemWidth}
      >
        Registered <Typography variants="italic">phork.net</Typography>
      </TimelineItem>
      <TimelineLabel position={labelPosition} themeId={themeId} width={labelWidth}>
        2019
      </TimelineLabel>
      <TimelineItem
        colorId={`P${(++counter * 5).toString().padStart(2, '0')}` as ThemeColorIds}
        links={[
          {
            id: 'github',
            icon: <GithubIcon size={19} />,
            url: 'https://github.com/phork/phorkit',
          },
          {
            id: 'demo',
            icon: <LinkIcon size={16} />,
            url: 'https://phorkit.phork.org',
          },
        ]}
        month="June"
        position={itemPosition}
        tags={[
          { id: 'react', label: 'React' },
          { id: 'typescript', label: 'TypeScript' },
          { id: 'open', label: 'Open source' },
        ]}
        themeId={themeId}
        width={itemWidth}
      >
        Started developing Phork/it
      </TimelineItem>
      <TimelineLabel position={labelPosition} themeId={themeId} width={labelWidth}>
        2020
      </TimelineLabel>
      <TimelineItem
        colorId={`P${(++counter * 5).toString().padStart(2, '0')}` as ThemeColorIds}
        links={[
          {
            id: 'demo',
            icon: <LinkIcon size={16} />,
            url: 'https://phork.works',
          },
        ]}
        month="June"
        position={itemPosition}
        themeId={themeId}
        width={itemWidth}
      >
        Registered <Typography variants="italic">phork.works</Typography>
      </TimelineItem>
      <TimelineLabel position={labelPosition} themeId={themeId} width={labelWidth}>
        2021
      </TimelineLabel>
      <TimelineItem
        colorId={`P${(++counter * 5).toString().padStart(2, '0')}` as ThemeColorIds}
        links={[
          {
            id: 'github',
            icon: <GithubIcon size={19} />,
            url: 'https://github.com/phork/phorkit',
          },
          {
            id: 'demo',
            icon: <LinkIcon size={16} />,
            url: 'https://phorkit.phork.org',
          },
        ]}
        month="March"
        position={itemPosition}
        tags={[
          { id: 'react', label: 'React' },
          { id: 'typescript', label: 'TypeScript' },
          { id: 'open', label: 'Open source' },
        ]}
        themeId={themeId}
        width={itemWidth}
      >
        Released Phork/it
      </TimelineItem>
      <TimelineItem
        last
        colorId={`P${(++counter * 5).toString().padStart(2, '0')}` as ThemeColorIds}
        links={[
          {
            id: 'logo',
            icon: <EyeIcon size={16} />,
            onClick: openLogoModal,
          },
        ]}
        month="November"
        position={itemPosition}
        themeId={themeId}
        width={itemWidth}
      >
        Redesigned the Phork logo
      </TimelineItem>
    </StyledTimeline>
  );
};

Timeline.displayName = 'Timeline';
