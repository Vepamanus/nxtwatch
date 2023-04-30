import './App.css'
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import AddingItemContext from './context/AddingItemContext'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

class App extends Component {
  state = {isDarkTheme: false, savedVideosList: []}

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  saveVideoButtonClicked = data => {
    const {savedVideosList} = this.state

    const TrueOrFaLse = savedVideosList.find(
      each => each.videoDetails.id === data.videoDetails.id,
    )

    console.log(TrueOrFaLse)

    if (TrueOrFaLse) {
      const filterItems = savedVideosList.filter(
        each => each.videoDetails.id !== data.videoDetails.id,
      )

      this.setState({savedVideosList: filterItems})
    } else {
      this.setState({savedVideosList: [...savedVideosList, data]})
    }
  }

  render() {
    const {isDarkTheme, savedVideosList} = this.state

    return (
      <AddingItemContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          saveVideoButtonClicked: this.saveVideoButtonClicked,
          savedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </AddingItemContext.Provider>
    )
  }
}

export default App
