import { Fragment, memo } from 'react';
import { Helmet } from 'react-helmet';
import {
  Divider,
  Flex,
  MainPanel,
  PanelContainer,
  PermanentStackPanel,
  SizeConsumer,
  SizeProvider,
} from '@phork/phorkit';
import { PagePaper } from 'components/PagePaper';
import { Timeline } from 'components/Timeline';
import { TimelineHeader } from 'components/TimelineHeader';

const MINIMUM_TIMELINE_GUTTER = 50;
const MAXIMUM_TIMELINE_WIDTH = 800;
const MINIMUM_TIMELINE_WIDTH = 310;

const getWidth = (width?: number) => {
  if (width) {
    return Math.max(MINIMUM_TIMELINE_WIDTH, Math.min(MAXIMUM_TIMELINE_WIDTH, width - MINIMUM_TIMELINE_GUTTER * 2));
  }
  return undefined;
};

export const Home = memo(function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>The Phork Timeline</title>
      </Helmet>

      <PanelContainer viewport orientation="horizontal">
        <PermanentStackPanel position="top">
          <TimelineHeader />
          <Divider />
        </PermanentStackPanel>
        <SizeProvider observe>
          {ref => (
            <MainPanel ref={ref}>
              <PagePaper scrollable container="page" role="main">
                <Flex alignItems="center" direction="column">
                  <SizeConsumer>{({ width }) => <Timeline width={getWidth(width)} />}</SizeConsumer>
                </Flex>
              </PagePaper>
            </MainPanel>
          )}
        </SizeProvider>
      </PanelContainer>
    </Fragment>
  );
});
