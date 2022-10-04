import React, { useState } from 'react'
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setuserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        setuserInput((previousState) => {
            return {
                ...previousState,
                enteredTitle: event.target.value
            }
        });
    }

    const amountChangeHandler = (event) => {
        setuserInput((previousState) => {
            return {
                ...previousState,
                enteredAmount: event.target.value
            }
        });
    }

    const dateChangeHandler = (event) => {
        setuserInput((previousState) => {
            return {
                ...previousState,
                enteredDate: event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }

        props.onSaveExpenseData(expenseDate);

        userInput.enteredTitle = '';
        userInput.enteredAmount = '';
        userInput.enteredDate = '';
        setuserInput((prevState) => {
            return {
                ...userInput
            }
        });
    }

    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={userInput.enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={userInput.enteredDate} min='2019-01-01' max='2023-12-31' onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit' onClick={submitHandler}>Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;