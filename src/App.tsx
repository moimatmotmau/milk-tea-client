import { Navigate, Route, Routes, } from 'react-router-dom';
import {
  Navbar, HomePage, Introdution, ListShop, Recruit, Checkout, ReturnPaymentResult, Footer, Product,
  HistoryAndMission, CreateAccount,
  Login, News, CommercialStory, PromotionalNews, SkEvents
} from './components/index';
import ProfilesWrapper from './components/Profiles/ProfilesWrapper';
import ProfilesPreview from './components/Profiles/EditProfiles/ProfilesPreview';
import ProfilesOrder from './components/Profiles/ProfilesOrder'
import { useRecoilValue } from 'recoil';
import { accountState } from './recoilProvider/userProvider';

function App(): JSX.Element {
  const user = useRecoilValue(accountState)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list-shop" element={<ListShop />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/return" element={<ReturnPaymentResult />} />
        <Route path="/product" element={<Product />} />
        <Route path="/historyAndMission" element={<HistoryAndMission />} />
        <Route path="/introdution" element={<Introdution />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />}/>
        <Route path="/commercial_story" element={<CommercialStory />} />
        <Route path='/promotional_news' element={<PromotionalNews />} />
        <Route path='/sk_events' element={<SkEvents />} />
        <Route path='/account' element={user.username ? <ProfilesWrapper /> : <Navigate to="/Login" />}>
          <Route path='/account/' element={<ProfilesPreview />} />
          <Route path='order' element={<ProfilesOrder />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
