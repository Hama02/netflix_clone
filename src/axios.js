import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDk0ZDA4MGM4ZmY3NWY5M2Y3Njc2NjU2YzVjNjAzMSIsInN1YiI6IjYzYzllYWI0MDNmMGI2MDA3OTA0MmZkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-gzmXs-Ea8rQ_-9vSOkZfLLwv5pk39dRG3XUJ07Q_ks`
  }
});

export default instance;
