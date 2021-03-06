import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { clickAnimation } from '../../services/animationVariants'
import { PlayIcon, PauseIcon } from '../Icons/Icons'

AudioButton.propTypes = {
  onClick: PropTypes.func,
  isSongPlaying: PropTypes.bool.isRequired,
  isSmall: PropTypes.bool,
}

export default function AudioButton({ onClick, isSongPlaying, isSmall }) {
  return (
    <Button
      variants={clickAnimation}
      initial="rest"
      whileTap="pressed"
      onClick={onClick}
      isSmall={isSmall}
      data-testid="audio-button"
    >
      {isSongPlaying ? <PauseIcon title="pause" /> : <PlayIcon title="play" />}
    </Button>
  )
}

const Button = styled(motion.button)`
  background: ${(props) =>
    props.isSmall ? 'transparent' : 'var(--white-transparent-min)'};
  border: none;
  border-radius: 50%;
  box-shadow: ${(props) => (props.isSmall ? 'none' : 'var(--shadow-light)')};
  fill: var(--primary-regular);
  height: ${(props) => (props.isSmall ? '52px' : '60px')};
  padding: 16px;
  width: ${(props) => (props.isSmall ? '52px' : '60px')};
  &:focus {
    outline: 0;
  }
`
