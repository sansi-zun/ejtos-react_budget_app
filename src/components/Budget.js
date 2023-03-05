import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, budget, expenses, dispatch } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const setBudget = (val) => {
        let newBudget = val;
        if (val > 20000) {
            alert("The value for budget cannot exceed " + currency + "20000");
            newBudget = 20000;
        }
        else if (val < totalExpenses) {
            alert("The value for budget cannot be lower than the spending");
            newBudget = totalExpenses;
        }
        dispatch({ type: 'SET_BUDGET', payload: newBudget})
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='budget'
                step="10"
                value={budget}
                style={{ marginLeft: '1px', maxWidth: '70%' }}
                onChange={(e) => setBudget(e.target.value)}>
            </input>
        </div>
    );
}; 

export default Budget;
