import Header from './components/layout/Header';
import ShortenInput from './components/ShortenInput';
import styles from './App.module.css';
import AdvancedStatistics from './components/layout/AdvancedStatistics';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ShortenInput />
        <AdvancedStatistics />
      </main>
    </>
  );
}

export default App;
