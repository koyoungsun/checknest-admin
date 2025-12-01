<template>
  <div class="p-4">
    <h1>Users Page</h1>
  </div>
</template>

<script>
import { db } from "../firebase";

console.log("Firestore Ready:", db);

export default {
  name: "UsersPage"
};
</script>