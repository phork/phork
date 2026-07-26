import { cx } from '@emotion/css';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import { Rhythm, Theme, useThemeId } from '@phork/phorkit';
import focusRing from '@phork/phorkit/styles/modules/common/FocusRing.module.css';
import { APP_NAME } from 'config/strings';
import { themes } from 'config/themes';
import { MissingContentAlert } from 'components/MissingContentAlert';
import { PagePaper } from 'components/PagePaper';

const PatternPaper = styled(PagePaper)`
  ${({ themeId = 'light' }) => `
  background-image: url('/static/images/phork-pattern-${themeId}.svg');
  background-repeat: repeat;
`}
`;

const StyledLink = styled.a<{ themeId: Theme }>`
  ${({ themeId = 'light' }) => `
  border-radius: 100%;
  display: block;
  position: relative;

  --focus-ring-color: ${themes[themeId]['color-accent']};
  --focus-ring-size: 16px;

  &:active {
    --focus-ring-opacity: 0.4;
  }
`}
`;

export const FourOhFour = (): React.ReactElement => {
  const themeId = useThemeId();

  return (
    <PatternPaper centered flexible themeId={themeId}>
      <Helmet>
        <title>{`${APP_NAME} - 404`}</title>
      </Helmet>

      <Rhythm grouped my={6}>
        <StyledLink className={cx(focusRing.focusRing, focusRing['focusRing--hoverable'])} href="/" themeId={themeId}>
          <MissingContentAlert raised color="primary" message="Page not found" />
        </StyledLink>
      </Rhythm>
    </PatternPaper>
  );
};
