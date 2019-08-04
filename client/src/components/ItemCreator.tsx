import React, { FunctionComponent, useState, FormEvent } from 'react';
import { connect } from 'react-redux';
import { actions } from 're-ducks/modules/item';
import useBoolean, { UseBoolean } from 'hooks/useBoolean';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import ItemForm from 'components/form/ItemForm';

export interface ItemCreatorProps {
  addItem: (name: string) => void;
}

const ItemCreator: FunctionComponent<ItemCreatorProps> = ({ addItem }) => {
  const initialValue: string = '';

  const { value: isOpen, toggle }: UseBoolean = useBoolean();
  const [name, setName] = useState<string>(initialValue);

  const handleNameChange = (event: FormEvent<HTMLInputElement>): void => {
    const name: string = (event.target as HTMLInputElement).value;

    setName(name);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    addItem(name);
    setName('');
    toggle();
  };

  const handleReset = (): void => {
    setName(initialValue);
  };

  const handleCancel = (): void => {
    toggle();
  };

  return (
    <div className="item-creator">
      <Button color="light" size="md" onClick={toggle}>
        Add Item
      </Button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <ItemForm
            value={name}
            onChange={handleNameChange}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            onReset={handleReset}
          />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default connect(
  null,
  { addItem: actions.addItem }
)(ItemCreator);
