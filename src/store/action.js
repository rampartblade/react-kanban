export function backlog(title) {
    return (dispatch, getState) => {
        var i = 1
        var state = getState()
        var date = new Date()
        var array = state.kanbanNotes.map(arr => {
            i++
            //console.log(array)
            return arr
        })
        var temp = {
            id: i,
            status: 'backlog',
            title: title,
            date: date.toLocaleString()
        }

        dispatch({
            type: 'BACKLOG', data: { array: array, value: temp }
        })
    }
}

export function inProgress(index) {
    return (dispatch, getState) => {
        let state = getState()
        var array = state.kanbanNotes.map(arr => {
            if (index === arr['id']) {
                arr['status'] = 'inProgress'
            }
            //console.log(arr)
            return arr
        })
        //console.log(index)
        dispatch({
            type: 'IN_PROGRESS', data: array
        })
    }
}

export function evaluation(index) {
    return (dispatch, getState) => {
        let state = getState()
        var array = state.kanbanNotes.map(arr => {
            if (index === arr['id']) {
                arr['status'] = 'evaluation'
            }
            return arr
        })
        dispatch({
            type: 'EVALUATION', data: array
        })
    }
}

export function done(index) {
    return (dispatch, getState) => {
        let state = getState()
        var array = state.kanbanNotes.map(arr => {
            if (index === arr['id']) {
                arr['status'] = 'done'
            }
            return arr
        })
        dispatch({
            type: 'DONE', data: array
        })
    }
}

export function backToLog(index) {
    return (dispatch, getState) => {
        let state = getState()
        var array = state.kanbanNotes.map(arr => {
            if (index === arr['id']) {
                arr['status'] = 'backlog'
            }
            return arr
        })
        dispatch({
            type: 'BACK_TO_LOG', data: array
        })
    }
}