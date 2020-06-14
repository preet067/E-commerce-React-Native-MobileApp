import { AuthStore } from './Auth';
import { ProductsStore } from './Products';
import { ShoppingCartStore } from './ShoppingCart';
import { ProductModel } from '../models/Product';

const authStore = AuthStore.create();

const shoppingCartStore = ShoppingCartStore.create({ products: [] });

const productsStore = ProductsStore.create({
  data: [
    ProductModel.create({
      id: '1',
      name: 'shirt',
      imageUrl: require('../../assets/img/products/shirt.png'),
      kgPrice: 10.12,
      unityPrice: 49,
    }),
    ProductModel.create({
      id: '2',
      name: 'jeans',
      imageUrl: require('../../assets/img/products/jeans.png'),
      kgPrice: 9.51,
      unityPrice: 99,
    }),
    ProductModel.create({
      id: '3',
      name: 'skirt',
      imageUrl: require('../../assets/img/products/skirt.png'),
      kgPrice: 9.51,
      unityPrice: 69,
    }),
    ProductModel.create({
      id: '4',
      name: 'pants',
      imageUrl: require('../../assets/img/products/pants.png'),
      kgPrice: 10.12,
      unityPrice: 29,
    }),
    ProductModel.create({
      id: '5',
      name: 'shoes',
      imageUrl: require('../../assets/img/products/shoes.png'),
      kgPrice: 9.51,
      unityPrice: 199,
    }),
    ProductModel.create({
      id: '6',
      name: 'shorts',
      imageUrl: require('../../assets/img/products/shorts.png'),
      kgPrice: 9.51,
      unityPrice: 199,
    }),
    ProductModel.create({
      id: '7',
      name: 'tshirt',
      imageUrl: require('../../assets/img/products/tshirt.png'),
      kgPrice: 9.51,
      unityPrice: 199,
    }),
    ProductModel.create({
      id: '8',
      name: 'sandal',
      imageUrl: require('../../assets/img/products/sandal.png'),
      kgPrice: 9.51,
      unityPrice: 199,
    }),
    ProductModel.create({
      id: '9',
      name: 'necklace',
      imageUrl: require('../../assets/img/products/necklace.png'),
      kgPrice: 9.51,
      unityPrice: 199,
    }),
    ProductModel.create({
      id: '10',
      name: 'cap',
      imageUrl: require('../../assets/img/products/cap.png'),
      kgPrice: 9.51,
      unityPrice: 199,
    }),
    ProductModel.create({
      id: '11',
      name: 'Socks',
      imageUrl: require('../../assets/img/products/shoes.png'),
      kgPrice: 9.51,
      unityPrice: 199,
    }),
  ],
});


export const store = {
  authStore,
  shoppingCartStore,
  productsStore,
};

window.MobxStore = store;
