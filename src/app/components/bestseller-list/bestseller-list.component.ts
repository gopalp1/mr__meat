import { Component } from '@angular/core';

@Component({
  selector: 'app-bestseller-list',
  templateUrl: './bestseller-list.component.html',
  styleUrls: ['./bestseller-list.component.scss'],
})
export class BestsellerListComponent {
  items = [
    {
      image:
        'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F6fc425d4-2c62-058c-9718-64a2a92161c5%2Foriginal%2F1716979971362.png%3Fformat%3Dwebp&w=1920&q=75',
      title: 'Chicken Curry Cut - Small Pieces',
      quantity: '450g ',
      pieces: '2-4 Pieces',
      serves: 'Serves 4',
      price: '₹179',
      deliveryTime: 'Tomorrow 6AM - 8AM',
      discount: '8% off',
      order: 0,
    },
    {
      image:
        'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F469c9ea4-4c1a-fe2a-0f2b-7dba03860c67%2Foriginal%2F1716980533039.png%3Fformat%3Dwebp&w=1920&q=75',
      title: 'Chicken Breast - Boneless',
      quantity: '450g ',
      pieces: '2-4 Pieces',
      serves: 'Serves 4',
      price: '₹299',
      deliveryTime: 'Tomorrow 6AM - 8AM',
      discount: '5% off',
      order: 0,
    },
    {
      image:
        'https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F1f7e9e0b-741a-311b-b896-59e11532924f%2Foriginal%2FPDP_1._Classic_Eggs_-_Pack_of_6_(1).jpg%3Fformat%3Dwebp&w=1920&q=75',
      title: 'Chicken Curry Cut - Small Pieces',
      quantity: '450g ',
      pieces: '2-4 Pieces',
      serves: 'Serves 4',
      price: '₹179',
      deliveryTime: 'Tomorrow 6AM - 8AM',
      discount: '8% off',
      order: 0,
    },
    {
      image:
        'https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F1f7e9e0b-741a-311b-b896-59e11532924f%2Foriginal%2FPDP_1._Classic_Eggs_-_Pack_of_6_(1).jpg%3Fformat%3Dwebp&w=1920&q=75',
      title: 'Chicken Breast - Boneless',
      quantity: '450g ',
      pieces: '2-4 Pieces',
      serves: 'Serves 4',
      price: '₹299',
      deliveryTime: 'Tomorrow 6AM - 8AM',
      discount: '5% off',
      order: 0,
    },
    {
      image:
        'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F469c9ea4-4c1a-fe2a-0f2b-7dba03860c67%2Foriginal%2F1716980533039.png%3Fformat%3Dwebp&w=1920&q=75',
      title: 'Chicken Curry Cut - Small Pieces',
      quantity: '450g ',
      pieces: '2-4 Pieces',
      serves: 'Serves 4',
      price: '₹179',
      deliveryTime: 'Tomorrow 6AM - 8AM',
      discount: '8% off',
      order: 0,
    },
  ];

  addItem(item: any) {
    item.order++;
  }
  increment(item: any) {
    item.order++;
  }

  decrement(item: any) {
    if (item.order > 0) {
      item.order--;
    }
  }
}
