import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TitleSliceState = { title: string }

const initialTitleSliceState: TitleSliceState = { title: 'React is awesome!' }

const titleSlice = createSlice({
  name: 'title',
  initialState: initialTitleSliceState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
      return state
    },
  },
})

export const { setTitle } = titleSlice.actions

export default titleSlice.reducer

