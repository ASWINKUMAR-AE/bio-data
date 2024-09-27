<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card profile-card shadow-lg">
          <div class="card-body text-center">
            <h1 class="card-title display-4">{{ name }}</h1>
            <p class="card-text"><strong>Email:</strong> {{ email }}</p>
            <p class="card-text"><strong>Phone:</strong> {{ phone }}</p>
            <p class="card-text"><strong>Bio:</strong> {{ bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      name: "Shanmuga Rajan",
      email: "rajansunmuga@gmail.com",
      phone: "8608774588",
      bio: "I am creating this website to practice my skills in web development."
    };
  }
};
</script>

<style scoped>
.profile-card {
  background-color: #ffffff;
  border-radius: 15px;
  transition: transform 0.3s ease-in-out;
}

.profile-card:hover {
  transform: scale(1.05);
}

.card-title {
  font-weight: 700;
  color: #343a40;
}

.card-text {
  font-size: 18px;
  color: #6c757d;
}
</style>
