import React from 'react';
import { Label } from '../Label';

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  withoutLabel?: boolean;
}

export const Field: React.FC<FieldProps> = ({
  label,
  withoutLabel = false,
  ...props
}) => {
  return (
    <div>
      <Label htmlFor={props.id} textVisuallyHidden={withoutLabel}>
        {label}
      </Label>
      <input {...props} />
    </div>
  );
};
