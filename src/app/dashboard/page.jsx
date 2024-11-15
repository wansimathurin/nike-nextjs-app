'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import styles from './page.module.css'

export default function Page() {
    let router = useRouter();
    let number = 5;
  return (
    <section>
      <h1 className={styles.title}>Dashboard</h1>
      <Link href={"/"}>Home page</Link>
       <button onClick={()=>router.push('/')}>Go to the home</button>
    </section>
  );
}
