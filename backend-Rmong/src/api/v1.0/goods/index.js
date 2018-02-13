const Router = require('koa-router');

const goods = new Router();
const goodsCtrl = require('./goods.ctrl');
const needAuth = require('lib/middlewares/needAuth');

orders.get('/', goodsCtrl.getOrders);
orders.post('/', needAuth, goodsCtrl.createOrder);
orders.post('/:id/cancel', needAuth, goodssCtrl.cancelOrder);
module.exports = orders;
