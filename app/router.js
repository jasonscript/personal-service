'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login/account', controller.login.loginAccount)
  router.get('/currentUser', controller.user.currentUser)
  router.get('/temperature', controller.temperature.temperature)
  router.post('/temperature', controller.temperature.customTemperature)
  router.put('/temperature', controller.temperature.addtemperature)
  router.get('/gains', controller.home.gains)
  router.post('/gains', controller.home.customGains)
  router.put('/gains', controller.home.addGains)
  router.post('/gains/check', controller.home.checkGains)
  router.get('/todolist', controller.home.todolist)
  router.post('/todolist', controller.home.customTodolist)
  router.put('/todolist', controller.home.addTodo)
  router.post('/todolist/:id', controller.home.updateTodo)
  router.delete('/todolist/:id', controller.home.delTodo)
  router.get('/steps', controller.steps.steps)
  router.post('/steps', controller.steps.customSteps)
  router.post('/steps/check', controller.steps.check)
  router.put('/steps', controller.steps.add)
};
