// No need to import "react" just for JSX in React 17+
import Recipes from './Recipes';
// import sword from '../images/swc-sword.png';
// import swordSvg from '../images/sword.svg';

import '../styles/index.scss';

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Herro, React.</h1>
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
