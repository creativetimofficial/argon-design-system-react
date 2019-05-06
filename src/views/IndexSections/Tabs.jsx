import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class TabsSection extends React.Component {
  render() {
    return (
      <>
        <h3 className="h4 text-success font-weight-bold mb-4">Tabs</h3>
        <Row className="justify-content-center">
          <Col lg="6">
            {/* Tabs with icons */}
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                With icons
              </small>
            </div>
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-controls="tabs-icons-text-1"
                    aria-selected={true}
                    className="mb-sm-3 mb-md-0 active"
                    data-toggle="tab"
                    href="#pablo"
                    id="tabs-icons-text-1-tab"
                    onClick={e => e.preventDefault()}
                    role="tab"
                  >
                    <i className="ni ni-cloud-upload-96 mr-2" />
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-controls="tabs-icons-text-2"
                    aria-selected={false}
                    className="mb-sm-3 mb-md-0"
                    data-toggle="tab"
                    href="#pablo"
                    id="tabs-icons-text-2-tab"
                    onClick={e => e.preventDefault()}
                    role="tab"
                  >
                    <i className="ni ni-bell-55 mr-2" />
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-controls="tabs-icons-text-3"
                    aria-selected={false}
                    className="mb-sm-3 mb-md-0"
                    data-toggle="tab"
                    href="#pablo"
                    id="tabs-icons-text-3-tab"
                    onClick={e => e.preventDefault()}
                    role="tab"
                  >
                    <i className="ni ni-calendar-grid-58 mr-2" />
                    Messages
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent id="myTabContent">
                  <TabPane
                    aria-labelledby="tabs-icons-text-1-tab"
                    className="fade show active"
                    id="tabs-icons-text-1"
                    role="tabpanel"
                  >
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth.
                    </p>
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse.
                    </p>
                  </TabPane>
                  <TabPane
                    aria-labelledby="tabs-icons-text-2-tab"
                    className="fade"
                    id="tabs-icons-text-2"
                    role="tabpanel"
                  >
                    <p className="description">
                      Cosby sweater eu banh mi, qui irure terry richardson ex
                      squid. Aliquip placeat salvia cillum iphone. Seitan
                      aliquip quis cardigan american apparel, butcher voluptate
                      nisi qui.
                    </p>
                  </TabPane>
                  <TabPane
                    aria-labelledby="tabs-icons-text-3-tab"
                    className="fade"
                    id="tabs-icons-text-3"
                    role="tabpanel"
                  >
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col className="mt-5 mt-lg-0" lg="6">
            {/* Menu */}
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                With text
              </small>
            </div>
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-controls="tabs-text-1"
                    aria-selected={true}
                    className="mb-sm-3 mb-md-0 active"
                    data-toggle="tab"
                    href="#pablo"
                    id="tabs-text-1-tab"
                    onClick={e => e.preventDefault()}
                    role="tab"
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-controls="tabs-text-2"
                    aria-selected={false}
                    className="mb-sm-3 mb-md-0"
                    data-toggle="tab"
                    href="#pablo"
                    id="tabs-text-2-tab"
                    onClick={e => e.preventDefault()}
                    role="tab"
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-controls="tabs-text-3"
                    aria-selected={false}
                    className="mb-sm-3 mb-md-0"
                    data-toggle="tab"
                    href="#pablo"
                    id="tabs-text-3-tab"
                    onClick={e => e.preventDefault()}
                    role="tab"
                  >
                    Messages
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent id="myTabContent">
                  <TabPane
                    aria-labelledby="tabs-text-1-tab"
                    className="fade show active"
                    id="tabs-text-1"
                    role="tabpanel"
                  >
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth.
                    </p>
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse.
                    </p>
                  </TabPane>
                  <TabPane
                    aria-labelledby="tabs-text-2-tab"
                    className="fade"
                    id="tabs-text-2"
                    role="tabpanel"
                  >
                    <p className="description">
                      Cosby sweater eu banh mi, qui irure terry richardson ex
                      squid. Aliquip placeat salvia cillum iphone. Seitan
                      aliquip quis cardigan american apparel, butcher voluptate
                      nisi qui.
                    </p>
                  </TabPane>
                  <TabPane
                    aria-labelledby="tabs-text-3-tab"
                    className="fade"
                    id="tabs-text-3"
                    role="tabpanel"
                  >
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default TabsSection;
