export const API_URL = "https://jsonplaceholder.typicode.com";
export const API_REQUEST = async (url, options = null, err = null) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw Error("Connection failed");
  } catch (error) {
    err = err.message;
  } finally {
    return err;
  }
};
