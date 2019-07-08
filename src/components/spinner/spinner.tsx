import { Component, h } from "@stencil/core";

@Component({
  tag: "wc-spinners",
  styleUrl: "./spinner.css",
  shadow: true
})
export class Spinner {
  public render() {
    return (
      <div class="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}
