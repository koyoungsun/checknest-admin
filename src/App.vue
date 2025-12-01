<template>
  <div class="d-flex">
    <!-- Sidebar -->
    <div class="sidebar bg-light border-end" style="width: 220px;">
      <h5 class="p-3 mb-0">CheckNest Admin</h5>
      <ul class="nav flex-column px-2">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/users">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/checklists">Checklists</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/templates">Templates</router-link>
        </li>
      </ul>
    </div>

    <!-- Content -->
    <div class="content flex-grow-1">
      <!-- Topbar -->
      <div class="border-bottom p-3">
        <h4 class="mb-0">Admin Panel</h4>
      </div>

      <!-- Page Content -->
      <div class="p-4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>


<style scoped>
.nav-link {
  color: #333;
}

.nav-link.router-link-active {
  font-weight: bold;
  color: #0d6efd;
}
</style>
