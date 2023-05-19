import React from 'react';
import '../../assets/css/ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

export default function ExpenseItem(props) {
    const { date, amount, title } = props;

    return (
        <Card className='expense-item' >
            <ExpenseDate 
            date = {date}
            />
            <div className='expense-item__description'>
                <h2>
                  {title}
                </h2>
                <div className='expense-item__price'>
                    {amount}
                </div>
            </div>
        </Card>
    )
}