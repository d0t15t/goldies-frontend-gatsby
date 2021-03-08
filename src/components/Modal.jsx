import React, { useContext, useEffect, useState } from 'react'
import { arrayOf, bool, node, oneOfType, func } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close'
import { Spinner } from 'reactstrap'
import Backdrop from '@material-ui/core/Backdrop'
import { useSpring, animated } from 'react-spring/web.cjs' // web.cjs is required for IE 11 support
import { Context } from '~context/Store'
import { themeGet, css } from '~style'
import { Box } from '~components/base'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& *': {
      lineHeight: '1.5em',
    },
    padding: theme.spacing(1),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #aaa',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    maxWidth: '700px',
  },
}))

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter()
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited()
      }
    },
  })

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  )
})

Fade.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
  in: bool.isRequired,
  onEnter: func,
  onExited: func,
}

Fade.defaultProps = {
  onEnter: null,
  onExited: null,
}

export default function SpringModal() {
  const [status, setStatus] = useState()
  const [context, dispatch] = useContext(Context)
  const { modalStatus, modalContent, modalHandleClose } = context
  const classes = useStyles()

  useEffect(() => {
    if (modalStatus) setStatus(true)
  }, [modalStatus])

  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      className={classes.modal}
      open={modalStatus}
      onClose={() => {
        if (modalHandleClose) modalHandleClose()
        dispatch({ type: 'MODAL_STATUS', payload: false })
        dispatch({ type: 'MODAL_CONTENT', payload: null })
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 100,
      }}
    >
      <Fade
        in={modalStatus}
        css={`
          // width: 100%;
        `}
      >
        <button
          type="button"
          id="close modal"
          onClick={() => {
            dispatch({ type: 'MODAL_STATUS', payload: false })
          }}
          css="padding: 20px; position: absolute;"
          className="btn--no-style"
        >
          {' '}
          <CloseIcon />
        </button>
        <div className={classes.paper}>{modalContent}</div>
      </Fade>
    </Modal>
  )
}
