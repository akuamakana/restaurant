import React from 'react';

function ContactInfo() {
  return (
    <div style={{textAlign: 'center'}}>
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.813910895788!2d-115.24359168417513!3d36.19540730920711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c033e864b053%3A0x318c4ccf6605ef1d!2sPin%20Kaow%20Thai%20Restaurant%20Rainbow!5e0!3m2!1sen!2sus!4v1595374322513!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border: 0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      <br/>
      <h1>Pinkaow Rainbow</h1>
      <h3>North Rainbow and Lake Mead</h3>
      <h5>
        1974 N. Rainbow Blvd., Las Vegas, Nevada 89108 <br /> Phone: 702-638-2746 Fax: 702-638-1225
      </h5>
    </div>
  );
}

export default ContactInfo;
