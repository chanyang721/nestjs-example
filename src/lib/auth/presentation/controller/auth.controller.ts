import { Controller }  from "@nestjs/common";
import { AuthService } from "../../application/service/auth.service";
import { Public }      from "../../../decoretor";
import { ApiTags }     from "@nestjs/swagger";


@Public()
@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

}
