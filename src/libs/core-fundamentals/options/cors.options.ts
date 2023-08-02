import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";



export const corsOptions: CorsOptions = {
  origin     : true, //TODO 도메인 수정
  methods    : [ "GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS" ],
  maxAge     : 3600 * 5,
  credentials: true
};