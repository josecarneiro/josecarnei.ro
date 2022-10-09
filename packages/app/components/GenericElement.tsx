import type { FunctionComponentWithChildren } from '../types';

export type GenericElementProps = {
  tag?: keyof JSX.IntrinsicElements;
} & { className: string };

const GenericElement: FunctionComponentWithChildren<GenericElementProps> = ({
  tag: Tag,
  children,
  ...props
}) => <Tag {...props}>{children}</Tag>;

export default GenericElement;
