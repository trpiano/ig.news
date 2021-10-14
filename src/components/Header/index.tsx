import Link from "next/link";
import { useRouter } from 'next/router';

import { ActiveLink } from './ActiveLink';
import { SignInButton } from './SignInButton/index'

import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <a>
                        <img src="/images/logo.svg" alt="ig.news" />
                    </a>
                </Link>
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a className={styles.active}>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
                        <a className={styles.active}>Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    );
}