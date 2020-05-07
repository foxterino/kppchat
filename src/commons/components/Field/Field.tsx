import React from 'react';
import { FormGroup, FormInput } from 'shards-react';
import { Label } from '../Label';
import './style.css';

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  withoutLabel?: boolean;
}

export const Field: React.FC<FieldProps> = ({
  label,
  withoutLabel = false,
  children,
  ...props
}) => {
  return (
    <FormGroup>
      <div className="form-group-header">
        <Label htmlFor={props.id} hidden={withoutLabel}>
          {label}
        </Label>
        {children}
      </div>
      <FormInput {...props} />
    </FormGroup>
  );
};
