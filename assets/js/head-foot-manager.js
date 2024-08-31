class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
        <div class="nav-menu flex justify-center items-center fixed -top-[100vh] left-0 h-screen w-full z-[999999] bg-[#000000d3] transition-all ease-in-out duration-500">
      <div class="nav-items w-[50%] h-[80%]  text-gold poppins text-4xl text-center  ">
        <ul class="h-full flex flex-col justify-evenly items-center">
          <a href="./" class="w-fit"><li>Home</li></a>
          <a href="./about.html" class="w-fit"><li>About</li></a>
          <a href="./gifting-ideas-1.html" class="w-fit"
            ><li>Gifting Ideas</li></a
          >
          <a href="./gifting-ideas-2.html" class="w-fit"><li>Services</li></a>
          <a href="./clients.html" class="w-fit"><li>Clients</li></a>
          <a href="./contact.html" class="w-fit"><li>Contact Us</li></a>
        </ul>
      </div>
      <i class="fas fa-times text-gold text-2xl absolute top-5 right-5" onclick="closeMenu()"></i>
    </div>
    <div class="nav-bar-section">
        <div class="top-bar relative w-full justify-center p-3 hidden lg:flex">
          <div class="w-[70%] flex justify-end">
            <div
              class="top-bar-content flex items-center w-[45%] 2xl:w-[40%] justify-between"
            >
              <div class="bar-left flex items-center">
                <div class="phone-number flex items-center text-xs 2xl:text-sm mr-5">
                  <i class="fas fa-phone mr-2 text-sm h-auto"></i>
                  <p class="text-sm text-[#B1B1B1]">+91 98765 0000</p>
                </div>
                <div class="email flex items-center text-sm">
                  <i class="fas fas fa-map-marker-alt mr-2 text-sm"></i>
                  <p class="text-sm text-[#B1B1B1]">gorupone@gmail.com</p>
                </div>
              </div>
              <div class="socials flex items-center text-xs 2xl:text-sm">
                <i class="fab fa-twitter text-sm"></i
                ><i class="fab fa-facebook mx-2 text-sm"></i>
                <i class="fab fa-linkedin text-sm"></i
                ><i class="fab fa-instagram ml-2 text-sm"></i>
              </div>
            </div>
          </div>
        </div>
        
        <nav class="flex justify-center w-full absolute p-3 z-50">
          <div
            class="nav-container w-[95%] lg:w-[70%] flex justify-between items-center"
          >
            <a href="index.html" class="w-fit"> <img
              src="./assets/images/logo.png"
              alt=""
              class="lg:w-[234.68px] w-32 h-auto"
            /></a>
            <ul
              class="nav-links text-sm 2xl:text-lg w-[45%] 2xl:w-[40%] hidden lg:flex justify-between font-semibold"
            >
              <a href="./" class="w-fit hover:text-gold transition-all duration-300 ease-in-out nav-link-animation"><li>Home</li></a>
              <a href="./about.html" class="w-fit hover:text-gold transition-all duration-300 ease-in-out nav-link-animation"><li>About</li></a>
              <a href="./gifting-ideas-1.html" class="w-fit hover:text-gold transition-all duration-300 ease-in-out nav-link-animation"
                ><li>Gifting Ideas</li></a
              >
              <a href="./gifting-ideas-2.html" class="w-fit hover:text-gold transition-all duration-300 ease-in-out nav-link-animation"><li>Services</li></a>
              <a href="./clients.html" class="w-fit hover:text-gold transition-all duration-300 ease-in-out nav-link-animation"><li>Clients</li></a>
              <a href="./contact.html" class="w-fit hover:text-gold transition-all duration-300 ease-in-out nav-link-animation"><li>Contact Us</li></a>
            </ul>
            <div class="block lg:hidden">
              <i class="fas fa-bars text-gold text-xl" onclick="openMenu()"></i>
            </div>
          </div>
        </nav>
      </div>
    `;
    }
}


customElements.define('my-header', myHeader);




class myFooter extends HTMLElement{
    connectedCallback(){
    this.innerHTML=`    <div class="footer w-full flex justify-center bg-black lg:p-20 pb-24 relative pt-10">
    <div
      class="footer-container lg:w-[70%] w-[90%] flex flex-col items-center relative pb-20"
    >
      <div class="br-head text-center w-full ">
        <div class="client-heading ">
          <p class="lg:text-2xl text-lg font-semibold text-white">Newsletter</p>
          <h2 class="text-[#C6A465] text-2xl lg:text-5xl mt-3">
            Sign up for exclusive <br />offers from us
          </h2>
        </div>
      </div>
      <div
        class="newsletter-form bg-transparent border-b border-white flex justify-between lg:w-[70%] items-center"
      >
        <input
          type="text"
          placeholder="Email ID"
          class="bg-transparent border-0 lg:text-lg text-white placeholder:text-white p-5 focus:outline-none w-[50%]"
        />
        <a href=""
          ><button
            class="px-4 py-2 border text-sm lg:text-base border-gold hover:bg-gold hover:text-black text-white bg-transparent transition-all duration-500 ease-in-out"
          >
            SUBSCRIBE
          </button></a
        >
      </div>
      <div class="footer-content grid lg:grid-cols-5 gap-5 mt-20">
        <div class="foot-desc col-span-2">
          <img src="./assets/images/footer-gold.png" alt="" class="mb-5 w-56" />
          <p class="text-white lg:text-lg mb-10 lg:w-[90%] ">
            The Bathrooms hnice. is the leader of floor installation and
            repair in the country sed diam nonumy eirmod tempor invidunt ut
            labore and efficient strategy.
          </p>
          <div class="flex items-center">
            <i class="fas fa-phone-alt text-gold lg:text-lg mr-3"></i>
            <p class="text-gold lg:text-lg">+ 1875 456 489</p>
          </div>
          <div class="flex items-center">
            <i class="fas fa-phone-alt text-gold lg:text-lg mr-3"></i>
            <p class="text-gold lg:text-lg">+ 1875 456 489</p>
          </div>
        </div>
        <div class="quick-links hidden lg:flex flex-col h-full justify-between">
          <h2 class="text-gold text-3xl">Quick Links</h2>
          <a href="./" class="w-fit"
            ><p class="text-xl text-white">Home</p></a
          >
          <a href="./about.html" class="w-fit"
            ><p class="text-xl text-white">About Us</p></a
          >
          <a href="./gifting-ideas-2.html" class="w-fit"
            ><p class="text-xl text-white">Gifting Ideas</p></a
          >
          <a href="./" class="w-fit"
            ><p class="text-xl text-white">Services</p></a
          >
          <a href="./" class="w-fit"
            ><p class="text-xl text-white">Clients</p></a
          >
        </div>
        <div class="quick-links hidden lg:flex flex-col h-full justify-between">
          <h2 class="text-gold text-3xl">Quick Links</h2>
          <a href="./" class="w-fit"
            ><p class="text-xl text-white">Home</p></a
          >
          <a href="./about.html" class="w-fit"
            ><p class="text-xl text-white">About Us</p></a
          >
          <a href="./" class="w-fit"
            ><p class="text-xl text-white">Gifting Ideas</p></a
          >
          <a href="./" class="w-fit"
            ><p class="text-xl text-white">Services</p></a
          >
          <a href="./clients.html" class="w-fit"
            ><p class="text-xl text-white">Clients</p></a
          >
        </div>
        <div class="location flex flex-col justify-evenly">
          <h2 class="text-gold lg:text-3xl text-xl mb-5">Our Location</h2>
          <p class="lg:text-lg text-white mb-5">
            New York City — 785 15h Street, Office 478 Los Angels, De 81566
          </p>
          <a href="./contact.html" class="w-fit rounded-full">
            <div
              class="lg:h-32 lg:w-32 h-24 w-24 rounded-full text-white border border-gold flex flex-col justify-center items-center hover:bg-gold hover:text-black transition-all ease-in-out duration-500 cursor-pointer"
            >
              <p class=" text-sm">Contact Us</p>
              <i class="fas fa-external-link-alt text-sm"></i></div
          ></a>
        </div>
      </div>
      <div class="socials-footer mt-10 lg:mt-0 w-full flex justify-evenly lg:block lg:w-auto lg:absolute bottom-0 left-0">
        <i
          class="fab fa-twitter text-2xl mr-3 text-gold hover:text-white transition-all duration-500 ease-in-out"
        ></i>
        <i
          class="fab fa-facebook-f text-2xl mr-3 text-gold hover:text-white transition-all duration-500 ease-in-out"
        ></i>
        <i
          class="fab fa-linkedin-in text-2xl mr-3 text-gold hover:text-white transition-all duration-500 ease-in-out"
        ></i>
        <i
          class="fab fa-instagram text-2xl mr-3 text-gold hover:text-white transition-all duration-500 ease-in-out"
        ></i>
      </div>
    </div>
    <div
      class="text-sm text-white absolute bottom-12 right-0 flex items-center p-4 z-40 lg:hidden"
    >
      Powered By
      <a href="https://www.spyder.asia"
        ><img
          src="./assets/images/spydernet-logo.svg"
          alt=""
          class="h-5  w-auto ml-3 hover:text-gold cursor-pointer "
      /></a>
    </div>
    <div
      class="absolute bottom-0 w-full p-4 text-white text-center border-t border-gold"
    >
      <p>© 2024 Goodiestor. All rights reserved</p>
    </div>
    <div
      class="lg:text-sm text-xs text-white absolute bottom-0 right-0 lg:flex items-center p-4 hidden"
    >
      Powered By
      <a href="https://www.spyder.asia"
        ><img
          src="assets/images/spydernet-logo.svg"
          alt=""
          class="h-5 w-auto ml-3 hover:text-gold cursor-pointer"
      /></a>
    </div>
  </div>
`
}}


customElements.define('my-footer', myFooter);



function openMenu(){
  document.querySelector(".nav-menu").style.top="0";
}
function closeMenu(){
  document.querySelector(".nav-menu").style.top="-100vh";
}


const navLinks=document.querySelectorAll('.nav-link-animation');
const windowPathname=window.location.pathname;

navLinks.forEach(navLink=>{
  const navLinkPathname=new URL(navLink.href).pathname
  if(windowPathname===navLinkPathname){
    navLink.classList.add('active-link')
  }
})
