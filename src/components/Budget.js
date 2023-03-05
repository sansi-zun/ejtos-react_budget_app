import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, budget, dispatch } = useContext(AppContext);
    const setBudget = (e) => dispatch({ type: 'SET_BUDGET', payload: e.target.value});

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ marginLeft: '1px', maxWidth: '70%' }}
                onChange={setBudget}>
            </input>
        </div>
    );
}; 

export default Budget;
