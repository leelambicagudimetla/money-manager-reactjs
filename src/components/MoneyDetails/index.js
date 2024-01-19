// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, balance, expenses} = props

  return (
    <div className="balance-container">
      <div className="list-balance">
        <img
          className="image-size"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="name-container">
          <p className="name-heading">Your Balance</p>
          <p data-testid="balanceAmount" className="para">
            Rs.{balance}{' '}
          </p>
        </div>
      </div>
      <div className="list-income">
        <img
          className="image-size"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
        />
        <div className="name-container">
          <p className="name-heading">Your Income</p>
          <p data-testid="incomeAmount" className="para">
            Rs. {income}
          </p>
        </div>
      </div>
      <div className="list-expenses">
        <img
          className="image-size"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="name-container">
          <p className="name-heading">Your Expenses</p>
          <p data-testid="expensesAmount" className="para">
            Rs. {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
