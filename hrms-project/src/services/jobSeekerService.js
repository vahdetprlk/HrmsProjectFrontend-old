import axios from "axios";

export default class JobSeekerService {
  getJobSeeker() {
    return axios.get("http://localhost:8080/api/job-seekers/getall");
  }

  addJobSeeker(jobSeeker){
      return axios.post("http://localhost:8080/register-jobseeker",[jobSeeker])
  }
}
