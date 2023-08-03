import type { Request }              from "express";
import { HttpException, HttpStatus } from "@nestjs/common";
import { MulterOptions }             from "@nestjs/platform-express/multer/interfaces/multer-options.interface";



export const multerOptions: MulterOptions = {
  limits    : {
    fileSize: 1024 * 1024 * 100, // 30MB,
    files   : 3
  },
  fileFilter: ( request: Request, file: Express.MulterS3.File, callback: Function ): void => {
    const fileName = file.originalname.split(".");
    const fileExtension = fileName[ fileName.length - 1 ];

    if ( file.mimetype.match(/\/(jpg|jpeg|png)$/) ) {
      callback(null, true);
    }
    else {
      callback(new HttpException({
        statusCode: HttpStatus.BAD_REQUEST,
        message   : `${fileExtension}는 지원하지 않는 파일 형식입니다. .glb 로 다시 시도해주세요`
      }, HttpStatus.BAD_REQUEST), false);
    }
  }
};
