export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }
  getRoot() {
    const $root = document.createElement('div');
    console.log(this.components);

    return $root;
  }
  render() {
    this.$el.append(this.getRoot());
  }
}
