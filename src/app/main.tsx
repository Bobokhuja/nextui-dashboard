import { createRoot } from 'react-dom/client'

import { Providers } from '@app/providers'
import { AppRouter } from '@app/router'

import './styles/index.css'

const root = document.querySelector('#root')!

const app = createRoot(root)

app.render(
  <Providers>
    <AppRouter />
  </Providers>,
)
