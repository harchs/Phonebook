Phonebook.Routers.Contacs = Backbone.Router.extend({
	routes:{
		'': 'index'
	},
	initialize: function(){
		this.contact_list = new Phonebook.Collections.Contacs();
		this.contact_list.fetch();
	},
	index: function(){
		var index_view = new Phonebook.Views.ContacsIndex({collection: this.contact_list});
		$('.container').html(index_view.render().el);
	}

});
