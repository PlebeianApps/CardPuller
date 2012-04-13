function ListWindow(title) {
	
		var window = Ti.UI.createWindow({
			title: title,
			backgroundColor: 'white'
		});
		
		var tbl_data = [
    			{title:'Row 1'},
		    {title:'Row 2'},
		    {title:'Row 3'}
		];
		
		var table = new Titanium.UI.createTableView({
			data:tbl_data
		});
		
		window.add(table);
		
		return window;
};

module.exports = ListWindow;