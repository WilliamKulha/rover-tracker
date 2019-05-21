import store from '../store/store'

export const searchHasErrored = () => {
  return {
    type: 'SEARCH_HAS_ERROR',
  }
}

export const searchIsLoading = () => {
  return {
    type: 'SEARCH_IS_LOADING',
  }
}

export const searchFetchSuccess = searchResults => {
  return {
    type: 'SEARCH_FETCH_SUCCESS',
    payload : searchResults
  }
}

export const thunk_fetch_search_list = (url) => {
  store.dispatch(searchIsLoading());
  return function(dispatch, getState) {
    return fetch(url)
      .then(response => response.json())
      .then(result => {
        if (result.photos.length === 0) {
          throw new Error("The Page couldn't be found!")
        } else dispatch(searchFetchSuccess(result))
      })
      .catch(err => dispatch(searchHasErrored()))
  }
}
