// ***********************************
// reducers
let id = 0
export default function reducer(state =[], action) {

    switch(action.type) {
        case 'ADD_TASK ':
            return [
                ...state,
                {   
                    id: id++,
                    text: action.payload.task,
                    completed: false
                }
            ]
        case 'REMOVE_TASK':
            return state.filter(task => task.id !== payload.action.id);

        default:
            return state
    }

    // if(action.type == "ADD_TASK") {
    //     return [
    //         ...state,
    //         {
    //             id: ++id,
    //             task: action.payload.task,
    //             completed: false 
    //         }
    //     ]
    // }
    // else if(action.type === "REMOVE_TASK") {
    //     return state.filter(task => task.id !== action.payload.id)
    // }
    // return state
}