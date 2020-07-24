import React from 'react';
import styles from './ContactInfo.module.css'

function ContactInfo() {
  return (
    <div className={styles.container}>
      <br/>
      <h1>Pin Kaow Rainbow</h1>
      <h3>North Rainbow and Lake Mead</h3>
      <h5>
        1974 N. Rainbow Blvd., Las Vegas, Nevada 89108 <br/> Phone: 702-638-2746 <br/> Fax: 702-638-1225
      </h5>
    </div>
  );
}

export default ContactInfo;
