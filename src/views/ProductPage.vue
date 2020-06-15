<template>
    <div class="page">
        <div class="innerNav" style="position: relative; width: 200px; height: 100%; border-right: 1px solid;">
            <div style="position: fixed; float:left; width: 200px;">
                <div class="navHeader">Marine Products</div>
                <ul>
                    <li><a href="#">Sentry IV</a></li>
                    <li><a href="#">Vanguard IV</a></li>
                    <li><a href="#">Water Ingress Alarm</a></li>
                </ul>
                <div class="navHeader">Industrial Products</div>
                <ul>
                    <li><a href="#">MetriLink (Wireless)</a></li>
                    <li><a href="#">Ultrasonic / Pressure TM</a></li>
                    <li><a href="#">Metritape</a></li>
                    <li><a href="#">Displays</a></li>
                </ul>
                <div class="navHeader">JOWA AB</div>
                <ul>
                    <li><a href="#">3 SEP OWS</a></li>
                    <li><a href="#">SEA Guard</a></li>
                    <li><a href="#">Emulsion Breaking Unit</a></li>
                    <li><a href="#">ODME</a></li>
                    <li><a href="#">AG-S</a></li>
                    <li><a href="#">Fresh Water Filters</a></li>
                    <li><a href="#">Hydrophone and Calorifier</a></li>
                    <li><a href="#">Homogenizer</a></li>
                </ul>
            </div>

        </div>
        <div style="display: flex; flex:1; flex-flow: column;">
            <div style="width: 100%; float:left; height: 50px; border-bottom: #CCC 1px solid">
                <h1>{{this.$route.name}}</h1>
            </div>
            <div v-if="this.$route.path == '/marineproducts'" style="padding: 0px 30px 100px 30px;">
                <div style="display: flex; text-align: center; flex: 1; margin: 0px 0px 40px 0px; justify-content:center;">
                    <div style="margin: 0px 30px 0px 0px;">
                    <h2>Metritape Level Gauging</h2>
                    <router-link to="/marineproducts">
                        <img src="../assets/Ships_hover.jpg" width="400"/>
                    </router-link>
                    </div>
                    <div style="margin: 0px 0px 0px 30px">
                    <h2>JOWA AB Products</h2>
                    <router-link to="/industrialproducts">
                        <img src="../assets/Jowa_ab_hover.jpg" width="400"/>
                    </router-link>
                    </div>
                </div>
                <p>
                    JOWA USA, Inc. supplies reliable level gauging solutions to marine customers throughout the world. With more than 50 years experience in marine tank gauging, our systems have proven to be reliable, affordable and effective solutions for demanding gauging applications aboard hundreds of vessels. These include deep cargo tanks, ballast, draft, fuel, oil and water aboard tankers, barges containerships, cruise ships, drilling rigs, military vessels and floating dry docks.
                </p>
            </div>
            <div v-if="this.$route.path == '/industrialproducts'" style="padding: 0px 10px 100px 10px;">
                <p>With nearly Four decades of experience in level gauging, JOWA USA, Inc. supplies reliable level solutions to industrial and municipal customers throughout the world. These solutions include a family of Metritape gauging products, wireless instrumentation, ultrasonic level sensors, pressure transmitter level sensors and display instruments.</p>
                <div v-for="(productCat, idx) in categories" :key="idx">
                    <div style="text-align: center;">
                        <a href="#/productCategory" style="display: inline-block; padding-top: 10px;">{{productCat.Title}}</a>
                        <div style="margin-top: 15px;text-align: left; border-bottom: #CCC 1px solid; float: left; padding-bottom: 20px;">
                            <img width="100" style="float:left;" :src="`http://73.114.184.243:1337${productCat.Image.url}`" alt="">
                            <p style="float:left; width: 770px; margin: 0px 0px 0px 25px;">{{productCat.description}}</p>
                        </div>
                    </div>
                </div>
                <!-- <p style="margin-top: 180px;"> Detailed information about products can be accessed below by clicking on the text or its accompanying image. Product data sheets, manuals and brochure are available for download on our product reference library as well as on their individual pages. For additional information or a quote, contact JOWA USA. </p> -->
            </div>
            <div v-if="this.$route.path == '/productCategory'" style="padding: 0px 10px 100px 10px;">
                <p>With nearly Four decades of experience in level gauging, JOWA USA, Inc. supplies reliable level solutions to industrial and municipal customers throughout the world. These solutions include a family of Metritape gauging products, wireless instrumentation, ultrasonic level sensors, pressure transmitter level sensors and display instruments.</p>
                <div v-for="(productCat, idx) in categories" :key="idx">
                    <div style="text-align: center;">
                        <a href="#/productCategory" style="display: inline-block; padding-top: 10px;">{{productCat.Title}}</a>
                        <div style="margin-top: 15px;text-align: left; border-bottom: #CCC 1px solid; float: left; padding-bottom: 20px;">
                            <img width="100" style="float:left;" :src="`http://73.114.184.243:1337${productCat.Image.url}`" alt="">
                            <p style="float:left; width: 770px; margin: 0px 0px 0px 25px;">{{productCat.description}}</p>
                        </div>
                    </div>
                </div>
                <!-- <p style="margin-top: 180px;"> Detailed information about products can be accessed below by clicking on the text or its accompanying image. Product data sheets, manuals and brochure are available for download on our product reference library as well as on their individual pages. For additional information or a quote, contact JOWA USA. </p> -->
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ProductPage extends Vue{
  categories = [];
  mounted(){
    fetch('http://73.114.184.243:1337/product-categories')
      .then(result=>result.json())
      .then(data => {
        this.categories = data;
        console.log(data);
      })
  }
}
</script>
<style>
.page{
    padding: 0px;
    text-align: left;
    float:left;
    width: 100%;
    height: 100%;
    display: flex;
}
.page h1{
    flex: 1;
    margin: 0px;
    padding: 5px 0px 10px 10px;
    float:left;
    display: block;
    width: 100%;
}

.navHeader{
    padding: 5px 5px 10px 5px;
    font-size: 12px;
    color: #FFF;
    font-weight: bold;
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgb(61, 57, 141) 3%, rgb(34, 137, 158) 100%);
}
.innerNav ul{
    margin: 0px;
    padding-left: 15px;
    font-size: 12px;
    font-weight: bold;
    list-style: none;
}
.innerNav li{
    margin: 3px 0px;
}
.innerNav a{
    color: #124675;
    text-decoration: none;
}

</style>