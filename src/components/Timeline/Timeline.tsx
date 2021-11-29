import styled from '@emotion/styled';
import { ThemeProps, StraddledTimeline, useThemeId, ThemeColorIds, Typography } from '@phork/phorkit';
import { GithubIcon } from 'icons/GithubIcon';
import { LinkIcon } from 'icons/LinkIcon';
import { RetiredIcon } from 'icons/RetiredIcon';
import { TwitterIcon } from 'icons/TwitterIcon';
import { TimelineItem } from './TimelineItem';
import { TimelineLabel } from './TimelineLabel';

type TimelineProps = Pick<ThemeProps, 'themeId'> & {
  width?: number;
};

const StyledTimeline = styled(StraddledTimeline)`
  font-size: 14px;
  letter-spacing: 1.2px;
`;

export const Timeline = ({ themeId: initThemeId, width = 800 }: TimelineProps): JSX.Element => {
  const themeId = useThemeId(initThemeId);
  const leftWidth = 120;
  const rightWidth = width - leftWidth;
  let counter = 1;

  return (
    <StyledTimeline leftWidth={leftWidth} rightWidth={rightWidth} spacing="cozy">
      <TimelineLabel first themeId={themeId} width={leftWidth}>
        2006
      </TimelineLabel>
      <TimelineItem
        colorId={`P${(++counter * 5).toString().padStart(2, '0')}` as ThemeColorIds}
        links={[
          {
            id: 'retired',
            icon: <RetiredIcon size={20} />,
            retired: true,
          },
        ]}
        month="January"
        tags={[
          { id: 'php', label: 'PHP 5' },
          { id: 'retired', label: 'Retired' },
        ]}
        themeId={themeId}
        width={rightWidth}
      >
        Started developing the Phork CMS for internal use only
      </TimelineItem>
      <TimelineLabel themeId={themeId} width={leftWidth}>
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
        themeId={themeId}
        width={rightWidth}
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
        tags={[
          { id: 'php', label: 'PHP 5' },
          { id: 'open', label: 'Open source' },
          { id: 'retired', label: 'Retired' },
        ]}
        themeId={themeId}
        width={rightWidth}
      >
        Released the Phork Framework
      </TimelineItem>
      <TimelineLabel themeId={themeId} width={leftWidth}>
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
        themeId={themeId}
        width={rightWidth}
      >
        Registered <Typography variants="italic">phork.org</Typography>
      </TimelineItem>
      <TimelineLabel themeId={themeId} width={leftWidth}>
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
        themeId={themeId}
        width={rightWidth}
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
        tags={[
          { id: 'php', label: 'PHP 5' },
          { id: 'open', label: 'Open source' },
          { id: 'retired', label: 'Retired' },
        ]}
        themeId={themeId}
        width={rightWidth}
      >
        Released Phork/it (legacy)
      </TimelineItem>
      <TimelineLabel themeId={themeId} width={leftWidth}>
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
        tags={[
          { id: 'php', label: 'PHP 5' },
          { id: 'open', label: 'Open source' },
          { id: 'retired', label: 'Retired' },
        ]}
        themeId={themeId}
        width={rightWidth}
      >
        Released the Microphork framework
      </TimelineItem>
      <TimelineLabel themeId={themeId} width={leftWidth}>
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
        themeId={themeId}
        width={rightWidth}
      >
        Registered <Typography variants="italic">phork.net</Typography>
      </TimelineItem>
      <TimelineLabel themeId={themeId} width={leftWidth}>
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
        tags={[
          { id: 'react', label: 'React' },
          { id: 'typescript', label: 'TypeScript' },
          { id: 'open', label: 'Open source' },
        ]}
        themeId={themeId}
        width={rightWidth}
      >
        Started developing Phork/it
      </TimelineItem>
      <TimelineLabel themeId={themeId} width={leftWidth}>
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
        themeId={themeId}
        width={rightWidth}
      >
        Registered <Typography variants="italic">phork.works</Typography>
      </TimelineItem>
      <TimelineLabel themeId={themeId} width={leftWidth}>
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
        tags={[
          { id: 'react', label: 'React' },
          { id: 'typescript', label: 'TypeScript' },
          { id: 'open', label: 'Open source' },
        ]}
        themeId={themeId}
        width={rightWidth}
      >
        Released Phork/it
      </TimelineItem>
      <TimelineItem
        last
        colorId={`P${(++counter * 5).toString().padStart(2, '0')}` as ThemeColorIds}
        month="November"
        themeId={themeId}
        width={rightWidth}
      >
        Redesigned the Phork logo
      </TimelineItem>
    </StyledTimeline>
  );
};

Timeline.displayName = 'Timeline';
