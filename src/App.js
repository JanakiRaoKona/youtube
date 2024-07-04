import Body from './components/Body';
import Login from './components/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Trending from './components/Trending';
import Gaming from './components/Gaming';
import SavedVideos from './components/SavedVideos';
import ProtectedRoute from './utlis/ProtectedRoute';
import VideoPlay from './components/VideoPlay';
import appStore from './utlis/appStore';
import { Provider } from 'react-redux';


const appRouter = createBrowserRouter([
  {
    path: "/",

    element: < ProtectedRoute element={<Body />} />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/trending', element: <Trending /> },
      { path: '/gaming', element: <Gaming /> },
      { path: '/saved-videos', element: <SavedVideos /> },
      {
        path: "/videosplay/:resId",
        element: <VideoPlay />
      },
    ],

    errorElement: <NotFound />
  },
  {
    path: "/login",
    element: <Login />
  },


])

function App() {
  return (
    <div>
      <Provider store={appStore}>
        < RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;


