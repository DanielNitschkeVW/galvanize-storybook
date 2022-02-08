import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

// import { MemoryRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import configureMockStore from 'redux-mock-store'
// import fetchMock from 'fetch-mock'

import Expenses, { Expense } from './Expenses'

describe('Expense', () => {
    it("renders with empty expense", () => {
        const div = document.createElement('div')
        ReactDOM.render(<Expense />, div)
    })

    it("renders with invalid expense", () => {
        const expense = undefined
        const expenseNumber = 1234
        const div = document.createElement('div')
        ReactDOM.render(<Expense expense={expense} expenseNumber={expenseNumber}/>, div)
    })

    it("renders with valid expense", () => {
        const expense = { date: '2017-04-05', amount: 4 }
        const expenseNumber = 1234
        const div = document.createElement('div')
        ReactDOM.render(<Expense expense={expense} expenseNumber={expenseNumber}/>, div)
    })
})

describe('Expenses', () => {
    it("renders with empty expenses", () => {
        const div = document.createElement('div')
        ReactDOM.render(<Expenses />, div)
    })

    it("renders with expenses of empty array", () => {
        const div = document.createElement('div')
        ReactDOM.render(<Expenses expenses={[]} />, div)
    })

    it("renders with expenses with array of undefineds and nulls", () => {
        const div = document.createElement('div')
        ReactDOM.render(<Expenses expenses={[undefined, null, undefined, null]} />, div)
    })
    
    it("renders with expenses and two valid entries", () => {
        const expenses = [
            { date: '2017-04-05', amount: 0 },
            { date: '2017-04-05', amount: 4 },
          ]
        const div = document.createElement('div')
        ReactDOM.render(<Expenses expenses={expenses} />, div)
    })
})
