export abstract class Sign {
  protected abstract beatsSigns: string[];

  public beats(other: Sign): boolean {
    return this.beatsSigns.indexOf(other.constructor.name) != -1;
  }
}
