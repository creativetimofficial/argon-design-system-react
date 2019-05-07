import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

const codeHowItWorks = `<Container>
  <Row>
    <Col className="col-sm">
      <span>One of three columns</span>
    </Col>
    <Col className="col-sm">
      <span>One of three columns</span>
    </Col>
    <Col className="col-sm">
      <span>One of three columns</span>
    </Col>
  </Row>
</Container>`;

const codeEqualWidth = `<Container>
  <Row>
    <Col>
      <span>1 of 2</span>
    </Col>
    <Col>
      <span>2 of 2</span>
    </Col>
  </Row>
  <Row>
    <Col>
      <span>1 of 3</span>
    </Col>
    <Col>
      <span>2 of 3</span>
    </Col>
    <Col>
      <span>3 of 3</span>
    </Col>
  </Row>
</Container>
      `;

const codeEqualWidth1 = `<Container>
  <Row>
    <Col>
      <span>Column</span>
    </Col>
    <Col>
      <span>Column</span>
    </Col>
    <div className="w-100" />
    <Col>
      <span>Column</span>
    </Col>
    <Col>
      <span>Column</span>
    </Col>
  </Row>
</Container>`;

const codeSettingOneColumnWidth = `<Container>
  <Row>
    <Col>
      <span>1 of 3</span>
    </Col>
    <Col xs="6">
      <span>2 of 3 (wider)</span>
    </Col>
    <Col>
      <span>3 of 3</span>
    </Col>
  </Row>
  <Row>
    <Col>
      <span>1 of 3</span>
    </Col>
    <Col xs="5">
      <span>2 of 3 (wider)</span>
    </Col>
    <Col>
      <span>3 of 3</span>
    </Col>
  </Row>
</Container>`;

const codeSettingOneColumnWidthAuto = `<Container>
  <Row className="justify-content-md-center">
    <Col lg="2">
      <span>1 of 3</span>
    </Col>
    <Col lg={{size: "auto"}}>
      <span>Variable width content</span>
    </Col>
    <Col lg="2">
      <span>3 of 3</span>
    </Col>
  </Row>
  <Row>
    <Col>
      <span>1 of 3</span>
    </Col>
    <Col lg={{size: "auto"}}>
      <span>Variable width content</span>
    </Col>
    <Col lg="2">
      <span>3 of 3</span>
    </Col>
  </Row>
</Container>`;

const codeEqualWidthMultiRow = `<Row>
  <Col>
    <span>col</span>
  </Col>
  <Col>
    <span>col</span>
  </Col>
  <div className="w-100" />
  <Col>
    <span>col</span>
  </Col>
  <Col>
    <span>col</span>
  </Col>
</Row>`;

const codeAllBreakpoints = `<Row>
  <Col>
    <span>col</span>
  </Col>
  <Col>
    <span>col</span>
  </Col>
  <Col>
    <span>col</span>
  </Col>
  <Col>
    <span>col</span>
  </Col>
</Row>
<Row>
  <Col xs="8">
    <span>col-8</span>
  </Col>
  <Col xs="4">
    <span>col-4</span>
  </Col>
</Row>`;

const codeStackedToHorizontal = `<Row>
  <Col sm="8">
    <span>col-sm-8</span>
  </Col>
  <Col sm="4">
    <span>col-sm-4</span>
  </Col>
</Row>
<Row>
  <Col sm>
    <span>col-sm</span>
  </Col>
  <Col sm>
    <span>col-sm</span>
  </Col>
  <Col sm>
    <span>col-sm</span>
  </Col>
</Row>`;

const codeMixAndMatch = `{/* Stack the columns on mobile by making one full-width and the other half-width */}
<Row>
  <Col md="8" xs="12">
    <span>.col-12 .col-md-8</span>
  </Col>
  <Col md="4" xs="6">
    <span>.col-6 .col-md-4</span>
  </Col>
</Row>
{/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
<Row>
  <Col md="4" xs="6">
    <span>.col-6 .col-md-4</span>
  </Col>
  <Col md="4" xs="6">
    <span>.col-6 .col-md-4</span>
  </Col>
  <Col md="4" xs="6">
    <span>.col-6 .col-md-4</span>
  </Col>
</Row>
{/* Columns are always 50% wide, on mobile and desktop */}
<Row>
  <Col xs="6">
    <span>.col-6</span>
  </Col>
  <Col xs="6">
    <span>.col-6</span>
  </Col>
</Row>`;

class Grid extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Grid system
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Use our powerful mobile-first flexbox grid to build layouts of all
          shapes and sizes thanks to a twelve column system, five default
          responsive tiers, Sass variables and mixins, and dozens of predefined
          classes.
        </p>
        <hr />
        <h2 id="how-it-works">How it works</h2>
        <p>
          Bootstrap’s grid system uses a series of containers, rows, and columns
          to layout and align content. It’s built with{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
            flexbox
          </a>
          and is fully responsive. Below is an example and an in-depth look at
          how the grid comes together.
        </p>
        <p>
          <strong>New to or unfamiliar with flexbox?</strong>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            Read this CSS Tricks flexbox guide
          </a>
          for background, terminology, guidelines, and code snippets.
        </p>
        <div className="ct-example-row">
          <div className="ct-example">
            <Container>
              <Row>
                <Col className="col-sm">
                  <span>One of three columns</span>
                </Col>
                <Col className="col-sm">
                  <span>One of three columns</span>
                </Col>
                <Col className="col-sm">
                  <span>One of three columns</span>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeHowItWorks}
        </SyntaxHighlighter>
        <p>
          The above example creates three equal-width columns on small, medium,
          large, and extra large devices using our predefined grid classes.
          Those columns are centered in the page with the parent{" "}
          <code className="highlighter-rouge">{`Container`}</code>.
        </p>
        <h2 id="grid-options">Grid options</h2>
        <p>
          While Bootstrap uses <code className="highlighter-rouge">em</code>s or{" "}
          <code className="highlighter-rouge">rem</code>s for defining most
          sizes, <code className="highlighter-rouge">px</code>s are used for
          grid breakpoints and container widths. This is because the viewport
          width is in pixels and does not change with the{" "}
          <a href="#pablo" onClick={e => e.preventDefault()}>
            font size
          </a>
          .
        </p>
        <p>
          See how aspects of the Bootstrap grid system work across multiple
          devices with a handy table.
        </p>
        <Table className="table-bordered table-striped">
          <thead>
            <tr>
              <th />
              <th className="text-center">
                Extra small
                <br />
                <small>{`<576px`}</small>
              </th>
              <th className="text-center">
                Small
                <br />
                <small>{`≥576px`}</small>
              </th>
              <th className="text-center">
                Medium
                <br />
                <small>{`≥768px`}</small>
              </th>
              <th className="text-center">
                Large
                <br />
                <small>{`≥992px`}</small>
              </th>
              <th className="text-center">
                Extra large
                <br />
                <small>{`≥1200px`}</small>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-nowrap" scope="row">
                Max container width
              </th>
              <td>None (auto)</td>
              <td>540px</td>
              <td>720px</td>
              <td>960px</td>
              <td>1140px</td>
            </tr>
            <tr>
              <th className="text-nowrap" scope="row">
                Prop names
              </th>
              <td>
                <code>{`xs={*}`}</code>
              </td>
              <td>
                <code>{`sm={*}`}</code>
              </td>
              <td>
                <code>{`md={*}`}</code>
              </td>
              <td>
                <code>{`lg={*}`}</code>
              </td>
              <td>
                <code>{`xl={*}`}</code>
              </td>
            </tr>
            <tr>
              <th className="text-nowrap" scope="row">
                # of columns
              </th>
              <td colSpan="5">12</td>
            </tr>
            <tr>
              <th className="text-nowrap" scope="row">
                Gutter width
              </th>
              <td colSpan="5">30px (15px on each side of a column)</td>
            </tr>
            <tr>
              <th className="text-nowrap" scope="row">
                Nestable
              </th>
              <td colSpan="5">Yes</td>
            </tr>
            <tr>
              <th className="text-nowrap" scope="row">
                Column ordering
              </th>
              <td colSpan="5">Yes</td>
            </tr>
          </tbody>
        </Table>
        <h2 id="auto-layout-columns">Auto-layout columns</h2>
        <p>
          Utilize breakpoint-specific column classes for easy column sizing
          without an explicit numbered class like{" "}
          <code className="highlighter-rouge">.col-sm-6</code>.
        </p>
        <h3 id="equal-width">Equal-width</h3>
        <p>
          For example, here are two grid layouts that apply to every device and
          viewport, from <code className="highlighter-rouge">xs</code>
          to <code className="highlighter-rouge">xl</code>. Add any number of
          unit-less classes for each breakpoint you need and every column will
          be the same width.
        </p>
        <div className="ct-example-row">
          <div className="ct-example">
            <Container>
              <Row>
                <div className="col">
                  <span>1 of 2</span>
                </div>
                <div className="col">
                  <span>2 of 2</span>
                </div>
              </Row>
              <Row>
                <div className="col">
                  <span>1 of 3</span>
                </div>
                <div className="col">
                  <span>2 of 3</span>
                </div>
                <div className="col">
                  <span>3 of 3</span>
                </div>
              </Row>
            </Container>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeEqualWidth}
        </SyntaxHighlighter>
        <p>
          Equal-width columns can be broken into multiple lines, but there was a{" "}
          <a href="#pablo" onClick={e => e.preventDefault()}>
            Safari flexbox bug
          </a>
          that prevented this from working without an explicit{" "}
          <code className="highlighter-rouge">flex-basis</code>
          or <code className="highlighter-rouge">border</code>. There are
          workarounds for older browser versions, but they shouldn’t be
          necessary if you’re up-to-date.
        </p>
        <div className="ct-example-row">
          <div className="ct-example">
            <Container>
              <Row>
                <div className="col">
                  <span>Column</span>
                </div>
                <div className="col">
                  <span>Column</span>
                </div>
                <div className="w-100" />
                <div className="col">
                  <span>Column</span>
                </div>
                <div className="col">
                  <span>Column</span>
                </div>
              </Row>
            </Container>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeEqualWidth1}
        </SyntaxHighlighter>
        <h3 id="setting-one-column-width">Setting one column width</h3>
        <p>
          Auto-layout for flexbox grid columns also means you can set the width
          of one column and have the sibling columns automatically resize around
          it. You may use predefined grid classes (as shown below), grid mixins,
          or inline widths. Note that the other columns will resize no matter
          the width of the center column.
        </p>
        <div className="ct-example-row">
          <div className="ct-example">
            <Container>
              <Row>
                <div className="col">
                  <span>1 of 3</span>
                </div>
                <Col xs="6">
                  <span>2 of 3 (wider)</span>
                </Col>
                <div className="col">
                  <span>3 of 3</span>
                </div>
              </Row>
              <Row>
                <div className="col">
                  <span>1 of 3</span>
                </div>
                <Col xs="5">
                  <span>2 of 3 (wider)</span>
                </Col>
                <div className="col">
                  <span>3 of 3</span>
                </div>
              </Row>
            </Container>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSettingOneColumnWidth}
        </SyntaxHighlighter>
        <h3 id="variable-width-content">Variable width content</h3>
        <p>
          Use{" "}
          <code className="highlighter-rouge">{`col-{breakpoint}-auto`}</code>
          classes to size columns based on the natural width of their content.
        </p>
        <div className="ct-example-row">
          <div className="ct-example">
            <Container>
              <Row className="justify-content-md-center">
                <Col className="col" lg="2">
                  <span>1 of 3</span>
                </Col>
                <Col className="col-md-auto">
                  <span>Variable width content</span>
                </Col>
                <Col className="col" lg="2">
                  <span>3 of 3</span>
                </Col>
              </Row>
              <Row>
                <div className="col">
                  <span>1 of 3</span>
                </div>
                <Col className="col-md-auto">
                  <span>Variable width content</span>
                </Col>
                <Col className="col" lg="2">
                  <span>3 of 3</span>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSettingOneColumnWidthAuto}
        </SyntaxHighlighter>
        <h3 id="equal-width-multi-row">Equal-width multi-row</h3>
        <p>
          Create equal-width columns that span multiple rows by inserting a{" "}
          <code className="highlighter-rouge">.w-100</code>
          where you want the columns to break to a new line. Make the breaks
          responsive by mixing the{" "}
          <code className="highlighter-rouge">.w-100</code>
          with some{" "}
          <a href="argon-dashboard/docs//utilities/display/">
            responsive display utilities
          </a>
          .
        </p>
        <div className="ct-example-row">
          <div className="ct-example">
            <Row>
              <div className="col">
                <span>col</span>
              </div>
              <div className="col">
                <span>col</span>
              </div>
              <div className="w-100" />
              <div className="col">
                <span>col</span>
              </div>
              <div className="col">
                <span>col</span>
              </div>
            </Row>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeEqualWidthMultiRow}
        </SyntaxHighlighter>
        <h2 id="responsive-classes">Responsive classes</h2>
        <p>
          Bootstrap’s grid includes five tiers of predefined classes for
          building complex responsive layouts. Customize the size of your
          columns on extra small, small, medium, large, or extra large devices
          however you see fit.
        </p>
        <h3 id="all-breakpoints">All breakpoints</h3>
        <p>
          For grids that are the same from the smallest of devices to the
          largest, use the <code className="highlighter-rouge">.col</code>
          and <code className="highlighter-rouge">.col-*</code>
          classes. Specify a numbered class when you need a particularly sized
          column; otherwise, feel free to stick to{" "}
          <code className="highlighter-rouge">.col</code>.
        </p>
        <div className="ct-example-row">
          <div className="ct-example">
            <Row>
              <div className="col">
                <span>col</span>
              </div>
              <div className="col">
                <span>col</span>
              </div>
              <div className="col">
                <span>col</span>
              </div>
              <div className="col">
                <span>col</span>
              </div>
            </Row>
            <Row>
              <Col xs="8">
                <span>col-8</span>
              </Col>
              <Col xs="4">
                <span>col-4</span>
              </Col>
            </Row>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeAllBreakpoints}
        </SyntaxHighlighter>
        <h3 id="stacked-to-horizontal">Stacked to horizontal</h3>
        <p>
          Using a single set of{" "}
          <code className="highlighter-rouge">.col-sm-*</code>
          classes, you can create a basic grid system that starts out stacked
          and becomes horizontal at the small breakpoint (
          <code className="highlighter-rouge">sm</code>
          ).
        </p>
        <div className="ct-example-row">
          <div className="ct-example">
            <Row>
              <Col sm="8">
                <span>col-sm-8</span>
              </Col>
              <Col sm="4">
                <span>col-sm-4</span>
              </Col>
            </Row>
            <Row>
              <Col className="col-sm">
                <span>col-sm</span>
              </Col>
              <Col className="col-sm">
                <span>col-sm</span>
              </Col>
              <Col className="col-sm">
                <span>col-sm</span>
              </Col>
            </Row>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeStackedToHorizontal}
        </SyntaxHighlighter>
        <h3 id="mix-and-match">Mix and match</h3>
        <p>
          Don’t want your columns to simply stack in some grid tiers? Use a
          combination of different classes for each tier as needed. See the
          example below for a better idea of how it all works.
        </p>
        <div className="ct-example-row">
          <div className="ct-example">
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
              <Col md="8" xs="12">
                <span>.col-12 .col-md-8</span>
              </Col>
              <Col md="4" xs="6">
                <span>.col-6 .col-md-4</span>
              </Col>
            </Row>
            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row>
              <Col md="4" xs="6">
                <span>.col-6 .col-md-4</span>
              </Col>
              <Col md="4" xs="6">
                <span>.col-6 .col-md-4</span>
              </Col>
              <Col md="4" xs="6">
                <span>.col-6 .col-md-4</span>
              </Col>
            </Row>
            {/* Columns are always 50% wide, on mobile and desktop */}
            <Row>
              <Col xs="6">
                <span>.col-6</span>
              </Col>
              <Col xs="6">
                <span>.col-6</span>
              </Col>
            </Row>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeMixAndMatch}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default Grid;
