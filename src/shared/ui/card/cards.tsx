import { FC, PropsWithChildren } from 'react'

type CardsProps = PropsWithChildren

export const Cards: FC<CardsProps> = ({ children }) => <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-5">{children}</div>
