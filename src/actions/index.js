// selectedBook is an actioncreator, it needs to return an action.
// an object with a type property
export function selectedBook (book){
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
