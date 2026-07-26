import { Fragment, memo } from 'react';
import { Helmet } from 'react-helmet';
import { PagePaper } from 'components/PagePaper';
import { PhorkVersion3Icon as PhorkIcon } from '../../icons/PhorkVersion3Icon';

export const HomePage = memo(function HomePage() {
  return (
    <Fragment>
      <Helmet>
        <title>Phork</title>
      </Helmet>

      <PagePaper centered flexible container="page" role="main">
        <PhorkIcon id="phork" title="Phork Logo" width="200" />
      </PagePaper>
    </Fragment>
  );
});
