import { Helmet } from 'react-helmet';
import { AccessibilityProvider, Modals, Theme, ThemeProvider } from '@phork/phorkit';
import { APP_NAME } from 'config/strings';
import { AppContent } from 'components/AppContent';

export type AppProps = {
  themeId: Theme;
};

export const App = ({ themeId }: AppProps): React.ReactElement => (
  <ThemeProvider themeId={themeId}>
    <AccessibilityProvider>
      <Modals>
        <Helmet>
          <title>{APP_NAME}</title>
          <script async src="/static/scripts/matomo.js" type="text/javascript" />
        </Helmet>

        <AppContent />
      </Modals>
    </AccessibilityProvider>
  </ThemeProvider>
);

App.displayName = 'App';
