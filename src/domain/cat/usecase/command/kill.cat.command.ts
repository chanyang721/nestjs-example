export class KillCatCommand {
  constructor(
    public readonly userId: string,
    public readonly catId: string,
  ) {}
}