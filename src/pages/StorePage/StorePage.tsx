import { useState } from 'react';
import { FaApple, FaLinux, FaWindows } from 'react-icons/fa';

// components
import GameCollection, {
  type GameCollectionView,
} from '../../components/GameCollection/GameCollection';
import FilterSection from '../../components/FilterSection/FilterSection';

// extras
import { dummyGames } from '../../extras/dummy_data';
import useToggleList from '../../hooks/useToggleList';
import styles from './StorePage.module.css';
import {
  FiSearch,
  FiChevronDown,
  FiGrid,
  FiList,
  FiX,
  FiSliders,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

function StorePage() {
  const {
    items: filters,
    toggleItem: toggleActiveFilter,
    clearItems: clearFilters,
  } = useToggleList<string>();
  const [view, setView] = useState<GameCollectionView>('grid');

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
        <div
          className={`${styles.toolbar} ${
            filters.length === 0 ? styles.standaloneToolbar : ''
          }`}
        >
          <div className={styles.searchBox}>
            <FiSearch />
            <span>Filter by name, tags, or publisher...</span>
          </div>

          <div className={styles.toolbarRight}>
            <div className={styles.sortBox}>
              <label htmlFor='store-sort'>Sort:</label>
              <select id='store-sort' defaultValue='popularity'>
                <option value='popularity'>Popularity: High to Low</option>
                <option value='newest'>Newest Releases</option>
                <option value='price-low'>Price: Low to High</option>
                <option value='price-high'>Price: High to Low</option>
                <option value='title-asc'>Title: A to Z</option>
                <option value='title-desc'>Title: Z to A</option>
              </select>
              <FiChevronDown aria-hidden='true' />
            </div>

            <div className={styles.viewToggle} aria-label='Catalog view'>
              <button
                type='button'
                className={`${styles.viewButton} ${
                  view === 'grid' ? styles.activeView : ''
                }`}
                aria-label='Grid view'
                aria-pressed={view === 'grid'}
                onClick={() => setView('grid')}
              >
                <FiGrid aria-hidden='true' />
              </button>
              <button
                type='button'
                className={`${styles.viewButton} ${
                  view === 'list' ? styles.activeView : ''
                }`}
                aria-label='List view'
                aria-pressed={view === 'list'}
                onClick={() => setView('list')}
              >
                <FiList aria-hidden='true' />
              </button>
            </div>
          </div>
        </div>

        {/* Active filters */}
        {filters.length > 0 && (
          <div className={styles.filterBar}>
            <div className={styles.activeFilters}>
              <span className={styles.activeLabel}>ACTIVE:</span>

              {filters.map((filter) => (
                <div className={styles.filterChip} key={filter}>
                  {filter}
                  <button
                    type='button'
                    aria-label={`Remove filter ${filter}`}
                    onClick={() => toggleActiveFilter(filter)}
                  >
                    <FiX aria-hidden='true' />
                  </button>
                </div>
              ))}
            </div>

            <button
              type='button'
              className={styles.clearAll}
              onClick={clearFilters}
            >
              Clear All ({filters.length})
            </button>
          </div>
        )}
      </section>

      <div className={styles.mainContent}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeading}>
            <h2>
              <FiSliders /> Filters
            </h2>
            {filters.length > 0 && (
              <button type='button' onClick={clearFilters}>
                Reset
              </button>
            )}
          </div>

          <FilterSection
            title='Price Range'
            trailing={<span>$0 — $70</span>}
            collapsible={false}
          >
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
                <input
                  type='checkbox'
                  checked={filters.includes('Free to Play')}
                  onChange={() => toggleActiveFilter('Free to Play')}
                />{' '}
                Free to Play <span>1,120</span>
              </label>
              <label>
                <input
                  type='checkbox'
                  checked={filters.includes('Under $10')}
                  onChange={() => toggleActiveFilter('Under $10')}
                />{' '}
                Under $10 <span>4,290</span>
              </label>
              <label>
                <input
                  type='checkbox'
                  checked={filters.includes('Under $20')}
                  onChange={() => toggleActiveFilter('Under $20')}
                />{' '}
                Under $20 <span>7,810</span>
              </label>
              <label>
                <input
                  type='checkbox'
                  checked={filters.includes('On Sale Only')}
                  onChange={() => toggleActiveFilter('On Sale Only')}
                />
                On Sale Only <span>3,480</span>
              </label>
            </div>
          </FilterSection>

          <FilterSection title='Genre'>
            <div className={styles.filterOptions}>
              <label>
                <input
                  type='checkbox'
                  checked={filters.includes('Action')}
                  onChange={() => toggleActiveFilter('Action')}
                />{' '}
                Action <span>4,820</span>
              </label>
              <label>
                <input
                  type='checkbox'
                  checked={filters.includes('Adventure')}
                  onChange={() => toggleActiveFilter('Adventure')}
                />{' '}
                Adventure <span>3,150</span>
              </label>
              <label>
                <input
                  type='checkbox'
                  checked={filters.includes('RPG')}
                  onChange={() => toggleActiveFilter('RPG')}
                />{' '}
                RPG <span>2,940</span>
              </label>
              <label>
                <input
                  type='checkbox'
                  checked={filters.includes('Strategy')}
                  onChange={() => toggleActiveFilter('Strategy')}
                />{' '}
                Strategy <span>1,840</span>
              </label>
              <label>
                <input
                  type='checkbox'
                  checked={filters.includes('Simulation')}
                  onChange={() => toggleActiveFilter('Simulation')}
                />{' '}
                Simulation <span>1,230</span>
              </label>
            </div>
          </FilterSection>

          <FilterSection title='Hardware & Features'>
            <div className={styles.filterOptions}>
              <label>
                <input
                  type='checkbox'
                  checked={filters.includes('Single Player')}
                  onChange={() => toggleActiveFilter('Single Player')}
                />{' '}
                Single Player <span>9,410</span>
              </label>
              <label>
                <input
                  type='checkbox'
                  checked={filters.includes('Multiplayer')}
                  onChange={() => toggleActiveFilter('Multiplayer')}
                />{' '}
                Multiplayer <span>3,150</span>
              </label>
              <label>
                <input
                  type='checkbox'
                  checked={filters.includes('VR Support')}
                  onChange={() => toggleActiveFilter('VR Support')}
                />{' '}
                VR Support <span>590</span>
              </label>
              <label>
                <input
                  type='checkbox'
                  checked={filters.includes('Controller Support')}
                  onChange={() => toggleActiveFilter('Controller Support')}
                />{' '}
                Controller Support <span>7,120</span>
              </label>
              <label>
                <input
                  type='checkbox'
                  checked={filters.includes('Ray Tracing')}
                  onChange={() => toggleActiveFilter('Ray Tracing')}
                />{' '}
                Ray Tracing <span>2,940</span>
              </label>
            </div>
          </FilterSection>

          <FilterSection title='Operating System'>
            <div className={styles.osOptions}>
              <button
                type='button'
                className={`${styles.osOption} ${filters.includes('Windows') ? styles.activeOsOption : ''}`}
                aria-pressed={filters.includes('Windows')}
                onClick={() => toggleActiveFilter('Windows')}
              >
                <FaWindows aria-hidden='true' />
                <span>Windows</span>
              </button>
              <button
                type='button'
                className={`${styles.osOption} ${filters.includes('macOS') ? styles.activeOsOption : ''}`}
                aria-pressed={filters.includes('macOS')}
                onClick={() => toggleActiveFilter('macOS')}
              >
                <FaApple aria-hidden='true' />
                <span>macOS</span>
              </button>
              <button
                type='button'
                className={`${styles.osOption} ${filters.includes('SteamOS/Linux') ? styles.activeOsOption : ''}`}
                aria-pressed={filters.includes('SteamOS/Linux')}
                onClick={() => toggleActiveFilter('SteamOS/Linux')}
              >
                <FaLinux aria-hidden='true' />
                <span>SteamOS/Linux</span>
              </button>
            </div>
          </FilterSection>
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

            <GameCollection
              games={dummyGames.slice(0, 6)}
              view={view}
              className={styles.storeGameCollection}
            />
          </div>

          <div className={styles.pagination}>
            <div className={styles.info}>
              Showing <strong>1–9</strong> of <strong>14,240</strong> games
            </div>

            <div className={styles.controls}>
              <button
                type='button'
                className={`${styles.navButton} ${styles.disabled}`}
                disabled
              >
                <FiChevronLeft aria-hidden='true' />
                <span>Prev</span>
              </button>

              <button
                type='button'
                className={`${styles.page} ${styles.active}`}
                aria-current='page'
              >
                1
              </button>
              <button type='button' className={styles.page}>
                2
              </button>
              <button type='button' className={styles.page}>
                3
              </button>
              <button type='button' className={styles.page}>
                4
              </button>

              <span className={styles.ellipsis}>...</span>

              <button type='button' className={styles.page}>
                120
              </button>

              <button type='button' className={styles.navButton}>
                <span>Next</span>
                <FiChevronRight aria-hidden='true' />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default StorePage;
