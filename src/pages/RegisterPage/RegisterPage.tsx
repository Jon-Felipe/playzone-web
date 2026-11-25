import { Link } from 'react-router';
import styles from './RegisterPage.module.css';
import {
  FiZap,
  FiShield,
  FiActivity,
  FiCheckCircle,
  FiCloud,
  FiAtSign,
  FiLock,
  FiServer,
  FiArrowRight,
} from 'react-icons/fi';
import {
  FaSteam,
  FaDiscord,
  FaGoogle,
  FaApple,
  FaFingerprint,
} from 'react-icons/fa';

function RegisterPage() {
  return (
    <div className={styles.page}>
      {/* LEFT PANEL */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <FiZap />
            <span>ZERO-WAIT DIRECT PLAY • CLOUD ARCADE</span>
          </div>

          <h1>
            Enter the Next
            <br />
            <span>Evolution of Gaming</span>
          </h1>

          <p className={styles.description}>
            Instant zero-latency ray tracing, unified social cross-save, and
            zero installation friction. Your console is now everywhere.
          </p>

          <div className={styles.features}>
            <div className={styles.featurePurple}>
              <FiShield />
              Tier-1 Battlepass Unlocked
            </div>

            <div className={styles.featureBlue}>
              <FiActivity />
              4K 144FPS Cloud Pipeline
            </div>

            <div className={styles.featureGreen}>
              <FiActivity />
              Steam Cross-Link Sync
            </div>
          </div>

          {/* PLAYER CARD */}
          <div className={styles.playerCard}>
            <div className={styles.playerTop}>
              <div className={styles.avatar}>
                <img
                  src='https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Vortex'
                  alt='Player avatar'
                />
                <span className={styles.onlineDot} />
              </div>

              <div className={styles.playerInfo}>
                <h3>
                  VortexOperative <FiCheckCircle />
                </h3>
                <span>PZ-NODE // 99.98% LATENCY SLA</span>
              </div>

              <div className={styles.ping}>
                <FiCloud />
                11ms ping
              </div>
            </div>

            <div className={styles.playerDivider} />

            <div className={styles.playerBottom}>
              <p>
                "PLAYZONE replaced my local 4090 rig. Stream begins
                instantaneously."
              </p>
              <span className={styles.tested}>PRO PLAYER TESTED</span>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className={styles.stats}>
          <div>
            <span className={styles.statLabel}>
              <i className={styles.greenDot} />
              ONLINE RIG MESH
            </span>
            <h2>1.4M+</h2>
            <p>Active Operators</p>
          </div>

          <div>
            <span className={styles.statLabel}>
              <i className={styles.blueDot} />
              EDGE LATENCY
            </span>
            <h2>12ms</h2>
            <p>Sub-frame sync</p>
          </div>

          <div>
            <span className={styles.statLabel}>
              <i className={styles.purpleDot} />
              CLOUD TITLES
            </span>
            <h2>400+</h2>
            <p>Zero download</p>
          </div>
        </div>
      </section>

      {/* RIGHT PANEL */}
      <section className={styles.formPanel}>
        <div className={styles.formHeader}>
          <div>
            <h2>Initialize Account</h2>
            <p>
              Join in 30 seconds. Instant credentials generated on submission.
            </p>
          </div>

          <div className={styles.fingerprint}>
            <FaFingerprint />
          </div>
        </div>

        {/* SOCIAL LOGIN */}
        <div className={styles.socialSection}>
          <label className={styles.sectionLabel}>
            FAST-TRACK SOCIAL CONNECT
          </label>

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
              <FaGoogle />
              Google
            </button>

            <button type='button'>
              <FaApple />
              Apple
            </button>
          </div>
        </div>

        {/* DIVIDER */}
        <div className={styles.orDivider}>
          <span />
          OR DIRECT OPERATIVE FORM
          <span />
        </div>

        {/* FORM */}
        <div className={styles.form}>
          <div className={styles.field}>
            <label>Operative Email</label>

            <div className={styles.inputWrapper}>
              <FiAtSign />
              <input type='email' placeholder='alex.vance@apexnode.gg' />
            </div>
          </div>

          <div className={styles.field}>
            <label>Network GamerTag</label>

            <div className={styles.inputWrapper}>
              <span className={styles.atSymbol}>@</span>
              <input type='text' placeholder='VortexOperative' />
            </div>
          </div>

          <div className={styles.field}>
            <label>Cyber-Vault Password</label>

            <div className={styles.inputWrapper}>
              <FiLock />
              <input type='password' placeholder='Create a secure password' />
            </div>
          </div>

          <div className={styles.field}>
            <label>Server Cluster & Routing Node</label>

            <div className={styles.inputWrapper}>
              <FiServer className={styles.serverIcon} />
              <select defaultValue='us-east'>
                <option value='us-east'>
                  US-East Array (Virginia Core • 11ms live)
                </option>
                <option value='eu-west'>EU-West Array</option>
                <option value='asia'>Asia-Pacific Array</option>
              </select>
              <span className={styles.selectArrow}>⌄</span>
            </div>
          </div>

          {/* TERMS */}
          <div className={styles.terms}>
            <input type='checkbox' defaultChecked />
            <p>
              I agree to the <a>Terms of Service</a>, <a>Privacy Charter</a>,
              and <a>Direct Cloud License.</a>
            </p>
          </div>

          {/* SUBMIT */}
          <button type='button' className={styles.submitButton}>
            Initialize Operative Account
            <FiArrowRight />
          </button>
        </div>

        {/* GUARANTEES */}
        <div className={styles.guarantees}>
          <span>
            <FiShield />
            256-bit Quantum Token
          </span>

          <i />

          <span>
            <FiShield />
            14-Day Money-Back Guarantee
          </span>
        </div>

        <div className={styles.signIn}>
          Already have a PLAYZONE ID?
          <Link to='/login'>Sign In</Link>
        </div>
      </section>
    </div>
  );
}

export default RegisterPage;
