Phonebook.Views.InfoContactsIndex = Backbone.View.extend({
	tagName: "ul",
	className: "nav nav-pills nav-stacked",
	template: JST['info_contacts/index'],
  events:{
      "click #addInfoContact" : "show_form",
      "click #add" : "save"
  },
  initialize: function(){
  	this.collection.on("reset",this.render,this);
    this.collection.on('add',this.render,this);

  },
  render: function(){
  	this.$el.html(this.template({contact_id: this.options.id_contact}));
  	this.collection.each(this.appendIndividualInfo);

  	return this;
  },
  appendIndividualInfo: function(individual_info){
  	var item_info_view = new Phonebook.Views.InfoContactsItem({model: individual_info});
  	$('#items_'+individual_info.get('contact_id')+' .nav').prepend(item_info_view.render().el);
  },
  show_form: function(){
    
    this.$("#new_info_contact").show();
    this.$("#addInfoContact").hide();
  },
  save: function(e){
    e.preventDefault();
    attributes = {number: this.$el.find('.number').val(), contact_id: this.$el.find('.contact_id').val()};

    //this.info_contact = new Phonebook.Collections.InfoContacts();
    this.collection.url = "/info_contact";
    this.collection.create(attributes);

    this.$("#new_info_contact").hide();
    this.$("#addInfoContact").show();
  }

});


