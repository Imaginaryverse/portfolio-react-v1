export const saveToLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const setStateFromLocal = (lsKey, stateItem, action, dispatch) => {
  const localItem = JSON.parse(localStorage.getItem(lsKey));
  const localItemIsNew = localItem && localItem !== stateItem;

  if (localItemIsNew) {
    dispatch({ type: action, payload: localItem });
  }
};
