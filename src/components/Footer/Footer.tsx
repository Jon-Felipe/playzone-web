import { Link } from 'react-router';
import {
  FiBox,
  FiGithub,
  FiInstagram,
  FiMessageCircle,
  FiTwitter,
} from 'react-icons/fi';

import styles from './Footer.module.css';

const footerGroups = [
  {
    title: 'Explore',
    links: [
      { label: 'Discover', to: '/' },
      { label: 'Store', to: '/' },
      { label: 'Top Sellers', to: '/' },
      { label: 'New Releases', to: '/' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Community Hub', to: '/' },
      { label: 'Reviews', to: '/' },
      { label: 'Forums', to: '/' },
      { label: 'Events', to: '/' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', to: '/' },
      { label: 'Downloads', to: '/' },
      { label: 'Refunds', to: '/' },
      { label: 'Contact Us', to: '/' },
    ],
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brandSection}>
            <Link to='/' className={styles.brand}>
              <FiBox aria-hidden='true' />
              <span>PLAYZONE</span>
            </Link>

            <p className={styles.tagline}>
              Discover, play, and connect through the games you love.
            </p>

            <div className={styles.socials} aria-label='Social links'>
              <a href='https://github.com/' className={styles.socialLink} aria-label='GitHub'>
                <FiGithub aria-hidden='true' />
              </a>
              <a href='https://x.com/' className={styles.socialLink} aria-label='X'>
                <FiTwitter aria-hidden='true' />
              </a>
              <a
                href='https://instagram.com/'
                className={styles.socialLink}
                aria-label='Instagram'
              >
                <FiInstagram aria-hidden='true' />
              </a>
              <a
                href='https://discord.com/'
                className={styles.socialLink}
                aria-label='Discord'
              >
                <FiMessageCircle aria-hidden='true' />
              </a>
            </div>
          </div>

          <nav className={styles.navigation} aria-label='Footer navigation'>
            {footerGroups.map((group) => (
              <div className={styles.linkGroup} key={group.title}>
                <h2>{group.title}</h2>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Playzone. All rights reserved.</p>
          <div className={styles.legal}>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Terms of Service</Link>
            <Link to='/'>Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
