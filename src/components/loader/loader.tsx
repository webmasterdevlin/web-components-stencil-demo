import { Component, h } from "@stencil/core";

@Component({
  tag: "wc-loader",
  styleUrl: "./loader.css",
  shadow: true
})
export class Loader {
  public render() {
    return <div class="lds-dual-ring" />;
  }
}
