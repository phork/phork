import { Timeline } from 'components/Timeline';
import { render } from '../../utils';

describe('<Timeline />', () => {
  it('should render the timeline', () => {
    const { getByText } = render(<Timeline />);

    expect(getByText('2006')).toBeTruthy();
    expect(getByText('2009')).toBeTruthy();
    expect(getByText('2010')).toBeTruthy();
    expect(getByText('2011')).toBeTruthy();
    expect(getByText('2013')).toBeTruthy();
    expect(getByText('2019')).toBeTruthy();
    expect(getByText('2020')).toBeTruthy();
    expect(getByText('2021')).toBeTruthy();
    expect(getByText('NOW')).toBeTruthy();
  });
});
