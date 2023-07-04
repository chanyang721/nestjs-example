import { CanActivate }        from "@nestjs/common";
import { JwtAuthGlobalGuard } from "./jwt.auth.global.guard";
import { Reflector }          from "@nestjs/core";

const reflector = new Reflector();

export const globalGuards: CanActivate[] = [
  new JwtAuthGlobalGuard(reflector)
]