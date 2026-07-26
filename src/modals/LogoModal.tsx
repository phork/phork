import { v4 as uuid } from 'uuid';
import { Modal, ModalBody, ModalHeader, Rhythm, ModalProps, Flex } from '@phork/phorkit';
import { LogoGeneration } from 'types/logo';
import { PhorkVersion1Icon } from 'icons/PhorkVersion1Icon';
import { PhorkVersion2Icon } from 'icons/PhorkVersion2Icon';
import { PhorkVersion3Icon } from 'icons/PhorkVersion3Icon';

export type LogoModalProps = Omit<ModalProps, 'children' | 'focusable' | 'size'> & {
  generation: LogoGeneration;
  id?: string;
};

const ICONS = {
  first: PhorkVersion1Icon,
  second: PhorkVersion2Icon,
  third: PhorkVersion3Icon,
};

export const LogoModal = ({ generation, id: initId, ...props }: LogoModalProps): JSX.Element => {
  const id = initId || uuid();
  const Icon = ICONS[generation];

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
