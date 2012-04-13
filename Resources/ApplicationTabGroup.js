function ApplicationTabGroup() {
	//declare module dependencies
	//var AppWindow = require('ui/AppWindow');
	var WindowGroup = require('ui/WindowGroup');
	
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	//var win1 = new AppWindow(L('home')),
	//	win2 = new AppWindow(L('settings'));
	var win1 = new WindowGroup('readings'),
		win2 = new WindowGroup('deck');
		win3 = new WindowGroup('history');
		win4 = new WindowGroup('info');
	
	var tab1 = Ti.UI.createTab({
		title: 'Readings',
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: 'Deck',
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	var tab3 = Ti.UI.createTab({
		title: 'History',
		icon: '/images/KS_nav_views.png',
		window: win3
	});
	win3.containingTab = tab3;
	
	var tab4 = Ti.UI.createTab({
		title: 'Info',
		icon: '/images/KS_nav_views.png',
		window: win4
	});
	win4.containingTab = tab4;
	
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	self.addTab(tab4);	
	return self;
};

module.exports = ApplicationTabGroup;
