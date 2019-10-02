const API_BASE_URL = window.location.hostname === "localhost" ? "http://localhost:5000/api/v1/" : "http://192.168.2.123:5000/api/v1/";

export default {
  post: `${API_BASE_URL}/post/tweet`,
  get: `${API_BASE_URL}/get/tweets`
};
