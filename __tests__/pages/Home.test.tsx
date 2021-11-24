import '@testing-library/jest-dom/extend-expect';
import { Home } from 'pages/Home/Home';
import { render } from '../utils';

jest.mock('components/CreditsButton', () => {
  return {
    CreditsButton: () => 'CreditsButton',
  };
});

describe('<Home />', () => {
  it('should render credits button', () => {
    const { getByText } = render(<Home />);
    expect(getByText('CreditsButton')).toBeTruthy();
  });

  it('should render the Phork/it link', () => {
    const { getByTitle } = render(<Home />);

    expect(getByTitle('Phork/it component library')).toBeTruthy();
    expect(getByTitle('Phork/it component library').closest('a')).toHaveAttribute('href', 'https://phorkit.phork.org');
  });
});
