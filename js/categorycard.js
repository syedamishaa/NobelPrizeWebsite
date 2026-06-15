
let obj = [
  {
    cate_image: "assest/images/card1.jpg",
    cate_name: "History Of Nobel Prizes",
    cate_desc: "Discover how and when the Nobel Prize awards started",
    cate_link: "history.html"
  },
  {
    cate_image: "assest/images/card2.jpg",
    cate_name: "Nobel Prizes 2025",
    cate_desc: "Honoring the brightest minds and greatest achievements shaping our world in 2025.",
     cate_link: "ANP.html"
  },
  {
    cate_image: "assest/images/card3.jpg",
    cate_name: "Nobel Prize in Chemistry",
    cate_desc: "For advancements in chemical science and innovations improving human life.",
     cate_link: "chemistry.html"
  },
  {
    cate_image: "assest/images/card4.jpg",
    cate_name: "Nobel Prize in Physics",
    cate_desc: "For groundbreaking discoveries that expand our understanding of the universe.",
     cate_link: "physics.html"
  },
  {
    cate_image: "assest/images/card5.jpg",
    cate_name: "Nobel Prize in Medicine",
    cate_desc: "For discoveries that revolutionize medical science and healthcare.",
     cate_link: "medicines.html"
  },
  {
    cate_image: "assest/images/card6.jpg",
    cate_name: "Nobel Prize in Literature",
    cate_desc: "For exceptional contributions to the world of writing and storytelling.",
     cate_link: "Literature.html"
  },
  {
    cate_image: "assest/images/card8.jpg",
    cate_name: "Noble Prize in Economic Sciences",
    cate_desc: "honors groundbreaking research that deepens our understanding of markets, human behavior, and the forces shaping global economies.",
     cate_link: "economic.html"
  },
  {
    cate_image: "assest/images/card7.JPG",
    cate_name: "Noble Prize in Peace",
    cate_desc: "The Nobel Peace Prize celebrates individuals and organizations that strive to end conflict and promote peace, freedom, and human dignity across the world.",
     cate_link: "peace.html"
  },
];

let a = document.getElementById("catecards");

for (let i = 0; i < obj.length; i++) {
  a.innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
      <div class="card category-card" style="width: 100%; max-width: 300px;">
        <img src="${obj[i].cate_image}" class="card-img-top" alt="${obj[i].cate_name}">
        <div class="card-body text-center">
          <h5 class="card-title">${obj[i].cate_name}</h5>
          <p class="card-text">${obj[i].cate_desc}</p>
          <a href="${obj[i].cate_link}" class="btn btn-warning">Read More</a>
        </div>
      </div>
    </div>
  `;
}
