import React from 'react';
import { GrDocumentDownload } from 'react-icons/gr';
import styles from './MenuDownload.module.css'

function MenuDownload() {
  return (
    <div style={{marginTop: '25px'}}>
      <h4>
        <GrDocumentDownload />
        <span>
          <a className={styles.text} href="http://www.pinkaow.com/wp-content/uploads/2016/08/PK-Dine-in-menu-update-5-1-20.pdf">Download full menu</a>
        </span>
      </h4>
    </div>
  );
}

export default MenuDownload;
