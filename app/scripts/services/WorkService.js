
/**
 * Created by krisztinavajda on 16/02/16.
 */

'use strict';

app.factory('WorkService', function(){
  var service = {};

  service.work = [
    {
      'title': 'Roskilde Festival',
      'desc': 'Implemented new features, such as Concert Archive, involved in numerous site-wide improvements.',
      'img': 'images/work/rf.jpg',
      'url': 'http://www.roskilde-festival.dk/'
    },
    {
      'title': 'Sæson',
      'desc': 'Part of the team who originally made website. Since then, involved in new features, such as Food plan, & Profile page.',
      'img': 'images/work/saeson.jpg',
      'url': 'http://www.saeson-web.dk/'
    },
    {
      'title': 'Riemann / P20',
      'desc': 'Part of the team who originally made website. Since then, involved in improvements and new features.',
      'img': 'images/work/p20.jpg',
      'url': 'http://www.p20.dk/'
    },
    {
      'title': 'Købstædernes Forsikring',
      'desc': 'Part of the team who originally made website.',
      'img': 'images/work/kf.jpg',
      'url': 'https://www.kfforsikring.dk/'
    },
    {
      'title': 'Gosh Pro',
      'desc': 'Mobile web-app written in HTML & AngularJS. Gosh distributors can use it to learn more about, and become more proficient at selling Gosh products.',
      'img': 'images/work/gosh.jpg',
      'url': 'http://gosh-pro.com/#/login'
    }
  ];

  return service;

});
