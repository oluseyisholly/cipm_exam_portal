import MyDocumentCard from './card';
import styles from './main.module.css'

export interface MyDocumentProps {
}
const MyDocument  = ({}:MyDocumentProps) =>  {
  return <>
    <div className={styles.wrapper}>
        <div className={styles.header}>
            <h1>Documents</h1>
        </div>
        <section>
            <MyDocumentCard/>
            <MyDocumentCard/>
            <MyDocumentCard/>
            <MyDocumentCard/>
        </section>
    </div>
  </>
};

export default MyDocument;
