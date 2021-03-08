/* eslint-disable react/jsx-filename-extension */
import React, {
  createContext,
  useReducer,
  useEffect,
  useState,
  useContext,
} from 'react'
import Popup from '~components/Popup'

const COOKIE_NAME = 'consent'

const CookieConsentStateContext = createContext()
const CookieConsentDispatchContext = createContext()

function getCookie() {
  const regex = new RegExp(
    `(?:(?:^|.*;\\s*)${COOKIE_NAME}\\s*\\=\\s*([^;]*).*$)|^.*$`
  )
  if (typeof document !== `undefined`) {
    const cookie = document.cookie.replace(regex, '$1')
    return cookie.length ? JSON.parse(cookie) : undefined
  }
  return undefined
}

// Initial value is cookie value OR prefered value but not yet set
const initialCookieValue = getCookie() || {
  isSet: 0,
  marketing: 1,
}

const CookieConsentProvider = ({ children }) => {
  const [popupIsOpen, setPopupIsOpen] = useState(!initialCookieValue.isSet)

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'acceptCurrent':
        setPopupIsOpen(false)
        return {
          ...state,
          isSet: 1,
        }
      case 'declineAll':
        setPopupIsOpen(false)
        return {
          isSet: 1,
          marketing: 0,
        }
      case 'showCookiePopup':
        setPopupIsOpen(true)
        return state
      default:
        throw new Error()
    }
  }, initialCookieValue)

  // Update the cookie when state changes
  useEffect(() => {
    document.cookie = `${COOKIE_NAME}=${JSON.stringify(state)}`
  }, [state])

  return (
    <CookieConsentStateContext.Provider value={state}>
      <CookieConsentDispatchContext.Provider value={dispatch}>
        {popupIsOpen && <Popup dispatch={dispatch} />}
        {children}
      </CookieConsentDispatchContext.Provider>
    </CookieConsentStateContext.Provider>
  )
}

function useCookieConsentState() {
  const context = useContext(CookieConsentStateContext)
  if (context === undefined) {
    throw new Error('useCookieConsentState must be used within CookieProvider')
  }
  return context
}

function useCookieConsentDispatch() {
  const context = useContext(CookieConsentDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useCookieConsentDispatch must be used within CookieProvider'
    )
  }
  return context
}

export {
  CookieConsentProvider,
  useCookieConsentState,
  useCookieConsentDispatch,
}
