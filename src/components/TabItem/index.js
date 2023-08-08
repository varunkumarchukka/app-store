// Write your code here

import './index.css'

const TabItem = props => {
  const {eachTab, getUpdatedTabId, isActive} = props
  const {tabId, displayText} = eachTab

  const onChangeTabId = () => {
    getUpdatedTabId(tabId)
  }

  const activeBtn = isActive ? 'active-btn' : ''

  return (
    <li>
      <button
        className={`${activeBtn} tab-btn`}
        type="button"
        onClick={onChangeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
