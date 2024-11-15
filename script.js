function submitForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const feedback = document.getElementById('feedback').value;

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const feedbackError = document.getElementById('feedbackError');

    nameError.textContent = '';
    phoneError.textContent = '';
    feedbackError.textContent = '';

    let formValid = true;

    if (!name) {
      nameError.textContent = 'Mohon isi nama Anda';
      formValid = false;
    }
    if (!phone) {
      phoneError.textContent = 'Mohon isi nomor HP Anda';
      formValid = false;
    }
    if (!feedback) {
      feedbackError.textContent = 'Mohon isi feedback Anda';
      formValid = false;
    }

    if (formValid) {
      alert('Berhasil dikirim');
      document.getElementById('feedbackForm').reset(); 
    }
  }