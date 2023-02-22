import Component from "../core/Component";

export default class Items extends Component {
  template() {
    const { filtereditems } = this.$props;
    return `
      <ul>
        ${filtereditems
          .map(
            ({ contents, active, seq }) => `
          <li data-seq="${seq}">
            ${conents}
            <button class="toggleBtn" style="color: ${
              active ? "#09F" : "#F09"
            }">
            ${active ? "활성" : "비활성"}
            </button>
            <button class="deleteBtn">삭제</button>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }

  setEvent() {
    const { deleteItem, toggleItem } = this.$props;

    this.addEvent("click", ".deleteBtn", ({ target }) => {
      deleteItem(Number(target.closet("[data-seq]").dataset.seq));
    });

    this.addEvent("click", ".toggleBtn", ({ target }) => {
      toggleItem(Number(target.closet("[data-seq]").dataset.seq));
    });
  }
}
