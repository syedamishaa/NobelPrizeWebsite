
var nav = document.getElementById("navbar");
nav.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center" href="index.html">
      <img src="assest/images/noble-logo.png" alt="Nobel Prize Logo" class="nobel-logo mb-1">
      <span class="brand-text ms-2">The Noble Prizes</span>
    </a>

    <button class="navbar-toggler" type="button" 
      data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-between" id="navbarNav">

      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link active" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link active" href="category.html">Categories</a></li>
         <li class="nav-item"><a class="nav-link active" href="gallery.html">Gallery</a></li>
        <li class="nav-item"><a class="nav-link active" href="news.html">News</a></li>
        <li class="nav-item"><a class="nav-link active" href="index.html#faq">FAQs</a></li>
      </ul>

      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" id="sitemapDropdown" 
             role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Site Map
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="sitemapDropdown">
            <li><a class="dropdown-item" href="index.html">Home</a></li>
            <li><a class="dropdown-item" href="about.html">About</a></li>
             <li><a class="dropdown-item" href="gallery.html">Gallery</a></li>
            <li><a class="dropdown-item" href="ANP.html">Noble Prizes 2025</a></li>
            <li><a class="dropdown-item" href="winner.html">Winners</a></li>
            <li><a class="dropdown-item" href="news.html">News</a></li>
            <li><a class="dropdown-item" href="history.html">History</a></li>
            <li><a class="dropdown-item" href="chemistry.html">Chemistry</a></li>
            <li><a class="dropdown-item" href="physics.html">Physics</a></li>
            <li><a class="dropdown-item" href="medicines.html">Medicines</a></li>
            <li><a class="dropdown-item" href="literature.html">Literature</a></li>
            <li><a class="dropdown-item" href="economic.html">Economic <br> sciences</a></li>
            <li><a class="dropdown-item" href="peace.html">Peace</a></li>
            <li><a class="dropdown-item" href="index.html#faq">FAQs</a></li>
            <li><a class="dropdown-item" href="contact.html">Contact</a></li>
          </ul>
        </li>
        <li class="nav-item ms-lg-2">
          <a class="btn contact-btn" href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

var foot = document.getElementById("footer");
foot.innerHTML = `
  <footer class="bg-dark text-light pt-5">
    <div class="container-fluid">
      <div class="row">
        
        <div class="col-md-4 mb-3">
          <h5>The Noble Prizes</h5>
          <p class="small text-light">
            This portal provides comprehensive details about the Nobel Prize, its history,
            fields, winners, events, and more — all in one place.
          </p>
        </div>


        <div class="col-md-4 mb-3">
          <h5>Quick Links</h5>
          <ul class="list-unstyled ">
            <li><a href="index.html" class="text-light text-decoration-none">Home</a></li>
            <li><a href="about.html" class="text-light text-decoration-none">About</a></li>
            <li><a href="news.html" class="text-light text-decoration-none">News</a></li>
            <li><a href="category.html" class="text-light text-decoration-none">Categories</a></li>
            <li><a href="index.html#faq" class="text-light text-decoration-none">FAQs</a></li>
             <li><a href="contact.html" class="text-light text-decoration-none">Contact</a></li>
          </ul>
        </div>

        <!-- Follow Us -->
        <div class="col-md-4 mb-3">
          <h5>Follow Us</h5>
          <a href="https://facebook.com" target="_blank" class="text-light me-3 fs-4">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" class="text-light me-3 fs-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" class="text-light fs-4">
            <i class="fab fa-instagram"></i>
          </a>
        </div>

      </div>

    

      <div class="text-center border-top border-secondary pt-3 mt-3">
        <p class="mb-0">&copy; 2025 Nobel Prize Website | Designed by Mishaa</p>
      </div>
    </div>
  </footer>
`;
