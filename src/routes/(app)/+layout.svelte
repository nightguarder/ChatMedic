<script>
    import Dark from "../../lib/theme/dark.svelte";
</script>
<div class="md:container">
  <div class="navbar bg-base-100">
      <div class="navbar-start">
          <a  href="/"class="btn btn-ghost normal-case text-xl bg-cyan-400/40">MedicineChat</a>
        </div>
      <div class="navbar-end">
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal dropdown-content  font-medium px-2 bg-base-100">
          <li tabindex="0">
            <a>Menu
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul class="p-2">
              <li><a href="./about">About</a></li>
              <li><a href="./(app)/contact">Contact</a></li>
              <li><a href="/(auth)">My Account</a></li>
            </ul>
          </li>
        </ul>
        <a  href="/"class="btn normal-case  bg-grey-400/40">Get Started</a>
        <Dark ></Dark>
        </div>  <!-- navbar normal -->
        
      </div><!-- navbar end -->
      <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a href="/register" class="justify-between ">
                  Get Started
                  <span class="badge">Free</span>
                </a>
              </li>
              <li><a href="/about">About</a></li>
              <li><a href="/(web)/contact">Contact</a></li>
              <li><a href="../(auth)/account">My account</a></li>
            </ul>
        </div><!-- dropdown menu -->
    </div><!-- NAVBAR -->
  </div><!-- CONTAINER -->
  <!-- REQUIREMENT -->
  <slot></slot>
  