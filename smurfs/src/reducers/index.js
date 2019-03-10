import { FETCHING, ADDING, DELETING, SUCCESS, ERROR } from '../actions'

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
}

function reducer (state = initialState, action) {
  switch(action.type) {
    case FETCHING:
    return {
      ...state,
      fetchingSmurfs: true,
      error: null
    }
    case ADDING:
    return {
      ...state,
      addingSmurf: true,
      error: null
    }
    case DELETING:
    return {
      ...state,
      deletingSmurf: true,
      error: null
    }
    case SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      error: null
    }
    case ERROR:
    return {
      ...state,
      error: action.payload
    }
  default:
    return state
  }
}

export default reducer