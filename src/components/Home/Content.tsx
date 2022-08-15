import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { landingPageData } from './homePageData';
import { StyledButton } from '../../theme';
import { ScrollToTop, useScrollToTop } from './ScrollToTop';

export default function Content() {
  let navigate = useNavigate();
  return (
    <>
      <div className={styles.contentContainer}>
        {landingPageData.map(content => (
          <div className={styles.contentCard}>
            <div className={styles.contentCardHeader}>{content.header}</div>
            <div className={styles.contentCardDesc}>{content.content}</div>
          </div>
        ))}
        <StyledButton
          variant="contained"
          onClick={() => {
            navigate(`/register`);
          }}
        >
          Register
        </StyledButton>
      </div>
      <ScrollToTop />
    </>
  );
}
