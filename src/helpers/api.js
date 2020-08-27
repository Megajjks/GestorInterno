import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-18-207-233-79.compute-1.amazonaws.com:5050/api",
});
