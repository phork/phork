import '@testing-library/jest-dom/extend-expect';
import { LogoModal } from 'modals/LogoModal';
import { render } from '../utils';

describe('<LogoModal />', () => {
  it('should render the logo', () => {
    const { getByTitle } = render(<LogoModal id="logo" />);

    expect(getByTitle('Phork logo')).toBeTruthy();
  });
});
