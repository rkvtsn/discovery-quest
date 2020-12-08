import React, { PropsWithChildren } from 'react';
import { IButton } from './interfaces';

const Button = ({ children, onClick }: PropsWithChildren<IButton>) => {
  return (
    <button onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
