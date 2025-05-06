import { FC, PropsWithChildren } from 'react'

type UsingProps = PropsWithChildren

export const Using: FC<UsingProps> = ({ children }) => <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] gap-5">{children}</div>
