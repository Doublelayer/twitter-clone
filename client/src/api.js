const API_BASE_URL =
  window.location.hostname === "localhost" ? "http://localhost:5000/api/v1/" : "https://twitter-clone-api.doublelayer.now.sh/";

export default {
  post: `${API_BASE_URL}/post/tweet`,
  get: `${API_BASE_URL}/get/tweets`
};
