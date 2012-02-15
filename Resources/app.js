// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create 'Readings' tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Readings',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    //icon:'KS_nav_views.png',
    title:'Readings',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Readings',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

//
// create 'Deck' tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Deck',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    //icon:'KS_nav_ui.png',
    title:'Deck',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Deck',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);


//
// create 'History' tab and root window
//
var win3 = Titanium.UI.createWindow({  
    title:'History',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    //icon:'KS_nav_ui.png',
    title:'History',
    window:win3
});

var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'History',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win3.add(label3);


//
// create 'Info' tab and root window
//
var win4 = Titanium.UI.createWindow({  
    title:'Info',
    backgroundColor:'#fff'
});
var tab4 = Titanium.UI.createTab({  
    //icon:'KS_nav_ui.png',
    title:'Info',
    window:win4
});

var label4 = Titanium.UI.createLabel({
	color:'#999',
	text:'Info',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win4.add(label4);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);
tabGroup.addTab(tab4);  


// open tab group
tabGroup.open();
