/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

class QuickStart extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Quick start
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          We provide all the necessary CSS resources. So, to immediately change
          or get started with our design, include the{" "}
          <code className="highlighter-rouge">
            src/assets/css/argon-dashboard-react.css
          </code>{" "}
          in your template. Or you can include the whole scss from our product (
          <code className="highlighter-rouge">src/assets/scss/{`*`}</code>) and
          then import the{" "}
          <code className="highlighter-rouge">
            src/assets/scss/argon-dashboard-react.scss
          </code>{" "}
          file inside your <code className="highlighter-rouge">index.js</code>.
          Your project will get the new look.
        </p>
        <hr />
        <h2 id="local-development">Local Development</h2>
        <p>Follow the next steps to start using our product:</p>
        <ul>
          <li>
            Install NodeJs from{" "}
            <a href="https://nodejs.org/en/?ref=creativetim" target="_blank">
              NodeJs Official Page
            </a>
          </li>
          <li>
            Go to{" "}
            <a
              href="https://www.creative-tim.com/?ref=adr-quick-start-docs-page"
              target="_blank"
            >
              creative tim website
            </a>{" "}
            and login into your account
          </li>
          <li>
            Go to the{" "}
            <a
              href="https://www.creative-tim.com/product/argon-dashboard-react?ref=adr-quick-start-docs-page"
              target="_blank"
            >
              product page
            </a>{" "}
            (be sure to be logged into your account)
          </li>
          <li>
            Press the download button near <b>Argon Dashboard React</b> product
            (this will download onto your computer a zip file)
          </li>
          <li>Unzip the downloaded file to a folder in your computer</li>
          <li>Open Terminal</li>
          <li>Go to your file project (where you've unzipped the product)</li>
          <li>
            Run in terminal{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm install`}</SyntaxHighlighter>
          </li>
          <li>
            Then run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm start`}</SyntaxHighlighter>
          </li>
          <li>
            Or you can simply run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm run install:clean`}</SyntaxHighlighter>{" "}
            which will install{" "}
            <code className="highlighter-rouge">node_modules</code> and also
            will start your project.
          </li>
          <li>
            If you have an error something containing
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`Module not found`}</SyntaxHighlighter>
            you need to do the following
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm install --g cross-env`}</SyntaxHighlighter>
            then change the script, for example the start script from
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`"start": "react-scripts start",`}</SyntaxHighlighter>
            to
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`"start": "NODE_PATH=./src react-scripts start",`}</SyntaxHighlighter>
            <b>
              The same should be done with any other script that has the above
              error.
            </b>
          </li>
          <li>
            If you have an error containing{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`props.history of undefined`}</SyntaxHighlighter>{" "}
            (this can happen when you integrate our project with another one)
            then you need to make the changes found{" "}
            <a
              href="https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/70?ref=creativetim"
              target="_blank"
            >
              {" "}
              here
            </a>
          </li>
          <li>
            (Optional) You can create a new react application like this
            <ul>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm install -g create-react-app`}</SyntaxHighlighter>
              </li>
              <li>Go to the folder where you want to create your app</li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`create-react-app your-app-name`}</SyntaxHighlighter>
              </li>
              <li>
                Navigate to{" "}
                <code className="highlighter-rouge">your-app-name</code>
              </li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm start`}</SyntaxHighlighter>
              </li>
              <li>
                And after this, you can copy and paste anything that you want
                from our product (the most important is the{" "}
                <code className="highlighter-rouge">src/assets</code> which has
                all of our style, fonts and images).
              </li>
              <li>
                More information →{" "}
                <a
                  href="https://github.com/facebookincubator/create-react-app?ref=creativetim"
                  target="_blank"
                >
                  create-react-app
                </a>
              </li>
            </ul>
          </li>
          <li>
            Navigate to{" "}
            <a href="https://localhost:3000" target="_blank">
              https://localhost:3000
            </a>
          </li>
          <li>
            More information →{" "}
            <a
              href="https://reactjs.org/docs/installation.html?ref=creativetim"
              target="_blank"
            >
              react
            </a>
          </li>
        </ul>
        <h2 id="live-production">Live Production</h2>
        <p>
          These are some free open source tutorial on how to deploy a React app
          on some servers. Please note that your project might need some
          additional configs to deploy it on these servers (Our demo product
          needs no adition configs):
        </p>
        <ul>
          <li>
            <a
              href="https://blog.heroku.com/deploying-react-with-zero-configuration?ref=creativetim"
              target="_blank"
            >
              tutorial for deploying on heroku
            </a>
          </li>
          <li>
            <a
              href="https://medium.freecodecamp.org/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089?ref=creativetim"
              target="_blank"
            >
              tutorial for deploying on github pages and surge
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af?ref=creativetim"
              target="_blank"
            >
              tutorial for deploying on S3 and CloudFront
            </a>
          </li>
        </ul>
        <h2 id="css">CSS</h2>
        <p>
          To get our look, if you've started a new app, you will need to import
          our styles inside your app like so:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`import "assets/vendor/nucleo/css/nucleo.css";\nimport "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";\nimport "assets/scss/argon-dashboard-react.scss";`}
        </SyntaxHighlighter>
        <p>Or you can import our compiled scss</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`import "assets/vendor/nucleo/css/nucleo.css";\nimport "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";\nimport "assets/css/argon-dashboard-react.css";\n// import "assets/css/argon-dashboard-react.min.css";\n// import "assets/css/argon-dashboard-react.css.map";`}
        </SyntaxHighlighter>
        <h2 id="fonts-and-icons">Fonts and Icons</h2>
        <p>
          If you've started a new project and are copying our product there, be
          sure to add the following lines of code inside your{" "}
          <code className="highlighter-rouge">.html</code> file:
        </p>
        <SyntaxHighlighter language="html" style={prism}>
          {`<!-- Fonts -->\n<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />`}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default QuickStart;
