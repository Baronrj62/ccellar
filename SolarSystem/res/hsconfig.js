hs.addEventListener(window, "load", function() {
var autoload = /[?&]autoload=([^&#]*)/.exec(window.location.href);
if (autoload) document.getElementById(autoload[1]).onclick();
else document.getElementById('image1').onclick();
});
hs.addEventListener(document, "ready", function() {
var autoload = /[?&]autoload=([^&#]*)/.exec(window.location.href);
if (autoload) document.getElementById(autoload[1]).focus();
else document.getElementById('image1').focus();
});
hs.graphicsDir = 'res/graphics/';
hs.marginBottom = 121;
hs.marginTop = 69;
hs.marginLeft = 15;
hs.marginRight = 15;
hs.minWidth = 100;
hs.dragByHeading = false;
hs.preserveContent = false;
hs.outlineType = 'beveled';
hs.lang.previousTitle = 'Previous (left arrow)';
hs.lang.playTitle = 'Play slideshow (spacebar)';
hs.lang.pauseTitle = 'Pause slideshow (spacebar)';
hs.lang.nextTitle = 'Next (right arrow)';
hs.lang.closeTitle = 'Home';
hs.lang.previousText = 'Prev';
hs.lang.playText = 'Play';
hs.lang.pauseText = 'Pause';
hs.lang.nextText = 'Next';
hs.lang.closeText = 'Home';
hs.lang.loadingText = 'Loading …';
hs.lang.restoreTitle = 'Click for next';
hs.align = 'center';
hs.dimmingOpacity = 1;
hs.expandDuration = 0;
hs.restoreDuration = 0;
hs.showCredits = false;
hs.objectLoadTime = 'after';
hs.transitionDuration = 500;
hs.allowWidthReduction = true;
hs.blockRightClick = false;
hs.flushImgSize = false;
hs.transitions = ['expand', 'crossfade'];
hs.expandCursor = null;
hs.restoreCursor = null;
hs.Expander.prototype.onBeforeClose = function() {
	this.slideshow.pause();
	this.focus();
	return false;
}
hs.onDimmerClick = function() {
	return false;
}
hs.Expander.prototype.onImageClick = function() {
	this.slideshow.pause();
	return hs.next();
}
hs.Expander.prototype.onDrag = function() {
	return false;
}
hs.onKeyDown = function(sender, e) {
	if(e.keyCode == 8 || e.keyCode == 13 || e.keyCode == 27 || e.keyCode == 33 || e.keyCode == 34 || e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 70) return false;
}
hs.addSlideshow({
	interval: 5000,
	repeat: true,
	thumbstrip: {
		position: 'bottom center',
		mode: 'horizontal',
		relativeTo: 'viewport',
		offsetY: 0
	},
	overlayOptions: {
		opacity: 1.0,
		position: 'top right',
		offsetY: 5,
		offsetX: 0,
		hideOnMouseOut: true
	},
	useControls: true
});