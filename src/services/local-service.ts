class LocalService {
  setItem = (keyName: string, value: string) => {
    try {
      localStorage.setItem(keyName, value);
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error(`Error setting cookie: ${keyName}`, err);
      }
    }
  };

  getItem = <T>(keyName: string): T | null => {
    try {
      const value = localStorage.getItem(keyName);
      if (value) return JSON.parse(value);
      return null;
    } catch (err) {
      console.error(`Error retrieving cookie: ${keyName}`, err);
      return null;
    }
  };
}

export const localService = new LocalService();
