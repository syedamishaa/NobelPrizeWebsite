    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();
      contactSubmit();
    });
    function contactSubmit() {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thank you for contacting us!",
        showConfirmButton: false,
        timer: 2000,
        background: "#000",
        color: "#D4AF37",
        iconColor: "#D4AF37",
        customClass: {
          popup: "nobel-popup",
          title: "nobel-title",
          htmlContainer: "nobel-text",
        },
        backdrop: `
        rgba(212,175,55,0.1)
        left top
        no-repeat
      `,

      });
      document.getElementById("firstname").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("city").value = "";
      document.getElementById("number").value = "";
      document.getElementById("email").value = "";

    }