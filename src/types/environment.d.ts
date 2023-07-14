declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_ACCESS_TOKEN: string | undefined;
      REACT_APP_API_END_POINT: string | undefined;
      REACT_APP_REPO: string | undefined;
      REACT_APP_OWNER: string | undefined;
    }
  }
}

export {};
