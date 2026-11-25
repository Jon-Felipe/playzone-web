import { useState, type SubmitEvent } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import {
  FiCrosshair,
  FiZap,
  FiCloud,
  FiActivity,
  FiShield,
  FiLock,
  FiMail,
  FiEye,
  FiArrowRight,
  FiSmartphone,
  FiCheckCircle,
  FiWifi,
  FiGlobe,
} from 'react-icons/fi';
import {
  FaSteam,
  FaDiscord,
  FaXbox,
  FaGoogle,
  FaFingerprint,
} from 'react-icons/fa';

// extras
import { useAppDispatch } from '../../app/hooks';
import { setUser } from '../../features/user/userSlice';
import styles from './LoginPage.module.css';

function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleLogin(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email || !password) {
      toast.error('Please enter both email and password.');
      return;
    }

    dispatch(
      setUser({
        id: '123',
        name: 'Operative',
        email: 'shadow_stalker99@playzone.gg',
      }),
    );
    toast.success('Successfully logged in!');
    navigate('/');
  }

  return (
    <div className={styles.page}>
      <div className={styles.loginContainer}>
        {/* LEFT SIDE */}
        <section className={styles.leftPanel}>
          <div className={styles.leftContent}>
            {/* BRAND */}
            <div className={styles.brand}>
              <div className={styles.brandIcon}>
                <FiCrosshair />
              </div>
              <span>PLAYZONE</span>
              <span className={styles.brandVersion}>SECURE AUTH V4.2</span>
            </div>

            {/* HERO */}
            <div className={styles.hero}>
              <div className={styles.eyebrow}>
                <FiZap />
                YOUR GAMING UNIVERSE AWAITS
              </div>

              <h1>
                Welcome Back,
                <br />
                <span>Operative.</span>
              </h1>

              <p>
                Your games, cloud saves, and community are waiting. Pick up
                exactly where you left off.
              </p>

              <div className={styles.heroFeatures}>
                <div>
                  <FiCloud />
                  <span>Cloud Saves</span>
                </div>

                <div>
                  <FiActivity />
                  <span>Zero Latency</span>
                </div>

                <div>
                  <FiShield />
                  <span>Secure Access</span>
                </div>
              </div>
            </div>

            {/* LOGIN FORM */}
            <form className={styles.loginForm} onSubmit={handleLogin}>
              <div className={styles.field}>
                <label htmlFor='login-email'>Email or GamerTag</label>

                <div className={styles.inputWrapper}>
                  <FiMail aria-hidden='true' />
                  <input
                    id='login-email'
                    name='email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='e.g. shadow_stalker99@playzone.gg'
                  />
                </div>
              </div>

              <div className={styles.field}>
                <div className={styles.labelRow}>
                  <label htmlFor='login-password'>Password</label>
                  <a>Forgot password?</a>
                </div>

                <div className={styles.inputWrapper}>
                  <FiLock />
                  <input
                    id='login-password'
                    name='password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password'
                  />
                  <FiEye />
                </div>
              </div>

              <div className={styles.rememberRow}>
                <label>
                  <input type='checkbox' defaultChecked />
                  <span>Remember this battlestation for 30 days</span>
                </label>

                <div className={styles.protected}>
                  <FiShield />
                  Protected
                </div>
              </div>

              <button className={styles.loginButton} type='submit'>
                Sign In to PLAYZONE
                <FiArrowRight />
              </button>

              {/* SOCIAL LOGIN */}
              <div className={styles.divider}>
                <span />
                OR AUTHENTICATE WITH
                <span />
              </div>

              <div className={styles.socialButtons}>
                <button type='button'>
                  <FaSteam />
                  Steam
                </button>

                <button type='button'>
                  <FaDiscord />
                  Discord
                </button>

                <button type='button'>
                  <FaXbox />
                  Xbox
                </button>

                <button type='button'>
                  <FaGoogle />
                  Google
                </button>
              </div>
            </form>
          </div>

          {/* LEFT FOOTER */}
          <div className={styles.leftFooter}>
            <p>
              New to PLAYZONE?
              <Link to='/register'>Create your account</Link>
            </p>

            <span>Build 14.89-Prod</span>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className={styles.rightPanel}>
          {/* RIGHT HEADER */}
          <div className={styles.rightHeader}>
            <div>
              <span className={styles.headerIcon}>
                <FiSmartphone />
              </span>
              <span>INSTANT MOBILE SIGN-IN</span>
            </div>

            <span className={styles.fastest}>FASTEST</span>
          </div>

          {/* MOBILE SIGN IN VISUAL */}
          <div className={styles.mobileSection}>
            <div className={styles.visualGlow} />

            <div className={styles.visualTop}>
              <span className={styles.liveIndicator} />
              SECURE CONNECTION ESTABLISHED
            </div>

            {/* PHONE MOCKUP */}
            <div className={styles.phone}>
              <div className={styles.phoneSideButton} />

              <div className={styles.phoneScreen}>
                <div className={styles.phoneHeader}>
                  <div className={styles.phoneLogo}>
                    <FiCrosshair />
                  </div>
                  <span>PLAYZONE</span>
                  <FiActivity />
                </div>

                <div className={styles.phoneGreeting}>
                  <span>OPERATIVE ACCESS</span>
                  <h3>You're connected.</h3>
                  <p>Your gaming universe is one tap away.</p>
                </div>

                <div className={styles.phoneUser}>
                  <div className={styles.userAvatar}>
                    <FaFingerprint aria-hidden='true' />
                  </div>

                  <div>
                    <strong>Operative</strong>
                    <span>Identity verified</span>
                  </div>

                  <FiCheckCircle />
                </div>

                <div className={styles.phoneStats}>
                  <div>
                    <FiCloud />
                    <span>Cloud Sync</span>
                    <strong>Active</strong>
                  </div>

                  <div>
                    <FiWifi />
                    <span>Connection</span>
                    <strong>Excellent</strong>
                  </div>
                </div>

                <div className={styles.phoneAction}>
                  <FiZap />
                  SECURE SESSION ACTIVE
                </div>

                <div className={styles.phoneNavigation}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>

            {/* FLOATING STATUS CARDS */}
            <div className={styles.floatCardLeft}>
              <div className={styles.floatIcon}>
                <FiShield />
              </div>
              <div>
                <strong>Protected</strong>
                <span>256-bit encryption</span>
              </div>
            </div>

            <div className={styles.floatCardRight}>
              <div className={styles.floatIconBlue}>
                <FiZap />
              </div>
              <div>
                <strong>Instant Access</strong>
                <span>Device synchronized</span>
              </div>
            </div>

            <div className={styles.visualBottom}>
              <div className={styles.connectionLine} />
              <h3>Gaming without boundaries.</h3>
              <p>
                Your account follows you everywhere. One identity. Every device.
                Zero friction.
              </p>
            </div>
          </div>

          {/* NETWORK STATUS */}
          <div className={styles.networkSection}>
            <div className={styles.networkCard}>
              <div>
                <span className={styles.greenPulse} />
                Live Global Network
              </div>

              <strong>
                1,428,910 <span>In-Game</span>
              </strong>
            </div>

            <div className={styles.tunnelStatus}>
              <div>
                <FiLock />
                256-Bit Quantum Tunnel Active
              </div>

              <strong>14ms</strong>
            </div>

            <div className={styles.networkFooter}>
              <span>
                <FiGlobe />
                ALL SYSTEMS OPERATIONAL
              </span>

              <span>PLAYZONE NETWORK</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LoginPage;
