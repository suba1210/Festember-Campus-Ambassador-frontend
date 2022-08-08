import styles from './styles.module.css';
import { landingPageData } from './homePageData';
import { StyledButton } from '../../theme';
import ScrollToTop from './ScrollToTop';

export default function Content() {
  return (
    <>
      <div className={styles.contentContainer}>
        {landingPageData.map(content => (
          <div className={styles.contentCard}>
            <div className={styles.contentCardHeader}>{content.header}</div>
            <div className={styles.contentCardDesc}>{content.content}</div>
          </div>
        ))}
        <StyledButton variant="contained">Register</StyledButton>
      </div>
      <ScrollToTop />
    </>
  );
}
