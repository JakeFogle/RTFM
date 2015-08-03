(function () {
  'use strict';
  
   app.controller('threadCtrl', function($scope, threadRef, $firebaseObject, $firebaseArray, commentRef){

    var thread = $firebaseObject(threadRef);

    thread.$bindTo($scope, 'thread');

    $scope.comments = $firebaseArray(commentRef);

    $scope.comments.$loaded().then(function (comments) {
      console.log(comments);
    });

    $scope.createComment = function (username, text) {
      $scope.comments.$add({
        username: username,
        text: text
      });
    };
   });
}());