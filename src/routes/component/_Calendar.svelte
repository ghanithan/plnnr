<script>
	import {onMount} from 'svelte';
	import TileDate from './_TileDate.svelte';
    import {map_days,map_month} from '../js/names';

	
	let week_label = [ ...map_days.values() ]; 
	//console.log(week_label);
	let calendarDiv;

    let date,day;
		let today_date,today_month,today_year;
	let calendar, calendar_day = 0, calendar_date = 0 , calendar_days = 0;
	export let calendar_month= 0,calendar_year=0;
	let calendar_dayName="", calendar_monthName="";
	let className;

	
/*	let display_calendar = [[1,2,3,4,5,6,7],
							[8,9,10,11,12,13,14],
						[15,16,17,18,19,20,21],
						[22,23,24,25,26,27,28],
						[29,30,31,1,2,3,4]];*/
	
	let display_calendar = [];

	

	
   date = new Date();

   $: day = date.getDay();
	$: today_date = date.getDate();
	$: today_month = date.getMonth();
	$: today_year = date.getFullYear();
	
	
	calendar = new Date();
	calendar_day = calendar.getDay();
	calendar_date =calendar.getDate();
	calendar_month = calendar.getMonth();
	calendar_year= calendar.getFullYear();
	$: calendar_month = calendar_month;
	
	$: calendar_days = getCalenderDays(calendar_month, calendar_year).getDate();
	$: calendar_day = getStartDay(calendar_month,calendar_year);

	$: calendar_dayName = map_days.get(calendar_day);
	$: calendar_monthName = map_month.get(calendar_month);
	$: display_calendar = updateDisplay(calendar_day,calendar_days,calendar_month,calendar_year);
	
	function updateDisplay(startDay,totalDays, month,year){
		let local_display = [], local_week_display =[];
		let today = false, inter_today = false;
		let countDays = 1;
		let next_month= 0 ;
		let state = true;
		let start_date = 1,itertate_date = 1;
		let prev_month_totalDays = new Date(year,month,0).getDate() ;
		console.log(prev_month_totalDays);
		//console.log(new Date(year,month,1).getDay() );
		if(startDay != 0){
			start_date = prev_month_totalDays - startDay + 1;
			console.log(start_date +' ' + prev_month_totalDays +' ' + startDay);
			state = false;
		}else{
			prev_month_totalDays = totalDays;
			next_month = 1;
		}
		if(today_month == month && today_year == year){
			inter_today = true;
		}
		
		itertate_date = start_date;
		//console.log('adf '+ startDay);
		//	prev_month_totalDays = ((Math.ceil((startDay + totalDays )/7)) *7 ) % (startDay + totalDays);
			//			console.log(prev_month_totalDays);
		
		let week =0;
		while(itertate_date <= (prev_month_totalDays + 1)){
		
				if( itertate_date > prev_month_totalDays ){
					if(next_month === 2){
						if(local_week_display[0]){
							local_display = [...local_display, local_week_display];
						}
						break;
					}
					itertate_date = 1;
					if( next_month === 0 ){
						prev_month_totalDays = totalDays;
						console.log(prev_month_totalDays);
						next_month=1;
					}else if(next_month === 1 ){
						prev_month_totalDays = ((Math.ceil((startDay + totalDays )/7)) *7 ) % (startDay + totalDays);
						next_month = 2;
						if(prev_month_totalDays === 0){
							local_display = [...local_display, local_week_display];
							break;
						}
						console.log(prev_month_totalDays);
						console.log(next_month);
					}
					if(state == false) {
						state = true;
					}else{
						state = false;
					}
				}
				if(inter_today == true && state == true && today_date == itertate_date){
					today = true;
					console.log('hi');
				}else{
					today= false;
				}
			
				local_week_display = [...local_week_display, {id: itertate_date,content: 'note', enable: state, isToday: today, day: week}];
				itertate_date += 1;
			week += 1;
			if(week > 6){
				week = 0;
				
				local_display = [...local_display, local_week_display];
				local_week_display = [];
				//console.log(local_display);
			}
			//	console.log(local_display);
			countDays += 1;
			
		}	
			

		console.log(local_display);
		return local_display;

	}

	function getStartDay(month,year){
		return new Date(year,month,1).getDay();
	}
	function getCalenderDays(month,year){
		console.log(month +' '+year  );
		if(month == 11){
			month = 0;
		}else{
			month += 1;
		}
		console.log(month+' '+year  );
		let local_date = new Date(year,month,0);
		console.log(local_date);
		return local_date;
	}

	onMount(() => {
		$:{ display_calendar = display_calendar;
			calendarDiv.scrollIntoView(true);
		}
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



function propogate(event){
	console.log(event)
	if(event.detail.change > 0){
		nextMonth();
	}else{
		previousMonth();
	}
	// overlayCard(event);
}


</script>



<div class={className} >

	





<header>
	
	<h4>{calendar_monthName} {calendar_year}</h4>
	
</header>


<div class="month" bind:this={calendarDiv}>


{#each week_label as label}
	<span class="label">{label}</span>
{/each}
	
{#each display_calendar as week}
	{#each week as day}
	<TileDate {...day} on:dateClicked on:changeMonth={propogate}/>	
		
			
	{/each}
	

{/each}
	
</div>


</div>
<style>

header {
		display: flex;
		margin: 1rem auto;
		align-items: center;
		justify-content: center;
		user-select: none;
	}

h4 {
		display: block;
		text-align: center;
		text-transform: uppercase;
		font-size: 140%;
		margin: 0 1rem;
	}


.month {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		text-align: right;
		grid-gap: 4px;
	}
	
.label {
		font-weight: 500;
		text-align: center;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
		opacity: 0.8;
	}

    
 
</style>