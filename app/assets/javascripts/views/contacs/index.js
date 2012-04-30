Phonebook.Views.ContacsIndex = Backbone.View.extend({
  template: JST['contacs/index'],
  initialize: function(){
  	this.collection.on('reset',this.render,this);
    this.collection.on('add',this.appendContact,this);
  },
  render: function(){
  	this.$el.html(this.template);
  	this.collection.each(this.appendContact);
  	return this;
  },
  appendContact: function(contact){

    contact_id = contact.get('id');

  	var item_view = new Phonebook.Views.ContacsItem({model: contact});
  	$(".contact_container").append(item_view.render().el);

    var info_contact = new Phonebook.Collections.InfoContacts();
    info_contact.url = "/info_contact/"+contact_id;
    info_contact.fetch();

    var info_view = new Phonebook.Views.InfoContactsIndex({collection: info_contact, id_contact: contact_id});
    $("#items_"+contact_id).html(info_view.render().el);
  }


});
