'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/temperature', controller.home.temperature)
  router.put('/temperature', controller.home.addtemperature)
  router.get('/gains', controller.home.gains)
  router.put('/gains', controller.home.addGains)
  router.post('/gains/check', controller.home.checkGains)
  router.get('/todolist', controller.home.todolist)
  router.put('/todolist', controller.home.addTodo)
};
