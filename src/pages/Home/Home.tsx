import { Fragment, memo } from 'react';
import { Helmet } from 'react-helmet';
import { PagePaper } from 'components/PagePaper';
import { PhorkIcon } from '../../icons/PhorkIcon';

export const HomePage = memo(function HomePage() {
  return (
    <Fragment>
      <Helmet>
        <title>Phork</title>
      </Helmet>

      <PagePaper centered flexible container="page" role="main">
        <PhorkIcon style={{ maxWidth: '300px', minWidth: '100px' }} width="80%" />
      </PagePaper>
    </Fragment>
  );
});
