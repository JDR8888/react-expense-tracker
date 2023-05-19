import React from "react";
import ExpenseItem from "./ExpenseItems";
import '../../assets/css/Expense.css';
import Card from "../UI/Card";

export default function Expense(props) {
    const expenses = props.expense;

    return (
        <Card className="expenses">
            {expenses.map((expense, index) => (
            <ExpenseItem 
                key={index} 
                date={expense.date}
                amount = {expense.amount}
                title = {expense.title}
                />
            ))}
        </Card>
    )
}