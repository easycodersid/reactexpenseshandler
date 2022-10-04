import React, { useState } from 'react';
import './Expense.css'
import ExpensesList from './ExpensesList'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredElements = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseChart expenses={filteredElements} />
            <ExpensesList item={filteredElements} />
        </Card>
    )
}

export default Expenses;