export declare class ApiResponse<T> {
    data: T | null;
    error: string | null;
    datetime: string;
    constructor(data: T | null, error?: string);
}
