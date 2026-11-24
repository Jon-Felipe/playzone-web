import { FaApple, FaLinux, FaWindows } from 'react-icons/fa';

// components
import GamesGrid from '../../components/GamesGrid/GamesGrid';

// extras
import { dummyGames } from '../../data/dummy_data';
import styles from './StorePage.module.css';
import {
  FiSearch,
  FiChevronDown,
  FiGrid,
  FiList,
  FiX,
  FiChevronUp,
  FiSliders,
} from 'react-icons/fi';

const filters = ['Action', 'Adventure', 'RPG'];

function StorePage() {
  return (
    <>
      <section className={styles.catalog}>
        {/* Top header */}
        <div className={styles.topSection}>
          <div className={styles.heading}>
            <div className={styles.breadcrumb}>
              <span>STOREFRONT</span>
              <span className={styles.slash}>/</span>
              <span>ALL CATALOG</span>
            </div>

            <h1>Browse All Titles</h1>
          </div>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <strong className={styles.blue}>3,480+</strong>
              <span>On Discount</span>
            </div>

            <div className={styles.statCard}>
              <strong className={styles.green}>98.2%</strong>
              <span>Delivery Speed</span>
            </div>

            <div className={styles.statCard}>
              <strong className={styles.purple}>8,910</strong>
              <span>Deck Verified</span>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className={styles.toolbar}>
          <div className={styles.searchBox}>
            <FiSearch />
            <span>Filter by name, tags, or publisher...</span>
          </div>

          <div className={styles.toolbarRight}>
            <div className={styles.sortBox}>
              <span>Sort:</span>
              <strong>Popularity: High to Low</strong>
              <FiChevronDown />
            </div>

            <div className={styles.viewToggle}>
              <div className={styles.activeView}>
                <FiGrid />
              </div>
              <div className={styles.inactiveView}>
                <FiList />
              </div>
            </div>
          </div>
        </div>

        {/* Active filters */}
        <div className={styles.filterBar}>
          <div className={styles.activeFilters}>
            <span className={styles.activeLabel}>ACTIVE:</span>

            {filters.map((filter) => (
              <div className={styles.filterChip} key={filter}>
                {filter}
                <FiX />
              </div>
            ))}
          </div>

          <span className={styles.clearAll}>Clear All (3)</span>
        </div>
      </section>

      <div className={styles.mainContent}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeading}>
            <h2>
              <FiSliders /> Filters
            </h2>
            <span>Reset</span>
          </div>

          <div className={styles.filterCard}>
            <div className={styles.filterTitle}>
              <strong>Price Range</strong>
              <span>$0 — $70</span>
            </div>

            <div className={styles.rangeTrack}>
              <div className={styles.rangeProgress} />
              <div className={styles.rangeThumb} />
            </div>

            <div className={styles.rangeLabels}>
              <span>Free</span>
              <span>$50</span>
              <span>$100+</span>
            </div>

            <div className={styles.filterOptions}>
              <label>
                <input type='checkbox' /> Free to Play <span>1,120</span>
              </label>
              <label>
                <input type='checkbox' /> Under $10 <span>4,290</span>
              </label>
              <label>
                <input type='checkbox' /> Under $20 <span>7,810</span>
              </label>
              <label className={styles.checkedOption}>
                <input type='checkbox' defaultChecked />
                On Sale Only <span>3,480</span>
              </label>
            </div>
          </div>

          <div className={styles.filterCard}>
            <div className={styles.filterTitle}>
              <strong>Genre</strong>
              <FiChevronUp />
            </div>

            <div className={styles.filterOptions}>
              <label>
                <input type='checkbox' /> Action <span>4,820</span>
              </label>
              <label>
                <input type='checkbox' /> Adventure <span>3,150</span>
              </label>
              <label className={styles.checkedOption}>
                <input type='checkbox' defaultChecked />
                RPG <span>2,940</span>
              </label>
              <label>
                <input type='checkbox' /> Strategy <span>1,840</span>
              </label>
              <label>
                <input type='checkbox' /> Simulation <span>1,230</span>
              </label>
            </div>
          </div>

          <div className={styles.filterCard}>
            <div className={styles.filterTitle}>
              <strong>Hardware & Features</strong>
              <FiChevronUp />
            </div>

            <div className={styles.filterOptions}>
              <label className={styles.checkedOption}>
                <input type='checkbox' defaultChecked /> Single Player{' '}
                <span>9,410</span>
              </label>
              <label>
                <input type='checkbox' /> Multiplayer <span>3,150</span>
              </label>
              <label>
                <input type='checkbox' /> VR Support <span>590</span>
              </label>
              <label>
                <input type='checkbox' /> Controller Support <span>7,120</span>
              </label>
              <label>
                <input type='checkbox' />
                Ray Tracing <span>2,940</span>
              </label>
            </div>
          </div>

          <div className={styles.filterCard}>
            <div className={styles.filterTitle}>
              <strong>Operating System</strong>
              <FiChevronUp />
            </div>

            <div className={styles.osOptions}>
              <button
                type='button'
                className={`${styles.osOption} ${styles.activeOsOption}`}
                aria-pressed='true'
              >
                <FaWindows aria-hidden='true' />
                <span>Windows</span>
              </button>
              <button type='button' className={styles.osOption}>
                <FaApple aria-hidden='true' />
                <span>macOS</span>
              </button>
              <button type='button' className={styles.osOption}>
                <FaLinux aria-hidden='true' />
                <span>SteamOS/Linux</span>
              </button>
            </div>
          </div>
        </aside>

        <section className={styles.resultsSection}>
          <div className={styles.results}>
            <div className={styles.resultsHeader}>
              <p>
                Showing <strong>1–9</strong> of <strong>14,240</strong> matching
                titles
              </p>

              <div className={styles.liveStatus}>
                <span />
                Real-time cloud pricing updated
              </div>
            </div>

            <GamesGrid
              games={dummyGames.slice(0, 9)}
              className={styles.storeGamesGrid}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default StorePage;
