import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // it is similar to state.value = state.value+1
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    setByAmount: (state, action) => {
      state.value = action.payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, setByAmount, incrementByAmount, decrementByAmount } = counterSlice.actions

export default counterSlice.reducer