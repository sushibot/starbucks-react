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
                <a className="pointer text-hover-secondary font-weight-700 text-sm">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                      width: "15px",
                      height: "15px",
                      overflow: "visible",
                      fill: "currentcolor",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path>
                  </svg>
                  Find a store
                </a>
                <div style={{ display: "flex", gap: "1.25rem" }}>
                  <Button className="btn btn-secondary" text="Sign in" />
                  <Button className="btn btn-neutral" text="Join now" />
                </div>
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
