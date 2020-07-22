import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './reducers'
import { increment, decrement } from './reducers/counter'
import { setTitle } from './reducers/title'

export const App = () => {
  const dispatch = useDispatch()

  const { title } = useSelector((state: RootState) => state.title)
  const onClick = () => dispatch(setTitle('Redux is awesome!'))

  const { count } = useSelector((state: RootState) => state.counter)
  const inc = () => dispatch(increment(1))
  const dec = () => dispatch(decrement())

  return (
    <>
      <div>{title}</div>
      <button onClick={onClick}>change title</button>
      <div>{count}</div>
      <button onClick={inc}>increment</button>
      <button onClick={dec}>decrement</button>
    </>
  )
}
