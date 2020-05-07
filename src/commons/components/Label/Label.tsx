import React from 'react';
import './style.css';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  hidden?: boolean;
}

export const Label: React.FC<LabelProps> = ({ children, hidden, ...props }) => {
  return (
    <label className={hidden ? 'label-hidden' : ''} {...props}>
      {children}
    </label>
  );
};
