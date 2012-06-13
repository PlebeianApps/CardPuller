function ReadDescWindow() {
    
        var window = Ti.UI.createWindow({
            backgroundColor: 'white',
            title : 'default title'
        }); //create window
        this.title;
        this.description;
        this.numberCards;
        window.addEventListener('updateDesc',function(e){
            this.title = e.title;
            this.description = e.description;
            this.numberCards = e.numberCards;
        });
        
        window.title = this.title;
        
        var scroll =  Ti.UI.createScrollView({
            contentHeight:'auto',
            top:0,
            showVerticalScrollIndicator:true,
            width: '90%'
        }); //create scroll view
        
        var view = Ti.UI.createView({
            layout: 'vertical',
            height: Ti.UI.FILL,
            top:0
        });//create view
        
        var button = Ti.UI.createButton ({
            title: 'Begin',
           top: 10,
           width: Ti.UI.FILL,
           height: Ti.UI.SIZE //wraps button to size of text
        });//create button
        
        var l1 = Titanium.UI.createLabel({
            text: this.numberCards,
            height:Ti.UI.SIZE,
            color:'#900',
            font:{fontSize:48},
            textAlign:'center'
        });
        
        var l2 = Titanium.UI.createLabel({
            text: this.description,
            height:Ti.UI.SIZE,
            color:'#900',
            font:{fontSize:24},
            textAlign:'center'
        });//create labels
        
        
        view.add(button);
        view.add(l1);
        view.add(l2);//add labels to view
        //add button to view
        scroll.add(view);//add view to scroll
        window.add(scroll);//add scroll to window
    
        return window;

};

module.exports = ReadDescWindow;