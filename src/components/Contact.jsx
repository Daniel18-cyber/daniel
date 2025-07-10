
import React from 'react';
import '../index.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Kontak Saya</h2>
      <p>Ada yang ingin didiskusikan? Kirim saya pesan dan mari kita bicara.</p>

      <div className="contact-container">
        <div className="contact-card">
          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="Nama Anda" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email Anda" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Pesan Anda" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn-send">
              <i className="fas fa-paper-plane"></i> Kirim Pesan
            </button>
          </form>
          <hr />
          <div class="contact-links">
      <h4>Connect With Me</h4>
      <div className="social-links">
  <a href="https://github.com/Daniel18-cyber" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github"></i> 💻 GitHub
  </a>
 
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
