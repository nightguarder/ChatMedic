<script>
	export let data;
</script>

<div class="md:container display:block ">
	<h1 class="font-medium text-left">My Account</h1>
	<p class="sm:text-xl leading-relaxed">Welcome back {data.profile.username}!</p>
	<pre>This page should be visible only to logged in users!</pre>
</div>
