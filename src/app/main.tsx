import { createRoot } from 'react-dom/client'

const root = document.querySelector('#root')!

const app = createRoot(root)

app.render(<>hello</>)
