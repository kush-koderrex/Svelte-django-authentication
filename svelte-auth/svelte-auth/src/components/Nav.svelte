<script>
  import axios from "axios";
  import { authenticated } from "../store/auth";
  import{ link } from "svelte-spa-router";

  let auth = false;

  authenticated.subscribe((value) => (auth = value));
  $: logout = async () => {
    await axios.post("logout", { withCredentials: true });
    axios.defaults.headers.common["Authorization"] = "";
    authenticated.set(false);
  };
</script>

<header class="p-3 text-bg-dark">
  <div class="container">
    <div
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
    >
      <a
        href="/"
        class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
      >
        <svg
          class="bi me-2"
          width="40"
          height="32"
          role="img"
          aria-label="Bootstrap"><use xlink:href="#bootstrap" /></svg
        >
      </a>

      <ul
        class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
      >
        <li>
          <a href="/" use:link class="nav-link px-2 text-secondary">Home</a>
        </li>
      </ul>

      {#if auth}
        <div class="text-end">
          <a
            href="/login"
            use:link
            class="btn btn-outline-light me-2"
            on:click={logout}>Logout</a
          >
        </div>
      {:else}
        <div class="text-end">
          <a href="/login" use:link class="btn btn-outline-light me-2">Login</a>
          <a href="/register" use:link class="btn btn-outline-light me-2"
            >Register</a
          >
        </div>
      {/if}
    </div>
  </div>
</header>
