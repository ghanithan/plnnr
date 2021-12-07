<script>
    export let id, content, enable, isToday, day;
        
    </script>
    
            {#if isToday}
                <span class= "date today">{id}</span>
                
            {:else if enable}
                    <span class= "date">{id}</span> 
            {:else}
                <span class= "date other">{id}</span> 
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
        
        .date:hover{
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
            
        }
    </style>