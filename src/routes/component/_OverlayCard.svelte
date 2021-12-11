<script>
import {createEventDispatcher} from 'svelte'
import {clickOutside} from '../actions/clickOutside'
import {fade} from 'svelte/transition';

  export let card;

  const dispatch = createEventDispatcher();

  function returnToMain(){
    dispatch('returnToMain',{
      action : true
    });
  }

</script>


<!-- svelte-ignore missing-declaration -->
<div class="container" transition:fade>
  <div class="card" use:clickOutside on:outclick={returnToMain}>
    <ul>
      <li>{card.date} </li>
      <li>{card.content} </li>
      

    </ul>
  </div>
</div>

<style>
    .container {
   width: 100vw;
  height: 100vh;

  margin: auto;
  
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
  border-radius: 5px;
  background-color: rgba(255, 255, 255, .15);
  
  backdrop-filter: blur(5px);
  z-index: 1;
  position: absolute;
  
}

.card {

            height: auto;
            width: 20rem;
            padding: 1rem;
            position: relative;
            border-radius: 1rem;
            margin: 15rem auto auto auto;
            font-size: 16px;
            letter-spacing: -1px;
            border: 1px solid #e6e4e4;
            background-color: white;
            padding-right: 4px;
            font-weight: 700;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    
        }
</style>