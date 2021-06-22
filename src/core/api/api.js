import axios from "axios";
import { PAGINATION_PARAMS, USERS_URL } from "../constants";

import { defaultParser } from "./parsers";

export const api = {
  fetch(url) {
    return dispatch({ url });
  },

  fetchUsers(page) {
    return dispatch({
      url: USERS_URL,
      paginate: true,
      page,
      parseResponse: (response) => response.data.results
    });
  }
};

export async function dispatch(options) {
  const { method = "get", data, parseResponse = defaultParser, ...urlConfig } = options;
  const url = requestUrl(urlConfig);
  const headers = {
    Accept: "application/json",
  };
  const reqConfig = {
    headers
  };
  const response = await axios[method](url, data, reqConfig);
  const parsedResponse = parseResponse(response);
  return parsedResponse;
}

export function requestUrl({ paginate, page, query, url }) {
  const params = [];

  if (paginate) params.push(PAGINATION_PARAMS + page);
  if (query) params.push(query);

  if (params.length) {
    // url += url.indexOf("?") === -1 ? "?" : "&";
    url += params.join("&");
  }

  return url;
}
