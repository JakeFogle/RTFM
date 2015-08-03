var app = angular.module("rtfmApp",['ngRoute','firebase']);

(function () {
  'use strict';

  app.constant('fb', {
    url: 'jakesfirstfirebase.firebaseio.com'
  });

  app.config(function($routeProvider) {
    $routeProvider.
      when('/threads', {
        templateUrl: '/templates/threads.html',
        controller: 'threadsCtrl',
        resolve: {
          threadsRef: function(threadsService) {
            return threadsService.getThreads();
          }
        }
      })
      .when('/threads/:threadId', {
        templateUrl: '/templates/thread.html',
        controller: 'threadCtrl',
        resolve: {
          threadRef: function(threadsService, $route) {
            return threadsService.getThread($route.current.params.threadId);
          },
          commentRef: function(threadsService, $route) {
            return threadsService.getComments($route.current.params.threadId);
          }
        }
      })
      .otherwise({
      redirectTo: '/threads'
      });

  var firebaseRef = new Firebase("jakesfirstfirebase.firebaseio.com");

  });
  
}());