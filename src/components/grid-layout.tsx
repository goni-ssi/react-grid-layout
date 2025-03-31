import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const GridLayout = ({ children }: Props) => {
  return <div style={{ position: 'relative' }}>{children}</div>;
};

