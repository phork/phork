import { Fragment, memo } from 'react';
import { Helmet } from 'react-helmet';
import { ColoredIconButton, Position, Rhythm } from '@phork/phorkit';
import { APP_NAME } from 'config/strings';
import { CreditsButton } from 'components/CreditsButton';
import { PagePaper } from 'components/PagePaper';
import { Timeline } from 'components/Timeline';
import { HeartIcon } from 'icons/HeartIcon';

export const Home = memo(function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>{APP_NAME}</title>
      </Helmet>

      <Fragment>
        <PagePaper flexible role="main" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Rhythm py={4}>
            <Timeline />
          </Rhythm>

          <Position fixed location="bottom-right" variant="inside">
            <Rhythm m={4}>
              <CreditsButton<typeof ColoredIconButton>>
                <ColoredIconButton colorId="P35" shape="circle" weight="inline">
                  <HeartIcon size={20} title="Credits" />
                </ColoredIconButton>
              </CreditsButton>
            </Rhythm>
          </Position>
        </PagePaper>
      </Fragment>
    </Fragment>
  );
});
