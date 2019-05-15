import store from '../store/store'

export const masterListHasErrored = () => {
  return {
    type: 'LIST_HAS_ERRORED',
  }
}

export const masterListIsLoading = () => {
  return {
    type: 'LIST_IS_LOADING',
  }
}

export const masterListFetchDataSuccess = masterList => {
  return {
    type: 'LIST_FETCH_DATA_SUCCESS',
    payload : masterList
  }
}

export const thunk_fetch_master_list = (url) => {
  store.dispatch(masterListIsLoading());
  return function(dispatch, getState) {
    return fetch(url)
      .then(response => response.json())
      .then(result => {
        if (result.photos.length === 0) {
           throw new Error("The Page couldn't be found!")
        } else dispatch(masterListFetchDataSuccess(result))
      })
      .catch(err => dispatch(masterListHasErrored()))
  }
}
