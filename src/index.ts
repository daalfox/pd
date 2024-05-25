export class Pd {
  private styles: Style;

  private constructor(styles?: Style) {
    this.styles = styles || {};
  }

  flex(direction?: "row" | "col") {
    this.styles = { ...this.styles, display: "flex", direction };
    return this;
  }

  static new() {
    return new Pd();
  }
  static from(styles: Style) {
    return new Pd(styles);
  }

  raw(): Style {
    return this.styles;
  }
  into(): string {
    // TODO
    // this is what converts styles to a class string
    return "";
  }
}

interface Style {
  display?: "flex" | "block";
  direction?: "row" | "col";
}
