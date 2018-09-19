export class User {
  email: string;
  password?: string;
  id?: string;

  constructor(json: any) {
    this.email = json.email;
    this.password = json.password ? json.password : null;
    this.id = json.id ? json.id : null;
  }
}
