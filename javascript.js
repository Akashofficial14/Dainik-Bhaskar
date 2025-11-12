var main = document.querySelector(".main");
var cursor = document.querySelector("#cursor");
var menu = document.querySelector("#menu");
var slidebar = document.querySelector(".slidebar");
var close = document.querySelector("#close i");
var smallNav = document.querySelector("#small-nav");
var cardContainer=document.querySelector(".card-container")
var body=document.body
menu.addEventListener("click", function () {
  slidebar.style.left = "0";
  main.style.filter = `blur(5px)`;
});
var closeMenu=()=>{
  close.addEventListener("click", () => {
  slidebar.style.left = "-30vw";
  main.style.filter = `blur(0)`;
});
}
closeMenu()
var menuNavbar = () => {
  var slidenav = [
    {
      logo: '<picture class="c62bd949" style="visibility:visible"><source media="(max-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2022/05/24/mera-shehar-new-1_1653383167.png"><source media="(min-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2022/05/24/mera-shehar-new-1_1653383167.png"><img width="128" height="128" src="https://images.bhaskarassets.com/web2images/521/2022/05/24/mera-shehar-new-1_1653383167.png" alt="राज्य-शहर|Local" loading="lazy" style="width:32px;min-width:32px;height:32px;margin:0px 12px" class="f97587ba"></picture>',
      name: "शहर",
    },
    {
      logo: '<picture class="c62bd949" style="visibility:visible"><source media="(max-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2021/11/16/ipl15989555741599046844115991331121634106872_1637060692.png"><source media="(min-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2021/11/16/ipl15989555741599046844115991331121634106872_1637060692.png"><img width="128" height="128" src="https://images.bhaskarassets.com/web2images/521/2021/11/16/ipl15989555741599046844115991331121634106872_1637060692.png" alt="क्रिकेट|Cricket" loading="lazy" style="width:32px;min-width:32px;height:32px;margin:0px 12px" class="f97587ba"></picture>',
      name: "क्रिकेट",
    },
    {
      logo: '<picture class="c62bd949" style="visibility:visible"><source media="(max-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icsports1_1585397795.png"><source media="(min-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icsports1_1585397795.png"><img width="128" height="128" src="https://images.bhaskarassets.com/web2images/521/2020/03/28/icsports1_1585397795.png" alt="स्पोर्ट्स|Sports" loading="lazy" style="width:32px;min-width:32px;height:32px;margin:0px 12px" class="f97587ba"></picture>',
      name: "स्पोर्ट्स",
    },
    {
      logo: '<picture class="c62bd949" style="visibility:visible"><source media="(max-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icentertainment1_1585397701.png"><source media="(min-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icentertainment1_1585397701.png"><img width="128" height="128" src="https://images.bhaskarassets.com/web2images/521/2020/03/28/icentertainment1_1585397701.png" alt="बॉलीवुड|Entertainment" loading="lazy" style="width:32px;min-width:32px;height:32px;margin:0px 12px" class="f97587ba"></picture>',
      name: "बॉलीवुड",
    },
    {
      logo: '<picture class="c62bd949" style="visibility:visible"><source media="(max-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icjobsandeducation1_1585398629.png"><source media="(min-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icjobsandeducation1_1585398629.png"><img width="128" height="128" src="https://images.bhaskarassets.com/web2images/521/2020/03/28/icjobsandeducation1_1585398629.png" alt="जॉब - एजुकेशन|Jobs &amp; Education" loading="lazy" style="width:32px;min-width:32px;height:32px;margin:0px 12px" class="f97587ba"></picture>',
      name: "नौकरी",
    },
    {
      logo: '<picture class="c62bd949" style="visibility:visible"><source media="(max-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icmoneybhaskar15853186191_1585398499.png"><source media="(min-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icmoneybhaskar15853186191_1585398499.png"><img width="128" height="128" src="https://images.bhaskarassets.com/web2images/521/2020/03/28/icmoneybhaskar15853186191_1585398499.png" alt="बिजनेस|Business" loading="lazy" style="width:32px;min-width:32px;height:32px;margin:0px 12px" class="f97587ba"></picture>',
      name: "बिजनेस",
    },
    {
      logo: '<picture class="c62bd949" style="visibility:visible"><source media="(max-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icdesh1_1585397553.png"><source media="(min-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icdesh1_1585397553.png"><img width="128" height="128" src="https://images.bhaskarassets.com/web2images/521/2020/03/28/icdesh1_1585397553.png" alt="देश|National" loading="lazy" style="width:32px;min-width:32px;height:32px;margin:0px 12px" class="f97587ba"></picture>',
      name: "देश",
    },
    {
      logo: '<picture class="c62bd949" style="visibility:visible"><source media="(max-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icvidesh1_1585398719.png"><source media="(min-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icvidesh1_1585398719.png"><img width="128" height="128" src="https://images.bhaskarassets.com/web2images/521/2020/03/28/icvidesh1_1585398719.png" alt="विदेश|International" loading="lazy" style="width:32px;min-width:32px;height:32px;margin:0px 12px" class="f97587ba"></picture>',
      name: "विदेश",
    },
    {
      logo: '<picture class="c62bd949" style="visibility:visible"><source media="(max-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/10/27/magazine1_1603813527.png"><source media="(min-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/10/27/magazine1_1603813527.png"><img width="128" height="128" src="https://images.bhaskarassets.com/web2images/521/2020/10/27/magazine1_1603813527.png" alt="मैगजीन|Magazine" loading="lazy" style="width:32px;min-width:32px;height:32px;margin:0px 12px" class="f97587ba"></picture>',
      name: "मैगजीन",
    },
    {
      logo: '<picture class="c62bd949" style="visibility:visible"><source media="(max-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2021/01/18/icrashifal_1610967542.png"><source media="(min-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2021/01/18/icrashifal_1610967542.png"><img width="128" height="128" src="https://images.bhaskarassets.com/web2images/521/2021/01/18/icrashifal_1610967542.png" alt="राशिफल|Rashifal" loading="lazy" style="width:32px;min-width:32px;height:32px;margin:0px 12px" class="f97587ba"></picture>',
      name: "राशिफल",
    },

    {
      logo: '<picture class="c62bd949" style="visibility:visible"><source media="(max-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2023/10/03/categorylifestyle_1696313048.png"><source media="(min-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2023/10/03/categorylifestyle_1696313048.png"><img width="128" height="128" src="https://images.bhaskarassets.com/web2images/521/2023/10/03/categorylifestyle_1696313048.png" alt="लाइफस्टाइल|Lifestyle" loading="lazy" style="width:32px;min-width:32px;height:32px;margin:0px 12px" class="f97587ba"></picture>',
      name: "लाइफस्टाइल",
    },
    {
      logo: '<picture class="c62bd949" style="visibility:visible"><source media="(max-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icjeevanmantra1_1585398759.png"><source media="(min-width: 768px)" type="image/webp" srcset="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icjeevanmantra1_1585398759.png"><img width="128" height="128" src="https://images.bhaskarassets.com/web2images/521/2020/03/28/icjeevanmantra1_1585398759.png" alt="जीवन मंत्र|Jeevan Mantra" loading="lazy" style="width:32px;min-width:32px;height:32px;margin:0px 12px" class="f97587ba"></picture>',
      name: "जीवन मंत्र|",
    },
  ];
  var sum = "";
  slidenav.forEach(function (val) {
    sum += ` <div class="a">
           <h4>
             ${val.logo}
           </h4>
           <h3>${val.name}</h3>
         </div>`;
  });
  smallNav.innerHTML = sum;
};
menuNavbar();

var languageDropDown = () => {
  const dropBtn = document.querySelector(".dropbtn");
  const dropContent = document.querySelector(".dropdown-content");
  const langOptions = document.querySelectorAll(".dropdown-content a");

  // Toggle dropdown on button click
  dropBtn.addEventListener("click", () => {
    dropContent.style.display =
      dropContent.style.display === "block" ? "none" : "block";
  });

  // Update button text when a language is selected
  langOptions.forEach((option) => {
    option.addEventListener("click", (e) => {
      e.preventDefault(); // prevent default link behavior
      const selectedLang = option.textContent;
      dropBtn.textContent = selectedLang + " ⬇"; // update button text
      dropContent.style.display = "none"; // close dropdown
    });
  });

  // Close dropdown when clicking outside
  window.addEventListener("click", (e) => {
    if (!e.target.matches(".dropbtn")) {
      dropContent.style.display = "none";
    }
  });
};
languageDropDown();

var mousegsap = () => {
  body.addEventListener("mousemove", function (dets) {
    console.log(dets);
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      duration: 1,
      ease: "power4.out",
    });
  });
};
mousegsap();

// Carousel functionality
var carousel = (function () {
  const carouselWrapper = document.querySelector(".carousel-wrapper");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const indicatorsContainer = document.querySelector(".carousel-indicators");
  const heading = document.querySelector(".carousel-heading");
  const paragraph = document.querySelector(".carousel-paragraph");

  let currentSlide = 0;
  let autoPlayInterval;

  // Sample content for each slide
  const slideContent = [
    {
      heading: "Delhi Blast Updates",
      paragraph:
        "Delhi Red Fort Blast: 10 मौतें, 20 घायल... दिल्ली CM रेखा गुप्ता ने किया मुआवजे का ऐलान",
    },
    {
      heading: "बिहार विधानसभा चुनाव 2025",
      paragraph:
        "बिहार विधानसभा चुनाव 2025 एग्जिट पोल्स का कर रहे इंतजार? 11 नवंबर को आखिरी चरण का मतदान खत्म होते ही सामने आयेंगे एग्जिट पोल्स के आंकड़े",
    },
    {
      heading: "IND vs SA",
      paragraph:
        'भारत की मिट्टी, स्पिन की चुनौती... 8 नए चेहरों के साथ साउथ अफ्रीका की "अग्निपरीक्षा"1',
    },
    {
      heading: "मनोरंजन",
      paragraph:
        "विजय से शादी करूंगी रश्मिका मंदाना ने सबके सामने किया ऐलान, खुशी से झूमे फैंस ",
    },
  ];

  // Create indicators
  slides.forEach((_, index) => {
    const indicator = document.createElement("div");
    indicator.classList.add("carousel-indicator");
    if (index === 0) indicator.classList.add("active");
    indicator.addEventListener("click", () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });

  const indicators = document.querySelectorAll(".carousel-indicator");

  function updateCarousel() {
    carouselWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update indicators
    indicators.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });

    // Update content
    if (slideContent[currentSlide]) {
      heading.textContent = slideContent[currentSlide].heading;
      paragraph.textContent = slideContent[currentSlide].paragraph;
    }
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    resetAutoPlay();
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 4000);
  }

  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  }

  // Event listeners
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoPlay();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoPlay();
  });

  // Start auto-play
  startAutoPlay();

  // Pause on hover
  const carouselContainer = document.querySelector(".carousel-container");
  carouselContainer.addEventListener("mouseenter", () => {
    clearInterval(autoPlayInterval);
  });

  carouselContainer.addEventListener("mouseleave", () => {
    startAutoPlay();
  });

  return {
    next: nextSlide,
    prev: prevSlide,
    goTo: goToSlide,
  };
})();

var breakingNewsCards=()=>{
  var breakingNewsCards = [
    {
      image: "https://media.gettyimages.com/id/2223548887/nl/foto/patna-india-bihar-jdu-president-umesh-kushwaha-with-party-leaders-and-workers-taking-out-cycle.jpg?s=612x612&w=0&k=20&c=OMbwc4LfBS2lY_PinJJP7iqzhbCIgeM24nfN_Z6_TB8=",
      news: "बिहार में वोटिंग ने तोड़ दिए सारे रिकॉर्ड, अब तक किसी भी चुनाव में नहीं हुआ इतना मतदान",
    },
    {
      image: "https://media.gettyimages.com/id/128781861/nl/foto/indian-bollywood-actor-dharmendra-poses-with-his-wife-hema-malini-and-daughter-actress-esha.jpg?s=612x612&w=gi&k=20&c=aJQnV2_2IcZi3FblfqZZ7W1xhTq8xliV-1azj-qtFq4=",
      news: "धर्मेंद्र की मौत की अफवाह से नाराज हेमा मालिनी, आंसू पोंछते हुए अस्पताल पहुंचे बॉबी देओल ",
    },
    {
      image: "https://previews.123rf.com/images/stockbroker/stockbroker1506/stockbroker150604608/42400493-man-threatening-woman-during-argument-at-home.jpg",
      news: "जासूसी कैमरा, घरेलू हिंसा और अपहरण... राजस्थान में IAS कपल में विवाद, पति पर लगा गंभीर आरोप ",
    },
    {
      image: "https://media.istockphoto.com/id/108271768/nl/foto/riotous.webp?s=2048x2048&w=is&k=20&c=zmNF976lGXxuMsnYJCaEKKKYvhTePqywxKSb71bcLJ0=",
      news: "Punjab University में स्टूडेंट्स-पुलिस की झड़प की तस्वीरें, देखें पंजाब आजतक में",
    },
    {
      image: "https://imgs.search.brave.com/rU21ggvcv0ceaE9iyErivq4jkCQahL3w29TPZoGpnSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGl2ZW1pbnQuY29t/L2xtLWltZy9pbWcv/MjAyNS8wOC8yMy82/MDB4MzM4L3NhbG1h/bl8xNzU0NTY2NTgy/MzMzXzE3NTQ1NjY1/ODI1MTVfMTc1NTk2/MzA3MDg4MS5qcGVn",
      news: "'बिग बॉस 19' से बेघर हुए अभिषेक बजाज, फूट-फूटकर रोईं अशनूर कौर, बोलीं- सीक्रेट रूम... ",
    },
    {
      image:"https://media.istockphoto.com/id/1263101891/nl/foto/strikte-boze-moeder-schelden-tienerdochter-voor-slechte-examenresultaten.jpg?s=2048x2048&w=is&k=20&c=yhZulUjJpM8zP_S377eI8Bh2swp7vKPhx9xS9fU_71Q=",
      news:"किसी मां ने CEO को किया मेल तो किसी ने मांगी कुर्सी खरीदने छुट्टी...Gen Z पेरेंट्स की गिरफ्त में",
    }
  ];
  var sum=""
  breakingNewsCards.forEach(function(val){
    sum+=` <div class="cards">
                <img src="${val.image}" alt="">
                <div id="data">
                  <h3>${val.news}</h3>
                  <h5>Read More..</h5>
                </div>
              </div>`
  })
  cardContainer.innerHTML=sum
}
breakingNewsCards()


var categoryCards=document.querySelector(".wrapper")
var criketCategory=()=>{
  const cricketNewsHindi = [
  {
    "imgUrl": "https://i.pinimg.com/736x/e8/79/f4/e879f43409c470e6365bdd6ba8c1fb1c.jpg", // Teal background
    "news": "बीसीसीआई के सख्‍त निर्देश: रोहित-विराट को अब घरेलू ट्रॉफी खेलना जरूरी",
    "p": "भारतीय क्रिकेट कंट्रोल बोर्ड (BCCI) ने रोहित शर्मा और विराट कोहली समेत सभी सीनियर खिलाड़ियों को स्पष्ट संदेश दिया है "
  },
  {
    "imgUrl": "https://i.pinimg.com/736x/e6/4c/99/e64c99d0e36668e5c88efbefd535dccf.jpg", // Deep Blue background
    "news": "T20 वर्ल्ड कप 2026 फाइनल की जगह तय! इस स्टेडियम में हो सकता है महामुकाबला",
    "p": "मीडिया रिपोर्ट्स के मुताबिक, 2026 में भारत और श्रीलंका की संयुक्त मेजबानी ",
  },
  {
    "imgUrl": "https://i.pinimg.com/1200x/12/78/59/127859e23d943bf51412a54e6224a252.jpg", // Purple background
    "news": "भारत बनाम साउथ अफ्रीका टेस्ट: ईडन गार्डन्स की पिच को लेकर टीम मैनेजमेंट चिंतित",
    "p": "साउथ अफ्रीका के खिलाफ पहले टेस्ट से पहले कोलकाता के ईडन गार्डन्स की पिच को लेकर विवाद सामने आया है। "
  },
  {
    "imgUrl": "https://i.pinimg.com/736x/c2/d8/51/c2d8516ba03fe89c9d361ba59e6d794f.jpg", // Orange background
    "news": "गौतम गंभीर ने माना: टी20 वर्ल्ड कप के लिए फिटनेस के लिहाज से टीम अभी तैयार नहीं",
    "p": "भारतीय टीम के मुख्य कोच गौतम गंभीर ने 2026 टी20 वर्ल्ड कप की तैयारि "
  },
  {
    "imgUrl": "https://i.pinimg.com/736x/01/64/22/01642277955d7f86dc79094cdd7aa999.jpg", // Deep Orange background
    "news": "CSK-RR ट्रेड की चर्चा तेज: संजू सैमसन को चेन्नई का भविष्य का कप्तान बनाने की तैयारी?",
    "p": "आईपीएल 2026 की नीलामी से पहले संजू सैमसन के चेन्नई सुपर किंग्स (CSK)  "
  },
  {
    "imgUrl": "https://i.pinimg.com/1200x/50/2d/52/502d5283939808984b5b77ab320b6181.jpg", // Dark Cyan background
    "news": "रणजी ट्रॉफी राउंड अप: जम्मू-कश्मीर ने 65 साल बाद दिल्ली को हराया, रचा इतिहास",
    "p": "रणजी ट्रॉफी के इतिहास में एक बड़ा उलटफेर देखने को मिला, जब जम्मू-कश्मीर"
  }
];
var sum=""
cricketNewsHindi.forEach((val)=>{
sum+=` <div class="multi-cards">
               <img src="${val.imgUrl}" alt="">
               <h3>${val.news}</h3>
               <p>${val.p} <span>Read More...</span> </p>
            </div>`
})
categoryCards.innerHTML=sum
}
criketCategory()


var electionCards=document.querySelector("#wrapper2")
var electionCategory=()=>{
     const electionNewsHindi = [
  {
    "imgUrl": "https://i.pinimg.com/736x/e2/cf/87/e2cf87ea9314b965abb8ddb812f87d6d.jpg",
    "news": "लोकसभा चुनाव: तीसरे चरण के लिए 95 सीटों पर नामांकन दाखिल",
    "p": "आगामी लोकसभा चुनाव के तीसरे चरण के लिए नामांकन की प्रक्रिया पूरी हो चुकी है। 12 राज्यों "
  },
  {
    "imgUrl": "https://i.pinimg.com/736x/93/d2/99/93d299950c1f227f6e63ce0d7e847eaa.jpg",
    "news": "उत्तर प्रदेश में गठबंधन की राह आसान नहीं, सीट बंटवारे पर फंसा पेंच",
    "p": "उत्तर प्रदेश में विपक्षी गठबंधन में सीटों के बंटवारे को लेकर गतिरोध जारी है। कई सीटों पर दावेदारी ,।"
  },
  {
    "imgUrl": "https://i.pinimg.com/1200x/09/31/db/0931dbe7da83917e794530845745aa2e.jpg",
    "news": "चुनाव आयोग ने EVM सुरक्षा पर दिया बयान, विपक्ष के आरोपों को किया खारिज",
    "p": "हाल ही में इलेक्ट्रॉनिक वोटिंग मशीन (EVM) की सुरक्षा को लेकर उठे विवादों पर चुनाव आयोग ने स्थिति स्पष्ट की है।"
  },
  {
    "imgUrl": "https://i.pinimg.com/1200x/b5/82/18/b58218b3de15fa0578371f46fc262b69.jpg",
    "news": "आचार संहिता उल्लंघन पर आयोग सख्त, 15 बड़े नेताओं को भेजा नोटिस",
    "p":"चुनाव आचार संहिता के उल्लंघन के मामलों पर चुनाव आयोग ने कठोर रुख अपनाया है।"
  },
  {
    "imgUrl": "https://i.pinimg.com/1200x/cd/e7/86/cde78639bf2f9e742fbdc515e560e3c7.jpg",
    "news": "महाराष्ट्र: राजनीतिक हलचल तेज, दो दलों के बीच गठबंधन में टूट के संकेत",
    "p": "महाराष्ट्र की राजनीति में बड़े फेरबदल की आशंका है। आगामी विधानसभा चुनावों को देखते हुए"
  },
  {
    "imgUrl": "https://i.pinimg.com/1200x/ca/23/1d/ca231df9528727a9d7dee463c7a92856.jpg",
    "news": "वोटर टर्नआउट बढ़ाने के लिए चुनाव आयोग की नई पहल, युवाओं पर फोकस",
    "p": "मतदान प्रतिशत बढ़ाने के उद्देश्य से, चुनाव आयोग ने 'मेरा पहला वोट' अभियान शुरू किया है।"
  }
];
var sum=''
electionNewsHindi.forEach((val)=>{
  sum+=` <div class="multi-cards">
               <img src="${val.imgUrl}" alt="">
               <h3>${val.news}</h3>
               <p>${val.p} <span>Read More...</span> </p>
            </div>`
})
electionCards.innerHTML=sum
}
electionCategory()



var indiaCards=document.querySelector("#wrapper3")
var indiaCategory=()=>{
const indiaNewsHindi = [
  {
    "imgUrl": "https://i.pinimg.com/1200x/ea/5e/d0/ea5ed04425cfb7d27784c4dcf73f13cc.jpg",
    "news": "इसरो का बड़ा ऐलान: गगनयान मिशन की तैयारी अंतिम चरण में, तीन अंतरिक्ष यात्रियों का चयन",
    "p": "भारतीय अंतरिक्ष अनुसंधान संगठन (इसरो) ने अपने महत्वाकांक्षी गगनयान मिशन की तैयारी में "
  },
  {
    "imgUrl": "https://i.pinimg.com/1200x/42/08/2e/42082e062cb16c33661ab638c52a160f.jpg",
    "news": "भारत की अर्थव्यवस्था ने तोड़ा रिकॉर्ड, चालू वित्त वर्ष में 7.5% विकास दर की उम्मीद",
    "p": "अंतर्राष्ट्रीय मुद्रा कोष (IMF) और विश्व बैंक की रिपोर्ट के अनुसार, भारतीय अर्थव्यवस्था ने चालू वित्त वर्ष में 7.5% की विकास।"
  },
  {
    "imgUrl": "https://i.pinimg.com/736x/2d/43/43/2d4343bc2175a83f722d846d8bc8c098.jpg",
    "news": "केंद्र सरकार का बड़ा फैसला: 5,000 करोड़ रुपये की नई राष्ट्रीय राजमार्ग परियोजना को मंजूरी",
    "p": "देश में कनेक्टिविटी को मजबूत करने के लिए, केंद्रीय कैबिनेट ने 5,000 करोड़ रुपये की लागत से एक नई राष्ट्रीय "
  },
  {
    "imgUrl": "https://i.pinimg.com/736x/23/86/7a/23867ae062434788c1957362b80cc2c4.jpg",
    "news": "जलवायु परिवर्तन पर भारत ने पेश की नई राष्ट्रीय कार्ययोजना, प्रदूषण नियंत्रण पर जोर",
    "p": "बढ़ते पर्यावरणीय खतरों से निपटने के लिए, भारत सरकार ने जलवायु परिवर्तन के लिए एक व्यापक नई राष्ट्रीय कार्ययोजना जारी की है।"
  },
  {
    "imgUrl": "https://i.pinimg.com/736x/82/ec/78/82ec78b87ad843730629fa41a9672083.jpg",
    "news": "नई शिक्षा नीति के तहत स्किल डेवलपमेंट कोर्स अनिवार्य, AI और कोडिंग पर फोकस",
    "p": "राष्ट्रीय शिक्षा नीति (NEP) 2020 के कार्यान्वयन में एक बड़ा कदम उठाया गया है। अब सभी स्नातक स्तर के पाठ्यक्रमों में छात्रों के लिए।"
  },
  {
    "imgUrl": "https://i.pinimg.com/736x/6a/a0/06/6aa00647abd67c85c00ecc3a89b2700f.jpg",
    "news": "आयुष्मान भारत योजना में बड़ा बदलाव: अब मुफ्त इलाज की सीमा बढ़ी",
    "p": "स्वास्थ्य क्षेत्र में एक बड़ी राहत देते हुए, केंद्र सरकार ने आयुष्मान भारत योजना के तहत मुफ्त इलाज की अधिकतम ।"
  }
];
var sum=''
indiaNewsHindi.forEach((val)=>{
  sum+=` <div class="multi-cards">
               <img src="${val.imgUrl}" alt="">
               <h3>${val.news}</h3>
               <p>${val.p} <span>Read More...</span> </p>
            </div>`
})
indiaCards.innerHTML=sum
}
indiaCategory()

var bollywoodCards=document.querySelector("#wrapper4")
var bollywoodCategory=()=>{
const bollywoodNewsHindi = [
  {
    "imgUrl": "https://i.pinimg.com/736x/42/f4/64/42f4644b6c81881d423fe593ac7b1b42.jpg",
    "news": "रिकॉर्ड तोड़ ओपनिंग: 'किंग' ने पहले दिन कमाए 150 करोड़, बॉक्स ऑफिस पर सुनामी",
    "p": "सुपरस्टार शाहरुख खान की बहुप्रतीक्षित फिल्म 'किंग' ने बॉक्स ऑफिस पर इतिहास रच दिया है।"
  },
  {
    "imgUrl": "https://i.pinimg.com/1200x/5c/61/a8/5c61a863688f0ea205591d2b060386f1.jpg",
    "news": "संजय लीला भंसाली की अगली ऐतिहासिक ड्रामा की घोषणा, रणवीर सिंह मुख्य भूमिका में",
    "p": "संजय लीला भंसाली ने अपनी अगली भव्य ऐतिहासिक फिल्म का आधिकारिक ऐलान.. "
  },
  {
    "imgUrl": "https://i.pinimg.com/1200x/73/ff/58/73ff5855483247a12755576a4a09932a.jpg",
    "news": "कैटरीना कैफ ने साइन की अपनी पहली वेब सीरीज़, OTT पर होगा बड़ा डेब्यू",
    "p": "बॉलीवुड अभिनेत्री कैटरीना कैफ ने डिजिटल दुनिया में कदम रखते हुए अपनी पहली वेब सीरीज़ साइन की है।"
  },
  {
    "imgUrl": "https://i.pinimg.com/736x/f9/39/9b/f9399bcbde4f2876a19b66a11f32182f.jpg",
    "news": "अरिजीत सिंह का नया गाना 'इश्क की डोर' हुआ रिलीज़, यू-ट्यूब पर रिकॉर्ड व्यूज",
    "p": "मशहूर प्लेबैक सिंगर अरिजीत सिंह का नवीनतम रोमांटिक गाना 'इश्क की डोर' रिलीज़ होते ही हिट हो गया है।"
  },
  {
    "imgUrl": "https://i.pinimg.com/736x/c4/ce/ea/c4ceea4597c0b552ed1392dd53756237.jpg",
    "news": "बायोपिक में अजय देवगन बनेंगे देश के बड़े खिलाड़ी, फर्स्ट लुक जल्द होगा जारी",
    "p": "अभिनेता अजय देवगन ने एक बड़ी बायोपिक फिल्म के लिए हामी भर दी है, जिसमें वह देश के एक प्रतिष्ठित "
  },
  {
    "imgUrl":"https://i.pinimg.com/736x/f0/64/c0/f064c0d55eb634ff7e6a6589cde140ca.jpg",
    "news": "करण जौहर की नई फिल्म से एक और स्टार किड करेगा डेब्यू, बड़े नामों की होगी एंट्री",
    "p": "फिल्ममेकर करण जौहर अपनी अगली रोमांटिक कॉमेडी फिल्म से एक और जाने-माने स्टार किड को "
  }
];
var sum=''
bollywoodNewsHindi.forEach((val)=>{
  sum+=` <div class="multi-cards">
               <img src="${val.imgUrl}" alt="">
               <h3>${val.news}</h3>
               <p>${val.p} <span>Read More...</span> </p>
            </div>`
})
bollywoodCards.innerHTML=sum
}
bollywoodCategory()

var send=document.querySelector("#submit")
send.addEventListener("click",function(val){
  alert("Thank You For Sending Your Valuable Feedback.")
})

function page1Animation(){
var tl=gsap.timeline()
tl.from(".navp2",{
    y:-30 ,
    duration:0.5,
    delay:0.2,
    opacity:0
})
tl.from(".navp1 h3,.navp3 h5,.navp3 h3",{
    y:-30 ,
    duration:0.3,
    // stagger:0.2,
    opacity:0
})
tl.from("header h2,.dropdown button",{
  y:-50 ,
    duration:0.3,
    stagger:0.090,
    opacity:0
})
tl.from("#sec1 .part1",{
   x:-100,
    duration:0.3,
    stagger:0.2,
    opacity:0
},"deva")
tl.from("#sec1 .part2",{
   x:100,
    duration:0.3,
    stagger:0.2,
    opacity:0
},"deva")
var btnPlay=()=>{
  var a=gsap.from(".slidebar .top ,.slidebar input,.slidebar .a",{
  y:-100 ,
    duration:0.3,
    stagger:0.2,
    opacity:0
})
a.pause()
menu.addEventListener("click",function(){
  a.play()
})
close.addEventListener("click",function(){
  a.pause()
})
}
btnPlay()
}
page1Animation()
function page2Animation(){
    var tl2=gsap.timeline({
    scrollTrigger:{
     trigger:"#sec2",
     scroller:"body",
    //  markers:true,
     start:"top 70%",
     end:"top 0",
     scrub:2,
    //  overflow:"hidden"
}
})
tl2.from("#sec2 h2,#sec2 .left",{
  x:-700,
  duration:7,
  stagger:0.3,
  opactiy:0
})
tl2.from("#sec2 .right .multi-cards",{
  y:150,
  stagger:2.0,
  opacity:0,
  duration:4,
})
}
page2Animation()
function page3Animation(){
    var tl2=gsap.timeline({
    scrollTrigger:{
     trigger:"#sec3",
     scroller:"body",
    //  markers:true,
     start:"top 70%",
     end:"top 0",
     scrub:2,
    //  overflow:"hidden"
}
})
tl2.from("#sec3 h2,#sec3 .left",{
  x:-700,
  duration:7,
  stagger:0.3,
  opactiy:0
})
tl2.from("#sec3 .right .multi-cards",{
  y:150,
  stagger:2.0,
  opacity:0,
  duration:4,
})
}
page3Animation()
function page4Animation(){
    var tl2=gsap.timeline({
    scrollTrigger:{
     trigger:"#sec4",
     scroller:"body",
    //  markers:true,
     start:"top 70%",
     end:"top 0",
     scrub:2,
    //  overflow:"hidden"
}
})
tl2.from("#sec4 h2,#sec4 .left",{
  x:-700,
  duration:7,
  stagger:0.3,
  opactiy:0
})
tl2.from("#sec4 .right .multi-cards",{
  y:150,
  stagger:2.0,
  opacity:0,
  duration:4,
})
}
page4Animation()
function page5Animation(){
    var tl2=gsap.timeline({
    scrollTrigger:{
     trigger:"#sec5",
     scroller:"body",
    //  markers:true,
     start:"top 70%",
     end:"top 0",
     scrub:2,
    //  overflow:"hidden"
}
})
tl2.from("#sec5 h2,#sec5 .left",{
  x:-700,
  duration:7,
  stagger:0.3,
  opactiy:0
})
tl2.from("#sec5 .right .multi-cards",{
  y:150,
  stagger:2.0,
  opacity:0,
  duration:4,
}) 
}
page5Animation()
function footerAnimation(){
var tl3=gsap.timeline({
    scrollTrigger:{
     trigger:"footer",
     scroller:"body",
    //  markers:true,
     start:"top bottom",
     end:"+=5%",
     scrub:2,
    //  overflow:"hidden"
}
})
 tl3.from("footer .fp1",{
  x:-300,
  duration:4,
  opacity:0
})
tl3.from("footer .fp2",{
  x:300,
  duration:2,
  opacity:0
})
}
footerAnimation()