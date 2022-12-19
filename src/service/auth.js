import { callApi } from "@/plugins/axios";

export const callSignUp = (data) => {
  return callApi("/auth/user/new", {
    method: "POST",
    data,
  });
};

/**
 * 로그인
 * @param { username : String, password : String } params
 * @returns
 */
export const login = (params) => {
  return callApi("/login", {
    method: "POST",
    params,
  });
};

export const getUser = () => {
  return callApi("/api/auth/user", {
    method: "GET",
  });
};
