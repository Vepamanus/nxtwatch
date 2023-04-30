import {Link} from 'react-router-dom'
import {ListItem, VideoImage, Title, ViewCount} from './styledComponents'
import './index.css'

import AddingItemContext from '../../context/AddingItemContext'

const GamingVideoItem = props => {
  const {gamingDetails} = props

  return (
    <AddingItemContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${gamingDetails.id}`} className="video-link-item">
            <ListItem>
              <VideoImage
                src={gamingDetails.thumbnailUrl}
                alt="video thumbnail"
              />
              <Title darkMode={isDarkTheme}>{gamingDetails.title}</Title>

              <ViewCount>{`${gamingDetails.viewCount} Watching Worldwide`}</ViewCount>
            </ListItem>
          </Link>
        )
      }}
    </AddingItemContext.Consumer>
  )
}

export default GamingVideoItem
