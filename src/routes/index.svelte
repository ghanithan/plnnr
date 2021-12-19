<script>
    import {onMount} from 'svelte';
import Calendar from './component/_Calendar.svelte';
import OverlayCard from './component/_OverlayCard.svelte'
import {map_days,map_month} from './js/names';
var date = new Date();
let calendar_month,calendar_year;
const disable = {date: -1};
let frostCard =  disable;




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
    <div class="sideContainer" on:click={previousMonth}>
        <span class="verticalText">
            {map_month.get(calendar_month == 0 ? 11 : calendar_month -1)}
        </span>
    </div>
    <div class="container">
        <Calendar class="landing" on:dateClicked={overlayCard} bind:calendar_month={calendar_month} bind:calendar_year={calendar_year}/>
    </div>
    <div class="sideContainer" on:click={nextMonth}>
        <span class="verticalText">
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
        position: relative;
        width: 90vw;
        padding-left: 1rem;
        padding-right: 1rem;
        
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
       
        overflow-x: visible;
        padding-top: 1rem;
        
        width: 100vw;
        align-content: space-between;
        justify-content:space-between;
        
    }

    .sideContainer{
        position: relative;
        
        width: 3vw;
        border: 1px solid #e6e4e4;
       margin-top: 5.5rem;
        display: flex;
        
        justify-content:space-evenly;
        padding: 0.5rem;
        
        cursor: -webkit-grab;
        user-select: none;
		pointer-events: auto;
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
    }
    .sideContainer:hover{
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
            
    }


</style>