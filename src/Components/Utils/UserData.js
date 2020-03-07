

export const storeUserData = (key, value) => {
    localStorage.setItem(key, value)
}

export const getUserData = (key) => {
    return localStorage.getItem(key)
}