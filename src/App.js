import logo from "./logo.svg";
import NavItem from "./components/nav-item/nav-item";
import Nav from "./components/nav/nav";
import Button from "./components/button/button";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import InformationSection from "./components/information-section/information-section";

import "./App.css";

function App() {
  return (
    <>
      <Header className="header bg-white">
        <div className="header-container">
          <section className="header-container page-container">
            <div className="header-item-container">
              <div className="header-item-left">
                <Nav className="nav">
                  <NavItem className="nav-item font-weight-700">Menu</NavItem>
                  <NavItem className="nav-item font-weight-700 nav-item-active">
                    Rewards
                  </NavItem>
                  <NavItem className="nav-item font-weight-700">
                    Gift Cards
                  </NavItem>
                </Nav>
              </div>
              <div className="header-item-right">
                <Button className="btn btn-secondary" text="Sign in" />
                <Button className="btn btn-neutral" text="Join now" />
              </div>
            </div>
          </section>
        </div>
      </Header>
      <main>
        <Hero />
        <InformationSection
          title="Getting started is easy"
          description="Earn Stars and get rewarded in a few easy steps."
        />
      </main>
    </>
  );
}

export default App;
