interface UseDispatchProps {
  dispatch: Function;
  name: string;
  value: number | string | Array<Object> | Object | boolean;
}

export default (name, value, dispatch) => {
  dispatch({ type: name, payload: value });
};
