import React from 'react';
import blackcat from '../../assets/blackcat.png'
import styles from '../imgText/imgText.module.css'

function Imgtext() {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.imgTextContainer}>
        <img className={styles.imgTextImage} src={blackcat} alt="" />
        <p className={styles.imgTextContent}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptatum cum sapiente
          nulla repellendus voluptates et saepe dolore dignissimos, exercitationem, quasi id tenetur
          magni quas odio, blanditiis culpa illo error!
        </p>
      </div>

    </div>
  )
}

export default Imgtext