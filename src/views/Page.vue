<template>
    <div class="page">
        <div style="width: 100%; float:left; height: 50px; border-bottom: #CCC 1px solid">
            <h1>{{this.$route.name}}</h1>
        </div>
        <div style="flex: 1">
            <div v-if="this.$route.path == '/contactus'" style="text-align: center;">
                <p>JOWA USA has technical sales and support available throughout North America and the rest of the world.</p>
                <p><strong>Industrial &amp; Municipal Customers:</strong> To obtain a quote or to place an order for products, contact JOWA USA or your local representative. For product service, contact JOWA USA directly. Contact JOWA USA directly to receive additional information on products or if you do not see your location listed.</p>
                <p><strong>Marine Customers:</strong>  To obtain a quote or to place an order for marine products, contact JOWA USA or your local marine representative. For marine product service, contact your local marine service representative. Contact JOWA USA directly to receive additional information on marine products or if you do not see your location listed.</p>
                <div style="display: flex; height: 400px; margin-top: 40px;">
                    <div style="border-right: 2px solid; flex: 1">
                        <h2>Contact JOWA USA Sales and Service Department</h2>
                    </div>
                    <div style="flex: 1">
                        <h2>Representative/Agent Search</h2>
                    </div>
                </div>
            </div>
            <div v-if="this.$route.path == '/aboutus'">
                <h4>Jowa USA is experienced.</h4>
                <p> Headquartered in Littleton, Massachusetts, JOWA USA, Inc. (formerly Metritape, Inc.) has provided reliable liquid level gauging products to customers worldwide since 1965 for industrial, municipal and marine applications.  JOWA USA is the North American distributor of JOWA AB products.  Sweden based JOWA AB manufactures environmentally related equipment for the shipping industry and is backed by 50 years of proven reliability. Their pioneering technology is recognized worldwide for emulsion breaking systems, oil discharge monitoring and control systems, and fresh water sterilizing equipment. Products are approved by major classification societies that include DNV, LR, ABS, BV, GL, and USCG. The JOWA Oil Discharge Monitoring and Control System (ODME) is the world’s best selling system. </p>
                <h4>Jowa USA is innovative.</h4>
                <p> With its innovative resistance-tape technology, JOWA USA provides reliable level gauging solutions for a diverse and demanding mix of industrial, municipal and marine applications, including power plants, refineries, aquariums, wastewater facilities and cargo, ballast, draft, fuel, oil and water tanks aboard a wide range of vessels. </p>
                <p> Commonly known as Metritape, this non-mechanical, continuous level sensor offers clear advantages over other level technologies, especially in thick, sticky liquids that cause mechanical level gauges to seize, and in agitated tanks and open channels where surface waves and floating debris cause conventional level gauges to give false level readings. With over 25,000 units installed throughout the world, the Metritape resistance-tape level sensor is a proven success with high user acceptance and customer loyalty. </p>
                <h4>Jowa USA is commited.</h4>
                <p> JOWA USA is committed to providing cost-effective, reliable and low-maintenance level gauging solutions. With its line of Metritape resistance-tape liquid level gauges, pressure transmitters, non-contact ultrasonic level sensors for liquid applications, pump controller packages and single and multi-tank instruments and displays, JOWA USA fulfills the demanding application requirements of industrial, municipal and marine customers worldwide. </p>
            </div>
            <div v-if="this.$route.path == '/downloads'" style="text-align: center;">
                <p>Welcome to our product reference library. Organized by category; data sheets, manuals, brochures, drawings, lists and application stories are available as PDF files for download. </p>
                <p><strong>Industrial &amp; Municipal Customers:</strong> Contact JOWA USA for additional information or a quote. </p>
                <p><strong>Marine Customers:</strong> Contact JOWA USA for additional information or a quote. </p>
                <p><strong>DataSheets, Manuals and Brochures</strong></p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Page extends Vue{
}
</script>
<style scoped>
.page{
    padding: 10px;
    text-align: left;
    float:left;
    width: 100%;
    box-sizing: border-box;
    display: flex ;
    flex-flow: column;
}
.page h1{
    margin: 0px;
    /* padding: 0px 0px 0px 10px; */
    float:left;
    display: block;
    width: 100%;
}

</style>