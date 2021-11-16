import './App.css';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { useState, React } from 'react';
import Layout from '../../components/Layout/Layout';
import GroupList from '../../components/GroupList/GroupList';
import GroupDetailPage from '../GroupDetailPage/GroupDetailPage';
import * as groupsAPI from '../../utilities/groups-api';
import * as usersAPI from '../../utilities/users-api';
import NavBar from '../../components/NavBar/NavBar';
import YearDetailPage from '../YearDetailPage/YearDetailPage';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewGroupForm from '../NewGroupForm/NewGroupForm';
import Home from '../Home/Home';
import UserProfile from '../UserProfile/UserProfile';
import Footer from '../../components/Footer/Footer';



function App() {
  const [groups, setGroups] = useState([]);
  const [selected, setSelected] = useState(false);
  const [user, setUser] = useState(getUser());

  

  

 


  return (
    <Layout>
      <NavBar user={user} setUser={setUser}/>
      <GroupList groups={groups} 
      setGroups={setGroups} 
      selected={selected} 
      setSelected={setSelected}
      user={user}/>
        <Switch>
          <Route exact path="/groups">
            <Home />
            {/* <GroupList groups={groups} 
            setGroups={setGroups} 
            selected={selected} 
            setSelected={setSelected}
            user={user}/> */}
          </Route>
          <Route exact path="/groups/:id">
          {/* <GroupList groups={groups} 
            setGroups={setGroups} 
            selected={selected} 
            setSelected={setSelected}
            user={user}/> */}
            <GroupDetailPage  setGroups={setGroups} user={user}/>
          </Route>
          <Route exact path="/groups/:id/:yId">
            <YearDetailPage groups={groups} user={user} />
          </Route>
          <Route exact path="/login">
            <AuthPage user={user} setUser={setUser} />
          </Route>
          <Route exact path="/new-group">
            <NewGroupForm groups={groups} setGroups={setGroups} user={user} setUser={setUser} />
          </Route>
          <Route exact path="/profile/:id">
            <UserProfile user={user} setGroups={setGroups} groups={groups} />
          </Route>
          <Redirect to ="/groups" />
      </Switch>
      <Footer/>
    </Layout>
  );
}

export default App;
