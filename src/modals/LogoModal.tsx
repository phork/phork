import { v4 as uuid } from 'uuid';
import { Modal, ModalBody, ModalHeader, Rhythm, ModalProps, Flex } from '@phork/phorkit';
import { LogoGeneration } from 'types/logo';
import { PhorkIcon } from 'icons/PhorkIcon';
import { PhorkRetroIcon } from 'icons/PhorkRetroIcon';

export type LogoModalProps = Omit<ModalProps, 'children' | 'focusable' | 'size'> & {
  generation: LogoGeneration;
  id?: string;
};

export const LogoModal = ({ generation, id: initId, ...props }: LogoModalProps): JSX.Element => {
  const id = initId || uuid();
  const Icon = (generation === 'retro' && PhorkRetroIcon) || PhorkIcon;

  return (
    <Modal focusable contextId={id} size="medium" {...props}>
      <ModalHeader key="header" modalId={id} />
      <ModalBody scrollable key="content">
        <Flex full alignItems="center" justifyContent="center">
          <Rhythm mb={12} mt={4}>
            <Icon size={220} title="Phork logo" />
          </Rhythm>
        </Flex>
      </ModalBody>
    </Modal>
  );
};
