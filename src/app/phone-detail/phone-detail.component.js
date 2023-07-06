// Register `phoneDetail` component, along with its associated controller and template
PhoneDetailController.$inject = ["$routeParams", "Phone"];
export function PhoneDetailController($routeParams, Phone) {
  var self = this;
  self.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
    self.setImage(phone.images[0]);
  });

  self.setImage = function setImage(imageUrl) {
    self.mainImageUrl = imageUrl;
  };
}

export const phoneDetailComponent = {
  template: require("./phone-detail.template.html"),
  controller: PhoneDetailController,
};
