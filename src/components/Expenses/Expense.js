import React, { useState } from 'react';
import './Expense.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredElements = props.items.filter(expense => {
        return expense.date.getFullYear().toString() == filteredYear;
    });

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            {filteredElements.map(element => {
                return <ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date} />
            })}
        </Card>
    )
}

export default Expenses;