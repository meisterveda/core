import { Features, Hero } from '@core/shared/ui';
import styles from './page.module.css';

const stacks: { name: string; items: string[] }[] = [
  { name: 'test', items: ['item test', 'item 2 test', 'item 3 test'] },
  { name: 'test 2', items: ['item test'] },
  { name: 'test 3', items: ['item test'] },
];

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <Hero />
      <Features stacks={stacks} />
    </div>
  );
}
