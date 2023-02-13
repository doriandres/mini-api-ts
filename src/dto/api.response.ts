export class ApiResponse<T> {
  public data: T | null;
  public error: string | null;
  public datetime: string;

  constructor(data: T | null, error?: string) {
    this.datetime = new Date().toISOString();
    this.data = data;
    this.error = error;
  }
}
