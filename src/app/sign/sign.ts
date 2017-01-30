export abstract class Sign {
  protected abstract beatsSigns: {[x: string]: string};

  public beats(other: Sign): boolean {
    return this.beatsSigns.hasOwnProperty(other.constructor.name);
  }

  public beatsMessage(other: Sign): string {
    if (!this.beats(other)) {
      throw 'Does not beat';
    }

    return this.beatsSigns[other.constructor.name];
  }
}
