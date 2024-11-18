export interface LoginResponse {
  message: string;
  data: LogInData;
}

export interface LogInData {
  access_token: string;
  name: string;
  username: string;
  role: Role;
}

export interface Role {
  name: string;
  id: number;
  permissions: any[];
}
