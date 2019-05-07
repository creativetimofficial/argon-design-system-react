import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import { Button, Row, Col, UncontrolledTooltip } from "reactstrap";

class Icons extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Icons
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Get started with Bootstrap, React, Reactstrap and create-react-app,
          the world’s most popular frameworks for building responsive,
          mobile-first sites.
        </p>
        <hr />
        <h2 id="nucleo">Nucleo</h2>
        <p>
          Argon comes with 100 custom icons made by our friends from Nucleo App.
          The official package contains over 25000 icons which are looking great
          in combination with Argon. Make sure you check all of them and use
          those that you like the most.
        </p>
        <h3 id="usage">Usage</h3>
        <p>
          In order to use this icons on your page you will need to import them
          inside the <code className="highlighter-rouge">{`src/index.js`}</code>{" "}
          file of your app:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`import "assets/vendor/nucleo/css/nucleo.css";`}
        </SyntaxHighlighter>
        <h3 id="initialization">Initialization</h3>
        <p>
          Start placing icons in your app. We recommend using a consistent HTML
          element, like <code className="highlighter-rouge">{`<i>`}</code>. Find
          the right icon and learn how to reference it in your markup.
        </p>
        <p>You need to know two bits of information to reference an icon:</p>
        <ol>
          <li>its name, prefixed with ni- and</li>
          <li>the style you want to use’s corresponding prefix.</li>
        </ol>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`<i className="ni ni-air-baloon"></i>`}
        </SyntaxHighlighter>
        <h3 id="icons">Icons</h3>
        <Row className="icon-examples mb-4">
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"active-40"}
              onCopy={() => this.setState({ copiedText: "active-40" })}
            >
              <button
                className="btn-icon-clipboard"
                id="tooltip982655500"
                type="button"
              >
                <div>
                  <i className="ni ni-active-40" />
                  <span>active-40</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip982655500"
            >
              {this.state.copiedText === "active-40"
                ? "Copied"
                : "Copy To Clipboard"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"air-baloon"}
              onCopy={() => this.setState({ copiedText: "air-baloon" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="air-baloon"
                id="tooltip47550434"
                type="button"
              >
                <div>
                  <i className="ni ni-air-baloon" />
                  <span>air-baloon</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip47550434"
            >
              {this.state.copiedText === "air-baloon"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"album-2"}
              onCopy={() => this.setState({ copiedText: "album-2" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="album-2"
                id="tooltip945481346"
                type="button"
              >
                <div>
                  <i className="ni ni-album-2" />
                  <span>album-2</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip945481346"
            >
              {this.state.copiedText === "album-2"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"align-center"}
              onCopy={() => this.setState({ copiedText: "align-center" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="align-center"
                id="tooltip662352101"
                type="button"
              >
                <div>
                  <i className="ni ni-align-center" />
                  <span>align-center</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip662352101"
            >
              {this.state.copiedText === "align-center"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"left-2"}
              onCopy={() => this.setState({ copiedText: "align-left-2" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="align-left-2"
                id="tooltip125499785"
                type="button"
              >
                <div>
                  <i className="ni ni-align-left-2" />
                  <span>align-left-2</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip125499785"
            >
              {this.state.copiedText === "align-left-2"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"ambulance"}
              onCopy={() => this.setState({ copiedText: "ambulance" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="ambulance"
                id="tooltip382136785"
                type="button"
              >
                <div>
                  <i className="ni ni-ambulance" />
                  <span>ambulance</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip382136785"
            >
              {this.state.copiedText === "ambulance"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"asdasdsafsdsad"}
              onCopy={() => this.setState({ copiedText: "app" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="app"
                id="tooltip3354607"
                type="button"
              >
                <div>
                  <i className="ni ni-app" />
                  <span>app</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip3354607"
            >
              {this.state.copiedText === "app" ? "Copied" : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"archive-2"}
              onCopy={() => this.setState({ copiedText: "archive-2" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="archive-2"
                id="tooltip949558633"
                type="button"
              >
                <div>
                  <i className="ni ni-archive-2" />
                  <span>archive-2</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip949558633"
            >
              {this.state.copiedText === "archive-2"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"atom"}
              onCopy={() => this.setState({ copiedText: "atom" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="atom"
                id="tooltip742747005"
                type="button"
              >
                <div>
                  <i className="ni ni-atom" />
                  <span>atom</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip742747005"
            >
              {this.state.copiedText === "atom" ? "Copied" : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"badge"}
              onCopy={() => this.setState({ copiedText: "badge" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="badge"
                id="tooltip488565068"
                type="button"
              >
                <div>
                  <i className="ni ni-badge" />
                  <span>badge</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip488565068"
            >
              {this.state.copiedText === "badge"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"bag-17"}
              onCopy={() => this.setState({ copiedText: "bag-17" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="bag-17"
                id="tooltip163626790"
                type="button"
              >
                <div>
                  <i className="ni ni-bag-17" />
                  <span>bag-17</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip163626790"
            >
              {this.state.copiedText === "bag-17"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"basket"}
              onCopy={() => this.setState({ copiedText: "basket" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="basket"
                id="tooltip387253692"
                type="button"
              >
                <div>
                  <i className="ni ni-basket" />
                  <span>basket</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip387253692"
            >
              {this.state.copiedText === "basket"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"bell-55"}
              onCopy={() => this.setState({ copiedText: "bell-55" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="bell-55"
                id="tooltip126752761"
                type="button"
              >
                <div>
                  <i className="ni ni-bell-55" />
                  <span>bell-55</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip126752761"
            >
              {this.state.copiedText === "bell-55"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"bold-down"}
              onCopy={() => this.setState({ copiedText: "bold-down" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="bold-down"
                id="tooltip819281856"
                type="button"
              >
                <div>
                  <i className="ni ni-bold-down" />
                  <span>bold-down</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip819281856"
            >
              {this.state.copiedText === "bold-down"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"bold-left"}
              onCopy={() => this.setState({ copiedText: "bold-left" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="bold-left"
                id="tooltip881699027"
                type="button"
              >
                <div>
                  <i className="ni ni-bold-left" />
                  <span>bold-left</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip881699027"
            >
              {this.state.copiedText === "bold-left"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"bold-right"}
              onCopy={() => this.setState({ copiedText: "bold-right" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="bold-right"
                id="tooltip208507461"
                type="button"
              >
                <div>
                  <i className="ni ni-bold-right" />
                  <span>bold-right</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip208507461"
            >
              {this.state.copiedText === "bold-right"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"bold-up"}
              onCopy={() => this.setState({ copiedText: "bold-up" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="bold-up"
                id="tooltip105289310"
                type="button"
              >
                <div>
                  <i className="ni ni-bold-up" />
                  <span>bold-up</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip105289310"
            >
              {this.state.copiedText === "bold-up"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"bold"}
              onCopy={() => this.setState({ copiedText: "bold" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="bold"
                id="tooltip832362262"
                type="button"
              >
                <div>
                  <i className="ni ni-bold" />
                  <span>bold</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip832362262"
            >
              {this.state.copiedText === "bold" ? "Copied" : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"book-bookmark"}
              onCopy={() => this.setState({ copiedText: "book-bookmark" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="book-bookmark"
                id="tooltip606002875"
                type="button"
              >
                <div>
                  <i className="ni ni-book-bookmark" />
                  <span>book-bookmark</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip606002875"
            >
              {this.state.copiedText === "book-bookmark"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"books"}
              onCopy={() => this.setState({ copiedText: "books" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="books"
                id="tooltip484529730"
                type="button"
              >
                <div>
                  <i className="ni ni-books" />
                  <span>books</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip484529730"
            >
              {this.state.copiedText === "books"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"box-2"}
              onCopy={() => this.setState({ copiedText: "box-2" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="box-2"
                id="tooltip509205883"
                type="button"
              >
                <div>
                  <i className="ni ni-box-2" />
                  <span>box-2</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip509205883"
            >
              {this.state.copiedText === "box-2"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"briefcase-24"}
              onCopy={() => this.setState({ copiedText: "briefcase-24" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="briefcase-24"
                id="tooltip147778056"
                type="button"
              >
                <div>
                  <i className="ni ni-briefcase-24" />
                  <span>briefcase-24</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip147778056"
            >
              {this.state.copiedText === "briefcase-24"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"building"}
              onCopy={() => this.setState({ copiedText: "building" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="building"
                id="tooltip157423388"
                type="button"
              >
                <div>
                  <i className="ni ni-building" />
                  <span>building</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip157423388"
            >
              {this.state.copiedText === "building"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"bulb-61"}
              onCopy={() => this.setState({ copiedText: "bulb-61" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="bulb-61"
                id="tooltip126210465"
                type="button"
              >
                <div>
                  <i className="ni ni-bulb-61" />
                  <span>bulb-61</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip126210465"
            >
              {this.state.copiedText === "bulb-61"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"list-67"}
              onCopy={() => this.setState({ copiedText: "list-67" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="bullet-list-67"
                id="tooltip672244852"
                type="button"
              >
                <div>
                  <i className="ni ni-bullet-list-67" />
                  <span>bullet-list-67</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip672244852"
            >
              {this.state.copiedText === "list-67"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"bus-front-12"}
              onCopy={() => this.setState({ copiedText: "bus-front-12" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="bus-front-12"
                id="tooltip17383590"
                type="button"
              >
                <div>
                  <i className="ni ni-bus-front-12" />
                  <span>bus-front-12</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip17383590"
            >
              {this.state.copiedText === "bus-front-12"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"button-pause"}
              onCopy={() => this.setState({ copiedText: "button-pause" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="button-pause"
                id="tooltip721295259"
                type="button"
              >
                <div>
                  <i className="ni ni-button-pause" />
                  <span>button-pause</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip721295259"
            >
              {this.state.copiedText === "button-pause"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"button-play"}
              onCopy={() => this.setState({ copiedText: "button-play" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="button-play"
                id="tooltip397403700"
                type="button"
              >
                <div>
                  <i className="ni ni-button-play" />
                  <span>button-play</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip397403700"
            >
              {this.state.copiedText === "button-play"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"button-power"}
              onCopy={() => this.setState({ copiedText: "button-power" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="button-power"
                id="tooltip286478188"
                type="button"
              >
                <div>
                  <i className="ni ni-button-power" />
                  <span>button-power</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip286478188"
            >
              {this.state.copiedText === "button-power"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"calendar-grid-58"}
              onCopy={() => this.setState({ copiedText: "calendar-grid-58" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="calendar-grid-58"
                id="tooltip332635506"
                type="button"
              >
                <div>
                  <i className="ni ni-calendar-grid-58" />
                  <span>calendar-grid-58</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip332635506"
            >
              {this.state.copiedText === "calendar-grid-58"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"camera-compact"}
              onCopy={() => this.setState({ copiedText: "camera-compact" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="camera-compact"
                id="tooltip872817724"
                type="button"
              >
                <div>
                  <i className="ni ni-camera-compact" />
                  <span>camera-compact</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip872817724"
            >
              {this.state.copiedText === "camera-compact"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"caps-small"}
              onCopy={() => this.setState({ copiedText: "caps-small" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="caps-small"
                id="tooltip108271146"
                type="button"
              >
                <div>
                  <i className="ni ni-caps-small" />
                  <span>caps-small</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip108271146"
            >
              {this.state.copiedText === "caps-small"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"cart"}
              onCopy={() => this.setState({ copiedText: "cart" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="cart"
                id="tooltip315375170"
                type="button"
              >
                <div>
                  <i className="ni ni-cart" />
                  <span>cart</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip315375170"
            >
              {this.state.copiedText === "cart" ? "Copied" : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"chart-bar-32"}
              onCopy={() => this.setState({ copiedText: "chart-bar-32" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="chart-bar-32"
                id="tooltip906739900"
                type="button"
              >
                <div>
                  <i className="ni ni-chart-bar-32" />
                  <span>chart-bar-32</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip906739900"
            >
              {this.state.copiedText === "chart-bar-32"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"chart-pie-35"}
              onCopy={() => this.setState({ copiedText: "chart-pie-35" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="chart-pie-35"
                id="tooltip211198935"
                type="button"
              >
                <div>
                  <i className="ni ni-chart-pie-35" />
                  <span>chart-pie-35</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip211198935"
            >
              {this.state.copiedText === "chart-pie-35"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"chat-round"}
              onCopy={() => this.setState({ copiedText: "chat-round" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="chat-round"
                id="tooltip452799920"
                type="button"
              >
                <div>
                  <i className="ni ni-chat-round" />
                  <span>chat-round</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip452799920"
            >
              {this.state.copiedText === "chat-round"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"check-bold"}
              onCopy={() => this.setState({ copiedText: "check-bold" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="check-bold"
                id="tooltip204269497"
                type="button"
              >
                <div>
                  <i className="ni ni-check-bold" />
                  <span>check-bold</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip204269497"
            >
              {this.state.copiedText === "check-bold"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"circle-08"}
              onCopy={() => this.setState({ copiedText: "circle-08" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="circle-08"
                id="tooltip63796078"
                type="button"
              >
                <div>
                  <i className="ni ni-circle-08" />
                  <span>circle-08</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip63796078"
            >
              {this.state.copiedText === "circle-08"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"cloud-download-95"}
              onCopy={() => this.setState({ copiedText: "cloud-download-95" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="cloud-download-95"
                id="tooltip171823822"
                type="button"
              >
                <div>
                  <i className="ni ni-cloud-download-95" />
                  <span>cloud-download-95</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip171823822"
            >
              {this.state.copiedText === "cloud-download-95"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"cloud-upload-96"}
              onCopy={() => this.setState({ copiedText: "cloud-upload-96" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="cloud-upload-96"
                id="tooltip603641354"
                type="button"
              >
                <div>
                  <i className="ni ni-cloud-upload-96" />
                  <span>cloud-upload-96</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip603641354"
            >
              {this.state.copiedText === "cloud-upload-96"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"compass-04"}
              onCopy={() => this.setState({ copiedText: "compass-04" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="compass-04"
                id="tooltip138747611"
                type="button"
              >
                <div>
                  <i className="ni ni-compass-04" />
                  <span>compass-04</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip138747611"
            >
              {this.state.copiedText === "compass-04"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"controller"}
              onCopy={() => this.setState({ copiedText: "controller" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="controller"
                id="tooltip477306514"
                type="button"
              >
                <div>
                  <i className="ni ni-controller" />
                  <span>controller</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip477306514"
            >
              {this.state.copiedText === "controller"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"credit-card"}
              onCopy={() => this.setState({ copiedText: "credit-card" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="credit-card"
                id="tooltip672313572"
                type="button"
              >
                <div>
                  <i className="ni ni-credit-card" />
                  <span>credit-card</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip672313572"
            >
              {this.state.copiedText === "credit-card"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"curved-next"}
              onCopy={() => this.setState({ copiedText: "curved-next" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="curved-next"
                id="tooltip228405488"
                type="button"
              >
                <div>
                  <i className="ni ni-curved-next" />
                  <span>curved-next</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip228405488"
            >
              {this.state.copiedText === "curved-next"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"delivery-fast"}
              onCopy={() => this.setState({ copiedText: "delivery-fast" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="delivery-fast"
                id="tooltip405559"
                type="button"
              >
                <div>
                  <i className="ni ni-delivery-fast" />
                  <span>delivery-fast</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip405559"
            >
              {this.state.copiedText === "delivery-fast"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"diamond"}
              onCopy={() => this.setState({ copiedText: "diamond" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="diamond"
                id="tooltip842334307"
                type="button"
              >
                <div>
                  <i className="ni ni-diamond" />
                  <span>diamond</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip842334307"
            >
              {this.state.copiedText === "diamond"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"email-83"}
              onCopy={() => this.setState({ copiedText: "email-83" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="email-83"
                id="tooltip695661232"
                type="button"
              >
                <div>
                  <i className="ni ni-email-83" />
                  <span>email-83</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip695661232"
            >
              {this.state.copiedText === "email-83"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"fat-add"}
              onCopy={() => this.setState({ copiedText: "fat-add" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="fat-add"
                id="tooltip112280005"
                type="button"
              >
                <div>
                  <i className="ni ni-fat-add" />
                  <span>fat-add</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip112280005"
            >
              {this.state.copiedText === "fat-add"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"fat-delete"}
              onCopy={() => this.setState({ copiedText: "fat-delete" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="fat-delete"
                id="tooltip361927124"
                type="button"
              >
                <div>
                  <i className="ni ni-fat-delete" />
                  <span>fat-delete</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip361927124"
            >
              {this.state.copiedText === "fat-delete"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"fat-remove"}
              onCopy={() => this.setState({ copiedText: "fat-remove" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="fat-remove"
                id="tooltip451275187"
                type="button"
              >
                <div>
                  <i className="ni ni-fat-remove" />
                  <span>fat-remove</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip451275187"
            >
              {this.state.copiedText === "fat-remove"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"favourite-28"}
              onCopy={() => this.setState({ copiedText: "favourite-28" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="favourite-28"
                id="tooltip893689512"
                type="button"
              >
                <div>
                  <i className="ni ni-favourite-28" />
                  <span>favourite-28</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip893689512"
            >
              {this.state.copiedText === "favourite-28"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"folder-17"}
              onCopy={() => this.setState({ copiedText: "folder-17" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="folder-17"
                id="tooltip988458715"
                type="button"
              >
                <div>
                  <i className="ni ni-folder-17" />
                  <span>folder-17</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip988458715"
            >
              {this.state.copiedText === "folder-17"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"glasses-2"}
              onCopy={() => this.setState({ copiedText: "glasses-2" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="glasses-2"
                id="tooltip576477258"
                type="button"
              >
                <div>
                  <i className="ni ni-glasses-2" />
                  <span>glasses-2</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip576477258"
            >
              {this.state.copiedText === "glasses-2"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"hat-3"}
              onCopy={() => this.setState({ copiedText: "hat-3" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="hat-3"
                id="tooltip977228923"
                type="button"
              >
                <div>
                  <i className="ni ni-hat-3" />
                  <span>hat-3</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip977228923"
            >
              {this.state.copiedText === "hat-3"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"headphones"}
              onCopy={() => this.setState({ copiedText: "headphones" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="headphones"
                id="tooltip711983709"
                type="button"
              >
                <div>
                  <i className="ni ni-headphones" />
                  <span>headphones</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip711983709"
            >
              {this.state.copiedText === "headphones"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"html5"}
              onCopy={() => this.setState({ copiedText: "html5" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="html5"
                id="tooltip346497134"
                type="button"
              >
                <div>
                  <i className="ni ni-html5" />
                  <span>html5</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip346497134"
            >
              {this.state.copiedText === "html5"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"istanbul"}
              onCopy={() => this.setState({ copiedText: "istanbul" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="istanbul"
                id="tooltip344591402"
                type="button"
              >
                <div>
                  <i className="ni ni-istanbul" />
                  <span>istanbul</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip344591402"
            >
              {this.state.copiedText === "istanbul"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"circle-08"}
              onCopy={() => this.setState({ copiedText: "circle-08" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="circle-08"
                id="tooltip815029398"
                type="button"
              >
                <div>
                  <i className="ni ni-circle-08" />
                  <span>circle-08</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip815029398"
            >
              {this.state.copiedText === "circle-08"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"key-25"}
              onCopy={() => this.setState({ copiedText: "key-25" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="key-25"
                id="tooltip580511416"
                type="button"
              >
                <div>
                  <i className="ni ni-key-25" />
                  <span>key-25</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip580511416"
            >
              {this.state.copiedText === "key-25"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"laptop"}
              onCopy={() => this.setState({ copiedText: "laptop" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="laptop"
                id="tooltip455996160"
                type="button"
              >
                <div>
                  <i className="ni ni-laptop" />
                  <span>laptop</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip455996160"
            >
              {this.state.copiedText === "laptop"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"like-2"}
              onCopy={() => this.setState({ copiedText: "like-2" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="like-2"
                id="tooltip928932853"
                type="button"
              >
                <div>
                  <i className="ni ni-like-2" />
                  <span>like-2</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip928932853"
            >
              {this.state.copiedText === "like-2"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"lock-circle-open"}
              onCopy={() => this.setState({ copiedText: "lock-circle-open" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="lock-circle-open"
                id="tooltip634042199"
                type="button"
              >
                <div>
                  <i className="ni ni-lock-circle-open" />
                  <span>lock-circle-open</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip634042199"
            >
              {this.state.copiedText === "lock-circle-open"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"map-big"}
              onCopy={() => this.setState({ copiedText: "map-big" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="map-big"
                id="tooltip615611081"
                type="button"
              >
                <div>
                  <i className="ni ni-map-big" />
                  <span>map-big</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip615611081"
            >
              {this.state.copiedText === "map-big"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"mobile-button"}
              onCopy={() => this.setState({ copiedText: "mobile-button" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="mobile-button"
                id="tooltip426682279"
                type="button"
              >
                <div>
                  <i className="ni ni-mobile-button" />
                  <span>mobile-button</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip426682279"
            >
              {this.state.copiedText === "mobile-button"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"money-coins"}
              onCopy={() => this.setState({ copiedText: "money-coins" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="money-coins"
                id="tooltip198953665"
                type="button"
              >
                <div>
                  <i className="ni ni-money-coins" />
                  <span>money-coins</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip198953665"
            >
              {this.state.copiedText === "money-coins"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"note-03"}
              onCopy={() => this.setState({ copiedText: "note-03" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="note-03"
                id="tooltip909975995"
                type="button"
              >
                <div>
                  <i className="ni ni-note-03" />
                  <span>note-03</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip909975995"
            >
              {this.state.copiedText === "note-03"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"notification-70"}
              onCopy={() => this.setState({ copiedText: "notification-70" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="notification-70"
                id="tooltip942089221"
                type="button"
              >
                <div>
                  <i className="ni ni-notification-70" />
                  <span>notification-70</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip942089221"
            >
              {this.state.copiedText === "notification-70"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"palette"}
              onCopy={() => this.setState({ copiedText: "palette" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="palette"
                id="tooltip721048582"
                type="button"
              >
                <div>
                  <i className="ni ni-palette" />
                  <span>palette</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip721048582"
            >
              {this.state.copiedText === "palette"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"paper-diploma"}
              onCopy={() => this.setState({ copiedText: "paper-diploma" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="paper-diploma"
                id="tooltip875782946"
                type="button"
              >
                <div>
                  <i className="ni ni-paper-diploma" />
                  <span>paper-diploma</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip875782946"
            >
              {this.state.copiedText === "paper-diploma"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"pin-3"}
              onCopy={() => this.setState({ copiedText: "pin-3" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="pin-3"
                id="tooltip945087492"
                type="button"
              >
                <div>
                  <i className="ni ni-pin-3" />
                  <span>pin-3</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip945087492"
            >
              {this.state.copiedText === "pin-3"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"planet"}
              onCopy={() => this.setState({ copiedText: "planet" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="planet"
                id="tooltip482139663"
                type="button"
              >
                <div>
                  <i className="ni ni-planet" />
                  <span>planet</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip482139663"
            >
              {this.state.copiedText === "planet"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"ruler-pencil"}
              onCopy={() => this.setState({ copiedText: "ruler-pencil" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="ruler-pencil"
                id="tooltip693938896"
                type="button"
              >
                <div>
                  <i className="ni ni-ruler-pencil" />
                  <span>ruler-pencil</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip693938896"
            >
              {this.state.copiedText === "ruler-pencil"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"satisfied"}
              onCopy={() => this.setState({ copiedText: "satisfied" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="satisfied"
                id="tooltip634575265"
                type="button"
              >
                <div>
                  <i className="ni ni-satisfied" />
                  <span>satisfied</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip634575265"
            >
              {this.state.copiedText === "satisfied"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"scissors"}
              onCopy={() => this.setState({ copiedText: "scissors" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="scissors"
                id="tooltip688473648"
                type="button"
              >
                <div>
                  <i className="ni ni-scissors" />
                  <span>scissors</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip688473648"
            >
              {this.state.copiedText === "scissors"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"send"}
              onCopy={() => this.setState({ copiedText: "send" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="send"
                id="tooltip161268791"
                type="button"
              >
                <div>
                  <i className="ni ni-send" />
                  <span>send</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip161268791"
            >
              {this.state.copiedText === "send" ? "Copied" : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"settings-gear-65"}
              onCopy={() => this.setState({ copiedText: "settings-gear-65" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="settings-gear-65"
                id="tooltip487959296"
                type="button"
              >
                <div>
                  <i className="ni ni-settings-gear-65" />
                  <span>settings-gear-65</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip487959296"
            >
              {this.state.copiedText === "settings-gear-65"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"settings"}
              onCopy={() => this.setState({ copiedText: "settings" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="settings"
                id="tooltip156598208"
                type="button"
              >
                <div>
                  <i className="ni ni-settings" />
                  <span>settings</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip156598208"
            >
              {this.state.copiedText === "settings"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"single-02"}
              onCopy={() => this.setState({ copiedText: "single-02" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="single-02"
                id="tooltip487356467"
                type="button"
              >
                <div>
                  <i className="ni ni-single-02" />
                  <span>single-02</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip487356467"
            >
              {this.state.copiedText === "single-02"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"single-copy-04"}
              onCopy={() => this.setState({ copiedText: "single-copy-04" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="single-copy-04"
                id="tooltip340498904"
                type="button"
              >
                <div>
                  <i className="ni ni-single-copy-04" />
                  <span>single-copy-04</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip340498904"
            >
              {this.state.copiedText === "single-copy-04"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"sound-wave"}
              onCopy={() => this.setState({ copiedText: "sound-wave" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="sound-wave"
                id="tooltip289156059"
                type="button"
              >
                <div>
                  <i className="ni ni-sound-wave" />
                  <span>sound-wave</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip289156059"
            >
              {this.state.copiedText === "sound-wave"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"spaceship"}
              onCopy={() => this.setState({ copiedText: "spaceship" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="spaceship"
                id="tooltip603604642"
                type="button"
              >
                <div>
                  <i className="ni ni-spaceship" />
                  <span>spaceship</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip603604642"
            >
              {this.state.copiedText === "spaceship"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"square-pin"}
              onCopy={() => this.setState({ copiedText: "square-pin" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="square-pin"
                id="tooltip153036405"
                type="button"
              >
                <div>
                  <i className="ni ni-square-pin" />
                  <span>square-pin</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip153036405"
            >
              {this.state.copiedText === "square-pin"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"support-16"}
              onCopy={() => this.setState({ copiedText: "support-16" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="support-16"
                id="tooltip906422211"
                type="button"
              >
                <div>
                  <i className="ni ni-support-16" />
                  <span>support-16</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip906422211"
            >
              {this.state.copiedText === "support-16"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"tablet-button"}
              onCopy={() => this.setState({ copiedText: "tablet-button" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="tablet-button"
                id="tooltip517579618"
                type="button"
              >
                <div>
                  <i className="ni ni-tablet-button" />
                  <span>tablet-button</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip517579618"
            >
              {this.state.copiedText === "tablet-button"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"tag"}
              onCopy={() => this.setState({ copiedText: "tag" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="tag"
                id="tooltip297195808"
                type="button"
              >
                <div>
                  <i className="ni ni-tag" />
                  <span>tag</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip297195808"
            >
              {this.state.copiedText === "tag" ? "Copied" : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"tie-bow"}
              onCopy={() => this.setState({ copiedText: "tie-bow" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="tie-bow"
                id="tooltip793084796"
                type="button"
              >
                <div>
                  <i className="ni ni-tie-bow" />
                  <span>tie-bow</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip793084796"
            >
              {this.state.copiedText === "tie-bow"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"time-alarm"}
              onCopy={() => this.setState({ copiedText: "time-alarm" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="time-alarm"
                id="tooltip258891035"
                type="button"
              >
                <div>
                  <i className="ni ni-time-alarm" />
                  <span>time-alarm</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip258891035"
            >
              {this.state.copiedText === "time-alarm"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"trophy"}
              onCopy={() => this.setState({ copiedText: "trophy" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="trophy"
                id="tooltip881235890"
                type="button"
              >
                <div>
                  <i className="ni ni-trophy" />
                  <span>trophy</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip881235890"
            >
              {this.state.copiedText === "trophy"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"tv-2"}
              onCopy={() => this.setState({ copiedText: "tv-2" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="tv-2"
                id="tooltip330279137"
                type="button"
              >
                <div>
                  <i className="ni ni-tv-2" />
                  <span>tv-2</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip330279137"
            >
              {this.state.copiedText === "tv-2" ? "Copied" : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"umbrella-13"}
              onCopy={() => this.setState({ copiedText: "umbrella-13" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="umbrella-13"
                id="tooltip412313570"
                type="button"
              >
                <div>
                  <i className="ni ni-umbrella-13" />
                  <span>umbrella-13</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip412313570"
            >
              {this.state.copiedText === "umbrella-13"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"user-run"}
              onCopy={() => this.setState({ copiedText: "user-run" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="user-run"
                id="tooltip176201858"
                type="button"
              >
                <div>
                  <i className="ni ni-user-run" />
                  <span>user-run</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip176201858"
            >
              {this.state.copiedText === "user-run"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"vector"}
              onCopy={() => this.setState({ copiedText: "vector" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="vector"
                id="tooltip71164138"
                type="button"
              >
                <div>
                  <i className="ni ni-vector" />
                  <span>vector</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip71164138"
            >
              {this.state.copiedText === "vector"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"watch-time"}
              onCopy={() => this.setState({ copiedText: "watch-time" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="watch-time"
                id="tooltip495578192"
                type="button"
              >
                <div>
                  <i className="ni ni-watch-time" />
                  <span>watch-time</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip495578192"
            >
              {this.state.copiedText === "watch-time"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"world"}
              onCopy={() => this.setState({ copiedText: "world" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="world"
                id="tooltip604848245"
                type="button"
              >
                <div>
                  <i className="ni ni-world" />
                  <span>world</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip604848245"
            >
              {this.state.copiedText === "world"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"zoom-split-in"}
              onCopy={() => this.setState({ copiedText: "zoom-split-in" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="zoom-split-in"
                id="tooltip916423293"
                type="button"
              >
                <div>
                  <i className="ni ni-zoom-split-in" />
                  <span>zoom-split-in</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip916423293"
            >
              {this.state.copiedText === "zoom-split-in"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"collection"}
              onCopy={() => this.setState({ copiedText: "collection" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="collection"
                id="tooltip142934658"
                type="button"
              >
                <div>
                  <i className="ni ni-collection" />
                  <span>collection</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip142934658"
            >
              {this.state.copiedText === "collection"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"image"}
              onCopy={() => this.setState({ copiedText: "image" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="image"
                id="tooltip842947283"
                type="button"
              >
                <div>
                  <i className="ni ni-image" />
                  <span>image</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip842947283"
            >
              {this.state.copiedText === "image"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"shop"}
              onCopy={() => this.setState({ copiedText: "shop" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="shop"
                id="tooltip531866818"
                type="button"
              >
                <div>
                  <i className="ni ni-shop" />
                  <span>shop</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip531866818"
            >
              {this.state.copiedText === "shop" ? "Copied" : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"ungroup"}
              onCopy={() => this.setState({ copiedText: "ungroup" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="ungroup"
                id="tooltip470734151"
                type="button"
              >
                <div>
                  <i className="ni ni-ungroup" />
                  <span>ungroup</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip470734151"
            >
              {this.state.copiedText === "ungroup"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"world-2"}
              onCopy={() => this.setState({ copiedText: "world-2" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="world-2"
                id="tooltip932383030"
                type="button"
              >
                <div>
                  <i className="ni ni-world-2" />
                  <span>world-2</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip932383030"
            >
              {this.state.copiedText === "world-2"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"ui-04"}
              onCopy={() => this.setState({ copiedText: "ui-04" })}
            >
              <button
                className="btn-icon-clipboard"
                data-clipboard-text="ui-04"
                id="tooltip9332484"
                type="button"
              >
                <div>
                  <i className="ni ni-ui-04" />
                  <span>ui-04</span>
                </div>
              </button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip9332484"
            >
              {this.state.copiedText === "ui-04"
                ? "Copied"
                : "Copy To Clipbord"}
            </UncontrolledTooltip>
          </Col>
        </Row>
        <p>
          Want more icons? Increase your collection by choosing more icon
          examples from Nucleo App website:{" "}
          <Button
            className="mt-4"
            color="primary"
            href="https://nucleoapp.com/?ref=1712"
            target="_blank"
          >
            Go to Nucleo App
          </Button>
        </p>
        <h2 id="font-awesome-5">Font Awesome 5</h2>
        <p>
          Optionally, Argon comes with Font Awesome which means 3000+ more
          vector icons made for you to use.
        </p>
        <h3 id="usage-1">Usage</h3>
        <p>
          In order to use this icons on your page you will need to import them
          inside the <code className="highlighter-rouge">{`src/index.js`}</code>{" "}
          file of your app:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";`}
        </SyntaxHighlighter>
        <h3 id="initialization-1">Initialization</h3>
        <p>
          Start placing icons in your app. We recommend using a consistent HTML
          element, like <code className="highlighter-rouge">{`<i>`}</code>. Find
          the right icon and learn how to reference it in your markup.
        </p>
        <p>You need to know two bits of information to reference an icon:</p>
        <ol>
          <li>its name, prefixed with fa- and</li>
          <li>the style you want to use’s corresponding prefix.</li>
        </ol>
        <h3 id="icons-1">Icons</h3>
        <p>Get the icon you need on the official website:</p>
        <p>
          <Button
            color="primary"
            href="https://fontawesome.com/?ref=creativetime"
            target="_blank"
          >
            Go to Font Awesome
          </Button>
        </p>
      </>
    );
  }
}

export default Icons;
