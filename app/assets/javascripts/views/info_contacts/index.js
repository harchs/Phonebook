Phonebook.Views.InfoContactsIndex = Backbone.View.extend({
  className: "accordion-inner",
  template: JST['info_contacts/index'],
  initialize: function(){
  	this.collection.on("reset",this.render,this);
  },
  render: function(){
  	this.collection.each(this.appendIndividualInfo);
  	return this;
  },
  appendIndividualInfo: function(individual_info){
  	var item_info_view = new Phonebook.Views.InfoContactsItem({model: individual_info});
  	$(".accordion-inner").append(item_info_view.render().el);
  }

});


