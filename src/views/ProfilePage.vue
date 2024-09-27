<template>
  <div class="profile-page">
    <transition name="fade">
      <Profile />
    </transition>
    <nav class="nav-bar">
      <router-link to="/">Profile</router-link>
      <router-link to="/marks">Marks</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/more-details">More Details</router-link>
    </nav>
  </div>
  <div class="profile-page">


    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";


export default {
  name: "ProfilePage",
  components: {
    Profile
  }
};
</script>

<style scoped>
.profile-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #e0f7fa;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.profile-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #e0f7fa;
}

.nav-bar {
  margin-bottom: 20px;
}

.nav-bar a {
  margin: 0 10px;
  text-decoration: none;
  color: #00796b;
  font-weight: bold;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

