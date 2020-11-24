// Requisito 2
const orderModifier = (order) => `Olá ${order.delivery.deliveryPerson}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ ${order.payment.amount},00.`

order.delivery.deliveryPerson = 'Luiz Silva';
order.payment.amount = '50';

orderModifier(order);