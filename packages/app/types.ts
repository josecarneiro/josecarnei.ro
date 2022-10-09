import type { FunctionComponent, PropsWithChildren } from 'react';

export type FunctionComponentWithChildren<Props = {}> = FunctionComponent<
  PropsWithChildren<Props>
>;
