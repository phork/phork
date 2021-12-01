import '@testing-library/jest-dom/extend-expect';
import { TimelineItem } from 'components/Timeline/TimelineItem';
import { HeartIcon } from 'icons/HeartIcon';
import { render } from '../../utils';

describe('<TimelineItem />', () => {
  it('should render the timeline', () => {
    const { getByText, getByTitle } = render(
      <TimelineItem
        colorId="P25"
        links={[
          {
            id: 'phork',
            icon: <HeartIcon size={19} title="Phork Icon" />,
            url: 'https://phork.org',
          },
        ]}
        month="February"
        position="right-center"
        tags={[
          { id: 'react', label: 'React' },
          { id: 'typescript', label: 'TypeScript' },
          { id: 'open', label: 'Open source' },
        ]}
        themeId="dark"
        width={200}
      >
        Released the Phork Framework
      </TimelineItem>,
    );

    expect(getByText('February')).toBeTruthy();
    expect(getByText('- Released the Phork Framework')).toBeTruthy();
    expect(getByText('React')).toBeTruthy();
    expect(getByText('TypeScript')).toBeTruthy();
    expect(getByText('Open source')).toBeTruthy();

    const phorkIcon = getByTitle('Phork Icon');
    expect(phorkIcon).toBeTruthy();
    expect(phorkIcon.closest('a')).toHaveAttribute('href', 'https://phork.org');
  });
});
