function NavButton (title) {
		var button = Ti.UI.createButton({
			height: 44,
			width: 200,
			title: title,
			top: 20
		});
		return button;
};

function WindowGroup(title) {
	var TabWindow = require('ui/TabWindow');
	var ListWindow = require('ui/ListWindow');
	
	function EventListener(button,parent,child){
		button.addEventListener('click', function() {
			parent.containingTab.open(child);
		});
		};
	
	if (title === 'readings'){
		var readings = new ListWindow('Readings');
		var readingDescription = new TabWindow('Reading Title');
		var readingCards = new TabWindow('Reading Cards');
		var notes = new TabWindow('Notes');
		//var buttonReadings = new NavButton('description');
		var buttonReadingDescription = new NavButton('readingCards');
		var buttonReadingCards = new NavButton('notes');
		//readings.add(buttonReadings);
		readingDescription.add(buttonReadingDescription);
		readingCards.add(buttonReadingCards);
		//EventListener(buttonReadings,readings,readingDescription);
		EventListener(buttonReadingDescription,readings,readingCards);
		EventListener(buttonReadingCards,readings,notes);

		return readings;
	} else if (title === 'deck'){
		var deck = new TabWindow('Deck');
		var color = new TabWindow('Color');
		var buttonDeck = new NavButton('Colors');
		deck.add(buttonDeck);
		EventListener(buttonDeck,deck,color);
		return deck;
	} else if (title === 'history'){
		var history = new TabWindow('History');
		var readingCards = new TabWindow('Reading Cards');
		var notes = new TabWindow('Notes');
		var buttonHistory = new NavButton(history,readingCards);
		var buttonReadingCards = new NavButton(readingCards,notes);
		history.add(buttonHistory);
		readingCards.add(buttonReadingCards);
		return history;
	} else {
		var info = new TabWindow('Info');
		var infoText = new TabWindow('Info Text');
		var buttonInfo = new NavButton(info,infoText);
		info.add(buttonInfo);
		return info;
	}
};

module.exports = WindowGroup;