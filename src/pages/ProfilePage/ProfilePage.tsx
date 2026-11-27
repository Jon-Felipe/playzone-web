import { NavLink } from 'react-router';
import {
  FaCheckCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTrophy,
  FaCloud,
  FaWifi,
  FaPen,
  FaShareAlt,
  FaCog,
  FaEye,
  FaThLarge,
  FaGamepad,
  FaUsers,
  FaBookmark,
  FaSlidersH,
  FaClock,
  FaPlay,
  FaEllipsisV,
  FaCubes,
  FaCoins,
  FaFire,
  FaCommentAlt,
} from 'react-icons/fa';

// extras
import heroImage from '../../assets/hero.png';
import { dummyGames } from '../../extras/dummy_data';
import styles from './ProfilePage.module.css';

const navigation = [
  { name: 'Overview', path: '/profile', icon: <FaThLarge /> },
  {
    name: 'Library',
    path: '/profile/library',
    icon: <FaGamepad />,
    count: 86,
  },
  {
    name: 'Achievements',
    path: '/profile/achievements',
    icon: <FaTrophy />,
    count: 642,
  },
  {
    name: 'Friends',
    path: '/profile/friends',
    icon: <FaUsers />,
    online: true,
  },
  {
    name: 'Wishlist',
    path: '/profile/wishlist',
    icon: <FaBookmark />,
  },
  {
    name: 'Settings',
    path: '/profile/settings',
    icon: <FaSlidersH />,
  },
];

const stats = [
  {
    title: 'GAMES OWNED',
    value: 86,
    description: '+4 this month',
    icon: <FaGamepad />,
    color: 'purple',
  },
  {
    title: 'HOURS PLAYED',
    value: 1284,
    suffix: 'h',
    description: 'Top 8% globally',
    icon: <FaClock />,
    color: 'cyan',
  },
  {
    title: 'ACHIEVEMENTS',
    value: 642,
    description: '72% completion rate',
    icon: <FaTrophy />,
    color: 'green',
  },
  {
    title: 'WISHLIST',
    value: 24,
    description: 'Keep an eye on these',
    icon: <FaBookmark />,
    color: 'purple',
  },
];

const games = [
  {
    id: 1,
    name: 'Cyberpunk 2077',
    genre: ['RPG', 'Action'],
    hours: 120,
    lastPlayed: 'today',
    progress: 75,
    progressLabel: 'Story Progress',
    image: dummyGames[0].coverImage,
  },
  {
    id: 2,
    name: 'The Witcher 3',
    genre: ['RPG', 'Adventure'],
    hours: 200,
    lastPlayed: 'yesterday',
    progress: 90,
    progressLabel: 'Story Progress',
    image: dummyGames[1].coverImage,
  },
  {
    id: 3,
    name: 'Minecraft',
    genre: ['Sandbox', 'Survival'],
    hours: 350,
    lastPlayed: 'last week',
    progress: 50,
    progressLabel: 'Completion',
    image: dummyGames[2].coverImage,
  },
];

const activities = [
  {
    title: 'Unlocked First Blood achievement',
    highlight: 'First Blood',
    time: '2 hours ago',
    color: 'purple',
    icon: <FaGamepad />,
  },
  {
    title: 'Played The Witcher 3 for 3 hours',
    highlight: 'The Witcher 3',
    time: '5 hours ago',
    color: 'cyan',
    icon: <FaClock />,
  },
  {
    title: 'Added Cyberpunk 2077 to wishlist',
    highlight: 'Cyberpunk 2077',
    time: '1 day ago',
    color: 'green',
    icon: <FaBookmark />,
  },
];

const achievements = [
  {
    name: 'First Blood',
    game: 'Cyberpunk 2077',
    date: 'April 2024',
    rarity: 'Common',
    color: 'purple',
    icon: <FaGamepad />,
  },
  {
    name: 'Master Explorer',
    game: 'The Witcher 3',
    date: 'March 2024',
    rarity: 'Rare',
    color: 'green',
    icon: <FaTrophy />,
  },
  {
    name: 'Builder Extraordinaire',
    game: 'Minecraft',
    date: 'February 2024',
    rarity: 'Epic',
    color: 'blue',
    icon: <FaCubes />,
  },
];

const friends = [
  {
    name: 'Alice',
    initials: 'A',
    status: 'Online',
  },
  {
    name: 'Bob',
    initials: 'B',
    status: 'Online',
  },
  {
    name: 'Charlie',
    initials: 'C',
    status: 'Offline',
  },
  {
    name: 'Diana',
    initials: 'D',
    status: 'Online',
  },
];

function ProfilePage() {
  return (
    <div>
      <div className={styles.profileContainer}>
        {/* Cover */}
        <section className={styles.profileHero}>
          <div className={styles.coverImage} />

          <div className={styles.serverStatus}>
            <span className={styles.statusDot} />
            PZ CORE // NODE 04-LIS
            <span className={styles.stable}>STABLE</span>
          </div>

          {/* Profile content */}
          <div className={styles.profileContent}>
            <div className={styles.avatarWrapper}>
              <img
                src={heroImage}
                alt='Profile avatar'
                className={styles.avatar}
              />
              <span className={styles.onlineIndicator} />
            </div>

            <div className={styles.profileInfo}>
              <div className={styles.nameRow}>
                <h1>Operative</h1>
                <FaCheckCircle className={styles.verified} />
                <span className={styles.username}>@shadow_stalker99</span>
              </div>

              <div className={styles.badges}>
                <span className={styles.badge}>
                  <FaCalendarAlt /> Member since April 2024
                </span>

                <span className={styles.badge}>
                  <FaMapMarkerAlt /> South Africa
                </span>

                <span className={`${styles.badge} ${styles.elite}`}>
                  <FaTrophy /> Elite Tier
                </span>

                <span className={`${styles.badge} ${styles.cloud}`}>
                  <FaCloud /> Cloud: Synchronized
                </span>

                <span className={`${styles.badge} ${styles.ping}`}>
                  <FaWifi /> 14ms (EU-West)
                </span>
              </div>

              <p className={styles.bio}>
                "Exploring new worlds, chasing impossible builds, and never
                leaving a side quest unfinished."
              </p>
            </div>

            {/* Actions and level */}
            <div className={styles.profileRight}>
              <div className={styles.actions}>
                <button type='button' className={styles.editButton}>
                  <FaPen aria-hidden='true' /> Edit Profile
                </button>

                <button type='button' className={styles.shareButton}>
                  <FaShareAlt aria-hidden='true' /> Share Profile
                </button>

                <button
                  type='button'
                  className={styles.settingsButton}
                  aria-label='Profile settings'
                >
                  <FaCog aria-hidden='true' />
                </button>
              </div>

              <div className={styles.levelCard}>
                <div className={styles.levelTop}>
                  <div className={styles.levelInfo}>
                    <span className={styles.levelNumber}>LVL 42</span>
                    <strong>Elite Tier</strong>
                  </div>

                  <span className={styles.xpText}>7,840 / 10,000 XP</span>
                </div>

                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} />
                </div>

                <div className={styles.progressBottom}>
                  <span>Progress: 78%</span>
                  <strong>2,160 XP to Level 43</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <nav className={styles.profileNav}>
          <div className={styles.navItems}>
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/profile'}
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ''}`
                }
              >
                {item.icon}
                <span>{item.name}</span>

                {item.count && (
                  <span className={styles.navCount}>{item.count}</span>
                )}

                {item.online && <span className={styles.navOnline} />}
              </NavLink>
            ))}
          </div>

          <div className={styles.publicView}>
            <span>Public Profile View</span>
            <button
              type='button'
              className={styles.viewButton}
              aria-label='Preview public profile'
            >
              <FaEye aria-hidden='true' />
            </button>
          </div>
        </nav>

        <section className={styles.statsGrid}>
          {stats.map((stat) => (
            <div className={styles.statCard} key={stat.title}>
              <div className={styles.statContent}>
                <span className={styles.statTitle}>{stat.title}</span>

                <div className={styles.statValue}>
                  {stat.value}
                  {stat.suffix && (
                    <span className={styles.suffix}>{stat.suffix}</span>
                  )}
                </div>

                <span
                  className={`${styles.statDescription} ${styles[stat.color]}`}
                >
                  {stat.description}
                </span>
              </div>

              <div className={`${styles.iconBox} ${styles[stat.color]}`}>
                {stat.icon}
              </div>
            </div>
          ))}
        </section>
      </div>

      <section className={styles.dashboard}>
        {/* Continue Playing */}
        <div className={styles.mainColumn}>
          <section className={styles.continueSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.headingGroup}>
                <h2>Continue Playing</h2>
                <span className={styles.countBadge}>3 In Progress</span>
              </div>

              <span className={styles.viewLink}>View History →</span>
            </div>

            <div className={styles.gameList}>
              {games.map((game) => (
                <article className={styles.gameCard} key={game.id}>
                  <div className={styles.gameImageWrapper}>
                    <img src={game.image} alt={game.name} />

                    <span className={styles.syncedBadge}>
                      <span /> SYNCED
                    </span>
                  </div>

                  <div className={styles.gameDetails}>
                    <div className={styles.gameTitleRow}>
                      <h3>{game.name}</h3>
                      <FaCloud className={styles.cloudIcon} />
                    </div>

                    <div className={styles.genreList}>
                      {game.genre.map((genre) => (
                        <span key={genre}>{genre}</span>
                      ))}
                    </div>

                    <p className={styles.gameMeta}>
                      {game.hours} hours played • Last played {game.lastPlayed}
                    </p>

                    <div className={styles.progressInfo}>
                      <span>{game.progressLabel}</span>
                      <strong>{game.progress}%</strong>
                    </div>

                    <div className={styles.progressTrack}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${game.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className={styles.gameActions}>
                    <button type='button' className={styles.resumeButton}>
                      <FaPlay aria-hidden='true' />
                      Resume Game
                    </button>

                    <button
                      type='button'
                      className={styles.moreButton}
                      aria-label={`More options for ${game.name}`}
                    >
                      <FaEllipsisV aria-hidden='true' />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
          {/* Recent Activity Panel */}
          <section className={styles.activitySection}>
            <div className={styles.sectionHeader}>
              <h2>Recent Activity</h2>
              <span className={styles.activitySubtitle}>
                Real-time sync telemetry
              </span>
            </div>

            <div className={styles.activityPanel}>
              <div className={styles.timeline}>
                {activities.map((activity, index) => (
                  <div className={styles.activityItem} key={index}>
                    <div
                      className={`${styles.activityIcon} ${styles[activity.color]}`}
                    >
                      {activity.icon}
                    </div>

                    <div className={styles.activityDetails}>
                      <p>
                        {activity.title.split(activity.highlight)[0]}
                        <strong>{activity.highlight}</strong>
                        {activity.title.split(activity.highlight)[1]}
                      </p>

                      <span>{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <aside className={styles.sideColumn}>
          {/* Level & Tier Panel */}
          <section className={styles.panel}>
            <div className={styles.panelHeader}>
              <h3>Level & Tier</h3>

              <span className={styles.levelBadge}>LVL 42</span>
            </div>

            <div className={styles.tierProgress}>
              <div className={styles.progressHeading}>
                <strong>Elite Tier Progress</strong>
                <strong className={styles.cyanText}>78%</strong>
              </div>

              <div className={styles.progressTrack}>
                <div className={styles.progressFill} style={{ width: '78%' }} />
              </div>

              <div className={styles.xpDetails}>
                <span>7,840 XP earned</span>
                <span>10,000 XP Goal</span>
              </div>
            </div>

            <div className={styles.rewardRow}>
              <span>
                <FaCoins className={styles.greenText} />
                Next Reward
              </span>

              <strong className={styles.greenText}>+2,000 PZ Credits</strong>
            </div>

            <div className={styles.rewardRow}>
              <span>
                <FaFire className={styles.cyanText} />
                Streak
              </span>

              <strong className={styles.cyanText}>7-Day Activity Streak</strong>
            </div>
          </section>

          {/* Recent Achievements Panel */}
          <section className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <h3>Recent Achievements</h3>
                <p className={styles.panelSubtitle}>642 Total Unlocked</p>
              </div>

              <span className={styles.viewLink}>View All</span>
            </div>

            <div className={styles.achievementList}>
              {achievements.map((item) => (
                <div className={styles.achievementItem} key={item.name}>
                  <div
                    className={`${styles.achievementIcon} ${styles[item.color]}`}
                  >
                    {item.icon}
                  </div>

                  <div className={styles.achievementDetails}>
                    <strong>{item.name}</strong>
                    <span>
                      {item.game} • {item.date}
                    </span>
                  </div>

                  <span className={`${styles.rarity} ${styles[item.color]}`}>
                    {item.rarity}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Friends Panel */}
          <section className={styles.panel}>
            <div className={styles.panelHeader}>
              <div className={styles.friendsHeading}>
                <h3>Friends Online</h3>
                <span className={styles.countBadge}>4 / 32</span>
              </div>

              <span className={styles.viewLink}>View All</span>
            </div>

            <div className={styles.friendsList}>
              {friends.map((friend) => (
                <div className={styles.friendItem} key={friend.name}>
                  <div className={styles.friendAvatar}>
                    {friend.initials}
                    <span
                      className={
                        friend.status === 'Online' ? styles.friendOnline : ''
                      }
                    />
                  </div>

                  <div className={styles.friendDetails}>
                    <strong>{friend.name}</strong>
                    <span>{friend.status}</span>
                  </div>

                  <button
                    type='button'
                    className={styles.messageButton}
                    aria-label={`Message ${friend.name}`}
                  >
                    <FaCommentAlt aria-hidden='true' />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </div>
  );
}

export default ProfilePage;
