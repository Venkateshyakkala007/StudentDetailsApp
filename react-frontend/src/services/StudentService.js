import http from "../http";

class StudentService {
  getAll() {
    return http.get("/getAll");
  }

  get(id) {
    return http.get(`/getOne/${id}`);
  }

  create(Student) {
    return http.post("/post", Student);
  }

  update(id, data) {
    return http.patch(`/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/delete/${id}`);
  }
}

export default new StudentService();
