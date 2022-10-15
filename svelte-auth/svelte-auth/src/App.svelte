<script>
  import Home from "./pages/Home.svelte";
  import Login from "./pages/Login.svelte";
  import Regiter from "./pages/Regiter.svelte";
  import Router from "svelte-spa-router";
  import Nav from "./components/Nav.svelte";
  import Forgot from "./pages/Forgot.svelte";
  import Reset from "./pages/Reset.svelte";
  import Fotter from "./pages/Fotter.svelte";
  import Body from "./pages/Body.svelte";
  const routes = {
    "/": Home,
    "/login": Login,
    "/register": Regiter,
    "/forgot": Forgot,
    "/reset/:token": Reset,
  };
</script>

<Nav />

<Router {routes} />
<Body />

<Fotter />
