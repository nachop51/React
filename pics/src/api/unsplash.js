import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 21v-yrUL04X2w5kq629zlveE2CWlHsK7iccLPp6EpO0",
  },
});
