Phonebook.Views.InfoContactsItem = Backbone.View.extend({
  template: JST['info_contacts/item'],
  render: function(){
  	this.$el.html(this.template({item: this.model}));
  	return this;
  }


});