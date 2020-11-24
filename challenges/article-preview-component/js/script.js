document.addEventListener('DOMContentLoaded', () => {
  const shareButton = document.querySelector('button.share');
  shareButton.addEventListener('click', () => {
    console.log('yup');
    shareButton.closest('.footer').classList.toggle('flip');
  });
});
