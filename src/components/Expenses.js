import React from 'react'

export const Expense = ({ expense, expenseNumber }) => (
    <div className="expense">
        {/*.toString()*/}: {/*expense.date>>*/expense?.date ?? "yyyy-mm-dd"/*<<*/} - ${/*expense.amount >>*/expense?.amount ?? "-"/*<<*/}
    </div>
)

const Expenses = ({ expenses }) => (
    <div className="expenses">
        {/*<p>The first expense's amount is {Array.isArray(expenses) && expenses[0].amount}</p>*/}
        {/*>>*/ Array.isArray(expenses) && /*<<*/ expenses.map((expense, i) => <Expense /*>>*/ key={i} /*<<*/ expense={expense} /*>>*/ expenseNumber={i} /*<<*/ />)}
    </div>
)

export default Expenses