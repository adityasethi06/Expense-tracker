import React, {useState, useContext, Fragment} from 'react';
import { GlobalContext } from '../components/context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [btnDisabled, setbtnDisabled] = useState(true);

    const {dispatch} = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD', payload: {text, amount}});
        setText('');
        setAmount(0);
    }

    console.log(!!text && amount>0);
    // if(text && amount){
    //     setbtnDisabled(false);
    // }

    return (
        <Fragment>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
          <div>
            <label>Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
          </div>
          <div>
            <label
              >Amount <br />
              (negative - expense, positive - income)</label
            >
            <input type="number" value={amount ? amount : "Enter amount...."} onChange={(e) => setAmount(parseInt(e.target.value))} placeholder="Enter amount..." />
          </div>
          <button 
            disabled={!!text && Number.isInteger(amount) ? false : true} 
            className={!!text && Number.isInteger(amount)  ? "btn" : "btn btn-disabled"}
            title={!!text && Number.isInteger(amount)  ? "" : "enter data to enable button"}>
                Add transaction
          </button>
        </form>
      </Fragment>
    )
}
