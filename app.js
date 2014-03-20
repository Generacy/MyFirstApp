Ext.application({
    name: 'Sencha',

    launch: function() {
        // The whole app UI lives in this tab panel
        Ext.Viewport.add({
            xtype: 'tabpanel',
            fullscreen: true,
            tabBarPosition: 'bottom',

            items: [
                // This is the home page, just some simple HTML
                
				
				{
                    xtype: 'carousel',
                    title: 'Carousel',
                    iconCls: 'user',
                    url: 'contact.php',
                    layout: 'vbox',

                    items: [
							{
								html : 'Item 1',
								style: 'background-color: #5E99CC'
							},
							{
								html : 'Item 2',
								style: 'background-color: #759E60'
							},
							{
								html : 'Item 3'
							}
					]
                },
				
				{
                    xtype: 'nestedlist',
                    title: 'nestedlist',
                    iconCls: 'user',
                    url: 'contact.php',
                    layout: 'vbox',

                    items: [
							{
								html : 'Item 1',
								style: 'background-color: #5E99CC'
							},
							{
								html : 'Item 2',
								style: 'background-color: #759E60'
							},
							{
								html : 'Item 3'
							}
					]
                },

                // This is the recent blogs page. It uses a tree store to load its data from blog.json.
                {
                    xtype: 'dataview',
                    title: 'Dataview',
                    iconCls: 'star',
                    cls: 'blog',
                    displayField: 'title',

                    store: {
				fields: ['name', 'age'],
				data: [
					{name: 'Tim',  age: 1},
					{name: 'Tom',   age: 2},
					{name: 'Tum', age: 3}
				]
    },

    itemTpl: '{name} is {age} years old'
                }

                
            ]
        });
    }
});
