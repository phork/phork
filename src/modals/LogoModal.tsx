import { v4 as uuid } from 'uuid';
import { Modal, ModalBody, ModalHeader, Rhythm, ModalProps, Flex } from '@phork/phorkit';
import { PhorkIcon } from 'icons/PhorkIcon';

export type LogoModalProps = Omit<ModalProps, 'children' | 'focusable' | 'size'> & { id?: string };

export const LogoModal = ({ id: initId, ...props }: LogoModalProps): JSX.Element => {
  const id = initId || uuid();

  return (
    <Modal focusable contextId={id} size="medium" {...props}>
      <ModalHeader key="header" modalId={id} />
      <ModalBody scrollable key="content">
        <Flex full alignItems="center" justifyContent="center">
          <Rhythm mb={12} mt={4}>
            <PhorkIcon size={220} />
          </Rhythm>
        </Flex>
      </ModalBody>
    </Modal>
  );
};
