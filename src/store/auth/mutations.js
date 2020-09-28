/*
export function someMutation (state) {
}
*/
export function Login(state, item) {
  state.token = item.token;
  state.auth = true;
  state.userId = item.id;
}
export function logOut(state, item) {
  state.token = undefined;
  state.auth = false;
  state.userId = undefined;
}
