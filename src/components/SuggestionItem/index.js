import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails
  const onChangeInputValue = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="suggestion-card">
      <p className="suggestion">{suggestion}</p>
      <button className="arrow-btn" type="button" onClick={onChangeInputValue}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-img"
          type="button"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
