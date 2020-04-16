// simple test with ReactDOM
// http://localhost:3000/counter
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

const getMessageText = count => `Current count: ${count}`

describe('<Counter />', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('initial render is 0', () => {
    const root = document.createElement('div')
    document.body.appendChild(root)

    ReactDOM.render(<Counter />, root)

    const [decrement, increment] = root.querySelectorAll('button')
    const messageDiv = root.firstChild.querySelector('div')

    expect(messageDiv.textContent).toBe(getMessageText(0))
  })

  test('counter increments when the button is clicked', () => {
    const root = document.createElement('div')
    document.body.appendChild(root)

    ReactDOM.render(<Counter />, root)

    const [decrement, increment] = root.querySelectorAll('button')
    const messageDiv = root.firstChild.querySelector('div')

    expect(messageDiv.textContent).toBe(getMessageText(0))

    // document.body.removeChild(root);

    // ✅🐨 create a div to render your component to (💰 document.createElement)
    //
    // ✅🐨 append the div to document.body (💰 document.body.appendChild)
    //
    // 🐨 use ReactDOM.render to render the <Counter /> to the div
    // 🐨 get a reference to the increment and decrement buttons:
    //   💰 div.querySelectorAll('button')
    // 🐨 get a reference to the message div:
    //   💰 div.firstChild.querySelector('div')
    //
    // 🐨 expect the message.textContent toBe 'Current count: 0'
    // 🐨 click the increment button (💰 increment.click())
    // 🐨 assert the message.textContent
    // 🐨 click the decrement button (💰 decrement.click())
    // 🐨 assert the message.textContent
    //
    // 🐨 cleanup by removing the div from the page (💰 document.body.removeChild(div))
    // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
  })
})

/* eslint no-unused-vars:0 */
