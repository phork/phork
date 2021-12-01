import { lazy, Suspense, useCallback, useContext } from 'react';
import { ForwardProps, ModalContext } from '@phork/phorkit';
import { LogoGeneration } from 'types/logo';
import { ModalLoader } from 'modals/ModalLoader';

const LogoModal = lazy(() => import('modals/LogoModal').then(({ LogoModal }) => ({ default: LogoModal })));
const MODAL_ID = 'logo';

export type UseOpenLogoModalProps = {
  generation?: LogoGeneration;
};

export type UseOpenLogoModalResponse = {
  handleClick: () => void;
};

export const useOpenLogoModal = ({ generation = 'current' }: UseOpenLogoModalProps): UseOpenLogoModalResponse => {
  const { createModal } = useContext(ModalContext);

  const handleClick = useCallback(() => {
    createModal(
      <ForwardProps>
        {props => (
          <Suspense fallback={<ModalLoader size="medium" />}>
            <LogoModal generation={generation} id={MODAL_ID} {...props} />
          </Suspense>
        )}
      </ForwardProps>,
    );
  }, [createModal, generation]);

  return { handleClick };
};
