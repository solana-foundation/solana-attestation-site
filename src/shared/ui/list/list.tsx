import { FC, PropsWithChildren } from 'react'

type ListProps = PropsWithChildren

export const List: FC<ListProps> = ({ children }) => <div className="flex flex-col gap-5">{children}</div>
