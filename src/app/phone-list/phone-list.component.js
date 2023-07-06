PhoneListController.$inject = ["Phone"];
export function PhoneListController(Phone) {
  this.phones = Phone.query();
  this.orderProp = "age";
}

export const phoneListComponent = {
  template: require("./phone-list.template.html"),
  controller: PhoneListController,
};
