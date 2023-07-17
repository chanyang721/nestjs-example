import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { KillDragonCommand }               from "../../../application/commands/test.command";
import { AuthRepository }                  from "../../repositories/auth.repository";
import { AuthEntity }                      from "../../entities/auth.entity";
import { InjectRepository }                from "@nestjs/typeorm";



@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
  constructor(
    @InjectRepository(AuthEntity)
    private readonly repository: AuthRepository
  ) {}

  async execute(command: KillDragonCommand) {
    const { heroId, dragonId } = command;
    const hero = this.repository.findOneById(+heroId);

    return hero;
    // hero.killEnemy(dragonId);
    // await this.repository.persist(hero);
  }
}
