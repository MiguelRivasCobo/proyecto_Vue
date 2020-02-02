<template lang="html">

 <div class="row">
             <div class="col-12 px-0">
                 <nav class="navbar navbar-expand-sm navbar-light bg-secondary ">
                    <img 
                    src="aros.svg" 
                    alt="triangle with all three sides equal"
                    height="47px"
                    width="60px" />
                     <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                         aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                     </button>
                     <div class="collapse navbar-collapse justify-content-center  " id="collapsibleNavId">
                         <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                             <li class="nav-item active">
                                 <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                             </li>
                             <li class="nav-item dropdown">
                                 <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Noticias</a>
                                 <div class="dropdown-menu" aria-labelledby="dropdownId">
                                     <a class="dropdown-item" href="#">Ultimas noticias</a>
                                 </div>
                             </li>
                             <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nosotros</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownId">
                                    <a class="dropdown-item" href="#">Quienes somos</a>
                                </div>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Recordatorio <span class="sr-only">(current)</span></a>
                            </li>
                         </ul>

                         <form class="form-inline my-2 my-lg-0">
                             
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Login</button>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Registro</button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                      <form>
                                        <div class="form-group">
                                          <label for="recipient-name" class="col-form-label">Recipient:</label>
                                          <input type="text" class="form-control" id="recipient-name">
                                        </div>
                                        <div class="form-group">
                                          <label for="message-text" class="col-form-label">Message:</label>
                                          <textarea class="form-control" id="message-text"></textarea>
                                        </div>
                                      </form>
                                    </div>
                                    <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                      <button type="button" class="btn btn-primary">Send message</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                         </form>
                     </div>
                 </nav>
             </div>
         </div>
</template>

<script lang="js">

  export default  {
    name: 'header',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .header {

  }
</style>
