import Header from './components/layout/Header';
import ShortenInput from './components/ShortenInput';
import styles from './App.module.css';
import AdvancedStatistics from './components/layout/AdvancedStatistics';
import Boost from './components/layout/Boost';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ShortenInput />
        <AdvancedStatistics />
        <Boost />
      </main>
    </>
  );
}

export default App;
