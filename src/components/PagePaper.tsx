import styled from '@emotion/styled';
import { Paper, PaperProps } from '@phork/phorkit';
import {
  PAPER_TOP_OFFSET,
  PAPER_SIDE_OFFSET,
  SMALL_PAPER_TOP_OFFSET,
  SMALL_PAPER_SIDE_OFFSET,
  PAPER_BOTTOM_OFFSET,
  SMALL_PAPER_BOTTOM_OFFSET,
} from 'config/sizes';
import { viewports } from 'config/viewports';

export type PagePaperProps = PaperProps & {
  autoHeight?: boolean;
  centered?: boolean;
};

export const PagePaper = styled(Paper, {
  shouldForwardProp: (prop: string) => !['autoHeight', 'centered'].includes(prop),
})<{ autoHeight?: boolean; centered?: boolean }>`
  ${({ autoHeight }) => !autoHeight && 'min-height: 100%;'}
  ${({ centered }) => centered && `align-items: center; justify-content: center;`}

  background: transparent;
  padding: ${PAPER_TOP_OFFSET}px ${PAPER_SIDE_OFFSET}px ${PAPER_BOTTOM_OFFSET}px;

  @media (max-width: ${viewports.small.max}px) {
    padding: ${SMALL_PAPER_TOP_OFFSET}px ${SMALL_PAPER_SIDE_OFFSET}px ${SMALL_PAPER_BOTTOM_OFFSET}px;
  }

  @media (orientation: landscape) and (max-width: ${viewports.large.max}px) {
    padding: ${SMALL_PAPER_TOP_OFFSET}px ${SMALL_PAPER_SIDE_OFFSET}px ${SMALL_PAPER_BOTTOM_OFFSET}px;
  }
`;

PagePaper.displayName = 'PagePaper';
