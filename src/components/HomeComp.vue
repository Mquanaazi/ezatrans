<template>
    <content>
                <div class="header">
            <div class="flash-cards">
                <div class="card">
                    <h3>Our Motto</h3>
                    <p>We set the standards others try to live up to!</p>
                </div>
                <div class="card">
                    <h3>Our Founder</h3>
                    <p>Founded in 2021 by Xola Eza Mtwa, our company delivers safe, reliable, and exciting journeys across the Western Cape.</p>
                </div>
                <div class="card">
                    <h3>Our Service</h3>
                    <p>With skilled drivers and a passion for excellence, we make each trip—whether local or long-distance—a comfortable, enjoyable experience.</p>
                </div>
                <div class="card">
                    <h3>Why Choose Us?</h3>
                    <p>Join Eza Xpress and see why our service is a cut above the rest!</p>
                </div>
            </div>
        </div>

        <div id="cube-container">
        <div id="cube">
            <div class="face front">
                <img src="https://mquanaazi.github.io/huluImages/ezainbusiness.jpeg" alt="Front Image">
            </div>
            <div class="face back">
                <img src="https://mquanaazi.github.io/huluImages/ezaonmotion.jpeg" alt="Back Image">
            </div>
            <div class="face left">
                <img src="https://mquanaazi.github.io/huluImages/ezatwins.jpeg" alt="Left Image">
            </div>
            <div class="face right">
                <img src="https://mquanaazi.github.io/huluImages/ezatwins1.jpeg" alt="Right Image">
            </div>
            <div class="face top">
                <img src="https://mquanaazi.github.io/huluImages/eza express.png" alt="Top Image">
            </div>
            <div class="face bottom">
                <img src="https://mquanaazi.github.io/huluImages/eza express.png" alt="Bottom Image">
            </div>
        </div>
        </div>
    </content>

</template>

<script>
export default {
    name: 'HomeComp'
}
</script>

<style scoped>
/* img{
    width: 350px;
    height: 650px;
    
}*/
.header {
    text-align: center;
    /* padding: 10px; */
    /* background-color: #f5f5f5; */
}

.flash-cards {
    display: grid;
    /* grid-template-columns: repeat(2,1fr); */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    justify-items: center;
    color:#060606;
    padding: 10px;
}

.card {
    background: linear-gradient(to bottom right, #bbb5f2, #b8d8d8);
    border: 2px solid #ccc;
    border-radius: 12px;
    padding: 10px;
    
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    max-width: 300px;
    text-align: left;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #010101;
}

.card p {
    font-size: 1rem;
    line-height: 1.5;
    color: #000000;
}

 /* Container to center the cube */
#cube-container {
    perspective: 1000px;
    width: 300px; /* Adjust width and height as needed */
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

/* Cube styling */
#cube {
    position: relative;
    width: 200px; /* Cube face size */
    height: 200px;
    transform-style: preserve-3d;
    transform: rotateX(0deg) rotateY(0deg);
    animation: rotateCube 9s infinite ease-in-out;
}

.face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.face img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
content{
    display: flex;
    flex-direction: column;
    margin-top: 0%;
/* 
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 20px;  
  border-radius: 10px;
  justify-items: center;  
  align-items: start;
  padding: 20px; */

    
}

/* Position each face */
.front  { transform: rotateY(0deg) translateZ(100px); }
.back   { transform: rotateY(180deg) translateZ(100px); }
.left   { transform: rotateY(-90deg) translateZ(100px); }
.right  { transform: rotateY(90deg) translateZ(100px); }
.top    { transform: rotateX(90deg) translateZ(100px); }
.bottom { transform: rotateX(-90deg) translateZ(100px); }

/* Animation */
@keyframes rotateCube {
    0%   { transform: rotateX(0deg) rotateY(0deg); }
    25%  { transform: rotateX(0deg) rotateY(90deg); }
    50%  { transform: rotateX(0deg) rotateY(180deg); }
    75%  { transform: rotateX(0deg) rotateY(270deg); }
    100% { transform: rotateX(0deg) rotateY(360deg); }
}

</style>
