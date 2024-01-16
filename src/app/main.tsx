import { createRoot } from 'react-dom/client'

import { Providers } from '@app/providers'

const root = document.querySelector('#root')!

const app = createRoot(root)

app.render(<Providers />)
