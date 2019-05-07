import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import { Table, Row, Col } from "reactstrap";

const codeHeadings = `<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>`;

const codeClases = `<p className="h1">h1. Bootstrap heading</p>
<p className="h2">h2. Bootstrap heading</p>
<p className="h3">h3. Bootstrap heading</p>
<p className="h4">h4. Bootstrap heading</p>
<p className="h5">h5. Bootstrap heading</p>
<p className="h6">h6. Bootstrap heading</p>`;

const codeCustomizingHeadings = `<span className="h3">
  Fancy display heading{" "}
  <small className="text-muted">With faded secondary text</small>
</span>`;

const codeDisplayHeadings = `<h1 className="display-1">Display 1</h1>
<h1 className="display-2">Display 2</h1>
<h1 className="display-3">Display 3</h1>
<h1 className="display-4">Display 4</h1>`;

const codeLead = `<p className="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
  auctor. Duis mollis, est non commodo luctus.
</p>`;

const codeInlineTextElements = `<p>
  You can use the mark tag to <mark>highlight</mark>
  text.
</p>
<p>
  <del>This line of text is meant to be treated as deleted text.</del>
</p>
<p>
  <s>
    This line of text is meant to be treated as no longer accurate.
  </s>
</p>
<p>
  <ins>
    This line of text is meant to be treated as an addition to the
    document.
  </ins>
</p>
<p>
  <u>This line of text will render as underlined</u>
</p>
<p>
  <small>
    This line of text is meant to be treated as fine print.
  </small>
</p>
<p>
  <strong>This line rendered as bold text.</strong>
</p>
<p>
  <em>This line rendered as italicized text.</em>
</p>`;

const codeAbbreviations = `<p>
  <abbr title="attribute">attr</abbr>
</p>
<p>
  <abbr className="initialism" title="HyperText Markup Language">
    HTML
  </abbr>
</p>`;

const codeBlockquotes = `<blockquote className="blockquote">
  <p className="mb-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    posuere erat a ante.
  </p>
</blockquote>`;

const codeNamingASource = `<blockquote className="blockquote">
  <p className="mb-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    posuere erat a ante.
  </p>
  <footer className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </footer>
</blockquote>`;

const codeAlignment1 = `<blockquote className="blockquote text-center">
  <p className="mb-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    posuere erat a ante.
  </p>
  <footer className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </footer>
</blockquote>`;

const codeAlignment2 = `<blockquote className="blockquote text-right">
  <p className="mb-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    posuere erat a ante.
  </p>
  <footer className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </footer>
</blockquote>`;

const codeUnstyled = `<ul className="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>
    Nulla volutpat aliquam velit{" "}
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>`;

const codeInline = `<ul className="list-inline">
  <li className="list-inline-item">Lorem ipsum</li>
  <li className="list-inline-item">Phasellus iaculis</li>
  <li className="list-inline-item">Nulla volutpat</li>
</ul>`;

const codeDescriptionListAlignment = `<Row>
  <Col sm="3">Description lists</Col>
  <Col sm="9">A description list is perfect for defining terms.</Col>
  <Col sm="3">Euismod</Col>
  <Col sm="9">
    <p>
      Vestibulum id ligula porta felis euismod semper eget lacinia
      odio sem nec elit.
    </p>
    <p>Donec id elit non mi porta gravida at eget metus.</p>
  </Col>
  <Col sm="3">Malesuada porta</Col>
  <Col sm="9">Etiam porta sem malesuada magna mollis euismod.</Col>
  <Col className="text-truncate" sm="3">
    Truncated term is truncated
  </Col>
  <Col sm="9">
    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
    nibh, ut fermentum massa justo sit amet risus.
  </Col>
  <Col sm="3">Nesting</Col>
  <Col sm="9">
    <Row>
      <Col sm="4">Nested definition list</Col>
      <Col sm="8">
        Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
        nunc.
      </Col>
    </Row>
  </Col>
</Row>`;

const codeResponsiveTypography = `html {
  font-size: 1rem;
}

@include media-breakpoint-up(sm) {
  html {
    font-size: 1.2rem;
  }
}

@include media-breakpoint-up(md) {
  html {
    font-size: 1.4rem;
  }
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 1.6rem;
  }
}`;

class Typography extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Typography
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Documentation and examples for Bootstrap typography, including global
          settings, headings, body text, lists, and more.
        </p>
        <hr />
        <h2 id="headings">Headings</h2>
        <p>
          All HTML headings, <code className="highlighter-rouge">{`<h1>`}</code>
          through <code className="highlighter-rouge">{`<h6>`}</code>, are
          available.
        </p>
        <table>
          <thead>
            <tr>
              <th>Heading</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <code className="highlighter-rouge">{`<h1 />`}</code>
                </p>
              </td>
              <td>
                <span className="h1">h1. Bootstrap heading</span>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <code className="highlighter-rouge">{`<h2 />`}</code>
                </p>
              </td>
              <td>
                <span className="h2">h2. Bootstrap heading</span>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <code className="highlighter-rouge">{`<h3 />`}</code>
                </p>
              </td>
              <td>
                <span className="h3">h3. Bootstrap heading</span>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <code className="highlighter-rouge">{`<h4 />`}</code>
                </p>
              </td>
              <td>
                <span className="h4">h4. Bootstrap heading</span>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <code className="highlighter-rouge">{`<h5 />`}</code>
                </p>
              </td>
              <td>
                <span className="h5">h5. Bootstrap heading</span>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <code className="highlighter-rouge">{`<h6 />`}</code>
                </p>
              </td>
              <td>
                <span className="h6">h6. Bootstrap heading</span>
              </td>
            </tr>
          </tbody>
        </table>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeHeadings}
        </SyntaxHighlighter>
        <p>
          <code className="highlighter-rouge">.h1</code>
          through <code className="highlighter-rouge">.h6</code>
          classes are also available, for when you want to match the font
          styling of a heading but cannot use the associated HTML element.
        </p>
        <div className="ct-example">
          <p className="h1">h1. Bootstrap heading</p>
          <p className="h2">h2. Bootstrap heading</p>
          <p className="h3">h3. Bootstrap heading</p>
          <p className="h4">h4. Bootstrap heading</p>
          <p className="h5">h5. Bootstrap heading</p>
          <p className="h6">h6. Bootstrap heading</p>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeClases}
        </SyntaxHighlighter>
        <h3 id="customizing-headings">Customizing headings</h3>
        <p>
          Use the included utility classes to recreate the small secondary
          heading text from Bootstrap 3.
        </p>
        <div className="bd-example">
          <span className="h3">
            Fancy display heading{" "}
            <small className="text-muted">With faded secondary text</small>
          </span>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeCustomizingHeadings}
        </SyntaxHighlighter>
        <h2 id="display-headings">Display headings</h2>
        <p>
          Traditional heading elements are designed to work best in the meat of
          your page content. When you need a heading to stand out, consider
          using a <strong>display heading</strong>
          —a larger, slightly more opinionated heading style.
        </p>
        <div className="bd-example bd-example-type">
          <Table>
            <tbody>
              <tr>
                <td>
                  <span className="display-1">Display 1</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="display-2">Display 2</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="display-3">Display 3</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="display-4">Display 4</span>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeDisplayHeadings}
        </SyntaxHighlighter>
        <h2 id="lead">Lead</h2>
        <p>
          Make a paragraph stand out by adding{" "}
          <code className="highlighter-rouge">.lead</code>.
        </p>
        <div className="ct-example">
          <p className="lead">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Duis mollis, est non commodo luctus.
          </p>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeLead}
        </SyntaxHighlighter>
        <h2 id="inline-text-elements">Inline text elements</h2>
        <p>Styling for common inline HTML5 elements.</p>
        <div className="ct-example">
          <p>
            You can use the mark tag to <mark>highlight</mark>
            text.
          </p>
          <p>
            <del>This line of text is meant to be treated as deleted text.</del>
          </p>
          <p>
            <s>
              This line of text is meant to be treated as no longer accurate.
            </s>
          </p>
          <p>
            <ins>
              This line of text is meant to be treated as an addition to the
              document.
            </ins>
          </p>
          <p>
            <u>This line of text will render as underlined</u>
          </p>
          <p>
            <small>
              This line of text is meant to be treated as fine print.
            </small>
          </p>
          <p>
            <strong>This line rendered as bold text.</strong>
          </p>
          <p>
            <em>This line rendered as italicized text.</em>
          </p>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeInlineTextElements}
        </SyntaxHighlighter>
        <p>
          <code className="highlighter-rouge">.mark</code>
          and <code className="highlighter-rouge">.small</code>
          classes are also available to apply the same styles as{" "}
          <code className="highlighter-rouge">{`<mark>`}</code>
          and <code className="highlighter-rouge">{`<small>`}</code>
          while avoiding any unwanted semantic implications that the tags would
          bring.
        </p>
        <p>
          While not shown above, feel free to use{" "}
          <code className="highlighter-rouge">{`<b>`}</code>
          and <code className="highlighter-rouge">{`<i>`}</code>
          in HTML5. <code className="highlighter-rouge">{`<b>`}</code>
          is meant to highlight words or phrases without conveying additional
          importance while <code className="highlighter-rouge">{`<i>`}</code>
          is mostly for voice, technical terms, etc.
        </p>
        <h2 id="text-utilities">Text utilities</h2>
        <p>
          Change text alignment, transform, style, weight, and color with our{" "}
          <a href="argon-dashboard/docs//utilities/text/">text utilities</a>
          and{" "}
          <a href="argon-dashboard/docs//utilities/colors/">color utilities</a>.
        </p>
        <h2 id="abbreviations">Abbreviations</h2>
        <p>
          Stylized implementation of HTML’s{" "}
          <code className="highlighter-rouge">{`<abbr>`}</code>
          element for abbreviations and acronyms to show the expanded version on
          hover. Abbreviations have a default underline and gain a help cursor
          to provide additional context on hover and to users of assistive
          technologies.
        </p>
        <p>
          Add <code className="highlighter-rouge">.initialism</code>
          to an abbreviation for a slightly smaller font-size.
        </p>
        <div className="ct-example">
          <p>
            <abbr title="attribute">attr</abbr>
          </p>
          <p>
            <abbr className="initialism" title="HyperText Markup Language">
              HTML
            </abbr>
          </p>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeAbbreviations}
        </SyntaxHighlighter>
        <h2 id="blockquotes">Blockquotes</h2>
        <p>
          For quoting blocks of content from another source within your
          document. Wrap{" "}
          <code className="highlighter-rouge">
            {`<blockquote className="blockquote">`}
          </code>
          around any <abbr title="HyperText Markup Language">HTML</abbr>
          as the quote.
        </p>
        <div className="ct-example">
          <blockquote className="blockquote">
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
          </blockquote>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeBlockquotes}
        </SyntaxHighlighter>
        <h3 id="naming-a-source">Naming a source</h3>
        <p>
          Add a{" "}
          <code className="highlighter-rouge">
            {`<footer className="blockquote-footer">`}
          </code>
          for identifying the source. Wrap the name of the source work in{" "}
          <code className="highlighter-rouge">{`<cite>`}</code>.
        </p>
        <div className="ct-example">
          <blockquote className="blockquote">
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeNamingASource}
        </SyntaxHighlighter>
        <h3 id="alignment">Alignment</h3>
        <p>
          Use text utilities as needed to change the alignment of your
          blockquote.
        </p>
        <div className="ct-example">
          <blockquote className="blockquote text-center">
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeAlignment1}
        </SyntaxHighlighter>
        <div className="ct-example">
          <blockquote className="blockquote text-right">
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeAlignment2}
        </SyntaxHighlighter>
        <h2 id="lists">Lists</h2>
        <h3 id="unstyled">Unstyled</h3>
        <p>
          Remove the default{" "}
          <code className="highlighter-rouge">list-style</code>
          and left margin on list items (immediate children only).{" "}
          <strong>This only applies to immediate children list items</strong>,
          meaning you will need to add the class for any nested lists as well.
        </p>
        <div className="ct-example">
          <ul className="list-unstyled">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>
              Nulla volutpat aliquam velit{" "}
              <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
              </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeUnstyled}
        </SyntaxHighlighter>
        <h3 id="inline">Inline</h3>
        <p>
          Remove a list’s bullets and apply some light{" "}
          <code className="highlighter-rouge">margin</code>
          with a combination of two classes,{" "}
          <code className="highlighter-rouge">.list-inline</code>
          and <code className="highlighter-rouge">.list-inline-item</code>.
        </p>
        <div className="ct-example">
          <ul className="list-inline">
            <li className="list-inline-item">Lorem ipsum</li>
            <li className="list-inline-item">Phasellus iaculis</li>
            <li className="list-inline-item">Nulla volutpat</li>
          </ul>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeInline}
        </SyntaxHighlighter>
        <h3 id="description-list-alignment">Description list alignment</h3>
        <p>
          Align terms and descriptions horizontally by using our grid system’s
          predefined classes (or semantic mixins). For longer terms, you can
          optionally add a{" "}
          <code className="highlighter-rouge">.text-truncate</code>
          class to truncate the text with an ellipsis.
        </p>
        <div className="ct-example">
          <Row>
            <Col sm="3">Description lists</Col>
            <Col sm="9">A description list is perfect for defining terms.</Col>
            <Col sm="3">Euismod</Col>
            <Col sm="9">
              <p>
                Vestibulum id ligula porta felis euismod semper eget lacinia
                odio sem nec elit.
              </p>
              <p>Donec id elit non mi porta gravida at eget metus.</p>
            </Col>
            <Col sm="3">Malesuada porta</Col>
            <Col sm="9">Etiam porta sem malesuada magna mollis euismod.</Col>
            <Col className="text-truncate" sm="3">
              Truncated term is truncated
            </Col>
            <Col sm="9">
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus.
            </Col>
            <Col sm="3">Nesting</Col>
            <Col sm="9">
              <Row>
                <Col sm="4">Nested definition list</Col>
                <Col sm="8">
                  Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
                  nunc.
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeDescriptionListAlignment}
        </SyntaxHighlighter>
        <h2 id="responsive-typography">Responsive typography</h2>
        <p>
          <em>Responsive typography</em>
          refers to scaling text and components by simply adjusting the root
          element’s <code className="highlighter-rouge">font-size</code>
          within a series of media queries. Bootstrap doesn’t do this for you,
          but it’s fairly easy to add if you need it.
        </p>
        <p>
          Here’s an example of it in practice. Choose whatever{" "}
          <code className="highlighter-rouge">font-size</code>s and media
          queries you wish.
        </p>
        <SyntaxHighlighter language="css" style={prism}>
          {codeResponsiveTypography}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default Typography;
