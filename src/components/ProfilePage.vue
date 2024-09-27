<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card bg-dark shadow-lg h-100">
          <div class="card-header bg-primary text-white text-center">
            <h3>Welcome to My Profile</h3>
          </div>
          <div class="card-body text-center">
            <img
              src="../assets/raju.jpg"
              class="rounded-circle mb-3"
              alt="Profile Image"
              width="150"
              height="150"
            />
            <h4>{{ name }}</h4>
            <p>{{ title }}</p>
            <p>{{ bio }}</p>

            <div class="mt-4 text-left">
              <h5>Contact Information</h5>
              <ul class="list-unstyled">
                <li><strong>Email:</strong> {{ email }}</li>
                <li><strong>Phone:</strong> {{ phone }}</li>
                <li><strong>Address:</strong> {{ address }}</li>
              </ul>
            </div>

            <div class="mt-4">
              <router-link to="/CompanyProfile"  @click="scrollToDetails" class="btn btn-primary ks">More Details</router-link>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
   
      name: "Shanmuga Rajan",
      email: "rajansunmuga@gmail.com",
      phone: "8608774588",
      address: "4/290-2 valayankulam colony valayankulam madurai 625022",
      bio: "I am creating this website to practice my skills in web development."
    };
  },
  methods: {
    scrollToDetails() {
      // Scroll to 50% of the page height smoothly
      const scrollHeight = document.documentElement.scrollHeight;
      window.scrollTo({
        top: scrollHeight * 0.4,
        behavior: "smooth"
      });
    }
  }
};
</script>


<style scoped>
.container {
  height: 100vh; /* Full viewport height */
}
.ks{
  border-radius: 50px !important;
  width: 100%;
}
.card {
  border-radius: 15px;
  transition: transform 0.3s ease-in-out;
  color:white;
  min-height: 70vh; /* Adjust the height */
}

.card:hover {
  transform: scale(1.05);
}

img {
  border: 3px solid orange;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 20px;
}

h5 {
  text-align: left;
}

ul {
  text-align: left;
}

button {
  margin-right: 10px;
}
</style>