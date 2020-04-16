// form testing
// http://localhost:3000/login
import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', async () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  const handleSubmit = jest.fn()
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  render(<Login onSubmit={handleSubmit} />)
  //
  // 🐨 get the username and password fields via `getByLabelText`
  const username = screen.getByLabelText(/username/i)
  const password = screen.getByLabelText(/password/i)
  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want
  // 💰 note that userEvent.type is async so you'll need to use `await`
  await userEvent.type(username, 'root')
  await userEvent.type(password, 'password')

  const submit = screen.getByRole('button', {name: /submit/i})

  userEvent.click(submit)

  expect(handleSubmit).toHaveBeenCalledWith({
    username: 'root',
    password: 'password',
  })
})

/* eslint no-unused-vars:0 */
