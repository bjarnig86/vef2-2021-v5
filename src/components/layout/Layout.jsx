import s from './Layout.module.scss';

// TODO sækja Sass

export function Layout({ title = 'RÚV Fréttir', children }) {
  // TODO setja upp layout fyrir vef
  return (
    <div className={s.layout}>
      <header className={s.layout__header}>
        <h1>{title}</h1>
      </header>
      <main className={s.layout__main}>
        {children}
      </main>
      <hr/>
      <footer>
        <p>Fréttir frá <a href="http://ruv.is">RÚV</a></p>
      </footer>
    </div>
  );
}
