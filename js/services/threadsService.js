app.service('threadsService', function(fb) {

  this.getThread = function(threadId) {
    return new Firebase(fb.url + '/threads/' + threadId);
  };

  this.getThreads = function() {
    return new Firebase(fb.url + '/threads');
  };

  this.getComments = function(threadId) {
     return new Firebase(fb.url + '/threads/' + threadId + '/comments');
   };

});