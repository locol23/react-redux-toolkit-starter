import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CounterSliceState = { count: number }

const initialCounterSliceState: CounterSliceState = { count: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterSliceState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => ({
      count: state.count + action.payload,
    }),
    decrement: (state) => ({ count: state.count - 1 }),
  },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer

