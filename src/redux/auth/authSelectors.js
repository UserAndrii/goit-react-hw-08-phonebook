export const selectIsLogged = state => state.authorization.isLogged;
export const selectIsRefreshing = state => state.authorization.isRefreshing;
export const selectUsername = state => state.authorization.user.name;
export const selectErrorMessage = state => state.authorization.error;
