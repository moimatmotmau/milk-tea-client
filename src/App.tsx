import { Navigate, Route, Routes, } from 'react-router-dom';
import {
  Navbar, HomePage, Introdution, ListShop, Recruit, Checkout, ReturnPaymentResult, Footer, Product,
  HistoryAndMission, CreateAccount,
  Login, News, Commercial_story, Promotional_news, Sk_events
} from './components/index';
import './App.css';
import ProfilesWrapper from './components/Profiles/ProfilesWrapper';
import ProfilesPreview from './components/Profiles/EditProfiles/ProfilesPreview';
import ProfilesOrder from './components/Profiles/ProfilesOrder'
import { useRecoilValue } from 'recoil';
import { accountState } from './recoilProvider/userProvider';

// import { useDispatch, useSelector } from 'react-redux'
// import * as actions from './redux/actions'
// import { usersState$ } from './redux/selectors/index'
// import {useEffect} from 'react'
// import saga

function App(): JSX.Element {
  // const dispatch = useDispatch();

  // const users = useSelector(usersState$)
  // console.log('users list: ',users)

  // useEffect(() => {
  //   dispatch(actions.getUsers.getUsersRequest());
  // }, [dispatch])
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
        <Route path="/news" element={<News />} />
        <Route path="/commercial_story" element={<Commercial_story />} />
        <Route path='/promotional_news' element={<Promotional_news />} />
        <Route path='/sk_events' element={<Sk_events />} />
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
