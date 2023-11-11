import { applyDecorators, HttpStatus }                     from "@nestjs/common";
import { ApiBody, ApiConsumes, ApiOperation, ApiResponse } from "@nestjs/swagger";



export function ApiCreateProjectDecorator() {
    
    return applyDecorators(
      ApiConsumes( "multipart/form-data" ),
      
      ApiOperation( {
          summary    : "프로젝트, 그룹 생성 및 파일 업로드",
          description: `
                  Request Body에 프로젝트 아이디(id), 프로젝트 이름 (name), 파일리스트(files)를 넣어서 요청합니다.
                  프로젝트 아이디, 프로젝트 이름 둘 중 하나는 반드시 입력해야합니다.
                  
                  [ Optional ]: 프로젝트 아이디(id)는 p1. 1-1-2 기존 프로젝트 시나리오처럼 이미 존재하는 프로젝트인 경우 사용합니다
                  
                  [ Optional ]: 프로젝트 이름(name)은 p1. 1-1-1 신규 프로젝트 시나리오처럼 새로운 프로젝트인 경우 사용합니다.
                  
                  [ Required ]: 파일 리스트(files)는 파일 정보를 [ File, File ] 형태로 넣어서 요청합니다.
              `
      } ),
      
      ApiResponse( {
          status     : HttpStatus.CREATED,
          description: "그룹을 가지는 프로젝트 1개 생성" // type       :
      } ),
      
      ApiBody( {
          schema: {
              required  : [ "files" ],
              type      : "object",
              properties: {
                  id   : {
                      type: "string"
                  },
                  name : {
                      type: "string"
                  },
                  files: {
                      type : "array",
                      items: {
                          type  : "string",
                          format: "binary"
                      }
                  }
              }
          }
      } ) );
    
}
