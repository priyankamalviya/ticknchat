// State argument is not application state, only the state this reducer is responsible for

export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state; // this is the default, in case we do not care about action
}
