import Header from './components/layout/Header';
import ShortenInput from './components/ShortenInput';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ShortenInput />
      </main>
    </>
  );
}

export default App;
