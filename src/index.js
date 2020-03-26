import loadComponents from './components';
import loadBlocks from './blocks';
import en from './locale/en';


export default (editor, opts = {}) => {
    const options = {
        ...{
            i18n: {},
            // default options
        }, ...opts
    };

    const hideMenus = () => {
        editor.runCommand('hide-ecommerces')
        editor.runCommand('hide-forms')
        editor.runCommand('hide-timeline')
        editor.runCommand('hide-gallery')
        editor.runCommand('hide-video')
        editor.runCommand('hide-map')
    }

    // Add components
    loadComponents(editor, options);
    // Add blocks
    loadBlocks(editor, options);
    // Load i18n files
    editor.I18n && editor.I18n.addMessages({
        en,
        ...options.i18n,
    });
    /* Sidebar for Forms designs*/
    // const sidebar_forms = $('#sidebar-forms-designs')[0]
    // let selected_form_component = null
    // const hideFormsDesigns = () => {
    //     editor.runCommand('test-command')
    //     selected_form_component = null
    //     sidebar_forms.classList.remove('visible')
    // }
    // const initFormsDesigns = () => {
    //     $('#sidebar-forms-designs .app-content--sidebar__content').append(
    //         `
    //             <button id="1135301" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
    //                 <img data-src="https://mdbootstrap.com/img/blocks/forms/4.jpg" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/forms/4.jpg">
    //                 <a href="#">
    //                   <div class="mask rgba-blue-slight waves-effect waves-light"></div>
    //                 </a>
    //             </button>
    //         `
    //     )
    //     $('#sidebar-forms-designs .app-content--sidebar__content #1135301').click(function () {
    //         selected_form_component ? selected_form_component.components(`
    //               <div class="container my-5 py-5 z-depth-1">
    //
    //
    //                     <!--Section: Content-->
    //                     <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
    //
    //
    //                       <!--Grid row-->
    //                       <div class="row d-flex justify-content-center">
    //
    //                         <!--Grid column-->
    //                         <div class="col-md-6">
    //
    //                           <!-- Default form subscription -->
    //                           <form class="text-center" action="#!">
    //
    //                             <p class="h4 mb-4">Subscribe</p>
    //
    //                             <p>Join our mailing list. We write rarely, but only the best content.</p>
    //
    //                             <p>
    //                               <a href="" target="_blank">See the last newsletter</a>
    //                             </p>
    //
    //                             <!-- Name -->
    //                             <input type="text" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Name">
    //
    //                             <!-- Email -->
    //                             <input type="email" id="defaultSubscriptionFormEmail" class="form-control mb-4" placeholder="E-mail">
    //
    //                             <!-- Sign in button -->
    //                             <button class="btn btn-info btn-block" type="submit">Sign in</button>
    //
    //
    //                           </form>
    //                           <!-- Default form subscription -->
    //
    //                         </div>
    //                         <!--Grid column-->
    //
    //                       </div>
    //                       <!--Grid row-->
    //
    //
    //                     </section>
    //                     <!--Section: Content-->
    //
    //
    //                   </div>
    //         `) : null
    //     })
    //     $('#sidebar-forms-designs .app-content--sidebar__content').append(
    //         `
    //             <button  id="1135293" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
    //                 <img data-src="https://mdbootstrap.com/img/blocks/forms/3.jpg" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/forms/3.jpg">
    //                 <a href="#">
    //                   <div class="mask rgba-blue-slight waves-effect waves-light"></div>
    //                 </a>
    //             </button>
    //         `
    //     )
    //     $('#sidebar-forms-designs .app-content--sidebar__content #1135293').click(function () {
    //         selected_form_component ? selected_form_component.components(
    //             `
    //               <div class="container my-5 py-5 z-depth-1">
    //
    //
    //                 <!--Section: Content-->
    //                 <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
    //
    //
    //                   <!--Grid row-->
    //                   <div class="row d-flex justify-content-center">
    //
    //                     <!--Grid column-->
    //                     <div class="col-md-6">
    //
    //                       <!-- Default form register -->
    //                       <form class="text-center" action="#!">
    //
    //                         <p class="h4 mb-4">Sign up</p>
    //
    //                         <div class="form-row mb-4">
    //                           <div class="col">
    //                             <!-- First name -->
    //                             <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name">
    //                           </div>
    //                           <div class="col">
    //                             <!-- Last name -->
    //                             <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name">
    //                           </div>
    //                         </div>
    //
    //                         <!-- E-mail -->
    //                         <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail">
    //
    //                         <!-- Password -->
    //                         <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password"
    //                           aria-describedby="defaultRegisterFormPasswordHelpBlock">
    //                         <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
    //                           At least 8 characters and 1 digit
    //                         </small>
    //
    //                         <!-- Phone number -->
    //                         <input type="number" id="defaultRegisterPhonePassword" class="form-control" placeholder="Phone number"
    //                           aria-describedby="defaultRegisterFormPhoneHelpBlock">
    //                         <small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
    //                           Optional - for two step authentication
    //                         </small>
    //
    //                         <!-- Newsletter -->
    //                         <div class="custom-control custom-checkbox">
    //                           <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter">
    //                           <label class="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our
    //                             newsletter</label>
    //                         </div>
    //
    //                         <!-- Sign up button -->
    //                         <button class="btn btn-info my-4 btn-block" type="submit">Sign in</button>
    //
    //                         <!-- Social register -->
    //                         <p>or sign up with:</p>
    //
    //                             <a href="#" class="mx-1" role="button"><i class="fab fa-facebook-f"></i></a>
    //                             <a href="#" class="mx-1" role="button"><i class="fab fa-twitter"></i></a>
    //                             <a href="#" class="mx-1" role="button"><i class="fab fa-linkedin-in"></i></a>
    //                             <a href="#" class="mx-1" role="button"><i class="fab fa-github"></i></a>
    //
    //                         <hr>
    //
    //                         <!-- Terms of service -->
    //                         <p>By clicking
    //                           <em>Sign up</em> you agree to our
    //                           <a href="" target="_blank">terms of service</a>
    //
    //                       </form>
    //                       <!-- Default form register -->
    //
    //                     </div>
    //                     <!--Grid column-->
    //
    //                   </div>
    //                   <!--Grid row-->
    //
    //
    //                 </section>
    //                 <!--Section: Content-->
    //
    //
    //               </div>
    //             `
    //         ) : null
    //     })
    //     $('#sidebar-forms-designs .app-content--sidebar__content').append(
    //         `
    //             <button id="1135267" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
    //                 <img data-src="https://mdbootstrap.com/img/blocks/forms/2.jpg" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/forms/2.jpg">
    //                 <a href="#">
    //                   <div class="mask rgba-blue-slight waves-effect waves-light"></div>
    //                 </a>
    //             </button>
    //         `
    //     )
    //     $('#sidebar-forms-designs .app-content--sidebar__content #1135267').click(function () {
    //         selected_form_component ? selected_form_component.components(`
    //               <div class="container my-5 py-5 z-depth-1">
    //
    //
    //                     <!--Section: Content-->
    //                     <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
    //
    //
    //                       <!--Grid row-->
    //                       <div class="row d-flex justify-content-center">
    //
    //                         <!--Grid column-->
    //                         <div class="col-md-6">
    //
    //                           <!-- Default form login -->
    //                           <form class="text-center" action="#!">
    //
    //                             <p class="h4 mb-4">Sign in</p>
    //
    //                             <!-- Email -->
    //                             <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail">
    //
    //                             <!-- Password -->
    //                             <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password">
    //
    //                             <div class="d-flex justify-content-around">
    //                               <div>
    //                                 <!-- Remember me -->
    //                                 <div class="custom-control custom-checkbox">
    //                                   <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
    //                                   <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
    //                                 </div>
    //                               </div>
    //                               <div>
    //                                 <!-- Forgot password -->
    //                                 <a href="">Forgot password?</a>
    //                               </div>
    //                             </div>
    //
    //                             <!-- Sign in button -->
    //                             <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>
    //
    //                             <!-- Register -->
    //                             <p>Not a member?
    //                               <a href="">Register</a>
    //                             </p>
    //
    //                             <!-- Social login -->
    //                             <p>or sign in with:</p>
    //
    //                                 <a href="#" class="mx-1" role="button"><i class="fab fa-facebook-f"></i></a>
    //                                 <a href="#" class="mx-1" role="button"><i class="fab fa-twitter"></i></a>
    //                                 <a href="#" class="mx-1" role="button"><i class="fab fa-linkedin-in"></i></a>
    //                                 <a href="#" class="mx-1" role="button"><i class="fab fa-github"></i></a>
    //
    //                           </form>
    //                           <!-- Default form login -->
    //
    //                         </div>
    //                         <!--Grid column-->
    //
    //                       </div>
    //                       <!--Grid row-->
    //
    //
    //                     </section>
    //                     <!--Section: Content-->
    //
    //
    //                   </div>
    //         `) : null
    //     })
    //
    //     $('#sidebar-forms-designs .app-content--sidebar__content').append(
    //         `
    //             <button id="1135239" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
    //                 <img data-src="https://mdbootstrap.com/img/blocks/forms/1.jpg" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/forms/1.jpg">
    //                 <a href="#">
    //                   <div class="mask rgba-blue-slight waves-effect waves-light"></div>
    //                 </a>
    //             </button>
    //         `
    //     )
    //     $('#sidebar-forms-designs .app-content--sidebar__content #1135239').click(function () {
    //         selected_form_component ? selected_form_component.components(`
    //               <div class="container my-5 py-5 z-depth-1">
    //
    //                 <!--Section: Content-->
    //                 <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
    //
    //
    //                   <!--Grid row-->
    //                   <div class="row d-flex justify-content-center">
    //
    //                     <!--Grid column-->
    //                     <div class="col-md-6 text-center">
    //
    //                       <h4 class="font-weight-bold mb-4">Subscribe</h4>
    //
    //                       <div class="input-group mb-4">
    //                         <input type="email" class="form-control" placeholder="Enter your email address" aria-label="Enter your email address"
    //                           aria-describedby="button-addon2">
    //                         <div class="input-group-append">
    //                           <button class="btn btn-md btn-outline-default m-0 px-3 py-2 z-depth-0 waves-effect" type="submit"
    //                             id="button-addon2">Submit</button>
    //                         </div>
    //                       </div>
    //
    //                       <p class="font-weight-bold">Find us on <a href="#">Facebook</a> and <a href="#">Twitter</a></p>
    //
    //                     </div>
    //                     <!--Grid column-->
    //
    //                   </div>
    //                   <!--Grid row-->
    //
    //
    //                 </section>
    //                 <!--Section: Content-->
    //
    //
    //               </div>
    //         `) : null
    //     })
    //     $('#sidebar-forms-designs .app-content--sidebar__content').append(
    //         `
    //             <button id="1335322" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
    //                 <img data-src="https://mdbootstrap.com/img/blocks/forms/5.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/forms/5.png">
    //                 <a href="#">
    //                   <div class="mask rgba-blue-slight waves-effect waves-light"></div>
    //                 </a>
    //             </button>
    //         `
    //     )
    //     $('#sidebar-forms-designs .app-content--sidebar__content #1335322').click(function () {
    //         selected_form_component ? selected_form_component.components(`
    //             <div class="container my-5 px-0 z-depth-1">
    //
    //               <!--Section: Content-->
    //               <section class="p-5 my-md-5 text-center"
    //                 style="background-image: url(https://mdbootstrap.com/img/Photos/Others/background.jpg); background-size: cover; background-position: center center;">
    //
    //                 <form class="my-5 mx-md-5" action="">
    //
    //                   <div class="row">
    //                     <div class="col-md-6 mx-auto">
    //                       <!-- Material form login -->
    //                       <div class="card">
    //
    //                         <!--Card content-->
    //                         <div class="card-body">
    //
    //                           <!-- Form -->
    //                           <form class="text-center" style="color: #757575;" action="#!">
    //
    //                             <h3 class="font-weight-bold my-4 pb-2 text-center dark-grey-text">Log In</h3>
    //
    //                             <!-- Name -->
    //                             <input type="email" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Email">
    //
    //                             <!-- Email -->
    //                             <input type="password" id="defaultSubscriptionFormEmail" class="form-control" placeholder="Password">
    //                             <small id="passwordHelpBlock" class="form-text text-right blue-text">
    //                               <a href="">Recover Password</a>
    //                             </small>
    //
    //                             <div class="text-center">
    //                               <button type="button" class="btn btn-outline-orange btn-rounded my-4 waves-effect">Warning</button>
    //                             </div>
    //
    //                           </form>
    //                           <!-- Form -->
    //
    //                         </div>
    //
    //                       </div>
    //                       <!-- Material form login -->
    //                     </div>
    //                   </div>
    //
    //                 </form>
    //
    //               </section>
    //               <!--Section: Content-->
    //
    //
    //             </div>
    //
    //
    //         `) : null
    //     })
    //     $('#sidebar-forms-designs .app-content--sidebar__content').append(
    //         `
    //             <button id="1336908" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
    //                 <img data-src="https://mdbootstrap.com/img/blocks/forms/6.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/forms/6.png">
    //                 <a href="#">
    //                   <div class="mask rgba-blue-slight waves-effect waves-light"></div>
    //                 </a>
    //             </button>
    //         `
    //     )
    //     $('#sidebar-forms-designs .app-content--sidebar__content #1336908').click(function () {
    //         selected_form_component ? selected_form_component.components(`
    //             <div class="container my-5 z-depth-1">
    //
    //               <!--Section: Content-->
    //               <section class="dark-grey-text p-5">
    //
    //                 <!-- Grid row -->
    //                 <div class="row">
    //
    //                   <!-- Grid column -->
    //                   <div class="col-md-5 mb-4 mb-md-0">
    //
    //                     <div class="view">
    //                       <img src="https://mdbootstrap.com/img/illustrations/undraw_Group_chat_unwm.svg" class="img-fluid" alt="smaple image">
    //                     </div>
    //
    //                   </div>
    //                   <!-- Grid column -->
    //
    //                   <!-- Grid column -->
    //                   <div class="col-md-7 mb-lg-0 mb-4">
    //
    //                     <!-- Form -->
    //                     <form class="" action="">
    //
    //                       <!-- Section heading -->
    //                       <h3 class="font-weight-bold my-3">Subscribe</h3>
    //
    //                       <p class="text-muted mb-4 pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae, fuga similique quos aperiam tenetur quo ut rerum debitis.</p>
    //
    //                       <div class="input-group">
    //                         <input type="email" class="form-control" placeholder="Enter your email address" aria-label="Enter your email address"
    //                           aria-describedby="button-addon2">
    //                         <div class="input-group-append">
    //                           <button class="btn btn-md btn-primary rounded-right m-0 px-3 py-2 z-depth-0 waves-effect" type="submit" id="button-addon2">Button</button>
    //                         </div>
    //                       </div>
    //                       <small class="form-text black-text"><strong>* Leave your email addres to be notified first.</strong></small>
    //
    //                     </form>
    //                     <!-- Form -->
    //
    //                   </div>
    //                   <!-- Grid column -->
    //
    //                 </div>
    //                 <!-- Grid row -->
    //
    //               </section>
    //               <!--Section: Content-->
    //
    //
    //             </div>
    //         `) : null
    //     })
    //     $('#sidebar-forms-designs .app-content--sidebar__content').append(
    //         `
    //         <button id="1337730" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
    //             <img data-src="https://mdbootstrap.com/img/blocks/forms/7.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/forms/7.png">
    //             <a href="#">
    //               <div class="mask rgba-blue-slight waves-effect waves-light"></div>
    //             </a>
    //         </button>
    //         `
    //     )
    //     $('#sidebar-forms-designs .app-content--sidebar__content #1337730').click(function () {
    //         selected_form_component ? selected_form_component.components(`
    //             <div class="container my-5 z-depth-1">
    //
    //                   <!--Section: Content-->
    //                   <section class="dark-grey-text text-center px-md-5 py-5">
    //
    //                     <!-- Grid row -->
    //                     <div class="row">
    //
    //                       <!-- Grid column -->
    //                       <div class="col-lg-6 col-md-8 mx-auto">
    //
    //                         <!-- Form -->
    //                         <form class="" action="">
    //
    //                           <!-- Section heading -->
    //                           <h3 class="font-weight-bold mb-4">Company Name</h3>
    //
    //                           <p class="text-muted mb-4 pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit, vitae fuga similique quos aperiam tenetur quo rerum debitis quibusdam.</p>
    //
    //                           <div class="input-group mb-4 pb-3">
    //                             <input type="email" class="form-control" placeholder="Enter your email address" aria-label="Enter your email address"
    //                               aria-describedby="button-addon2">
    //                             <div class="input-group-append">
    //                               <button class="btn btn-md btn-info rounded-right m-0 px-3 py-2 z-depth-0 waves-effect" type="submit" id="button-addon2">Submit</button>
    //                             </div>
    //                           </div>
    //
    //                           <ul class="list-unstyled d-flex justify-content-center mb-0 text-info">
    //                             <li>
    //                               <a class="mx-3" role="button"><i class="fab fa-lg fa-facebook-f"></i></a>
    //                             </li>
    //                             <li>
    //                               <a class="mx-3" role="button"><i class="fab fa-lg fa-twitter"></i></a>
    //                             </li>
    //                             <li>
    //                               <a class="mx-3" role="button"><i class="fab fa-lg fa-instagram"></i></a>
    //                             </li>
    //                             <li>
    //                               <a class="mx-3" role="button"><i class="fab fa-lg fa-linkedin-in"></i></a>
    //                             </li>
    //                             <li>
    //                               <a class="mx-3" role="button"><i class="fab fa-lg fa-pinterest"></i></a>
    //                             </li>
    //                           </ul>
    //
    //                         </form>
    //                         <!-- Form -->
    //
    //                       </div>
    //                       <!-- Grid column -->
    //
    //                     </div>
    //                     <!-- Grid row -->
    //
    //                   </section>
    //                   <!--Section: Content-->
    //
    //
    //                 </div>
    //         `) : null
    //     })
    //     $('#sidebar-forms-designs .app-content--sidebar__content').append(
    //         `
    //                 <button id="1401205" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
    //                     <img data-src="https://mdbootstrap.com/img/blocks/signup/1.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/signup/1.png">
    //                     <a href="#">
    //                       <div class="mask rgba-blue-slight waves-effect waves-light"></div>
    //                     </a>
    //                 </button>
    //         `
    //     )
    //     $('#sidebar-forms-designs .app-content--sidebar__content #1401205').click(function () {
    //         selected_form_component ? selected_form_component.components(`
    //             <!-- Main navigation -->
    //                 <div class="container-fluid mt-3 mb-5">
    //
    //                   <!-- Full Page Intro -->
    //                   <section style="background-image: url('https://mdbootstrap.com/img/Photos/Others/images/90.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
    //                     <!-- Mask & flexbox options-->
    //                     <div class="mask d-flex justify-content-center align-items-center">
    //                       <!-- Content -->
    //                       <div class="container py-5 my-5">
    //
    //                         <h3 class="font-weight-bold text-center white-text pb-2">Get Started Free</h3>
    //                         <p class="lead text-center white-text pt-2 mb-5">Start to explore our product absolutely free.</p>
    //
    //                         <!--Grid row-->
    //                         <div class="row d-flex align-items-center justify-content-center">
    //                           <!--Grid column-->
    //                           <div class="col-md-6 col-xl-5">
    //                             <!--Form-->
    //                             <div class="card">
    //                               <div class="card-body z-depth-2 px-4">
    //                                 <div class="md-form mt-3">
    //                                   <i class="fa fa-user prefix grey-text"></i>
    //                                   <input type="text" id="form3" class="form-control">
    //                                   <label for="form3">Your name</label>
    //                                 </div>
    //                                 <div class="md-form">
    //                                   <i class="fa fa-envelope prefix grey-text"></i>
    //                                   <input type="text" id="form2" class="form-control">
    //                                   <label for="form2">Your email</label>
    //                                 </div>
    //                                 <div class="md-form">
    //                                   <i class="fas fa-key prefix grey-text"></i>
    //                                   <input type="text" id="form4" class="form-control">
    //                                   <label for="form4">Your password</label>
    //                                 </div>
    //                                 <div class="text-center my-3">
    //                                   <button class="btn btn-indigo btn-block">Send</button>
    //                                 </div>
    //                               </div>
    //                             </div>
    //                             <!--/.Form-->
    //                           </div>
    //                           <!--Grid column-->
    //                         </div>
    //                         <!--Grid row-->
    //                       </div>
    //                       <!-- Content -->
    //                     </div>
    //                     <!-- Mask & flexbox options-->
    //                   </section>
    //                   <!-- Full Page Intro -->
    //
    //                 </div>
    //                 <!-- Main navigation -->
    //         `) : null
    //     })
    //     $('#sidebar-forms-designs .app-content--sidebar__content').append(
    //         `
    //             <button id="1401468" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
    //                 <img data-src="https://mdbootstrap.com/img/blocks/signup/2.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/signup/2.png">
    //                 <a href="#">
    //                   <div class="mask rgba-blue-slight waves-effect waves-light"></div>
    //                 </a>
    //             </div>
    //         `
    //     )
    //     $('#sidebar-forms-designs .app-content--sidebar__content #1401468').click(function () {
    //         selected_form_component ? selected_form_component.components(`
    //             <div class="container my-5">
    //
    //               <!-- Section -->
    //               <section>
    //
    //                 <h6 class="font-weight-bold text-center grey-text text-uppercase small mb-4">meet MDB</h6>
    //                 <h3 class="font-weight-normal text-center dark-grey-text pb-2 display-4"><strong>30 Days Free Trial</strong></h3>
    //                 <hr class="w-header my-4">
    //                 <p class="lead text-center text-muted pt-2 mb-5">We waited until we could do it right. Then we did! Instead of creating a carbon copy.</p>
    //                 <!--First row-->
    //                 <div class="row d-flex justify-content-center">
    //
    //                   <!--First column-->
    //                   <div class="col-6">
    //
    //                     <!-- Material outline input -->
    //                     <div class="md-form md-outline form-lg">
    //                       <input type="text" id="form1" class="form-control form-control-lg">
    //                       <label for="form1">Name</label>
    //                     </div>
    //
    //                     <!-- Material outline input -->
    //                     <div class="md-form md-outline form-lg">
    //                       <input type="text" id="form2" class="form-control form-control-lg">
    //                       <label for="form2">Email</label>
    //                     </div>
    //
    //                     <!-- Material outline input -->
    //                     <div class="md-form md-outline form-lg">
    //                       <input type="text" id="form3" class="form-control form-control-lg">
    //                       <label for="form3">Password</label>
    //                     </div>
    //
    //                     <button class="btn btn-block btn-primary btn-lg">Sign up</button>
    //
    //                   </div>
    //                   <!--First column-->
    //
    //                 </div>
    //                 <!--First row-->
    //
    //               </section>
    //               <!-- Section -->
    //
    //             </div>
    //         `) : null
    //     })
    //     $('#sidebar-forms-designs .app-content--sidebar__content').append(
    //         `
    //             <button id="1401499" type="button" class="btn btn-primary overlay z-depth-1 mb-4">
    //                 <img data-src="https://mdbootstrap.com/img/blocks/signup/3.png" class="img-fluid" alt="" src="https://mdbootstrap.com/img/blocks/signup/3.png">
    //                 <a href="#">
    //                   <div class="mask rgba-blue-slight waves-effect waves-light"></div>
    //                 </a>
    //             </button>
    //         `
    //     )
    //     $('#sidebar-forms-designs .app-content--sidebar__content #1401499').click(function () {
    //         selected_form_component ? selected_form_component.components(`
    //             <div class="container z-depth-1 my-5 p-5">
    //
    //               <!-- Section -->
    //               <section>
    //
    //                 <h3 class="font-weight-normal text-center dark-grey-text my-4 pb-2">Start Using MDBootstrap Now!</h3>
    //
    //                 <!--First row-->
    //                 <div class="row d-flex justify-content-center">
    //
    //                   <div class="col-md-6 col-lg-3 mb-4">
    //
    //                     <!-- Material outline input -->
    //                     <div class="md-form md-outline form-lg">
    //                       <input type="text" id="form1" class="form-control form-control-lg">
    //                       <label for="form1">Name</label>
    //                     </div>
    //
    //                   </div>
    //
    //                   <div class="col-md-6 col-lg-3 mb-4">
    //
    //                     <!-- Material outline input -->
    //                     <div class="md-form md-outline form-lg">
    //                       <input type="text" id="form2" class="form-control form-control-lg">
    //                       <label for="form2">Email</label>
    //                     </div>
    //
    //                   </div>
    //
    //                   <div class="col-md-6 col-lg-3 mb-4">
    //
    //                     <!-- Material outline input -->
    //                     <div class="md-form md-outline form-lg">
    //                       <input type="text" id="form3" class="form-control form-control-lg">
    //                       <label for="form3">Password</label>
    //                     </div>
    //
    //                   </div>
    //
    //                   <div class="col-md-6 col-lg-3 mb-4">
    //
    //                     <button class="btn btn-block btn-primary my-4">Sign up</button>
    //
    //                   </div>
    //
    //                 </div>
    //                 <!--First row-->
    //
    //               </section>
    //               <!-- Section -->
    //
    //             </div>
    //         `) : null
    //     })
    // }

    /*FIXME events:
       form_drop!
       */
    editor.on('block:drag:stop', component => {
        if (component.get('type') == 'FORM') {
            console.log('FORM dropped!');
            window.selected_form_component = component;
            editor.runCommand('show-forms')
            // initFormsDesigns()
            // sidebar_forms.classList.add('visible');
            // console.log(sidebar_forms)
        } else if (component.get('type') == 'ECOMMERCE') {
            console.log('ECOMMERCE dropped!');
            window.selected_ecommerce_component = component;
            editor.runCommand('show-ecommerces')
        } else if (component.get('type') == 'TIMELINE') {
            console.log('TIMELINE dropped!');
            window.selected_timeline_component = component;
            editor.runCommand('show-timeline')
        } else if (component.get('type') == 'GALLERY') {
            console.log('GALLERY dropped!');
            window.selected_gallery_component = component;
            editor.runCommand('show-gallery')
        }else if (component.get('type') == 'VIDEO') {
            console.log('VIDEO dropped!');
            window.selected_video_component = component;
            editor.runCommand('show-video')
        }else if (component.get('type') == 'MAP') {
            console.log('MAP dropped!');
            window.selected_map_component = component;
            editor.runCommand('show-map')
        }
    });
    editor.on('component:selected', component => {
        console.log('something get selected!');
        hideMenus()
        // hideFormsDesigns()
        // if (component.get('type') == 'wrapper') {
        //     console.log('wrapper selected!')
        //     hideFormsDesigns()
        // }
    })
    editor.on('component:deselected', component => {
        hideMenus()
        // if (component.get('type') == 'FORM') {
        //     console.log('FORM deselected!')
        //     editor.runCommand('hide-forms')
        //     // hideFormsDesigns()
        // }
        // else if(component.get('type') == 'ECOMMERCE'){
        //     console.log('ECOMMERCE deselected!')
        //     editor.runCommand('hide-ecommerces')
        // }
    })


    // FIXME testing: form!
    editor.on('load', () => {
        editor.addComponents(
            `
          <div data-gjs-type="GALLERY"></div>
        `
            //     `<div style="margin:100px; padding:25px;">
            //         Content loaded from the plugin
            //     </div>`,
            //     { at: 0 }
        )
        /* set wrapper default styles!*/
        editor.getWrapper().set('stylable', true)
    })
};
