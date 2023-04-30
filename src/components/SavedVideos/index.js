import {BiListPlus} from 'react-icons/bi'
import AddingItemContext from '../../context/AddingItemContext'
import Header from '../Header'
import FiltersBar from '../FiltersBar'

import {
  SavedVideosContainer,
  SavedVideosContentContainer,
  VideosContainer,
  NoSavedVideosContainer,
  NoSavedVideos,
  NoSavesVideosText,
  NoSavedVideosSuggestion,
  LinkItem,
  IconContainer,
  Heading,
} from './styledComponents'
import VideoItem from '../VideoItem'

const SavedVideos = () => (
  <AddingItemContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideosList} = value
      const renderSavedVideos = () => (
        <>
          <LinkItem darkMode={isDarkTheme}>
            <IconContainer darkMode={isDarkTheme}>
              <BiListPlus className="header-icon" />
            </IconContainer>
            <Heading darkMode={isDarkTheme}>Saved Videos</Heading>
          </LinkItem>
          <VideosContainer>
            {savedVideosList.map(eachMovieDetails => (
              <VideoItem
                key={eachMovieDetails.videoDetails.id}
                eachMovieDetails={eachMovieDetails.videoDetails}
              />
            ))}
          </VideosContainer>
        </>
      )

      return (
        <>
          <Header />
          <SavedVideosContainer
            darkMode={isDarkTheme}
            data-testid="savedVideos"
          >
            <FiltersBar />
            <SavedVideosContentContainer>
              {savedVideosList.length === 0 ? (
                <NoSavedVideosContainer>
                  <NoSavedVideos
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  />
                  <NoSavesVideosText darkMode={isDarkTheme}>
                    No saved videos found
                  </NoSavesVideosText>
                  <NoSavedVideosSuggestion darkMode={isDarkTheme}>
                    Save your videos by clicking a button
                  </NoSavedVideosSuggestion>
                </NoSavedVideosContainer>
              ) : (
                renderSavedVideos()
              )}
            </SavedVideosContentContainer>
          </SavedVideosContainer>
        </>
      )
    }}
  </AddingItemContext.Consumer>
)

export default SavedVideos
