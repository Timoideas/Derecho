import style from 'styles/pages/Blog.module.css';
import Head_Main from 'heads/Main.head';
import { Section, Body, Content } from 'components/Resources/Timoideas';
import { useState } from 'react';
export default function Blog() {
  return (
    <>
      <Head_Main />
      <div className={style.flexbox}>
        <div className={style.regular}>This is the regular box</div>
        <div className={style.sticky}>This is the sticky box</div>
      </div>
    </>
  );
}
