class LocalService {
  setCookie = (keyName: string, value: string) => {
    try {
      localStorage.setItem(keyName, value);
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error(`Error setting cookie: ${keyName}`, err);
      }
    }
  };

  getCookie = (keyName: string) => {
    try {
      return localStorage.getItem(keyName);
    } catch (err) {
      console.error(`Error retrieving cookie: ${keyName}`, err);
      return null;
    }
  };
}

export const localService = new LocalService();
