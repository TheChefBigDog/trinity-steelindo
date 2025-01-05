import React, {PropsWithChildren} from 'react';
import './style.css';

type Props = PropsWithChildren<{
  level?: 1 | 2 | 3;
  className?: string;
}>;

export const Heading = ({level = 1, className, children}: Props) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{children}</Tag>;
};
