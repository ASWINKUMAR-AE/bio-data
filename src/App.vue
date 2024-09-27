<template>
  <div id="app" class="dark-mode">
    <ProfilePage />
    <CompanyProfile/>
 
  </div>
  <br><br>
</template>

<script>
import ProfilePage from './components/ProfilePage.vue';
import CompanyProfile from './components/CompanyProfile.vue';

export default {
  components: {
    ProfilePage,
    CompanyProfile
  }
};
</script>

<style>
.dark-mode {
  background-color: #333;
  color: white;
}

.dark-mode a {
  color: #61affe;
}

.dark-mode a:hover {
  color: #41b3ff;
}

.dark-mode a:active {
  color: #1e7acc;
}
</style>

