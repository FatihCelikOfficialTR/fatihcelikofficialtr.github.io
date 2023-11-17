//
// Lazy load img
// document.querySelectorAll('video').forEach(elem => elem.play())
const imageBlockObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const lazyBlock = entry.target;
      const lazyImage = lazyBlock.querySelectorAll(".lzy_img_new");
      lazyImage.forEach((elem) => {
        elem.src = elem.dataset.src;
        elem.classList.remove("lzy_img_new");
      });
      lazyBlock.classList.remove("lzy_img_bl");
      imgObserver.unobserve(lazyBlock);
    }
  });
});
const arrBlockImg = document.querySelectorAll(".lzy_img_bl");
arrBlockImg.forEach((v) => {
  imageBlockObserver.observe(v);
});
//
// Lazy bg
const imageBg = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const lazyBackground = entry.target
      lazyBackground.style.backgroundImage = `url(${lazyBackground.dataset.image})`
      lazyBackground.classList.remove('lzy_bg')
      imgObserver.unobserve(lazyBackground)
    }
  })
})
const arrBg = document.querySelectorAll('.lzy_bg')
arrBg.forEach((v) => {
  imageBg.observe(v)
})

const imageBlocBgkObserver = new IntersectionObserver(
  (entries, imgObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyContainer = entry.target
        const lazyBlockBg = lazyContainer.querySelectorAll('.lzy_bl')
        lazyBlockBg.forEach((elem) => {
          elem.style.backgroundImage = `url(${elem.dataset.image})`
          elem.classList.remove('lzy_bl')
        })
        lazyContainer.classList.remove('lzy_bg_container')
        imgObserver.unobserve(lazyContainer)
      }
    })
  },
)
const lzyBgContainer = document.querySelectorAll('.lzy_bg_container')
lzyBgContainer.forEach((v) => {
  imageBlocBgkObserver.observe(v)
})
// Скролл по клику
function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop
  // Internet Explorer 6, 7 and 8init_pointer
  if (document.body.scrollTop) return document.body.scrollTop
  return 0
}

function elmYPosition(eID) {
  let elm = document.querySelector(eID)
  let y = elm.offsetTop
  let node = elm
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent
    y += node.offsetTop
  }
  return y
}

function smoothScroll(eID) {
  let startY = currentYPosition()
  let stopY = elmYPosition(eID) - 50
  let distance = stopY > startY ? stopY - startY : startY - stopY
  if (distance < 100) {
    scrollTo(0, stopY)
    return
  }
  let speed = Math.round(distance / 100)
  if (speed >= 20) speed = 20
  let step = Math.round(distance / 30)
  let leapY = stopY > startY ? startY + step : startY - step
  let timer = 0
  if (stopY > startY) {
    for (let i = startY; i < stopY; i += step) {
      setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed)
      leapY += step
      if (leapY > stopY) leapY = stopY
      timer++
    }
    return
  }
  for (let i = startY; i > stopY; i -= step) {
    setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed)
    leapY -= step
    if (leapY < stopY) leapY = stopY
    timer++
  }
}
document.querySelectorAll('.scroll_to').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(e.target)
    if (e.target.getAttribute('href') != null) {
      if (document.querySelector(e.target.getAttribute('href'))) {
        smoothScroll(e.target.getAttribute('href'))
        overlayMenu.classList.remove('open_menu')
        overlayMenu.classList.add('close__burger')
      } else {
        // console.log(this.getAttribute('href'));
        window.location = `/${e.target.getAttribute('href')}`
      }
    }
  })
})

//

const headSection = document.querySelector('.head__section')
const headerFixed = document.querySelector('.header')
const arrowFixed = document.querySelector('.scroll_up')
// const aboutLink = document.querySelector('.about__link');
// const mainHeadSection = document.querySelector(".head_section_main ");
const htmlTag = document.querySelector('html')
const windowHeight = window.screen.height / 3
// console.log(windowHeight)
if (headerFixed) {
  window.addEventListener('scroll', function () {
    if (htmlTag.getAttribute('data-scroll-dir-y') > 0) {
      headerFixed.classList.add('scroll__down')
      headerFixed.classList.remove('scroll__up')
    } else {
      headerFixed.classList.remove('scroll__down')
      headerFixed.classList.add('scroll__up')
    }

    window.pageYOffset > 1
      ? headerFixed.classList.add('header_fixed')
      : headerFixed.classList.remove('header_fixed')
    // window.pageYOffset > window.screen.height ? arrowFixed.classList.add('visible_arrow') : arrowFixed.classList.remove('visible_arrow');
  })
  if (window.pageYOffset > windowHeight) headerFixed.classList.add('header_fixed')
}


const btnBurger = document.querySelectorAll('.menu__burger')
const overlayMenu = document.querySelector('.menu')

btnBurger.forEach((elem) => {
  elem.onclick = () => {
    document.querySelector('body').classList.toggle('locked')
    overlayMenu.classList.add('open_menu')
    // overlayMenu.classList.remove('close__burger')
  }
})
document.querySelectorAll('.menu__close').forEach((elem) => {
  elem.onclick = function (e) {
    overlayMenu.classList.remove('open_menu')
    // overlayMenu.classList.add('close__burger')
  }
})
const openDashboard = document.querySelectorAll('.open_dashboard')
const dashboardSidebar = document.querySelector('.dashboard__sidebar')

openDashboard.forEach((elem) => {
  elem.onclick = () => {
    document.querySelector('body').classList.toggle('locked')
    dashboardSidebar.classList.add('open_menu')
    // overlayMenu.classList.remove('close__burger')
  }
})
document.querySelectorAll('.menu__close_dashboard').forEach((elem) => {
  elem.onclick = function (e) {
    dashboardSidebar.classList.remove('open_menu')
    // overlayMenu.classList.add('close__burger')
  }
})


//////////////////////////
// Open Form
//////////////////////////
// const formWrap = document.querySelectorAll('.input__group')
// formWrap.forEach((elem) => {
//   const formInput = elem.querySelector('.order__input')
//   const formLabel = elem.querySelector('.place_span')
//   formInput.addEventListener('focus', () => {
//     formLabel.classList.add('fixed_span')
//   })
//   formInput.addEventListener('focusout', (e) => {
//     console.log(e.target.value)
//     if (e.target.value === '') {
//       formLabel.classList.remove('fixed_span')
//     }
//   })
// })

const elemAnim = document.querySelectorAll('.elem__anim')
elemAnim.forEach(item => {
  if (item.hasChildNodes()) {
    const childList = item.querySelectorAll('h1, h2, h3, h4, a, button, p, ul, ol')
    childList.forEach(elem => elem.classList.add('xyz_start'))
  }
})


ScrollOut({
  targets: '.xyz_start',
  onShown: (el) => {
    el.classList.add('xyz-in')
  },
})

const slideDownPure = (el) => {
  el.style.height = `${el.scrollHeight}px`;
  el.style.opacity = '1';
  // el.style.overflow = 'visible';
};

const slideUpPure = (el) => {
  el.style.height = '0';
  el.style.opacity = '0';
  el.style.overflow = 'hidden';
  el.style.marginBottom = '0';
};
function tabs(secondsTransition) {
  const buttons = document.querySelectorAll('[data-tab="button"]');
  const contents = document.querySelectorAll('[data-tab="content"]');

  contents.forEach((content) => {
    content.style.opacity = "0";
    content.style.height = "0";
    content.style.overflow = "hidden";
    content.style.transition = `all ${secondsTransition}s ease`;
  });

  buttons.forEach((button, index) => {
    if (button.classList.contains("active")) {
      slideDownPure(contents[index]);
    }

    button.onclick = () => {
      if (!button.classList.contains("active")) {
        contents.forEach((content) => slideUpPure(content));
        buttons.forEach((button) => button.classList.remove("active"));
        button.classList.add("active");
        slideDownPure(contents[index]);
      }
    };
  });
}

tabs(0.5);




function accordion(secondsTransition) {
  const items = document.querySelectorAll('[data-accordion="item"]');
  const texts = document.querySelectorAll('[data-accordion="text"]');

  items.forEach((item) => {
    const title = item.querySelector('[data-accordion="title"]');
    const text = item.querySelector('[data-accordion="text"]');

    text.style.opacity = '0';
    text.style.height = '0';
    text.style.overflow = 'hidden';
    text.style.transition = `all ${secondsTransition}s ease`;
    if (item.classList.contains('open')) {
      slideDownPure(text);
    }

    title.onclick = () => {
      if (item.classList.contains('open')) {
        item.classList.remove('open');
        slideUpPure(text);
      } else {
        texts.forEach((text) => slideUpPure(text));
        items.forEach((item) => item.classList.remove('open'));
        item.classList.add('open');
        slideDownPure(text);
      }
    };
  });
}

accordion(0.5);

const readMoreBtn = document.querySelectorAll('.team__page_description_more')
readMoreBtn.forEach(btn => {
  btn.addEventListener('click', function ({ target }) {
    if (target.closest('.team__page_item').classList.contains('open')) {
      btn.querySelector('span').textContent = 'Read less'
    } else {
      btn.querySelector('span').textContent = 'Read more'
    }
  })
})

//////////////////////////
// Open Form
//////////////////////////
const searchOpen = document.querySelectorAll('.search_open')
const openForm = document.querySelectorAll('.open__form')
const hiddenInput = document.querySelector('.order_form .hidden__input')
const popupSearch = document.querySelector('.popup_search')
const popupSubtitle = document.querySelector('.order_form .popup__subtitle')

const popupWrap = document.querySelectorAll('.popup')
popupWrap.forEach((elem) => {
  elem.onclick = (e) => {
    if (
      e.target.classList.contains('popup') ||
      e.target.classList.contains('close_popup')
    ) {
      document.querySelector('html').style.overflowY = 'auto'
      // document.querySelector('body').style.height = "auto"
      elem.classList.remove('open')
    } else if (e.target.classList.contains('open__form')) {
      e.preventDefault()
      elem.classList.remove('open')
      document.querySelector(`.${e.target.dataset.form}`).classList.add('open')
      document.querySelector('html').style.overflowY = 'hidden'
    }
  }
})

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('open__form')) {
    let formOpen = document.querySelector(`.${e.target.dataset.form}`)
    if (formOpen) {
      formOpen.classList.add('open')
      document.querySelector('html').style.overflowY = 'hidden'
      if (e.target.dataset.title) {
        popupSubtitle.innerHTML = e.target.dataset.title
        hiddenInput.value = e.target.dataset.title
        console.log(hiddenInput.value)
      }
      // document.querySelector('body').style.height = "100vh"
    }
  }
  if (e.target.classList.contains('search_open')) {
    popupSearch.classList.add('open')
    document.querySelector('html').style.overflowY = 'hidden'
  }
})

const beginersItem = document.querySelectorAll('.beginers__item')
const beginersImages = document.querySelectorAll('.beginers__images img')
beginersItem.forEach((item, idx) => {
  item.addEventListener('mouseover', function () {
    beginersItem.forEach(elem => elem.classList.remove('active'))
    beginersImages.forEach(elem => elem.classList.remove('active'))
    item.classList.add('active')
    beginersImages[idx].classList.add('active')
  })
})


const aboutSwiper = new Swiper('.about__swiper', {
  spaceBetween: 30,
  // effect: 'fade',
  direction: 'vertical',

  loop: true,
  speed: 2500,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
const affilateSwiper = new Swiper('.affilate__swiper', {
  spaceBetween: 1,
  // effect: 'fade',
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

if (window.screen.width > 992) {
  $('.js-tilt').tilt({
    glare: false,
    maxTilt: 3
  })
}

Scrollbar.initAll()

// Parallax mouse effect 
if (window.screen.width > 991) {
  const scene = document.querySelectorAll('.scene');
  scene.forEach((element) => {
    const parallax = new Parallax(element);
  });
}

const selectOpen = document.querySelectorAll('.select__open')
const selectOverlow = document.querySelectorAll('.select__overlow')
selectOpen.forEach((item, idx) => {
  item.onclick = () => {
    if (selectOverlow[idx]) {
      selectOverlow[idx].classList.add('active')
    }

  }
})

const orderInputName = document.querySelector('.order__input_name')
const selectName = document.querySelectorAll('.select__name')
selectName.forEach(btnSelect => {
  btnSelect.addEventListener('click', function ({ target }) {
    let btnOPen = btnSelect.closest('.select__group').querySelector('.select__open')
    btnSelect.closest('.select__group').querySelector('.select__overlow').classList.remove('active')
    btnOPen.innerHTML = btnSelect.innerHTML
    selectName.forEach(item => item.classList.remove('select__btn_check'))
    btnSelect.classList.add('select__btn_check')
  })
})
if (orderInputName) {
  orderInputName.addEventListener('input', function ({ target }) {
    let valueInput = target.value.toLowerCase()
    console.log(valueInput);
    if (valueInput.length > 2) {
      selectName.forEach(item => {
        let textItem = item.textContent.toLowerCase()
        if (textItem.includes(valueInput)) {
          console.log(1);
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      })
    } else {
      selectName.forEach(elem => {
        elem.style.display = 'flex';
      })
    }
  })
}


const openSocial = document.querySelector('.about .open__social')
const socialOverflow = document.querySelector('.about .social__overflow')
if (openSocial) {
  openSocial.onclick = () => {
    socialOverflow.classList.toggle('active')
  }
}


const passwordShow = document.querySelector('.password_show')
const password = document.querySelector('.password')

const copyLink = document.querySelectorAll(".copy_link")

copyLink.forEach(elem => {
  elem.addEventListener('click', e => {
    navigator.clipboard.writeText(document.location.href)
      .then(() => alert("Copied the text: " + document.location.href))
      .catch(err => console.error(err))
  })
})

const inviteCopyPopup = document.querySelector(".invite_copy_popup")
const inputInvitePopup = document.querySelector(".input_invite_popup")

if (inviteCopyPopup) {
  inviteCopyPopup.addEventListener('click', e => {
    navigator.clipboard.writeText(inputInvitePopup.value)
      .then(() => alert("Copied the text: " + inputInvitePopup.value))
      .catch(err => console.error(err))
  })
}


const inviteCopy = document.querySelectorAll(".invite_copy")
const affilateCopyInput = document.querySelector(".affilate__promo_link input")
inviteCopy.forEach((elem, idx) => {
  elem.addEventListener('click', e => {
    navigator.clipboard.writeText(affilateCopyInput.value)
      .then(() => alert("Copied the text: " + affilateCopyInput.value))
      .catch(err => console.error(err))
  })
})


const depositCopyAddress = document.querySelectorAll(".deposit__copy_address")
const depositAddress = document.querySelectorAll(".deposit__address p")
depositCopyAddress.forEach((elem, idx) => {
  elem.addEventListener('click', e => {
      var addressForCopy = elem.getAttribute('address')
    navigator.clipboard.writeText(addressForCopy)
      .then(() => alert("Copied the text: " + addressForCopy.trim()))
      .catch(err => console.error(err))
  })
})

const faqPageItme = document.querySelectorAll('.faq__page_itme')
const faqPageAnswer = document.querySelectorAll('.faq__page_answer')
faqPageItme.forEach((elem, idx) => {
  elem.onclick = () => {
    faqPageAnswer[idx].classList.add('open')
  }
})
faqPageAnswer.forEach(answer => {
  answer.addEventListener('click', ({ target }) => {
    if (target.classList.contains('faq__page_answer') || target.classList.contains('faq__page_close')) {
      answer.classList.remove('open')
    }
  })
});



const affilatePromoInvite = document.querySelectorAll('.affilate__promo_material')
const popupAffilate = document.querySelectorAll('.popup_affilate')
const popupVerify = document.querySelectorAll('.popup__verify')
affilatePromoInvite.forEach((elem, idx) => {
  elem.onclick = () => {
    popupAffilate[idx].classList.add('open')
  }
})

popupAffilate.forEach(answer => {
  answer.addEventListener('click', ({ target }) => {
    if (target.classList.contains('popup_affilate') || target.classList.contains('popup_affilate_close')) {
      answer.classList.remove('open')
    }
  })
});

popupVerify.forEach(verify => {
  verify.addEventListener('click', ({ target }) => {
    if (target.classList.contains('popup__verify') || target.classList.contains('close_verify')) {
      verify.classList.remove('open')
    }
  })
});


const changeType = document.querySelectorAll('.change_type')
const orderInputPassword = document.querySelectorAll('.order__input_password')
changeType.forEach((elem, idx) => {
  elem.onclick = () => {
    elem.classList.toggle('open')
    elem.classList.contains('open') ? orderInputPassword[idx].setAttribute('type', 'text') : orderInputPassword[idx].setAttribute('type', 'password')
  }
})


const faPopup = document.querySelectorAll('.fa__popup')
// const settingItemFa = document.querySelectorAll('.setting__item_fa')
// settingItemFa.forEach((elem, idx) => {
//   elem.onclick = () => {
//     faPopup.classList.add('open')
//   }
// })
faPopup.forEach(fa => {
  fa.addEventListener('click', ({ target }) => {
    if (target.classList.contains('fa__popup') || target.classList.contains('fa__popup_close')) {
      fa.classList.remove('open')
    }
  })
});

const settingItemPassword = document.querySelectorAll('.setting__item_password')
const settingPopup = document.querySelectorAll('.setting__popup')
settingItemPassword.forEach((elem, idx) => {
  elem.onclick = () => {
    settingPopup[idx].classList.add('open')
  }
})
settingPopup.forEach(setting => {
  setting.addEventListener('click', ({ target }) => {
    if (target.classList.contains('setting__popup') || target.classList.contains('setting__popup_close')) {
      setting.classList.remove('open')
    }
  })
});

const withdrowPopupSend = document.querySelector('.withdrow__popup_send')
const withdrowPopupExchange = document.querySelector('.withdrow__popup_exchange')
const exchangeIconFrom = document.querySelector('.withdrow__popup_exchange .exchange_icon_from')
const inputGroupAmountInput = document.querySelector('.input__group_amount input')
const inputGroupFromtInput = document.querySelector('.input__group_from input')
const inputShortNameEnter = document.querySelector('.input__group_amount_enter span')




const depositItemWd = document.querySelectorAll('.deposit__item_wd')
depositItemWd.forEach(item => {

  const btnWitdrow = item.querySelector('.deposit__wd_btn_open')
  const depositWdBtnExchange = item.querySelector('.deposit__wd_btn_exchange')
  const iconWitdrow = item.querySelector('.deposit__name img')
  const shortNameWitdrow = item.querySelector('.deposit__name span')

  btnWitdrow.onclick = () => {
    withdrowPopupSend.classList.add('open')
    inputGroupAmountInput.style.backgroundImage = `url(${iconWitdrow.src})`
    inputShortNameEnter.innerHTML = shortNameWitdrow.textContent.trim()
  }
  depositWdBtnExchange.onclick = () => {
    withdrowPopupExchange.classList.add('open')
    inputGroupFromtInput.style.backgroundImage = `url(${iconWitdrow.src})`
    exchangeIconFrom.src = iconWitdrow.src
  }
})


const btnConfirmExchange = document.querySelector('.btn__confirm_exchange')
const withdrowPopupConfirm = document.querySelector('.withdrow__popup_confirm')
const withdrowPopupSuccess = document.querySelector('.withdrow__popup_success')
const withdrowPopupConfirmClose = document.querySelector('.withdrow__popup_close_confirm')
const withdrowPopupConfirmBtn = document.querySelectorAll('.withdrow__popup_confirm .btn')
if (btnConfirmExchange) {
  btnConfirmExchange.onclick = () => {
    withdrowPopupConfirm.classList.add('open')
  }
}
if (withdrowPopupConfirmClose) {
  withdrowPopupConfirmClose.onclick = () => {
    withdrowPopupConfirm.classList.remove('open')
  }
}

withdrowPopupConfirmBtn.forEach(btn => {
  btn.addEventListener('click', ({ target }) => {
    withdrowPopupConfirm.classList.remove('open')
  })
});
if(withdrowPopupConfirm){
  withdrowPopupConfirm.addEventListener('click', ({target})=>{
    if (target.classList.contains('btn_yes')) {
      withdrowPopupSuccess.classList.add('open')  
    }
    if (target.classList.contains('btn_no')) {
      withdrowPopupConfirm.classList.remove('open')
    }
    })
    
}



const withdrowPopup = document.querySelectorAll('.withdrow__popup')
withdrowPopup.forEach(popup => {
  popup.addEventListener('click', ({ target }) => {
    if (target.classList.contains('withdrow__popup') || target.classList.contains('withdrow__popup_close')) {
      popup.classList.remove('open')
    }
  })
});


// Calculate popup
const minersHeadCalc = document.querySelectorAll('.miners__head .calc')
const minersHeadCalcImg = document.querySelectorAll('.miners__head .icon img')

minersHeadCalc.forEach((btn, idx) => btn.onclick = () => {
  console.log(minersHeadCalcImg[idx].src);
  document.querySelector('.order__input_valute').style.backgroundImage = `url(${minersHeadCalcImg[idx].src})`

  calculatePopup.classList.add('open')
})

const calculatePopup = document.querySelector('.calculate__popup')

if (calculatePopup) {
  calculatePopup.addEventListener('click', ({ target }) => {
    if (target.classList.contains('calculate__popup') || target.classList.contains('calculate__popup_close')) {
      calculatePopup.classList.remove('open')
    }
  })
}

// Exit popup
const exitBtn = document.querySelectorAll('.exit_btn')
const exitPopup = document.querySelector('.exit__popup')
exitBtn.forEach(btn => btn.onclick = () => exitPopup.classList.add('open'))


if (exitPopup) {
  exitPopup.addEventListener('click', ({ target }) => {
    if (target.classList.contains('exit__popup') || target.classList.contains('exit__popup_close') || target.classList.contains('btn__no')) {
      exitPopup.classList.remove('open')
    }
  })
}

// Support popup
const suuportLine = document.querySelector('.suuport__line')
if (suuportLine) {
  suuportLine.addEventListener('click', ({ target }) => {
    target.classList.contains('support__close') ? suuportLine.style.display = 'none' : false
  })
}



const dashboardBanners = new Swiper('.dashboard__banners', {
  spaceBetween: 1,
  // effect: 'fade', 
  slidesPerView: 3,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroupSkip: 1,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroupSkip: 1,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 3500,
        disableOnInteraction: true,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,      
      slidesPerGroupSkip: 1,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 3500,
        disableOnInteraction: true,
      },
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 17,
      loop: false,
      autoplay:false,
    },
  },
});

const mining_Swiper = new Swiper('.mining__swiper', {
  
  // effect: 'fade', 
  slidesPerView: 3,
  spaceBetween: 60,  
  navigation: {
    nextEl: ".mining__arrow_right",
    prevEl: ".mining__arrow_left",
  },  
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,    
    },
    576: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
     
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,    
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 60,    
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 60,    
    },
  },
});

// Sticky miningSticky
const minersList = document.querySelector('.miners__list') 
const miningSticky = document.querySelector('.mining__sticky')
 
// console.log(minersList);
console.log();
if(minersList){
  window.addEventListener('scroll', function () {
    if(minersList.getBoundingClientRect().top < 0 ){
      miningSticky.classList.add('show')
    } else{
      miningSticky.classList.remove('show')
    }

  })
}


const minersBtnInc = document.querySelectorAll('.miners__btn_inc')
const tokenPlay = document.querySelectorAll('.token_play')
const miners__block = document.querySelectorAll('.miners__block img')
minersBtnInc.forEach((btn, idx) => {
  btn.onclick = () => {
    tokenPlay.forEach(video => {
      video.classList.remove('playing')
      video.pause()
    })
    tokenPlay[idx].play()
    tokenPlay[idx].classList.add('playing')
  }
})

// async function playVideo(videoElem) {
//   try {
//     await videoElem.play();
//     playButton.classList.add("playing");
//   } catch (err) {
//     playButton.classList.remove("playing");
//   }
// }

// function handlePlayButton(videoElem) {
//   if (videoElem.paused) {
//     playVideo();
//   } else {
//     videoElem.pause();
//     playButton.classList.remove("playing");
//   }
// }


if (document.querySelector('.benefits__number')) {
  $(document).ready(function () {
    if ($('.benefits__number')) {
      $('.benefits__number').css('opacity', '0');
      var show = true;
      var countbox = ".benefits__inner";
      $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.benefits__number').css('opacity', '1');
          $('.benefits__number').spincrement({
            thousandSeparator: "",
            duration: 1200
          });

          show = false;
        }
      });
    }
  });
}

if(document.querySelector('[data-fancybox]')){
  Fancybox.bind('[data-fancybox]', {});
}

var iOS = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent); // fails on iPad iOS 13

console.log('test IOS fuction');
console.log(iOS);

if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
console.log('test detected if');
console.log('is ifon');
document.querySelectorAll('.iphone_video').forEach(elem=>elem.style.display = 'none')
document.querySelectorAll('.video_preload').forEach(elem=>elem.style.display = 'inline')

  
}


