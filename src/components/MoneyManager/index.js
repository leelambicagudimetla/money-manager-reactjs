import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const transaction = []
// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: '',
    transactionItems: transaction,
    balance: '0',
    income: '0',
    expenses: '0',
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amount: event.target.value})
  }

  onTypeChange = event => {
    console.log(event.target.value)
    this.setState({type: event.target.value})
  }

  onAddClick = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      balance:
        type === 'Income'
          ? parseInt(amount) + parseInt(prevState.balance)
          : parseInt(prevState.balance) - parseInt(amount),
      income:
        type === 'Income'
          ? parseInt(amount) + parseInt(prevState.income)
          : parseInt(prevState.income) + 0,
      expenses:
        type === 'Expenses'
          ? parseInt(amount) + parseInt(prevState.expenses)
          : parseInt(prevState.expenses) - 0,
    }))
    this.setState(prevState => ({
      transactionItems: [...prevState.transactionItems, newTransaction],
      title: '',
      amount: '',
      type: '',
    }))
  }

  deleteLike = id => {
    const {transactionItems} = this.state
    const item = transactionItems.filter(each => each.id === id)
    const filterDetailUser = transactionItems.filter(each => each.id !== id)
    this.setState({
      transactionItems: filterDetailUser,
    })
    console.log(item.type)
  }

  render() {
    const {
      title,
      amount,
      type,
      balance,
      expenses,
      income,
      transactionItems,
    } = this.state

    //    console.log(amount)
    return (
      <div className="main-container">
        <div className="hi-container">
          <h1 className="hi-heading">Hi, Richard</h1>
          <p className="welcome-para">
            Welcome back to your{' '}
            <span className="money-span">Money Manager</span>
          </p>
        </div>

        <MoneyDetails
          balance={balance}
          expenses={expenses}
          income={income}
          amount={amount}
          typing={type}
        />

        <div className="add-main-container">
          <form className="trans-container">
            <h1 className="add-heading">Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <br />
            <input
              value={title}
              onChange={this.onTitleChange}
              id="title"
              type="text"
              placeholder="TITLE"
            />
            <br />
            <label htmlFor="amount">AMOUNT</label>
            <br />
            <input
              value={amount}
              onChange={this.onAmountChange}
              id="amount"
              type="text"
              placeholder="AMOUNT"
            />
            <br />
            <label htmlFor="type">TYPE</label>
            <br />
            <select onChange={this.onTypeChange} id="type">
              <option
                value={transactionTypeOptions[0].displayText}
                key={transactionTypeOptions[0].optionId}
                default
              >
                {transactionTypeOptions[0].displayText}
              </option>
              <option
                value={transactionTypeOptions[1].displayText}
                key={transactionTypeOptions[1].optionId}
              >
                {transactionTypeOptions[1].displayText}
              </option>
            </select>

            <br />
            <button
              onClick={this.onAddClick}
              type="button"
              className="button-add"
            >
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="history">History</h1>
            <div>
              <div className="title-amount-trans">
                <p className="heading">Title</p>
                <p className="heading">Amount</p>
                <p className="heading">Type</p>
              </div>
              <ul>
                {transactionItems.map(each => (
                  <TransactionItem
                    key={each.id}
                    eachItem={each}
                    deleteLike={this.deleteLike}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
