<template lang="html">
<div class="container-fluid">
    
    <main></main>
    <div class="row">
        <div class="hero-image">
            <div class="hero-text">
                <h1>明日発見</h1>
                <p>Descubre el mañana</p>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-md-4 justify-content ">
            <h2>Atenas 1896</h2>
            Esta historia comienza en 776AC en Olimpia,
            Gracia, donde se realizan los primeros Juegos
            Olímpicos. El premio para los atletas consiste en
            una corona de olivos. Once siglos después, el
            empreador romano Teodisio I los suspende por
            considerarlos un espectáculo pagano. Los juegos
            Olímpicos de la era moderan son concebidos por
            el barón Pierre de Coubertín y se gestan en 1894
            en la Universidad de la Sorbona en París. Allí el
            francés llama a universalizar el deporte bajo el
            lema: "citus, altius, fortius" ("más rápido, más
            alto, más fuerte")
        </div>
        <div class="col-md-3 justify-content ml-4  px-0">
            <img style="height:20rem" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Athens_1896_report_cover.jpg/267px-Athens_1896_report_cover.jpg">
        </div>
        <div class="col-md-4 justify-content mt-4">
            <h2>Grandes atletas de la historia</h2>
            <ul class="list-group">
                <li class="list-group-item list-group-item-secondary text-primary">Johny Weissmuller</li>
                <li class="list-group-item text-primary">Jesse Owens</li>
                <li class="list-group-item list-group-item-secondary text-primary">Nadia Comaneci</li>
                <li class="list-group-item text-primary">Michael Phelps</li>
                <li class="list-group-item list-group-item-secondary text-primary">Usaint Bolt</li>
            </ul>
        </div>
    </div>

    <div class="row mt-4 my-4">
        <div class="col-2 justify-content ml-4  px-0">
            <img style="height:20rem" src="https://media1.britannica.com/eb-media/22/84922-004-B5E32807.jpg">
        </div>
        <div class="col-md-4 justify-content ">
            <h2>Paris 1900</h2>
            <p class="text-primary m-0">Con el cuestionamiento de los griegos</p>
            Con el cuestionamiento de los griegos, pues ese país
            consideraba que los Juegos le pertenecían y que
            solo debían realizarse en su territorio, las mujeres
            hacen su debut olímpico pues 19 son las que
            participan en París. La primera de ellas en coronarse
            campeona es la tenista inglesa Charlotte Cooper.
            Son unos Juegos extraños por la diversidad de
            deportes y por su duracion de cinco meses (del 24
            de mayo al 28 de octubre), ya que formaban parte de la
            exposición Universal de la capital francesa.
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block imagenes w-5000" src="http://4.bp.blogspot.com/-nc4RKg8E81w/UoYjLGtbgbI/AAAAAAAAAAY/M_QRB6wZjXY/s1600/1594296.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block imagenes" src="http://upload.wikimedia.org/wikipedia/commons/2/2b/2010_Winter_Olympics_-_Curling_-_Women_-_GBR-SWE.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block imagenes" src="https://ep00.epimg.net/deportes/imagenes/2016/07/31/actualidad/1469983499_741047_1469986956_noticia_normal.jpg" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>


</div>

</template>
impo
<script lang="js">
import main from './navegacion'
export default {
    name: 'tokio',
    props: [],
    components:{
        menue
    },
    mounted() {
    },
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
    }
}
/* this.$routes.push 
Detalles 
*/
</script>

<style scoped>

.hero-image {
  
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://prod.media.larepublica.pe/720x405/larepublica/imagen/2018/02/10/noticia-juegos-olimpicos-de-invierno.png");
  width: 100%;
  height: 3rem;
  height: 50vh;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

</style>