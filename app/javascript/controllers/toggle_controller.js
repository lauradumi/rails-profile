import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["togglableStack", "togglableProjects"]
  connect() {
  }
  stack() {
    this.togglableStackTarget.classList.toggle("d-none");
  }
  projects() {
    this.togglableProjectsTarget.classList.toggle("d-none");
  }
}
