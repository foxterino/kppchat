import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  textVisuallyHidden?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  textVisuallyHidden,
  ...props
}) => {
  return <label {...props}>{children}</label>;
};
