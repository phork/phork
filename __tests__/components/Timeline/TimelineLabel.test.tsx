import { TimelineLabel } from 'components/Timeline/TimelineLabel';
import { render } from '../../utils';

describe('<TimelineLabel />', () => {
  it('should render the label', () => {
    const { getByText } = render(<TimelineLabel>2006</TimelineLabel>);
    expect(getByText('2006')).toBeTruthy();
  });
});
