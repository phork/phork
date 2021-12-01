import { TimelineItemPaper } from 'components/Timeline/TimelineItemPaper';
import { render } from '../../utils';

describe('<TimelineItemPaper />', () => {
  it('should render the children', () => {
    const { getByText } = render(<TimelineItemPaper borderColor="yellow">Hello world</TimelineItemPaper>);
    expect(getByText('Hello world')).toBeTruthy();
  });

  it('should accept the rest of the props', () => {
    render(
      <TimelineItemPaper borderColor="yellow" className="item" id="item" style={{ color: 'red' }} themeId="dark">
        Hello world
      </TimelineItemPaper>,
    );

    const item = document.getElementById('item');
    expect(item?.nodeName).toBe('DIV');
    expect(item?.style.getPropertyValue('color')).toBe('red');
  });
});
