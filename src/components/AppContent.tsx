import styled from '@emotion/styled';
import { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary, Paper, PaperProps, SizeProvider } from '@phork/phorkit';
import { LineLoader } from 'components/LineLoader';
import FourOhFour from 'pages/FourOhFour';
import Home from 'pages/Home';
import Timeline from 'pages/Timeline';

const ViewportPaper = styled(Paper)`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
`;

export type AppContentProps = Omit<PaperProps, 'children' | 'color' | 'scrollable'>;

export const AppContent = (props: AppContentProps): React.ReactElement => {
  return (
    <Router>
      <SizeProvider observe decimalPlaces={0}>
        {ref => (
          <ViewportPaper scrollable color="primary" ref={ref} tabIndex={-1} {...props}>
            <ErrorBoundary variant="page">
              <Suspense fallback={<LineLoader fixed position="top" />}>
                <Switch>
                  <Route exact component={Home} path="/" />
                  <Route exact component={Timeline} path="/timeline" />
                  <Route>
                    <FourOhFour />
                  </Route>
                </Switch>
              </Suspense>
            </ErrorBoundary>
          </ViewportPaper>
        )}
      </SizeProvider>
    </Router>
  );
};
