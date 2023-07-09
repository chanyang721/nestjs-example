import { applyDecorators, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse }   from "@nestjs/swagger";
import { FirebaseUserDto }             from "../dto/auth.register.user.dto";



export function ApiRegisterDecorator() {
  return applyDecorators(ApiOperation({
    summary    : "회원가입",
    description: `
          Firebase user를 서버 DB에 등록
      `
  }), ApiResponse({
    status     : HttpStatus.CREATED,
    description: "회원가입 성공",
    type       : FirebaseUserDto
  }));
}