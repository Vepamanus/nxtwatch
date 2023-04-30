import React from 'react'

const AddingItemContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideosList: [],
  saveVideoButtonClicked: () => {},
})

export default AddingItemContext
