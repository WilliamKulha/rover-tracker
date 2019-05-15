const initialState = {
  masterHasErrored : false,
  masterIsLoading : false,
  masterList : {},
  featuredPhoto : {},
  userList : [],
  currentPhoto : {}
}

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_HAS_ERRORED":
      return Object.assign({}, state, {
        masterHasErrored : true,
        masterIsLoading : false,
        masterList : [],
      })
    case "LIST_IS_LOADING" :
      return Object.assign({}, state, {
        masterHasErrored : false,
        masterIsLoading : true,
        masterList : [],
      })
    case "LIST_FETCH_DATA_SUCCESS" :
      return Object.assign({}, state, {
        masterHasErrored : false,
        masterIsLoading : false,
        masterList : action.payload.photos, //Hey it looks like it's pretty important to use payload.
        featuredPhoto : action.payload.photos[Math.floor(Math.random() * action.payload.photos.length)]
      })
    default :
      return state 
  }
}

export default asyncReducer