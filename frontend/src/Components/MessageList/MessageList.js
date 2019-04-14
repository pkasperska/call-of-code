import React from 'react';
import styles from './MessageList.module.scss';



const MessageList = () => {
    return(
        <div className={`${styles.appMessageList}`}>
        <h2 className={`${styles.messageData}`}>DZISIAJ 08.04.2019</h2>
            <h1 className={`${styles.messageTitle}`}>WYPADEK NA BATOREGO</h1>
            <p className={`${styles.message}`}>Marshmallow jelly gingerbread chocolate candy sweet roll lemon drops pudding...</p>
            <h1 className={`${styles.messageTitle}`}>WYPADEK NA BATOREGO</h1>
            <p className={`${styles.message}`}>Marshmallow jelly gingerbread chocolate candy sweet roll lemon drops pudding...</p>
            <h1 className={`${styles.messageTitle}`}>WYPADEK NA BATOREGO</h1>
            <p className={`${styles.message}`}>Toffee gummies lemon drops lollipop wafer brownie tart dragée jujubes. Bear claw donut..</p>
        <h2 className={`${styles.messageData}`}>WCZORAJ 07.04.2019</h2>
            <h1 className={`${styles.messageTitle}`}>WYPADEK NA BATOREGO</h1>
            <p className={`${styles.message}`}>Toffee gummies lemon drops lollipop wafer brownie tart dragée jujubes. Bear claw donut..</p>
            <h1 className={`${styles.messageTitle}`}>WYPADEK NA BATOREGO</h1>
            <p className={`${styles.message}`}>Marshmallow jelly gingerbread chocolate candy sweet roll lemon drops pudding...</p>
            <h1 className={`${styles.messageTitle}`}>WYPADEK NA BATOREGO</h1>
            <p className={`${styles.message}`}>Marshmallow jelly gingerbread chocolate candy sweet roll lemon drops pudding...</p>
        </div>
    )
}

export default MessageList;