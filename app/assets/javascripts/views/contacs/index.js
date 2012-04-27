Phonebook.Views.ContacsIndex = Backbone.View.extend({
  template: JST['contacs/index'],
  initialize: function(){
  	this.collection.on('reset',this.render,this);
  },
  render: function(){
  	this.$el.html(this.template);
  	this.collection.each(this.appendContact);
  	return this;
  },
  appendContact: function(contact){
  	var item_view = new Phonebook.Views.ContacsItem({model: contact});
  	$(".contact_container").append(item_view.render().el);
  }
});
