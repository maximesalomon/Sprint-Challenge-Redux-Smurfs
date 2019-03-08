import axios from 'axios'

export const FETCHING = "FETCHING"
export const ADDING = "ADDING"
export const DELETING = "DELETING"
export const SUCCESS = "SUCCESS"
export const ERROR = "ERROR"

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING })
  axios.get('http://localhost:3333/smurfs')
  .then(res => {
    dispatch({ type: SUCCESS, payload: res.data })
  })
  .catch(err => {
    dispatch({ type: ERROR, payload: err })
  })
}

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: ADDING })
  axios.post('http://localhost:3333/smurfs', smurf) 
  .then(res => {
    dispatch({ type: SUCCESS, payload: res.data })
  })
  .catch(err => {
    dispatch({ type: ERROR, payload: err })
  })
}

export const deleteSmurf = (id) => dispatch => {
  dispatch({ type: DELETING })
  axios.delete(`http://localhost:3333/smurfs/${id}`)
  .then(res => {
    dispatch({ type: SUCCESS, payload: res.data})
  })
  .catch(err => {
    dispatch({ type: ERROR, payload: err })
  })
}