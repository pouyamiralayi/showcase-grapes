const CodeMirror_config = {
    export: {
        readOnly: 1,
        theme: 'hopscotch',
        autoBeautify: true,
        lineWrapping: true,
        smartIndent: true,
        indentWithTabs: true,
    },
    import: {
        readOnly: 0,
        theme: 'hopscotch',
        autoBeautify: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineWrapping: true,
        styleActiveLine: true,
        smartIndent: true,
        indentWithTabs: true,
    }
};
window.editor = grapesjs.init({
    height: '100%',
    container: '#gjs',
    layerManager: {
        appendTo: '.layers-container2'
    },

    deviceManager: {
        devices: [{
            name: 'Desktop',
            width: '',
        }, {
            name: 'Tablet',
            width: "768px",
            widthMedia: "992px",
        }, {
            name: 'Mobile',
            width: '320px',
            widthMedia: '480px',
        }]
    },
    panels: {defaults: []},
    blockManager: {
        appendTo: '#blocks-mgr'
    },
    traitManager: {
        appendTo: '#styles-or-traits-mgr #traits-mgr'
    },
    styleManager: {
        appendTo: '#styles-or-traits-mgr #styles-mgr',
        sectors: [{
            name: 'General',
            open: false,
            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
        }, {
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding']
        }, {
            name: 'Typography',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow']
        }, {
            name: 'Decorations',
            open: false,
            buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
        }, {
            name: 'Extra',
            open: false,
            buildProps: ['opacity', 'transition', 'perspective', 'transform'],
            properties: [{
                type: 'slider',
                property: 'opacity',
                defaults: 1,
                step: 0.01,
                max: 1,
                min: 0,
            }]
        }],
    },

    showOffsets: true,
    fromElement: true,
    noticeOnUnload: false,
    storageManager: false,
    plugins: ['assembekov-grapes', 'grapesjs-plugin-export'],
    pluginsOpts: {
        'assembekov-grapes': { /* Test here your options  */}
    },
    canvas: {
        styles: [
            <!-- Font Awesome -->
            "https://use.fontawesome.com/releases/v5.11.2/css/all.css",
            <!-- Google Fonts Roboto -->
            "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
            <!-- Bootstrap core CSS -->
            "assets/vendor/mdb/css/bootstrap.min.css",
            <!-- Material Design Bootstrap -->
            "assets/vendor/mdb/css/mdb.min.css",
            <!-- Your custom styles (for MDB) -->
            "assets/vendor/mdb/css/style.css"
        ],
        scripts: [
            <!-- jQuery -->
            "assets/vendor/mdb/js/jquery.min.js",
            <!-- Bootstrap tooltips -->
            "assets/vendor/mdb/js/popper.min.js",
            <!-- Bootstrap core JavaScript -->
            "assets/vendor/mdb/js/bootstrap.min.js",
            <!-- MDB core JavaScript -->
            "assets/vendor/mdb/js/mdb.min.js",
            <!-- Your custom scripts (for MDB) -->
            "assets/vendor/mdb/js/script.js"
        ]
    }
});
const sidebar_forms = $('#sidebar-forms-designs')[0];
const sidebar_ecommerces = $('#sidebar-ecommerces-designs')[0];
const sidebar_timeline = $('#sidebar-timeline-designs')[0];
const sidebar_gallery = $('#sidebar-gallery-designs')[0];
const sidebar_video = $('#sidebar-video-designs')[0];
const sidebar_audio = $('#sidebar-audio-designs')[0];
const sidebar_accordion = $('#sidebar-accordion-designs')[0];
const sidebar_map = $('#sidebar-map-designs')[0];
const sidebar_pricing = $('#sidebar-pricing-designs')[0];
const sidebar_customers = $('#sidebar-customers-designs')[0];
const sidebar_content = $('#sidebar-content-designs')[0];
const sidebar_cover = $('#sidebar-cover-designs')[0];
const sidebar_footer = $('#sidebar-footer-designs')[0];
const sidebar_navbar = $('#sidebar-navbar-designs')[0];

window.selected_form_component = null;
window.selected_ecommerce_component = null;
window.selected_timeline_component = null;
window.selected_gallery_component = null;
window.selected_video_component = null;
window.selected_audio_component = null;
window.selected_accordion_component = null;
window.selected_map_component = null;
window.selected_pricing_component = null;
window.selected_customers_component = null;
window.selected_content_component = null;
window.selected_cover_component = null;
window.selected_footer_component = null;
window.selected_navbar_component = null;

window.form_designs_first_init = true;
window.ecommerce_designs_first_init = true;
window.timeline_designs_first_init = true;
window.gallery_designs_first_init = true;
window.video_designs_first_init = true;
window.audio_designs_first_init = true;
window.accordion_designs_first_init = true;
window.map_designs_first_init = true;
window.pricing_designs_first_init = true;
window.customers_designs_first_init = true;
window.content_designs_first_init = true;
window.cover_designs_first_init = true;
window.footer_designs_first_init = true;
window.navbar_designs_first_init = true;

const hideFormsDesigns = () => {
    window.selected_form_component = null;
    sidebar_forms.classList.remove('visible')
};

const initFormsDesigns = () => {
    if (!window.form_designs_first_init) {
        sidebar_forms.classList.add('visible');
        return
    }
    window.form_designs_first_init = false;
    $('#sidebar-forms-designs .app-content--sidebar__content').append(
        `
                <button id="1135301" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/forms/4.jpg" class="img-fluid" alt="" src="assets/mdb/img/blocks/forms/4.jpg">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-forms-designs .app-content--sidebar__content #1135301').click(function () {
        window.selected_form_component ? window.selected_form_component.components(`
                  <div class="container my-5 py-5 z-depth-1">
 
                     
                        <!--Section: Content-->
                        <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                    
                    
                          <!--Grid row-->
                          <div class="row d-flex justify-content-center">
                    
                            <!--Grid column-->
                            <div class="col-md-6">
                    
                              <!-- Default form subscription -->
                              <form class="text-center" action="#!">
                    
                                <p class="h4 mb-4">Subscribe</p>
                    
                                <p>Join our mailing list. We write rarely, but only the best content.</p>
                    
                                <p>
                                  <a href="" target="_blank">See the last newsletter</a>
                                </p>
                    
                                <!-- Name -->
                                <input type="text" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Name">
                    
                                <!-- Email -->
                                <input type="email" id="defaultSubscriptionFormEmail" class="form-control mb-4" placeholder="E-mail">
                    
                                <!-- Sign in button -->
                                <button class="btn btn-info btn-block" type="submit">Sign in</button>
                    
                    
                              </form>
                              <!-- Default form subscription -->
                    
                            </div>
                            <!--Grid column-->
                    
                          </div>
                          <!--Grid row-->
                    
                    
                        </section>
                        <!--Section: Content-->
                    
                    
                      </div>
            `) : null
    })
    $('#sidebar-forms-designs .app-content--sidebar__content').append(
        `
                <button  id="1135293" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/forms/3.jpg" class="img-fluid" alt="" src="assets/mdb/img/blocks/forms/3.jpg">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-forms-designs .app-content--sidebar__content #1135293').click(function () {
        window.selected_form_component ? window.selected_form_component.components(
            `
                  <div class="container my-5 py-5 z-depth-1">

 
                    <!--Section: Content-->
                    <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                
                
                      <!--Grid row-->
                      <div class="row d-flex justify-content-center">
                
                        <!--Grid column-->
                        <div class="col-md-6">
                
                          <!-- Default form register -->
                          <form class="text-center" action="#!">
                
                            <p class="h4 mb-4">Sign up</p>
                
                            <div class="form-row mb-4">
                              <div class="col">
                                <!-- First name -->
                                <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name">
                              </div>
                              <div class="col">
                                <!-- Last name -->
                                <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name">
                              </div>
                            </div>
                
                            <!-- E-mail -->
                            <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail">
                
                            <!-- Password -->
                            <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password"
                              aria-describedby="defaultRegisterFormPasswordHelpBlock">
                            <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                              At least 8 characters and 1 digit
                            </small>
                
                            <!-- Phone number -->
                            <input type="number" id="defaultRegisterPhonePassword" class="form-control" placeholder="Phone number"
                              aria-describedby="defaultRegisterFormPhoneHelpBlock">
                            <small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
                              Optional - for two step authentication
                            </small>
                
                            <!-- Newsletter -->
                            <div class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter">
                              <label class="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our
                                newsletter</label>
                            </div>
                
                            <!-- Sign up button -->
                            <button class="btn btn-info my-4 btn-block" type="submit">Sign in</button>
                
                            <!-- Social register -->
                            <p>or sign up with:</p>
                
                                <a href="#" class="mx-1" role="button"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="mx-1" role="button"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="mx-1" role="button"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#" class="mx-1" role="button"><i class="fab fa-github"></i></a>
                
                            <hr>
                
                            <!-- Terms of service -->
                            <p>By clicking
                              <em>Sign up</em> you agree to our
                              <a href="" target="_blank">terms of service</a>
                
                          </form>
                          <!-- Default form register -->
                
                        </div>
                        <!--Grid column-->
                
                      </div>
                      <!--Grid row-->
                
                
                    </section>
                    <!--Section: Content-->
                
                
                  </div>
                `
        ) : null
    })
    $('#sidebar-forms-designs .app-content--sidebar__content').append(
        `
                <button id="1135267" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/forms/2.jpg" class="img-fluid" alt="" src="assets/mdb/img/blocks/forms/2.jpg">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>   
            `
    )
    $('#sidebar-forms-designs .app-content--sidebar__content #1135267').click(function () {
        window.selected_form_component ? window.selected_form_component.components(`
                  <div class="container my-5 py-5 z-depth-1">
                    
                    
                        <!--Section: Content-->
                        <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                     
                    
                          <!--Grid row-->
                          <div class="row d-flex justify-content-center">
                    
                            <!--Grid column-->
                            <div class="col-md-6">
                    
                              <!-- Default form login -->
                              <form class="text-center" action="#!">
                    
                                <p class="h4 mb-4">Sign in</p>
                    
                                <!-- Email -->
                                <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail">
                     
                                <!-- Password -->
                                <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password">
                    
                                <div class="d-flex justify-content-around">
                                  <div>
                                    <!-- Remember me -->
                                    <div class="custom-control custom-checkbox">
                                      <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                                      <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                                    </div>
                                  </div>
                                  <div>
                                    <!-- Forgot password -->
                                    <a href="">Forgot password?</a>
                                  </div>
                                </div>
                    
                                <!-- Sign in button -->
                                <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>
                    
                                <!-- Register -->
                                <p>Not a member?
                                  <a href="">Register</a>
                                </p>
                    
                                <!-- Social login -->
                                <p>or sign in with:</p>
                    
                                    <a href="#" class="mx-1" role="button"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#" class="mx-1" role="button"><i class="fab fa-twitter"></i></a>
                                    <a href="#" class="mx-1" role="button"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="#" class="mx-1" role="button"><i class="fab fa-github"></i></a>
                    
                              </form>
                              <!-- Default form login -->
                    
                            </div>
                            <!--Grid column-->
                    
                          </div>
                          <!--Grid row-->
                    
                    
                        </section>
                        <!--Section: Content-->
                    
                    
                      </div>
            `) : null
    })

    $('#sidebar-forms-designs .app-content--sidebar__content').append(
        `
                <button id="1135239" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/forms/1.jpg" class="img-fluid" alt="" src="assets/mdb/img/blocks/forms/1.jpg">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-forms-designs .app-content--sidebar__content #1135239').click(function () {
        window.selected_form_component ? window.selected_form_component.components(`
                  <div class="container my-5 py-5 z-depth-1">
 
                    <!--Section: Content-->
                    <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                
                
                      <!--Grid row-->
                      <div class="row d-flex justify-content-center">
                
                        <!--Grid column-->
                        <div class="col-md-6 text-center">
                
                          <h4 class="font-weight-bold mb-4">Subscribe</h4>
                
                          <div class="input-group mb-4">
                            <input type="email" class="form-control" placeholder="Enter your email address" aria-label="Enter your email address"
                              aria-describedby="button-addon2">
                            <div class="input-group-append">
                              <button class="btn btn-md btn-outline-default m-0 px-3 py-2 z-depth-0 waves-effect" type="submit"
                                id="button-addon2">Submit</button>
                            </div>
                          </div>
                
                          <p class="font-weight-bold">Find us on <a href="#">Facebook</a> and <a href="#">Twitter</a></p>
                
                        </div>
                        <!--Grid column-->
                
                      </div>
                      <!--Grid row-->
                
                
                    </section>
                    <!--Section: Content-->
                
                
                  </div>
            `) : null
    })
    $('#sidebar-forms-designs .app-content--sidebar__content').append(
        `
                <button id="1335322" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/forms/5.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/forms/5.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-forms-designs .app-content--sidebar__content #1335322').click(function () {
        window.selected_form_component ? window.selected_form_component.components(`
                <div class="container my-5 px-0 z-depth-1">

                  <!--Section: Content-->
                  <section class="p-5 my-md-5 text-center" 
                    style="background-image: url(assets/mdb/img/Photos/Others/background.jpg); background-size: cover; background-position: center center;">
                
                    <form class="my-5 mx-md-5" action="">
                
                      <div class="row">
                        <div class="col-md-6 mx-auto">
                          <!-- Material form login -->
                          <div class="card">
                
                            <!--Card content-->
                            <div class="card-body">
                
                              <!-- Form -->
                              <form class="text-center" style="color: #757575;" action="#!">
                
                                <h3 class="font-weight-bold my-4 pb-2 text-center dark-grey-text">Log In</h3>
                
                                <!-- Name -->
                                <input type="email" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Email">
                
                                <!-- Email -->
                                <input type="password" id="defaultSubscriptionFormEmail" class="form-control" placeholder="Password">
                                <small id="passwordHelpBlock" class="form-text text-right blue-text">
                                  <a href="">Recover Password</a>
                                </small>
                
                                <div class="text-center">
                                  <button type="button" class="btn btn-outline-orange btn-rounded my-4 waves-effect">Warning</button>
                                </div>
                
                              </form>
                              <!-- Form -->
                
                            </div>
                
                          </div>
                          <!-- Material form login -->
                        </div>
                      </div>
                
                    </form>
                
                  </section>
                  <!--Section: Content-->
                
                
                </div>
                

            `) : null
    })
    $('#sidebar-forms-designs .app-content--sidebar__content').append(
        `
                <button id="1336908" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/forms/6.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/forms/6.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-forms-designs .app-content--sidebar__content #1336908').click(function () {
        window.selected_form_component ? window.selected_form_component.components(`
                <div class="container my-5 z-depth-1">

                  <!--Section: Content-->
                  <section class="dark-grey-text p-5">
                
                    <!-- Grid row -->
                    <div class="row">
                
                      <!-- Grid column -->
                      <div class="col-md-5 mb-4 mb-md-0">
                
                        <div class="view">
                          <img src="assets/mdb/img/illustrations/undraw_Group_chat_unwm.svg" class="img-fluid" alt="smaple image">
                        </div>
                
                      </div>
                      <!-- Grid column -->
                
                      <!-- Grid column -->
                      <div class="col-md-7 mb-lg-0 mb-4">
                
                        <!-- Form -->
                        <form class="" action="">
                
                          <!-- Section heading -->
                          <h3 class="font-weight-bold my-3">Subscribe</h3>
                          
                          <p class="text-muted mb-4 pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae, fuga similique quos aperiam tenetur quo ut rerum debitis.</p>
                 
                          <div class="input-group">
                            <input type="email" class="form-control" placeholder="Enter your email address" aria-label="Enter your email address"
                              aria-describedby="button-addon2">
                            <div class="input-group-append">
                              <button class="btn btn-md btn-primary rounded-right m-0 px-3 py-2 z-depth-0 waves-effect" type="submit" id="button-addon2">Button</button>
                            </div>
                          </div>
                          <small class="form-text black-text"><strong>* Leave your email addres to be notified first.</strong></small>
                          
                        </form>
                        <!-- Form -->
                
                      </div>
                      <!-- Grid column -->
                
                    </div>
                    <!-- Grid row -->
                    
                  </section>
                  <!--Section: Content-->
                
                
                </div>
            `) : null
    })
    $('#sidebar-forms-designs .app-content--sidebar__content').append(
        `
            <button id="1337730" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                <img data-src="assets/mdb/img/blocks/forms/7.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/forms/7.png">
                <a href="#">
                  <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                </a>
            </button>
            `
    )
    $('#sidebar-forms-designs .app-content--sidebar__content #1337730').click(function () {
        window.selected_form_component ? window.selected_form_component.components(`
                <div class="container my-5 z-depth-1">

                      <!--Section: Content-->
                      <section class="dark-grey-text text-center px-md-5 py-5">
                    
                        <!-- Grid row -->
                        <div class="row">
                    
                          <!-- Grid column -->
                          <div class="col-lg-6 col-md-8 mx-auto">
                    
                            <!-- Form -->
                            <form class="" action="">
                    
                              <!-- Section heading -->
                              <h3 class="font-weight-bold mb-4">Company Name</h3>
                              
                              <p class="text-muted mb-4 pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit, vitae fuga similique quos aperiam tenetur quo rerum debitis quibusdam.</p>
                     
                              <div class="input-group mb-4 pb-3">
                                <input type="email" class="form-control" placeholder="Enter your email address" aria-label="Enter your email address"
                                  aria-describedby="button-addon2">
                                <div class="input-group-append">
                                  <button class="btn btn-md btn-info rounded-right m-0 px-3 py-2 z-depth-0 waves-effect" type="submit" id="button-addon2">Submit</button>
                                </div>
                              </div>
                              
                              <ul class="list-unstyled d-flex justify-content-center mb-0 text-info">
                                <li>
                                  <a class="mx-3" role="button"><i class="fab fa-lg fa-facebook-f"></i></a>
                                </li>
                                <li>
                                  <a class="mx-3" role="button"><i class="fab fa-lg fa-twitter"></i></a>
                                </li>
                                <li>
                                  <a class="mx-3" role="button"><i class="fab fa-lg fa-instagram"></i></a>
                                </li>
                                <li>
                                  <a class="mx-3" role="button"><i class="fab fa-lg fa-linkedin-in"></i></a>
                                </li>
                                <li>
                                  <a class="mx-3" role="button"><i class="fab fa-lg fa-pinterest"></i></a>
                                </li>
                              </ul>
                              
                            </form>
                            <!-- Form -->
                    
                          </div>
                          <!-- Grid column -->
                    
                        </div>
                        <!-- Grid row -->
                        
                      </section>
                      <!--Section: Content-->
                    
                    
                    </div>
            `) : null
    })
    $('#sidebar-forms-designs .app-content--sidebar__content').append(
        `
                    <button id="1401205" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                        <img data-src="assets/mdb/img/blocks/signup/1.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/signup/1.png">
                        <a href="#">
                          <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                        </a>
                    </button>
            `
    )
    $('#sidebar-forms-designs .app-content--sidebar__content #1401205').click(function () {
        window.selected_form_component ? window.selected_form_component.components(`
                <!-- Main navigation -->
                    <div class="container-fluid mt-3 mb-5">
                      
                      <!-- Full Page Intro -->
                      <section style="background-image: url('assets/mdb/img/Photos/Others/images/90.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
                        <!-- Mask & flexbox options-->
                        <div class="mask d-flex justify-content-center align-items-center">
                          <!-- Content -->
                          <div class="container py-5 my-5">
                            
                            <h3 class="font-weight-bold text-center white-text pb-2">Get Started Free</h3>
                            <p class="lead text-center white-text pt-2 mb-5">Start to explore our product absolutely free.</p>
                            
                            <!--Grid row-->
                            <div class="row d-flex align-items-center justify-content-center">
                              <!--Grid column-->
                              <div class="col-md-6 col-xl-5">
                                <!--Form-->
                                <div class="card">
                                  <div class="card-body z-depth-2 px-4">
                                    <div class="md-form mt-3">
                                      <i class="fa fa-user prefix grey-text"></i>
                                      <input type="text" id="form3" class="form-control">
                                      <label for="form3">Your name</label>
                                    </div>
                                    <div class="md-form">
                                      <i class="fa fa-envelope prefix grey-text"></i>
                                      <input type="text" id="form2" class="form-control">
                                      <label for="form2">Your email</label>
                                    </div>
                                    <div class="md-form">
                                      <i class="fas fa-key prefix grey-text"></i>
                                      <input type="text" id="form4" class="form-control">
                                      <label for="form4">Your password</label>
                                    </div>
                                    <div class="text-center my-3">
                                      <button class="btn btn-indigo btn-block">Send</button>
                                    </div>
                                  </div>
                                </div>
                                <!--/.Form-->
                              </div>
                              <!--Grid column-->
                            </div>
                            <!--Grid row-->
                          </div>
                          <!-- Content -->
                        </div>
                        <!-- Mask & flexbox options-->
                      </section>
                      <!-- Full Page Intro -->
                      
                    </div>
                    <!-- Main navigation -->
            `) : null
    })
    $('#sidebar-forms-designs .app-content--sidebar__content').append(
        `
                <button id="1401468" type="button" class="btn btn-primary overlay z-depth-1 mb-4">                  
                    <img data-src="assets/mdb/img/blocks/signup/2.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/signup/2.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </div>
            `
    )
    $('#sidebar-forms-designs .app-content--sidebar__content #1401468').click(function () {
        window.selected_form_component ? window.selected_form_component.components(`
                <div class="container my-5">

                  <!-- Section -->
                  <section>
                
                    <h6 class="font-weight-bold text-center grey-text text-uppercase small mb-4">meet MDB</h6>
                    <h3 class="font-weight-normal text-center dark-grey-text pb-2 display-4"><strong>30 Days Free Trial</strong></h3>
                    <hr class="w-header my-4">
                    <p class="lead text-center text-muted pt-2 mb-5">We waited until we could do it right. Then we did! Instead of creating a carbon copy.</p>
                    <!--First row-->
                    <div class="row d-flex justify-content-center">
                
                      <!--First column-->
                      <div class="col-6">
                
                        <!-- Material outline input -->
                        <div class="md-form md-outline form-lg">
                          <input type="text" id="form1" class="form-control form-control-lg">
                          <label for="form1">Name</label>
                        </div>
                        
                        <!-- Material outline input -->
                        <div class="md-form md-outline form-lg">
                          <input type="text" id="form2" class="form-control form-control-lg">
                          <label for="form2">Email</label>
                        </div>
                        
                        <!-- Material outline input -->
                        <div class="md-form md-outline form-lg">
                          <input type="text" id="form3" class="form-control form-control-lg">
                          <label for="form3">Password</label>
                        </div>
                        
                        <button class="btn btn-block btn-primary btn-lg">Sign up</button>
                
                      </div>
                      <!--First column-->
                
                    </div>
                    <!--First row-->
                
                  </section>
                  <!-- Section -->
                
                </div>
            `) : null
    })
    $('#sidebar-forms-designs .app-content--sidebar__content').append(
        `
                <button id="1401499" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/signup/3.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/signup/3.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-forms-designs .app-content--sidebar__content #1401499').click(function () {
        window.selected_form_component ? window.selected_form_component.components(`
                <div class="container z-depth-1 my-5 p-5">

                  <!-- Section -->
                  <section>
                
                    <h3 class="font-weight-normal text-center dark-grey-text my-4 pb-2">Start Using MDBootstrap Now!</h3>
                    
                    <!--First row-->
                    <div class="row d-flex justify-content-center">
                
                      <div class="col-md-6 col-lg-3 mb-4">
                
                        <!-- Material outline input -->
                        <div class="md-form md-outline form-lg">
                          <input type="text" id="form1" class="form-control form-control-lg">
                          <label for="form1">Name</label>
                        </div>
                        
                      </div>
                      
                      <div class="col-md-6 col-lg-3 mb-4">
                        
                        <!-- Material outline input -->
                        <div class="md-form md-outline form-lg">
                          <input type="text" id="form2" class="form-control form-control-lg">
                          <label for="form2">Email</label>
                        </div>
                        
                      </div>
                      
                      <div class="col-md-6 col-lg-3 mb-4">
                        
                        <!-- Material outline input -->
                        <div class="md-form md-outline form-lg">
                          <input type="text" id="form3" class="form-control form-control-lg">
                          <label for="form3">Password</label>
                        </div>
                        
                      </div>
                      
                      <div class="col-md-6 col-lg-3 mb-4">
                        
                        <button class="btn btn-block btn-primary my-4">Sign up</button>
                        
                      </div>
                
                    </div>
                    <!--First row-->
                
                  </section>
                  <!-- Section -->
                
                </div>
            `) : null
    })
    sidebar_forms.classList.add('visible');
}

const hideEcommercesDesigns = () => {
    window.selected_form_component = null;
    sidebar_ecommerces.classList.remove('visible')
};

const initEcommercesDesigns = () => {
    if (!window.ecommerce_designs_first_init) {
        sidebar_ecommerces.classList.add('visible');
        return
    }
    window.ecommerce_designs_first_init = false;
    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/9.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/ecommerce/9.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    );
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1349715').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(
            `
                <div class="container my-5 py-5 z-depth-1">
                
                
                  <!--Section: Content-->
                  <section class="text-center">
                
                    <!-- Section heading -->
<!--                    <h3 class="font-weight-bold mb-5">Product Details</h3>-->
                
                    <div class="row">
                
                      <div class="col-lg-6">
                
                        <!--Carousel Wrapper-->
                        <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
                
                          <!--Slides-->
                          <div class="carousel-inner text-center text-md-left" role="listbox">
                            <div class="carousel-item active">
                              <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/17.jpg"
                                alt="First slide" class="img-fluid">
                            </div>
                            <div class="carousel-item">
                              <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/18.jpg"
                                alt="Second slide" class="img-fluid">
                            </div>
                            <div class="carousel-item">
                              <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/19.jpg"
                                alt="Third slide" class="img-fluid">
                            </div>
                          </div>
                          <!--/.Slides-->
                
                          <!--Thumbnails-->
                          <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                          </a>
                          <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                          </a>
                          <!--/.Thumbnails-->
                
                        </div>
                        <!--/.Carousel Wrapper-->
                
                      </div>
                
                      <div class="col-lg-5 text-left ">
                
                        <h2 class="h2-responsive text-left text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-0">
                          <strong>Sony headphones</strong>
                        </h2>
                        <span class="badge badge-danger product mb-4 ml-xl-0 ml-0">bestseller</span>
                        <h3 class="h3-responsive text-left text-md-left mb-5 ml-xl-0 ml-0">
                          <span class="red-text font-weight-bold">
                            <strong>$49</strong>
                          </span>
                          <span class="grey-text">
                            <small>
                              <s>$89</s>
                            </small>
                          </span>
                        </h3>
                
                        <!--Accordion wrapper-->
                        <div class="accordion md-accordion ml-0 ml-md-4" id="accordionEx" role="tablist" aria-multiselectable="true">
                
                          <!-- Accordion card -->
                          <div class="card">
                
                            <!-- Card header -->
                            <div class="card-header" role="tab" id="headingOne1">
                              <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                aria-controls="collapseOne1">
                                <h5 class="mb-0">
                                  Description
                                  <i class="fas fa-angle-down rotate-icon"></i>
                                </h5>
                              </a>
                            </div>
                
                            <!-- Card body -->
                            <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                              data-parent="#accordionEx">
                              <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                moon
                                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                              </div>
                            </div>
                          </div>
                          <!-- Accordion card -->
                
                          <!-- Accordion card -->
                          <div class="card">
                
                            <!-- Card header -->
                            <div class="card-header" role="tab" id="headingTwo2">
                              <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                                aria-expanded="false" aria-controls="collapseTwo2">
                                <h5 class="mb-0">
                                  Details
                                  <i class="fas fa-angle-down rotate-icon"></i>
                                </h5>
                              </a>
                            </div>
                
                            <!-- Card body -->
                            <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                              data-parent="#accordionEx">
                              <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                moon
                                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                              </div>
                            </div>
                          </div>
                          <!-- Accordion card -->
                
                          <!-- Accordion card -->
                          <div class="card">
                
                            <!-- Card header -->
                            <div class="card-header" role="tab" id="headingThree3">
                              <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                                aria-expanded="false" aria-controls="collapseThree3">
                                <h5 class="mb-0">
                                  Shipping
                                  <i class="fas fa-angle-down rotate-icon"></i>
                                </h5>
                              </a>
                            </div>
                
                            <!-- Card body -->
                            <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
                              data-parent="#accordionEx">
                              <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                moon
                                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                              </div>
                            </div>
                          </div>
                          <!-- Accordion card -->
                
                        </div>
                        <!--/.Accordion wrapper-->
                
                        <!-- Add to Cart -->
                        <section class="color">
                          <div class="mt-5">
                            <p class="grey-text">Choose your color</p>
                            <div class="row text-left text-md-center pl-5 pl-md-0">
                            
                              <div class="col-md-4 col-12">
                                <!--Radio group-->
                                <div class="form-group">
                                  <input class="form-check-input" name="group100" type="radio" id="radio100" checked="checked">
                                  <label for="radio100" class="form-check-label dark-grey-text">Blue</label>
                                </div>
                              </div>
                              <div class="col-md-4">
                                <!--Radio group-->
                                <div class="form-group">
                                  <input class="form-check-input" name="group100" type="radio" id="radio101">
                                  <label for="radio101" class="form-check-label dark-grey-text">Orange</label>
                                </div>
                              </div>
                              <div class="col-md-4">
                                <!--Radio group-->
                                <div class="form-group">
                                  <input class="form-check-input" name="group100" type="radio" id="radio102">
                                  <label for="radio102" class="form-check-label dark-grey-text">Red</label>
                                </div>
                              </div>
                            </div>
                
                            <div class="row mt-3">
                              <div class="col-md-12 text-center text-md-left text-md-right">
                                <a class="btn btn-primary btn-rounded" style="border-radius: 25px">
                                  <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </section>
                        <!-- /.Add to Cart -->
                
                      </div>
                
                    </div>
                
                  </section>
                  <!--Section: Content-->
                
                </div>
            `) : null
        if (window.selected_ecommerce_component) {
            window.selected_ecommerce_component.set('script', function () {
                $('.carousel').carousel({
                    interval: 2000
                })
            });
            window.selected_ecommerce_component.view.updateScript()
        }
    })

    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button  id="1305666" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/1.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/ecommerce/1.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    );
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1305666').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(
            `
                <div class="container my-5">

                      <!--Section: Content-->
                      <section class="dark-grey-text text-center">
                        
                        <!-- Section heading -->
                        <h3 class="font-weight-bold mb-4 pb-2">Our bestsellers</h3>
                        <!-- Section description -->
                        <p class="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit fugit, error amet numquam iure provident voluptate esse quasi nostrum quisquam eum porro a pariatur veniam.</p>
                    
                      \t<!-- Grid row -->
                        <div class="row">
                    
                          <!-- Grid column -->
                          <div class="col-lg-3 col-md-6 mb-4">
                            <!-- Card -->
                            <div class="card card-cascade narrower card-ecommerce">
                              <!-- Card image -->
                              <div class="view view-cascade overlay">
                                <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Vertical/1.jpg" class="card-img-top"
                                  alt="sample photo">
                                <a>
<!--                                  <div class="mask rgba-white-slight"></div>-->
                                </a>
                              </div>
                              <!-- Card image -->
                              <!-- Card content -->
                              <div class="card-body card-body-cascade text-center pb-3">
                                <!-- Title -->
                                <h5 class="card-title mb-1">
                                  <strong>
                                    <a href="">Denim trousers</a>
                                  </strong>
                                </h5>
                                <!--Rating-->
                                  <div class="amber-text fa-sm my-2 pb-0">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                  </div>
<!--                                <ul class="rating mb-1 pb-2">-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star fa-xs"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star fa-xs"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star fa-xs"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star fa-xs"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="far fa-star fa-xs"></i>-->
<!--                                  </li>-->
<!--                                </ul>-->
                                <!-- Description -->
                                <p class="card-text mt-1">Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                                </p>
                                <!-- Card footer -->
                                <hr/>
                                <div class="px-1 d-flex justify-content-between align-items-center" >
                                  <span class="font-weight-bold">
                                    <strong>49$</strong>
                                  </span>
                                  <span class="">
                                    <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                      <i class="fas fa-shopping-cart grey-text ml-3"></i>
                                    </a>
                                    <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                      <i class="fas fa-heart grey-text ml-3"></i>
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <!-- Card content -->
                            </div>
                            <!-- Card -->
                          </div>
                          <!-- Grid column -->
                    
                          <!-- Grid column -->
                          <div class="col-lg-3 col-md-6 mb-4">
                            <!-- Card -->
                            <div class="card card-cascade narrower card-ecommerce">
                              <!-- Card image -->
                              <div class="view view-cascade overlay">
                                <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Vertical/2.jpg" class="card-img-top"
                                  alt="sample photo">
                                <a>
<!--                                  <div class="mask rgba-white-slight"></div>-->
                                </a>
                              </div>
                              <!-- Card image -->
                              <!-- Card content -->
                              <div class="card-body card-body-cascade text-center pb-3">
                                <!-- Title -->
                                <h5 class="card-title mb-1">
                                  <strong>
                                    <a href="">High heels</a>
                                  </strong>
                                </h5>
                                <!--Rating-->
                                 <div class="amber-text fa-sm my-2 pb-0">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                  </div>
                                <!-- Description -->
                                <p class="card-text mt-1 mt-1">Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                                </p>
                                <!-- Card footer -->
                                <hr/>
                                <div class="px-1 d-flex justify-content-between align-items-center" >
                                  <span class="">
                                    <strong>89$</strong>
                                  </span>
                                  <span class="">
                                    <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                      <i class="fas fa-shopping-cart grey-text ml-3"></i>
                                    </a>
                                    <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                      <i class="fas fa-heart grey-text ml-3"></i>
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <!-- Card content -->
                            </div>
                            <!-- Card -->
                          </div>
                          <!-- Grid column -->
                    
                          <!-- Grid column -->
                          <div class="col-lg-3 col-md-6 mb-4">
                            <!-- Card -->
                            <div class="card card-cascade narrower card-ecommerce">
                              <!-- Card image -->
                              <div class="view view-cascade overlay">
                                <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Vertical/4.jpg" class="card-img-top"
                                  alt="sample photo">
                                <a>
<!--                                  <div class="mask rgba-white-slight"></div>-->
                                </a>
                              </div>
                              <!-- Card image -->
                              <!-- Card content -->
                              <div class="card-body card-body-cascade text-center pb-3">
                                <!-- Title -->
                                <h5 class="card-title mb-1">
                                  <strong>
                                    <a href="">Brown coat</a>
                                  </strong>
                                </h5>
                                <!--Rating-->
                                 <div class="amber-text fa-sm my-2 pb-0">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                  </div>
<!--                                <ul class="rating mb-1 pb-2">-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star fa-xs"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star fa-xs"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star fa-xs"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star fa-xs"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star-half-alt fa-xs"></i>-->
<!--                                  </li>-->
<!--                                </ul>-->
                                <!-- Description -->
                                <p class="card-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                                </p>
                                <hr/>
                                <!-- Card footer -->
                                <div class="px-1 d-flex justify-content-between align-items-center" >
                                  <span class="">
                                    <strong>59$</strong>
                                  </span>
                                  <span class="">
                                    <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                      <i class="fas fa-shopping-cart grey-text ml-3"></i>
                                    </a>
                                    <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                      <i class="fas fa-heart grey-text ml-3"></i>
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <!-- Card content -->
                            </div>
                            <!-- Card -->
                          </div>
                          <!-- Grid column -->
                    
                          <!-- Grid column -->
                          <div class="col-lg-3 col-md-6 mb-4">
                            <!-- Card -->
                            <div class="card card-cascade narrower card-ecommerce">
                              <!-- Card image -->
                              <div class="view view-cascade overlay">
                                <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Vertical/3.jpg" class="card-img-top"
                                  alt="sample photo">
                                <a>
<!--                                  <div class="mask rgba-white-slight"></div>-->
                                </a>
                              </div>
                              <!-- Card image -->
                              <!-- Card content -->
                              <div class="card-body card-body-cascade text-center pb-3">
                                <!-- Title -->
                                <h5 class="card-title mb-1">
                                  <strong>
                                    <a href="">Shirt</a>
                                  </strong>
                                </h5>
                                <!--Rating-->
                                 <div class="amber-text fa-sm my-2 pb-0">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                  </div>
<!--                                <ul class="rating mb-1 pb-2">-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star fa-xs"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star fa-xs"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star fa-xs"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star fa-xs"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="far fa-star fa-xs"></i>-->
<!--                                  </li>-->
<!--                                </ul>-->
                                <!-- Description -->
                                <p class="card-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                                </p>
                                <!-- Card footer -->
                                <hr/>
                                <div class="px-1 d-flex justify-content-between align-items-center" >
                                  <span class="">
                                    <strong>119$</strong>
                                  </span>
                                  <span class="">
                                    <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                      <i class="fas fa-shopping-cart grey-text ml-3"></i>
                                    </a>
                                    <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                      <i class="fas fa-heart grey-text ml-3"></i>
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <!-- Card content -->
                            </div>
                            <!-- Card -->
                          </div>
                          <!-- Grid column -->
                    
                        </div>
                        <!-- Grid row -->
                    
                      </section>
                      <!--Section: Content-->
                    
                    
                    </div>
            `
        ) : null
    })

    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1307089" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/7.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/ecommerce/7.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>   
            `
    );
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1307089').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                <div class="container my-5 py-3 z-depth-1 rounded">

                  <!--Section: Content-->
                  <section class="dark-grey-text">
                
                    <!-- Shopping Cart table -->
                    <div class="table-responsive">
                
                      <table class="table product-table mb-0">
                
                        <!-- Table head -->
                        <thead class="mdb-color lighten-5">
                          <tr>
                            <th></th>
                            <th class="font-weight-bold">
                              <strong>Product</strong>
                            </th>
                            <th class="font-weight-bold">
                              <strong>Color</strong>
                            </th>
                            <th></th>
                            <th class="font-weight-bold">
                              <strong>Price</strong>
                            </th>
                            <th class="font-weight-bold text-center">
                              <strong>QTY</strong>
                            </th>
                            <th class="font-weight-bold">
                              <strong>Amount</strong>
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <!-- /.Table head -->
                
                        <!-- Table body -->
                        <tbody>
                
                          <!-- First row -->
                          <tr>
                            <th scope="row">
                              <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/13.jpg" alt="" class="img-fluid z-depth-0">
                            </th>
                            <td class="align-middle">
                              <h5 class="mt-3">
                                <strong>iPhone</strong>
                              </h5>
                              <p class="text-muted">Apple</p>
                            </td>
                            <td class="align-middle">White</td>
                            <td></td>
                            <td class="align-middle">$800</td>
                            <td class="align-middle">
                              <input type="number" value="2" aria-label="Search" class="form-control" style="width: 100px">
                            </td>
                            <td class="font-weight-bold align-middle">
                              <strong>$800</strong>
                            </td>
                            <td class="align-middle">
                            <button type="button" class="btn btn-sm btn-primary px-0" style="width: 40px; text-align: center" data-toggle="tooltip" data-placement="top"
                                title="Remove item">X
                              </button>
                            </td>
                          </tr>
                          <!-- /.First row -->
                
                          <!-- Second row -->
                          <tr>
                            <th scope="row">
                              <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/6.jpg" alt="" class="img-fluid z-depth-0">
                            </th>
                            <td class="align-middle">
                              <h5 class="mt-3">
                                <strong>Headphones</strong>
                              </h5>
                              <p class="text-muted">Sony</p>
                            </td>
                            <td  class="align-middle">Red</td>
                            <td></td>
                            <td  class="align-middle">$200</td>
                            <td  class="align-middle">
                              <input type="number" value="2" aria-label="Search" class="form-control" style="width: 100px">
                            </td>
                            <td class="font-weight-bold align-middle">
                              <strong>$600</strong>
                            </td>
                            <td  class="align-middle">
                            <button type="button" class="btn btn-sm btn-primary px-0" style="width: 40px; text-align: center" data-toggle="tooltip" data-placement="top"
                                title="Remove item">X
                              </button>
<!--                              <button type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"-->
<!--                                title="Remove item">X-->
<!--                              </button>-->
                            </td>
                          </tr>
                          <!-- /.Second row -->
                
                          <!-- Third row -->
                          <tr>
                            <th scope="row">
                              <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/1.jpg" alt="" class="img-fluid z-depth-0">
                            </th>
                            <td class="align-middle">
                              <h5 class="mt-3">
                                <strong>iPad Pro</strong>
                              </h5>
                              <p class="text-muted">Apple</p>
                            </td>
                            <td  class="align-middle">Gold</td>
                            <td></td>
                            <td  class="align-middle">$600</td>
                            <td class="align-middle">
                              <input type="number" value="2" aria-label="Search" class="form-control" style="width: 100px">
                            </td>
                            <td class="font-weight-bold align-middle">
                              <strong>$1200</strong>
                            </td>
                            <td  class="align-middle">
                              <button type="button" class="btn btn-sm btn-primary px-0" style="width: 40px; text-align: center" data-toggle="tooltip" data-placement="top"
                                title="Remove item">X
                              </button>
                            </td>
                          </tr>
                          <!-- /.Third row -->
                
                          <!-- Fourth row -->
                          <tr>
                            <td colspan="3"></td>
                            <td class=" align-middle">
                              <h4 class="mt-2">
                                <strong>Total</strong>
                              </h4>
                            </td>
                            <td class="text-right align-middle">
                              <h4 class="mt-2">
                                <strong>$2600</strong>
                              </h4>
                            </td>
                            <td colspan="3" class="text-right align-middle">
                              <button type="button" style="border-radius: 25px" class="btn btn-primary btn-rounded">Complete purchase
                                <i class="fas fa-angle-right right"></i>
                              </button>
                            </td>
                          </tr>
                          <!-- Fourth row -->
                
                        </tbody>
                        <!-- /.Table body -->
                
                      </table>
                
                    </div>
                    <!-- /.Shopping Cart table -->
                
                  </section>
                  <!--Section: Content-->
                
                
                </div>
            `) : null
    })

    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1307077" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/4.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/ecommerce/4.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1307077').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                    <div class="container mt-5">
                            
                            <style>
                                .stripe {
                                    background:rgba(255, 255, 255, 0.7);
                                    padding:1.2rem 1.2rem ;
                                    position:absolute; 
                                    bottom:3rem;
                                    letter-spacing: .25rem;
                                    width: 100%;
                                    text-align: center;
                                    font-weight: 400;
                                    font-size:1rem;
                                    box-sizing: border-box;
                                    height: 4rem;
                                }
                                .stripe.dark{
                                        background: rgba(0, 0, 0, 0.7);
                                        color:rgba(255, 255, 255, 0.7);
                                }
                            </style>
                        
                          <!--Section: Content-->
                          <section class="dark-grey-text text-center">
                            
                            <!-- Section heading -->
                            <h3 class="font-weight-bold mb-4 pb-2">Our bestsellers</h3>
                            <!-- Section description -->
                            <p class="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit fugit, error amet numquam iure provident voluptate esse quasi nostrum quisquam eum porro a pariatur veniam.</p>
                        
                          \t<!-- Grid row -->
                            <div class="row">
                        
                              <!-- Grid column -->
                              <div class="col-lg-3 col-md-6 mb-4">
                                <!-- Collection card -->
                                <div class="card collection-card z-depth-1-half">
                                  <!-- Card image -->
                                  <div class="view zoom">
                                    <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Vertical/5.jpg" class="img-fluid"
                                      alt="">
                                    <div class="stripe dark">
                                      <a>
                                        <p>Trousers
                                          <i class="fas fa-angle-right"></i>
                                        </p>
                                      </a>
                                    </div>
                                  </div>
                                  <!-- Card image -->
                                </div>
                                <!-- Collection card -->
                              </div>
                              <!-- Grid column -->
                        
                              <!-- Grid column -->
                              <div class="col-lg-3 col-md-6 mb-4">
                                <!-- Collection card -->
                                <div class="card collection-card z-depth-1-half">
                                  <!-- Card image -->
                                  <div class="view zoom">
                                    <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Vertical/8.jpg" class="img-fluid"
                                      alt="">
                                    <div class="stripe light">
                                      <a>
                                        <p>Sweatshirt
                                          <i class="fas fa-angle-right"></i>
                                        </p>
                                      </a>
                                    </div>
                                  </div>
                                  <!-- Card image -->
                                </div>
                                <!-- Collection card -->
                              </div>
                              <!-- Grid column -->
                        
                              <!-- Grid column -->
                              <div class="col-lg-3 col-md-6 mb-4">
                                <!-- Collection card -->
                                <div class="card collection-card z-depth-1-half">
                                  <!-- Card image -->
                                  <div class="view zoom">
                                    <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Vertical/9.jpg" class="img-fluid"
                                      alt="">
                                    <div class="stripe dark">
                                      <a>
                                        <p>Black hat
                                          <i class="fas fa-angle-right"></i>
                                        </p>
                                      </a>
                                    </div>
                                  </div>
                                  <!-- Card image -->
                                </div>
                                <!-- Collection card -->
                              </div>
                              <!-- Grid column -->
                        
                              <!-- Fourth column -->
                              <div class="col-lg-3 col-md-6 mb-4">
                                <!-- Collection card -->
                                <div class="card collection-card z-depth-1-half">
                                  <!-- Card image -->
                                  <div class="view zoom">
                                    <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Vertical/7.jpg" class="img-fluid"
                                      alt="">
                                    <div class="stripe light">
                                      <a>
                                        <p>Sweatshirt
                                          <i class="fas fa-angle-right"></i>
                                        </p>
                                      </a>
                                    </div>
                                  </div>
                                  <!-- Card image -->
                                </div>
                                <!-- Collection card -->
                              </div>
                              <!-- Fourth column -->
                        
                            </div>
                            <!-- Grid row -->
                        
                          </section>
                          <!--Section: Content-->
                        
                        
                        </div>
            `) : null
    })

    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1307084" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/5.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/ecommerce/5.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1307084').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                <div class="container mt-5">


                      <!--Section: Content-->
                      <section class="dark-grey-text text-center">
                        
                        <!-- Section heading -->
                        <h3 class="font-weight-bold mb-4 pb-2">Our bestsellers</h3>
                        <!-- Section description -->
                        <p class="grey-text w-responsive mx-auto mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit fugit, error amet numquam iure provident voluptate esse quasi nostrum quisquam eum porro a pariatur veniam.</p>
                    
                      <!-- Carousel Wrapper -->
                        <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
                          <!-- Controls -->
                            <ul class="pagination pagination-circle pg-blue mb-5 mt-0 d-flex justify-content-center">
                                  <li class="page-item active mx-1">
                                    <a style="width:40px; height:40px;" class="page-link waves-effect waves-effect text-white d-flex align-items-center justify-content-center" href="#multi-item-example" data-slide="prev">
                                        <i class="fas fa-chevron-left"></i>
                                    </a>
                                  </li>
                                   <li class="page-item active mx-1">
                                    <a style="width:40px; height:40px;" class="page-link waves-effect waves-effect text-white d-flex align-items-center justify-content-center" href="#multi-item-example" data-slide="next">
                                        <i class="fas fa-chevron-right"></i>                                    
                                    </a>
                                  </li>
                              </ul>
<!--                          <div class="controls-top mb-2">-->
<!--                            <a class="btn btn-floating primary-color waves-effect waves-light text-white" href="#multi-item-example" data-slide="prev">-->
<!--                              <i class="fas fa-chevron-left"></i>-->
<!--                            </a>-->
<!--                            <a class="btn btn-floating primary-color waves-effect waves-light text-white" href="#multi-item-example" data-slide="next">-->
<!--                              <i class="fas fa-chevron-right"></i>-->
<!--                            </a>-->
<!--                          </div>-->
                          <!-- Controls -->
                          <!-- Indicators -->
                          <ol class="carousel-indicators mb-n5 mt-n5">
                            <li style="width: 20px; height:20px;" class="primary-color active" data-target="#multi-item-example" data-slide-to="0"></li>
                            <li style="width: 20px; height:20px;" class="primary-color" data-target="#multi-item-example" data-slide-to="1"></li>
                            <li style="width: 20px; height:20px;" class="primary-color" data-target="#multi-item-example" data-slide-to="2"></li>
                          </ol>
                          <!-- Indicators -->
                          <!-- Slides -->
                          <div class="carousel-inner mb-4" role="listbox">
                            <!-- First slide -->
                            <div class="carousel-item active">
                                <div class="row">
                                  <div class="col-12 col-md-4 mb-2">
                                    <!-- Card -->
                                    <div class="card card-cascade narrower card-ecommerce">
                                      <!-- Card image -->
                                      <div class="view view-cascade overlay">
                                        <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg" class="card-img-top"
                                          alt="sample photo">
                                        <a>
<!--                                          <div class="mask rgba-white-slight"></div>-->
                                        </a>
                                      </div>
                                      <!-- Card image -->
                                      <!-- Card content -->
                                      <div class="card-body card-body-cascade text-center">
                                        <!-- Category & Title -->
                                        <a href="" class="text-muted">
                                          <h5>Shoes</h5>
                                        </a>
                                        <h4 class="card-title my-4">
                                          <strong>
                                            <a href="">Leather boots</a>
                                          </strong>
                                        </h4>
                                        <!-- Description -->
                                        <p class="card-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                          consectetur, adipisci.
                                        </p>
                                        <!-- Card footer -->
                                    <hr/>
                                <div class="px-1 d-flex justify-content-between align-items-center" >
                                          <span class="">69$</span>
                                          <span class="">
                                            <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Quick Look">
                                              <i class="fas fa-eye ml-3"></i>
                                            </a>
                                            <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist">
                                              <i class="fas fa-heart ml-3"></i>
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                      <!-- Card content -->
                                    </div>
                                    <!-- Card -->
                                  </div>
                                  <div class="col-12 col-md-4 mb-2 clearfix d-none d-md-block">
                                    <!-- Card -->
                                    <div class="card card-cascade narrower card-ecommerce">
                                      <!-- Card image -->
                                      <div class="view view-cascade overlay">
                                        <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg" class="card-img-top"
                                          alt="sample photo">
                                        <a>
<!--                                          <div class="mask rgba-white-slight"></div>-->
                                        </a>
                                      </div>
                                      <!-- Card image -->
                                      <!-- Card content -->
                                      <div class="card-body card-body-cascade text-center">
                                        <!-- Category & Title -->
                                        <a href="" class="text-muted">
                                          <h5>Jeans</h5>
                                        </a>
                                        <h4 class="card-title my-4">
                                          <strong>
                                            <a href="">Slim jeans</a>
                                          </strong>
                                        </h4>
                                        <!-- Description -->
                                        <p class="card-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                          consectetur, adipisci.
                                        </p>
                                        <!-- Card footer -->
                                    <hr/>
                                <div class="px-1 d-flex justify-content-between align-items-center" >
                                          <span class="">99$</span>
                                          <span class="">
                                            <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Quick Look">
                                              <i class="fas fa-eye ml-3"></i>
                                            </a>
                                            <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist">
                                              <i class="fas fa-heart ml-3"></i>
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                      <!-- Card content -->
                                    </div>
                                    <!-- Card -->
                                  </div>
                                  <div class="col-12 col-md-4 mb-2 clearfix d-none d-md-block">
                                <!-- Card -->
                                <div class="card card-cascade narrower card-ecommerce">
                                  <!-- Card image -->
                                  <div class="view view-cascade overlay">
                                    <img src="assets/mdb/img/Photos/Others/img%20(31).jpg" class="card-img-top" alt="sample photo">
                                    <a>
<!--                                      <div class="mask rgba-white-slight"></div>-->
                                    </a>
                                  </div>
                                  <!-- Card image -->
                                  <!-- Card content -->
                                  <div class="card-body card-body-cascade text-center">
                                    <!-- Category & Title -->
                                    <a href="" class="text-muted">
                                      <h5>Shorts</h5>
                                    </a>
                                    <h4 class="card-title my-4">
                                      <strong>
                                        <a href="">Denim shorts</a>
                                      </strong>
                                    </h4>
                                    <!-- Description -->
                                    <p class="card-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                      consectetur, adipisci.
                                    </p>
                                    <!-- Card footer -->
                                    <hr/>
                                <div class="px-1 d-flex justify-content-between align-items-center" >
                                      <span class="">49$</span>
                                      <span class="">
                                        <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Quick Look">
                                          <i class="fas fa-eye ml-3"></i>
                                        </a>
                                        <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist">
                                          <i class="fas fa-heart ml-3"></i>
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                  <!-- Card content -->
                                </div>
                                <!-- Card -->
                              </div>
                                </div>
                            </div>
                            <!-- First slide -->
                            <!-- Second slide -->
                            <div class="carousel-item">
                            <div class="row">
                              <div class="col-12 col-md-4 mb-2">
                                <!-- Card -->
                                <div class="card card-cascade narrower card-ecommerce">
                                  <!-- Card image -->
                                  <div class="view view-cascade overlay">
                                    <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg" class="card-img-top"
                                      alt="sample photo">
                                    <a>
<!--                                      <div class="mask rgba-white-slight"></div>-->
                                    </a>
                                  </div>
                                  <!-- Card image -->
                                  <!-- Card content -->
                                  <div class="card-body card-body-cascade text-center">
                                    <!-- Category & Title -->
                                    <a href="" class="text-muted">
                                      <h5>Accessories</h5>
                                    </a>
                                    <h4 class="card-title my-4">
                                      <strong>
                                        <a href="">Summer hat</a>
                                      </strong>
                                    </h4>
                                    <!-- Description -->
                                    <p class="card-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                      consectetur, adipisci.
                                    </p>
                                    <!-- Card footer -->
                                    <hr/>
                                <div class="px-1 d-flex justify-content-between align-items-center" >
                                      <span class="">39$</span>
                                      <span class="">
                                        <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Quick Look">
                                          <i class="fas fa-eye ml-3"></i>
                                        </a>
                                        <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist">
                                          <i class="fas fa-heart ml-3"></i>
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                  <!-- Card content -->
                                </div>
                                <!-- Card -->
                              </div>
                              <div class="col-12 col-md-4 mb-2 clearfix d-none d-md-block">
                                <!-- Card -->
                                <div class="card card-cascade narrower card-ecommerce">
                                  <!-- Card image -->
                                  <div class="view view-cascade overlay">
                                    <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/img%20(37).jpg" class="card-img-top"
                                      alt="sample photo">
                                    <a>
<!--                                      <div class="mask rgba-white-slight"></div>-->
                                    </a>
                                  </div>
                                  <!-- Card image -->
                                  <!-- Card content -->
                                  <div class="card-body card-body-cascade text-center">
                                    <!-- Category & Title -->
                                    <a href="" class="text-muted">
                                      <h5>Shoes</h5>
                                    </a>
                                    <h4 class="card-title my-4">
                                      <strong>
                                        <a href="">Black heels</a>
                                      </strong>
                                    </h4>
                                    <!-- Description -->
                                    <p class="card-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                      consectetur, adipisci.
                                    </p>
                                    <!-- Card footer -->
                                    <hr/>
                                <div class="px-1 d-flex justify-content-between align-items-center" >
                                      <span class="">79$</span>
                                      <span class="">
                                        <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Quick Look">
                                          <i class="fas fa-eye ml-3"></i>
                                        </a>
                                        <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist">
                                          <i class="fas fa-heart ml-3"></i>
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                  <!-- Card content -->
                                </div>
                                <!-- Card -->
                              </div>
                              <div class="col-12 col-md-4 mb-2 clearfix d-none d-md-block">
                                <!-- Card -->
                                <div class="card card-cascade narrower card-ecommerce">
                                  <!-- Card image -->
                                  <div class="view view-cascade overlay">
                                    <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/img%20(31).jpg" class="card-img-top"
                                      alt="sample photo">
                                    <a>
<!--                                      <div class="mask rgba-white-slight"></div>-->
                                    </a>
                                  </div>
                                  <!-- Card image -->
                                  <!-- Card content -->
                                  <div class="card-body card-body-cascade text-center">
                                    <!-- Category & Title -->
                                    <a href="" class="text-muted">
                                      <h5>Outerwear</h5>
                                    </a>
                                    <h4 class="card-title my-4">
                                      <strong>
                                        <a href="">Black jacket</a>
                                      </strong>
                                    </h4>
                                    <!-- Description -->
                                    <p class="card-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                      consectetur, adipisci.
                                    </p>
                                    <!-- Card footer -->
                                    <hr/>
                                <div class="px-1 d-flex justify-content-between align-items-center" >
                                      <span class="">149$</span>
                                      <span class="">
                                        <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Quick Look">
                                          <i class="fas fa-eye ml-3"></i>
                                        </a>
                                        <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist">
                                          <i class="fas fa-heart ml-3"></i>
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                  <!-- Card content -->
                                </div>
                                <!-- Card -->
                              </div>
                            </div>
                            </div>
                            <!-- Second slide -->
                            <!--Third slide -->
                            <div class="carousel-item">
                                <div class="row">
                              <div class="col-12 col-md-4 mb-2">
                                <!-- Card -->
                                <div class="card card-cascade narrower card-ecommerce">
                                  <!-- Card image -->
                                  <div class="view view-cascade overlay">
                                    <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/img%20(38).jpg" class="card-img-top"
                                      alt="sample photo">
                                    <a>
<!--                                      <div class="mask rgba-white-slight"></div>-->
                                    </a>
                                  </div>
                                  <!-- Card image -->
                                  <!-- Card content -->
                                  <div class="card-body card-body-cascade text-center">
                                    <!-- Category & Title -->
                                    <a href="" class="text-muted">
                                      <h5>Accessories</h5>
                                    </a>
                                    <h4 class="card-title my-4">
                                      <strong>
                                        <a href="">Leather bag</a>
                                      </strong>
                                    </h4>
                                    <!-- Description -->
                                    <p class="card-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                      consectetur, adipisci.
                                    </p>
                                    <!-- Card footer -->
                                    <hr/>
                                <div class="px-1 d-flex justify-content-between align-items-center" >
                                      <span class="">29$</span>
                                      <span class="">
                                        <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Quick Look">
                                          <i class="fas fa-eye ml-3"></i>
                                        </a>
                                        <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist">
                                          <i class="fas fa-heart ml-3"></i>
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                  <!-- Card content -->
                                </div>
                                <!-- Card -->
                              </div>
                              <div class="col-12 col-md-4 mb-2 clearfix d-none d-md-block">
                                <!-- Card -->
                                <div class="card card-cascade narrower card-ecommerce">
                                  <!-- Card image -->
                                  <div class="view view-cascade overlay">
                                    <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/belt.jpg" class="card-img-top"
                                      alt="sample photo">
                                    <a>
<!--                                      <div class="mask rgba-white-slight"></div>-->
                                    </a>
                                  </div>
                                  <!-- Card image -->
                                  <!-- Card content -->
                                  <div class="card-body card-body-cascade text-center">
                                    <!-- Category & Title -->
                                    <a href="" class="text-muted">
                                      <h5>Accessories</h5>
                                    </a>
                                    <h4 class="card-title my-4">
                                      <strong>
                                        <a href="">Leather belt</a>
                                      </strong>
                                    </h4>
                                    <!-- Description -->
                                    <p class="card-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                      consectetur, adipisci.
                                    </p>
                                    <!-- Card footer -->
                                        <hr/>
                                <div class="px-1 d-flex justify-content-between align-items-center" >
                                      <span class="">89$</span>
                                      <span class="">
                                        <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Quick Look">
                                          <i class="fas fa-eye ml-3"></i>
                                        </a>
                                        <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist">
                                          <i class="fas fa-heart ml-3"></i>
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                  <!-- Card content -->
                                </div>
                                <!-- Card -->
                              </div>
                              <div class="col-12 col-md-4 mb-2 clearfix d-none d-md-block">
                                <!-- Card -->
                                <div class="card card-cascade narrower card-ecommerce">
                                  <!-- Card image -->
                                  <div class="view view-cascade overlay">
                                    <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/img%20(57).jpg" class="card-img-top"
                                      alt="sample photo">
                                    <a>
<!--                                      <div class="mask rgba-white-slight"></div>-->
                                    </a>
                                  </div>
                                  <!-- Card image -->
                                  <!-- Card content -->
                                  <div class="card-body card-body-cascade text-center">
                                    <!-- Category & Title -->
                                    <a href="" class="text-muted">
                                      <h5>Shoes</h5>
                                    </a>
                                    <h4 class="card-title my-4">
                                      <strong>
                                        <a href="">Sneakers</a>
                                      </strong>
                                    </h4>
                                    <!-- Description -->
                                    <p class="card-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                      consectetur, adipisci.
                                    </p>
                                    <!-- Card footer -->
                                    <hr/>
                                <div class="px-1 d-flex justify-content-between align-items-center" >
                                      <span class="">129$</span>
                                      <span class="">
                                        <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Quick Look">
                                          <i class="fas fa-eye ml-3"></i>
                                        </a>
                                        <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist">
                                          <i class="fas fa-heart ml-3"></i>
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                  <!-- Card content -->
                                </div>
                                <!-- Card -->
                              </div>
                                </div>
                            </div>
                            <!--Third slide -->
                          </div>
                          <!-- Slides -->
                        </div>
                        <!-- Carousel Wrapper -->
                    
                      </section>
                      <!--Section: Content-->
                    
                    
                    </div>

            `) : null
    })
    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1306128" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/2.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/ecommerce/2.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1306128').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                <div class="container mt-5">

  <style>
    .card-body {
      border-bottom-left-radius: inherit !important;
      border-bottom-right-radius: inherit !important;
    }
  </style>

  <!--Section: Content-->
  <section class="dark-grey-text text-center">
    
    <!-- Section heading -->
    <h3 class="font-weight-bold mb-4 pb-2">Our bestsellers</h3>
    <!-- Section description -->
    <p class="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit fugit, error amet numquam iure provident voluptate esse quasi nostrum quisquam eum porro a pariatur veniam.</p>

  \t<!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-lg-4 col-md-12 mb-4">
        <!-- Card -->
        <div class="card card-cascade wider card-ecommerce">
          <!-- Card image -->
          <div class="view view-cascade overlay">
            <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/img (55).jpg" class="card-img-top"
              alt="sample photo">
            <a>
<!--              <div class="mask rgba-white-slight"></div>-->
            </a>
          </div>
          <!-- Card image -->
          <!-- Card content -->
          <div class="card-body card-body-cascade text-center pb-2">
            <!-- Title -->
            <h5 class="card-title">
              <strong>
                <a href="">GoPro</a>
              </strong>
            </h5>
            <!-- Description -->
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</p>
            <!-- Card footer -->
            <hr/>
            <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
              <span class=" font-weight-bold  ">1439$</span>
            <span>
              <a class=" material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Quick Look">
                <i class="fas fa-eye grey-text ml-3"></i>
              </a>
              <a class=" material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                <i class="fas fa-heart grey-text ml-3"></i>
              </a>
              </span>
            </div>
          </div>
          <!-- Card content -->
        </div>
        <!-- Card -->
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-lg-4 col-md-6 mb-4">
        <!-- Card -->
        <div class="card card-cascade wider card-ecommerce">
          <!-- Card image -->
          <div class="view view-cascade overlay">
            <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/img%20(49).jpg" class="card-img-top"
              alt="sample photo">
            <a>
<!--              <div class="mask rgba-white-slight"></div>-->
            </a>
          </div>
          <!-- Card image -->
          <!-- Card content -->
          <div class="card-body card-body-cascade text-center pb-2">
            <!-- Title -->
            <h5 class="card-title">
              <strong>
                <a href="">Camera</a>
              </strong>
            </h5>
            <!-- Description -->
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</p>
            <!-- Card footer -->
            <hr/>
            <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
              <span class=" font-weight-bold  ">1160$</span>
                <span>
              <a class=" material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Quick Look">
                <i class="fas fa-eye grey-text ml-3"></i>
              </a>
              <a class=" material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                <i class="fas fa-heart grey-text ml-3"></i>
              </a>
              </span>
            </div>
          </div>
          <!-- Card content -->
        </div>
        <!-- Card -->
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-lg-4 col-md-6 mb-4">
        <!-- Card -->
        <div class="card card-cascade wider card-ecommerce">
          <!-- Card image -->
          <div class="view view-cascade overlay">
            <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/img (56).jpg" class="card-img-top"
              alt="sample photo">
            <a>
<!--              <div class="mask rgba-white-slight"></div>-->
            </a>
          </div>
          <!-- Card image -->
          <!-- Card content -->
          <div class="card-body card-body-cascade text-center pb-2">
            <!-- Title -->
            <h5 class="card-title">
              <strong>
                <a href="">iPhone 6S</a>
              </strong>
            </h5>
            <!-- Description -->
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</p>
            <!-- Card footer -->
            <hr/>
            <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
              <span class="font-weight-bold">2079$</span>
            <span>
              <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Quick Look">
                <i class="fas fa-eye grey-text ml-3"></i>
              </a>
              <a class="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                <i class="fas fa-heart grey-text ml-3"></i>
              </a>
              </span>
            </div>
          </div>
          <!-- Card content -->
        </div>
        <!-- Card -->
      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </section>
  <!--Section: Content-->


</div>
            `) : null
        if (window.selected_ecommerce_component) {
            window.selected_ecommerce_component.set('script', function () {
                $(function () {
                    $('.material-tooltip-main').tooltip({
                        template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-inner"></div></div>'
                    });
                })
            })
            window.selected_ecommerce_component.view.updateScript()
        }
    })
    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
            <button id="1306413" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                <img data-src="assets/mdb/img/blocks/ecommerce/3.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/ecommerce/3.png">
                <a href="#">
                  <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                </a>
            </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1306413').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                    <div class="container mt-5">

  
                      <!--Section: Content-->
                      <section class="dark-grey-text text-center">
                        
                        <!-- Section heading -->
                        <h3 class="font-weight-bold mb-4 pb-2">Our bestsellers</h3>
                        <!-- Section description -->
                        <p class="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit fugit, error amet numquam iure provident voluptate esse quasi nostrum quisquam eum porro a pariatur veniam.</p>
                    
                      <!-- Grid row -->
                        <div class="row">
                    
                          <!-- Grid column -->
                          <div class="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
                            <!-- Card -->
                            <div class="card align-items-center">
                              <!-- Card image -->
                              <div class="view overlay">
                                <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" class="card-img-top"
                                  alt="">
                                <a>
<!--                                  <div class="mask rgba-white-slight"></div>-->
                                </a>
                              </div>
                              <!-- Card image -->
                              <!-- Card content -->
                              <div class="card-body text-center">
                                <!-- Category & Title -->
                                <a href="" class="grey-text">
                                  <h6>Shirt</h6>
                                </a>
                                <h5 class="mb-3">
                                  <strong>
                                    <a href="" class="dark-grey-text">Denim shirt
                                      <span class="badge badge-pill danger-color">NEW</span>
                                    </a>
                                  </strong>
                                </h5>
                                <h5 class="font-weight-bold blue-text mb-0">
                                  <strong>120$</strong>
                                </h5>
                              </div>
                              <!-- Card content -->
                            </div>
                            <!-- Card -->
                          </div>
                          <!-- Grid column -->
                    
                          <!-- Grid column -->
                          <div class="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
                            <!-- Card -->
                            <div class="card align-items-center">
                              <!-- Card image -->
                              <div class="view overlay">
                                <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Vertical/13.jpg" class="card-img-top"
                                  alt="">
                                <a>
<!--                                  <div class="mask rgba-white-slight"></div>-->
                                </a>
                              </div>
                              <!-- Card image -->
                              <!-- Card content -->
                              <div class="card-body text-center">
                                <!-- Category & Title -->
                                <a href="" class="grey-text">
                                  <h6>Sport wear</h6>
                                </a>
                                <h5 class="mb-3">
                                  <strong>
                                    <a href="" class="dark-grey-text">Sweatshirt</a>
                                  </strong>
                                </h5>
                                <h5 class="font-weight-bold blue-text mb-0">
                                  <strong>139$</strong>
                                </h5>
                              </div>
                              <!-- Card content -->
                            </div>
                            <!-- Card -->
                          </div>
                          <!-- Grid column -->
                    
                          <!-- Grid column -->
                          <div class="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
                            <!-- Card -->
                            <div class="card align-items-center">
                              <!-- Card image -->
                              <div class="view overlay">
                                <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Vertical/14.jpg" class="card-img-top"
                                  alt="">
                                <a>
<!--                                  <div class="mask rgba-white-slight"></div>-->
                                </a>
                              </div>
                              <!-- Card image -->
                              <!-- Card content -->
                              <div class="card-body text-center">
                                <!-- Category & Title -->
                                <a href="" class="grey-text">
                                  <h6>Sport wear</h6>
                                </a>
                                <h5 class="mb-3">
                                  <strong>
                                    <a href="" class="dark-grey-text">Grey blouse
                                      <span class="badge badge-pill primary-color">BEST</span>
                                    </a>
                                  </strong>
                                </h5>
                                <h5 class="font-weight-bold blue-text mb-0">
                                  <strong>99$</strong>
                                </h5>
                              </div>
                              <!-- Card content -->
                            </div>
                            <!-- Card -->
                          </div>
                          <!-- Grid column -->
                    
                          <!-- Grid column -->
                          <div class="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
                            <!-- Card -->
                            <div class="card align-items-center">
                              <!-- Card image -->
                              <div class="view overlay">
                                <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Vertical/15.jpg" class="card-img-top"
                                  alt="">
                                <a>
<!--                                  <div class="mask rgba-white-slight"></div>-->
                                </a>
                              </div>
                              <!-- Card image -->
                              <!-- Card content -->
                              <div class="card-body text-center">
                                <!-- Category & Title -->
                                <a href="" class="grey-text">
                                  <h6>Outwear</h6>
                                </a>
                                <h5 class="mb-3">
                                  <strong>
                                    <a href="" class="dark-grey-text">Black jacket</a>
                                  </strong>
                                </h5>
                                <h5 class="font-weight-bold blue-text mb-0">
                                  <strong>219$</strong>
                                </h5>
                              </div>
                              <!-- Card content -->
                            </div>
                            <!-- Card -->
                          </div>
                          <!-- Grid column -->
                    
                        </div>
                        <!-- Grid row -->
                    
                      </section>
                      <!--Section: Content-->
                    
                    
                    </div>
            `) : null
    })
    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                    <button id="1307088" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                        <img data-src="assets/mdb/img/blocks/ecommerce/6.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/ecommerce/6.png">
                        <a href="#">
                          <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                        </a>
                    </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1307088').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                    <div class="container mt-5">
                        
                          <!--Section: Content-->
                          <section class="dark-grey-text">
                        
                          \t<div class="card">
                              <div class="card-body">
                        
                                <!--Grid row-->
                                <div class="row">
                        
                                  <!--Grid column-->
                                  <div class="col-lg-8">
                        
                                    <!-- Pills navs -->
                                    <ul class="nav md-pills nav-justified pills-primary font-weight-bold">
                                      <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#tabCheckoutBilling123" role="tab">1. Billing</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#tabCheckoutAddons123" role="tab">2. Addons</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#tabCheckoutPayment123" role="tab">3. Payment</a>
                                      </li>
                                    </ul>
                        
                                    <!-- Pills panels -->
                                    <div class="tab-content pt-4">
                        
                                      <!--Panel 1-->
                                      <div class="tab-pane fade in show active" id="tabCheckoutBilling123" role="tabpanel">
                        
                                        <!--Card content-->
                                        <form>
                        
                                          <!--Grid row-->
                                          <div class="row">
                        
                                            <!--Grid column-->
                                            <div class="col-md-6 mb-4">
                        
                                              <!--firstName-->
                                              <label for="firstName" class="">First name</label>
                                              <input type="text" id="firstName" class="form-control">
                        
                                            </div>
                                            <!--Grid column-->
                        
                                            <!--Grid column-->
                                            <div class="col-md-6 mb-2">
                        
                                              <!--lastName-->
                                              <label for="lastName" class="">Last name</label>
                                              <input type="text" id="lastName" class="form-control">
                        
                                            </div>
                                            <!--Grid column-->
                        
                                          </div>
                                          <!--Grid row-->
                        
                                          <!--Username-->
                                          <div class="input-group mb-4">
                                            <div class="input-group-prepend">
                                              <span class="input-group-text" id="basic-addon1">@</span>
                                            </div>
                                            <input type="text" class="form-control py-0" placeholder="Username" aria-describedby="basic-addon1">
                                          </div>
                        
                                          <!--email-->
                                          <label for="email" class="">Email (optional)</label>
                                          <input type="text" id="email" class="form-control mb-4" placeholder="youremail@example.com">
                        
                                          <!--address-->
                                          <label for="address" class="">Address</label>
                                          <input type="text" id="address" class="form-control mb-4" placeholder="1234 Main St">
                        
                                          <!--address-2-->
                                          <label for="address-2" class="">Address 2 (optional)</label>
                                          <input type="text" id="address-2" class="form-control mb-4" placeholder="Apartment or suite">
                        
                                          <!--Grid row-->
                                          <div class="row">
                        
                                            <!--Grid column-->
                                            <div class="col-lg-4 col-md-12 mb-4">
                        
                                              <label for="country">Country</label>
                                              <select class="custom-select d-block w-100" id="country" required>
                                                <option value="">Choose...</option>
                                                <option>United States</option>
                                              </select>
                                              <div class="invalid-feedback">
                                                Please select a valid country.
                                              </div>
                        
                                            </div>
                                            <!--Grid column-->
                        
                                            <!--Grid column-->
                                            <div class="col-lg-4 col-md-6 mb-4">
                        
                                              <label for="state">State</label>
                                              <select class="custom-select d-block w-100" id="state" required>
                                                <option value="">Choose...</option>
                                                <option>California</option>
                                              </select>
                                              <div class="invalid-feedback">
                                                Please provide a valid state.
                                              </div>
                        
                                            </div>
                                            <!--Grid column-->
                        
                                            <!--Grid column-->
                                            <div class="col-lg-4 col-md-6 mb-4">
                        
                                              <label for="zip">Zip</label>
                                              <input type="text" class="form-control" id="zip" placeholder="" required>
                                              <div class="invalid-feedback">
                                                Zip code required.
                                              </div>
                        
                                            </div>
                                            <!--Grid column-->
                        
                                          </div>
                                          <!--Grid row-->
                        
                                          <hr>
                                            <div class="pl-4 text-left">
                                          <div class="mb-1">
                                            <input type="checkbox" class="form-check-input filled-in" id="chekboxRules">
                                            <label class="form-check-label" for="chekboxRules">I accept the terms and conditions</label>
                                          </div>
                                          <div class="mb-1">
                                            <input type="checkbox" class="form-check-input filled-in" id="safeTheInfo">
                                            <label class="form-check-label" for="safeTheInfo">Save this information for next time</label>
                                          </div>
                                          <div class="mb-1">
                                            <input type="checkbox" class="form-check-input filled-in" id="subscribeNewsletter">
                                            <label class="form-check-label" for="subscribeNewsletter">Subscribe to the newsletter</label>
                                          </div>
                                            </div>
                                          <hr>
                        
                                          <button class="btn btn-primary btn-lg btn-block" type="submit">Next step</button>
                        
                                        </form>
                        
                                      </div>
                                      <!--/.Panel 1-->
                        
                                      <!--Panel 2-->
                                      <div class="tab-pane fade" id="tabCheckoutAddons123" role="tabpanel">
                        
                                        <!--Grid row-->
                                        <div class="row">
                        
                                          <!--Grid column-->
                                          <div class="col-md-5 mb-4">
                        
                                            <img src="assets/mdb/img/Photos/Others/images/43.jpg" class="img-fluid z-depth-1-half"
                                              alt="Second sample image">
                        
                                          </div>
                                          <!--Grid column-->
                        
                                          <!--Grid column-->
                                          <div class="col-md-7 mb-4">
                        
                                            <h5 class="mb-3 h5">Additional premium support</h5>
                        
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ea ut aperiam corrupti,
                                              dolorem.</p>
                        
                                            <!--Name-->
                                            <select class="mdb-select colorful-select dropdown-info">
                                              <option value="" disabled>Choose a period of time</option>
                                              <option value="1" selected>+6 months : 200$</option>
                                              <option value="2">+12 months: 400$</option>
                                              <option value="3">+18 months: 800$</option>
                                              <option value="4">+24 months: 1200$</option>
                                            </select>
                        
                                            <button type="button" class="btn btn-primary btn-md">Add premium support to the cart</button>
                        
                                          </div>
                                          <!--Grid column-->
                        
                                        </div>
                                        <!--Grid row-->
                        
                                        <hr class="mb-5">
                        
                                        <!--Grid row-->
                                        <div class="row">
                        
                                          <!--Grid column-->
                                          <div class="col-md-5 mb-4">
                        
                                            <img src="assets/mdb/img/Photos/Others/images/44.jpg" class="img-fluid z-depth-1-half"
                                              alt="Second sample image">
                        
                                          </div>
                                          <!--Grid column-->
                        
                                          <!--Grid column-->
                                          <div class="col-md-7 mb-4">
                        
                                            <h5 class="mb-3 h5">MDB Membership</h5>
                        
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ea ut aperiam corrupti,
                                              dolorem.</p>
                        
                                            <!--Name-->
                                            <select class="mdb-select colorful-select dropdown-info">
                                              <option value="" disabled>Choose a period of time</option>
                                              <option value="1" selected>+6 months : 200$</option>
                                              <option value="2">+12 months: 400$</option>
                                              <option value="3">+18 months: 800$</option>
                                              <option value="4">+24 months: 1200$</option>
                                            </select>
                        
                                            <button type="button" class="btn btn-primary btn-md">Add MDB Membership to the cart</button>
                        
                                          </div>
                                          <!--Grid column-->
                        
                                        </div>
                                        <!--Grid row-->
                        
                                        <hr class="mb-4">
                        
                                        <button class="btn btn-primary btn-lg btn-block my-2" type="submit">Next step</button>
                        
                                      </div>
                                      <!--/.Panel 2-->
                        
                                      <!--Panel 3-->
                                      <div class="tab-pane fade" id="tabCheckoutPayment123" role="tabpanel">
                        
                                        <div class="d-block my-3 text-left pl-4">
                                          <div class="mb-2">
                                            <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap4" checked
                                              required>
                                            <label class="form-check-label" for="radioWithGap4">Credit card</label>
                                          </div>
                                          <div class="mb-2">
                                            <input iname="group2" type="radio" class="form-check-input with-gap" id="radioWithGap5"
                                              required>
                                            <label class="form-check-label" for="radioWithGap5">Debit card</label>
                                          </div>
                                          <div class="mb-2">
                                            <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap6" required>
                                            <label class="form-check-label" for="radioWithGap6">Paypal</label>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-md-6 mb-3">
                                            <label for="cc-name123">Name on card</label>
                                            <input type="text" class="form-control" id="cc-name123" placeholder="" required>
                                            <small class="text-muted">Full name as displayed on card</small>
                                            <div class="invalid-feedback">
                                              Name on card is required
                                            </div>
                                          </div>
                                          <div class="col-md-6 mb-3">
                                            <label for="cc-number123">Credit card number</label>
                                            <input type="text" class="form-control" id="cc-number123" placeholder="" required>
                                            <div class="invalid-feedback">
                                              Credit card number is required
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-md-3 mb-3">
                                            <label for="cc-expiration123">Expiration</label>
                                            <input type="text" class="form-control" id="cc-expiration123" placeholder="" required>
                                            <div class="invalid-feedback">
                                              Expiration date required
                                            </div>
                                          </div>
                                          <div class="col-md-3 mb-3">
                                            <label for="cc-cvv123">CVV</label>
                                            <input type="text" class="form-control" id="cc-cvv123" placeholder="" required>
                                            <div class="invalid-feedback">
                                              Security code required
                                            </div>
                                          </div>
                                        </div>
                                        <hr class="mb-4">
                        
                                        <button class="btn btn-primary btn-lg btn-block my-2" type="submit">Place order</button>
                        
                                      </div>
                                      <!--/.Panel 3-->
                        
                                    </div>
                                    <!-- Pills panels -->
                        
                        
                                  </div>
                                  <!--Grid column-->
                        
                                  <!--Grid column-->
                                  <div class="col-lg-4 mb-4">
                        
                                    <button class="btn btn-primary btn-lg btn-block" type="submit">Place order</button>
                        
                                    <!--Card-->
                                    <div class="card z-depth-0 border border-light rounded-0">
                        
                                      <!--Card content-->
                                      <div class="card-body">
                                        <h4 class="mb-4 mt-1 h5 text-center font-weight-bold">Summary</h4>
                        
                                        <hr>
                        
                                        <dl class="row">
                                          <dd class="col-sm-8">
                                            MDBootstrap UI KIT (jQuery version) - License 6-10 poeple + unlimited projects
                                          </dd>
                                          <dd class="col-sm-4">
                                            $ 2000
                                          </dd>
                                        </dl>
                        
                                        <hr>
                        
                                        <dl class="row">
                                          <dd class="col-sm-8">
                                            Premium support - 2 years
                                          </dd>
                                          <dd class="col-sm-4">
                                            $ 2000
                                          </dd>
                                        </dl>
                        
                                        <hr>
                        
                                        <dl class="row">
                                          <dd class="col-sm-8">
                                            MDB Membership - 2 years
                                          </dd>
                                          <dd class="col-sm-4">
                                            $ 2000
                                          </dd>
                                        </dl>
                        
                                        <hr>
                        
                                        <dl class="row">
                                          <dt class="col-sm-8">
                                            Total
                                          </dt>
                                          <dt class="col-sm-4">
                                            $ 2000
                                          </dt>
                                        </dl>
                                      </div>
                        
                                    </div>
                                    <!--/.Card-->
                        
                        
                        
                                  </div>
                                  <!--Grid column-->
                        
                                </div>
                                <!--Grid row-->
                        
                              </div>
                            </div>
                        
                          </section>
                          <!--Section: Content-->
                        
                        
                        </div>
            `) : null
        if (window.selected_ecommerce_component) {
            window.selected_ecommerce_component.set('script', function () {
                // Material Select Initialization
                $(document).ready(function () {
                    $('.mdb-select').material_select();
                });
            })
            window.selected_ecommerce_component.view.updateScript()
        }
    })
    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1349717" type="button" class="btn btn-primary overlay z-depth-1 mb-4">                  
                     <img data-src="assets/mdb/img/blocks/ecommerce/10.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/ecommerce/10.png">
                     <a href="#">
                       <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                     </a>
                </div>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1349717').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                    <div class="container mt-5">
                    
                      <!--Section: Content-->
                      <section class="mb-5">
                    
                        <!-- Section heading -->
                        <h3 class="text-center font-weight-bold mb-5">Product Details</h3>
                    
                      \t<div class="row">
                    
                          <!--Grid column-->
                          <div class="col-md-12">
                            <!--News card-->
                            <div class="card">
                              <div class="card-body">
                                <div class="row h-100 d-flex align-items-center">
                                  <div class="col-lg-6">
                                    <p class="text-muted font-weight-light ml-3 mb-5">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                       non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                    </p>
                                    <ul class="fa-ul mb-5 text-muted font-weight-light text-left">
                                      <li class="mb-2 align-middle"><span class="fa-li"><i class="fas fa-check green-text"></i></span>Built in GPS</li>
                                      <li class="mb-2 align-middle"><span class="fa-li"><i class="fas fa-check green-text"></i></span>Heart Rate Sensor</li>
                                      <li class="mb-2 align-middle"><span class="fa-li"><i class="fas fa-check green-text"></i></span>Water Resistant 50 Meters</li>
                                      <li class="mb-2 align-middle"><span class="fa-li"><i class="fas fa-check green-text"></i></span>Comprehensive Workout App</li>
                                    </ul>
                                    <div class="d-flex justify-content-between ml-3">
                                      <button type="button" class="btn btn-primary mx-0">Purchase</button>
                                      <div class="text-center">
                                        <h4 class="mb-0">$399</h4>
                                      \t<small class="grey-text">+ $10 shipping fees</small>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                    
                                    <!--Carousel Wrapper-->
                                    <div id="carousel-thumb" class="carousel slide carousel-thumbnails" data-ride="carousel">
                    
                                      <!--Slides-->
                                      <div class="carousel-inner text-center text-md-left" role="listbox">
                                        <div class="carousel-item active">
                                          <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/17.jpg" alt="First slide" class="img-fluid">
                                        </div>
                                        <div class="carousel-item">
                                          <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/18.jpg" alt="Second slide" class="img-fluid">
                                        </div>
                                        <div class="carousel-item">
                                          <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/19.jpg" alt="Third slide" class="img-fluid">
                                        </div>
                                      </div>
                                      <!--/.Slides-->
                    
                                      <!--Thumbnails-->
                                      <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                      </a>
                                      <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                      </a>
                                      <!--/.Thumbnails-->
                    
                                    </div>
                                    <!--/.Carousel Wrapper-->
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--Grid column-->
                    
                        </div>
                      </section>
                      <!--Section: Content-->
                    
                    
                    </div>
            `) : null
        if (window.selected_ecommerce_component) {
            window.selected_ecommerce_component.set('script', function () {
                $('.carousel').carousel({
                    interval: 2000
                })
            });
            window.selected_ecommerce_component.view.updateScript();
        }
    })
    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1404008" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/11.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/ecommerce/11.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1404008').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                      <div class="container my-5 py-5">

                            <!--Section: Content-->
                            <section class="text-center">
                        
                        
                              <!--Grid row-->
                              <div class="row">
                        
                                <!--Grid column-->
                                <div class="col-lg-4 col-md-12 mb-4">
                        
                                  <a href="" class="waves-effect waves-light"><img
                                      src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/14.jpg" class="img-fluid"
                                      alt=""></a>
                        
                                  <p class="mb-1"><a href="" class="font-weight-bold black-text">Sony TV-675</a></p>
                        
                                  <p class="mb-1"><small class="mr-1"><s>$599</s></small><strong>$299</strong></p>
                        
                                  <div class="amber-text fa-xs mb-1">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                  </div>
                        
                                  <button type="button" style="border-radius: 25px" class="btn btn-indigo btn-rounded btn-sm px-3">Buy Now</button>
                                  <button type="button" style="border-radius: 25px" class="btn btn-outline-indigo btn-rounded btn-sm px-3 waves-effect">Details</button>
                        
                                </div>
                                <!--Grid column-->
                        
                                <!--Grid column-->
                                <div class="col-lg-4 col-md-6 mb-4">
                        
                                  <a href="" class="waves-effect waves-light"><img
                                      src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/13.jpg" class="img-fluid"
                                      alt=""></a>
                        
                                  <p class="mb-1"><a href="" class="font-weight-bold black-text">Samsung CT-567</a></p>
                        
                                  <p class="mb-1"><small class="mr-1"><s>$599</s></small><strong>$299</strong></p>
                        
                                  <div class="amber-text fa-xs mb-1">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                  </div>
                        
                                  <button style="border-radius: 25px" type="button" class="btn btn-indigo btn-rounded btn-sm px-3">Buy Now</button>
                                  <button style="border-radius: 25px" type="button" class="btn btn-outline-indigo btn-rounded btn-sm px-3 waves-effect">Details</button>
                        
                                </div>
                                <!--Grid column-->
                        
                                <!--Grid column-->
                                <div class="col-lg-4 col-md-6 mb-4">
                        
                                  <a href="" class="waves-effect waves-light"><img
                                      src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/12.jpg" class="img-fluid"
                                      alt=""></a>
                        
                                  <p class="mb-1"><a href="" class="font-weight-bold black-text">Dell V-964i</a></p>
                        
                                  <p class="mb-1"><small class="mr-1"><s>$599</s></small><strong>$299</strong></p>
                        
                                  <div class="amber-text fa-xs mb-1">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                  </div>
                        
                                  <button style="border-radius: 25px" type="button" class="btn btn-indigo btn-rounded btn-sm px-3">Buy Now</button>
                                  <button style="border-radius: 25px" type="button" class="btn btn-outline-indigo btn-rounded btn-sm px-3 waves-effect">Details</button>
                        
                                </div>
                                <!--Grid column-->
                        
                              </div>
                              <!--Grid row-->
                        
                        
                            </section>
                            <!--Section: Content-->
                        
                        
                          </div>
            `) : null
    })

    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1404060" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/12.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/ecommerce/12.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1404060').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                      <div class="container my-5 py-5">

                            <!--Section: Content-->
                            <section class="text-center">
                        
                        
                              <!--Grid row-->
                              <div class="row">
                        
                                <!--Grid column-->
                                <div class="col-lg-4 col-md-12 mb-4">
                        
                                  <a href="" class="waves-effect waves-light"><img
                                      src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/16.jpg" class="img-fluid"
                                      alt=""></a>
                        
                                  <div class="card">
                                    <div class="card-body">
                        
                                      <p class="mb-1"><a href="" class="font-weight-bold black-text">JBL DX-320</a></p>
                        
                                      <p class="mb-1"><small class="mr-1"><s>$599</s></small><strong>$199</strong></p>
                        
                                      <div class="amber-text fa-xs mb-1">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                      </div>
                        
                                      <button style="border-radius: 25px" type="button" class="btn btn-black btn-rounded btn-sm px-3">Buy Now</button>
                                      <button style="border-radius: 25px" type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">Details</button>
                        
                                    </div>
                                  </div>
                        
                        
                        
                                </div>
                                <!--Grid column-->
                        
                                <!--Grid column-->
                                <div class="col-lg-4 col-md-6 mb-4">
                        
                                  <a href="" class="waves-effect waves-light"><img
                                      src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/11.jpg" class="img-fluid"
                                      alt=""></a>
                        
                                  <div class="card">
                                    <div class="card-body">
                        
                                      <p class="mb-1"><a href="" class="font-weight-bold black-text">Huawei P40</a></p>
                        
                                      <p class="mb-1"><small class="mr-1"><s>$599</s></small><strong>$399</strong></p>
                        
                                      <div class="amber-text fa-xs mb-1">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                      </div>
                        
                                      <button style="border-radius: 25px" type="button" class="btn btn-black btn-rounded btn-sm px-3">Buy Now</button>
                                      <button style="border-radius: 25px" type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">Details</button>
                        
                                    </div>
                                  </div>
                        
                                </div>
                                <!--Grid column-->
                        
                                <!--Grid column-->
                                <div class="col-lg-4 col-md-6 mb-4">
                        
                                  <a href="" class="waves-effect waves-light"><img
                                      src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/10.jpg" class="img-fluid"
                                      alt=""></a>
                        
                                  <div class="card">
                                    <div class="card-body">
                        
                                      <p class="mb-1"><a href="" class="font-weight-bold black-text">Sony RX-410</a></p>
                        
                                      <p class="mb-1"><small class="mr-1"><s>$599</s></small><strong>$299</strong></p>
                        
                                      <div class="amber-text fa-xs mb-1">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                      </div>
                        
                                      <button style="border-radius: 25px" type="button" class="btn btn-black btn-rounded btn-sm px-3">Buy Now</button>
                                      <button style="border-radius: 25px" type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">Details</button>
                        
                                    </div>
                                  </div>
                        
                                </div>
                                <!--Grid column-->
                        
                              </div>
                              <!--Grid row-->
                        
                        
                            </section>
                            <!--Section: Content-->
                        
                        
                          </div>
            `) : null
    })
    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1349707" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/8.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/ecommerce/8.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1349707').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                    <div class="container mt-5">
                    
                    
                      <!--Section: Content-->
                      <section class="text-center">
                    
                        <!-- Section heading -->
                        <h3 class="font-weight-bold mb-5">The Store</h3>
                    
                      \t<div class="row">
                    
                          <!--Grid column-->
                          <div class="col-md-4 mb-4">
                            <!--Card-->
                            <div class="card">
                    
                              <!--Card image-->
                              <div class="view overlay">
                                <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/shoes%20(2).jpg" class="card-img-top" alt="">
                                <a>
<!--                                  <div class="mask rgba-white-slight waves-effect waves-light"></div>-->
                                </a>
                              </div>
                              <!--/.Card image-->
                    
                              <!--Card content-->
                              <div class="card-body">
                                <!--Title-->
                                <h5 class="card-title">Jeans Shoes <span class="badge badge-primary badge-pill align-text-bottom ml-1">New</span></h5>
                                <!--Text-->
                                <p class="mb-0 text-muted">$85</p>
                           \t\t</div>
                              <!--/.Card content-->
                    
                            </div>
                            <!--/.Card-->
                    
                          </div>
                          <!--Grid column-->
                    
                          <!--Grid column-->
                          <div class="col-md-4 mb-4">
                    
                            <!--Card-->
                            <div class="card">
                    
                              <!--Card image-->
                              <div class="view overlay">
                                <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/belt.jpg" class="card-img-top" alt="">
                                <a>
<!--                                  <div class="mask rgba-white-slight waves-effect waves-light"></div>-->
                                </a>
                              </div>
                              <!--/.Card image-->
                    
                              <!--Card content-->
                              <div class="card-body">
                                <!--Title-->
                                <h5 class="card-title">Leather Belt</h5>
                                <!--Text-->
                                <p class="mb-0 text-muted">$70</p>
                              </div>
                              <!--/.Card content-->
                    
                            </div>
                            <!--/.Card-->
                          </div>
                          <!--Grid column-->
                    
                          <!--Grid column-->
                          <div class="col-md-4 mb-4">
                    
                            <!--Card-->
                            <div class="card">
                    
                              <!--Card image-->
                              <div class="view overlay">
                                <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/img%20(4).jpg" class="card-img-top" alt="">
                                <a>
<!--                                  <div class="mask rgba-white-slight waves-effect waves-light"></div>-->
                                </a>
                              </div>
                              <!--/.Card image-->
                    
                              <!--Card content-->
                              <div class="card-body">
                                <!--Title-->
                                <h5 class="card-title">Checkered shirt <span class="badge badge-success badge-pill align-text-bottom ml-1">-25%</span></h5>
                                <!--Text-->
                                <p class="mb-0 text-muted">$134</p>
                              </div>
                              <!--/.Card content-->
                    
                            </div>
                            <!--/.Card-->
                          </div>
                          <!--Grid column-->
                    
                        </div>
                        
                        <nav class="d-flex justify-content-center mt-3" aria-label="Page navigation example">
                          <ul class="pagination pagination-circle pg-blue">
                            <li class="page-item disabled"><a class="page-link">First</a></li>
                            <li class="page-item disabled">
                              <a class="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                              </a>
                            </li>
                            <li class="page-item active"><a class="page-link">1</a></li>
                            <li class="page-item"><a class="page-link">2</a></li>
                            <li class="page-item"><a class="page-link">3</a></li>
                            <li class="page-item">
                              <a class="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                              </a>
                            </li>
                            <li class="page-item"><a class="page-link">Last</a></li>
                          </ul>
                        </nav>
                    
                      </section>
                      <!--Section: Content-->
                    
                    
                    </div>
            `) : null
    })

    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1404084" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/13.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/ecommerce/13.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1404084').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                      <div class="container my-5 py-5">

                            <!--Section: Content-->
                            <section class="text-center">
                        
                        
                              <!--Grid row-->
                              <div class="row">
                        
                                <!--Grid column-->
                                <div class="col-lg-4 col-md-12 mb-4">
                        
                                  <!-- Card -->
                                  <div class="card">
                        
                                    <!-- Card image -->
                                    <div class="view overlay">
                                      <img class="card-img-top" src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/shoes%20(6).jpg"
                                        alt="Card image cap">
                                      <a href="#!">
<!--                                        <div class="mask rgba-white-slight"></div>-->
                                      </a>
                                    </div>
                        
                                    <!-- Card content -->
                                    <div class="card-body">
                        
                                      <p class="mb-1"><a href="" class="font-weight-bold black-text">Adidas Air Max</a></p>
                        
                                      <p class="mb-1"><small class="mr-1"><s>$299</s></small><strong>$99</strong></p>
                        
                                      <div class="amber-text fa-xs mb-1">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                      </div>
                        
                                      <button style="border-radius: 25px" type="button" class="btn btn-black btn-rounded btn-sm px-3">Buy Now</button>
                                      <button style="border-radius: 25px" type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">Details</button>
                        
                                    </div>
                        
                                  </div>
                                  <!-- Card -->
                        
                        
                                </div>
                                <!--Grid column-->
                        
                                <!--Grid column-->
                                <div class="col-lg-4 col-md-6 mb-4">
                        
                                  <!-- Card -->
                                  <div class="card">
                        
                                    <!-- Card image -->
                                    <div class="view overlay">
                                      <img class="card-img-top" src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/shoes%20(7).jpg"
                                        alt="Card image cap">
                                      <a href="#!">
<!--                                        <div class="mask rgba-white-slight"></div>-->
                                      </a>
                                    </div>
                        
                                    <!-- Card content -->
                                    <div class="card-body">
                        
                                      <p class="mb-1"><a href="" class="font-weight-bold black-text">Vans Black Night</a></p>
                        
                                      <p class="mb-1"><small class="mr-1"><s>$199</s></small><strong>$89</strong></p>
                        
                                      <div class="amber-text fa-xs mb-1">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                      </div>
                        
                                      <button style="border-radius: 25px" type="button" class="btn btn-black btn-rounded btn-sm px-3">Buy Now</button>
                                      <button style="border-radius: 25px" type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">Details</button>
                        
                                    </div>
                        
                                  </div>
                                  <!-- Card -->
                        
                                </div>
                                <!--Grid column-->
                        
                                <!--Grid column-->
                                <div class="col-lg-4 col-md-6 mb-4">
                        
                                  <!-- Card -->
                                  <div class="card">
                        
                                    <!-- Card image -->
                                    <div class="view overlay">
                                      <img class="card-img-top" src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/shoes%20(8).jpg"
                                        alt="Card image cap">
                                      <a href="#!">
<!--                                        <div class="mask rgba-white-slight"></div>-->
                                      </a>
                                    </div>
                        
                                    <!-- Card content -->
                                    <div class="card-body">
                        
                                      <p class="mb-1"><a href="" class="font-weight-bold black-text">Nike Football</a></p>
                        
                                      <p class="mb-1"><small class="mr-1"><s>$399</s></small><strong>$199</strong></p>
                        
                                      <div class="amber-text fa-xs mb-1">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                      </div>
                        
                                      <button style="border-radius: 25px" type="button" class="btn btn-black btn-rounded btn-sm px-3">Buy Now</button>
                                      <button style="border-radius: 25px" type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">Details</button>
                        
                                    </div>
                        
                                  </div>
                                  <!-- Card -->
                        
                                </div>
                                <!--Grid column-->
                        
                              </div>
                              <!--Grid row-->
                        
                        
                            </section>
                            <!--Section: Content-->
                        
                        
                          </div>
            `) : null
    })

    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1404144" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/14.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/ecommerce/14.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1404144').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                      <div class="container my-5 py-5">

                            <!--Section: Content-->
                            <section class="text-center">
                        
                        
                              <!--Grid row-->
                              <div class="row">
                        
                                <!--Grid column-->
                                <div class="col-lg-4 col-md-6 mb-4">
                        
                                  <a href="" class="waves-effect waves-light"><img
                                      src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/13.jpg" class="img-fluid"
                                      alt=""></a>
                        
                                  <p class="mb-1"><a href="" class="font-weight-bold black-text">Samsung CT-567</a></p>
                        
                                  <p class="mb-1"><small class="mr-1"><s>$599</s></small><strong>$299</strong></p>
                        
                                  <span class="badge blue darken-1 mb-2">New</span>
                        
                                  <div class="amber-text fa-xs mb-1">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                  </div>
                        
                                  <button style="border-radius: 25px" type="button" class="btn btn-black btn-rounded btn-sm px-3">Buy Now</button>
                                  <button style="border-radius: 25px" type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">Details</button>
                        
                                </div>
                                <!--Grid column-->
                                
                                <!--Grid column-->
                                <div class="col-lg-4 col-md-6 mb-4">
                        
                                  <a href="" class="waves-effect waves-light"><img
                                      src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/12.jpg" class="img-fluid"
                                      alt=""></a>
                        
                                  <p class="mb-1"><a href="" class="font-weight-bold black-text">Dell V-964i</a> </p>
                        
                                  <p class="mb-1"><small class="mr-1"><s>$599</s></small><strong>$299</strong> </p>
                        
                                  <span class="badge green darken-2 mb-2">Bestseller</span>
                        
                                  <div class="amber-text fa-xs mb-1">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                  </div>
                        
                                  <button style="border-radius: 25px" type="button" class="btn btn-black btn-rounded btn-sm px-3">Buy Now</button>
                                  <button style="border-radius: 25px" type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">Details</button>
                        
                                </div>
                                <!--Grid column-->
                        
                                <!--Grid column-->
                                <div class="col-lg-4 col-md-12 mb-4">
                        
                                  <a href="" class="waves-effect waves-light"><img
                                      src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/14.jpg" class="img-fluid"
                                      alt=""></a>
                        
                                  <p class="mb-1"><a href="" class="font-weight-bold black-text">Sony TV-675</a></p>
                        
                                  <p class="mb-1"><small class="mr-1"><s>$599</s></small><strong>$299</strong></p>
                        
                                  <span class="badge red darken-1 mb-2">Sale</span>
                        
                                  <div class="amber-text fa-xs mb-1">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                  </div>
                        
                                  <button style="border-radius: 25px" type="button" class="btn btn-black btn-rounded btn-sm px-3">Buy Now</button>
                                  <button style="border-radius: 25px" type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">Details</button>
                        
                                </div>
                                <!--Grid column-->
                        
                              </div>
                              <!--Grid row-->
                        
                        
                            </section>
                            <!--Section: Content-->
                        
                        
                          </div>
            `) : null
    })


    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1404899" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/15.png" class="img-fluid" alt="" 
                    src="assets/mdb/img/blocks/ecommerce/15.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1404899').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                  <div class="container my-5 py-5 z-depth-1">
                        <!--Section: Content-->
                        <section class="">
                    
                          <p class="text-center font-weight-bold">Filter panel</p>
                    
                          <style>
                            .link-black a {
                              color: black;
                            }
                    
                            .link-black a:hover {
                              color: #0056b3;
                            }
                    
                            .link-black .active {
                              color: #0056b3;
                            }
                    
                            .divider-small {
                              width: 30px;
                              background-color: rgba(0, 0, 0, .1);
                              height: 3px;
                            }
                          </style>
                    
                    
                          <!--Grid row-->
                          <div class="row d-flex justify-content-center">
                    
                            <!--Grid column-->
                            <div class="col-lg-3 col-md-5 col-sm-12 border p-4">
                    
                              <!-- Filter panel -->
                              <div class="mb-5 text-left">
                                <h5 class="font-weight-bold mb-3">Order by</h5>
                    
                                <div class="divider-small mb-3"></div>
                    
                                <ul class="list-unstyled link-black text-left">
                                  <li class="mb-2">
                                    <a href="" class="active">Default</a>
                                  </li>
                                  <li class="mb-2">
                                    <a href="" class="">Popularity</a>
                                  </li>
                                  <li class="mb-2">
                                    <a href="" class="">Rating</a>
                                  </li>
                                  <li class="mb-2">
                                    <a href="" class="">Price: low to high</a>
                                  </li>
                                  <li class="mb-2">
                                    <a href="" class="">Price: high to low</a>
                                  </li>
                                </ul>
                              </div>
                              <!-- Filter panel -->
                    
                              <!-- Filter panel -->
                              <div class="mb-5 text-left">
                    
                                <h5 class="font-weight-bold mb-3">Category</h5>
                    
                                <div class="divider-small mb-3"></div>
                    
                                <div class="form-check pl-4 mb-2">
                                  <input type="radio" class="form-check-input" id="materialGroupExample1" name="groupOfMaterialRadios">
                                  <label class="form-check-label " for="materialGroupExample1">All</label>
                                </div>
                    
                                <div class="form-check pl-4 mb-2">
                                  <input type="radio" class="form-check-input" id="materialGroupExample2" name="groupOfMaterialRadios"
                                    checked>
                                  <label class="form-check-label" for="materialGroupExample2">Laptops</label>
                                </div>
                    
                                <div class="form-check pl-4 mb-2">
                                  <input type="radio" class="form-check-input" id="materialGroupExample3" name="groupOfMaterialRadios">
                                  <label class="form-check-label" for="materialGroupExample3">Smartphones</label>
                                </div>
                    
                                <div class="form-check pl-4 mb-2">
                                  <input type="radio" class="form-check-input" id="materialGroupExample4" name="groupOfMaterialRadios">
                                  <label class="form-check-label" for="materialGroupExample4">Tablets</label>
                                </div>
                    
                              </div>
                              <!-- Filter panel -->
                    
                              <!-- Filter panel -->
                              <div class="mb-5 text-left">
                    
                                <h5 class="font-weight-bold mb-3">Price</h5>
                    
                                <div class="divider-small mb-3"></div>
                    
                                <form class="range-field w-100">
                                  <input type="range" class="custom-range" min="0" max="319" />
                                </form>
                    
                                <div class="row justify-content-center">
                    
                                  <!-- Grid column -->
                                  <div class="col-md-6 text-left">
                                    <p class="dark-grey-text"><strong id="resellerEarnings">0$</strong></p>
                                  </div>
                                  <!-- Grid column -->
                    
                                  <!-- Grid column -->
                                  <div class="col-md-6 text-right">
                                    <p class="dark-grey-text"><strong id="clientPrice">319$</strong></p>
                                  </div>
                                  <!-- Grid column -->
                                </div>
                    
                              </div>
                              <!-- Filter panel -->
                    
                              <!-- Filter panel -->
                              <div class="link-black text-left">
                    
                                <h5 class="font-weight-bold mb-3">Rating</h5>
                    
                                <div class="divider-small mb-3"></div>
                    
                                <div class="amber-text fa-sm mb-1">
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <a href="" class="ml-2 active">4 and more</a>
                                </div>
                    
                                <div class="amber-text fa-sm mb-1">
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <a href="" class="ml-2">3 - 3,99</a>
                                </div>
                    
                                <div class="amber-text fa-sm mb-1">
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <a href="" class="ml-2">3.00 and less</a>
                                </div>
                    
                              </div>
                              <!-- Filter panel -->
                    
                            </div>
                            <!--Grid column-->
                    
                          </div>
                          <!--Grid row-->
                    
                    
                        </section>
                        <!--Section: Content-->
                    
                    
                      </div>
            `) : null
    })
    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1451118" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/18.png" class="img-fluid" alt="" 
                    src="assets/mdb/img/blocks/ecommerce/18.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1451118').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                    <div class="container my-5">
                      <!-- Section: Block Content -->
                      <section>
                        
                        <style>
                        \t.rgba-black-gradient {
                          \tbackground: linear-gradient(to top, rgba(0,0,0,.8) 55%,rgba(0,0,0,0) 100%);
                        \t}
                        </style>
                    
                        <!-- Grid row -->
                        <div class="row">
                    
                          <!-- Grid column -->
                          <div class="col-12">
                    
                            <div class="view zoom z-depth-1 rounded mb-4">
                              <a href="#!">
                                <img src="assets/mdb/img/Photos/Others/product1.jpg" class="img-fluid" alt="sample image">
                                <div class="mask rgba-black-gradient d-md-flex align-items-end">
                                  <div class="text-bottom white-text p-4 text-left pl-4">
                                    <span class="badge badge-danger">bestseller</span>
                                    <h3 class="card-title font-weight-bold mt-2 mb-1">This is news title</h3>
                                    <p class="font-weight-normal mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <button class="btn btn-danger btn-sm btn-rounded mx-0 mb-0 d-none d-sm-inline-block">Read more</button>
                                  </div>
                                </div>
                              </a>
                            </div>
                    
                          </div>
                          <!-- Grid column -->
                          
                        </div>
                        <!-- Grid row -->
                    
                      </section>
                      <!-- Section: Block Content -->
                    
                    </div>
            `) : null
    })

    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1445828" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/16.png" class="img-fluid" alt="" 
                    src="assets/mdb/img/blocks/ecommerce/16.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1445828').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                    <div class="container my-5">

                              <!-- Section: Block Content -->
                              <section>
                            
                                <!-- Nav tabs -->
                                <ul class="nav md-tabs nav-justified grey lighten-3 mx-0" role="tablist">
                                  <li class="nav-item">
                                    <a class="nav-link active dark-grey-text font-weight-bold" data-toggle="tab" href="#panel5" role="tab"> Bestsellers</a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link dark-grey-text font-weight-bold" data-toggle="tab" href="#panel6" role="tab">Top offers</a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link dark-grey-text font-weight-bold" data-toggle="tab" href="#panel7" role="tab">Best rated</a>
                                  </li>
                                </ul>
                            
                                <!-- Tab panels -->
                                <div class="tab-content px-0 pt-5">
                            
                                  <!-- Panel 1 -->
                                  <div class="tab-pane fade in show active" id="panel5" role="tabpanel">
                            
                                    <!-- Grid row -->
                                    <div class="row">
                            
                                      <!-- Grid column -->
                                      <div class="col-lg-4 col-md-12 mb-4 d-flex align-items-stretch">
                            
                                        <!-- Card -->
                                        <div class="card card-ecommerce">
                            
                                          <div class="view overlay">
                                            <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/13.jpg" class="img-fluid" alt="sample image">
                                            <a>
<!--                                              <div class="mask rgba-white-slight"></div>-->
                                            </a>
                                          </div>
                            
                                          <div class="card-body text-left pl-4">
                            
                                            <h5 class="card-title mb-1"><strong><a class="dark-grey-text">Asus CT-567</a></strong></h5>
                                            <span class="badge badge-danger mb-2">bestseller</span>
                                                   
                                                <div class="amber-text fa-sm mb-1">
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                </div>
<!--                                            <ul class="rating">-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                            </ul>-->
<!--                            <div class="d-flex justify-content-between align-items-center mt-2 mb-2">-->
<!--                                  <span class=" font-weight-bold  ">1160$</span>-->
<!--                                    <span>-->
<!--                                  <a class=" material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Quick Look">-->
<!--                                    <i class="fas fa-eye grey-text ml-3"></i>-->
<!--                                  </a>-->
<!--                                  <a class=" material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">-->
<!--                                    <i class="fas fa-heart grey-text ml-3"></i>-->
<!--                                  </a>-->
<!--                                  </span>-->
<!--                            </div>-->
<!--                                            <div class="card-footer pb-0 mt-3">-->
                                        <hr/>
                                        <div class="d-flex justify-content-start align-items-center mt-2 mb-2">
<!--                                              <div class="row mb-0 d-flex align-items-center">-->
                                                <span class="">
                                                  <strong>1439$</strong>
                                                </span>
                                                <span class="">
                                                  <a data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                  </a>
                                                </span>
<!--                                              </div>-->
                                            </div>
                            
                                          </div>
                            
                                        </div>
                                        <!-- Card -->
                            
                                      </div>
                                      <!-- Grid column -->
                            
                                      <!-- Grid column -->
                                      <div class="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
                            
                                        <!-- Card -->
                                        <div class="card card-ecommerce">
                            
                                          <div class="view overlay">
                                            <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/2.jpg" class="img-fluid" alt="sample image">
                                            <a>
<!--                                              <div class="mask rgba-white-slight"></div>-->
                                            </a>
                                          </div>
                            
                                          <div class="card-body text-left pl-4">
                            
                                            <h5 class="card-title mb-1"><strong><a class="dark-grey-text">iPad PRO</a></strong></h5>
                                            <span class="badge badge-danger mb-2">bestseller</span>
                                            <span class="badge badge-success mb-2 ml-2">SALE</span>
                            
                                                <div class="amber-text fa-sm mb-1">
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                </div>
<!--                                            <ul class="rating">-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star grey-text"></i>-->
<!--                                              </li>-->
<!--                                            </ul>-->
                            
                                        <hr/>
                                        <div class="d-flex justify-content-start align-items-center mt-2 mb-2">
<!--                                              <div class="row mb-0 align-items-center">-->
                                                <h5 class="mb-0 pb-0 mt-0 font-weight-bold">
                                                  <span class="red-text">
                                                    <strong>$699</strong>
                                                  </span>
                                                  <span class="grey-text ml-1">
                                                    <small>
                                                      <s>$920</s>
                                                    </small>
                                                  </span>
                                                </h5>
                                                <span class="">
                                                  <a data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                  </a>
                                                </span>
<!--                                              </div>-->
                                            </div>
                            
                                          </div>
                            
                                        </div>
                                        <!-- Card -->
                            
                                      </div>
                                      <!-- Grid column -->
                            
                                      <!-- Grid column -->
                                      <div class="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
                            
                                        <!-- Card -->
                                        <div class="card card-ecommerce">
                            
                                          <div class="view overlay">
                                            <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/4.jpg" class="img-fluid" alt="sample image">
                                            <a>
<!--                                              <div class="mask rgba-white-slight"></div>-->
                                            </a>
                                          </div>
                            
                                          <div class="card-body text-left pl-4">
                            
                                            <h5 class="card-title mb-1"><strong><a class="dark-grey-text">Dell V-964i</a></strong></h5>
                                            <span class="badge badge-danger mb-2">bestseller</span>
                                            <span class="badge badge-info mb-2 ml-2">new</span>
                            
                                                <div class="amber-text fa-sm mb-1">
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                </div>
<!--                                            <ul class="rating">-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                            </ul>-->
                            
                                        <hr/>
                                        <div class="d-flex justify-content-start align-items-center mt-2 mb-2">
<!--                                              <div class="row mb-0 align-items-center">-->
                                                <span class="">
                                                  <strong>1439$</strong>
                                                </span>
                                                <span class="">
                                                  <a data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                  </a>
                                                </span>
<!--                                              </div>-->
                                            </div>
                            
                                          </div>
                            
                                        </div>
                                        <!-- Card -->
                            
                                      </div>
                                      <!-- Grid column -->
                            
                                    </div>
                                    <!-- Grid row -->
                            
                                  </div>
                                  <!-- Panel 1 -->
                            
                                  <!-- Panel 2 -->
                                  <div class="tab-pane fade" id="panel6" role="tabpanel">
                            
                                    <!-- Grid row -->
                                    <div class="row mb-3">
                            
                                      <!-- Grid column -->
                                      <div class="col-lg-4 col-md-12 mb-4 d-flex align-items-stretch">
                            
                                        <!-- Card -->
                                        <div class="card card-ecommerce">
                            
                                          <div class="view overlay">
                                            <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/8.jpg" class="img-fluid" alt="sample image">
                                            <a>
<!--                                              <div class="mask rgba-white-slight"></div>-->
                                            </a>
                                          </div>
                            
                                          <div class="card-body">
                            
                                            <h5 class="card-title mb-1"><strong><a class="dark-grey-text">Samsung V54</a></strong></h5>
                                            <span class="badge grey mb-2">best rated</span>
                            
                                                <div class="amber-text fa-sm mb-1">
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                </div>
<!--                                            <ul class="rating">-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                            </ul>-->
                            
                                          <hr/>
                                        <div class="d-flex justify-content-start align-items-center mt-2 mb-2">                                              
                                                <span class="">
                                                  <strong>1439$</strong>
                                                </span>
                                                <span class="">
                                                  <a data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                  </a>
                                                </span>
                                            </div>
                            
                                          </div>
                            
                                        </div>
                                        <!-- Card -->
                            
                                      </div>
                                      <!-- Grid column -->
                            
                                      <!-- Grid column -->
                                      <div class="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
                            
                                        <!-- Card -->
                                        <div class="card card-ecommerce">
                            
                                          <div class="view overlay">
                                            <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/7.jpg" class="img-fluid" alt="sample image">
                                            <a>
<!--                                              <div class="mask rgba-white-slight"></div>-->
                                            </a>
                                          </div>
                            
                                          <div class="card-body">
                            
                                            <h5 class="card-title mb-1"><strong><a class="dark-grey-text">Dell 786i</a></strong></h5>
                                            <span class="badge badge-info mb-2">new</span>
                            
                                                <div class="amber-text fa-sm mb-1">
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                </div>
<!--                                            <ul class="rating">-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star grey-text"></i>-->
<!--                                              </li>-->
<!--                                            </ul>-->
                            

                                          <hr/>
                                        <div class="d-flex justify-content-start align-items-center mt-2 mb-2">                                              
                                                <span class="">
                                                  <strong>1439$</strong>
                                                </span>
                                                <span class="">
                                                  <a data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                  </a>
                                                </span>
                                            </div>
                            
                                          </div>
                            
                                        </div>
                                        <!-- Card -->
                            
                                      </div>
                                      <!-- Grid column -->
                            
                                      <!-- Grid column -->
                                      <div class="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
                            
                                        <!-- Card -->
                                        <div class="card card-ecommerce">
                            
                                          <div class="view overlay">
                                            <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/9.jpg" class="img-fluid" alt="sample image">
                                            <a>
<!--                                              <div class="mask rgba-white-slight"></div>-->
                                            </a>
                                          </div>
                            
                                          <div class="card-body">
                            
                                            <h5 class="card-title mb-1"><strong><a class="dark-grey-text">Canon 675-D</a></strong></h5>
                                            <span class="badge badge-info mb-2">new</span>
                                            <span class="badge badge-success mb-2 ml-2">SALE</span>
                            
                                                <div class="amber-text fa-sm mb-1">
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                </div>
<!--                                            <ul class="rating">-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                            </ul>-->
                            
                                           
                                          <hr/>
                                        <div class="d-flex justify-content-start align-items-center mt-2 mb-2">                                          
                                                <h5 class="mb-0 pb-0 mt-1 font-weight-bold">
                                                  <span class="red-text">
                                                    <strong>$1199</strong>
                                                  </span>
                                                  <span class="grey-text ml-1">
                                                    <small>
                                                      <s>$1520</s>
                                                    </small>
                                                  </span>
                                                </h5>
                                                <span class="">
                                                  <a data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                  </a>
                                                </span>
                                            </div>
                            
                                          </div>
                            
                                        </div>
                                        <!-- Card -->
                            
                                      </div>
                                      <!-- Grid column -->
                            
                                    </div>
                                    <!-- Grid row -->
                            
                                  </div>
                                  <!-- Panel 2 -->
                            
                                  <!-- Panel 3 -->
                                  <div class="tab-pane fade" id="panel7" role="tabpanel">
                            
                                    <!-- Grid row -->
                                    <div class="row">
                            
                                      <!-- Grid column -->
                                      <div class="col-lg-4 col-md-12 mb-4 d-flex align-items-stretch">
                            
                                        <!-- Card -->
                                        <div class="card card-ecommerce">
                            
                                          <div class="view overlay">
                                            <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/10.jpg" class="img-fluid" alt="sample image">
                                            <a>
<!--                                              <div class="mask rgba-white-slight"></div>-->
                                            </a>
                                          </div>
                            
                                          <div class="card-body">
                            
                                            <h5 class="card-title mb-1"><strong><a class="dark-grey-text">Headphones</a></strong></h5>
                                            <span class="badge badge-danger mb-2">bestseller</span>
                                                <div class="amber-text fa-sm mb-1">
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                </div>
<!--                                            <ul class="rating">-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                            </ul>-->
                            
                                            
                                          <hr/>
                                        <div class="d-flex justify-content-start align-items-center mt-2 mb-2">                                              
                                                <span class="">
                                                  <strong>1439$</strong>
                                                </span>
                                                <span class="">
                                                  <a data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                  </a>
                                                </span>
                                            </div>
                            
                                          </div>
                            
                                        </div>
                                        <!-- Card -->
                            
                                      </div>
                                      <!-- Grid column -->
                            
                                      <!-- Grid column -->
                                      <div class="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
                            
                                        <!-- Card -->
                                        <div class="card card-ecommerce">
                            
                                          <div class="view overlay">
                                            <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/11.jpg"class="img-fluid" alt="sample image">
                                            <a>
<!--                                              <div class="mask rgba-white-slight"></div>-->
                                            </a>
                                          </div>
                            
                                          <div class="card-body">
                            
                                            <h5 class="card-title mb-1"><strong><a class="dark-grey-text">iPhone</a></strong></h5>
                                            <span class="badge badge-info mb-2">new</span>
                                                <div class="amber-text fa-sm mb-1">
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                </div>
<!--                                            <ul class="rating">-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                            </ul>-->
                            
                                                                                      <hr/>
                                        <div class="d-flex justify-content-start align-items-center mt-2 mb-2">   
                                                <span class="">
                                                  <strong>1439$</strong>
                                                </span>
                                                <span class="">
                                                  <a data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                  </a>
                                                </span>
                                            </div>
                            
                                          </div>
                            
                                        </div>
                                        <!-- Card -->
                            
                                      </div>
                                      <!-- Grid column -->
                            
                                      <!-- Grid column -->
                                      <div class="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
                            
                                        <!-- Card -->
                                        <div class="card card-ecommerce">
                            
                                          <div class="view overlay">
                                            <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/3.jpg" class="img-fluid" alt="sample image">
                                            <a>
<!--                                              <div class="mask rgba-white-slight"></div>-->
                                            </a>
                                          </div>
                            
                                          <div class="card-body">
                            
                                            <h5 class="card-title mb-1"><strong><a class="dark-grey-text">iMac</a></strong></h5>
                                            <span class="badge badge-danger mb-2">bestseller</span>
                            
                                                <div class="amber-text fa-sm mb-1">
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                </div>
<!--                                            <ul class="rating">-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star blue-text"></i>-->
<!--                                              </li>-->
<!--                                              <li>-->
<!--                                                <i class="fas fa-star grey-text"></i>-->
<!--                                              </li>-->
<!--                                            </ul>-->
                            
                                        <hr/>
                                        <div class="d-flex justify-content-start align-items-center mt-2 mb-2">   
                                                <span class="">
                                                  <strong>1439$</strong>
                                                </span>
                                                <span class="">
                                                  <a data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                  </a>
                                                </span>
                                            </div>
                            
                                          </div>
                            
                                        </div>
                                        <!-- Card -->
                            
                                      </div>
                                      <!-- Grid column -->
                            
                                    </div>
                                    <!-- Grid row -->
                            
                                  </div>
                                  <!-- Panel 3 -->
                            
                                </div>
                                <!-- Tab panels -->
                            
                              </section>
                              <!-- Section: Block Content -->
                            
                            </div>
            `) : null
    })
    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1451606" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/19.png" class="img-fluid" alt="" 
                    src="assets/mdb/img/blocks/ecommerce/19.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1451606').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                        <div class="container my-5">

                                  <!-- Section: Block Content -->
                                  <section>
                                
                                    <h3 class="font-weight-bold dark-grey-text text-center mb-5">Last Items</h3>
                                
                                    <!-- Grid row -->
                                    <div class="row">
                                
                                      <!-- Grid column -->
                                      <div class="col-lg-3 col-md-6 mb-4">
                                
                                        <!-- Card -->
                                        <div class="card card-ecommerce">
                                
                                          <div class="view overlay">
                                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg" class="img-fluid"
                                              alt="sample image">
                                            <a>
<!--                                              <div class="mask rgba-white-slight"></div>-->
                                            </a>
                                          </div>
                                
                                          <div class="card-body text-left">
                                
                                            <h5 class="card-title mb-1"><strong><a class="dark-grey-text">Headphones</a></strong></h5>
                                            <span class="badge badge-danger mb-2">bestseller</span>
                                
                                
                                            <div class="amber-text fa-sm mb-1">
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                            </div>
                                
                                        <hr/>
                                        <div class="d-flex justify-content-start align-items-center mt-2 mb-2">
                                                <span class="">
                                                  <strong>1439$</strong>
                                                </span>
                                                <span class="ml-3">
                                                  <a class=" " data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                    <i class="fas fa-shopping-cart"></i>
                                                  </a>
                                                </span>
                                            </div>
                                          </div>
                                
                                        </div>
                                        <!-- Card -->
                                
                                      </div>
                                      <!-- Grid column -->
                                
                                      <!-- Grid column -->
                                      <div class="col-lg-3 col-md-6 mb-4">
                                
                                        <!-- Card -->
                                        <div class="card card-ecommerce">
                                
                                          <div class="view overlay">
                                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg" class="img-fluid"
                                              alt="sample image">
                                            <a>
<!--                                              <div class="mask rgba-white-slight"></div>-->
                                            </a>
                                          </div>
                                
                                          <div class="card-body text-left">
                                
                                            <h5 class="card-title mb-1"><strong><a class="dark-grey-text">Headphones</a></strong></h5>
                                            <span class="badge badge-danger mb-2">bestseller</span>
                                
                                         <div class="amber-text fa-sm mb-1">
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                </div>
                                
                                        <hr/>
                                        <div class="d-flex justify-content-start align-items-center mt-2 mb-2">
                                                <span class="">
                                                  <strong>1439$</strong>
                                                </span>
                                                <span class="">
                                                  <a class="" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                  </a>
                                                </span>
                                            </div>
                                          </div>
                                
                                        </div>
                                        <!-- Card -->
                                
                                      </div>
                                      <!-- Grid column -->
                                
                                      <!-- Grid column -->
                                      <div class="col-lg-3 col-md-6 mb-4">
                                
                                        <!-- Card -->
                                        <div class="card card-ecommerce">
                                
                                          <div class="view overlay">
                                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg" class="img-fluid"
                                              alt="sample image">
                                            <a>
<!--                                              <div class="mask rgba-white-slight"></div>-->
                                            </a>
                                          </div>
                                
                                          <div class="card-body text-left">
                                
                                            <h5 class="card-title mb-1"><strong><a class="dark-grey-text">iPhone</a></strong></h5>
                                            <span class="badge badge-info mb-2">new</span>
                                
                                             <div class="amber-text fa-sm mb-1">
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                </div>
                                
                                        <hr/>
                                        <div class="d-flex justify-content-start align-items-center mt-2 mb-2">
                                                <span class="">
                                                  <strong>1439$</strong>
                                                </span>
                                                <span class="">
                                                  <a class="" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                  </a>
                                                </span>
                                            </div>
                                          </div>
                                
                                        </div>
                                        <!-- Card -->
                                
                                      </div>
                                      <!-- Grid column -->
                                
                                      <!-- Grid column -->
                                      <div class="col-lg-3 col-md-6 mb-4">
                                
                                        <!-- Card -->
                                        <div class="card card-ecommerce">
                                
                                          <div class="view overlay">
                                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/3.jpg" class="img-fluid"
                                              alt="sample image">
                                            <a>
<!--                                              <div class="mask rgba-white-slight"></div>-->
                                            </a>
                                          </div>
                                
                                          <div class="card-body text-left">
                                
                                            <h5 class="card-title mb-1"><strong><a class="dark-grey-text">iMac</a></strong></h5>
                                            <span class="badge badge-danger mb-2">bestseller</span>
                                
                                            <div class="amber-text fa-sm mb-1">
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                  <i class="fas fa-star blue-text"></i>
                                                </div>
                                
                                        <hr/>
                                        <div class="d-flex justify-content-start align-items-center mt-2 mb-2">
                                                <span class="">
                                                  <strong class="">1439$</strong>
                                                </span>
                                                <span class="">
                                                  <a class="" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                  </a>
                                                </span>
                                            </div>
                                          </div>
                                
                                        </div>
                                        <!-- Card -->
                                
                                      </div>
                                      <!-- Grid column -->
                                
                                    </div>
                                    <!-- Grid row -->
                                
                                    <!-- Grid row -->
                                    <div class="row justify-content-center mt-3 mb-4">
                                      <!-- Pagination -->
                                      <nav class="mb-4">
                                        <ul class="pagination pagination-circle pg-blue mb-0">
                                          <!-- First -->
                                          <li class="page-item disabled clearfix d-none d-md-block">
                                            <a class="page-link waves-effect waves-effect">First</a>
                                          </li>
                                          <!-- Arrow left -->
                                          <li class="page-item disabled">
                                            <a class="page-link waves-effect waves-effect" aria-label="Previous">
                                              <span aria-hidden="true">«</span>
                                              <span class="sr-only">Previous</span>
                                            </a>
                                          </li>
                                          <!-- Numbers -->
                                          <li class="page-item active">
                                            <a class="page-link waves-effect waves-effect">1</a>
                                          </li>
                                          <li class="page-item">
                                            <a class="page-link waves-effect waves-effect">2</a>
                                          </li>
                                          <li class="page-item">
                                            <a class="page-link waves-effect waves-effect">3</a>
                                          </li>
                                          <li class="page-item">
                                            <a class="page-link waves-effect waves-effect">4</a>
                                          </li>
                                          <li class="page-item">
                                            <a class="page-link waves-effect waves-effect">5</a>
                                          </li>
                                          <!-- Arrow right -->
                                          <li class="page-item">
                                            <a class="page-link waves-effect waves-effect" aria-label="Next">
                                              <span aria-hidden="true">»</span>
                                              <span class="sr-only">Next</span>
                                            </a>
                                          </li>
                                          <!-- First -->
                                          <li class="page-item clearfix d-none d-md-block">
                                            <a class="page-link waves-effect waves-effect">Last</a>
                                          </li>
                                        </ul>
                                      </nav>
                                      <!-- Pagination -->
                                    </div>
                                    <!-- Grid row -->
                                
                                  </section>
                                  <!-- Section: Block Content -->
                                
                                </div>
            `) : null
    })

    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1445946" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/17.png" class="img-fluid" alt="" 
                    src="assets/mdb/img/blocks/ecommerce/17.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1445946').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(`
                <div class="container my-5">

                      <!-- Section: Block Content -->
                      <section>
                    
                        <div class="row">
                    
                          <!-- New Products -->
                          <div class="col-lg-4 col-md-12">
                    
                            <h4 class="text-center font-weight-bold dark-grey-text mb-5">
                              <strong>New Products</strong>
                            </h4>
                    
                            <!-- Card -->
                            <div class="card hoverable mb-4">
                              <div class="card-body">
                                <div class="row align-items-center">
                                  <div class="col-6 px-0">
                                    <a>
                                      <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/1.jpg"
                                        class="img-fluid">
                                    </a>
                                  </div>
                                  <div class="col-6 text-left">
                                    <a>
                                      <strong>iPad</strong>
                                    </a>
                                    <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                    </div>
<!--                                    <ul class="rating inline-ul mt-1">-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star grey-text"></i>-->
<!--                                      </li>-->
<!--                                    </ul>-->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text mt-4">
                                      <strong>$849</strong>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- Card -->
                    
                            <!-- Card -->
                            <div class="card hoverable mb-4">
                              <div class="card-body">
                                <div class="row align-items-center">
                                  <div class="col-6 px-0">
                                    <a>
                                      <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/10.jpg"
                                        class="img-fluid">
                                    </a>
                                  </div>
                                  <div class="col-6 text-left">
                                    <a>
                                      <strong>Headphones</strong>
                                    </a>
                                    <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                    </div>
<!--                                    <ul class="rating inline-ul">-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                    </ul>-->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text mt-4">
                                      <strong>$49</strong>
                                      <span class="grey-text">
                                        <small>
                                          <s>$89</s>
                                        </small>
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- Card -->
                    
                            <!-- Card -->
                            <div class="card hoverable mb-4">
                              <div class="card-body">
                                <div class="row align-items-center">
                                  <div class="col-6 px-0">
                                    <a>
                                      <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/3.jpg"
                                        class="img-fluid">
                                    </a>
                                  </div>
                                  <div class="col-6 text-left">
                                    <a>
                                      <strong>iMac 27"</strong>
                                    </a>
                                    <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                    </div>
<!--                                    <ul class="rating inline-ul">-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                    </ul>-->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text mt-4">
                                      <strong>$1449</strong>
                                      <span class="grey-text">
                                        <small>
                                          <s>$2189</s>
                                        </small>
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- Card -->
                    
                          </div>
                          <!-- New Products -->
                    
                          <!-- Top Sellers -->
                          <div class="col-lg-4 col-md-12">
                    
                            <h4 class="text-center font-weight-bold dark-grey-text mb-5">
                              <strong>Top Sellers</strong>
                            </h4>
                    
                            <!-- Card -->
                            <div class="card hoverable mb-4">
                              <div class="card-body">
                                <div class="row align-items-center">
                                  <div class="col-6 px-0">
                                    <a>
                                      <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/4.jpg"
                                        class="img-fluid">
                                    </a>
                                  </div>
                                  <div class="col-6 text-left">
                                    <a>
                                      <strong>Dell V-964i</strong>
                                    </a>
                                    <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                    </div>
<!--                                    <ul class="rating inline-ul">-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star grey-text"></i>-->
<!--                                      </li>-->
<!--                                    </ul>-->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text mt-4">
                                      <strong>$649</strong>
                                      <span class="grey-text">
                                        <small>
                                          <s>$889</s>
                                        </small>
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- Card -->
                    
                            <!-- Card -->
                            <div class="card hoverable mb-4">
                              <div class="card-body">
                                <div class="row align-items-center">
                                  <div class="col-6 px-0">
                                    <a>
                                      <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/5.jpg"
                                        class="img-fluid">
                                    </a>
                                  </div>
                                  <div class="col-6 text-left">
                                    <a>
                                      <strong>Asus GT67i</strong>
                                    </a>
                                    <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                    </div>
<!--                                    <ul class="rating inline-ul">-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star grey-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star grey-text"></i>-->
<!--                                      </li>-->
<!--                                    </ul>-->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text mt-4">
                                      <strong>$1249</strong>
                                      <span class="grey-text">
                                        <small>
                                          <s>$1489</s>
                                        </small>
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- Card -->
                    
                            <!-- Card -->
                            <div class="card hoverable mb-4">
                              <div class="card-body">
                                <div class="row align-items-center">
                                  <div class="col-6 px-0">
                                    <a>
                                      <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/6.jpg"
                                        class="img-fluid">
                                    </a>
                                  </div>
                                  <div class="col-6 text-left">
                                    <a>
                                      <strong>Headphones</strong>
                                    </a>
                                    <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                    </div>
<!--                                    <ul class="rating inline-ul">-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star grey-text"></i>-->
<!--                                      </li>-->
<!--                                    </ul>-->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text mt-4">
                                      <strong>$49</strong>
                                      <span class="grey-text">
                                        <small>
                                          <s>$89</s>
                                        </small>
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- Card -->
                    
                          </div>
                          <!-- Top Sellers -->
                    
                          <!-- Random Products -->
                          <div class="col-lg-4 col-md-12">
                    
                            <h4 class="text-center font-weight-bold dark-grey-text mb-5">
                              <strong>Random products</strong>
                            </h4>
                    
                            <!-- Card -->
                            <div class="card hoverable mb-4">
                              <div class="card-body">
                                <div class="row align-items-center">
                                  <div class="col-6 px-0">
                                    <a>
                                      <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/7.jpg"
                                        class="img-fluid">
                                    </a>
                                  </div>
                                  <div class="col-6 text-left">
                                    <a>
                                      <strong>Dell 786i</strong>
                                    </a>
                                    <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                    </div>
<!--                                    <ul class="rating inline-ul">-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star grey-text"></i>-->
<!--                                      </li>-->
<!--                                    </ul>-->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text mt-4">
                                      <strong>$749</strong>
                                      <span class="grey-text">
                                        <small>
                                          <s>$889</s>
                                        </small>
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- Card -->
                    
                            <!-- Card -->
                            <div class="card hoverable mb-4">
                              <div class="card-body">
                                <div class="row align-items-center">
                                  <div class="col-6 px-0">
                                    <a>
                                      <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/8.jpg"
                                        class="img-fluid">
                                    </a>
                                  </div>
                                  <div class="col-6 text-left">
                                    <a>
                                      <strong>Samsung V54</strong>
                                    </a>
                                    <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                    </div>
<!--                                    <ul class="rating inline-ul">-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star grey-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                    </ul>-->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text mt-4">
                                      <strong>$249</strong>
                                      <span class="grey-text">
                                        <small>
                                          <s>$489</s>
                                        </small>
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- Card -->
                    
                            <!-- Card -->
                            <div class="card hoverable mb-4">
                              <div class="card-body">
                                <div class="row align-items-center">
                                  <div class="col-6 px-0">
                                    <a>
                                      <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/9.jpg"
                                        class="img-fluid">
                                    </a>
                                  </div>
                                  <div class="col-6 text-left">
                                    <a>
                                      <strong>Canon 675-D</strong>
                                    </a>
                                    <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                    </div>
<!--                                    <ul class="rating inline-ul">-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star blue-text"></i>-->
<!--                                      </li>-->
<!--                                      <li>-->
<!--                                        <i class="fas fa-star grey-text"></i>-->
<!--                                      </li>-->
<!--                                    </ul>-->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text mt-4">
                                      <strong>$2149</strong>
                                      <span class="grey-text">
                                        <small>
                                          <s>$2489</s>
                                        </small>
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- Card -->
                    
                          </div>
                          <!-- Random Products -->
                    
                        </div>
                    
                      </section>
                      <!-- Section: Block Content -->
                    
                    </div>
            `) : null
    })

    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1454032" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/23.png" class="img-fluid" alt=""
                     src="assets/mdb/img/blocks/ecommerce/23.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1454032').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(
            `
            <!-- Section: Block Content -->
                <section>
                
                  <!-- Carousel Wrapper -->
                  <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                      <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
                      <li data-target="#carousel-example-2" data-slide-to="1"></li>
                      <li data-target="#carousel-example-2" data-slide-to="2"></li>
                    </ol>
                    <!-- Indicators -->
                    <!-- Slides -->
                    <div class="carousel-inner" role="listbox">
                      <div class="carousel-item active">
                        <div class="view">
                          <a href="#!">
                          \t<img class="d-block w-100" src="assets/mdb/img/Photos/Others/ecommerce4.jpg" alt="First slide">
                          \t<div class="mask rgba-white-slight text-center d-flex align-items-center justify-content-center">
                            \t<div class="row">
                              \t<div class="col-12">
                                \t<p class="h1-responsive red-text font-weight-bold mb-0">Sale off 30% on every saturday!</p>
                              \t</div>
                            \t</div>
                          \t</div>
                       \t\t</a>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <!-- Mask color -->
                        <div class="view">
                          <a>
                          \t<img class="d-block w-100" src="assets/mdb/img/Photos/Others/ecommerce2.jpg" alt="Second slide">
                          \t<div class="mask rgba-white-slight text-center d-flex align-items-center justify-content-center">
                            \t<div class="row">
                              \t<div class="col-12">
                                \t<p class="h1-responsive indigo-text font-weight-bold mb-0">Promotion on each smartphone!</p>
                              \t</div>
                            \t</div>
                          \t</div>
                          </a>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <!-- Mask color -->
                        <div class="view">
                          <a>
                          \t<img class="d-block w-100" src="assets/mdb/img/Photos/Others/ecommerce3.jpg" alt="Third slide">
                          \t<div class="mask rgba-white-slight text-center d-flex align-items-center justify-content-center">
                            \t<div class="row">
                              \t<div class="col-12">
                                \t<p class="h1-responsive orange-text font-weight-bold mb-0">Sale off 20% on every headphones!</p>
                                </div>
                            \t</div>
                          \t</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- Slides -->
                    <!-- Controls -->
                    <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                    <!-- Controls -->
                  </div>
                  <!-- Carousel Wrapper -->
                
                </section>
                <!-- Section: Block Content -->
            `) : null
    })

    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1451648" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/20.png" class="img-fluid" alt="" 
                    src="assets/mdb/img/blocks/ecommerce/20.png">
                    <a href="#">
<!--                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>-->
                    </a>
                </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1451648').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(
            `
        <div class="container my-5 py-5 z-depth-1">

              <!--Section: Content-->
              <section class="text-center">
            
                <!-- Section heading -->
                <h3 class="font-weight-bold mb-5">Product Details</h3>
            
                <div class="row">
                  <div class="col-lg-6">
            
                    <!--Carousel Wrapper-->
                    <div id="carousel-thumb1" class="carousel slide carousel-fade carousel-thumbnails mb-5 pb-4" data-ride="carousel">
            
                      <!--Slides-->
                      <div class="carousel-inner text-center text-md-left" role="listbox">
                        <div class="carousel-item active">
                          <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/1.jpg"
                            alt="First slide" class="img-fluid">
                        </div>
                        <div class="carousel-item">
                          <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/2.jpg"
                            alt="Second slide" class="img-fluid">
                        </div>
                        <div class="carousel-item">
                          <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/20.jpg"
                            alt="Third slide" class="img-fluid">
                        </div>
                      </div>
                      <!--/.Slides-->
            
                      <!--Thumbnails-->
                      <a class="carousel-control-prev" href="#carousel-thumb1" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carousel-thumb1" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                      <!--/.Thumbnails-->
            
                    </div>
                    <!--/.Carousel Wrapper-->
                    
                    <div class="row mb-4">
                      <div class="col-md-12">
                        <div id="mdb-lightbox-ui"></div>
                        <div class="mdb-lightbox no-margin row d-flex justify-content-center align-items-center">
                          <figure class="col-md-4">
                            <a href="assets/mdb/img/Photos/Horizontal/E-commerce/Products/1.jpg"
                              data-size="1600x1067">
                              <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/1.jpg"
                                class="img-fluid">
                            </a>
                          </figure>
                          <figure class="col-md-4">
                            <a href="assets/mdb/img/Photos/Horizontal/E-commerce/Products/2.jpg"
                              data-size="1600x1067">
                              <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/2.jpg"
                                class="img-fluid">
                            </a>
                          </figure>
                          <figure class="col-md-4">
                            <a href="assets/mdb/img/Photos/Horizontal/E-commerce/Products/20.jpg"
                              data-size="1600x1067">
                              <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/20.jpg"
                                class="img-fluid">
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    
                  </div>
            
                  <div class="col-lg-5 text-center text-md-left">
            
                    <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">iPad PRO</h2>
                    <span class="badge badge-danger product mb-4 ml-xl-0 ml-4">bestseller</span>
                    <span class="badge badge-success product mb-4 ml-2">SALE</span>
            
                    <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                      <span class="red-text font-weight-bold">
                        <strong>$1449</strong>
                      </span>
                      <span class="grey-text">
                        <small>
                          <s>$1789</s>
                        </small>
                      </span>
                    </h3>
            
                    <div class="font-weight-normal">
                      
                      <p class="ml-xl-0 ml-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nesciunt atque nemo neque ut officiis nostrum incidunt maiores, magni optio et sunt suscipit iusto nisi totam quis, nobis mollitia necessitatibus.</p>
            
                      <p class="ml-xl-0 ml-4">
                        <strong>Storage: </strong>64GB</p>
                      <p class="ml-xl-0 ml-4">
                        <strong>Size: </strong>9.6-inch</p>
                      <p class="ml-xl-0 ml-4">
                        <strong>Resolution: </strong>2048 x 1536</p>
                      <p class="ml-xl-0 ml-4">
                        <strong>Availability: </strong>In stock</p>
                      
                      <div class="mt-5 text-left pl-4">
                        <p class="grey-text">Choose your color</p>
                        <div class="row text-left pl-4">
                          <div class="col-md-4 col-12 ">
                            <div class="form-group">
                              <input class="form-check-input" name="group100" type="radio" id="radio100" checked="checked">
                              <label for="radio100" class="form-check-label dark-grey-text">White</label>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <input class="form-check-input" name="group100" type="radio" id="radio101">
                              <label for="radio101" class="form-check-label dark-grey-text">Silver</label>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <input class="form-check-input" name="group100" type="radio" id="radio102">
                              <label for="radio102" class="form-check-label dark-grey-text">Gold</label>
                            </div>
                          </div>
                        </div>
                        <div class="row mt-3 mb-4">
                          <div class="col-md-12 text-center text-md-left text-md-right">
                            <button class="btn btn-primary btn-rounded" style="border-radius: 25px">
                              <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
                          </div>
                        </div>
                      </div>
            
                    </div>
            
                  </div>
                </div>
            
              </section>
              <!--Section: Content-->
            
            
            </div>
        `) : null;
        if (window.selected_ecommerce_component) {
            window.selected_ecommerce_component.set('script', function () {
                // MDB Lightbox Init
                $(function () {
                    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
                });
            });
            window.selected_ecommerce_component.view.updateScript()
        }
    })


    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1451751" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/21.png" class="img-fluid" alt="" src="assets/mdb/img/blocks/ecommerce/21.png">
                    <a href="#">
<!--                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>-->
                    </a>
                </button>
            `
    )
    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1451751').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(
            `
            <div class="container my-5">
                <style>
                    td, th {
                        text-align: center;
                    }
                </style>
              <!--Section: Content-->
              <section class="dark-grey-text text-center mb-5">
            
                <!-- Section heading -->
                <h3 class="font-weight-bold mb-5">Compare iPad models</h3>
                
                    <!-- Table -->
                <div class="card">
                  <div class="card-body">
                    <table class="table table-responsive-md mb-0">
                      <thead>
                        <tr>
                          <th>
                            <strong>Feature</strong>
                          </th>
                          <th>
                            <strong>12.9-inch iPad Pro</strong>
                          </th>
                          <th>
                            <strong>10.5-inch iPad Pro</strong>
                          </th>
                          <th>
                            <strong>iPad mini 4</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Storage</th>
                          <td>64GB</td>
                          <td>64GB</td>
                          <td>32GB</td>
                        </tr>
                        <tr>
                          <th scope="row">Weight</th>
                          <td>1.49 pounds (677 grams)</td>
                          <td>1.03 pounds (469 grams)</td>
                          <td>0.65 pound (298.8 grams)</td>
                        </tr>
                        <tr>
                          <th scope="row">Width</th>
                          <td>8.68 inches (220.6 mm)</td>
                          <td>6.8 inches (174.1 mm)</td>
                          <td>5.3 inches (134.8 mm)</td>
                        </tr>
                        <tr>
                          <th scope="row">Depth</th>
                          <td>0.27 inch (6.9 mm)</td>
                          <td>0.24 inch (6.1 mm)</td>
                          <td>0.24 inch (6.1 mm)</td>
                        </tr>
                        <tr>
                          <th scope="row">Camera</th>
                          <td>12-megapixel</td>
                          <td>12-megapixel</td>
                          <td>8-megapixel</td>
                        </tr>
                        <tr>
                          <th scope="row">Video</th>
                          <td>4K HD video recording </td>
                          <td>4K HD video recording </td>
                          <td>1080p HD video recording</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- Table -->
            
            \t</section>
              <!--Section: Content-->
            
            
            </div>
        `) : null;
    })

    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1451782" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/22.png" class="img-fluid" alt="" 
                    src="assets/mdb/img/blocks/ecommerce/22.png">
                    <a href="#">
<!--                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>-->
                    </a>
                </button>
            `
    )

    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1451782').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(
            `
            <div class="container my-5">

              <!--Section: Block Content-->
              <section class="dark-grey-text mb-5">
            
                <!-- Section heading -->
                <h3 class="font-weight-bold text-center mb-5">Product Reviews</h3>
                
                <div class="media mb-3">
                  <img class="card-img-100 rounded-circle z-depth-1-half d-flex mr-3" 
                  src="assets/mdb/img/Photos/Avatars/img (8).jpg" alt="Generic placeholder image">
                  <div class="media-body text-left">
                    <a>
                      <h5 class="user-name font-weight-bold">John Doe</h5>
                    </a>
                    <!-- Rating -->
                    <div class="amber-text fa-sm my-2">
                          <i class="fas fa-star blue-text"></i>
                          <i class="fas fa-star blue-text"></i>
                          <i class="fas fa-star blue-text"></i>
                          <i class="fas fa-star blue-text"></i>
                          <i class="fas fa-star grey-text"></i>
                    </div>
                    <div class="card-data">
                      <ul class="list-unstyled mb-1">
                        <li class="comment-date font-small grey-text">
                          <i class="far fa-clock"></i> 05/10/2015</li>
                      </ul>
                    </div>
                    <p class="dark-grey-text article">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                      nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                  </div>
                </div>
                
                <div class="media mb-3">
                  <img class=" card-img-100 rounded-circle z-depth-1-half d-flex mr-3" 
                  src="assets/mdb/img/Photos/Avatars/img (28).jpg" alt="Generic placeholder image">
                  <div class="media-body text-left">
                    <a>
                      <h5 class="user-name font-weight-bold">Martha Smith</h5>
                    </a>
                    <!-- Rating -->
                    <div class="amber-text fa-sm my-2">
                          <i class="fas fa-star blue-text"></i>
                          <i class="fas fa-star blue-text"></i>
                          <i class="fas fa-star blue-text"></i>
                          <i class="fas fa-star blue-text"></i>
                          <i class="fas fa-star grey-text"></i>
                    </div>
                    <div class="card-data">
                      <ul class="list-unstyled mb-1">
                        <li class="comment-date font-small grey-text">
                          <i class="far fa-clock"></i> 05/10/2015</li>
                      </ul>
                    </div>
                    <p class="dark-grey-text article">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                      nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                  </div>
                </div>
                
                <div class="media">
                  <img class=" card-img-100 rounded-circle z-depth-1-half d-flex mr-3"
                  src="assets/mdb/img/Photos/Avatars/img (30).jpg" alt="Generic placeholder image">
                  <div class="media-body text-left">
                    <a>
                      <h5 class="user-name font-weight-bold">Lily Brown</h5>
                    </a>
                    <!-- Rating -->
                        <div class="amber-text fa-sm my-2">
                          <i class="fas fa-star blue-text"></i>
                          <i class="fas fa-star blue-text"></i>
                          <i class="fas fa-star blue-text"></i>
                          <i class="fas fa-star blue-text"></i>
                          <i class="fas fa-star grey-text"></i>
                        </div>
<!--                    <ul class="rating mb-2">-->
<!--                      <li>-->
<!--                        <i class="fas fa-star blue-text"></i>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <i class="fas fa-star blue-text"></i>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <i class="fas fa-star blue-text"></i>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <i class="fas fa-star blue-text"></i>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <i class="fas fa-star blue-text"></i>-->
<!--                      </li>-->
<!--                    </ul>-->
                    <div class="card-data">
                      <ul class="list-unstyled mb-1">
                        <li class="comment-date font-small grey-text">
                          <i class="far fa-clock"></i> 05/10/2015</li>
                      </ul>
                    </div>
                    <p class="dark-grey-text article">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                      nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                  </div>
                </div>
            
            \t</section>
              <!--Section: Block Content-->
            
            
            </div>
        `) : null;
    })

    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1456101" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/30.png" class="img-fluid" alt="" 
                    src="assets/mdb/img/blocks/ecommerce/30.png">
                    <a href="#">
<!--                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>-->
                    </a>
                </button>
            `
    )

    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1456101').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(
            `
            
             <div class="container z-depth-1 p-5 my-5">
              <!-- Section: Block Content -->
              <section>
            
                <!-- Shopping Cart table -->
                <div class="table-responsive">
                  <table class="table product-table table-cart-v-1">
                    <!-- Table head -->
                    <thead>
                      <tr>
                        <th></th>
                        <th class="font-weight-bold">
                          <strong>Product</strong>
                        </th>
                        <th class="font-weight-bold">
                          <strong>Color</strong>
                        </th>
                        <th></th>
                        <th class="font-weight-bold">
                          <strong>Price</strong>
                        </th>
                        <th class="font-weight-bold text-center">
                          <strong>QTY</strong>
                        </th>
                        <th class="font-weight-bold">
                          <strong>Amount</strong>
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <!-- Table head -->
                    <!-- Table body -->
                    <tbody>
                      <!-- First row -->
                      <tr>
                        <th scope="row">
                          <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/13.jpg" alt=""
                            class="img-fluid z-depth-0">
                        </th>
                        <td>
                          <h5 class="mt-3">
                            <strong>iPhone</strong>
                          </h5>
                          <p class="text-muted">Apple</p>
                        </td>
                        <td class="align-middle">White</td>
                        <td></td>
                        <td class="align-middle">$800</td>
                        <td class="text-center text-md-left align-middle">
<!--                          <span class="qty">1 </span>-->
                              <ul class="pagination pagination-circle pg-blue mb-2 d-flex justify-content-center">
                                  <li class="page-item active mx-1">
                                    <a class="page-link waves-effect waves-effect text-white" href="#multi-item-example" data-slide="prev">
                                        <i class="fas fa-minus"></i>
                                    </a>
                                  </li>
                                   <li  class="page-item active mx-1 align-middle mt-1">
                                            1
                                   </li>
                                   <li class="page-item active mx-1">
                                    <a class="page-link waves-effect waves-effect text-white" href="#multi-item-example" data-slide="next">
                                        <i class="fas fa-plus"></i>                                    
                                    </a>
                                  </li>
                              </ul>
                        </td>
                        <td class="font-weight-bold align-middle">
                          <strong>$800</strong>
                        </td>
                        <td class="align-middle">
                          <button type="button" class="btn btn-sm btn-primary px-0" style="width: 40px; text-align: center" data-toggle="tooltip" data-placement="top"
                                title="Remove item">X
                              </button>
                        </td>
                      </tr>
                      <!-- First row -->
                      <!-- Second row -->
                      <tr>
                        <th scope="row">
                          <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/6.jpg" alt=""
                            class="img-fluid z-depth-0">
                        </th>
                        <td>
                          <h5 class="mt-3">
                            <strong>Headphones</strong>
                          </h5>
                          <p class="text-muted">Sony</p>
                        </td>
                        <td class="align-middle">Red</td>
                        <td></td>
                        <td class="align-middle">$200</td>
                        <td class="text-center text-md-left align-middle">
<!--                          <span class="qty">3 </span>-->
                            <ul class="pagination pagination-circle pg-blue mb-2 d-flex justify-content-center">
                                  <li class="page-item active mx-1">
                                    <a class="page-link waves-effect waves-effect text-white" href="#multi-item-example" data-slide="prev">
                                        <i class="fas fa-minus"></i>
                                    </a>
                                  </li>
                                   <li  class="page-item active mx-1 align-middle mt-1">
                                            3
                                   </li>
                                   <li class="page-item active mx-1">
                                    <a class="page-link waves-effect waves-effect text-white" href="#multi-item-example" data-slide="next">
                                        <i class="fas fa-plus"></i>                                    
                                    </a>
                                  </li>
                              </ul>
                        </td>
                        <td class="font-weight-bold align-middle">
                          <strong>$600</strong>
                        </td>
                        <td class="align-middle">
                          <button type="button" class="btn btn-sm btn-primary px-0" style="width: 40px; text-align: center" data-toggle="tooltip" data-placement="top"
                                title="Remove item">X
                              </button>
                        </td>
                      </tr>
                      <!-- Second row -->
                      <!-- Third row -->
                      <tr>
                        <th scope="row">
                          <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/1.jpg" alt=""
                            class="img-fluid z-depth-0">
                        </th>
                        <td>
                          <h5 class="mt-3">
                            <strong>iPad Pro</strong>
                          </h5>
                          <p class="text-muted">by FifeSteps</p>
                        </td>
                        <td class="align-middle">Gold</td>
                        <td></td>
                        <td class="align-middle">$600</td>
                        <td class="text-left w-43 align-middle">
<!--                              <div class="btn-group radio-group ml-2" data-toggle="buttons">-->
<!--                                <a class="btn-primary btn-rounded page-link waves-effect waves-effect">&mdash;</a>-->
<!--                                <a class="btn-primary btn-rounded page-link waves-effect waves-effect">+</a>-->
<!--                              </div>-->
                                <ul class="pagination pagination-circle pg-blue mb-2 d-flex justify-content-center">
                                  <li class="page-item active mx-1">
                                    <a class="page-link waves-effect waves-effect text-white" href="#multi-item-example" data-slide="prev">
                                        <i class="fas fa-minus"></i>
                                    </a>
                                  </li>
                                   <li  class="page-item active mx-1 align-middle mt-1">
                                         2
                                   </li>
                                   <li class="page-item active mx-1">
                                    <a class="page-link waves-effect waves-effect text-white" href="#multi-item-example" data-slide="next">
                                        <i class="fas fa-plus"></i>                                    
                                    </a>
                                  </li>
                              </ul>
                        </td>
                        <td class="font-weight-bold align-middle">
                          <strong>$1200</strong>
                        </td>
                        <td class="align-middle">
                          <button type="button" class="btn btn-sm btn-primary px-0" style="width: 40px; text-align: center" data-toggle="tooltip" data-placement="top"
                                title="Remove item">X
                              </button>
                        </td>
                      </tr>
                      <!-- Third row -->
                      <!-- Fourth row -->
                      <tr>
                        <td colspan="3"></td>
                        <td>
                          <h4 class="mt-3">
                            <strong>Total</strong>
                          </h4>
                        </td>
                        <td class="text-right">
                          <h4 class="mt-3">
                            <strong>$2600</strong>
                          </h4>
                        </td>
                        <td colspan="3" class="text-right">
                          <button type="button" class="btn btn-primary btn-rounded px-4" style="border-radius: 25px">Complete purchase
                            <i class="fas fa-angle-right right"></i>
                          </button>
                        </td>
                      </tr>
                      <!-- Fourth row -->
                    </tbody>
                    <!-- Table body -->
                  </table>
                </div>
                <!-- Shopping Cart table -->
            
              </section>
              <!-- Section: Block Content -->
            
            </div>
        `) : null;
    })

    /*FIXME Grid & List*/
// $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
//         `
//                 <button id="1456021" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
//                     <img data-src="https://mdbootstrap.com/img/blocks/ecommerce/29.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/ecommerce/29.png">
//                     <a href="#">
//                       <div class="mask rgba-blue-slight waves-effect waves-light"></div>
//                     </a>
//                 </button>
//             `
//     )
//
// $('#sidebar-ecommerces-designs .app-content--sidebar__content #1456021').click(function () {
//     window.selected_ecommerce_component ? window.selected_ecommerce_component.components(
//         `
//             <div class="container z-depth-1 p-5 my-5">
//
//                   <!-- Section: Block Content -->
//                   <section>
//
//                     <!-- Filter Area -->
//                     <div class="row align-items-center">
//                       <div class="col-md-4">
//                         <!-- Sort by -->
//                         <select class="mdb-select grey-text md-form" multiple>
//                           <option value="" disabled selected>Choose your option</option>
//                           <option value="1">Option 1</option>
//                           <option value="2">Option 2</option>
//                           <option value="3">Option 3</option>
//                         </select>
//                         <label class="mdb-main-label">Example label</label>
//                         <button class="btn-save btn btn-primary btn-sm">Save</button>
//                         <!-- Sort by -->
//                       </div>
//                       <div class="col-8 col-md-8 text-right">
//                         <!-- View Switcher -->
//                         <a class="btn blue darken-3 btn-sm">
//                           <i class="fas fa-th mr-2" aria-hidden="true"></i>
//                           <strong> Grid</strong>
//                         </a>
//                         <a class="btn blue darken-3 btn-sm">
//                           <i class="fas fa-th-list mr-2" aria-hidden="true"></i>
//                           <strong> List</strong>
//                         </a>
//                         <!-- View Switcher -->
//                       </div>
//                     </div>
//                     <!-- Filter Area -->
//
//                   </section>
//                   <!-- Section: Block Content -->
//
//                 </div>
//         `) : null;
//     if(window.selected_ecommerce_component){
//         window.selected_ecommerce_component.set('script',function () {
//             // Material Select Initialization
//             $(document).ready(function() {
//                 $('.mdb-select').materialSelect();
//             });
//         });
//         window.selected_ecommerce_component.view.updateScript()
//     }
// });

    $('#sidebar-ecommerces-designs .app-content--sidebar__content').append(
        `
                <button id="1455203" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                    <img data-src="assets/mdb/img/blocks/ecommerce/26.png" class="img-fluid" alt="" 
                    src="assets/mdb/img/blocks/ecommerce/26.png">
                    <a href="#">
                      <div class="mask rgba-blue-slight waves-effect waves-light"></div>
                    </a>
                </button>
            `
    )

    $('#sidebar-ecommerces-designs .app-content--sidebar__content #1455203').click(function () {
        window.selected_ecommerce_component ? window.selected_ecommerce_component.components(
            `
            <div class="container my-5">

                  <!-- Section: Block Content -->
                  <section>
                
                    <!-- Modal -->
                    <div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                
                            <div class="row">
                
                              <div class="col-lg-6">
                
                                <!--Carousel Wrapper-->
                                <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails"
                                  data-ride="carousel">
                
                                  <!--Slides-->
                                  <div class="carousel-inner text-center text-md-left" role="listbox">
                                    <div class="carousel-item active">
                                      <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/17.jpg"
                                        alt="First slide" class="img-fluid">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/18.jpg"
                                        alt="Second slide" class="img-fluid">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/19.jpg"
                                        alt="Third slide" class="img-fluid">
                                    </div>
                                  </div>
                                  <!--/.Slides-->
                
                                  <!--Thumbnails-->
                                  <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                  </a>
                                  <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                  </a>
                                  <!--/.Thumbnails-->
                
                                </div>
                                <!--/.Carousel Wrapper-->
                
                              </div>
                
                              <div class="col-lg-5 text-left">
                
                                <h2
                                  class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-0">
                                  <strong>Sony headphones</strong>
                                </h2>
                                <span class="badge badge-danger product mb-4 ml-xl-0 ml-0">bestseller</span>
                                <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-0">
                                  <span class="red-text font-weight-bold">
                                    <strong>$49</strong>
                                  </span>
                                  <span class="grey-text">
                                    <small>
                                      <s>$89</s>
                                    </small>
                                  </span>
                                </h3>
                
                                <!--Accordion wrapper-->
                                <div class="accordion md-accordion ml-4" id="accordionEx" role="tablist" aria-multiselectable="true">
                
                                  <!-- Accordion card -->
                                  <div class="card">
                
                                    <!-- Card header -->
                                    <div class="card-header" role="tab" id="headingOne1">
                                      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                        aria-controls="collapseOne1">
                                        <h5 class="mb-0">
                                          Description
                                          <i class="fas fa-angle-down rotate-icon"></i>
                                        </h5>
                                      </a>
                                    </div>
                
                                    <!-- Card body -->
                                    <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                                      data-parent="#accordionEx">
                                      <div class="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                        squid.
                                        3 wolf moon officia aute,
                                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                        wolf
                                        moon
                                        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                      </div>
                                    </div>
                                  </div>
                                  <!-- Accordion card -->
                
                                  <!-- Accordion card -->
                                  <div class="card">
                
                                    <!-- Card header -->
                                    <div class="card-header" role="tab" id="headingTwo2">
                                      <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                                        aria-expanded="false" aria-controls="collapseTwo2">
                                        <h5 class="mb-0">
                                          Details
                                          <i class="fas fa-angle-down rotate-icon"></i>
                                        </h5>
                                      </a>
                                    </div>
                
                                    <!-- Card body -->
                                    <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                                      data-parent="#accordionEx">
                                      <div class="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                        squid.
                                        3 wolf moon officia aute,
                                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                        wolf
                                        moon
                                        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                      </div>
                                    </div>
                                  </div>
                                  <!-- Accordion card -->
                
                                  <!-- Accordion card -->
                                  <div class="card">
                
                                    <!-- Card header -->
                                    <div class="card-header" role="tab" id="headingThree3">
                                      <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                                        aria-expanded="false" aria-controls="collapseThree3">
                                        <h5 class="mb-0">
                                          Shipping
                                          <i class="fas fa-angle-down rotate-icon"></i>
                                        </h5>
                                      </a>
                                    </div>
                
                                    <!-- Card body -->
                                    <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
                                      data-parent="#accordionEx">
                                      <div class="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                        squid.
                                        3 wolf moon officia aute,
                                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                        wolf
                                        moon
                                        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                      </div>
                                    </div>
                                  </div>
                                  <!-- Accordion card -->
                
                                </div>
                                <!--/.Accordion wrapper-->
                
                                <!-- Add to Cart -->
                                <section class="color">
                                  <div class="mt-5">
                                    <p class="grey-text">Choose your color</p>
                                    <div class="row text-center text-md-left pl-4">
                
                                      <div class="col-md-4 col-12">
                                        <!--Radio group-->
                                        <div class="form-group">
                                          <input class="form-check-input" name="group100" type="radio" id="radio100"
                                            checked="checked">
                                          <label for="radio100" class="form-check-label dark-grey-text">Blue</label>
                                        </div>
                                      </div>
                                      <div class="col-md-4">
                                        <!--Radio group-->
                                        <div class="form-group">
                                          <input class="form-check-input" name="group100" type="radio" id="radio101">
                                          <label for="radio101" class="form-check-label dark-grey-text">Orange</label>
                                        </div>
                                      </div>
                                      <div class="col-md-4">
                                        <!--Radio group-->
                                        <div class="form-group">
                                          <input class="form-check-input" name="group100" type="radio" id="radio102">
                                          <label for="radio102" class="form-check-label dark-grey-text">Red</label>
                                        </div>
                                      </div>
                                    </div>
                
                                    <div class="row mt-3">
                                      <div class="col-md-12 text-center text-md-left text-md-right">
                                        <button class="btn btn-primary btn-rounded" style="border-radius: 25px">
                                          <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <!-- /.Add to Cart -->
                
                              </div>
                
                            </div>
                
                          </div>
                        </div>
                      </div>
                    </div>
                
                    <h3 class="font-weight-bold text-center dark-grey-text pb-2">Electronics</h3>
                    <hr class="w-header my-4 pb-2">
                
                    <div class="row">
                
                      <!-- New Products -->
                      <div class="col-lg-4 col-md-12">
                
                        <h4 class="text-center font-weight-bold dark-grey-text mb-5">
                          <strong>New Products</strong>
                        </h4>
                
                        <!-- Card -->
                        <a class="card z-depth-0 mb-4" data-toggle="modal" data-target="#basicExampleModal">
                          <div class="card-body">
                            <div class="row align-items-center">
                              <div class="col-6 px-0">
                                <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/1.jpg" class="img-fluid">
                              </div>
                              <div class="col-6 text-left">
                                <p class="mb-0"><strong>iPad</strong></p>
                                    <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                    </div>
<!--                                <ul class="rating inline-ul">-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star grey-text"></i>-->
<!--                                  </li>-->
<!--                                </ul>-->
                                <h6 class="mt-4 h6-responsive font-weight-bold dark-grey-text mt-2"><strong>$849</strong></h6>
                              </div>
                            </div>
                          </div>
                        </a>
                        <!-- Card -->
                
                        <!-- Card -->
                        <a class="card z-depth-0 mb-4" data-toggle="modal" data-target="#basicExampleModal">
                          <div class="card-body">
                            <div class="row align-items-center">
                              <div class="col-6 px-0">
                                <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/10.jpg" class="img-fluid">
                              </div>
                              <div class="col-6 text-left">
                                <p class="mb-0"><strong>Headphones</strong></p>
                                    <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                    </div>
<!--                                <ul class="rating inline-ul">-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                </ul>-->
                                <h6 class="mt-4 h6-responsive font-weight-bold dark-grey-text mt-2">
                                  <strong>$49</strong>
                                  <span class="grey-text">
                                    <small>
                                      <s>$89</s>
                                    </small>
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </a>
                        <!-- Card -->
                
                        <!-- Card -->
                        <a class="card z-depth-0 mb-4" data-toggle="modal" data-target="#basicExampleModal">
                          <div class="card-body">
                            <div class="row align-items-center">
                              <div class="col-6 px-0">
                                <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/3.jpg" class="img-fluid">
                              </div>
                              <div class="col-6 text-left">
                                <p class="mb-0">
                                  <strong>iMac 27"</strong>
                                </p>
                                <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                    </div>
<!--                                <ul class="rating inline-ul">-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                </ul>-->
                                <h6 class="mt-4 h6-responsive font-weight-bold dark-grey-text">
                                  <strong>$1449</strong>
                                  <span class="grey-text">
                                    <small>
                                      <s>$2189</s>
                                    </small>
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </a>
                        <!-- Card -->
                
                      </div>
                      <!-- New Products -->
                
                      <!-- Top Sellers -->
                      <div class="col-lg-4 col-md-12">
                
                        <h4 class="text-center font-weight-bold dark-grey-text mb-5">
                          <strong>Top Sellers</strong>
                        </h4>
                
                        <!-- Card -->
                        <a class="card z-depth-0 mb-4" data-toggle="modal" data-target="#basicExampleModal">
                          <div class="card-body">
                            <div class="row align-items-center">
                              <div class="col-6 px-0">
                                <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/4.jpg"
                                    class="img-fluid">
                              </div>
                              <div class="col-6 text-left">
                                <p class="mb-0">
                                  <strong>Dell V-964i</strong>
                                </p>
                                <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                </div>
<!--                                <ul class="rating inline-ul">-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star grey-text"></i>-->
<!--                                  </li>-->
<!--                                </ul>-->
                                <h6 class="mt-4 h6-responsive font-weight-bold dark-grey-text">
                                  <strong>$649</strong>
                                  <span class="grey-text">
                                    <small>
                                      <s>$889</s>
                                    </small>
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </a>
                        <!-- Card -->
                
                        <!-- Card -->
                        <a class="card z-depth-0 mb-4" data-toggle="modal" data-target="#basicExampleModal">
                          <div class="card-body">
                            <div class="row align-items-center">
                              <div class="col-6 px-0">
                                  <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/5.jpg"
                                    class="img-fluid">
                              </div>
                              <div class="col-6 text-left">
                                <p class="mb-0">
                                  <strong>Asus GT67i</strong>
                                </p>
                                <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                </div>
<!--                                <ul class="rating inline-ul">-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star grey-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star grey-text"></i>-->
<!--                                  </li>-->
<!--                                </ul>-->
                                <h6 class="mt-4 h6-responsive font-weight-bold dark-grey-text">
                                  <strong>$1249</strong>
                                  <span class="grey-text">
                                    <small>
                                      <s>$1489</s>
                                    </small>
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </a>
                        <!-- Card -->
                
                        <!-- Card -->
                        <a class="card z-depth-0 mb-4" data-toggle="modal" data-target="#basicExampleModal">
                          <div class="card-body">
                            <div class="row align-items-center">
                              <div class="col-6 px-0">
                                  <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/6.jpg"
                                    class="img-fluid">
                              </div>
                              <div class="col-6 text-left">
                                <p class="mb-0">
                                  <strong>Headphones</strong>
                                </p>
                                <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                </div>
<!--                                <ul class="rating inline-ul">-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star grey-text"></i>-->
<!--                                  </li>-->
<!--                                </ul>-->
                                <h6 class="mt-4 h6-responsive font-weight-bold dark-grey-text">
                                  <strong>$49</strong>
                                  <span class="grey-text">
                                    <small>
                                      <s>$89</s>
                                    </small>
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </a>
                        <!-- Card -->
                
                      </div>
                      <!-- Top Sellers -->
                
                      <!-- Random Products -->
                      <div class="col-lg-4 col-md-12">
                
                        <h4 class="text-center font-weight-bold dark-grey-text mb-5">
                          <strong>Random products</strong>
                        </h4>
                
                        <!-- Card -->
                        <a class="card z-depth-0 mb-4" data-toggle="modal" data-target="#basicExampleModal">
                          <div class="card-body">
                            <div class="row align-items-center">
                              <div class="col-6 px-0">
                                <p class="mb-0">
                                  <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/7.jpg"
                                    class="img-fluid">
                                </p>
                              </div>
                              <div class="col-6 text-left">
                                <p class="mb-0">
                                  <strong>Dell 786i</strong>
                                </p>
                                    <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                    </div>
<!--                                <ul class="rating inline-ul">-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star grey-text"></i>-->
<!--                                  </li>-->
<!--                                </ul>-->
                                <h6 class="mt-4 h6-responsive font-weight-bold dark-grey-text">
                                  <strong>$749</strong>
                                  <span class="grey-text">
                                    <small>
                                      <s>$889</s>
                                    </small>
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </a>
                        <!-- Card -->
                
                        <!-- Card -->
                        <a class="card z-depth-0 mb-4" data-toggle="modal" data-target="#basicExampleModal">
                          <div class="card-body">
                            <div class="row align-items-center">
                              <div class="col-6 px-0">
                                  <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/8.jpg"
                                    class="img-fluid">
                              </div>
                              <div class="col-6 text-left">
                                <p class="mb-0">
                                  <strong>Samsung V54</strong>
                                </p>
                                <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                </div>
<!--                                <ul class="rating inline-ul">-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star grey-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                </ul>-->
                                <h6 class="mt-4 h6-responsive font-weight-bold dark-grey-text">
                                  <strong>$249</strong>
                                  <span class="grey-text">
                                    <small>
                                      <s>$489</s>
                                    </small>
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </a>
                        <!-- Card -->
                
                        <!-- Card -->
                        <a class="card z-depth-0 mb-4" data-toggle="modal" data-target="#basicExampleModal">
                          <div class="card-body">
                            <div class="row align-items-center">
                              <div class="col-6 px-0">
                                  <img src="assets/mdb/img/Photos/Horizontal/E-commerce/Products/9.jpg"
                                    class="img-fluid">
                              </div>
                              <div class="col-6 text-left">
                                <p class="mb-0">
                                  <strong>Canon 675-D</strong>
                                </p>
                                <div class="amber-text fa-sm mb-1">
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star blue-text"></i>
                                      <i class="fas fa-star grey-text"></i>
                                </div>
<!--                                <ul class="rating inline-ul">-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star blue-text"></i>-->
<!--                                  </li>-->
<!--                                  <li>-->
<!--                                    <i class="fas fa-star grey-text"></i>-->
<!--                                  </li>-->
<!--                                </ul>-->
                                <h6 class="mt-4 h6-responsive font-weight-bold dark-grey-text">
                                  <strong>$2149</strong>
                                  <span class="grey-text">
                                    <small>
                                      <s>$2489</s>
                                    </small>
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </a>
                        <!-- Card -->
                
                      </div>
                      <!-- Random Products -->
                
                    </div>
                
                  </section>
                  <!-- Section: Block Content -->
                
                </div>
        `) : null;
        if (window.selected_ecommerce_component) {
            window.selected_ecommerce_component.set('script', function () {
                // Material Select Initialization
                $(document).ready(function () {
                    $('.mdb-select').materialSelect();
                });
            });
            window.selected_ecommerce_component.view.updateScript()
        }
    });


    sidebar_ecommerces.classList.add('visible');
};

const hideTimelineDesigns = () => {
    window.selected_timeline_component = null;
    sidebar_timeline.classList.remove('visible')
}

const initTimelineDesigns = () => {
    if (!window.timeline_designs_first_init) {
        sidebar_timeline.classList.add('visible')
        return
    }
    window.timeline_designs_first_init = false
    /*1*/
    $('#sidebar-timeline-designs .app-content--sidebar__content').append(
        `
            <button id="1399630" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
            <img data-src="https://mdbootstrap.com/img/blocks/steps/1.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/steps/1.png">
            <a href="#">
              <div class="mask rgba-blue-slight waves-effect waves-light"></div>
            </a>
            </button>
        `
    )
    $('#sidebar-timeline-designs .app-content--sidebar__content #1399630').click(function () {
        window.selected_timeline_component ? window.selected_timeline_component.components(
            `
            <div class="container z-depth-1 my-5 pt-5 pb-3 px-5">

  <!-- Section -->
  <section>
    
    <style>
      .fa-play:before {
        margin-left: .3rem;
      }

      /* Steps */
      .step {
        list-style: none;
        margin: 0;
      }

      .step-element {
        display: flex;
        padding: 1rem 0;
      }

      .step-number {
        position: relative;
        width: 7rem;
        flex-shrink: 0;
        text-align: center;
      }

      .step-number .number {
        color: #bfc5ca;
        background-color: #eaeff4;
        font-size: 1.5rem;
      }

      .step-number .number {
        width: 48px;
        height: 48px;
        line-height: 48px;
      }

      .number {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 38px;
        border-radius: 10rem;
      }

      .step-number::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 48px;
        bottom: -2rem;
        margin-left: -1px;
        border-left: 2px dashed #eaeff4;
      }

      .step .step-element:last-child .step-number::before {
        bottom: 1rem;
      }
    </style>

    <!-- Modal -->
    <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
            <iframe id="player" class="embed-responsive-item" src="https://www.youtube.com/embed/7MUISDJ5ZZ4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>

    <h3 class="font-weight-bold text-center dark-grey-text pb-2">Three Easy Steps</h3>
    <hr class="w-header my-4">
    <p class="lead text-center text-muted pt-2 mb-5">Explore the best MDB template in the market in a short 1-minute video.</p>

    <div class="row align-items-center">

      <div class="col-lg-6 mb-4">
        <div class="view z-depth-1-half rounded">
          <img class="rounded img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20(6).jpg" alt="Video title">
          <div class="mask flex-center rgba-black-light">
            <a id="play" class="btn-floating btn-primary btn-lg" data-toggle="modal" data-target="#modal1"><i class="fas fa-play"></i></a>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-4">

        <ol class="step pl-0">
          <li class="step-element pb-0">
            <div class="step-number">
              <span class="number">1</span>
            </div>
            <div class="step-excerpt">
              <h6 class="font-weight-bold dark-grey-text mb-3">Write your requirements</h6>
              <p class="text-muted">Think the or organization same proposal to affected heard reclined in be it reassuring.</p>
            </div>
          </li>
          <li class="step-element pb-0">
            <div class="step-number">
              <span class="number">2</span>
            </div>
            <div class="step-excerpt">
              <h6 class="font-weight-bold dark-grey-text mb-3">Sign the contract</h6>
              <p class="text-muted">Think the or organization same proposal to affected heard reclined in be it reassuring.</p>
            </div>
          </li>
          <li class="step-element pb-0">
            <div class="step-number">
              <span class="number">3</span>
            </div>
            <div class="step-excerpt">
              <h6 class="font-weight-bold dark-grey-text mb-3">We start developing</h6>
              <p class="text-muted">Think the or organization same proposal to affected heard reclined in be it reassuring.</p>
            </div>
          </li>
        </ol>

      </div>

    </div>
    
  </section>
  <!-- Section -->

</div>
            `
        ) : null
        if (window.selected_timeline_component) {
            window.selected_timeline_component.set('script', function () {
                $('#play').on('click', function (e) {
                    e.preventDefault();
                    $("#player")[0].src += "?autoplay=1";
                    $('#player').show();
                    $('#video-cover').hide();
                })
                $('#modal1').on('hidden.bs.modal', function (e) {
                    $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
                });
            })
            window.timeline_designs_first_init.view.updateScript()
        }
    })
    /*2*/
    $('#sidebar-timeline-designs .app-content--sidebar__content').append(
        `
            <button id="1399816" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                 <img data-src="https://mdbootstrap.com/img/blocks/steps/2.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/steps/2.png">
            <a href="#">
              <div class="mask rgba-blue-slight waves-effect waves-light"></div>
            </a>
            </button>
        `
    )
    $('#sidebar-timeline-designs .app-content--sidebar__content #1399816').click(function () {
        window.selected_timeline_component ? window.selected_timeline_component.components(
            `
            <div class="container z-depth-1 my-5 py-5 px-4 px-lg-0">

  <!-- Section -->
  <section>
    
    <style>
      .timeline {
        position: relative;
        list-style: none;
        padding: 1rem 0;
        margin: 0;
      }

      .timeline::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        margin-left: -1px;
        background-color: #50a1ff;
      }

      .timeline-element {
        position: relative;
        width: 50%;
        padding: 1rem 0;
        padding-right: 2.5rem;
        text-align: right;
      }

      .timeline-element::before {
        content: '';
        position: absolute;
        right: -8px;
        top: 1.35rem;
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid #50a1ff;
        background-color: #fff;
      }

      .timeline-element:nth-child(even)::before {
        right: auto;
        left: -8px;
      }

      .timeline-element:nth-child(even) {
        margin-left: 50%;
        padding-left: 2.5rem;
        padding-right: 0;
        text-align: left;
      }

      @media (max-width: 767.98px) {
        .timeline::before {
          left: 8px;
        }
      }

      @media (max-width: 767.98px) {
        .timeline-element {
          width: 100%;
          text-align: left;
          padding-left: 2.5rem;
          padding-right: 0;
        }
      }

      @media (max-width: 767.98px) {
        .timeline-element::before {
          top: 1.25rem;
          left: 1px;
        }
      }

      @media (max-width: 767.98px) {
        .timeline-element:nth-child(even) {
          margin-left: 0rem;
        }
      }

      @media (max-width: 767.98px) {
        .timeline-element {
          width: 100%;
          text-align: left;
          padding-left: 2.5rem;
          padding-right: 0;
        }
      }

      @media (max-width: 767.98px) {
        .timeline-element:nth-child(even)::before {
          left: 1px;
        }
      }

      @media (max-width: 767.98px) {
        .timeline-element::before {
          top: 1.25rem;
        }
      }
    </style>
    
    <h3 class="font-weight-bold text-center dark-grey-text pb-2">Our History</h3>
    <hr class="w-header my-4">
    <p class="lead text-center text-muted pt-2 mb-5">MDB founded to help startups, and it still shapes the way we work today.</p>
    
    <div class="row">
      <div class="col-lg-8 mx-auto">

        <ol class="timeline">
          <li class="timeline-element">
            <h5 class="font-weight-bold dark-grey-text mb-3">Launched our website</h5>
            <p class="grey-text font-small"><time datetime="2017-02-08">08 Feb 2017</time></p>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam adipisci reiciendis porro natus laudantium similique. 
              Explicabo amet ipsum fugiat aliquam alias.</p>
          </li>

          <li class="timeline-element">
            <h5 class="font-weight-bold dark-grey-text mb-3">Got the first 100 users</h5>
            <p class="grey-text font-small"><time datetime="2017-08-17">17 Aug 2017</time></p>
            <p><img class="img-fluid z-depth-1-half rounded" src="https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20(6).jpg" alt="..."></p>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam adipisci reiciendis porro natus laudantium similique. 
              Explicabo amet ipsum fugiat aliquam alias.</p>
          </li>

          <li class="timeline-element">
            <h5 class="font-weight-bold dark-grey-text mb-3">Raised $1.4 million in seed funding</h5>
            <p class="grey-text font-small"><time datetime="2018-03-26">26 Mar 2019</time></p>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam adipisci reiciendis porro natus laudantium similique. 
              Explicabo amet ipsum fugiat aliquam alias.</p>
          </li>

          <li class="timeline-element">
            <h5 class="font-weight-bold dark-grey-text mb-3">Team size increased to 20</h5>
            <p class="grey-text font-small"><time datetime="2018-04-14">14 Apr 2019</time></p>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam adipisci reiciendis porro natus laudantium similique. 
              Explicabo amet ipsum fugiat aliquam alias.</p>
          </li>
        </ol>

      </div>
    </div>
    
  </section>
  <!-- Section -->
  
</div>
            `
        ) : null
    })
    sidebar_timeline.classList.add('visible')
}

const hideGalleryDesigns = () => {
    window.selected_gallery_component = null;
    sidebar_gallery.classList.remove('visible')
}

const initGalleryDesigns = () => {
    if (!window.gallery_designs_first_init) {
        sidebar_gallery.classList.add('visible')
        return
    }
    window.gallery_designs_first_init = false
    /*1*/
    // $('#sidebar-gallery-designs .app-content--sidebar__content').append(
    //     `
    //         <button id="1374185" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
    //             <img data-src="https://mdbootstrap.com/img/blocks/gallery/2.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/gallery/2.png">
    //         <a href="#">
    //           <div class="mask rgba-blue-slight waves-effect waves-light"></div>
    //         </a>
    //         </button>
    //     `
    // )
//     $('#sidebar-gallery-designs .app-content--sidebar__content #1374185').click(function () {
//         window.selected_gallery_component ? window.selected_gallery_component.components(
//             `
//             <div class="container my-5 px-5 pt-5 pb-4 z-depth-1">
//
//
//   <!--Section: Content-->
//   <section class="dark-grey-text">
//
//     <style>
//       .d-grid {
//         display: grid;
//         grid-template-columns: repeat(2, 1fr);
//         grid-auto-rows: 100px;
//         grid-gap: 7px;
//       }
//
//       .item {
//         position: relative;
//       }
//
//       .item:nth-child(1) {
//         grid-column: 1 / 2;
//         grid-row: 1 / 4;
//       }
//
//       .item:nth-child(2) {
//         grid-column: 2;
//         grid-row: 0 / 3;
//       }
//
//       .item:nth-child(3) {
//         grid-column: 2;
//         grid-row: 2 / 3;
//       }
//
//       .item:nth-child(4) {
//         grid-column: 2;
//         grid-row: 3 / 3;
//       }
//
//       .item a {
//         position: absolute;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         top: 0;
//         overflow: hidden;
//       }
//
//       .item img {
//         height: 100%;
//         width: 100%;
//         object-fit: cover;
//       }
//     </style>
//
//     <div class="row align-items-center">
//
//       <div class="col-lg-6 mb-4">
//         <h2 class="font-weight-normal mb-4">Lovely place to work</h2>
//         <p class="lead text-muted">Beautifully designed by best interior designers for the best web designers</p>
//         <p class="text-muted">We can combine beautiful, modern designs with clean, functional. And best of all, we
//           are super passionate
//           about our work. Thought does cognitive into follow and rationale annoyed.</p>
//       </div>
//
//       <div class="col-lg-6 mb-4">
//
//         <div id="mdb-lightbox-ui"></div>
//
//         <div class="d-grid mdb-lightbox">
//           <figure class="item">
//             <a href="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg"
//               class="z-depth-1 rounded" data-size="1600x1067">
//               <img src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg" />
//             </a>
//           </figure>
//           <figure class="item">
//             <a href="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(11).jpg"
//               class="z-depth-1 rounded" data-size="1600x1067">
//               <img src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(11).jpg" />
//             </a>
//           </figure>
//           <figure class="item">
//             <a href="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(12).jpg"
//               class="z-depth-1 rounded" data-size="1600x1067">
//               <img src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(12).jpg" />
//             </a>
//           </figure>
//           <figure class="item">
//             <a href="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(13).jpg"
//               class="z-depth-1 rounded" data-size="1600x1067">
//               <img src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(13).jpg" />
//             </a>
//           </figure>
//         </div>
//
//       </div>
//
//     </div>
//
//   </section>
//   <!--Section: Content-->
//
//
// </div>
//             `
//         ) : null
//         if (window.selected_gallery_component) {
//             window.selected_gallery_component.set('script', function () {
//                 $(function () {
//                     $("#mdb-lightbox-ui").load("https://mdbootstrap.com/wp-content/themes/mdbootstrap4/mdb-addons/mdb-lightbox-ui.html");
//                 });
//             })
//             window.selected_gallery_component.view.updateScript()
//         }
//     })
    /*2*/
    $('#sidebar-gallery-designs .app-content--sidebar__content').append(
        `
            <button id="1374213" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                <img data-src="https://mdbootstrap.com/img/blocks/gallery/3.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/gallery/3.png">
            <a href="#">
              <div class="mask rgba-blue-slight waves-effect waves-light"></div>
            </a>
            </button>
        `
    )
    $('#sidebar-gallery-designs .app-content--sidebar__content #1374213').click(function () {
        window.selected_gallery_component ? window.selected_gallery_component.components(
            `
            <div class="container my-5">

  <!--Section: Content-->
  <section class="text-center dark-grey-text mb-5">
    
    <h3 class="font-weight-bold pb-5 text-center">Gallery</h3>

    <div class="row">
      <div class="col-md-12">

        <!--Carousel Wrapper-->
        <div id="carousel-example-1z" class="carousel slide" data-ride="carousel">
          <!--Indicators-->
          <ol class="carousel-indicators">
            <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-1z" data-slide-to="1"></li>
            <li data-target="#carousel-example-1z" data-slide-to="2"></li>
          </ol>
          <!--/.Indicators-->
          <!--Slides-->
          <div class="carousel-inner" role="listbox">
            <!--First slide-->
            <div class="carousel-item active">
              <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg"
                alt="First slide">
            </div>
            <!--/First slide-->
            <!--Second slide-->
            <div class="carousel-item">
              <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(11).jpg"
                alt="Second slide">
            </div>
            <!--/Second slide-->
            <!--Third slide-->
            <div class="carousel-item">
              <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(12).jpg"
                alt="Third slide">
            </div>
            <!--/Third slide-->
          </div>
          <!--/.Slides-->
          <!--Controls-->
          <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          <!--/.Controls-->
        </div>
        <!--/.Carousel Wrapper-->

      </div>
    </div>

  </section>
  <!--Section: Content-->


</div>
            `
        ) : null
        if (window.selected_gallery_component) {
            window.selected_gallery_component.set('script', function () {
                $('.carousel').carousel({
                    interval: 2000
                })
            })
            window.selected_gallery_component.view.updateScript()
        }
    })
    /*3*/
    $('#sidebar-gallery-designs .app-content--sidebar__content').append(
        `
            <button id="1373639" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                <img data-src="https://mdbootstrap.com/img/blocks/gallery/1.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/gallery/1.png">
            <a href="#">
              <div class="mask rgba-blue-slight waves-effect waves-light"></div>
            </a>
            </button>
        `
    )
    $('#sidebar-gallery-designs .app-content--sidebar__content #1373639').click(function () {
        window.selected_gallery_component ? window.selected_gallery_component.components(
            `
            <div class="container my-5">


  <!--Section: Content-->
  <section class="text-center dark-grey-text">
    
    <style>
      .carousel-multi-item.v-2 .carousel-inner .carousel-item.active,
      .carousel-multi-item.v-2 .carousel-item-next,
      .carousel-multi-item.v-2 .carousel-item-prev {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex; }
      .carousel-multi-item.v-2 .carousel-item-right.active,
      .carousel-multi-item.v-2 .carousel-item-next {
        -webkit-transform: translateX(50%);
        -ms-transform: translateX(50%);
        transform: translateX(50%); }
      .carousel-multi-item.v-2 .carousel-item-left.active,
      .carousel-multi-item.v-2 .carousel-item-prev {
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%); }
      .carousel-multi-item.v-2 .carousel-item-right,
      .carousel-multi-item.v-2 .carousel-item-left {
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0); }
    </style>
    
    <h3 class="font-weight-bold pb-4 mb-0 text-center">Gallery</h3>

    <div class="row">
      <div class="col-md-12">

        <div id="carousel-example-multi" class="carousel slide carousel-multi-item v-2" data-ride="carousel">

          <!--Controls-->
          <div class="controls-top">
            <a class="btn-floating bg-transparent z-depth-0 m-3 btn-lg" href="#carousel-example-multi" data-slide="prev"><i class="dark-grey-text fas fa-chevron-left"></i></a>
            <a class="btn-floating bg-transparent z-depth-0 m-3 btn-lg" href="#carousel-example-multi" data-slide="next"><i class="dark-grey-text fas fa-chevron-right"></i></a>
          </div>
          <!--/.Controls-->

          <div class="carousel-inner mt-4" role="listbox">

            <div class="carousel-item active">
              <div class="col-12 col-md-6 mb-4 mx-auto">
                <div class="view rounded z-depth-1-half">
                  <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(150).jpg" class="img-fluid rounded" alt="Sample image">
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-12 col-md-6 mb-4 mx-auto">
                <div class="view rounded z-depth-1-half">
                  <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(146).jpg" class="img-fluid rounded" alt="Sample image">
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-12 col-md-6 mb-4 mx-auto">
                <div class="view rounded z-depth-1-half">
                  <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(138).jpg" class="img-fluid rounded" alt="Sample image">
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-12 col-md-6 mx-auto">
                <div class="view rounded z-depth-1-half">
                  <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(133).jpg" class="img-fluid rounded" alt="Sample image">
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-12 col-md-6 mb-4 mx-auto">
                <div class="view rounded z-depth-1-half">
                  <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(148).jpg" class="img-fluid rounded" alt="Sample image">
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-12 col-md-6 mb-4 mx-auto">
                <div class="view rounded z-depth-1-half">
                  <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(131).jpg" class="img-fluid rounded" alt="Sample image">
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>

  </section>
  <!--Section: Content-->


</div>
            `
        ) : null
        if (window.selected_gallery_component) {
            window.selected_gallery_component.set('script', function () {
                $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function () {
                    var next = $(this).next();
                    if (!next.length) {
                        next = $(this).siblings(':first');
                    }
                    next.children(':first-child').clone().appendTo($(this));

                    for (var i = 0; i < 4; i++) {
                        next = next.next();
                        if (!next.length) {
                            next = $(this).siblings(':first');
                        }
                        next.children(':first-child').clone().appendTo($(this));
                    }
                });
            })
            window.selected_gallery_component.view.updateScript()
        }
    })
    sidebar_gallery.classList.add('visible')
}

const hideVideoDesigns = () => {
    window.selected_video_component = null;
    sidebar_video.classList.remove('visible')
}

const initVideoDesigns = () => {
    if (!window.video_designs_first_init) {
        sidebar_video.classList.add('visible')
        return
    }
    window.video_designs_first_init = false
    /*1*/
    $('#sidebar-video-designs .app-content--sidebar__content').append(
        `
            <button id="1404971" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                <img data-src="https://mdbootstrap.com/img/blocks/video/1.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/video/1.png">
            <a href="#">
              <div class="mask rgba-blue-slight waves-effect waves-light"></div>
            </a>
            </button>
        `
    )
    $('#sidebar-video-designs .app-content--sidebar__content #1404971').click(function () {
        window.selected_video_component ? window.selected_video_component.components(
            `
            <div class="container-fluid mt-3 mb-5">

  <!-- Section -->
  <section class="bg-primary z-depth-1">

    <!-- Modal -->
    <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
            <iframe id="player" class="embed-responsive-item" 
            src="https://www.youtube.com/embed/7MUISDJ5ZZ4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>

    <div class="row no-gutters">

      <div class="col-lg-6 order-md-2">
        <div class="view">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/img%20(152).jpg" alt="Video title">
          <div class="mask flex-center rgba-black-light">
            <a id="play" class="btn-floating btn-danger btn-lg" data-toggle="modal" data-target="#modal1"><i class="fas fa-play"></i></a>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mx-auto d-flex align-items-center text-white">
        <div class="px-4 py-4 py-lg-0">
          <h3 class="font-weight-normal mb-4">Give a Fresh Design to Your MDB</h3>
          <p class="mb-0">Fresh fellow even the whole is work outcome them. They original on mountains, drew the
            support time. The of to graduate. Into to is the to she at return understand every in there transmitting
            you've he the was and in finger.</p>
        </div>
      </div>

    </div>
    
  </section>
  <!-- Section -->

</div>
            `
        ) : null
        if (window.selected_video_component) {
            window.selected_video_component.set('script', function () {
                $('#play').on('click', function (e) {
                    e.preventDefault();
                    $("#player")[0].src += "?autoplay=1";
                    $('#player').show();
                    $('#video-cover').hide();
                })
                $('#modal1').on('hidden.bs.modal', function (e) {
                    $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
                });
            })
            window.selected_video_component.view.updateScript()
        }

    })
    /*2*/
    $('#sidebar-video-designs .app-content--sidebar__content').append(
        `
            <button id="1404974" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                <img data-src="https://mdbootstrap.com/img/blocks/video/2.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/video/2.png">
            <a href="#">
              <div class="mask rgba-blue-slight waves-effect waves-light"></div>
            </a>
            </button>
        `
    )
    $('#sidebar-video-designs .app-content--sidebar__content #1404974').click(function () {
        window.selected_video_component ? window.selected_video_component.components(
            `
            <div class="container z-depth-1 my-5 py-5">
  

  <!-- Section: Block Content -->
  <section>

    <!-- Modal -->
    <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
            <iframe id="player" class="embed-responsive-item" src="https://www.youtube.com/embed/7MUISDJ5ZZ4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>

    <h6 class="font-weight-bold text-center grey-text text-uppercase small mb-4">video</h6>
    <h3 class="font-weight-bold text-center dark-grey-text pb-2">Explore</h3>
    <hr class="w-header my-4">
    <p class="lead text-center text-muted pt-2 mb-5">Explore the best MDB template in the market in a short 1-minute video.</p>

    <div class="row">
      <div class="col-md-8 mx-auto mb-4">

          <div class="view z-depth-1 rounded">
            <img class="rounded img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg" alt="Video title">
            <div class="mask flex-center rgba-white-light">
              <a id="play" class="btn-floating btn-danger btn-lg" data-toggle="modal" data-target="#modal1"><i class="fas fa-play"></i></a>
            </div>
          </div>

      </div>
    </div>

  </section>
  <!-- Section: Block Content -->

  
</div>
            `
        ) : null
        if (window.selected_video_component) {
            window.selected_video_component.set('script', function () {
                $('#play').on('click', function (e) {
                    e.preventDefault();
                    $("#player")[0].src += "?autoplay=1";
                    $('#player').show();
                    $('#video-cover').hide();
                })
                $('#modal1').on('hidden.bs.modal', function (e) {
                    $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
                });
            })
            window.selected_video_component.view.updateScript()
        }
    })
    /*3*/
    $('#sidebar-video-designs .app-content--sidebar__content').append(
        `
            <button id="1404975" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                <img data-src="https://mdbootstrap.com/img/blocks/video/3.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/video/3.png">
            <a href="#">
              <div class="mask rgba-blue-slight waves-effect waves-light"></div>
            </a>
            </button>
        `
    )
    $('#sidebar-video-designs .app-content--sidebar__content #1404975').click(function () {
        window.selected_video_component ? window.selected_video_component.components(
            `
            <div class="container-fluid mt-3 mb-5">

  <section style="background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20(1).jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
    
    <!-- Modal -->
    <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
            <iframe id="player" class="embed-responsive-item" src="https://www.youtube.com/embed/7MUISDJ5ZZ4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>

    <div class="mask rgba-black-strong py-5">

      <div class="container text-center my-5">

        <h3 class="font-weight-bold text-center white-text pb-2">Watch Video</h3>
        <hr class="w-header hr-light my-4">
        <p class="lead text-center white-text pt-2 mb-5">Explore the best MDB template in the market in a short 1-minute video.</p>

        <a id="play" class="btn-floating btn-cyan btn-lg" data-toggle="modal" data-target="#modal1"><i class="fas fa-play"></i></a>

      </div>

    </div>

  </section>

</div>
            `
        ) : null
        if (window.selected_video_component) {
            window.selected_video_component.set('script', function () {
                $('#play').on('click', function (e) {
                    e.preventDefault();
                    $("#player")[0].src += "?autoplay=1";
                    $('#player').show();
                    $('#video-cover').hide();
                })
                $('#modal1').on('hidden.bs.modal', function (e) {
                    $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
                });
            })
            window.selected_video_component.view.updateScript()
        }
    })
    sidebar_video.classList.add('visible')
}

/*TODO*/
const hideAccordionDesigns = () => {
    window.selected_accordion_component = null;
    sidebar_accordion.classList.remove('visible')
}

const initAccordionDesigns = () => {
    if (!window.accordion_designs_first_init) {
        sidebar_accordion.classList.add('.visible')
        return
    }
    window.accordion_designs_first_init = false
    /*1*/
    $('#sidebar-accordion-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('#sidebar-accordion-designs .app-content--sidebar__content #213').click(function () {
        window.selected_accordion_component ? window.selected_accordion_component.components(
            `
            `
        ) : null
    })
    /*2*/
    $('#sidebar-accordion-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('#sidebar-accordion-designs .app-content--sidebar__content #213').click(function () {
        window.selected_accordion_component ? window.selected_accordion_component.components(
            `
            `
        ) : null
    })
    /*3*/
    $('#sidebar-accordion-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('#sidebar-accordion-designs .app-content--sidebar__content #213').click(function () {
        window.selected_accordion_component ? window.selected_accordion_component.components(
            `
            `
        ) : null
    })
    /*4*/
    $('#sidebar-accordion-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('#sidebar-accordion-designs .app-content--sidebar__content #213').click(function () {
        window.selected_accordion_component ? window.selected_accordion_component.components(
            `
            `
        ) : null
    })
    /*5*/
    $('#sidebar-accordion-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('#sidebar-accordion-designs .app-content--sidebar__content #213').click(function () {
        window.selected_accordion_component ? window.selected_accordion_component.components(
            `
            `
        ) : null
    })
    /*6*/
    $('#sidebar-accordion-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('#sidebar-accordion-designs .app-content--sidebar__content #213').click(function () {
        window.selected_accordion_component ? window.selected_accordion_component.components(
            `
            `
        ) : null
    })
    /*7*/
    $('#sidebar-accordion-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('#sidebar-accordion-designs .app-content--sidebar__content #213').click(function () {
        window.selected_accordion_component ? window.selected_accordion_component.components(
            `
            `
        ) : null
    })
}

const hideMapDesigns = () => {
    window.selected_map_component = null;
    sidebar_map.classList.remove('visible')
}

const initMapDesigns = () => {
    if (!window.map_designs_first_init) {
        sidebar_map.classList.add('visible')
        return
    }
    window.map_designs_first_init = false
    /*1*/
    $('#sidebar-map-designs .app-content--sidebar__content').append(
        `
            <button id="1378989" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                <img data-src="https://mdbootstrap.com/img/blocks/maps/1.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/maps/1.png">
            <a href="#">
              <div class="mask rgba-blue-slight waves-effect waves-light"></div>
            </a>
            </button>
        `
    )
    $('#sidebar-map-designs .app-content--sidebar__content #1378989').click(function () {
        window.selected_map_component ? window.selected_map_component.components(
            `
            <div class="container-fluid mt-3 mb-5">

  <!-- Section: Block Content -->
  <section class="mb-4">

    <style>
      .map-container {
        overflow: hidden;
        position: relative;
        height: 0;
      }

      .map-container iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
      }
    </style>

    <!-- Google Maps -->
    <div id="full-width-map" class="z-depth-1-half map-container" style="height: 500px">
      <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
        style="border:0" allowfullscreen></iframe>
    </div>
    <!-- Google Maps -->

  </section>
  <!-- Section: Block Content -->

</div>
            `
        ) : null
    })
    /*2*/
    $('#sidebar-map-designs .app-content--sidebar__content').append(
        `
            <button id="1378991" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                 <img data-src="https://mdbootstrap.com/img/blocks/maps/2.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/maps/2.png">
            <a href="#">
              <div class="mask rgba-blue-slight waves-effect waves-light"></div>
            </a>
            </button>
        `
    )
    $('#sidebar-map-designs .app-content--sidebar__content #1378991').click(function () {
        window.selected_map_component ? window.selected_map_component.components(
            `
            <div class="container my-5">

  
  <!-- Section: Block Content -->
  <section class="mb-4">

    <style>
      .map-container {
        overflow: hidden;
        position: relative;
        height: 0;
      }

      .map-container iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
      }
    </style>

    <div class="card">

      <div class="row my-md-5 py-md-4 p-3">
        <div class="col-md-10 mx-auto">

          <!-- Google Maps -->
          <div id="map-within-card" class="map-container" style="height: 400px">
            <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
              style="border:0" allowfullscreen></iframe>
          </div>
          <!-- Google Maps -->

        </div>
      </div>

    </div>

  </section>
  <!-- Section: Block Content -->

  
</div>
            `
        ) : null
    })
    /*3*/
    $('#sidebar-map-designs .app-content--sidebar__content').append(
        `
            <button id="1378993" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                 <img data-src="https://mdbootstrap.com/img/blocks/maps/3.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/maps/3.png">
            <a href="#">
              <div class="mask rgba-blue-slight waves-effect waves-light"></div>
            </a>
            </button>
        `
    )
    $('#sidebar-map-designs .app-content--sidebar__content #1378993').click(function () {
        window.selected_map_component ? window.selected_map_component.components(
            `
            <div class="container-fluid mt-3 mb-5">

  <!-- Section: Block Content -->
  <section class="mb-4">

    <style>
      .map-container {
        overflow: hidden;
        position: relative;
        height: 0;
      }

      .map-container iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
      }
    </style>

    <div class="card">

      <div class="row">
        <div class="col-md-6">

          <!-- Google Maps -->
          <div id="map-within-card-2" class="map-container rounded-left" style="height: 400px">
            <iframe src="https://maps.google.com/maps?q=Seattle&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
              style="border:0" allowfullscreen></iframe>
          </div>
          <!-- Google Maps -->

        </div>

        <div class="col-10 col-md-4 mx-auto align-self-center py-4">

          <h6 class="font-weight-bold grey-text text-uppercase small">Head Office</h6>
          <h5 class="font-weight-normal mb-4">Seattle, WA</h5>
          <p class="text-muted font-weight-light">2651 Main Street, Suit 124<br>Seattle, WA, 98101</p>
          <p class="text-muted font-weight-light mb-0">Phone: +1 987 123 6548<br>Email: hello@thetheme.io</p>

        </div>
      </div>

    </div>

  </section>
  <!-- Section: Block Content -->

</div>
            `
        ) : null
    })
    sidebar_map.classList.add('visible')
}

const hidePricingDesigns = () => {
    window.selected_pricing_component = null;
    sidebar_pricing.classList.remove('visible')
}

const initPricingDesigns = () => {
    if (!window.pricing_designs_first_init) {
        sidebar_pricing.classList.add('.visible')
        return
    }
    window.pricing_designs_first_init = false
    /*1*/
    $('#sidebar-pricing-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-pricing-designs .app-content--sidebar__content #213').click(function () {
        window.selected_pricing_component ? window.selected_pricing_component.components(
            `
            `
        ) : null
    })
    /*2*/
    $('#sidebar-pricing-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-pricing-designs .app-content--sidebar__content #213').click(function () {
        window.selected_pricing_component ? window.selected_pricing_component.components(
            `
            `
        ) : null
    })
    /*3*/
    $('#sidebar-pricing-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-pricing-designs .app-content--sidebar__content #213').click(function () {
        window.selected_pricing_component ? window.selected_pricing_component.components(
            `
            `
        ) : null
    })
    /*4*/
    $('#sidebar-pricing-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-pricing-designs .app-content--sidebar__content #213').click(function () {
        window.selected_pricing_component ? window.selected_pricing_component.components(
            `
            `
        ) : null
    })
    /*5*/
    $('#sidebar-pricing-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-pricing-designs .app-content--sidebar__content #213').click(function () {
        window.selected_pricing_component ? window.selected_pricing_component.components(
            `
            `
        ) : null
    })
    /*6*/
    $('#sidebar-pricing-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-pricing-designs .app-content--sidebar__content #213').click(function () {
        window.selected_pricing_component ? window.selected_pricing_component.components(
            `
            `
        ) : null
    })
    /*7*/
    $('#sidebar-pricing-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-pricing-designs .app-content--sidebar__content #213').click(function () {
        window.selected_pricing_component ? window.selected_pricing_component.components(
            `
            `
        ) : null
    })
    /*8*/
    $('#sidebar-pricing-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-pricing-designs .app-content--sidebar__content #213').click(function () {
        window.selected_pricing_component ? window.selected_pricing_component.components(
            `
            `
        ) : null
    })
    /*9*/
    $('#sidebar-pricing-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-pricing-designs .app-content--sidebar__content #213').click(function () {
        window.selected_pricing_component ? window.selected_pricing_component.components(
            `
            `
        ) : null
    })
    /*10*/
    $('#sidebar-pricing-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-pricing-designs .app-content--sidebar__content #213').click(function () {
        window.selected_pricing_component ? window.selected_pricing_component.components(
            `
            `
        ) : null
    })
    /*11*/
    $('#sidebar-pricing-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-pricing-designs .app-content--sidebar__content #213').click(function () {
        window.selected_pricing_component ? window.selected_pricing_component.components(
            `
            `
        ) : null
    })
    /*12*/
    $('#sidebar-pricing-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-pricing-designs .app-content--sidebar__content #213').click(function () {
        window.selected_pricing_component ? window.selected_pricing_component.components(
            `
            `
        ) : null
    })
    /*13*/
    $('#sidebar-pricing-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-pricing-designs .app-content--sidebar__content #213').click(function () {
        window.selected_pricing_component ? window.selected_pricing_component.components(
            `
            `
        ) : null
    })
    /*14*/
    $('#sidebar-pricing-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-pricing-designs .app-content--sidebar__content #213').click(function () {
        window.selected_pricing_component ? window.selected_pricing_component.components(
            `
            `
        ) : null
    })
}

const hideCustomerDesigns = () => {
    window.selected_customers_component = null;
    sidebar_customers.classList.remove('visible')
}

const initCustomerDesigns = () => {
    if (!window.customers_designs_first_init) {
        sidebar_customers.classList.add('.visible')
        return
    }
    window.customers_designs_first_init = false
    /*1*/
    $('#sidebar-customers-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-customers-designs .app-content--sidebar__content #213').click(function () {
        window.selected_customers_component ? window.selected_customers_component.components(
            `
            `
        ) : null
    })
    /*2*/
    $('#sidebar-customers-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-customers-designs .app-content--sidebar__content #213').click(function () {
        window.selected_customers_component ? window.selected_customers_component.components(
            `
            `
        ) : null
    })
    /*3*/
    $('#sidebar-customers-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-customers-designs .app-content--sidebar__content #213').click(function () {
        window.selected_customers_component ? window.selected_customers_component.components(
            `
            `
        ) : null
    })
}

const hideContentDesigns = () => {
    window.selected_content_component = null;
    sidebar_content.classList.remove('visible')
}

const initContentDesigns = () => {
    if (!window.content_designs_first_init) {
        sidebar_content.classList.add('.visible')
        return
    }
    window.content_designs_first_init = false
    /*1*/
    $('#sidebar-content-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-content-designs .app-content--sidebar__content #213').click(function () {
        window.selected_content_component ? window.selected_content_component.components(
            `
            `
        ) : null
    })
    /*2*/
    $('#sidebar-content-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-content-designs .app-content--sidebar__content #213').click(function () {
        window.selected_content_component ? window.selected_content_component.components(
            `
            `
        ) : null
    })
    /*3*/
    $('#sidebar-content-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-content-designs .app-content--sidebar__content #213').click(function () {
        window.selected_content_component ? window.selected_content_component.components(
            `
            `
        ) : null
    })
    /*4*/
    $('#sidebar-content-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-content-designs .app-content--sidebar__content #213').click(function () {
        window.selected_content_component ? window.selected_content_component.components(
            `
            `
        ) : null
    })
    /*5*/
    $('#sidebar-content-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-content-designs .app-content--sidebar__content #213').click(function () {
        window.selected_content_component ? window.selected_content_component.components(
            `
            `
        ) : null
    })
    /*6*/
    $('#sidebar-content-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-content-designs .app-content--sidebar__content #213').click(function () {
        window.selected_content_component ? window.selected_content_component.components(
            `
            `
        ) : null
    })
    /*7*/
    $('#sidebar-content-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-content-designs .app-content--sidebar__content #213').click(function () {
        window.selected_content_component ? window.selected_content_component.components(
            `
            `
        ) : null
    })
    /*8*/
    $('#sidebar-content-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-content-designs .app-content--sidebar__content #213').click(function () {
        window.selected_content_component ? window.selected_content_component.components(
            `
            `
        ) : null
    })
    /*9*/
    $('#sidebar-content-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-content-designs .app-content--sidebar__content #213').click(function () {
        window.selected_content_component ? window.selected_content_component.components(
            `
            `
        ) : null
    })
    /*10*/
    $('#sidebar-content-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-content-designs .app-content--sidebar__content #213').click(function () {
        window.selected_content_component ? window.selected_content_component.components(
            `
            `
        ) : null
    })
    /*11*/
    $('#sidebar-content-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-content-designs .app-content--sidebar__content #213').click(function () {
        window.selected_content_component ? window.selected_content_component.components(
            `
            `
        ) : null
    })
    /*12*/
    $('#sidebar-content-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-content-designs .app-content--sidebar__content #213').click(function () {
        window.selected_content_component ? window.selected_content_component.components(
            `
            `
        ) : null
    })
    /*13*/
    $('#sidebar-content-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-content-designs .app-content--sidebar__content #213').click(function () {
        window.selected_content_component ? window.selected_content_component.components(
            `
            `
        ) : null
    })
}

const hideCoverDesigns = () => {
    window.selected_cover_component = null;
    sidebar_cover.classList.remove('visible')
}

const initCoverDesigns = () => {
    if (!window.cover_designs_first_init) {
        sidebar_cover.classList.add('.visible')
        return
    }
    window.cover_designs_first_init = false
    /*1*/
    $('#sidebar-cover-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-cover-designs .app-content--sidebar__content #213').click(function () {
        window.selected_cover_component ? window.selected_cover_component.components(
            `
            `
        ) : null
    })
    /*2*/
    $('#sidebar-cover-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-cover-designs .app-content--sidebar__content #213').click(function () {
        window.selected_cover_component ? window.selected_cover_component.components(
            `
            `
        ) : null
    })
    /*3*/
    $('#sidebar-cover-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-cover-designs .app-content--sidebar__content #213').click(function () {
        window.selected_cover_component ? window.selected_cover_component.components(
            `
            `
        ) : null
    })
    /*4*/
    $('#sidebar-cover-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-cover-designs .app-content--sidebar__content #213').click(function () {
        window.selected_cover_component ? window.selected_cover_component.components(
            `
            `
        ) : null
    })
    /*5*/
    $('#sidebar-cover-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-cover-designs .app-content--sidebar__content #213').click(function () {
        window.selected_cover_component ? window.selected_cover_component.components(
            `
            `
        ) : null
    })
    /*6*/
    $('#sidebar-cover-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-cover-designs .app-content--sidebar__content #213').click(function () {
        window.selected_cover_component ? window.selected_cover_component.components(
            `
            `
        ) : null
    })
    /*7*/
    $('#sidebar-cover-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-cover-designs .app-content--sidebar__content #213').click(function () {
        window.selected_cover_component ? window.selected_cover_component.components(
            `
            `
        ) : null
    })
    /*8*/
    $('#sidebar-cover-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-cover-designs .app-content--sidebar__content #213').click(function () {
        window.selected_cover_component ? window.selected_cover_component.components(
            `
            `
        ) : null
    })
    /*9*/
    $('#sidebar-cover-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-cover-designs .app-content--sidebar__content #213').click(function () {
        window.selected_cover_component ? window.selected_cover_component.components(
            `
            `
        ) : null
    })
    /*10*/
    $('#sidebar-cover-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-cover-designs .app-content--sidebar__content #213').click(function () {
        window.selected_cover_component ? window.selected_cover_component.components(
            `
            `
        ) : null
    })
    /*11*/
    $('#sidebar-cover-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-cover-designs .app-content--sidebar__content #213').click(function () {
        window.selected_cover_component ? window.selected_cover_component.components(
            `
            `
        ) : null
    })
}

const hideNavbarDesigns = () => {
    window.selected_navbar_component = null;
    sidebar_navbar.classList.remove('visible')
}

const initNavbarDesigns = () => {
    if (!window.navbar_designs_first_init) {
        sidebar_navbar.classList.add('.visible')
        return
    }
    window.navbar_designs_first_init = false
    /*1*/
    $('#sidebar-navbar-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-navbar-designs .app-content--sidebar__content #213').click(function () {
        window.selected_navbar_component ? window.selected_navbar_component.components(
            `
            `
        ) : null
    })
    /*2*/
    $('#sidebar-navbar-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-navbar-designs .app-content--sidebar__content #213').click(function () {
        window.selected_navbar_component ? window.selected_navbar_component.components(
            `
            `
        ) : null
    })
    /*3*/
    $('#sidebar-navbar-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-navbar-designs .app-content--sidebar__content #213').click(function () {
        window.selected_navbar_component ? window.selected_navbar_component.components(
            `
            `
        ) : null
    })
    /*4*/
    $('#sidebar-navbar-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-navbar-designs .app-content--sidebar__content #213').click(function () {
        window.selected_navbar_component ? window.selected_navbar_component.components(
            `
            `
        ) : null
    })
    /*5*/
    $('#sidebar-navbar-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-navbar-designs .app-content--sidebar__content #213').click(function () {
        window.selected_navbar_component ? window.selected_navbar_component.components(
            `
            `
        ) : null
    })
    /*6*/
    $('#sidebar-navbar-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-navbar-designs .app-content--sidebar__content #213').click(function () {
        window.selected_navbar_component ? window.selected_navbar_component.components(
            `
            `
        ) : null
    })
    /*7*/
    $('#sidebar-navbar-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-navbar-designs .app-content--sidebar__content #213').click(function () {
        window.selected_navbar_component ? window.selected_navbar_component.components(
            `
            `
        ) : null
    })
    /*8*/
    $('#sidebar-navbar-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-navbar-designs .app-content--sidebar__content #213').click(function () {
        window.selected_navbar_component ? window.selected_navbar_component.components(
            `
            `
        ) : null
    })
    /*9*/
    $('#sidebar-navbar-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-navbar-designs .app-content--sidebar__content #213').click(function () {
        window.selected_navbar_component ? window.selected_navbar_component.components(
            `
            `
        ) : null
    })
    /*10*/
    $('#sidebar-navbar-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-navbar-designs .app-content--sidebar__content #213').click(function () {
        window.selected_navbar_component ? window.selected_navbar_component.components(
            `
            `
        ) : null
    })
    /*11*/
    $('#sidebar-navbar-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-navbar-designs .app-content--sidebar__content #213').click(function () {
        window.selected_navbar_component ? window.selected_navbar_component.components(
            `
            `
        ) : null
    })
}

const hideFooterDesigns = () => {
    window.selected_footer_component = null;
    sidebar_footer.classList.remove('visible')
}

const initFooterDesigns = () => {
    if (!window.footer_designs_first_init) {
        sidebar_footer.classList.add('.visible')
        return
    }
    window.footer_designs_first_init = false
    /*1*/
    $('#sidebar-footer-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-footer-designs .app-content--sidebar__content #213').click(function () {
        window.selected_footer_component ? window.selected_footer_component.components(
            `
            `
        ) : null
    })
    /*2*/
    $('#sidebar-footer-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-footer-designs .app-content--sidebar__content #213').click(function () {
        window.selected_footer_component ? window.selected_footer_component.components(
            `
            `
        ) : null
    })
    /*3*/
    $('#sidebar-footer-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-footer-designs .app-content--sidebar__content #213').click(function () {
        window.selected_footer_component ? window.selected_footer_component.components(
            `
            `
        ) : null
    })
    /*4*/
    $('#sidebar-footer-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-footer-designs .app-content--sidebar__content #213').click(function () {
        window.selected_footer_component ? window.selected_footer_component.components(
            `
            `
        ) : null
    })
    /*5*/
    $('#sidebar-footer-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-footer-designs .app-content--sidebar__content #213').click(function () {
        window.selected_footer_component ? window.selected_footer_component.components(
            `
            `
        ) : null
    })
    /*6*/
    $('#sidebar-footer-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-footer-designs .app-content--sidebar__content #213').click(function () {
        window.selected_footer_component ? window.selected_footer_component.components(
            `
            `
        ) : null
    })
    /*7*/
    $('#sidebar-footer-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-footer-designs .app-content--sidebar__content #213').click(function () {
        window.selected_footer_component ? window.selected_footer_component.components(
            `
            `
        ) : null
    })
    /*8*/
    $('#sidebar-footer-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-footer-designs .app-content--sidebar__content #213').click(function () {
        window.selected_footer_component ? window.selected_footer_component.components(
            `
            `
        ) : null
    })
    /*9*/
    $('#sidebar-footer-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-footer-designs .app-content--sidebar__content #213').click(function () {
        window.selected_footer_component ? window.selected_footer_component.components(
            `
            `
        ) : null
    })
    /*10*/
    $('#sidebar-footer-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-footer-designs .app-content--sidebar__content #213').click(function () {
        window.selected_footer_component ? window.selected_footer_component.components(
            `
            `
        ) : null
    })
    /*11*/
    $('#sidebar-footer-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-footer-designs .app-content--sidebar__content #213').click(function () {
        window.selected_footer_component ? window.selected_footer_component.components(
            `
            `
        ) : null
    })
    /*12*/
    $('#sidebar-footer-designs .app-content--sidebar__content').append(
        `
            <button id="1349715" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
                
            </button>
        `
    )
    $('sidebar-footer-designs .app-content--sidebar__content #213').click(function () {
        window.selected_footer_component ? window.selected_footer_component.components(
            `
            `
        ) : null
    })
}


editor.Commands.add('show-forms', {
    run: editor => {
        /*find the selected_form in case we don't have one!*/
        !window.selected_form_component && editor.getSelected() ?
            window.selected_form_component = editor.getSelected() : null;
        initFormsDesigns();

    }
});
editor.Commands.add('hide-forms', {
    run: editor => {
        hideFormsDesigns()
    }
});
editor.Commands.add('show-ecommerces', {
    run: editor => {
        /*find the selected_form in case we don't have one!*/
        !window.selected_ecommerce_component && editor.getSelected() ?
            window.selected_ecommerce_component = editor.getSelected() : null;
        initEcommercesDesigns();

    }
});
editor.Commands.add('hide-ecommerces', {
    run: editor => {
        hideEcommercesDesigns()
    }
});
editor.Commands.add('show-timeline', {
    run: editor => {
        /*find the selected_form in case we don't have one!*/
        !window.selected_timeline_component && editor.getSelected() ?
            window.selected_timeline_component = editor.getSelected() : null;
        initTimelineDesigns();

    }
});
editor.Commands.add('hide-timeline', {
    run: editor => {
        hideTimelineDesigns()
    }
});
editor.Commands.add('show-gallery', {
    run: editor => {
        /*find the selected_form in case we don't have one!*/
        !window.selected_gallery_component && editor.getSelected() ?
            window.selected_gallery_component = editor.getSelected() : null;
        initGalleryDesigns();

    }
});
editor.Commands.add('hide-gallery', {
    run: editor => {
        hideGalleryDesigns()
    }
});
editor.Commands.add('show-video', {
    run: editor => {
        /*find the selected_form in case we don't have one!*/
        !window.selected_video_component && editor.getSelected() ?
            window.selected_video_component = editor.getSelected() : null;
        initVideoDesigns();

    }
});
editor.Commands.add('hide-video', {
    run: editor => {
        hideVideoDesigns()
    }
});
editor.Commands.add('show-map', {
    run: editor => {
        /*find the selected_form in case we don't have one!*/
        !window.selected_map_component && editor.getSelected() ?
            window.selected_map_component = editor.getSelected() : null;
        initMapDesigns();

    }
});
editor.Commands.add('hide-map', {
    run: editor => {
        hideMapDesigns()
    }
});
editor.Commands.add('set-device-desktop', {
    run: editor => editor.setDevice('Desktop')
});
editor.Commands.add('set-device-tablet', {
    run: editor => editor.setDevice('Tablet')
});
editor.Commands.add('set-device-mobile', {
    run: editor => editor.setDevice('Mobile')
});

editor.on('component:selected', (arguments) => {
    $('#editor-styles')[0].style.display = 'block';
})

window.addEventListener('load', () => {
    $('#desktop-view').on('click', (event) => {
        editor.Commands.run('set-device-desktop');
    })

    $('#tablet-view').on('click', (event) => {
        editor.Commands.run('set-device-tablet');
    })

    $('#mobile-view').on('click', (event) => {
        editor.Commands.run('set-device-mobile');
    })

    $('#editor-undo').on('click', (event) => {
        editor.Commands.run('core:undo');
    })
    $('#editor-redo').on('click', (event) => {
        editor.Commands.run('core:redo');
    })

    $('#sw-visibility').on('click', (event) => {
        let status = editor.Commands.isActive('sw-visibility');

        if (status) {
            editor.Commands.stop('sw-visibility');
        } else {
            editor.Commands.run('sw-visibility');
        }
    })

    $('#editor-preview').on('click', (event) => {
        let status = editor.Commands.isActive('core:preview');

        if (status) {
            editor.Commands.stop('core:preview');
        } else {
            editor.Commands.run('core:preview');
        }
    })

    $('#editor-add').on('click', (event) => {
        $('#sidebar-inner-2')[0].classList.add('visible');
    })

    $('#editor-close-bm').on('click', (event) => {
        $('#sidebar-inner-2')[0].classList.remove('visible');
    })

    $('#editor-styles').on('click', (event) => {
        $('#sidebar-inner-3')[0].classList.add('visible');
    })
    $('#editor-close-stmgr').on('click', (event) => {
        $('#sidebar-inner-3')[0].classList.remove('visible');
    })

    $('#editor-fullscreen').on('click', (event) => {
        let element = document.querySelector('#editor-area');

        if (document.fullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
        } else {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.requestFullscreen) {
                element.requestFullscreen();
            }
        }
    })

    $('#canvas-clear').on('click', (event) => {
        editor.Commands.run('core:canvas-clear');
    })

    $('#gjs-export-zip').on('click', (event) => {
        editor.Commands.run('gjs-export-zip');
    })

    $('#editor-export').on('shown.bs.modal', () => {
        $('#html-export-tab').tab('show');
        $('#html-export').tab('show');
    });

    $('#editor-export').on('hidden.bs.modal', () => {
        $('#html-export-tab')[0].classList.remove('active')
        document.querySelector('#editor-export #html-export').innerHTML = "";
        document.querySelector('#editor-export #css-export').innerHTML = "";
    });

    $('#html-export-tab').on('shown.bs.tab', () => {
        document.querySelector('#editor-export #html-export').innerHTML = "";

        let txtarea_html = document.createElement('textarea');
        document.querySelector('#editor-export #html-export').appendChild(txtarea_html);
        txtarea_html.value = editor.getHtml()

        var codeViewer_html = editor.CodeManager.getViewer('CodeMirror').clone().set({
            ...CodeMirror_config.export,

            codeName: 'htmlmixed',
            input: txtarea_html
        });

        codeViewer_html.init(txtarea_html);
        codeViewer_html.setContent(editor.getHtml());
        codeViewer_html.editor.refresh();
    })

    $('#css-export-tab').on('shown.bs.tab', () => {
        document.querySelector('#editor-export #css-export').innerHTML = "";
        let txtarea_css = document.createElement('textarea');
        document.querySelector('#editor-export #css-export').appendChild(txtarea_css);

        var codeViewer_css = editor.CodeManager.getViewer('CodeMirror').clone().set({
            ...CodeMirror_config.export,

            codeName: 'css',
            input: txtarea_css
        });

        codeViewer_css.init(txtarea_css);
        codeViewer_css.setContent(editor.getCss());
        codeViewer_css.editor.refresh();
    })

});

