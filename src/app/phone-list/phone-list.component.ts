import { IComponentOptions } from 'angular';

export class PhoneListController {
  static $inject = ['Phone'];

  phones: any[];
  orderProp: string;
  query!: string;

  constructor(Phone: any) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }
}

export const phoneListComponent: IComponentOptions = {
  template: require('./phone-list.template.html'),
  controller: PhoneListController,
};
