import '@testing-library/jest-dom/extend-expect';
import { TimelineHeader } from 'components/TimelineHeader';
import { render } from '../utils';

jest.mock('components/CreditsButton', () => {
  return {
    CreditsButton: () => 'CreditsButton',
  };
});

describe('<TimelineHeader />', () => {
  it('should render the credits button', () => {
    const { getByText } = render(<TimelineHeader />);
    expect(getByText('CreditsButton')).toBeTruthy();
  });

  it('should render the theme button', () => {
    const { getByTitle } = render(<TimelineHeader />);
    expect(getByTitle('Use dark theme')).toBeTruthy();
  });

  it('should render the title logo', () => {
    const { getByTitle } = render(<TimelineHeader />);
    expect(getByTitle('The Phork Timeline')).toBeTruthy();
  });
});
