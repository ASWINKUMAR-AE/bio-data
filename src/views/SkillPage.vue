<template>
    <div class="skill-page">
      <h1>Skills</h1>
      <ul>
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>React Native</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "SkillPage"
  };
  </script>
  
  <style scoped>
  .skill-page {
    text-align: center;
    padding: 20px;
    background-color: #fff3e0;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #00796b;
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    font-size: 1.2em;
    margin: 10px 0;
    color: #004d40;
  }
  </style>
  