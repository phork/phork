import { Fragment, memo } from 'react';
import { Helmet } from 'react-helmet';
import { ColoredIconButton, Position, Rhythm } from '@phork/phorkit';
import { APP_NAME } from 'config/strings';
import { CreditsButton } from 'components/CreditsButton';
import { PagePaper } from 'components/PagePaper';
import { HeartIcon } from 'icons/HeartIcon';
import { PhorkIcon } from 'icons/PhorkIcon';

export const Home = memo(function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>{APP_NAME}</title>
      </Helmet>

      <Fragment>
        <PagePaper flexible role="main" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Rhythm py={4}>
            <ColoredIconButton<'a'>
              as="a"
              colorId="P10"
              href="https://phorkit.phork.org"
              rel="noopener"
              shape="circle"
              size={undefined}
              target="_blank"
              weight="inline"
            >
              <PhorkIcon size={280} title="Phork/it component library" />
            </ColoredIconButton>
          </Rhythm>

          <Position location="bottom-right" variant="inside">
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
