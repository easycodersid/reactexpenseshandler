import React, { useState } from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const onCancelEvent = () => {
        setIsEditing(false);
    }

    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
        {isEditing && <ExpenseForm onCancel={onCancelEvent} onSaveExpenseData={onSaveExpenseDataHandler} />}
    </div>
};

export default NewExpense;