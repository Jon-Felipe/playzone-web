import { useId, useState, type ReactNode } from 'react';
import { FiChevronUp } from 'react-icons/fi';

import styles from './FilterSection.module.css';

interface FilterSectionProps {
  title: string;
  children: ReactNode;
  collapsible?: boolean;
  defaultExpanded?: boolean;
  trailing?: ReactNode;
}

function FilterSection({
  title,
  children,
  collapsible = true,
  defaultExpanded = true,
  trailing,
}: FilterSectionProps) {
  const contentId = useId();
  const [expanded, setExpanded] = useState(defaultExpanded);

  const header = (
    <>
      <strong>{title}</strong>
      {trailing}
      {collapsible && (
        <FiChevronUp
          aria-hidden='true'
          className={expanded ? '' : styles.collapsedChevron}
        />
      )}
    </>
  );

  return (
    <div className={styles.filterCard}>
      {collapsible ? (
        <button
          type='button'
          className={`${styles.filterTitle} ${expanded ? '' : styles.collapsedTitle}`}
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={() => setExpanded((current) => !current)}
        >
          {header}
        </button>
      ) : (
        <div className={styles.filterTitle}>{header}</div>
      )}

      <div id={contentId} hidden={collapsible && !expanded}>
        {children}
      </div>
    </div>
  );
}

export default FilterSection;
