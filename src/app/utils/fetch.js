const apiPath = '/api';

const fetchSuccess = response => response.json().then(res => res, err => response);
const fetchError = response => response.json().then((res,err) => {
  throw { status: response.status, message: `Error with status ${response.status}`, ...res};
});

const apiFetch = (method, url, body) => {
  const config = {
    method,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(body),
    credentials: "same-origin"
  };

  return fetch(`${apiPath}${url}`, config).then(res => res.status < 400 ? fetchSuccess(res) : fetchError(res));
};

export const apiGet = (...args) => apiFetch('GET', ...args);
export const apiPost = (...args) => apiFetch('POST', ...args);
export const apiDelete = (...args) => apiFetch('DELETE', ...args);
export const apiPatch = (...args) => apiFetch('PATCH', ...args);
