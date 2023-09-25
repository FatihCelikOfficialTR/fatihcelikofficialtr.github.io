




        /* ********************** start nova alert ********************** */


        const novaAlert = function ({ icon = '', title = '', text = '', darkMode = false, showCancelButton = false, CancelButtonText = 'NO', ConfirmButtonText = 'Okay', dismissButton = true, input = false, inputPlaceholder = '' }) {


            let modal = document.createElement('div');
            modal.setAttribute('class', 'nova-modal');
            document.body.append(modal);
            let alert = document.createElement('div');
            alert.setAttribute('class', 'nova-alert')

            modal.appendChild(alert);
            var svg;

            if (darkMode == true) {
                alert.classList.add('nova-dark-mode');
            }




            if (icon == 'success') {
                svg = `<svg class="circular green-stroke">
                    <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10"/>
                </svg>
                <svg class="checkmark green-stroke">
                    <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)">
                        <path class="checkmark__check" fill="none" d="M616.306,283.025L634.087,300.805L673.361,261.53"/>
                    </g>
                </svg>`;
            } else if (icon == 'danger') {
                svg = `<svg class="circular red-stroke">
                    <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10"/>
                </svg>
                <svg class="cross red-stroke">
                    <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-502.652,-204.518)">
                        <path class="first-line" d="M634.087,300.805L673.361,261.53" fill="none"/>
                    </g>
                    <g transform="matrix(-1.28587e-16,-0.79961,0.79961,-1.28587e-16,-204.752,543.031)">
                        <path class="second-line" d="M634.087,300.805L673.361,261.53"/>
                    </g>
                </svg>`;
            } else if (icon == 'warning') {
                svg = `<svg class="circular yellow-stroke">
                    <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10"/>
                </svg>
                <svg class="alert-sign yellow-stroke">
                    <g transform="matrix(1,0,0,1,-615.516,-257.346)">
                        <g transform="matrix(0.56541,-0.56541,0.56541,0.56541,93.7153,495.69)">
                            <path class="line" d="M634.087,300.805L673.361,261.53" fill="none"/>
                        </g>
                        <g transform="matrix(2.27612,-2.46519e-32,0,2.27612,-792.339,-404.147)">
                            <circle class="dot" cx="621.52" cy="316.126" r="1.318" />
                        </g>
                    </g>
                </svg>`;
            } else {
                svg = '';
            }
            var icon_template = ` <div class="nova-icon">
               <div class="svg-box">
                 ${svg}
               </div>
           </div>`;
            var title_and_text = `
           <h3 class="nova-title">
              ${title}
           </h3>
           <p class="nova-text">
            ${text}
           </p>
           `;

            if (showCancelButton == true) {
                var buttons =
                    `
           <div class="nova-btns">
           <a class="accept">
              ${ConfirmButtonText}
           </a>
           <a class="reject">
            ${CancelButtonText}
           </a>
           </div>
           `;
            } else {
                var buttons =
                    `
           <div class="nova-btns">
           <a class="accept">
            ${ConfirmButtonText}
           </a>
           </div>
           `;
            }
            if (dismissButton == true) {

                var dismissButton = `<a class="dismissButton">
           X
           </a>`;
            } else {
                var dismissButton = `<a class="dismissButton hidden">
           X
           </a>`;
            }


            if (input == true) {
                var __input = `<input class="nova-input-alert" placeholder='${inputPlaceholder}'>`;
            } else {
                var __input = '';
            }


            var $content = icon_template + title_and_text + __input + buttons + dismissButton;






            alert.innerHTML = $content;




            document.querySelector('.nova-alert .reject  , .nova-alert .accept').onclick = closeNova;
            document.querySelector('.dismissButton').onclick = closeNova;



            function closeNova() {

                alert.remove();
                modal.remove();

            }


            this.then = function (callback) {


                document.querySelector('.nova-alert .accept').onclick = accept;

                function accept() {





                    if (input == true) {


                        var inputValue = document.querySelector('.nova-input-alert');
                        var val = inputValue.value;
                        closeNova();
                        callback(e = true, val);

                    } else {
                        closeNova();
                        callback(e = true);
                    }



                }

                document.querySelector('.nova-alert .reject').onclick = reject;
                function reject() {
                    closeNova();
                    callback(e = false);
                }




            }



        }




        /* ********************** end nova alert ********************** */

        new novaAlert({
            title: 'Hoş Geldin!',
            text: 'Seni burada görmek güzel oldu :) | He sana bi bilgim var ZH hesaplama eklendi!',
            dismissButton: false,
            darkMode: true,
            ConfirmButtonText: 'Hadi hesaplama yapalım mı?',

        });




        function input_alert() {
            new novaAlert({
                title: 'INPUT ALERT',
                text: 'this is input alert',
                dismissButton: true,
                input: true,
                inputPlaceholder: 'what is your name ?',
                showCancelButton: true,
                ConfirmButtonText: 'send',
                CancelButtonText: 'close'
            }).then((r, v) => {
                if (r) {
                    new novaAlert({
                        title: 'Hello ' + v
                    })
                }
            });
        }




        function show_warning() {

            new novaAlert({
                title: 'DELETE ACCOUNT',
                text: 'do you want to delete your account ?',
                icon: 'warning',
                showCancelButton: true,
            }).then(function (e) {

                if (e == true) {
                    new novaAlert({
                        icon: 'success',
                        title: 'very nice',
                        text: 'you selected Okay',
                    })
                } else {
                    new novaAlert({
                        icon: 'danger',
                        title: 'very nice',
                        text: 'you selected No',
                    })
                }




            })
        }


        function show_danger() {
            new novaAlert({
                icon: 'danger',
                title: 'danger alert',
                text: 'this is danger alert do you like this ?',
                showCancelButton: true,
                CancelButtonText: 'no i hate this :(',
                ConfirmButtonText: 'yes i love this :)',


            }).then((result) => {
                if (result) {
                    new novaAlert({
                        title: 'you selected : yes i love this :)'
                    })
                } else {
                    new novaAlert({
                        title: 'you selected : no i hate this :('
                    })
                }
            })
        }


        function show_success() {
            new novaAlert({
                icon: 'success',
                title: 'success alert',
                text: 'this is success alert do you like this ?',
                showCancelButton: true,
                CancelButtonText: 'no i hate this :(',
                ConfirmButtonText: 'yes i love this :)',
            }).then((result) => {
                if (result) {
                    new novaAlert({
                        title: 'you selected : yes i love this :)',
                        icon: 'success',
                        text: 'i know you liked this'
                    })
                } else {
                    new novaAlert({
                        title: 'you selected : no i hate this :(',
                        icon: 'danger',
                        text: 'why you hate me ? :('
                    })
                }
            })
        }


        function show_alert() {
            new novaAlert({
                title: 'Do you love js ?',
                icon: '',
                showCancelButton: true,
                dismissButton: false,
                ConfirmButtonText: 'Yes i love js',
                CancelButtonText: 'No i Hate js'
            }).then(function (e) {
                if (e) {
                    new novaAlert({
                        title: 'i love Javascript too :)',
                        dismissButton: false,

                    })



                } else {
                    new novaAlert({
                        title: 'but i love Javascript :)',
                        dismissButton: false,

                    })
                }
            })
        }


        function show_darkmode() {
            new novaAlert({
                title: 'dark Mode is good ha...',
                icon: '',
                dismissButton: false,
                darkMode: true
            })
        }


