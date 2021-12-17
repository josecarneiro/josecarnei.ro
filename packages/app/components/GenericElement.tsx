import { FunctionComponent } from 'react';

export type GenericElementProps = {
  tag?: keyof JSX.IntrinsicElements;
} & { className: string };

const GenericElement: FunctionComponent<GenericElementProps> = ({
  tag: Tag,
  children,
  ...props
}) => <Tag {...props}>{children}</Tag>;

export default GenericElement;
