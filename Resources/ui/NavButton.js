function NavButton (windowName,childWindowName) {
		Ti.UI.createButton({
			height: 44,
			width: 200,
			title: childWindowName,
			top: 20
		});
		
		this.addEventListener('click', function(parentWindowName, childWindowName) {
			parentWindowName.containingTab.open(childWindowName);
		});
	};

module.exports = NavButton;