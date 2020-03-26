export default (editor, opts = {}) => {
    const domc = editor.DomComponents;

    // Update image component toolbar
    const showAssetsCmdId = 'open-assets'
    const showAssetsIcon = `
        <svg viewBox="0 0 24 24">
                    <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z">
                    </path>
        </svg>
    `
    // const typeImage = domc.getType('image').model;
    // domc.addType('image', {
    //     model: {
    //         initToolbar() {
    //             typeImage.prototype.initToolbar.apply(this, arguments);
    //             const tb = this.get('toolbar');
    //             const tbExists = tb.some(item => item.command === showAssetsCmdId);
    //
    //             if (!tbExists) {
    //                 tb.unshift({
    //                     command: showAssetsCmdId,
    //                     label: showAssetsIcon,
    //                 });
    //                 this.set('toolbar', tb);
    //             }
    //         }
    //     }
    // })

    domc.addType('AUDIO', {
        init() {
            this.listenTo(this, 'change:src', () => this.view.updateScript())
        },
        model: {
            defaults: {
                src: '',
                traits: [
                    {
                        name: 'src',
                        changeProp: 1,
                        label: 'Source'
                    }
                ],
                script: function () {
                    // // let music = $('#music')
                    // const src = '{[ src ]}'
                    // if (src) {
                    //     // let newMusic =  '<audio id="audio">';
                    //     // // you can add more source tag
                    //     // newMusic +=  '<source src='+src+'" type="audio/mp3" />';
                    //     // newMusic +=  '</audio>';
                    //     // music.replaceWith(newMusic)
                    //     music.setAttribute('src', src)
                    //     console.log(src)
                    // }
                    // // music = music[0]
                    // music.load()
                    // console.log(music)
                }
            }
        }

    })
//     domc.addType('MUSIC', {
//         model: {
//             defaults: {
//                 styles: {
//                     margin:'55px',
//                 },
//                 traits:[{
//                   name:'source',
//                 }],
//                 components: `
//                       <!-- Full Page Intro -->
// <!--                          <div class="view">-->
//                             <style>
//                                 /*.view {*/
//                                 /*  height: 100%; }*/
//
//                                 #mobile-box {
//                                   width: 360px; }
//
//                                 .gradient-card {
//                                   /* FF3.6+ */
//                                   background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(220, 66, 37, 0.5)), color-stop(100%, rgba(0, 47, 75, 0.5)));
//                                   /* Chrome,Safari4+ */
//                                   background: -webkit-linear-gradient(top, rgba(0, 47, 75, 0.5) 0%, rgba(220, 66, 37, 0.5) 100%);
//                                   /* Chrome10+,Safari5.1+ */
//                                   background: -o-linear-gradient(top, rgba(0, 47, 75, 0.5) 0%, rgba(220, 66, 37, 0.5) 100%);
//                                   /* Opera 11.10+ */
//                                   /* IE10+ */
//                                   background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 47, 75, 0.5)), to(rgba(220, 66, 37, 0.5)));
//                                   background: linear-gradient(to bottom, rgba(0, 47, 75, 0.5) 0%, rgba(220, 66, 37, 0.5) 100%);
//                                   /* W3C */
//                                   filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#002f4b', endColorstr='#00000000', GradientType=0);
//                                   /* IE6-9 */ }
//
//                                 .card {
//                                   -webkit-border-radius: 10px;
//                                   border-radius: 10px; }
//
//                                 .card .view {
//                                   -webkit-border-top-left-radius: 10px;
//                                   border-top-left-radius: 10px;
//                                   -webkit-border-top-right-radius: 10px;
//                                   border-top-right-radius: 10px; }
//
//                                 .card h5 a {
//                                   color: #0d47a1;
//                                 }
//                                 .card h5 a:hover {
//                                   color: #072f6b;
//                                 }
//
//                                 #pButton {
//                                   float: left; }
//
//                                 #timeline {
//                                   width: 90%;
//                                   height: 2px;
//                                   margin-top: 20px;
//                                   margin-left: 10px;
//                                   float: left;
//                                   -webkit-border-radius: 15px;
//                                   border-radius: 15px;
//                                   background: rgba(0, 0, 0, 0.3); }
//
//                                 #pButton {
//                                   margin-top: 12px;
//                                   cursor: pointer; }
//
//                                 #playhead {
//                                   width: 8px;
//                                   height: 8px;
//                                   -webkit-border-radius: 50%;
//                                   border-radius: 50%;
//                                   margin-top: -3px;
//                                   background: black;
//                                   cursor: pointer; }
//
//                             </style>
//                             <!-- Mask & flexbox options-->
//                             <div class="gradient-card align-items-center py-4 mx-auto px-4"
//                                 data-gjs-resizable="true"
//                             >
//                               <!-- Content -->
//                               <div class="container d-flex justify-content-center my-4"
//                               >
//
//                                 <div id="mobile-box">
//
// <!--                                  <h4 class="my-5 h5 text-center" style="color:rgb(235, 232, 234)">Just click<i class="fas fa-play ml-2"></i></h4>-->
//
//                                   <!-- Card -->
//                                   <div class="card">
//                                     <!-- Card image -->
//                                     <div class="view">
//                                       <img
//                                        class="card-img-top" src="https://mdbootstrap.com/wp-content/uploads/2019/02/flam.jpg"
//                                         alt="Card image cap"/>
//                                       <a href="https://bachataurban.com/" target="_blank">
// <!--                                        <div class="mask gradient-card"></div>-->
//                                       </a>
//                                     </div>
//
//                                     <!-- Card content -->
//                                     <div class="card-body text-center">
//
//                                       <h5 class="h5 font-weight-bold"><a href="https://bachataurban.com/" target="_blank">Dj Flam</a></h5>
//                                       <p class="mb-0">Urban Bachata remix</p>
//
//                                       <audio id="music" preload="true">
//                                           <source id="" src="https://bachataurban.com/download/2/Stefflon%20Don%20-%2016%20Shots%20(%20DJ%20Flam%20-%20Urban%20Bachata%20remix%20).mp3">
//                                       </audio>
//                                       <div id="audioplayer">
//                                           <i id="pButton" class="fas fa-play"></i>
//                                           <div id="timeline">
//                                               <div id="playhead"></div>
//                                           </div>
//                                       </div>
//
//                                     </div>
//
//                                   </div>
//                                   <!-- Card -->
//
//
//                                 </div>
//                               </div>
//                               <!-- Content -->
//                             </div>
//                             <!-- Mask & flexbox options-->
// <!--                          </div>-->
//                           <!-- Full Page Intro -->
//                 `,
//                 script: function () {
//                     var music = document.getElementById('music'); // play button
//                     var duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
//                     var pButton = document.getElementById('pButton'); // play button
//                     var playhead = document.getElementById('playhead'); // playhead
//                     var timeline = document.getElementById('timeline'); // timeline
//
//                     // timeline width adjusted for playhead
//                     var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
//
//                     // play button event listenter
//                     pButton.addEventListener("click", play);
//
//                     // timeupdate event listener
//                     music.addEventListener("timeupdate", timeUpdate, false);
//
//                     // makes timeline clickable
//                     timeline.addEventListener("click", function (event) {
//                         moveplayhead(event);
//                         music.currentTime = duration * clickPercent(event);
//                     }, false);
//
//                     // returns click as decimal (.77) of the total timelineWidth
//                     function clickPercent(event) {
//                         return (event.clientX - getPosition(timeline)) / timelineWidth;
//                     }
//
//                     // makes playhead draggable
//                     playhead.addEventListener('mousedown', mouseDown, false);
//                     window.addEventListener('mouseup', mouseUp, false);
//
//                     // Boolean value so that audio position is updated only when the playhead is released
//                     var onplayhead = false;
//
//                     // mouseDown EventListener
//                     function mouseDown() {
//                         onplayhead = true;
//                         window.addEventListener('mousemove', moveplayhead, true);
//                         music.removeEventListener('timeupdate', timeUpdate, false);
//                     }
//
//                     // mouseUp EventListener
//                     // getting input from all mouse clicks
//                     function mouseUp(event) {
//                         if (onplayhead == true) {
//                             moveplayhead(event);
//                             window.removeEventListener('mousemove', moveplayhead, true);
//                             // change current time
//                             music.currentTime = duration * clickPercent(event);
//                             music.addEventListener('timeupdate', timeUpdate, false);
//                         }
//                         onplayhead = false;
//                     }
//
//                     // mousemove EventListener
//                     // Moves playhead as user drags
//                     function moveplayhead(event) {
//                         var newMargLeft = event.clientX - getPosition(timeline);
//
//                         if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
//                             playhead.style.marginLeft = newMargLeft + "px";
//                         }
//                         if (newMargLeft < 0) {
//                             playhead.style.marginLeft = "0px";
//                         }
//                         if (newMargLeft > timelineWidth) {
//                             playhead.style.marginLeft = timelineWidth + "px";
//                         }
//                     }
//
//                     // timeUpdate
//                     // Synchronizes playhead position with current point in audio
//                     function timeUpdate() {
//                         var playPercent = timelineWidth * (music.currentTime / duration);
//                         playhead.style.marginLeft = playPercent + "px";
//                         if (music.currentTime == duration) {
//                             pButton.className = "";
//                             pButton.className = "fas fa-play";
//                         }
//                     }
//
//                     //Play and Pause
//                     function play() {
//                         // start music
//                         if (music.paused) {
//                             music.play();
//                             // remove play, add pause
//                             pButton.className = "";
//                             pButton.className = "fas fa-pause";
//                         } else { // pause music
//                             music.pause();
//                             // remove pause, add play
//                             pButton.className = "";
//                             pButton.className = "fas fa-play";
//                         }
//                     }
//
//                     // Gets audio file duration
//                     music.addEventListener("canplaythrough", function () {
//                         duration = music.duration;
//                     }, false);
//
//                     // getPosition
//                     // Returns elements left position relative to top-left of viewport
//                     function getPosition(el) {
//                         return el.getBoundingClientRect().left;
//                     }
//                 }
//
//             }
//         }
//     })


    const defaultType = domc.getType('default').model;
    const showFormsCmd = 'show-forms';
    const showEcommercesCmd = 'show-ecommerces';
    const showTimelineCmd = 'show-timeline';
    const showGalleryCmd = 'show-gallery';
    const showVideoCmd = 'show-video';
    const showMapCmd = 'show-map';
    const showFormsIcon = `
                 <svg viewBox="0 0 24 24">
                    <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z">
                    </path>
                  </svg>
`;

    domc.addType('FORM', {
        model: {
            /*adding a button for showing forms-designs*/
            initToolbar() {
                defaultType.prototype.initToolbar.apply(this, arguments);
                window.selected_form_component = this;
                const tb = this.get('toolbar');
                const tbExists = tb.some(item => item.command === showFormsCmd);

                if (!tbExists) {
                    tb.unshift({
                        command: showFormsCmd,
                        label: showFormsIcon,
                    });
                    this.set('toolbar', tb);
                }
            },
            defaults: {
                style: {
                    margin: '25px',
                    padding: '25px',
                    'text-align': 'center',
                },
                components: 'Choose your Form Design from the Left Menu!'
            }
        }
    })
    domc.addType('ECOMMERCE', {
        model: {
            /*adding a button for showing forms-designs*/
            initToolbar() {
                defaultType.prototype.initToolbar.apply(this, arguments);
                window.selected_form_component = this;
                const tb = this.get('toolbar');
                const tbExists = tb.some(item => item.command === showEcommercesCmd);

                if (!tbExists) {
                    tb.unshift({
                        command: showEcommercesCmd,
                        label: showFormsIcon,
                    });
                    this.set('toolbar', tb);
                }
            },
            defaults: {
                style: {
                    margin: '25px',
                    padding: '25px',
                    'text-align': 'center',
                },
                components: 'Choose your E-commerce Design from the Left Menu!'
            }
        }
    })
    domc.addType('TIMELINE', {
        model: {
            /*adding a button for showing forms-designs*/
            initToolbar() {
                defaultType.prototype.initToolbar.apply(this, arguments);
                window.selected_timeline_component = this;
                const tb = this.get('toolbar');
                const tbExists = tb.some(item => item.command === showTimelineCmd);

                if (!tbExists) {
                    tb.unshift({
                        command: showTimelineCmd,
                        label: showFormsIcon,
                    });
                    this.set('toolbar', tb);
                }
            },
            defaults: {
                style: {
                    margin: '25px',
                    padding: '25px',
                    'text-align': 'center',
                },
                components: 'Choose your Timeline Design from the Left Menu!'
            }
        }
    })
    editor.TraitManager.addType('new-slide', {
        eventCapture: ['click'],
        noLabel: true,
        templateInput: `
            <div class="text-center w-100 py-2">
                <div data-input></div>
            </div>`,
        // Return a simple HTML string or an HTML element
        createInput({trait}) {
            // Here we can decide to use properties from the trait
            // const traitOpts = trait.get('options') || [];
            // const options = traitOpts.lenght ? traitOpts : [
            //     { id: 'url', name: 'URL' },
            //     { id: 'email', name: 'Email' },
            // ];

            // Create a new element container add some content
            const el = $('<button type="button" class="btn-success btn text-white">New Slide</button>',)[0]
            // const el = document.createElement('div');
            // el.innerHTML = `
            //     <button type="button" class="btn btn-primary text-white">New Slide</button>
            // `
            //         el.innerHTML = `
            //   <select class="href-next__type">
            //     ${options.map(opt =>
            //             `<option value="${opt.id}">${opt.name}</option>`)
            //             .join('')}
            //   </select>
            //   <div class="href-next__url-inputs">
            //     <input class="href-next__url" placeholder="Insert URL"/>
            //   </div>
            //   <div class="href-next__email-inputs">
            //     <input class="href-next__email" placeholder="Insert email"/>
            //     <input class="href-next__email-subject" placeholder="Insert subject"/>
            //   </div>
            // `;

            // Let's make our content alive
            // const inputsUrl = el.querySelector('.href-next__url-inputs');
            // const inputsEmail = el.querySelector('.href-next__email-inputs');
            // const inputType = el.querySelector('.href-next__type');
            // inputType.addEventListener('change', ev => {
            //     switch (ev.target.value) {
            //         case 'url':
            //             inputsUrl.style.display = '';
            //             inputsEmail.style.display = 'none';
            //             break;
            //         case 'email':
            //             inputsUrl.style.display = 'none';
            //             inputsEmail.style.display = '';
            //             break;
            //     }
            // });

            return el;
        },

        // Update the component based element changes
        onEvent({elInput, component}) {
            const wrapper = component.find('div > .carousel-inner')[0]
            wrapper && wrapper.append(`
                <div class="carousel-item">
                  <img class="d-block w-100" src=""
                    alt="Third slide">
                </div>
            `)
            const controlsWrapper = component.find('.carousel-indicators')[0]
            const controlsLength = controlsWrapper && controlsWrapper.find('li').length
            controlsLength && controlsWrapper.append(`
                <li data-target="#carousel-example-1z" data-slide-to="${controlsLength + 1}"></li>
            `)
            // `elInput` is the result HTMLElement you get from `createInput`
            // const inputType = elInput.querySelector('.href-next__type');
            // let href = '';

            // switch (inputType.value) {
            //     case 'url':
            //         const valUrl = elInput.querySelector('.href-next__url').value;
            //         href = valUrl;
            //         break;
            //     case 'email':
            //         const valEmail = elInput.querySelector('.href-next__email').value;
            //         const valSubj = elInput.querySelector('.href-next__email-subject').value;
            //         href = `mailto:${valEmail}${valSubj ? `?subject=${valSubj}` : ''}`;
            //         break;
            // }

            // component.addAttributes({ href });
        },

        onUpdate({elInput, component}) {
            // const href = component.getAttributes().href || '';
            // const inputType = elInput.querySelector('.href-next__type');
            // let type = 'url';
            //
            // if (href.indexOf('mailto:') === 0) {
            //     const inputEmail = elInput.querySelector('.href-next__email');
            //     const inputSubject = elInput.querySelector('.href-next__email-subject');
            //     const mailTo = href.replace('mailto:', '').split('?');
            //     const email = mailTo[0];
            //     const params = (mailTo[1] || '').split('&').reduce((acc, item) => {
            //         const items = item.split('=');
            //         acc[items[0]] = items[1];
            //         return acc;
            //     }, {});
            //     type = 'email';
            //
            //     inputEmail.value = email || '';
            //     inputSubject.value = params.subject || '';
            // } else {
            //     elInput.querySelector('.href-next__url').value = href;
            // }
            //
            // inputType.value = type;
            // inputType.dispatchEvent(new CustomEvent('change'));
        },
    });
    domc.addType('GALLERY', {
        model: {
            /*adding a button for showing forms-designs*/
            initToolbar() {
                defaultType.prototype.initToolbar.apply(this, arguments);
                window.selected_timeline_component = this;
                const tb = this.get('toolbar');
                const tbExists = tb.some(item => item.command === showGalleryCmd);

                if (!tbExists) {
                    tb.unshift({
                        command: showGalleryCmd,
                        label: showFormsIcon,
                    });
                    this.set('toolbar', tb);
                }
            },
            defaults: {
                traits: [{
                    type: 'new-slide',
                }],
                style: {
                    margin: '25px',
                    padding: '25px',
                    'text-align': 'center',
                },
                components: 'Choose your Gallery Design from the Left Menu!'
            }
        }
    })
    domc.addType('VIDEO', {
        model: {
            /*adding a button for showing forms-designs*/
            initToolbar() {
                defaultType.prototype.initToolbar.apply(this, arguments);
                window.selected_timeline_component = this;
                const tb = this.get('toolbar');
                const tbExists = tb.some(item => item.command === showVideoCmd);

                if (!tbExists) {
                    tb.unshift({
                        command: showVideoCmd,
                        label: showFormsIcon,
                    });
                    this.set('toolbar', tb);
                }
            },
            defaults: {
                src: '',
                style: {
                    margin: '25px',
                    padding: '25px',
                    'text-align': 'center',
                },
                components: 'Choose your Video Design from the Left Menu!'
            }
        }
    })
    domc.addType('MAP', {
        model: {
            /*adding a button for showing forms-designs*/
            initToolbar() {
                defaultType.prototype.initToolbar.apply(this, arguments);
                window.selected_timeline_component = this;
                const tb = this.get('toolbar');
                const tbExists = tb.some(item => item.command === showMapCmd);

                if (!tbExists) {
                    tb.unshift({
                        command: showMapCmd,
                        label: showFormsIcon,
                    });
                    this.set('toolbar', tb);
                }
            },
            defaults: {
                style: {
                    margin: '25px',
                    padding: '25px',
                    'text-align': 'center',
                },
                components: 'Choose your Map Design from the Left Menu!'
            }
        }
    })
    domc.addType('ACCORDION', {
        model: {
            defaults: {
                components: `
                       <!--Accordion wrapper-->
                        <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                        
                          <!-- Accordion card -->
                          <div class="card">
                        
                            <!-- Card header -->
                            <div class="card-header" role="tab" id="headingOne1">
                              <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                aria-controls="collapseOne1">
                                <h5 class="mb-0">
                                  Collapsible Group Item #1 <i class="fas fa-angle-down rotate-icon"></i>
                                </h5>
                              </a>
                            </div>
                        
                            <!-- Card body -->
                            <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                              <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                labore sustainable VHS.
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
                                  Collapsible Group Item #2 <i class="fas fa-angle-down rotate-icon"></i>
                                </h5>
                              </a>
                            </div>
                        
                            <!-- Card body -->
                            <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
                              <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                labore sustainable VHS.
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
                                  Collapsible Group Item #3 <i class="fas fa-angle-down rotate-icon"></i>
                                </h5>
                              </a>
                            </div>
                        
                            <!-- Card body -->
                            <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#accordionEx">
                              <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                labore sustainable VHS.
                              </div>
                            </div>
                        
                          </div>
                          <!-- Accordion card -->
                        
                        </div>
                        <!-- Accordion wrapper -->
                `,
                script: function () {
                }

            }
        }
    })


    domc.addType('MY-COMPONENT', {
        model: {
            defaults: {
                style: {
                    padding: '25px',
                    margin: '25px',
                    'text-align': 'center',
                },
                content: 'MY-COMPONENT'
                // Default props
            },
        },
        view: {},
    });
};
