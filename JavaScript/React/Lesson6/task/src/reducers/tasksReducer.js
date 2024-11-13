import { ADD_TASK, DELETE_TASK, TOGGLE_TASK_COMPLETED } from '../actions/taskActions';

const initialState = {
  tasks: [],
};

export default function tasksReducer(state = initialState, action) {
  console.log('Current state before action:', state);
  console.log('Dispatching action:', action);

  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
      case TOGGLE_TASK_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        )
      };
    default:
      return state;
  }
}
