<script>
    import {onMount} from 'svelte';
import Calendar from './component/_Calendar.svelte';
import OverlayCard from './component/_OverlayCard.svelte'
import {map_days,map_month} from './js/names';
import { spring } from "svelte/motion";
import swipe from './actions/swipe';
import { prevent_default } from 'svelte/internal';
var date = new Date();
let calendar_month,calendar_year;
const disable = {date: -1};
let frostCard =  disable;

let coords = spring({ x: 0, y: 0 }, { stiffness: 0.05, damping: 0.5 });

	let w;
	let side="",content="hi";


    $: side = ($coords.x >= (w/6)*1) ? "left" : (( $coords.x <= -(w/6)*1) ? "right": "");
	$: side === 'left'? leftSwipe(): '';
	$: side === 'right'? rightSwipe(): '';

$: calendar_month = calendar_month;
$: calendar_year = calendar_year;
onMount(() => {
		
		const interval = setInterval(() => {
			date = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

function leftSwipe(){
    previousMonth();
    prevent_default();
    handleSlideEnd();
}


function rightSwipe(){
    nextMonth();
    prevent_default();
    handleSlideEnd();
}

 function previousMonth(){
	 if(calendar_month !=0){
	 	calendar_month -= 1;
	 }else{
		 calendar_month = 11;
		 calendar_year -= 1;
	 }

 }

function nextMonth() {
	if(calendar_month !=11){
		calendar_month += 1;
	}else{
		calendar_month = 0;
		calendar_year += 1;
	}
	
}

$: frostCard = frostCard;

function overlayCard(event){
	//console.log(event.detail);
	frostCard = event.detail;
 console.log(frostCard)
}


function displayHome(event){
	if(event.detail.action == true){
		frostCard = disable;
	}
	console.log(event.detail);
}


	function handleSlideStart() {
		coords.stiffness = coords.damping = 1; 
	}

	function handleSlideMove(event) {
		coords.update($coords => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy
		}));
	}

	function handleSlideEnd(event) {
		coords.stiffness = 0.05;
		coords.damping = 0.5;
		coords.set({ x: 0, y: 0 });
	}
	
	function handledClicked(){
		
		
	}
	
	//$: console.log($coords)
	$: console.log(w)
	

</script>

{#if frostCard.date != disable.date}
<OverlayCard card={frostCard} on:returnToMain={displayHome}
/>
{/if}

<div class="header">



<p>
    {date}

</p>


<button on:click={previousMonth}>
    previous month 
    </button>
    
    
    <button on:click={nextMonth}>
        next month 
    </button>
    
    
    <button on:click={() => {calendar_year -= 1; } }>
    previous year 
    </button>
    
    
    <button on:click={() => {calendar_year += 1;}}>
        next year 
    </button>
</div>
<div class="swipeContainer">
    <div class="sideContainer" on:click={previousMonth} 
            bind:offsetWidth = {w}
            use:swipe
        on:slidestart = {()=>{handleSlideStart }}
        on:slidemove={handleSlideMove}
            on:slideend={handleSlideEnd}
        on:clicked={handledClicked}
        style="transform: translate3d({$coords.x}px, 0, 0)">
        <span class="verticalText right">
            {map_month.get(calendar_month == 0 ? 11 : calendar_month -1)}
        </span>
    </div>
    <div class="container"
            bind:offsetWidth = {w}
            use:swipe
        on:slidestart = {()=>{handleSlideStart }}
        on:slidemove={handleSlideMove}
            on:slideend={handleSlideEnd}
        on:clicked={handledClicked}
        style="transform: translate3d({$coords.x}px, 0, 0)">
        <Calendar class="landing" on:dateClicked={overlayCard} bind:calendar_month={calendar_month} bind:calendar_year={calendar_year}/>
    </div>
    <div class="sideContainer" on:click={nextMonth}
            bind:offsetWidth = {w}
            use:swipe
        on:slidestart = {()=>{handleSlideStart }}
        on:slidemove={handleSlideMove}
            on:slideend={handleSlideEnd}
        on:clicked={handledClicked}
        style="transform: translate3d({$coords.x}px, 0, 0)">
        <span class="verticalText left">
           { map_month.get(calendar_month == 11 ? 0: calendar_month +1)}
        </span>
    </div>
</div>

<style>
    :global(body){
        margin:0;
        overflow-x: hidden;
    }
    .container{
        
        padding-left: 1rem;
        padding-right: 1rem;

        position: relative;
        
       
        border: 1px solid #e6e4e4;
       margin-top: 5.5rem;
        
        
        justify-content:space-evenly;
        padding: 0.5rem;
        
        cursor: -webkit-grab;
        user-select: none;
		pointer-events: auto;

        min-width: 80vw;
		height: 100%;
		
		scroll-snap-align: start;
        
    }

    .header{
        position: relative;
        display: flex;
        align-content: space-between;
        justify-content: space-between;
        flex-wrap: wrap;
        
    }

    .swipeContainer{
        position: relative;
        display: flex ;
       
        overflow-x: hidden;
        padding-top: 1rem;
        
        width: 100vw;
        align-content: space-around;
        justify-content:space-around;

      
		scroll-snap-type: x mandatory;	
		
		user-select: none;
		-webkit-overflow-scrolling: touch;
		pointer-events: auto;
        
    }

    .sideContainer{
        position: relative;
        
       
        border: 1px solid #e6e4e4;
       margin-top: 5.5rem;
        
        
        justify-content:space-evenly;
        padding: 0.5rem;
        
        cursor: -webkit-grab;
        user-select: none;
		pointer-events: auto;

        min-width: 80vw;
		height: inherit;
        
		
		scroll-snap-align: start;
	

    }
    .left{
        float: left;
    }
    .right{
        float:right;
    }
   :global(landing){
        z-index: -1;
        top: 0;
        position: absolute;
        width: 100vw;
        height: 100vh;
    }
    .verticalText{
        writing-mode: vertical-rl;
        text-orientation: upright;
        letter-spacing: 1rem;
        text-align: center;
        text-transform: uppercase;

    }
    .sideContainer:hover{
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
            
    }


</style>