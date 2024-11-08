<template>
  <div class="contact-container">
    <div class="contact-page">
      <div class="contact-links"></div>

      <h2>RATE US OR SEND A SPECIFIC MESSAGE</h2>
      <form
        @submit.prevent="handleSubmit"
        action="https://formcarry.com/s/h5boWH8R3UJ"
        method="POST"
        enctype="multipart/form-data"
      >
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" />

        <label for="email">e-Mail Address:</label>
        <input type="email" id="email" v-model="formData.email" />

        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message"></textarea>

        <button type="submit">
          <!-- Send SVG Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
          </svg>
        </button>
      </form>

      <!-- Success Message Display -->
      <p v-if="showSuccessMessage" class="success-message">Thank you for messaging me!</p>
    </div>

    <div class="contact-pagee">
      <form class="disabled-form">
        <label for="contact-number">Contact Number:</label>
        <input type="text" id="contact-number" value="0763936097" disabled />

        <label for="email-address">Email Address:</label>
        <input type="email" id="email-address" value="olwe2tcpipv4@duck.com" disabled />

        <label for="home-address">Home Address:</label>
        <input type="text" id="home-address" value="Philippi, Cape Town" disabled />
      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      showSuccessMessage: false
    };
  },
  methods: {
    handleSubmit() {
      if (!this.formData.name || !this.formData.email || !this.formData.message) {
        Swal.fire({
          title: 'Error',
          text: 'All fields are required.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        return;
      }

      fetch('https://formcarry.com/s/h5boWH8R3UJ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData)
      })
      .then(() => {
        this.showSuccessMessage = true;
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
        Swal.fire({
          title: 'Success',
          text: 'Message sent successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      })
      .catch(error => {
        Swal.fire({
          title: 'Error',
          text: 'Error sending form: ' + error.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
    }
  }
};
</script>

<style>
.contact-page {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  color: rgb(0, 5, 9);
  border: 1px solid #7f9baa14;
  border-radius: 10px;
}

.success-message {
  color: green;
  font-weight: bold;
  margin-top: 10px;
}

i {
  margin-right: 10px;
}

form {
  margin-top: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 2px solid #3678eb;
  background-color: #a0d1e0;
  border-radius: 10px;
  font-size: 1.1rem;
  color: #00203f;
}

button[type="submit"] {
  background-color: #08bcedc2;
  color: rgb(0, 6, 11);
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 40%;
}

button[type="submit"]:hover {
  background-color: #032a61;
}

.disabled-form {
  margin-top: 55%;
  padding: 20px;
  border: 1px solid #cccccc25;
  border-radius: 10px;
  opacity: 0.8;
}

.disabled-form input[type="text"],
.disabled-form input[type="email"] {
  border: 2px solid #b2bec3;
  border-radius: 8px;
  padding: 10px;
  color: black;
  width: 100%;
}

.disabled-form label {
  display: block;
  margin-bottom: 5px;
  color: black;
}

.contact-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 20px;  
  border-radius: 10px;
  justify-items: center;  
  align-items: start;
  padding: 20px;
}

/* Responsive styles */
@media (max-width: 768px) {
  .contact-page {
    padding: 20px;
    border-radius: 10px;
  }
}

@media (max-width: 480px) {
  .disabled-form {
    margin-top: 10px;
    padding: 15px;
  }
}
</style>
