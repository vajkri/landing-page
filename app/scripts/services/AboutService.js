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
      'desc': 'I love biking. To work, or weekend trips, i love it all.',
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
      'desc': 'I love cooking and food in general. I am also vegan...',
      'img':'images/about/food3.jpg'
    },
    {
      'title': 'Computer games',
      'desc': 'Computer games are (one of) my weakness(es).',
      'img':'images/about/gaming1.jpg'
    },
    {
      'title': 'Travelling',
      'desc': 'I love travelling. Be it backpacking in Asia, or a weekend tour in Europe, I say bring it on!',
      'img':'images/about/travel1.jpg'
    },
    {
      'title': 'Nature',
      'desc': 'I love getting out, taking walks / runs / hikes in the nature.',
      'img':'images/about/nature1.jpg'
    },
    {
      'title': 'Photography',
      'desc': 'I enjoy taking photos with my good old Canon. I love food (and more recently baby) photography...',
      'img':'images/about/photography1.jpg'
    }
  ];

  return service;

});