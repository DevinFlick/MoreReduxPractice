export function selectBook(book){
  console.log('selectBook firing', book);
  //selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property
  // always has a type and sometime a payload
  //sometimes these types are abstract out to another file
  return {
    type: 'SELECTED_BOOK',
    payload: book
  };
}
