import Component from "../core/Component";

export default class Items extends Component {
  setup() {
    this.$state = { items: ["item1", "item2"] };
  }
  template() {
    const { items } = this.$state;
    return `
        <ul>
            ${items
              .map(
                (item) =>
                  `<li>${item}<buttton class="deleteBtn" data-index="${key}">삭제</buttton></li>`
              )
              .join("")}
        </ul>
        <button>추가</button>
    `;
  }

  setEvent() {
    this.$target.addEventListener("click", ({ target }) => {
      const items = [...this.$state.items];

      this.addEvent("click", ".addBtn", ({ target }) => {
        const { items } = this.$state;
        this.setState({ items: [...items, `item${items.length + 1}`] });
      });

      this.addEvent("click", ".deleteBtn", ({ target }) => {
        items.splice(target.dataset.index, 1);
        this.setState({ items });
      });
    });
  }
}
