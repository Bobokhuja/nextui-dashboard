import { createRoot } from 'react-dom/client'

import { Providers } from '@app/providers'

import './styles/index.css'

const root = document.querySelector('#root')!

const app = createRoot(root)

app.render(<Providers />)
