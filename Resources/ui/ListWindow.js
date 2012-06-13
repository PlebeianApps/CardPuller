function ListWindow(title) {
	
		var window = Ti.UI.createWindow({
			title: title,
			backgroundColor: 'white'
		});
		
		var TabWindow = require('ui/TabWindow');
        var ReadDescWindow = require('ui/ReadDescWindow');
        var CardData = require('db/CardData');
        		
		var readingDescription = new TabWindow('Reading Title');
		var readingCards = new TabWindow('Reading Cards');
		
		
	    var tbl_data = new CardData().getData();
		/* var tbl_data = [
    		{title:'Row 1'},
		    {title:'Row 2'},
		    {title:'Row 3'}
		]; */
		
		var table = Titanium.UI.createTableView({
			data:tbl_data
		});
		
	
		// Listen for click events.
		table.addEventListener('click', function(e) {
		    window.fireEvent('updateDesc',{title: e.rowData.title, description: e.rowData.description, numberCards: e.rowData.numberCards});
			var readings = new ReadDescWindow();
			window.containingTab.open(readings);
		});
		
		
		window.add(table);
		
		return window;
};

module.exports = ListWindow;