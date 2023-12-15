import { ApiProperty } from "@nestjs/swagger";



export interface IResponse<ReturnData> {
    statusCode: number;
    message: string;
    data: ReturnData;
}


/**
 * @description API 응답 디폴트 DTO
 */
export class ResponseDto<ReturnData> implements IResponse<ReturnData> {
    @ApiProperty( {
        type       : Number,
        description: "API 응답 상태 코드",
        required   : true,
        example    : 200
    } )
    statusCode: number;
    
    @ApiProperty( {
        type       : String,
        description: "응답 메시지",
        required   : true,
        example    : "생성에 성공했습니다"
    } )
    message: string;
    
    @ApiProperty( {
        description: "API 응답 데이터",
        required   : true
    } )
    data: ReturnData;
    
    constructor( response: ResponseDto<ReturnData> ) {
        this.statusCode = response.statusCode;
        this.message = response.message;
        this.data = response.data;
    }
}
