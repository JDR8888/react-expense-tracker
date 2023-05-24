import React, { useState } from "react";
import '../../assets/css/ExpenseForm.css';

const ExpenseForm = (props)  => {

    const [formState, setFormState] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    });
    const handleTitleChange = (event) => {
        setFormState((prevState) => {
            return{...prevState,
            enteredTitle: event.target.value }
        });
    }
    const handleAmountChange = (event) => {
        setFormState((prevState) => {
            return{...prevState,
            enteredAmount: event.target.value }
        });
    }     
    const handleDateChange = (event) => {
        setFormState((prevState) => {
            return{...prevState,
            enteredDate: event.target.value }
        });   
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const expenseData = {
            title: formState.enteredTitle,
            amount: formState.enteredAmount,
            date: new Date(formState.enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        // reset the form
        setFormState({
            enteredAmount: "",
            enteredTitle: "",
            enteredDate: ""
        })
        props.onHandleFormOpen()
    }

    return (
                <form onSubmit={handleSubmit}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label> Title </label>
                        <input type="text" onChange={handleTitleChange} value={formState.enteredTitle} />
                    </div>
                    <div className="new-expense__control">
                        <label> Amount </label>
                        <input type="number" min="0.01" step="0.01" onChange={handleAmountChange} value={formState.enteredAmount} />
                    </div>
                    <div className="new-expense__control">
                        <label> Date </label>
                        <input type="date" min="2023-01-01" max="2023-12-31" onChange={handleDateChange} value={formState.enteredDate} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button  type="submit"> Add Expense </button>
                    <button type="button" onClick={props.onHandleFormOpen}> Cancel </button>
                </div>
            </form>       
    )
}
export default ExpenseForm;