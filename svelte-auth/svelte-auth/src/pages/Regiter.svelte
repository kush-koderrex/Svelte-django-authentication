<script>
	import axios from 'axios';
	import {push} from 'svelte-spa-router';
	let first_name = '',last_name = '',email='',password = '',password_confirm='';
	$: submit = async()=>{
		await axios.post('',{
			first_name,
			last_name,
			email,
			password,
			password_confirm
		});

		await push('/login');

	}
</script>


<main class="form-signin w-100 m-auto">
	<form on:submit|preventDefault={submit}>
	  <h1 class="h3 mb-3 fw-normal">Register</h1>
      <div class="form-floating">
		<input bind:value={first_name} class="form-control" placeholder="First Name">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>First Name</label>
	  </div>
      <div class="form-floating">
		<input bind:value={last_name} class="form-control"  placeholder="Last Name">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>Last Name</label>
	  </div>
  
	  <div class="form-floating">
		<input bind:value={email} type="email" class="form-control"  placeholder="name@example.com">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label >Email address</label>
	  </div>
	  <div class="form-floating">
		<input bind:value={password} type="password" class="form-control" placeholder="Password">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label >Password</label>
	  </div>
      <div class="form-floating">
		<input bind:value={password_confirm} type="password" class="form-control" placeholder="Confirm Password">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label >Confirm Password</label>
	  </div>
  
	  <div class="checkbox mb-3">
		
	  </div>
	  <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
	</form>
  </main>