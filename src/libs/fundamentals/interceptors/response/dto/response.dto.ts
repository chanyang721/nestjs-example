import { ApiProperty } from "@nestjs/swagger";
import { IResponse }   from "../interface/response.interface";



/**
 * @description API 응답 디폴트 DTO
 */
export class ResponseDto implements IResponse<any> {
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
        type       : null,
        description: "API 응답 데이터를 담은 속성",
        required   : true
    } )
    data: any;
    
    
    constructor( response: ResponseDto ) {
        this.statusCode = response.statusCode;
        this.message = response.message;
        this.data = response.data;
    }
}
