import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props) {

    // const [title, setTitle] = useState(props.title);

    // const btnClick = () => {
    //     setTitle("Updated!");
    //     console.log(title);
    // }

    const month = new Date().toLocaleString('en-IN', { month: 'long' });
    const day = props.date.toLocaleString('en-IN', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <Card className='expense-item '>
            <ExpenseDate month={month} day={day} year={year} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={btnClick}>Click here</button> */}
        </Card>
    );
}

export default ExpenseItem;