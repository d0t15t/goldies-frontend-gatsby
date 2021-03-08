const Reducer = (state, action) => {
  // console.log('🚀 ~ file: Reducer.js ~ line 2 ~ Reducer ~ state', state)
  const { payload } = action
  // console.log('🚀 ~ file: Reducer.js ~ line 4 ~ Reducer ~ payload', payload)

  switch (action.type) {
    case 'DRAWER_STATUS':
      return {
        ...state,
        drawersStatus: { ...state.drawersStatus, ...payload },
      }
    case 'MODAL_CONTENT':
      return {
        ...state,
        modalContent: payload,
      }
    case 'MODAL_HANDLE_CLOSE':
      return {
        ...state,
        modalHandleClose: payload,
      }
    case 'MODAL_STATUS':
      return {
        ...state,
        modalStatus: payload,
      }
    case 'STATUS':
      return {
        ...state,
        status: payload,
      }
    default:
      return state
  }
}

export default Reducer
