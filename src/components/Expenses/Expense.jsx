import React, { useState } from "react";
import ExpenseItem from "./ExpenseItems";
import '../../assets/css/Expense.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {

    const [filteredYear, setFilteredYear] = useState("2023");
    const handleFilter = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.expense.filter(expense => {
        // our filtered year is a string, so to compare that to the date object of each expense object, we need to just get the year from the date (with getFullYear()) and then convert it to a string. DO NOT FORGET THE () on getFullYear!!!!! it is a method.
        return expense.date.getFullYear().toString() === filteredYear;
    })
    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilter={handleFilter} selected={filteredYear} />
                <ExpensesChart expenses={filteredExpenses}/>
                {filteredExpenses.length === 0 ? (
                    <p className="no-expense"> No Expenses Found for the chosen year</p>
                ) : (
                    filteredExpenses.map((expense) => (
                        <ExpenseItem 
                            key={expense.id} 
                            date={expense.date}
                            amount = {expense.amount}
                            title = {expense.title}
                            />
                        ))
                )}
            </Card>
        </div>
    )
}

export default Expense