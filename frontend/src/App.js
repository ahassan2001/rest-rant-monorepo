import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import PlaceIndex from './places/PlaceIndex'
import PlaceDetails from './places/PlaceDetails'
import Navigation from './Navigation'
import Error404 from './Error404'
import NewPlaceForm from './places/NewPlaceForm'
import EditPlaceForm from './places/EditPlaceForm'
import SignUpForm from './users/SignUpForm'
import LoginForm from './users/LoginForm'
import CurrentUserProvider from './contexts/CurrentUser'

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/places" component={PlaceIndex} />
          <Route exact path="/places/new" component={NewPlaceForm} />
          <Route exact path="/places/:placeId" component={PlaceDetails} />
          <Route exact path="/places/:placeId/edit" component={EditPlaceForm} />
          <Route path="/" component={Error404} />
        </Switch>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;

___
async function handleSubmit(e) {
    const response = await fetch(`http://localhost:5000/authentication/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

    const data = await response.json()

    if (response.status === 200) {
        setCurrentUser(data.user)
        localStorage.setItem('token', data.token)
        console.log(data.token)
        history.push(`/`)
    } else {
        setErrorMessage(data.message)
    }}
