import Cookies from "js-cookie";

const TOKEN = "token";

// 设置token
export function setToken(token) {
    // token 一天过期
    Cookies.set(TOKEN, token,{ expires: 1 });
}

// 获取token
export function getToken() {
    return Cookies.get(TOKEN);
}