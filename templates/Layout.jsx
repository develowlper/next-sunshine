import Sidebar from '../organisms/Sidebar';
import cls from './Layout.module.css';
export default function Layout({ children }) {
  return (
    <div className={cls.container}>
      <Sidebar className={cls.sidebar} />
      <div className={cls.content}>
        <main className={cls.main}>{children}</main>
        <footer></footer>
      </div>
    </div>
  );
}
