import './App.css'
import './index.css'
import Ipl from './ipl'
import CskVsRcb from './assets/CSKvsRCB.jfif'
import CskVsMi from './assets/CSKvsMI.jfif'
import MatchList from './map'
import Fetch2 from './fetch2'
import Fetch3 from './Fetch3'
import Batch from './batch'
import Counter from './Tasks/counter'
import Pagination from './Tasks/pagination'
import UseMemo from './useMemo'
import ReactMemo from './ReactMemo'
import ErrorBoundary from './ErrorBoundary'
import BuggyComponent from './BuggyComponent'
import UseCallBack from './useCallBack'
import UseReducer from './useReducer'
import ReactLazy from './ReactLazy'
import { Suspense, useEffect } from 'react'
import LazyDemo from './LazyDemo'
import LazyChart from './LazyChart'
import HookForm from './HookForm'
import YupForm from './YupForm'
import NewChartJs from './NewChartJs'
import Dropdown from './Dropdown'
import FetchLocal from './Study/FetchLocal'
import CookieSet from './Study/CookieSet'
import CookieGet from './Study/CookieGet'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CookieLogin from './Study/CookieLogin'
import { AuthProvider } from './Study/AuthContext'
import UserData from './Study/UserData'
import FilterUser from './Study/FilterUser'
import UpdateUser from './Study/UpdateUser'
import ProtectedRoute from './Study/ProtectedRoute'
import ConditionalRendering from './Study/ConditionalRendering'
import CustomerAdd from './Redux/CustomerAdd'
import CustomerView from './Redux/CustomerView'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
import Login from './Test/Login'
import Conditional2 from './Conditional2'
import Conditional1 from './Conditional1'
import SignUp from './HTTP/SignUp'
import CounterAdd from './Redux/CounterAdd'
import User from './Redux/User'
import useFetch from './fetch'
import SignUp2 from './HTTP/SignUp'
import Home from './HTTP/Home'
import AuthProvider2 from './HTTP/AuthProvider'
import Login2 from './HTTP/Login2'
import Basic from './Basic'
import Create from './CRUD/Create'
import ReadUpdateDelete from './CRUD/ReadUpdateDelete'
import SignUpTask from './Tasks/SignUp'
import { AuthproviderTask } from './Tasks/AuthProvider'
import HomeTask from './Tasks/Home'
import CreateCrud from './CRUD2/CreateCrud'
import RUD from './CRUD2/RUD'
import ICIC from './ICIC'

//const About=React.lazy(()=>import('./LazyDemo'))

function App() {
  //const [showModal, setShowModal] = useState(false);
  /*useEffect(() => {
    fetch('http://localhost:3000/User/')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  })*/
  return (
    <>
    <ICIC />
    {/*<BrowserRouter>
    <Routes>
      <Route path='/' element={<CreateCrud />} />
      <Route path='/get' element={<RUD />} />
    </Routes>
    </BrowserRouter>
   {/*} <AuthproviderTask>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUpTask />} />
        <Route path='/home' element={<HomeTask />} />
      </Routes>
      </BrowserRouter>
    </AuthproviderTask>
   {/* <Create />
    <ReadUpdateDelete />
      <AuthProvider2>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignUp2 />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login2 />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider2>

      {/*} <Provider store={store}>
      <User />
    </Provider>
   {/* <SignUp />
    {/*<Conditional1 />
    {/*<Login />

    {/*<Provider store={store}>
    <>
    <CustomerAdd />
    <CustomerView />


    
   {/*} <AuthProvider>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<CookieLogin />} />
      <Route path='/signup' element={<CookieSet />} />
      <Route element={<ProtectedRoute allowedEmail={['Sivaraman.bca.st@gmail.com']} />}>
      <Route path='/dashboard' element={<CookieGet />} />
      </Route>
      <Route path='/userData' element={<UserData />} />
      <Route path='/email' element={<FilterUser />} />
      <Route path='/updateprofile' element={<UpdateUser />} />
      <Route path='/condition' element={<ConditionalRendering />} />
    </Routes>
    </BrowserRouter>
    </AuthProvider>
    {/*<CookieSet />
    {/*<FetchLocal />



    {/*<Dropdown />
   {/*} <NewChartJs />
    {/*<YupForm />
    {/*<HookForm />
    {/*<LazyChart />
   {/* <ReactLazy />
    <UseReducer />
   <UseMemo /> <UseCallBack />
     <h1>Hello React!</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <p>This is a modal rendered through a portal!</p>
        </Modal>
      )}

      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>


    {/*<MatchList />
    <Fetch3 />
    <Batch />
    <Counter />
    <Pagination />
    <UseMemo />
    <ReactMemo />
   {/* <Ipl MatchName="Csk vs Rcb" location="Chennai" image={CskVsRcb} show={true} /> 
    <div className="m-7 bg-blue-700 transform hover:translate-x-50 transition duration-500 ease-in-out w-6 h-6 rounded-full animate-bounce"></div>
    <div className="m-7 bg-blue-700 w-6 h-6 rounded-full animate-ping"></div>
    <div className="m-7 bg-blue-700 w-6 h-6  animate-spin"></div>
    <div className="m-7 bg-blue-700 w-6 h-6 rounded-full animate-pulse"></div>
    <div className="w-32 h-10 bg-blue-500 animate-move-right">
  Moving Right
</div>
<div className='text-blue-500 border border-green-500 bg-red-100 p-5 mr-100 w-2/4 text-lg text-center text-3xl font-bold underline'>
  Utility
</div>
<div className="shadow-lg text-sm md:text-lg lg:text-xl lg:text-blue-600">Responsive</div>

<button className="border border-gray-500 shadow-lg hover:shadow-xl mt-3 px-6 rounded text-white bg-blue-500 p-2 m-20 white-500 hover:bg-blue-800 focus:outline-none active:bg-red-500">State</button>

<div className="flex justify-center gap-4 ">
  <div className="text-blue-400">Item 1</div>
  <div className="text-blue-400">Item 2</div>
</div>

<div className="grid grid-cols-3 ml-100 mr-100">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<div className="relative h-40">
  <div className="absolute">Positioning</div>
</div>

<div >
  <button className=" shadow shadow-lg mr-150 ml-150 font-bold text-white rounded bg-gradient-to-r from-red-400 to-yellow-400 p-2 text-lg text-center" >Hello world</button>
</div>

<button className="transform hover:skew-y-6 transition duration-300 ease-in-out">
  Hover to Zoom
</button>

<div className="transition-transform duration-500 ease-in-out transform hover:rotate-12 hover:scale-110">
  🌟 Fancy Hover Effect
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div>Mobile</div>
  <div>Tab</div>
  <div>Desktop</div>
</div>

<div className="bg-white text-black dark:bg-gray-900 dark:text-white p-4">
  I'm responsive to dark mode!
</div>

<form className="space-y-4">
  <input type='text' placeholder='name' className='p2 form-input w-full' />
</form>

<img src='/vite.svg' className="w-60 rounded m-40" />

<button className='btn'>Apply</button> 
</>
</Provider>*/}
    </>
  )
}

export default App
