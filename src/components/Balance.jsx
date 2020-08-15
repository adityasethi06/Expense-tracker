import React, {useContext, Fragment} from 'react'
import { GlobalContext } from "../components/context/GlobalState";

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const bal = transactions.reduce((acc, tx) => acc += tx.amount, 0);
    
    return (
        <Fragment>
            <h4>Your Balance</h4>
            <h1>${bal}</h1>
        </Fragment>
    )
}
