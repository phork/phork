import { Fragment, memo } from 'react';
import { Helmet } from 'react-helmet';
import { PagePaper } from 'components/PagePaper';
import { PhorkIcon } from 'components/PhorkIcon';

export const HomePage = memo(function HomePage() {
  return (
    <Fragment>
      <Helmet>
        <title>Phork</title>
      </Helmet>

      <PagePaper centered flexible container="page" role="main">
        <PhorkIcon id="phork" style={{ maxWidth: '40dvw' }} title="Phork Logo" width="200" />
      </PagePaper>
    </Fragment>
  );
});
