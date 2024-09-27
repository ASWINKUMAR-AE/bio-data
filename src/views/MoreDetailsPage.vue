<template>
    <div class="more-details-page">
      <h1>More Details</h1>
      <p>
        This section contains additional information about the profile. 
        Here, you can provide further details such as hobbies, certifications, or personal background.
      </p>
  
      <ul>
        <li>Hobbies: Drawing, Reading, Coding</li>
        <li>Certifications: Vue.js, React Native, Node.js</li>
        <li>Languages: Tamil, English</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "MoreDetailsPage"
  };
  </script>
  
  <style scoped>
  .more-details-page {
    text-align: center;
    padding: 20px;
    background-color: #fce4ec;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #880e4f;
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2em;
    color: #ad1457;
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    font-size: 1.1em;
    margin: 10px 0;
    color: #6a1b9a;
  }
  </style>
  