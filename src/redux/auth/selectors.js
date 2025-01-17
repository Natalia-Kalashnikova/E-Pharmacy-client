export const selectUserName = state => state.auth.name;
export const selectUserEmail = state => state.auth.email;
export const selectToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserInfo = state => state.auth.userInfo;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectLoading = state => state.auth.loading;
export const selectError = state => state.auth.error;
