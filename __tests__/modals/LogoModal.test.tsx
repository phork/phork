import { LogoModal } from 'modals/LogoModal';
import { render } from '../utils';

describe('<LogoModal />', () => {
  it('should render the first generation logo', () => {
    const { getByTitle } = render(<LogoModal generation="first" id="logo" />);
    expect(getByTitle('Phork logo')).toBeTruthy();
  });

  it('should render the second generation logo', () => {
    const { getByTitle } = render(<LogoModal generation="second" id="logo" />);
    expect(getByTitle('Phork logo')).toBeTruthy();
  });

  it('should render the third generation logo', () => {
    const { getByTitle } = render(<LogoModal generation="third" id="logo" />);
    expect(getByTitle('Phork logo')).toBeTruthy();
  });
});
