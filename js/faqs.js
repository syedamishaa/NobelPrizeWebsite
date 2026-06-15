// document.querySelectorAll('.faq').forEach(faq => {
//   faq.addEventListener('click', () => {
//     faq.classList.toggle('open');
//     let icon = faq.querySelector('.faq__icon i');
//     icon.classList.toggle('fa-plus');
//     icon.classList.toggle('fa-minus');
//   });
// });

document.querySelectorAll('.faq').forEach(faq => {
  faq.addEventListener('click', () => {
    document.querySelectorAll('.faq').forEach(otherFaq => {
      if (otherFaq !== faq && otherFaq.classList.contains('open')) {
        otherFaq.classList.remove('open');
        let icon = otherFaq.querySelector('.faq__icon i');
        icon.classList.add('fa-plus');
        icon.classList.remove('fa-minus');
      }
    });
    
    faq.classList.toggle('open');
    let icon = faq.querySelector('.faq__icon i');
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
  });
});

