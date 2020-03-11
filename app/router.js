'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/temperature', controller.home.temperature)
  router.put('/temperature', controller.home.addtemperature)
};
