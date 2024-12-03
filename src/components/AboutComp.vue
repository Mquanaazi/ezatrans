<template>
    <div id="ishloko">
        <div class="headers">
    <h2>About Eza Xpress (PTY) LTD</h2> 
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our<br>Services
        </button>
        <ul class="dropdown-menu">
            <li><button class="dropdown-item" type="button">Shuttle Services</button></li>
            <li><button class="dropdown-item" type="button">Airport Transfers</button></li>
            <li><button class="dropdown-item" type="button">Tour around Cape Peninsula</button></li>
            <li><button class="dropdown-item" type="button">Staff transportation</button></li>
        </ul>
    </div>
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Chauffeur<br>Qualifications
        </button>
        <ul class="dropdown-menu">
            <li><button class="dropdown-item" type="button">Good health</button></li>
            <li><button class="dropdown-item" type="button">An unendorsed driver’s license</button></li>
            <li><button class="dropdown-item" type="button">Valid ID Document</button></li>
            <li><button class="dropdown-item" type="button">Public Driver’s Permit (PDP)</button></li>
            <li><button class="dropdown-item" type="button">No criminal record</button></li>
            <li><button class="dropdown-item" type="button">Grade 10 as minimum education qualification</button></li>
        </ul>
    </div>
</div>
<div class="content">
        <p>Eza Xpress (PTY) LTD, is a Black Owned founded on 15 June 2021, by its sole Director Xola 
        Eza Mtwa. With his expertise in all spheres of Transport, Xola, from the onset steered EZA 
        XPRESS to successfully provide excellent services to various clients in the Western Cape area. 
        This included small and large scale transport needs, ranging from local travelling to long 
        distance travelling needs. Eza Xpress’s efficient, well trained team of professional drivers, as 
        well as its internal quality assurance processes, ensure that all projects meet customer 
        requirements and specifications to perfection.
        </p>
        <!-- <h3>Service</h3> -->
          
        <h3>Mission</h3>
        <p>Eza Xpress (PTY) LTD, is to be a fully operational business distinguished from the rest of the 
        competitors and accredited transport specialist. To promote skills development within the 
        organisation in order to ensure arrive alive campaigns in practice. The mission is also to provide 
        a private rapid transport that is effective and reliable.</p>
        <h3>Vision</h3>
        <p>Eza Xpress (PTY) LTD aims to become the market leader in transportation and travel 
        services, trough innovation, quality and excellence. It is also our vision to change the way our 
        public transport are operating or rendering their services. We strive to be the most successful 
        transportation company in the regional industry and to continually improve our market share by 
        offering competitive rates in conjunction with superior service, optimal use of available 
        resources, innovation and cost saving initiatives</p>
        <h3>Values</h3>
        <p>Our values is to maintaining service excellence and providing superior transport solutions 
        according to each customer’s needs. Treating stuff and customers with respect and honestly. 
        Developing new and innovative ways to safety and cost effectively transport cargo.</p>
        <h3>BUSINESS GOALS & OBJECTIVES</h3>
        <p>Eza Xpress is the best micro leading shuttle services in the province and is been recommended 
        by many students and we will merger our goals by running this organization worldwide. </p>
        <h3>BUSINESS STRATEGY</h3>
        <p>Tourism is the hub of the economy in our country, people need to travel and tour in south Africa 
        more especially in Western Cape, The more our province is growing in population and well 
        maintaining the environment it will natural give us opportunities to create jobs and to grow in the 
        market. </p>
    </div>
    </div>
</template>

<script>
export default {
    name: 'AboutComp'
}
</script>

<style scoped>
.headers {
    display: flex;
    flex-wrap: wrap;
    align-items: center; /* Centers items vertically */
    gap: 0.3rem; /* Adds space between elements */
    justify-content: center;
}

.headers h2 {
    margin-top: 23%;
    margin-bottom: 2%;
}
ul{
    background-color: rgb(185, 185, 232);
    /* justify-content: space-between; */
    
}
.dropdown{
    justify-content: space-around;
}
.content{
    /* background-color: rgb(183, 198, 210);
    border-radius: 1% */
    /* margin-top: 10px; */
}


</style>
