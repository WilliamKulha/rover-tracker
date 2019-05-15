
export const masterListHasErrored = (trueOrFalse) => {
  return {
    type: 'LIST_HAS_ERRORED',
    hasErrored: trueOrFalse
  }
}

export const masterListIsLoading = (trueOrFalse) => {
  return {
    type: 'LIST_IS_LOADING',
    isLoading: trueOrFalse
  }
}

export const masterListFetchDataSuccess = (masterList) => {
  return {
    type: 'LIST_FETCH_DATA_SUCCESS',
    masterList
  }
}
