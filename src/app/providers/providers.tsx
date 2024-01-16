import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'

import { store } from '@app/store'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NextUIProvider>{children}</NextUIProvider>
      </Provider>
    </BrowserRouter>
  )
}
