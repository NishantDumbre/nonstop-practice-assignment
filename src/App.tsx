import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageContainer from "./Components/PageContainer";
import LeftSide from "./Views/LeftSide";
import CandidateList from "./Components/CandidateList";
import CandidateForm from "./Components/CandidateForm";
import CandidateDetailsSection from "./Components/CandidateDetailsSection";
import { Provider } from "react-redux";
import store from "./Redux/store/store";
import Auth from "./Views/Auth";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Auth />} />
          <PageContainer
            staticElement={<LeftSide />}
            dynamicElement={
              <Switch>
                <Route
                  exact
                  path="/candidate"
                  component={() => <CandidateList />}
                />
                <Route
                  path="/candidate/new"
                  component={() => <CandidateForm />}
                />
                <Route
                  path="/candidate/:id"
                  component={() => <CandidateDetailsSection />}
                />
              </Switch>
            }
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
