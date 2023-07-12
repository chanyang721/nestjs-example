import { applyDecorators, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse }   from "@nestjs/swagger";



export function ApiRefreshDecorator() {
  return applyDecorators(ApiOperation({
    summary    : "리프레시 토큰으로 엑세스 토큰 재발급",
    description: `
                리프레시 토큰으로 엑세스 토큰 재발급
            `
  }), ApiResponse({
    status: HttpStatus.OK,
    // type  : any
  }));
}
