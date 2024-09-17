import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["togglableStack", "togglableProjects", "togglableContact"]
  connect() {
  }
  stack() {
    this.togglableStackTarget.classList.toggle("d-none");
  }
  projects() {
    this.togglableProjectsTarget.classList.toggle("d-none");
  }
  contact() {
    this.togglableContactTarget.classList.toggle("d-none");
  }
}
