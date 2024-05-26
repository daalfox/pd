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

  p(value: number, unit: "px" | "em" | "rem") {
    this.styles = {
      ...this.styles,
      padding: `${value}${unit}`,
    };
    return this;
  }
  px(value: number, unit: "px" | "em" | "rem") {
    this.styles = {
      ...this.styles,
      paddingLeft: `${value}${unit}`,
      paddingRight: `${value}${unit}`,
    };
    return this;
  }
  py(value: number, unit: "px" | "em" | "rem") {
    this.styles = {
      ...this.styles,
      paddingTop: `${value}${unit}`,
      paddingBottom: `${value}${unit}`,
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
