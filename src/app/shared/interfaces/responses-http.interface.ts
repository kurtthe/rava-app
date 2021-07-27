export interface GenericResponse {
  header: responseMessageHeader;
  body?: unknown;
}

interface responseMessageHeader {
  status: status
}

interface status {
  code: string;
  description: string;
}