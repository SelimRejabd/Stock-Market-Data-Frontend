import React from 'react';
import './styles/tailwind.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import HomeScreen from './Screens/HomeScreen';


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <HomeScreen />
            </div>
        </Provider>
    );
}

export default App;
