import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { NextUIProvider } from '@nextui-org/react'

import { store } from '@app/store'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  )
}
