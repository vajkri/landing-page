/**
 * Created by krisztinavajda on 24/02/16.
 */
'use strict';

app.factory('NavigationService', function(){
  var service = {};

  service.nav = [
    {
      'url': 'navIntro',
      'title': 'Intro'
    },
    {
      'url': 'navWork',
      'title': 'Work'
    },
    {
      'url': 'navSkills',
      'title': 'Skills'
    },
    {
      'url': 'navInterests',
      'title': 'Interests'
    },
    {
      'url': 'navFooter',
      'title': 'Contact'
    }
  ];

  return service;

});