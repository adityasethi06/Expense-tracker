import React from 'react';
import './App.css';
import {Header} from '../src/components/Header';
import {Balance} from '../src/components/Balance';
import {IncomeExpenses} from '../src/components/IncomeExpenses';
import {TransactionList} from '../src/components/TransactionList';
import {AddTransaction} from '../src/components/AddTransaction';
import {GlobalProvider} from '../src/components/context/GlobalState';

function App() {
  return (
      <GlobalProvider>
          <div>
            <Header/>
            <div className="container">
              <Balance />
              <IncomeExpenses />
              <TransactionList />
              <AddTransaction />
            </div>
          </div>
      </GlobalProvider>
  );
}

export default App;
