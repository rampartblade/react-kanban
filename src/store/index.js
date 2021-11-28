import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    kanbanNotes: [{
        id: 1,
        status: 'backlog',
        title: 'contoh',
        date: '11/29/2021, 4:29:26 AM'
    }]
}

const kanbanAction = (state = initialState, action) => {
    //console.log(action)
    //console.log(state)
    switch (action.type) {
        case 'BACKLOG':
            //console.log(state.temp)
            return { kanbanNotes: [...state.kanbanNotes, action.data.value] }
        case 'IN_PROGRESS':
            return { kanbanNotes: action.data }
        case 'EVALUATION':
            return { kanbanNotes: action.data }
        case 'DONE':
            return { kanbanNotes: action.data }
        case 'BACK_TO_LOG':
            return { kanbanNotes: action.data }
        default:
            return state
    }
}

const enhancer = applyMiddleware(thunk)

const store = createStore(kanbanAction, enhancer)

export default store