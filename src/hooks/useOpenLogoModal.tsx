import { lazy, Suspense, useCallback, useContext } from 'react';
import { ForwardProps, ModalContext } from '@phork/phorkit';
import { ModalLoader } from 'modals/ModalLoader';

const LogoModal = lazy(() => import('modals/LogoModal').then(({ LogoModal }) => ({ default: LogoModal })));
const MODAL_ID = 'logo';

export type UseOpenLogoModalResponse = {
  handleClick: () => void;
};

export const useOpenLogoModal = (): UseOpenLogoModalResponse => {
  const { createModal } = useContext(ModalContext);

  const handleClick = useCallback(() => {
    createModal(
      <ForwardProps>
        {props => (
          <Suspense fallback={<ModalLoader size="medium" />}>
            <LogoModal id={MODAL_ID} {...props} />
          </Suspense>
        )}
      </ForwardProps>,
    );
  }, [createModal]);

  return { handleClick };
};
