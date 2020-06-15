<template>
  <div class="home">
    <div id="homeContent">

      <div style="display: flex;">
        <div style="margin: 0px 30px 0px 0px;">
          <h1>Marine / Offshore</h1>
          <router-link to="/marineproducts">
            <img src="../assets/Container.jpg" width="330"/>
          </router-link>
        </div>
        <div style="margin: 0px 0px 0px 30px">
          <h1>Industrial / Municipal</h1>
          <router-link to="/industrialproducts">
            <img src="../assets/Diesel.jpg" width="330"/>
          </router-link>
        </div>
      </div>

      <h1>Simple. Rugged. Reliable.</h1>
      <p>JOWA USA's Metritape products provide reliable liquid level gauging for marine, industrial, and municipal applications.
  North America distributor of JOWA AB products.</p>
      <h1 style="margin-bottom: 50px;">Visit Us at:</h1>
      <a href="https://www.seajapan.ne.jp/en/">
        <img src="../assets/SeaJapan.png" width="150"/>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  
}
</script>
<style>
.home{
  width: 100%;
  float:left;
  display: flex;
  align-items: center;
  flex-flow: column;
  margin-bottom: 70px;
}
#homeContent{
  float:left;
  width: 700px;
}
.home p{
  font-weight: bold;
}

</style>
