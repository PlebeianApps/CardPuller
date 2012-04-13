function TabWindow(title) {
	
		var window = Ti.UI.createWindow({
			title: title,
			backgroundColor: 'white'
		});
		return window;
};

module.exports = TabWindow;