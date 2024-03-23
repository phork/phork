import '@testing-library/jest-dom/extend-expect';
import Timeline from 'pages/Timeline';
import { render } from '../utils';

jest.mock('components/TimelineHeader', () => {
  return {
    TimelineHeader: () => 'TimelineHeader',
  };
});

describe('<Timeline />', () => {
  it('should render the timeline header', () => {
    const { getByText } = render(<Timeline />);
    expect(getByText('TimelineHeader')).toBeTruthy();
  });

  it('should render the timeline content', () => {
    const { getByText } = render(<Timeline />);
    expect(getByText('2006')).toBeTruthy();
    expect(getByText('NOW')).toBeTruthy();
    expect(getByText('Released the Phork Framework')).toBeTruthy();
    expect(getByText('Phork/it development continues')).toBeTruthy();
  });
});
