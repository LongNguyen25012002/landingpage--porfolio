const  typingclass = document.querySelector('.hero__typing');
const words = ['developer','designer','photogra'];

let count = 0;
let letterCount = 0;
// typing text
function type(){
    if(count === words.length){
        count = 0;
    }
    let currentWords = words[count];
    let letters = currentWords.slice(0,++letterCount);
    typingclass.textContent = letters;
    if(letters.length === currentWords.length){
        letterCount = 0;
        count++;
    }
    setTimeout(type,400);
}

type();
// run count number
const updateCount = (el) => {
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value / 1000);
    let initialValue = 0;
    const increaseCount = setInterval(() => {
      initialValue += increment;
      if (initialValue > value) {
        el.textContent = `${value}`;
        clearInterval(increaseCount);
        return;
      }
      el.textContent = `${initialValue}`;
    }, 1);
  };
  
  const items = [...document.querySelectorAll('.facts__count-number')];
  
  items.forEach((item) => {
    updateCount(item);
  });
  
// render products
function renderProduct(){
  const products = [
    {
      id:1,
      img: './asset/img/portfolio-1.jpg',
    },
    {
      id:2,
      img:'./asset/img/portfolio-2.jpg',
    },
    {
      id:3,
      img:'./asset/img/portfolio-3.jpg',
    },
    {
      id:4,
      img:'./asset/img/portfolio-4.jpg',
    },
    {
      id:5,
      img:'./asset/img/portfolio-5.jpg',
    },
    {
      id:6,
      img:'./asset/img/portfolio-6.jpg',
    },
    {
      id:7,
      img:'./asset/img/portfolio-7.jpg',
    },
    {
      id:8,
      img:'./asset/img/portfolio-8.jpg',
    },
    {
      id:9,
      img:'./asset/img/portfolio-9.jpg',
    }
  ];

  var parentClass = document.querySelector('.js-render-products');
  var cardProduct = '';
  for (var getProduct of products){
    cardProduct += `
      <div class="col c-12 m-6 l-4">
      <div class="portfolio__card">
          <img src="${getProduct.img}" alt="produc-img" class="portfolio__card-img">
          <div class="portfolio__card-layer-add">
              <a href="" class="portfolio__card-add-link"><i class="bi bi-plus"></i></a>
              <a href="" class="portfolio__card-add-link"><i class="bi bi-link"></i></a>
          </div>
      </div>
    </div> `; 
  }
  return parentClass.innerHTML = cardProduct;
}
renderProduct();

$(document).ready(function(){
  $('.testimonials__content').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,
      autoplayspeed: 2000,
      dots: true,
      arrows: false,
      responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              draggable: false,
              dots: true
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 530,
            settings: {
              slidesToShow: 1,
          }
          }
        
        ]
  });
});

// scroll-retun;
var link_retun = document.querySelector('.scron-retun-home');
window.addEventListener('scroll',function(){
  if(window.scrollY > 100){
    link_retun.style.display = 'block';
  } else {
    link_retun.style.display = 'none';
  }
});

// scroll-active
var linkNav = document.querySelectorAll('.navbar__menu-link');
var section = document.querySelectorAll('section');

window.onscroll = () => {
  section.forEach( sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if (top > offset && top < offset + height){
      linkNav.forEach(function(links){
        links.classList.remove('navbar__menu-link--active');
        document.querySelector('.navbar__menu-item a[href*=' + id + ']').classList.add('navbar__menu-link--active');
      })
    }
  })
}

// navbar on mobile and tablet 
var toggleMenu = document.querySelector('.js-btn-menu');
var navbar = document.querySelector('.js-navbar')
    toggleMenu.onclick = () => {
      navbar.classList.toggle('navbar--active');
      if (navbar.classList.contains('navbar--active') == true){
        document.querySelector('.js-btn-menu i').className = 'bi bi-x';
      } else {
        document.querySelector('.js-btn-menu i').className = 'bi bi-list';
      }
    }