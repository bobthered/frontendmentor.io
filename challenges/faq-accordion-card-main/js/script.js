document.addEventListener('DOMContentLoaded', () => {
  // get all faq items
  const faqItems = document.querySelectorAll('.faq-container .item');

  // add event listeners
  faqItems.forEach(faqItem => {
    faqItem.addEventListener('click', e => {
      faqItems.forEach(faqItem => faqItem.classList.remove('current'));
      e.target.classList.add('current');
    });
  });
});
