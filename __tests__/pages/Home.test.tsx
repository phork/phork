import '@testing-library/jest-dom/extend-expect';
import Home from 'pages/Home';
import { render } from '../utils';

describe('<Home />', () => {
  it('should render the logo', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Phork Logo')).toBeTruthy();
  });
});
