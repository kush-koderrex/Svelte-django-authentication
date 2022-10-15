<script lang="ts">
  import axios from "axios";
  import { push , link } from "svelte-spa-router";
  import { authenticated } from "../store/auth";
  
  let email = "",
    password = "";
	// http://localhost:8080/api/login
  $: submit = async () => {
    const {data} = await axios.post("log-in/", {
      email,
      password,
    },{withCredentials :true});

	axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
  authenticated.set(true);

    await push("/");
  };
</script>

<main class="form-signin w-100 m-auto">
  <form on:submit|preventDefault={submit}>
    <h1 class="h3 mb-3 fw-normal">Sign In</h1>

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
    <div class="form-floating">
      <input
        bind:value={password}
        type="password"
        class="form-control"
        placeholder="Password"
      />
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label>Password</label>
    </div>
    <div class="mb-3">
      <a href="/forgot" use:link>Forgot Your password</a>

    </div>

    <div class="checkbox mb-3" />
    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</main>
