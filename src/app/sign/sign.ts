export abstract class Sign {
  protected abstract beatsSigns: {[x: string]: string};

  public beats(other: Sign): boolean {
    return this.beatsSigns.hasOwnProperty(other.constructor.name);
  }
}
