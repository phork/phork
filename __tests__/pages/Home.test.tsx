import '@testing-library/jest-dom/extend-expect';
import { Home } from 'pages/Home/Home';
import { render } from '../utils';

jest.mock('components/TimelineHeader', () => {
  return {
    TimelineHeader: () => 'TimelineHeader',
  };
});

describe('<Home />', () => {
  it('should render the timeline header', () => {
    const { getByText } = render(<Home />);
    expect(getByText('TimelineHeader')).toBeTruthy();
  });
});
