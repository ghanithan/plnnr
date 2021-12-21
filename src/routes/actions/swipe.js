//from https://svelte.dev/tutorial/actions pannable.js
////inspired by https://svelte.dev/repl/b1a00248e33946dcaa3bbe9b07fd12fe?version=3.23.2

export default function swipe(node) {
	
	let x;
	let y;
	
	function handleMousedown(event){
		
//		  event.preventDefault();
		if (event.type.startsWith("touch")) {
    	 if (event.touches.length > 1 || (event.type == "touchend" && event.touches.length > 0))
				return;
    } else {
      x = event.clientX;
			y = event.clientY;
    }
 

		
		if (event.type.startsWith("touch")) {
      x = event.touches[0].pageX;
			y = event.touches[0].pageY;
    } else {
      x = event.clientX;
			y = event.clientY;
    }
		
		node.dispatchEvent(new CustomEvent('slidestart', {
			detail: { x,y }
		}));
		
		window.addEventListener("mousemove", handleMousemove);
    window.addEventListener("touchmove", handleMousemove);
		window.addEventListener("mouseup", handleMouseup);
		window.addEventListener("touchend", handleMouseup);
		
	}
	
	function handleMousemove(event){
		
		let clientX = x;
		let clientY = y;
		
		if (event.type.startsWith("touch")) {
      clientX = event.touches[0].pageX;
			clientY = event.touches[0].pageY;
    } else {
      clientX = event.clientX;
			clientY = event.clientY;
    }
		const dx = clientX - x;
		const dy = clientY - y;
		x = clientX;
		y = clientY;
		
		node.dispatchEvent(new CustomEvent('slidemove', {
			detail: { x, y, dx, dy }
		}));
	}
	
	function handleMouseup(event){
		x=0;
		y=0;
		
		node.dispatchEvent(new CustomEvent('slideend', {
			detail: { x, y }
		}));

		window.removeEventListener('mousemove', handleMousemove);
		window.removeEventListener("touchmove", handleMousemove);
		window.removeEventListener('mouseup', handleMouseup);
		window.removeEventListener("touchend", handleMouseup);
		
	}
	
	function handleClick(event){
		console.log('clicked')
			node.dispatchEvent(new CustomEvent('clicked', {
			detail: { x,y }
		}));
	}
	
	node.addEventListener('mousedown', handleMousedown);
	node.addEventListener('touchstart', handleMousedown);
	
	node.addEventListener('click', handleClick);
	
	return {
		destroy() {
			node.removeEventListener('mousedown', handleMousedown);
			node.removeEventListener('touchstart', handleMousedown);
			node.removeEventListener('click', handleClick);
		}
	};
}