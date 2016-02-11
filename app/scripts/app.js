/**
 * Created by krisztinavajda on 10/01/16.
 */

'use strict';

var app = angular.module("Portfolio", ['ui.router', 'duScroll'])
  .config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to 'home'
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state ('landing', {
        url:          '/landing',
        templateUrl:  'views/landing.html'
      })
      .state ('home', {
        url:          '/',
        templateUrl:  'views/home.html',
        controller:   'HomeCtrl'
      })
    ;

  });
