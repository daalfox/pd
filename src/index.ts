import { Properties as Css } from "csstype";

export class Pd {
  private styles: Css;

  private constructor(styles?: Css) {
    this.styles = styles || {};
  }

  flex(direction?: "row" | "col") {
    this.styles = {
      ...this.styles,
      display: "flex",
      flexDirection: direction === "row" ? "row" : "column",
    };
    return this;
  }
  flexRev(direction?: "row" | "col") {
    this.styles = {
      ...this.styles,
      display: "flex",
      flexDirection: direction === "row" ? "row-reverse" : "column-reverse",
    };
    return this;
  }

  static new() {
    return new Pd();
  }
  static from(styles: Css) {
    return new Pd(styles);
  }

  raw(): Css {
    return this.styles;
  }
  into(): string {
    // TODO
    // this is what converts styles to a class string
    return "";
  }
}
