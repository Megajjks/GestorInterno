import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-3-89-6-194.compute-1.amazonaws.com:5050/api",
});
