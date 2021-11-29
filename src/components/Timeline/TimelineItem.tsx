import {
  ButtonGroup,
  ColoredIconButton,
  Flex,
  IconButton,
  Rhythm,
  TagGroup,
  TagGroupItem,
  ThemeColorIds,
  themes,
  TimelineMarkerItem,
  TimelineMarkerItemProps,
  Typography,
  useThemeId,
} from '@phork/phorkit';
import { TimelineItemPaper } from './TimelineItemPaper';

export type LinkItem = {
  id: string;
  icon: React.ReactElement;
} & (
  | {
      retired?: never;
      url: string;
    }
  | {
      retired: true;
      url?: never;
    }
);

export type TimelineItemProps = Pick<TimelineMarkerItemProps, 'first' | 'last' | 'position' | 'width' | 'themeId'> & {
  children: React.ReactChild | React.ReactFragment;
  colorId: ThemeColorIds;
  links?: LinkItem[];
  month?: string;
  tags?: TagGroupItem[];
};

export const TimelineItem = ({
  children,
  colorId,
  links,
  month,
  tags,
  themeId: initThemeId,
  ...props
}: TimelineItemProps): JSX.Element => {
  const themeId = useThemeId(initThemeId);
  const color = themes[themeId][`color-${colorId}`];

  const style = {
    '--timeline-item-connector-color': themes[themeId]['primary-palette-border-color'],
    '--timeline-item-state-color': color,
    '--status-bubble-triangle-color': color,
  } as React.CSSProperties;

  return (
    <TimelineMarkerItem squared unbordered unthemed style={style} triangleSize={8} {...props}>
      <TimelineItemPaper borderColor={color} color="tertiary">
        <Flex alignItems="flex-start" direction="row" justifyContent="space-between">
          <div>
            <Typography variants="medium-caps">{month}</Typography> - {children}
            {tags && (
              <Rhythm mt={3}>
                <TagGroup shape="pill" size="xsmall" tags={tags} weight="shaded" />
              </Rhythm>
            )}
          </div>

          {links && (
            <ButtonGroup spacing="cozy">
              {links.map(({ id, icon, retired, url }) =>
                retired ? (
                  <IconButton<'a'> disabled as="a" color={themeId === 'dark' ? 'white' : 'black'} key={id}>
                    {icon}
                  </IconButton>
                ) : (
                  <ColoredIconButton<'a'>
                    as="a"
                    colorId={colorId}
                    disabled={retired}
                    href={url}
                    key={id}
                    target="_blank"
                    weight="inline"
                  >
                    {icon}
                  </ColoredIconButton>
                ),
              )}
            </ButtonGroup>
          )}
        </Flex>
      </TimelineItemPaper>
    </TimelineMarkerItem>
  );
};

TimelineItem.displayName = 'TimelineItem';
