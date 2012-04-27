Phonebook.Views.ContacsItem = Backbone.View.extend({
  className: "accordion-group",
  events:{
    'click .accordion-heading' : "show_info"
  },
  template: JST['contacs/item'],
  render: function(){
  	this.$el.html(this.template({contact: this.model}));
  	return this;
  },
  show_info: function(){
    var info = new Phonebook.Collections.InfoContacts();
    info.url = "/info_contact/"+this.model.get('id');
    alert("/info_contact/"+this.model.get('id'));
  }

});