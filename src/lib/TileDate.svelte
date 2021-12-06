<script>
export let id, enable, isToday;

export const  day = 0,content = 'note';

</script>


{#if enable}
  <span class= "date">{id}</span>
{:else if isToday}
    <span class= "date.today">{id}</span> 
{:else}
  <span class= "date.other">{id}</span> 
{/if}

<style>
	
	.date {
		height: 50px;
		font-size: 16px;
		letter-spacing: -1px;
		border: 1px solid #e6e4e4;
		padding-right: 4px;
		font-weight: 700;
		padding: 0.5rem;
	}
	
	.date.today {
		color: #5286fa;
		background: #c4d9fd;
		border-color: currentColor;
	}
	
	.date.other {
		opacity: 0.2;
	}
</style>