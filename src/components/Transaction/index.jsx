import React from 'react'
import './transaction.scss'

function Index({operation,setOperation,amount,setAmount,amountsList,setAmountsList,balance,setBalance,conclusion}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (operation.trim()!=='' && amount.trim()!=='') {
      amountsList = [{operation: operation,amount: amount}, ...amountsList]
      setAmountsList(amountsList);
      amountsList.map((amountValue) => (
        conclusion.total += Number(amountValue.amount),
        (Number(amountValue.amount)>0) ? conclusion.income += Number(amountValue.amount) : conclusion.expense += Number(amountValue.amount)
      ))
      balance = {total: conclusion.total, income: conclusion.income, expense: conclusion.expense}
      setBalance(balance)
      setOperation('');
      setAmount('');
    }
  };

    return (
      <div className='transaction'>
        <div className="container">
          <div className="title">
            <h2>Add new transaction</h2>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Text</label>
            <input name='operation' type="text" placeholder='Enter text...' value={operation} onChange={(e) => setOperation(e.target.value)}/>
            <label htmlFor="">Amount<br/>(negative - expense, positive - income)</label>
            <input name='amount' type="text" placeholder='Enter amount...' value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <button>Add transaction</button>
          </form>
        </div>
      </div>
    )
  }
  
  export default Index