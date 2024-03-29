import * as actionTypes from './actiontypes'

export const addTask = (task) => {
    return {type: actionTypes.ADD_TASK, payload: {task: task} }
    }
 
export const removeTask = (id) => {
    return { type: actionTypes.REMOVE_TASK, payload: { id: id } }
    }
  