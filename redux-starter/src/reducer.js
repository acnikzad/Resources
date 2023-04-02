// Action Types
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const TASK_COMPLETED = "TASK_COMPLETED";

// Actions
export const addTask = (task) => {
    return { type: ADD_TASK, payload: { task: task } };
};

export const removeTask = (id) => {
    return { type: REMOVE_TASK, payload: { id: id } };
};

export const completedTask = (id) => {
    return { type: TASK_COMPLETED, payload: { id: id } };
};

// Reducers
let id = 0

export default function reducer(state =[], action) {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {   
                    id: id++,
                    text: action.payload.task,
                    completed: false
                },
            ];
        case REMOVE_TASK:
            return state.filter((task) => task.id !== action.payload.id);

        case TASK_COMPLETED:
            return state.map((task) =>
                task.id === action.payload.id
                    ? {
                          ...task,
                          completed: true,
                      }
                    : task
            );

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