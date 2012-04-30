Phonebook.Views.InfoContactsItem = Backbone.View.extend({
  tagName: "li",
  className: "individual_item",
  template: JST['info_contacts/item'],

  render: function(){
  	this.$el.html(this.template({item: this.model}));
  	return this;
  }


});