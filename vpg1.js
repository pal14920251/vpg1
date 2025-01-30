function scrollToRegistration() {
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
  }
  
  function debitLove50() {
    const form = document.getElementById('poetryForm');
    if (form.checkValidity()) {
      window.location.href = 'vpg2.html';
    } else {
      alert('Please fill all required fields.');
    }
  }