type QueryParam = {
  [key: string]: string | number; // primitive type
};

const makeQueryString = (object: QueryParam) => {
  const querystring = [];
  for (const key in object) {
    querystring.push(`${key}=${object[key]}`);
  }
  return querystring.join('&');
};

export { makeQueryString };
