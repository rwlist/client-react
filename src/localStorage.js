export const loadState = key => {
    try {
        const serializedState = localStorage.getItem(key)
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        console.error(err)
        return undefined
    }
}

export const saveState = (key, state) => {
    try {
        if (!state) {
            localStorage.removeItem(key)
            return
        }
        const serializedState = JSON.stringify(state)
        localStorage.setItem(key, serializedState)
    } catch (err) {
        console.error(err)
    }
}
