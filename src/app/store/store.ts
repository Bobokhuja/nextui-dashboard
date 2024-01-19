import { configureStore } from '@reduxjs/toolkit'

import { navbarReducer } from '@shared/model'

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
})
