export default class Users {
    constructor(username, password, email,phone, role, createdAt) {
      this.getUserName = () => username;
      this.getPassword = () => password;
      this.getEmail = () => email;
      this.getPhone = () => phone;
      this.getRole = () => role;
      this.getCreatedAt = () => createdAt;
    }
  }
  