import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const setCurrency = (x) => dispatch({ type: 'CHG_CURRENCY', payload: x});

    const currencies = [];
    currencies.push({ sym: '$', name: "$ Dollar"});
    currencies.push({ sym: '£', name: "£ Pound"});
    currencies.push({ sym: '€', name: "€ Euro"});
    currencies.push({ sym: '₹', name: "₹ Ruppee"});

    return (
    <div className='alert alert-secondary custom-dropdown'>
        <DropdownButton id="dropdown-basic-button" variant="success" 
            title={"Currency (" + currencies.find(x => x.sym === currency).name + ")"}>
            
            {currencies.map(x => {
                return (<Dropdown.Item 
                    active={x.sym === currency}
                    onClick={() => setCurrency(x.sym)}>{x.name}</Dropdown.Item>);
            })}

        </DropdownButton>
    </div>
    );
}; 

export default Currency;
