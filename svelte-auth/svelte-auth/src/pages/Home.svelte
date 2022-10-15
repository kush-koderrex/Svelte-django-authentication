<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import { authenticated } from "../store/auth";

  let message = "You are not logged  in";

  onMount(async () => {
    const { data, status } = await axios.get();
    if (status === 200) {
      message = "hi ${data.first_name} ${data.last_name}";
      authenticated.set(true);
    } else {
      message = "You are not logged  in";
      authenticated.set(false);
    }
  });
</script>
<br>
<div  class="alert alert-danger container" role="alert">
  {message}
</div>


<!-- <div class="container at-5 text-center">
  <h3>{message}</h3>
</div> -->
