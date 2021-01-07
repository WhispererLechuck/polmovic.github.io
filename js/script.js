

function getPosition(element) {
        var e = document.getElementById("'" +element +"'");
        var left = 0;
        var top = 0;

        do {
            left += e.offsetLeft;
            top += e.offsetTop;
        } while (e = e.offsetParent);

        return [left, top];
    }

    function jumpTo(id) {
document.getElementById('id').scrollIntoView();
    }

//Function swtich between enabled bar or not
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function isMobile() {
return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}



var typed = new Typed(".typing", {
        strings: ["Traveler", "Web Developer", "Coder", "photography lover", "Foodie", "gamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
calculateAge();
    function calculateAge() {
      var now = new Date();
      var dob = new Date(1990,10,11);
      var year=now.getYear()-dob.getYear();
      var month=now.getMonth()-dob.getMonth();
      if(month<0){
        month=now.getMonth()+12-dob.getMonth();
        year=year-1;
      }
      var day=now.getDate()-dob.getDate();
      if(day<0){
        var monthNumber=dob.getMonth();
        var fullDate=getFullDate(monthNumber);
        day=now.getDate()+fullDate-dob.getDate();
        month=month-1;
      }
      document.getElementById('age').innerHTML = year;
      return year+" Years, "+month+" Months, "+day+" Days!";
    };
    function getFullDate(x){
      switch(x){
        case 0:
          return 31;
          break;
        case 1:
          return 28;
          break;
        case 2:
          return 31;
          break;
        case 3:
          return 30;
          break;
        case 4:
          return 31;
          break;
        case 5:
          return 30;
          break;
        case 6:
          return 31;
          break;
        case 7:
          return 31;
          break;
        case 8:
          return 30;
          break;
        case 9:
          return 31;
          break;
        case 10:
          return 30;
          break;
        case 11:
          return 31;
      }
}

const card = document.querySelectorAll(".card__inner");

function flipCard() {
  this.classList.toggle('is-flipped');
}
card.forEach((card) => card.addEventListener("click", flipCard));


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

    /*

    window.onscroll = function() {scrollColor()};

    function scrollFunction() {
      if (document.body.scrollTop > 81 || document.documentElement.scrollTop > 81) {
        document.getElementById("myTopnav").style.padding = "30px 10px";
      } else {
        document.getElementById("myTopnav").style.padding = "60px 10px";
      }
    }

    function scrollColor() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myTopnav").style.backgroundColor = "red";
      } else {
        document.getElementById("myTopnav").style.backgroundColor = 'rgba(255,124,0,0)';
      }

    }

    //////INDIA

    $(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('scroll-up-btn').addClass("show");
        }
        else{
            $('scroll-up-btn').removeClass("show");
        }
    });

    //slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


*/
