<template>
    <content>
        <div class="header">
            <p>We set the standards others try to live up to!<br> Founded in 2021 by Xola Eza Mtwa, our company delivers safe, reliable,<br> and exciting journeys across the Western Cape. With skilled drivers and a passion for excellence, <br>we make each trip—whether local or long-distance—a comfortable, enjoyable experience. <br>Join Eza Xpress and see why our service is a cut above the rest!</p>
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
.header{
    justify-content: center;
    font-weight:bolder;
    color: black;
    margin-top: 5%;
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
    flex-direction: row;
    margin-top: 8%;
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
