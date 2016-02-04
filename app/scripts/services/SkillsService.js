/**
 * Created by krisztinavajda on 03/02/16.
 */
'use strict';

app.factory('SkillsService', function(){
  var service = {};

  service.skills = [
    {
      'dev': [
        {
          'name': 'HTML(5)',
          'level': '96'
        },
        {
          'name': 'CSS(3) & SCSS',
          'level': '96'
        },
        {
          'name': 'JavaScript',
          'level': '68'
        },
        {
          'name': 'AngularJS',
          'level': '65'
        },
        {
          'name': 'jQuery',
          'level': '65'
        },
        {
          'name': 'NodeJS',
          'level': '55'
        },
        {
          'name': 'Grunt / Gulp',
          'level': '50'
        },
        {
          'name': '.NET',
          'level': '38'
        },
        {
          'name': 'Umbraco',
          'level': '63'
        }
      ],
      'prod': [
        {
          'name': 'Git',
          'level': '73'
        },
        {
          'name': 'Github, Bitbucket & Sourcetree',
          'level': '73'
        },
        {
          'name': 'Microsoft Office',
          'level': '82'
        }
      ],
      'design': [
        {
          'name': 'Photoshop',
          'level': '48'
        },
        {
          'name': 'Illustrator',
          'level': '36'
        },
        {
          'name': 'User Experience',
          'level': '60'
        }
      ]
    }
  ];

  return service;

});