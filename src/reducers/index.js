const initialState = {
  masterHasErrored : false,
  masterIsLoading : false,
  masterList : {},
  featuredPhoto : {},
  userList : [],
  currentPhoto : {},
  currentDate : '',
  currentCamera : '',
  currentRover : '',
  searchHasError : false,
  searchIsLoading : false,
  searchResults : []
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
        featuredPhoto : action.payload.photos[0]
      })
    case "SEARCH_HAS_ERROR" :
      return Object.assign({}, state, {
        searchHasError : true,
        searchIsLoading : false,
        searchResults : [],
      })
    case "SEARCH_IS_LOADING" : 
      return Object.assign({}, state, {
        searchHasError : false,
        searchIsLoading : true,
        searchResults: [],
      })
    case "SEARCH_FETCH_SUCCESS" :
      return Object.assign({}, state, {
        searchHasError : false,
        searchIsLoading : false,
        searchResults : action.payload.photos
      })
    default :
      return state 
  }
}

export default asyncReducer