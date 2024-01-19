// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachItem} = props
  const {title, id, amount, type, deleteLike} = eachItem

  const onDelete = () => {
    deleteLike(id)
  }

  return (
    <li className="lines-container">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button data-testid="delete" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default TransactionItem
