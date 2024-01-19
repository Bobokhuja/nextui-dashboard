import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface NavbarState {
  expanded: boolean
  expandedItem: string | null
  hidden: boolean
}

const initialState: NavbarState = {
  expanded: true,
  expandedItem: null,
  hidden: false,
}

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    expand(state) {
      state.expanded = true
    },
    collapse(state) {
      state.expanded = false
    },
    toggle(state) {
      state.expanded = !state.expanded
      state.hidden = !state.hidden
    },
    selectItem(state, action: PayloadAction<string>) {
      state.expandedItem = action.payload
    },
    toggleItem(state, action: PayloadAction<string>) {
      state.expandedItem =
        state.expandedItem === action.payload ? null : action.payload
    },
    hide(state) {
      state.hidden = true
    },
    show(state) {
      state.hidden = false
    },
  },
})

export const { expand, toggle, collapse, toggleItem, selectItem, hide, show } =
  navbarSlice.actions
export const reducer = navbarSlice.reducer
export const selector = (state: RootState) => state.navbar
export const selectorItem = (key: string) => (state: RootState) => ({
  ...state.navbar,
  activeItem: key === state.navbar.expandedItem,
})
