export class CreateUserDTO {
  id: number;
  name: string;
  email: string;
  password: string;

  constructor(data: any) {
    if (typeof data !== "object") {
      throw new Error("Invalid data");
    }

    if (data.id && typeof data.id !== "number") {
      throw new Error("Invalid id");
    }

    if (typeof data.name !== "string") {
      throw new Error("Invalid name");
    }

    if (typeof data.email !== "string") {
      throw new Error("Invalid email");
    }

    if (typeof data.password !== "string") {
      throw new Error("Invalid password");
    }

    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }
}
