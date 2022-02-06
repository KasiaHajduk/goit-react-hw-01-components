//import logo from './logo.svg';
import './App.css';

import Profile from './Profile';
import user from './user.json';

import Statistics from './Statistics';
import statistics from './statistics.json';

import FriendList from './FriendList';
import friends from './friends.json';

import TransactionHistory from './TransactionHistory';
import transactions from './transactions.json';


function App() {
    return (
        <div className="App">
            <Profile user={user} />
            <hr/>
            <Statistics statistics={statistics} />
            <hr/>
            <FriendList friends={friends} />
            <hr/>
            <TransactionHistory transactions={transactions} />
        </div>

    )
}

export default App;