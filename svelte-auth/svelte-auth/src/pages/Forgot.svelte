<script>
  import axios from "axios";
  let email = "",
    cls = "",
    message = "";
  $: submit = async () => {
    const status = await axios.post("forgot", { email });
    if(status ===200){
        cls='success';
        message ="Email was send";
    }else{
        cls='danger';
        message ="Email does not exixts";

    }
  };
</script>

<main class="form-signin w-100 m-auto">
  {#if cls}
    <div class={`alert alert=${cls}`} role="alert">
      {message}
    </div>
  {/if}
  <form on:submit|preventDefault={submit}>
    <h1 class="h3 mb-3 fw-normal">Please Insert Your Email</h1>

    <div class="form-floating">
      <input
        bind:value={email}
        type="email"
        class="form-control"
        placeholder="name@example.com"
      />
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label>Email address</label>
    </div>

    <div class="checkbox mb-3" />
    <button class="w-100 btn btn-lg btn-primary mt-3" type="submit"
      >Submit</button
    >
  </form>
</main>
