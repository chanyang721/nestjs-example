## 설치
    - yarn

## 환경 변수 설정 방법

    - root => touch .env

## 개발 서버 실행

    - docker compose up


## Directory Structure

    - document: 서비스 관련 문서화 파일
    - src 
        - domains: 서비스 도메인 모듈
            - domain 이름
                - presentation
                    - controllers
                    - dtos
                    - interfaces
                    - swaggers
                - application
                    - commands?
                    - queries?
                    - events?
                    - services
                - infrastructure
                    - schemas
                    - entities
                    - interfaces
                    - repositories
        - lib: 서비스 실행 시 필요한 라이브러리 모듈
            - authentication: 인증 모듈

            - cache: redis 연결 모듈
            - database: ORM and db 연결 모듈
            - configuration: 환경 변수 모듈
            - fundamentals: NestJS Core 모듈
            - helpers: 모듈 헬퍼 모듈 or 서비스
                - hashing: 암호화 서비스 클래스
                - health-chacker: 서비스 상태 체크 모듈
                - jwt: jwt 서비스 클래스
                - multer: file parsing
            - infra: 서버 통신 모듈
                - aws: aws 서비스 모듈
                - http: axios 모듈
                - mailer: 메일 보내기 모듈
            - utils
                - constants: 상수 모음
                - decorators: NestJS 데코레이터 모음
                - regex: 
                - swagger.js: swagger 문서 생성 함수
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
