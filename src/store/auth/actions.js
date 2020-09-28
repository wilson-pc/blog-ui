/*
export function someAction (context) {
}
*/
import { LocalStorage } from "quasar";
import jwt_decode from "jwt-decode";

export function loadAuth({ commit }) {
  let token = LocalStorage.getItem("token");
  if (token) {
    let decoded = jwt_decode(token);
    console.log(decoded);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("token");
    } else {
      let user = { id: decoded.userId, token: token };
      commit("Login", user);
    }
  }
}

export function exit({ commit }) {
  LocalStorage.clear();
  commit("logOut", {});
}
