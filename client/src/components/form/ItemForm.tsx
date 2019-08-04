import React, { FunctionComponent, FormEvent, MouseEvent } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export interface ItemFormProps {
  value: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onReset?: (event: MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ItemForm: FunctionComponent<ItemFormProps> = ({
  value,
  onChange,
  onSubmit,
  onReset,
  onCancel
}) => (
  <Form onSubmit={onSubmit}>
    <FormGroup>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="Enter the item name"
        value={value}
        onChange={onChange}
        required
      />
    </FormGroup>
    <Button color="light" size="sm" type="submit">
      Add
    </Button>
    {onReset && (
      <Button
        className="ml-2"
        color="warning"
        size="sm"
        type="button"
        onClick={onReset}
      >
        Reset
      </Button>
    )}
    {onCancel && (
      <Button
        className="ml-2"
        color="danger"
        size="sm"
        type="button"
        onClick={onCancel}
      >
        Cancel
      </Button>
    )}
  </Form>
);

export default ItemForm;
