import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const codeExamples = `import React from "react";
// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class Paginations extends React.Component {
  render() {
    return (
      <>
        <nav aria-label="Page navigation example">
          <Pagination>
            <PaginationItem>
              <PaginationLink
                aria-label="Previous"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-angle-left" />
                <span className="sr-only">Previous</span>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                aria-label="Next"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-angle-right" />
                <span className="sr-only">Next</span>
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </nav>
      </>
    );
  }
}

export default Paginations;
`;
const codeDisabledAndActiveStates = `import React from "react";
// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class Paginations extends React.Component {
  render() {
    return (
      <>
        <nav aria-label="...">
          <Pagination>
            <PaginationItem className="disabled">
              <PaginationLink
                href="#pablo"
                onClick={e => e.preventDefault()}
                tabIndex="-1"
              >
                <i className="fa fa-angle-left" />
                <span className="sr-only">Previous</span>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="active">
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                2 <span className="sr-only">(current)</span>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                <i className="fa fa-angle-right" />
                <span className="sr-only">Next</span>
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </nav>
      </>
    );
  }
}

export default Paginations;`;
const codeSizing1 = `import React from "react";
// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class Paginations extends React.Component {
  render() {
    return (
      <>
        <nav aria-label="...">
          <Pagination
            className="pagination pagination-lg"
            listClassName="pagination-lg"
          >
            <PaginationItem className="disabled">
              <PaginationLink
                href="#pablo"
                onClick={e => e.preventDefault()}
                tabIndex="-1"
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="active">
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                3
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </nav>
      </>
    );
  }
}

export default Paginations;`;
const codeSizing2 = `import React from "react";
// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class Paginations extends React.Component {
  render() {
    return (
      <>
        <nav aria-label="...">
          <Pagination
            className="pagination pagination-sm"
            listClassName="pagination-sm"
          >
            <PaginationItem className="disabled">
              <PaginationLink
                href="#pablo"
                onClick={e => e.preventDefault()}
                tabIndex="-1"
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="active">
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                3
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </nav>
      </>
    );
  }
}

export default Paginations;`;
const codeAlignment1 = `import React from "react";
// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class Paginations extends React.Component {
  render() {
    return (
      <>
        <nav aria-label="Page navigation example">
          <Pagination
            className="pagination justify-content-center"
            listClassName="justify-content-center"
          >
            <PaginationItem className="disabled">
              <PaginationLink
                href="#pablo"
                onClick={e => e.preventDefault()}
                tabIndex="-1"
              >
                <i className="fa fa-angle-left" />
                <span className="sr-only">Previous</span>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="active">
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                <i className="fa fa-angle-right" />
                <span className="sr-only">Next</span>
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </nav>
      </>
    );
  }
}

export default Paginations;`;
const codeAlignment2 = `import React from "react";
// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class Paginations extends React.Component {
  render() {
    return (
      <>
        <nav aria-label="Page navigation example">
          <Pagination
            className="pagination justify-content-end"
            listClassName="justify-content-end"
          >
            <PaginationItem className="disabled">
              <PaginationLink
                href="#pablo"
                onClick={e => e.preventDefault()}
                tabIndex="-1"
              >
                <i className="fa fa-angle-left" />
                <span className="sr-only">Previous</span>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="active">
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                <i className="fa fa-angle-right" />
                <span className="sr-only">Next</span>
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </nav>
      </>
    );
  }
}

export default Paginations;`;

class Paginations extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Pagination
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Documentation and examples for showing pagination to indicate a series
          of related content exists across multiple pages.
        </p>
        <hr />
        <h2 id="examples">Examples</h2>
        <div className="ct-example">
          <nav aria-label="Page navigation example">
            <Pagination>
              <PaginationItem>
                <PaginationLink
                  aria-label="Previous"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-angle-left" />
                  <span className="sr-only">Previous</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  aria-label="Next"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-angle-right" />
                  <span className="sr-only">Next</span>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamples}
        </SyntaxHighlighter>
        <h2 id="disabled-and-active-states">Disabled and active states</h2>
        <div className="ct-example">
          <nav aria-label="...">
            <Pagination>
              <PaginationItem className="disabled">
                <PaginationLink
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  tabIndex="-1"
                >
                  <i className="fa fa-angle-left" />
                  <span className="sr-only">Previous</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="active">
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  2 <span className="sr-only">(current)</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="fa fa-angle-right" />
                  <span className="sr-only">Next</span>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeDisabledAndActiveStates}
        </SyntaxHighlighter>
        <h2 id="sizing">Sizing</h2>
        <p>
          Fancy larger or smaller pagination? Add{" "}
          <code className="highlighter-rouge">.pagination-lg</code>
          or <code className="highlighter-rouge">.pagination-sm</code>
          for additional sizes.
        </p>
        <div className="ct-example">
          <nav aria-label="...">
            <Pagination
              className="pagination pagination-lg"
              listClassName="pagination-lg"
            >
              <PaginationItem className="disabled">
                <PaginationLink
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  tabIndex="-1"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="active">
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  3
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSizing1}
        </SyntaxHighlighter>
        <div className="ct-example">
          <nav aria-label="...">
            <Pagination
              className="pagination pagination-sm"
              listClassName="pagination-sm"
            >
              <PaginationItem className="disabled">
                <PaginationLink
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  tabIndex="-1"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="active">
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  3
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSizing2}
        </SyntaxHighlighter>
        <h2 id="alignment">Alignment</h2>
        <p>
          Change the alignment of pagination components with{" "}
          <a href="argon-dashboard/docs//utilities/flex/">flexbox utilities</a>.
        </p>
        <div className="ct-example">
          <nav aria-label="Page navigation example">
            <Pagination
              className="pagination justify-content-center"
              listClassName="justify-content-center"
            >
              <PaginationItem className="disabled">
                <PaginationLink
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  tabIndex="-1"
                >
                  <i className="fa fa-angle-left" />
                  <span className="sr-only">Previous</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="active">
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="fa fa-angle-right" />
                  <span className="sr-only">Next</span>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeAlignment1}
        </SyntaxHighlighter>
        <div className="ct-example">
          <nav aria-label="Page navigation example">
            <Pagination
              className="pagination justify-content-end"
              listClassName="justify-content-end"
            >
              <PaginationItem className="disabled">
                <PaginationLink
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  tabIndex="-1"
                >
                  <i className="fa fa-angle-left" />
                  <span className="sr-only">Previous</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="active">
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="fa fa-angle-right" />
                  <span className="sr-only">Next</span>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeAlignment2}
        </SyntaxHighlighter>
        <h3 id="examples">Props</h3>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/pagination/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap pagination documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Paginations;
