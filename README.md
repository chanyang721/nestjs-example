## 개발 서버 실행 방법
    - docker compose up

## 환경 변수 설정 방법
    - root => touch .env


## Directory Structure
    - document: 서비스 관련 문서화 파일
    - manifest: k8s manifest 파일
    - src 
        - domain: 서비스 도메인 모듈
            - domain 이름
                - presentation
                    - controller
                    - dto
                    - interface
                    - swagger: decorator
                - application
                    - service
                - infrastructure
                    - entity
                    - repository
                    - 외부 접근 서비스 등
        - lib: 서비스 실행 시 필요한 라이브러리 모듈
            - core-fundamental: NestJS Core 개념 모듈
            - authentication: 인증 모듈
            - database: 데이터베이스 모듈
            - configuration: 환경 변수 모듈
            - aws: aws 서비스 모듈
            - health-chacker: 서비스 상태 체크 모듈
            - http: http 모듈
            - constants: 상수 모음
            - decoretor: NestJS 데코레이터 모음
            - swagger: swagger 생성 함수
    - test
        - domain: 서비스 도메인 모듈 테스트 코드
            - e2e: e2e 테스트 코드
            - unit: unit 테스트 코드
        - lib: 서비스 실행 시 필요한 라이브러리 모듈 테스트 코드
        - utils: 테스트 시 필요한 메서드 모음

## Domain Modeling Document


## Git Usage


## Deployment Strategy


## Infrastructure
