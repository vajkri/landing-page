/**
 * Created by krisztinavajda on 25/01/16.
 */
'use strict';

app.factory('AboutService', function(){
  var service = {};

  var HannasBirthday = new Date("2015-08-03");

  function calculateAgeInMonths(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getMonth());
  }
  var ageOfHanna = calculateAgeInMonths(HannasBirthday);

  service.facts = [
    {
      'title': 'Biking',
      'desc': 'I defintely (bike) CPH. To work, weekend-, or longer bike trips, i love it all.',
      'img':'images/about/bike2.jpg'
    },
    {
      'title': 'Dev',
      'desc': 'Development is more than just my work. It is my passion, my hobby, my life-style.',
      'img':'images/about/dev3.jpg'
    },
    {
      'title': 'Family',
      'desc': 'I am happily married and the proud mom of '+ageOfHanna+'-month-old Hanna. Being with my family is very important to me.',
      'img':'images/about/family1.jpg'
    },
    {
      'title': 'Cooking',
      'desc': 'I am a passionate hobby chef, and love food in general. I am also vegan, so surprise me with a tasty salad and we\'ll be good friends. :)',
      'img':'images/about/food3.jpg'
    },
    {
      'title': 'Computer games',
      'desc': 'I am slight computer game addict. I guess it comes with the job... ;)',
      'img':'images/about/gaming1.jpg'
    },
    {
      'title': 'Travelling',
      'desc': 'I love travelling. Be it backpacking in Asia, or a weekend tour in Europe, I\'m in!',
      'img':'images/about/travel1.jpg'
    },
    {
      'title': 'Nature',
      'desc': 'Spending time out in the nature is a great way to relax, I find. I love taking walks / runs / hikes in the green.',
      'img':'images/about/nature1.jpg'
    },
    {
      'title': 'Photography',
      'desc': 'I enjoy taking photos with my good old Canon. I especially love food-, and more recently baby photography photography...',
      'img':'images/about/photography1.jpg'
    }
  ];

  return service;

});