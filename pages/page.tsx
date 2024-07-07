import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaCog } from 'react-icons/fa';

const Page = () => {
  const router = useRouter();

  const handleSignupClick = () => {
    router.push('/signup');
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="https://m.media-amazon.com/images/G/01/kfw/landing/img_logo._CB611756372_.png"
          alt="Amazon Logo"
          className={styles.logo}
          width={500}
          height={500}
        />
        <p className={styles.tagline}>Take your stories wherever you go</p>

        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handleSignupClick}>
            Create an Amazon account
          </button>

          <button className={styles.button} onClick={handleLoginClick}>
            <Image
              src="https://m.media-amazon.com/images/G/01/kfw/landing/icon-amazon-a._CB611757832_.png"
              alt="Amazon Logo"
              className={styles.icon}
              width={20}
              height={20}
            />
            <span>Sign in with your account</span>
          </button>
        </div>
      </div>
      <Image
        src="https://m.media-amazon.com/images/G/01/kfw/landing/img_kindleWeb_IN._CB610886625_.png"
        alt="Amazon Logo"
        className={styles.backgroundImage}
        width={1000}
        height={500}
      />
    </div>
  );
};

export default page