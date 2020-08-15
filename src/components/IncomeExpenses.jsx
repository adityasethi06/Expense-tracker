import React, {useContext} from 'react';
import { GlobalContext } from '../components/context/GlobalState';

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    const income = transactions.reduce((acc, tx) => tx.amount>0 ? acc + tx.amount : acc , 0);
    const expense = transactions.reduce((acc, tx) => tx.amount<0 ? acc + tx.amount : acc, 0);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expense}</p>
            </div>
        </div>
    )
}
