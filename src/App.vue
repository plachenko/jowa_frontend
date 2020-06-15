<template>
  <div id="app">
    <div style="height: 100px; width: 100%; text-align: center;">
      <img src="./assets/header.gif" alt="">
    </div>
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link v-for="(l, idx) in links" :key="idx" :to="l.replace(' ', '').toLowerCase()">{{l}}</router-link>
    </nav>
    <div style="width: 1110px; padding: 5px 0px 0px 0px;">
      <span><strong>Search by keyword:</strong> <input /> <input type="submit" value="Search" /></span>
      <span style="float:right;"><strong>Email us:</strong> <a href="mailto:info@jowa-usa.com">info@jowa-usa.com</a></span>

    </div>

    <div id="content">
      <div id="contentInner">
        <router-view/>
      </div>
      <div id="contentContact">
        <span>JOWA USA - 59 Porter Rd, Littleton Massachusetts 01460  Phone: 1-978-486-9800</span>
      </div>
    </div>

    <div id="footer">
      <router-link to="/">Home</router-link>
      <router-link v-for="(l, idx) in links" :key="idx" :to="l.replace(' ', '').toLowerCase()">{{l}}</router-link>
      <router-link to="/">Site Map</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class App extends Vue {
  links: string[] = [
    'Marine Products',
    'Industrial Products',
    'Contact Us',
    'About Us',
    'Downloads'
  ];

}
</script>

<style>
html, body{
  margin: 0px;
  height:100%;
}
body{
  background-color:#e6e6e6; 
  background-image: url('./assets/backgroundimg.gif'); 
  background-size: contain;
  background-repeat: repeat-x; 

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
}

#content{
  background-color:#EEE;
  width: 1130px;
  margin: 10px;
  flex: 1;
  border: 1px solid;
  text-align: center;
  /* min-height: 500px; */
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
#contentInner{
  flex: 1;
  /* padding: 10px; */
  box-sizing: border-box;
}

#nav {
  text-align: center;
  width: 1130px;
  box-sizing: border-box;
  margin: 5px 10px;
  border-radius: 10px;
  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgb(61, 57, 141) 3%, rgba(0,212,255,1) 100%);
}

#nav a {
  text-align: center;
  /* width: 10%; */
  width: 180px;
  text-decoration: none;
  display:inline-block;
  padding: 3px 0px;
  /* margin: 0px 2px; */
  color:#FFF;
  border-left: 2px solid;
  border-right: 2px solid;
}

#nav a:hover {
  background: #0062A9;
}

#nav a.router-link-exact-active {
  font-weight: bold;
  /* color: #42b983; */
}

#contentContact{
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgb(200, 200 , 200) 0%, rgb(255,255,255) 40%, rgb(255,255,255) 60%, rgb(200,200,200) 100%);
  font-size: 14px;
  border-top: 1px solid;
  padding: 5px 0px;
}

#footer{
  margin-bottom: 40px;
}
#footer a{
  display: inline-block;
  margin: 0px 5px;
  font-size: 10px;
}
#footer a:hover{
  color: #06e;
}
</style>
