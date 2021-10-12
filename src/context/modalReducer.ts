export const ModalReducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    // case 'modalStatus': // string.
    //   return {
    //     ...state,
    //     modalStatus: payload,
    //   };
    // case 'modalStatus': // boolean.
    //   return {
    //     ...state,
    //     modalStatus: payload,
    //   };
    default:
      return {
        ...state,
        [action.type]: payload,
      };
  }
};

export default ModalReducer;
