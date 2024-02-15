import './history.scss'

function Index({amountsList,setAmountsList,conclusion,balance,setBalance}) {
  const deleteButton = (index) => {
    amountsList = [...amountsList.slice(0, index), ...amountsList.slice(index + 1)];
    setAmountsList(amountsList);
    amountsList.map((amountValue) => (
      conclusion.total += Number(amountValue.amount),
      (Number(amountValue.amount)>0) ? conclusion.income += Number(amountValue.amount) : conclusion.expense += Number(amountValue.amount)
    ))
    balance = {total: conclusion.total, income: conclusion.income, expense: conclusion.expense}
    setBalance(balance)
  };
    return (
      <div className='history'>
        <div className="container">
          <div className="title">
            <h2>History</h2>
          </div>
          <div className="cards">
            {amountsList.map((amount, index) => (
                (amount.amount>=0) 
                ? 
                <div className="card" key={index}>
                  <div className="income-delete">
                    <button className='delete' onClick={() => deleteButton(index)}>X</button>
                  </div>
                  <h3>{amount.operation}</h3>
                  <h3 className='income'>+{amount.amount}</h3>
                </div>
                :
                <div className="card" key={index}>
                  <div className="expense-delete">
                    <button className='delete' onClick={() => deleteButton(index)}>X</button>
                  </div>
                  <h3>{amount.operation}</h3>
                  <h3 className='expense'>{amount.amount}</h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default Index