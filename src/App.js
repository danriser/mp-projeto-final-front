import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/useUserContext';
import MyRoutes from './routes';
function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <MyRoutes/>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
