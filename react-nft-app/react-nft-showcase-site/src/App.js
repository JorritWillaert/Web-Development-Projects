import { Download, Features, SectionWrapper } from "./components";
import assets from './assets';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Your own store of Nifty NFTs. Start selling & growing."
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef MarketPlace."
        showBtn
        mockupImg={assets.homeHero}
      />
    </>
  );
};

export default App;
