import styled from '@emotion/styled';
import { Paper } from '@phork/phorkit';

export const TimelineItemPaper = styled(Paper, {
  shouldForwardProp: (prop: string) => prop !== 'borderColor',
})<{ borderColor: string }>`
  border-left: ${({ borderColor }) => `5px solid ${borderColor}`};
  padding: 16px;
`;
