import '@testing-library/jest-dom/extend-expect';
import { LogoModal } from 'modals/LogoModal';
import { render } from '../utils';

describe('<LogoModal />', () => {
  it('should render the current logo', () => {
    const { getByTitle } = render(<LogoModal generation="current" id="logo" />);
    expect(getByTitle('Phork logo')).toBeTruthy();
  });

  it('should render the retro logo', () => {
    const { getByTitle } = render(<LogoModal generation="retro" id="logo" />);
    expect(getByTitle('Phork logo')).toBeTruthy();
  });
});
