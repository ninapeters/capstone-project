import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import SavedSong from './SavedSong'
import Header from '../app/Header'
import { pageTransition } from '../services/animationVariants'

SavedSongPage.propTypes = {
  stopPlayingSongById: PropTypes.func.isRequired,
  deleteSavedSong: PropTypes.func.isRequired,
  savedSongs: PropTypes.array.isRequired,
  toggleCurrentSongId: PropTypes.func.isRequired,
  isSongPlaying: PropTypes.bool.isRequired,
  currentSongId: PropTypes.string,
}

export default function SavedSongPage({
  stopPlayingSongById,
  deleteSavedSong,
  savedSongs,
  toggleCurrentSongId,
  isSongPlaying,
  currentSongId,
}) {
  return (
    <motion.main
      variants={pageTransition}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <HeaderFixed>Favorites</HeaderFixed>
      <List>
        {savedSongs?.map(({ artist, songTitle, id }) => (
          <SavedSong
            key={id}
            artist={artist}
            songTitle={songTitle}
            id={id}
            stopPlayingSongById={stopPlayingSongById}
            deleteSavedSong={deleteSavedSong}
            toggleCurrentSongId={toggleCurrentSongId}
            isSongPlaying={isSongPlaying}
            currentSongId={currentSongId}
          />
        ))}
      </List>
    </motion.main>
  )
}

const HeaderFixed = styled(Header)`
  top: 0;
  left: 0;
  position: fixed;
`
const List = styled.ul`
  display: grid;
  gap: 32px;
  list-style: none;
  margin: 0;
  overflow-y: auto;
  padding: 0 0;
  scrollbar-width: none;
  &::before {
    content: '';
    display: block;
    height: 144px;
    width: 100%;
  }
  &::after {
    content: '';
    display: block;
    height: 82px;
    width: 100%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`
