import React from 'react'
import './App.css'
import Title from "./components/Title"
import Balance from "./components/Balance"
import History from "./components/History"
import Transaction from "./components/Transaction"

function App() {
  let [operation, setOperation] = React.useState('');
  let [balance, setBalance] = React.useState({total: 0, income: 0, expense: 0});
  let [amount, setAmount] = React.useState('');
  let [amountsList, setAmountsList] = React.useState([]);
  let conclusion = {total:0, income: 0, expense: 0}
  return (
    <>
      <Title/>
      <Balance balance={balance} amountsList={amountsList} setBalance={setBalance}/>
      <History amountsList={amountsList} setAmountsList={setAmountsList} conclusion={conclusion} balance={balance} setBalance={setBalance}/>
      <Transaction conclusion={conclusion} balance={balance} setBalance={setBalance} operation={operation} setOperation={setOperation} amount={amount} setAmount={setAmount} amountsList={amountsList} setAmountsList={setAmountsList}/>
    </>
  )
}

export default App
