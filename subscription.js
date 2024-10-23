document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('privacyCheckbox');
  const subscribeButton = document.getElementById('subscribeButton');
  const emailInput = document.getElementById('emailInput');
  const phoneInput = document.getElementById('phoneInput');

  checkbox.addEventListener('change', function () {
    subscribeButton.disabled = !this.checked;
  });

  subscribeButton.addEventListener('click', async function () {
    if (emailInput.value && phoneInput.value) {
      try {
        const response = await fetch('http://localhost:3000/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: emailInput.value,
            phone: phoneInput.value,
          }),
        });

        if (response.ok) {
          // alert('Thanks for subscribing to SKYLINE WHOLESALE LLC');
          // Если подписка успешна, очищаем поля ввода
          emailInput.value = '';
          phoneInput.value = '';
          checkbox.checked = false;
          subscribeButton.disabled = true;
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Subscription failed');
        }
      } catch (error) {
        alert(`An error occurred: ${error.message}`);
        console.error('Error:', error);
      }
    } else {
      alert('Please fill in both email and phone fields');
    }
  });
});
