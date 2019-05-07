// Getting started
// import Colors from "views/Documentation/Sections/Colors.jsx";
import Overview from "views/Documentation/Sections/getting-started/Overview.jsx";
import QuickStart from "views/Documentation/Sections/getting-started/QuickStart.jsx";
import Download from "views/Documentation/Sections/getting-started/Download.jsx";
import License from "views/Documentation/Sections/getting-started/License.jsx";
import Contents from "views/Documentation/Sections/getting-started/Contents.jsx";
import BuildTools from "views/Documentation/Sections/getting-started/BuildTools.jsx";
import RoutingSystem from "views/Documentation/Sections/getting-started/RoutingSystem.jsx";
// Foundation
import Colors from "views/Documentation/Sections/foundation/Colors.jsx";
import Grid from "views/Documentation/Sections/foundation/Grid.jsx";
import Typography from "views/Documentation/Sections/foundation/Typography.jsx";
// import Icons from "views/Documentation/Sections/foundation/Icons.jsx";
// Core components
import Footer from "views/Documentation/Sections/core-components/Footer.jsx";
import Navbars from "views/Documentation/Sections/core-components/Navbars.jsx";
import Headers from "views/Documentation/Sections/core-components/Headers.jsx";
import Sidebar from "views/Documentation/Sections/core-components/Sidebar.jsx";
// Reasctrap components
import Alerts from "views/Documentation/Sections/restyled-components/Alerts.jsx";
import Badge from "views/Documentation/Sections/restyled-components/Badge.jsx";
import Buttons from "views/Documentation/Sections/restyled-components/Buttons.jsx";
// import Cards from "views/Documentation/Sections/restyled-components/Cards.jsx";
import Forms from "views/Documentation/Sections/restyled-components/Forms.jsx";
import Modals from "views/Documentation/Sections/restyled-components/Modals.jsx";
import Navs from "views/Documentation/Sections/restyled-components/Navs.jsx";
import Navbar from "views/Documentation/Sections/restyled-components/Navbar.jsx";
import Pagination from "views/Documentation/Sections/restyled-components/Pagination.jsx";
import Popovers from "views/Documentation/Sections/restyled-components/Popovers.jsx";
import Progress from "views/Documentation/Sections/restyled-components/Progress.jsx";
// import Tables from "views/Documentation/Sections/restyled-components/Tables.jsx";
import Tooltips from "views/Documentation/Sections/restyled-components/Tooltips.jsx";
// Plugins
// import Charts from "views/Documentation/Sections/plugins/Charts.jsx";
// import CopyToClipboard from "views/Documentation/Sections/plugins/CopyToClipboard.jsx";
import Datetimepicker from "views/Documentation/Sections/plugins/Datetimepicker.jsx";
// import Maps from "views/Documentation/Sections/plugins/Maps.jsx";
import Sliders from "views/Documentation/Sections/plugins/Sliders.jsx";

var docsRoutes = [
  {
    name: "Getting started",
    path: "/documentation/overview",
    routes: [
      {
        path: "/documentation/overview",
        component: Overview,
        name: "Overview"
      },
      {
        path: "/documentation/quick-start",
        component: QuickStart,
        name: "Quick Start"
      },
      {
        path: "/documentation/license",
        component: License,
        name: "License"
      },
      {
        path: "/documentation/download",
        component: Download,
        name: "Download"
      },
      {
        path: "/documentation/contents",
        component: Contents,
        name: "Contents"
      },
      {
        path: "/documentation/build-tools",
        component: BuildTools,
        name: "Build Tools"
      },
      {
        path: "/documentation/routing-system",
        component: RoutingSystem,
        name: "Routing System"
      }
    ]
  },
  {
    name: "Foundation",
    path: "/documentation/colors",
    routes: [
      {
        path: "/documentation/colors",
        component: Colors,
        name: "Colors"
      },
      {
        path: "/documentation/grid",
        component: Grid,
        name: "Grid"
      },
      {
        path: "/documentation/typography",
        component: Typography,
        name: "Typography"
      }
      // {
      //   path: "/documentation/icons",
      //   component: Icons,
      //   name: "Icons"
      // }
    ]
  },
  {
    name: "Core Components",
    path: "/documentation/custom-upload",
    routes: [
      {
        path: "/documentation/footer",
        component: Footer,
        name: "Footer"
      },
      {
        path: "/documentation/app-navigation",
        component: Navbars,
        name: "App Navbars"
      },
      {
        path: "/documentation/page-header",
        component: Headers,
        name: "Headers"
      },
      {
        path: "/documentation/sidebar",
        component: Sidebar,
        name: "Sidebar"
      }
    ]
  },
  {
    name: "Restyled Components",
    path: "/documentation/alert",
    routes: [
      {
        path: "/documentation/alert",
        component: Alerts,
        name: "Alerts"
      },
      {
        path: "/documentation/badge",
        component: Badge,
        name: "Badge"
      },
      {
        path: "/documentation/buttons",
        component: Buttons,
        name: "Buttons"
      },
      // {
      //   path: "/documentation/cards",
      //   component: Cards,
      //   name: "Cards"
      // },
      {
        path: "/documentation/forms",
        component: Forms,
        name: "Forms"
      },
      {
        path: "/documentation/modal",
        component: Modals,
        name: "Modals"
      },
      {
        path: "/documentation/navbar",
        component: Navbar,
        name: "Navbars"
      },
      {
        path: "/documentation/navs",
        component: Navs,
        name: "Navs"
      },
      {
        path: "/documentation/pagination",
        component: Pagination,
        name: "Pagination"
      },
      {
        path: "/documentation/popovers",
        component: Popovers,
        name: "Popovers"
      },
      {
        path: "/documentation/progress",
        component: Progress,
        name: "Progress"
      },
      // {
      //   path: "/documentation/tables",
      //   component: Tables,
      //   name: "Tables"
      // },
      {
        path: "/documentation/tooltips",
        component: Tooltips,
        name: "Tooltips"
      }
    ]
  },
  {
    name: "Plugins",
    path: "/documentation/charts",
    routes: [
      // { path: "/documentation/charts", component: Charts, name: "Charts" },
      // {
      //   path: "/documentation/copy-to-clipboard",
      //   component: CopyToClipboard,
      //   name: "Copy To Clipboard"
      // },
      {
        path: "/documentation/date-time-picker",
        component: Datetimepicker,
        name: "DateTimePicker"
      },
      // { path: "/documentation/maps", component: Maps, name: "Maps" },
      { path: "/documentation/sliders", component: Sliders, name: "Sliders" }
    ]
  },
  { redirect: true, path: "/documentation", pathTo: "/documentation/overview" }
];

export default docsRoutes;
