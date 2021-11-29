import '@testing-library/jest-dom/extend-expect';
import { Home } from 'pages/Home/Home';
import { render } from '../utils';

jest.mock('components/CreditsButton', () => {
  return {
    CreditsButton: () => 'CreditsButton',
    Timeline: () => 'Timeline',
  };
});

describe('<Home />', () => {
  it('should render credits button', () => {
    const { getByText } = render(<Home />);
    expect(getByText('CreditsButton')).toBeTruthy();
  });

  it('should render the timeline', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Timeline')).toBeTruthy();
  });
});
