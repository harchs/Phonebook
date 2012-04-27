window.Phonebook = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    new Phonebook.Routers.Contacs();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Phonebook.init();
});