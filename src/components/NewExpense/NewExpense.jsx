import React, { useState } from "react"
import '../../assets/css/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isNewExpense, setIsNewExpense] = useState(true);

    const handleFormOpen = () => {
        if (isNewExpense) {
            setIsNewExpense(false)
        }
        else {setIsNewExpense(true)}
    }

    const handleSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    } 

    return (
        <div className="new-expense">
            {isNewExpense ? (
                <button onClick={handleFormOpen}>Add New Expense</button>
            ) :(
                <ExpenseForm onSaveExpenseData={handleSaveExpenseData} onHandleFormOpen={handleFormOpen}/>
            )}
        </div>
    )

}

export default NewExpense;