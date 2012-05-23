function ListWindow(title) {
	
		var window = Ti.UI.createWindow({
			title: title,
			backgroundColor: 'white'
		});
		
		var TabWindow = require('ui/TabWindow');
		var readings = new TabWindow('Readings');
		var readingDescription = new TabWindow('Reading Title');
		var readingCards = new TabWindow('Reading Cards');
		
		var tbl_data = [
    		{title:'Row 1'},
		    {title:'Row 2'},
		    {title:'Row 3'}
		];
		
		var table = Titanium.UI.createTableView({
			data:tbl_data
		});
		
		// Listen for click events.
		table.addEventListener('click', function(e) {
			if (e.index === 0){
				window.containingTab.open(readings);
			} else if (e.index === 1){
				window.containingTab.open(readingDescription);
			} else {
				window.containingTab.open(readingCards);
			}
		});
		
		
		window.add(table);
		
		return window;
};

module.exports = ListWindow;