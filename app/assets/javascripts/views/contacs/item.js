Phonebook.Views.ContacsItem = Backbone.View.extend({
  className: "accordion-group",
  template: JST['contacs/item'],
  events: {
    'mouseenter' : "show_delete",
    'mouseleave' : "hide_delete"
  },
  render: function(){
  	this.$el.html(this.template({contact: this.model}));
  	return this; 
  },
  show_delete: function(){
    this.$(".icon-delete").show();
  },
  hide_delete: function(){
    this.$(".icon-delete").hide();
  }

});