import { PropsWithChildren, ReactNode, Suspense } from 'react'

import { PageLoader } from '@shared/ui'

interface Props extends PropsWithChildren {
  loader?: ReactNode
}

export const WithLoader = ({ loader, children }: Props) => {
  return <Suspense fallback={loader ?? <PageLoader />}>{children}</Suspense>
}
