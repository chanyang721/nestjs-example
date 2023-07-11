import { ApiProperty } from "@nestjs/swagger";



export class LoginResponseDto {
  @ApiProperty({
    type       : String,
    description: "엑세스 토큰",
    required   : true,
    example    : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgwNmM4NWRlLTI1MzQtNGZjOS04YjJmLTk4MGU0ZmFhYjYwZiIsInVpZCI6InhvcUdUUjk4NzFOYnprZDQzYWJzRXI1QVpWcDIiLCJpYXQiOjE2NzMzMjY3MDgsImV4cCI6MTY3NTkxODcwOH0.qCkI3sN5T-ExUqPJ2VC6bQcbC-6g94"
  })
  access_token: string;

  @ApiProperty({
    type       : String,
    description: "리프레시 토큰",
    required   : true,
    example    : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgwNmM4NWRlLTI1MzQtNGZjOS04YjJmLTk4MGU0ZmFhYjYwZiIsInVpZCI6InhvcUdUUjk4NzFOYnprZDQzYWJzRXI1QVpWcDIiLCJpYXQiOjE2NzMzMjY3MDgsImV4cCI6MTY3NTkxODcwOH0.qCkI3sN5T-ExUqPJ2VC6bQcbC-6g94"
  })
  refresh_token: string;
}
