import './balance.scss'

function Balance({balance}) {
    return (
      <div className='balance'>
        <div className="container">
          <h2>Your balance</h2>
          <h3>${balance.total.toFixed(2)}</h3>
          <div className="card">
            <div className="left">
              <h5>Income</h5>
              <h4>${balance.income.toFixed(2)}</h4>
            </div>
            <div className="line"></div>
            <div className="right">
              <h5>Expense</h5>
              <h4>${(balance.expense*-1).toFixed(2)}</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Balance