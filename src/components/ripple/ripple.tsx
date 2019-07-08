import { Component, h } from "@stencil/core";

@Component({
  tag: "wc-ripple",
  styleUrl: "./ripple.css",
  shadow: true
})
export class Ripple {
  public render() {
    return (
      <div class="lds-ripple">
        <div />
        <div />
      </div>
    );
  }
}
