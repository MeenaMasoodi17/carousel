var carousel = document.getElementsByClassName('carousel-container');

carousel.slideContainer = document.querySelector('div.slides-container');

carousel.buttons = {
    "prev": document.querySelector('div.carousel-prev'),
    "next": document.querySelector('div.carousel-next')
};

carousel.slide = document.querySelector('ul.slide');

carousel.items = carousel.slide.children;

window.console.log(carousel);

carousel.currentItem = 0;

(function(carousel){
    // Add an event listener to the previous button
    carousel.buttons.prev.addEventListener('click', function(e){ carouselPrev(carousel); });
    // Add an event listener to the next button
    carousel.buttons.next.addEventListener('click', function(e){ carouselNext(carousel); });
})(carousel);

function carouselNext(carousel) {
	// Increase the index of the current item
	carousel.currentItem++;
	// If we increased it too much
	if(carousel.currentItem >= carousel.items.length) {
		carousel.slide.style.transition = 'none';
		console.log(carousel.slide.style);
		// set it back to the first item
		carousel.currentItem = 0;		
	} else {
		carousel.slide.style.transition = 'margin 0.5s ease-in-out';
	}
	// TODO: fix animation to first slide from last and vice-versa

	// set style for the current item
	displayCurrentItem(carousel);
}

function carouselPrev(carousel) {
	// Decrease the index of the current item
	carousel.currentItem--;
	// If we're below zero, we've gone too far
	if(carousel.currentItem <= -1) {
		carousel.slide.style.transition = 'none';
		console.log(carousel.slide.style);
		// Set it to the last item
		carousel.currentItem = carousel.items.length - 1;
	} else {
		carousel.slide.style.transition = 'margin 0.5s ease-in-out';
	}

	// set style for the current item
	displayCurrentItem(carousel);
}

function displayCurrentItem(carousel) {
	// Reset the timer
	startCarouselTimeout(carousel);
	// set margin-left CSS property
	carousel.slide.style.marginLeft = -1 * (carousel.currentItem * 304);
}

function startCarouselTimeout(carousel) {
	// Cancel the last automatic timer
	clearTimeout(carousel.interval);
	// automatic slide timer
	carousel.interval = setTimeout(function(){
        carouselNext(carousel);
	},3000);
}


