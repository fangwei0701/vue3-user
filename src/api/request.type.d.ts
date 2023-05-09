export interface HttpRes<T> {
  code: string;
  data: T;
  message?: string;
  status: string | number;
}
