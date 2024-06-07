import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FilterState = {
  term?: string
  criteria: string
}

const initialState: FilterState = {
  term: '',
  criteria: 'normal'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<string>) => {
      state.criteria = action.payload
    }
  }
})

export const { changeTerm, changeFilter } = filtroSlice.actions
export default filtroSlice.reducer
