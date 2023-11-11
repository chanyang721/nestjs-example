export interface IResponse<ReturnData> {
    statusCode: number;
    message: string
    data: ReturnData
}