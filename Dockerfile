# syntax=docker/dockerfile:1

# Base 이미지 설정
# Node 이미지 용량: node:16(800 ~ 900mb) -> node:16-slim -> node:16-alpine
FROM node:16-alpine AS base
LABEL maintainer="Chanyang Lee"
LABEL description="Main server for AdOps application"

# 애플리케이션 app 디렉토리 생성 및 이동 (cd)
# docker compose에서 설정한 working_dir에서 선언
WORKDIR /app/server

# 애플리케이션 의존성 파일 복사
# package.json, package-lock.json
## COPY <복사할 host 파일 경로> <컨테이너 내부의 파일 경로>
COPY package*.json ./


FROM base AS build

# Install dependencies
## if you are building your code for production
## RUN npm ci --only=production
RUN npm install

FROM base AS release

# build 스테이지 결과물인 node_module을 release의 ./ 에 복사
COPY --from=build /app/server/node_modules ./node_modules

# 애플리케이션 소스코드 복사
# 의미: 현재 디렉토리(./)의 모든 파일을 컨테이너의 WORKDIR(/app)의 (./)경로에 복사
COPY . .

# 애플리케이션이 노출되는 Container Port가 4000임을 문서로 명시(영향 없음)
EXPOSE 4000

### 컨테이너 실행시 수행하는 명령 설정
### [ Entrypoint ] [ Command ] 로 컨테이너 CLI에 입력되어 실행된다

# Entrypoint: 컨테이너가 시작되었을 때 실행되는 스크립트나 명령어
#ENTRYPOINT [ "docker-entrypoint.sh" ]

# Cammand: 컨테이너가 실행할 때 수행하는 명령어 혹은 엔트리포인트에 설정한 명령어의 인자값
CMD [ "npm", "run", "start:dev" ]
