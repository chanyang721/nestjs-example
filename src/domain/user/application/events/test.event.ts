export class HeroKilledDragonEvent {
    constructor (
      public readonly userId: string,
      public readonly dragonId: string,
      public readonly itemList: string
    ) {}
}
