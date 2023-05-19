import React from 'react';
import '../../assets/css/ExpenseDate.css';

export default function ExpenseDate(props) {
    const { date, amount, title } = props;
    const month = date.toLocaleString('en-US', { month: 'long' })
    const day = date.toLocaleString('en-US', {day: '2-digit'});
    const year = date.getFullYear();

    return (
        <div className='expense-date'>
                <div className='expense-date__month'>
                    {month}
                </div>
                <div className='expense-date__day'>
                    {day}
                </div>
                <div className='expense-date__year'>
                    {year}
                </div>
        </div>
    )
}