const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Requisito 1
const customerInfo = (order) => `Olá ${order.order.delivery.deliveryPerson} entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`

console.log(customerInfo(order));

// Requisito 2
const orderModifier = (order) => `Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ ${order.payment.amount},00.`

order.order.delivery.deliveryPerson = 'Luiz Silva';
order.payment.amount = '50';

console.log(orderModifier(order));