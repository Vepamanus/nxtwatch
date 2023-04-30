import {
  NotFoundContainer,
  NotFoundContentContainer,
  NotFoundImage,
  NotFoundText,
  SorryMsg,
} from './styledComponents'
import AddingItemContext from '../../context/AddingItemContext'

import Header from '../Header'
import FiltersBar from '../FiltersBar'

const NotFound = () => (
  <AddingItemContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundContainer darkMode={isDarkTheme} data-testid="not-found">
            <FiltersBar />
            <NotFoundContentContainer>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundText>Page Not Found</NotFoundText>
              <SorryMsg>
                we are sorry, the page you requested could not be found.
              </SorryMsg>
            </NotFoundContentContainer>
          </NotFoundContainer>
        </>
      )
    }}
  </AddingItemContext.Consumer>
)

export default NotFound
