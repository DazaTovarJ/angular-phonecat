import { IComponentOptions, route } from 'angular';

// Register `phoneDetail` component, along with its associated controller and template
export class PhoneDetailController {
  static $inject = ['$routeParams', 'Phone'];

  phone: any;
  mainImageUrl!: string;

  constructor($routeParams: route.IRouteParamsService, Phone: any) {
    this.phone = Phone.get(
      { phoneId: $routeParams['phoneId'] },
      (phone: any) => {
        this.setImage(phone.images[0]);
      }
    );
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

export const phoneDetailComponent: IComponentOptions = {
  template: require('./phone-detail.template.html'),
  controller: PhoneDetailController,
};
