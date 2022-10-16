
import { css } from "styled-components";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Financer from "./components/Financer";
import OpenSource from "./components/OpenSource";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import HireMe from "./components/HireMe";
import Blockify from "./components/Blockify";
import UNIMETA from "./components/UNIMETA";
import Hooden from "./components/Hooden";
import KnottBank from "./components/KnottBank";
import ThePublic from "./components/ThePublic";
import HalfAndHalf from "./components/HalfAndHalf";
import Cheers from "./components/Cheers";
import Bitcellular from "./components/Bitcellular";
import X3RUPT from "./components/X3RUPT";
import TS from "./components/TS";
import TDT from "./components/TDT";
import CEC from "./components/CEC";
import Organizations from "./components/Organizations";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/financer">
          <Financer {...financerData} />
        </Route>
        <Route path="/open-source">
          <OpenSource {...openSourceData} />
        </Route>
        <Route path="/:path(|home)">
          <Home {...homeData} />
        </Route>
        <Route path="/dashboard">
          <Dashboard {...dashboardData} />
        </Route>
        <Route path="/hire-me">
          <HireMe {...hireMeData} />
        </Route>
        <Route path="/blockify">
          <Blockify {...blockifyData} />
        </Route>
        <Route path="/uni-meta">
          <UNIMETA {...uNIMETAData} />
        </Route>
        <Route path="/hooden">
          <Hooden {...hoodenData} />
        </Route>
        <Route path="/knott-bank">
          <KnottBank {...knottBankData} />
        </Route>
        <Route path="/the-public">
          <ThePublic {...thePublicData} />
        </Route>
        <Route path="/half-and-half">
          <HalfAndHalf {...halfAndHalfData} />
        </Route>
        <Route path="/cheers">
          <Cheers {...cheersData} />
        </Route>
        <Route path="/bitcellular">
          <Bitcellular {...bitcellularData} />
        </Route>
        <Route path="/3rupt">
          <X3RUPT {...x3RUPTData} />
        </Route>
        <Route path="/ts">
          <TS {...tSData} />s
        </Route>
        <Route path="/tdt">
          <TDT {...tDTData} />
        </Route>
        <Route path="/cec">
          <CEC {...cECData} />
        </Route>
        <Route path="/organizations">
          <Organizations {...organizationsData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const navbar1Data = {
    dashboardLayout: "/img/dashboard-layout@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    heroButton1: "Login",
    heroButton2: "Wallet",
};

const button1Data = {
    children: "Hire Me",
};

const heroInfo1Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    buttonProps: button1Data,
};

const bots1Data = {
    overlapGroup3: "/img/-livestream@1x.png",
    bot: "/img/bot@2x.png",
};

const button2Data = {
    children: "Login",
    className: "button-1",
};

const button3Data = {
    children: "Wallet",
    className: "button-2",
};

const footer1Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    image8: "/img/image-8@1x.png",
    snippetOfTheDay: "Snippet of the Day",
    subscribeToGetAccess: "Subscribe to get access",
    button1Props: button2Data,
    button2Props: button3Data,
};

const financerData = {
    letsDiscussYourPortfolio: "Let’s discuss your portfolio",
    planner: "/img/planner@2x.png",
    bookAnAppointment: "book an appointment!",
    decentralizedFinances: "Decentralized Finances",
    spanText1: "Building a investment portfolio in the world of decentralized finance is all about managing volatitly, expecations and safety. To learn more ",
    spanText2: "read this article",
    spanText3: " and to see how defi fits in your investment plan ",
    spanText4: "book an appointment",
    spanText5: ".",
    navbarProps: navbar1Data,
    heroInfoProps: heroInfo1Data,
    botsProps: bots1Data,
    footerProps: footer1Data,
};

const navbar2Data = {
    dashboardLayout: "/img/dashboard-layout@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    heroButton1: "Login",
    heroButton2: "Wallet",
};

const button4Data = {
    children: "Hire Me",
};

const heroInfo2Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    buttonProps: button4Data,
};

const bots2Data = {
    overlapGroup3: "/img/-livestream@1x.png",
    bot: "/img/twitch@2x.png",
};

const classroomContainers2Data = {
    className: "classroom-containers-1",
};

const button5Data = {
    children: "Login",
    className: "button-4",
};

const button6Data = {
    children: "Wallet",
    className: "button-5",
};

const footer2Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    image8: "/img/image-8@1x.png",
    snippetOfTheDay: "Snippet of the Day",
    subscribeToGetAccess: "Subscribe to get access",
    button1Props: button5Data,
    button2Props: button6Data,
};

const openSourceData = {
    bangobongo17: "#bangobongo17",
    discordBubble: "/img/discord-bubble@2x.png",
    letsWorkTogether: "Let’s work together",
    githubClassrooms: "GitHub Classrooms",
    theseClassesAreSm: "These classes are small tutorials through the subjects with increasing content as updates roll through and others contribute.",
    navbarProps: navbar2Data,
    heroInfoProps: heroInfo2Data,
    botsProps: bots2Data,
    classroomContainersProps: classroomContainers2Data,
    footerProps: footer2Data,
};

const navbar31Data = {
    dashboardLayout: "/img/dashboard-layout-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    spanText5: "Login",
    spanText6: "Wallet",
};

const button32Data = {
    children: "Hire Me",
};

const heroInfo31Data = {
    spanText1: "A",
    spanText2: "n E-commerce and ",
    spanText3: "Full-Stack ",
    spanText4: <React.Fragment>Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText5: "Coach CEC",
    spanText6: ".",
    spanText7: "Elias Estrada",
    buttonProps: button32Data,
};

const footer42Data = {
    cecLogo: "/img/-cec-logo-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    button1: "/img/-button-2@1x.png",
    button2: "/img/-button-1@1x.png",
    image8: "/img/image-8-1@2x.png",
    spanText5: "Snippet of the Day",
    spanText6: "Subscribe to get access",
};

const homeData = {
    frame: "/img/frame-1@2x.png",
    globe: "/img/globe-1@2x.png",
    spanText1: "Well-Rounded and Highly-Grounded",
    spanText2: <React.Fragment>A self-taught web developer with a passion for e-commerce and blockchain applications. I have a background in Geographic Information Systems, ESRI products and Databases. I have a strong interest in the blockchain space and am currently working on developing a blockchain based e-commerce platform which relies of AWS infrastructures. <br /> <br />I just completed my undergrad at the University of California, Santa Barbara and plan on persuing a certification as a Salesforce Developer and Administrator, with future plans for a Master’s degree in Business (emphasizing in Location Analysis).</React.Fragment>,
    spanText3: "Subscribe to get access",
    // spanText4: <React.Fragment>function snippets() =&gt; {<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Est senectus placerat est sem malesuada interdum.  Morbi at aliquam ac nunc adipiscing ut.<br />}</React.Fragment>,
    spanText5: "Snippet of the Day",
    spanText6: "Languages & Developer Experience",
    spanText7: "Web & E-commerce Development",
    spanText8: "Project Management",
    spanText9: "Salesforce",
    spanText10: "Full-Stack",
    spanText11: "GIS",
    spanText12: "Blockchain",
    spanText13: "Python & Scripting",
    spanText14: "API & Integrations",
    spanText15: "Cloud Development",
    spanText16: "HTML",
    spanText17: "CSS",
    spanText18: "JavaScript",
    spanText19: "React",
    spanText20: "Python",
    spanText21: "SQL",
    spanText22: "C++",
    spanText23: "C#",
    spanText24: "Java",
    spanText25: "Swift",
    spanText26: "PHP",
    spanText27: "TypeScript",
    spanText28: "Ruby",
    spanText29: "Go",
    spanText30: "Kotlin",
    spanText31: "Rust",
    spanText32: "Skills",
    spanText33: "I have spent time building e-commerce sites and stores, using shopify and learned about the best practices/methods of perfessionalism in the world of e-commerce. I have a background in E-commerce and Blockchain. I have a strong interest in the blockchain space and am currently working on developing a blockchain-based e-commerce platform.  I have more projects and major projects available on other pages of this portfolio. There is also a build-a-dapp component on the hire me page. I am a self-taught developer with a passion for web development. I have a background in E-commerce and Blockchain. I have a strong interest in the blockchain space and am currently working on developing a blockchain-based e-commerce platform.  I have more projects and major projects available on other pages of this portfolio. There is also a build-a-dapp component on the hire me page. I am a self-taught developer with a passion for web development.",
    spanText34: "I am a self-taught developer with a passion for web development. I have a background in E-commerce and Blockchain. I have a strong interest in the blockchain space and am currently working on developing a blockchain-based e-commerce platform.  I have more projects and major projects available on other pages of this portfolio. There is also a build-a-dapp component on the hire me page. I am a self-taught developer with a passion for web development.",
    github1: "/img/github-2@2x.png",
    spanText35: "GitHub",
    spanText36: "View my profile to see more about my work on personal projects and on other initiatives I have contributed to:",
    spanText37: "Open-Source Projects & Contributions",
    eliImg: "/img/-eli-img-1@2x.png",
    spanText38: "Got a question? Fill out the ",
    spanText39: "Query Form",
    spanText40: " below.",
    spanText41: "If you have any curiousities about a possible job, my qualifications or a general question, please fill out the form below. I will respond as soon as I can.",
    clickUp: "/img/-click-up-1@2x.png",
    spanText42: "Private Repositories",
    spanText43: "In order to access my private repositories you m",
    spanText44: <React.Fragment>ust have a token. Learn how to get<br />a token </React.Fragment>,
    spanText45: "here",
    spanText46: " and visit this ",
    spanText47: "article",
    spanText48: " to learn more about the implementation.",
    github2: "/img/github-1@2x.png",
    spanText49: "GitHub",
    blockchainNewLogo: "/img/blockchain-new-logo-1@2x.png",
    spanText50: "Build a Bitcell and join the rest of the Metaverse!",
    spanText51: "GitHub Username",
    spanText52: "Email Address",
    spanText53: "Sign-Up",
    tradentLogo5Transparent2: "/img/tradent-logo5-transparent-2-1@2x.png",
    spanText54: "Blockchain Bounty Hunting: Team TDTO",
    spanText55: "We have experience with the following blockchains:",
    ethereum: "/img/ethereum-1@2x.png",
    spanText56: "Ethereum",
    bitcoin: "/img/bitcoin-1@2x.png",
    spanText57: "Bitcoin",
    spanText58: "Gitcoin",
    iconMail: "/img/mail-1@2x.png",
    iconLinkedin: "/img/linkedin-1@2x.png",
    iconPaper_Plane: "/img/telegram-app-1@2x.png",
    discordNew: "/img/discord-new-1@2x.png",
    twitch: "/img/twitch-1@2x.png",
    spanText59: "Recommended Material",
    spanText60: "A few of the most recent and relevant articles from my personal news feed:",
    spanText61: "Article #1",
    line11: "/img/line-1-2@2x.png",
    spanText62: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    spanText63: "Article #1",
    line12: "/img/line-1-2@2x.png",
    spanText64: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    spanText65: "Article #1",
    line13: "/img/line-1-2@2x.png",
    spanText66: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    navbarProps: navbar31Data,
    heroInfoProps: heroInfo31Data,
    footerProps: footer42Data,
};

const frame121Data = {
    group2: "/img/group-2-1@2x.png",
    spanText: "Home",
};

const messages1Data = {
    envelope: "/img/envelope-1@2x.png",
    spanText: "Messages",
};

const messages2Data = {
    envelope: "/img/circlesfour-1@2x.png",
    spanText: "Toolboxes",
};

const frame122Data = {
    group2: "/img/cloudcheck-1@2x.png",
    spanText: "Cloud",
};

const group231Data = {
    spanText: "300",
};

const group232Data = {
    spanText: "200",
    className: "group-24",
};

const group233Data = {
    spanText: "100",
    className: "group-25",
};

const dashboardData = {
    group46: "/img/group-46-1@2x.png",
    spanText1: "Digit",
    spanText2: "X",
    trendup: "/img/trendup-1@2x.png",
    spanText3: "Forecast",
    users: "/img/users-1@2x.png",
    spanText4: "Developers",
    folderopen: "/img/folderopen-1@2x.png",
    spanText5: "Directories",
    gearsix: "/img/gearsix-1@2x.png",
    spanText6: "Settings",
    selector: "/img/-selector-1@2x.png",
    spanText7: "Welcome {user_name}!",
    spanText8: "Here is {project_name} it is currently in the works",
    biSearchHeartFill: "/img/bi-search-heart-fill-1@2x.png",
    spanText9: "Search your query",
    group7: "/img/bell-1@2x.png",
    profileImage: "/img/-profile-image-1@2x.png",
    accountMenu: "/img/-account-menu-1@2x.png",
    spanText10: "$ 102.50",
    spanText11: "Total Hours",
    spanText12: "Worked",
    spanText13: "Forecasted",
    spanText14: "Today",
    timeFrameSelector: "/img/-toggle-1@2x.png",
    overlapGroup1: "/img/rectangle-15-1@2x.png",
    spanText15: "Mar 14",
    spanText16: "$28",
    spanText17: "100hrs",
    spanText18: "50hrs",
    spanText19: "10hrs",
    line1: "/img/-line-0-1@2x.png",
    line2: "/img/-line-2-1@2x.png",
    forecasted: "/img/-forecasted-1@2x.png",
    worked: "/img/-worked-1@2x.png",
    line0: "/img/-line-0-1@2x.png",
    spanText20: "FEB",
    spanText21: "MAR",
    spanText22: "APR",
    spanText23: "MAY",
    spanText24: "JUN",
    spanText25: "JUL",
    xAxisMeter: "/img/-x-axis-meter-1@2x.png",
    spanText26: "Bugs Reported",
    spanText27: "This month",
    group3: "/img/-toggle-1@2x.png",
    spanText28: "Reported",
    spanText29: "10K",
    spanText30: "Fixed",
    spanText31: "4K",
    spanText32: "Developer Activity",
    spanText33: "This week",
    toggleMenu: "/img/-toggle-1@2x.png",
    spanText34: "00",
    spanText35: "0",
    line13: "/img/line-12-2@2x.png",
    spanText36: "M",
    spanText37: "T",
    spanText38: "W",
    spanText39: "Th",
    spanText40: "F",
    spanText41: "S",
    newTicket: "/img/new-ticket-1@2x.png",
    spanText42: "300",
    spanText43: "Tickets Created",
    currencyeur: "/img/currencyeur-1@2x.png",
    spanText44: "$660.00",
    spanText45: "Total Earned",
    spanText46: "Upcoming Status Meeting",
    spanText47: "12th Aug, 2022",
    x9_Pragmatica_3D_Metal_Calendar: "/img/9-pragmatica-3d-metal-calendar-1@2x.png",
    spanText48: "Send RSVP",
    frame121Props: frame121Data,
    messages1Props: messages1Data,
    messages2Props: messages2Data,
    frame122Props: frame122Data,
    group231Props: group231Data,
    group232Props: group232Data,
    group233Props: group233Data,
};

const navbar32Data = {
    dashboardLayout: "/img/dashboard-layout-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    spanText5: "Login",
    spanText6: "Wallet",
};

const button33Data = {
    children: "Hire Me",
};

const heroInfo32Data = {
    spanText1: "A",
    spanText2: "n E-commerce and ",
    spanText3: "Full-Stack ",
    spanText4: <React.Fragment>Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText5: "Coach CEC",
    spanText6: ".",
    spanText7: "Elias Estrada",
    className: "hero-info-2",
    buttonProps: button33Data,
};

const leftScroll1Data = {
    src: "/img/chevron-left-1@2x.png",
};

const row12Data = {
    className: "row-1-1",
};

const leftScroll2Data = {
    src: "/img/chevron-right-1@2x.png",
    className: "right-scroll",
};

const button34Data = {
    children: "Hire Me",
    className: "button-9",
};

const button35Data = {
    children: "Hire Me",
    className: "button-10",
};

const button36Data = {
    children: "Hire Me",
    className: "button-11",
};

const button37Data = {
    children: "Login",
    className: "button-12",
};

const button38Data = {
    children: "Wallet",
    className: "button-13",
};

const footer51Data = {
    button1Props: button37Data,
    button2Props: button38Data,
};

const hireMeData = {
    componentLottieHttpsAssets4Lottiefi: "/img/-component-lottie-https---assets4-lottiefiles-com-packages-lf20--3@2x.png",
    spanText1: "Sign In/ Create a profile",
    registration: "/img/registration-1@2x.png",
    codeFork: "/img/code-fork-1@2x.png",
    spanText2: "Milestones vs Completion",
    payDate: "/img/pay-date-1@2x.png",
    spanText3: "Dashboard to Monitor Progess",
    newTicket: "/img/new-ticket-2@2x.png",
    x9_Pragmatica_3D_Metal_Calendar: "/img/9-pragmatica-3d-metal-calendar-2@2x.png",
    rectangle: "/img/rectangle-1@2x.png",
    spanText4: "I have experience studying under a project manager and building out a plan using tools like Kanbans, Gantt charts, Burn-up/Burn-downs and Sprints.",
    spanText5: "Project Management",
    spanText6: "Previous",
    spanText7: "https://github.com/elicharlese/monday-crm",
    spanText8: "https://github.com/elicharlese/monday-crm",
    spanText9: "https://github.com/elicharlese/monday-crm",
    spanText10: "Upcoming",
    spanText11: "Breakdown of Skills",
    group1: "/img/group-1@2x.png",
    group2: "/img/group-4@2x.png",
    group3: "/img/group-5@2x.png",
    group4: "/img/group-6@2x.png",
    group5: "/img/group-7@2x.png",
    group6: "/img/group-8@2x.png",
    group7: "/img/group-9@2x.png",
    group8: "/img/group-10@2x.png",
    group9: "/img/group-11@2x.png",
    group10: "/img/group-12@2x.png",
    spanText12: "840",
    spanText13: "262",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
    spanText14: "365",
    vector4: "/img/vector-3@2x.png",
    spanText15: "985",
    vector5: "/img/vector-7@2x.png",
    spanText16: "998",
    vector6: "/img/vector-2@2x.png",
    spanText17: "490",
    vector7: "/img/vector-1@2x.png",
    spanText18: "629",
    vector8: "/img/vector-10@2x.png",
    spanText19: "5",
    vector9: "/img/vector-9@2x.png",
    spanText20: "611",
    vector10: "/img/vector-8@2x.png",
    spanText21: "508",
    spanText22: "Degrees",
    spanText23: "Courses",
    spanText24: "Certifications",
    spanText25: "Affiliations",
    spanText26: "Build Your Dapp",
    spanText27: "There are a few different methods for building a dapp, suggesting are below. Anything else can be described in a submission through a ",
    spanText28: "direct hire form",
    spanText29: ".",
    spanText30: "Choose your framework",
    spanText31: "Choose your framework",
    spanText32: "Choose your framework",
    navbarProps: navbar32Data,
    heroInfoProps: heroInfo32Data,
    leftScroll1Props: leftScroll1Data,
    row1Props: row12Data,
    leftScroll2Props: leftScroll2Data,
    button1Props: button34Data,
    button2Props: button35Data,
    button3Props: button36Data,
    footerProps: footer51Data,
};

const navbar33Data = {
    dashboardLayout: "/img/dashboard-layout-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    spanText5: "Login",
    spanText6: "Wallet",
    className: "navbar-3",
};

const downloads1Data = {
    className: "",
};

const products1Data = {
    downloadsProps: downloads1Data,
};

const user71Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
};

const user72Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_6",
};

const user73Data = {
    ellipse2: "/img/ellipse-5-10@2x.png",
    className: "user_5",
};

const user74Data = {
    ellipse2: "/img/ellipse-4-10@2x.png",
    className: "user_4",
};

const user75Data = {
    ellipse2: "/img/ellipse-3-10@2x.png",
    className: "user_3",
};

const user76Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
    className: "user_2",
};

const user77Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_1",
};

const footerMenu1Data = {
    logoBlockify: "/img/-logo-blockify-1@2x.png",
    button1: "/img/-button-4@1x.png",
    button2: "/img/-button-3@1x.png",
};

const footer31Data = {
    footerMenuProps: footerMenu1Data,
};

const blockifyData = {
    spanText1: "Blockify",
    spanText2: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    spanText3: "CONTRIBUTE",
    spanText4: "DASHBOARD",
    logoBlockify: "/img/-logo-blockify-2@2x.png",
    spanText5: "Become a ",
    spanText6: "contributor",
    spanText7: "LEARN HOW",
    spanText8: "WORK NOW",
    navbarProps: navbar33Data,
    productsProps: products1Data,
    user71Props: user71Data,
    user72Props: user72Data,
    user73Props: user73Data,
    user74Props: user74Data,
    user75Props: user75Data,
    user76Props: user76Data,
    user77Props: user77Data,
    footer3Props: footer31Data,
};

const navbar34Data = {
    dashboardLayout: "/img/dashboard-layout-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    spanText5: "Login",
    spanText6: "Wallet",
    className: "navbar-4",
};

const downloads2Data = {
    className: "",
};

const products2Data = {
    className: "products-1",
    downloadsProps: downloads2Data,
};

const tools2Data = {
    className: "tools-1",
};

const user78Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
};

const user79Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_6-1",
};

const user710Data = {
    ellipse2: "/img/ellipse-5-10@2x.png",
    className: "user_5-1",
};

const user711Data = {
    ellipse2: "/img/ellipse-4-10@2x.png",
    className: "user_4-1",
};

const user712Data = {
    ellipse2: "/img/ellipse-3-10@2x.png",
    className: "user_3-1",
};

const user713Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
    className: "user_2-1",
};

const user714Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_1-1",
};

const footerMenu2Data = {
    logoBlockify: "/img/-logo-uni-meta-1@2x.png",
    button1: "/img/-button-6@1x.png",
    button2: "/img/-button-5@1x.png",
};

const footer32Data = {
    className: "footer-4",
    footerMenuProps: footerMenu2Data,
};

const uNIMETAData = {
    spanText1: "UNI-META",
    spanText2: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    spanText3: "CONTRIBUTE",
    spanText4: "DASHBOARD",
    logoUniMeta: "/img/-logo-uni-meta-2@2x.png",
    spanText5: "Become a ",
    spanText6: "contributor",
    spanText7: "LEARN HOW",
    spanText8: "WORK NOW",
    navbarProps: navbar34Data,
    productsProps: products2Data,
    toolsProps: tools2Data,
    user71Props: user78Data,
    user72Props: user79Data,
    user73Props: user710Data,
    user74Props: user711Data,
    user75Props: user712Data,
    user76Props: user713Data,
    user77Props: user714Data,
    footer3Props: footer32Data,
};

const navbar35Data = {
    dashboardLayout: "/img/dashboard-layout-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    spanText5: "Login",
    spanText6: "Wallet",
    className: "navbar-5",
};

const downloads3Data = {
    className: "",
};

const products3Data = {
    className: "products-2",
    downloadsProps: downloads3Data,
};

const tools3Data = {
    className: "tools-2",
};

const user715Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
};

const user716Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_6-2",
};

const user717Data = {
    ellipse2: "/img/ellipse-5-10@2x.png",
    className: "user_5-2",
};

const user718Data = {
    ellipse2: "/img/ellipse-4-10@2x.png",
    className: "user_4-2",
};

const user719Data = {
    ellipse2: "/img/ellipse-3-10@2x.png",
    className: "user_3-2",
};

const user720Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
    className: "user_2-2",
};

const user721Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_1-2",
};

const footerMenu3Data = {
    logoBlockify: "/img/-logo-hooden-1@2x.png",
    button1: "/img/-button-8@1x.png",
    button2: "/img/-button-7@1x.png",
};

const footer33Data = {
    className: "footer-5",
    footerMenuProps: footerMenu3Data,
};

const hoodenData = {
    spanText1: "HOODEN",
    spanText2: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    spanText3: "CONTRIBUTE",
    spanText4: "DASHBOARD",
    logoHooden: "/img/-logo-hooden-2@2x.png",
    spanText5: "Become a ",
    spanText6: "contributor",
    spanText7: "LEARN HOW",
    spanText8: "WORK NOW",
    navbarProps: navbar35Data,
    productsProps: products3Data,
    toolsProps: tools3Data,
    user71Props: user715Data,
    user72Props: user716Data,
    user73Props: user717Data,
    user74Props: user718Data,
    user75Props: user719Data,
    user76Props: user720Data,
    user77Props: user721Data,
    footer3Props: footer33Data,
};

const navbar36Data = {
    dashboardLayout: "/img/dashboard-layout-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    spanText5: "Login",
    spanText6: "Wallet",
    className: "navbar-6",
};

const downloads4Data = {
    className: "",
};

const products4Data = {
    className: "products-3",
    downloadsProps: downloads4Data,
};

const tools4Data = {
    className: "tools-3",
};

const user722Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
};

const user723Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_6-3",
};

const user724Data = {
    ellipse2: "/img/ellipse-5-10@2x.png",
    className: "user_5-3",
};

const user725Data = {
    ellipse2: "/img/ellipse-4-10@2x.png",
    className: "user_4-3",
};

const user726Data = {
    ellipse2: "/img/ellipse-3-10@2x.png",
    className: "user_3-3",
};

const user727Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
    className: "user_2-3",
};

const user728Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_1-3",
};

const footerMenu4Data = {
    logoBlockify: "/img/-logo-knott-bank-1@2x.png",
    button1: "/img/-button-10@1x.png",
    button2: "/img/-button-9@1x.png",
};

const footer34Data = {
    className: "footer-6",
    footerMenuProps: footerMenu4Data,
};

const knottBankData = {
    spanText1: "Knott Bank",
    spanText2: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    spanText3: "CONTRIBUTE",
    spanText4: "DASHBOARD",
    logoKnottBank: "/img/-logo-knott-bank-2@2x.png",
    spanText5: "Become a ",
    spanText6: "contributor",
    spanText7: "LEARN HOW",
    spanText8: "WORK NOW",
    navbarProps: navbar36Data,
    productsProps: products4Data,
    toolsProps: tools4Data,
    user71Props: user722Data,
    user72Props: user723Data,
    user73Props: user724Data,
    user74Props: user725Data,
    user75Props: user726Data,
    user76Props: user727Data,
    user77Props: user728Data,
    footer3Props: footer34Data,
};

const navbar37Data = {
    dashboardLayout: "/img/dashboard-layout-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    spanText5: "Login",
    spanText6: "Wallet",
    className: "navbar-7",
};

const downloads5Data = {
    className: "",
};

const products5Data = {
    className: "products-4",
    downloadsProps: downloads5Data,
};

const tools5Data = {
    className: "tools-4",
};

const user729Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
};

const user730Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_6-4",
};

const user731Data = {
    ellipse2: "/img/ellipse-5-10@2x.png",
    className: "user_5-4",
};

const user732Data = {
    ellipse2: "/img/ellipse-4-10@2x.png",
    className: "user_4-4",
};

const user733Data = {
    ellipse2: "/img/ellipse-3-10@2x.png",
    className: "user_3-4",
};

const user734Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
    className: "user_2-4",
};

const user735Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_1-4",
};

const footerMenu5Data = {
    logoBlockify: "/img/-logo-the-public-1@2x.png",
    button1: "/img/-button-12@1x.png",
    button2: "/img/-button-11@1x.png",
};

const footer35Data = {
    className: "footer-7",
    footerMenuProps: footerMenu5Data,
};

const thePublicData = {
    spanText1: "The Public",
    spanText2: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    spanText3: "CONTRIBUTE",
    spanText4: "DASHBOARD",
    logoThePublic: "/img/-logo-the-public-2@2x.png",
    spanText5: "Become a ",
    spanText6: "contributor",
    spanText7: "LEARN HOW",
    spanText8: "WORK NOW",
    navbarProps: navbar37Data,
    productsProps: products5Data,
    toolsProps: tools5Data,
    user71Props: user729Data,
    user72Props: user730Data,
    user73Props: user731Data,
    user74Props: user732Data,
    user75Props: user733Data,
    user76Props: user734Data,
    user77Props: user735Data,
    footer3Props: footer35Data,
};

const navbar38Data = {
    dashboardLayout: "/img/dashboard-layout-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    spanText5: "Login",
    spanText6: "Wallet",
    className: "navbar-8",
};

const downloads6Data = {
    className: "",
};

const products6Data = {
    className: "products-5",
    downloadsProps: downloads6Data,
};

const tools6Data = {
    className: "tools-5",
};

const user736Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
};

const user737Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_6-5",
};

const user738Data = {
    ellipse2: "/img/ellipse-5-10@2x.png",
    className: "user_5-5",
};

const user739Data = {
    ellipse2: "/img/ellipse-4-10@2x.png",
    className: "user_4-5",
};

const user740Data = {
    ellipse2: "/img/ellipse-3-10@2x.png",
    className: "user_3-5",
};

const user741Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
    className: "user_2-5",
};

const user742Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_1-5",
};

const footerMenu6Data = {
    logoBlockify: "/img/-logo-half-and-half-1@2x.png",
    button1: "/img/-button-14@1x.png",
    button2: "/img/-button-13@1x.png",
};

const footer36Data = {
    className: "footer-8",
    footerMenuProps: footerMenu6Data,
};

const halfAndHalfData = {
    spanText1: "Half & Half",
    spanText2: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    spanText3: "CONTRIBUTE",
    spanText4: "DASHBOARD",
    logoHalfAndHalf: "/img/-logo-half-and-half-2@2x.png",
    spanText5: "Become a ",
    spanText6: "contributor",
    spanText7: "LEARN HOW",
    spanText8: "WORK NOW",
    navbarProps: navbar38Data,
    productsProps: products6Data,
    toolsProps: tools6Data,
    user71Props: user736Data,
    user72Props: user737Data,
    user73Props: user738Data,
    user74Props: user739Data,
    user75Props: user740Data,
    user76Props: user741Data,
    user77Props: user742Data,
    footer3Props: footer36Data,
};

const navbar39Data = {
    dashboardLayout: "/img/dashboard-layout-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    spanText5: "Login",
    spanText6: "Wallet",
    className: "navbar-9",
};

const downloads7Data = {
    className: "",
};

const products7Data = {
    className: "products-6",
    downloadsProps: downloads7Data,
};

const tools7Data = {
    className: "tools-6",
};

const user743Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
};

const user744Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_6-6",
};

const user745Data = {
    ellipse2: "/img/ellipse-5-10@2x.png",
    className: "user_5-6",
};

const user746Data = {
    ellipse2: "/img/ellipse-4-10@2x.png",
    className: "user_4-6",
};

const user747Data = {
    ellipse2: "/img/ellipse-3-10@2x.png",
    className: "user_3-6",
};

const user748Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
    className: "user_2-6",
};

const user749Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_1-6",
};

const footerMenu7Data = {
    logoBlockify: "/img/-logo-cheers-1@2x.png",
    button1: "/img/-button-16@1x.png",
    button2: "/img/-button-15@1x.png",
};

const footer37Data = {
    className: "footer-9",
    footerMenuProps: footerMenu7Data,
};

const cheersData = {
    spanText1: "Cheers",
    spanText2: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    spanText3: "CONTRIBUTE",
    spanText4: "DASHBOARD",
    logoCheers: "/img/-logo-cheers-2@2x.png",
    spanText5: "Become a ",
    spanText6: "contributor",
    spanText7: "LEARN HOW",
    spanText8: "WORK NOW",
    navbarProps: navbar39Data,
    productsProps: products7Data,
    toolsProps: tools7Data,
    user71Props: user743Data,
    user72Props: user744Data,
    user73Props: user745Data,
    user74Props: user746Data,
    user75Props: user747Data,
    user76Props: user748Data,
    user77Props: user749Data,
    footer3Props: footer37Data,
};

const navbar310Data = {
    dashboardLayout: "/img/dashboard-layout-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    spanText5: "Login",
    spanText6: "Wallet",
    className: "navbar-10",
};

const downloads8Data = {
    className: "",
};

const products8Data = {
    className: "products-7",
    downloadsProps: downloads8Data,
};

const tools8Data = {
    className: "tools-7",
};

const user750Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_1-7",
};

const user751Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
    className: "user_2-7",
};

const user752Data = {
    ellipse2: "/img/ellipse-3-10@2x.png",
    className: "user_3-7",
};

const user753Data = {
    ellipse2: "/img/ellipse-4-10@2x.png",
    className: "user_4-7",
};

const user754Data = {
    ellipse2: "/img/ellipse-5-10@2x.png",
    className: "user_5-7",
};

const user755Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
    className: "user_7-7",
};

const user756Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_6-7",
};

const footerMenu8Data = {
    logoBlockify: "/img/-logo-bitcell-1@2x.png",
    button1: "/img/-button-18@1x.png",
    button2: "/img/-button-17@1x.png",
};

const bitcellularData = {
    spanText1: "Bitcellular",
    spanText2: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    spanText3: "CONTRIBUTE",
    spanText4: "DASHBOARD",
    logoBitcell: "/img/-logo-bitcell-2@2x.png",
    spanText5: "Become a ",
    spanText6: "contributor",
    image8: "/img/image-8-1@2x.png",
    spanText7: "Snippet of the Day",
    spanText8: "Subscribe to get access",
    spanText9: "LEARN HOW",
    spanText10: "WORK NOW",
    navbarProps: navbar310Data,
    productsProps: products8Data,
    toolsProps: tools8Data,
    user71Props: user750Data,
    user72Props: user751Data,
    user73Props: user752Data,
    user74Props: user753Data,
    user75Props: user754Data,
    user76Props: user755Data,
    user77Props: user756Data,
    footerMenuProps: footerMenu8Data,
};

const navbar311Data = {
    dashboardLayout: "/img/dashboard-layout-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    spanText5: "Login",
    spanText6: "Wallet",
    className: "navbar-11",
};

const button22Data = {
    children: "DASHBOARD",
};

const downloads9Data = {
    className: "",
};

const products9Data = {
    className: "products-8",
    downloadsProps: downloads9Data,
};

const tools9Data = {
    className: "tools-8",
};

const user757Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
};

const user758Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_6-8",
};

const user759Data = {
    ellipse2: "/img/ellipse-5-10@2x.png",
    className: "user_5-8",
};

const user760Data = {
    ellipse2: "/img/ellipse-4-10@2x.png",
    className: "user_4-8",
};

const user761Data = {
    ellipse2: "/img/ellipse-3-10@2x.png",
    className: "user_3-8",
};

const user762Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
    className: "user_2-8",
};

const user763Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_1-8",
};

const footerMenu9Data = {
    logoBlockify: "/img/3rupt-logo-1-1@2x.png",
    button1: "/img/-button-20@1x.png",
    button2: "/img/-button-19@1x.png",
};

const footer38Data = {
    className: "footer-10",
    footerMenuProps: footerMenu9Data,
};

const x3RUPTData = {
    spanText1: "3RUPT",
    spanText2: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    spanText3: "CONTRIBUTE",
    x3RuptLogo2: "/img/3rupt-logo-2-1@2x.png",
    spanText4: "Become a ",
    spanText5: "contributor",
    spanText6: "LEARN HOW",
    spanText7: "WORK NOW",
    navbarProps: navbar311Data,
    button2Props: button22Data,
    productsProps: products9Data,
    toolsProps: tools9Data,
    user71Props: user757Data,
    user72Props: user758Data,
    user73Props: user759Data,
    user74Props: user760Data,
    user75Props: user761Data,
    user76Props: user762Data,
    user77Props: user763Data,
    footer3Props: footer38Data,
};

const navbar312Data = {
    dashboardLayout: "/img/dashboard-layout-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    spanText5: "Login",
    spanText6: "Wallet",
    className: "navbar-12",
};

const downloads10Data = {
    className: "downloads-3",
};

const products10Data = {
    className: "products-9",
    downloadsProps: downloads10Data,
};

const tools10Data = {
    className: "tools-9",
};

const user764Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
};

const user765Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_6-9",
};

const user766Data = {
    ellipse2: "/img/ellipse-5-10@2x.png",
    className: "user_5-9",
};

const user767Data = {
    ellipse2: "/img/ellipse-4-10@2x.png",
    className: "user_4-9",
};

const user768Data = {
    ellipse2: "/img/ellipse-3-10@2x.png",
    className: "user_3-9",
};

const user769Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
    className: "user_2-9",
};

const user770Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_1-9",
};

const tSData = {
    spanText1: "TerraSolstice",
    spanText2: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    spanText3: "CONTRIBUTE",
    spanText4: "DASHBOARD",
    terrasolsticeLogo11: "/img/terrasolstice-logo-1-2@2x.png",
    spanText5: "Become a ",
    spanText6: "contributor",
    spanText7: "LEARN HOW",
    spanText8: "WORK NOW",
    terrasolsticeLogo12: "/img/terrasolstice-logo-1-1@2x.png",
    spanText9: "HIRE ME",
    spanText10: "GITHUB",
    spanText11: "OPEN-SOURCE",
    spanText12: "ORGANIZATIONS",
    button1: "/img/-button-22@1x.png",
    button2: "/img/-button-21@1x.png",
    image8: "/img/image-8-1@2x.png",
    spanText13: "Snippet of the Day",
    spanText14: "Subscribe to get access",
    navbarProps: navbar312Data,
    productsProps: products10Data,
    toolsProps: tools10Data,
    user71Props: user764Data,
    user72Props: user765Data,
    user73Props: user766Data,
    user74Props: user767Data,
    user75Props: user768Data,
    user76Props: user769Data,
    user77Props: user770Data,
};

const navbar313Data = {
    dashboardLayout: "/img/dashboard-layout-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    spanText5: "Login",
    spanText6: "Wallet",
    className: "navbar-13",
};

const downloads11Data = {
    className: "downloads-4",
};

const products11Data = {
    className: "products-10",
    downloadsProps: downloads11Data,
};

const tools11Data = {
    className: "tools-10",
};

const user771Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
};

const user772Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_6-10",
};

const user773Data = {
    ellipse2: "/img/ellipse-5-10@2x.png",
    className: "user_5-10",
};

const user774Data = {
    ellipse2: "/img/ellipse-4-10@2x.png",
    className: "user_4-10",
};

const user775Data = {
    ellipse2: "/img/ellipse-3-10@2x.png",
    className: "user_3-10",
};

const user776Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
    className: "user_2-10",
};

const user777Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_1-10",
};

const footerMenu10Data = {
    logoBlockify: "/img/tradent-logo5-transparent-2-1@2x.png",
    button1: "/img/-button-24@1x.png",
    button2: "/img/-button-23@1x.png",
};

const footer39Data = {
    className: "footer-11",
    footerMenuProps: footerMenu10Data,
};

const tDTData = {
    spanText1: "Tradent",
    spanText2: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    spanText3: "CONTRIBUTE",
    spanText4: "DASHBOARD",
    tradentLogo5Transparent1: "/img/tradent-logo5-transparent-1-1@2x.png",
    spanText5: "Become a ",
    spanText6: "contributor",
    spanText7: "LEARN HOW",
    spanText8: "WORK NOW",
    navbarProps: navbar313Data,
    productsProps: products11Data,
    toolsProps: tools11Data,
    user71Props: user771Data,
    user72Props: user772Data,
    user73Props: user773Data,
    user74Props: user774Data,
    user75Props: user775Data,
    user76Props: user776Data,
    user77Props: user777Data,
    footer3Props: footer39Data,
};

const navbar314Data = {
    dashboardLayout: "/img/dashboard-layout-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    spanText5: "Login",
    spanText6: "Wallet",
};

const downloads12Data = {
    className: "downloads-5",
};

const products12Data = {
    className: "products-11",
    downloadsProps: downloads12Data,
};

const tools12Data = {
    className: "tools-11",
};

const user778Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
};

const user779Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_6-11",
};

const user780Data = {
    ellipse2: "/img/ellipse-5-10@2x.png",
    className: "user_5-11",
};

const user781Data = {
    ellipse2: "/img/ellipse-4-10@2x.png",
    className: "user_4-11",
};

const user782Data = {
    ellipse2: "/img/ellipse-3-10@2x.png",
    className: "user_3-11",
};

const user783Data = {
    ellipse2: "/img/ellipse-2-18@2x.png",
    className: "user_2-11",
};

const user784Data = {
    ellipse2: "/img/ellipse-1-18@2x.png",
    className: "user_1-11",
};

const footerMenu11Data = {
    logoBlockify: "/img/-cec-logo-1@2x.png",
    button1: "/img/-button-26@1x.png",
    button2: "/img/-button-25@1x.png",
};

const footer310Data = {
    className: "footer-12",
    footerMenuProps: footerMenu11Data,
};

const cECData = {
    spanText1: <React.Fragment>Creative <br />E-commerce <br />Co.</React.Fragment>,
    spanText2: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    spanText3: "CONTRIBUTE",
    spanText4: "DASHBOARD",
    cecLogo: "/img/-cec-logo-6@2x.png",
    spanText5: "Become a ",
    spanText6: "contributor",
    spanText7: "LEARN HOW",
    spanText8: "WORK NOW",
    navbarProps: navbar314Data,
    productsProps: products12Data,
    toolsProps: tools12Data,
    user71Props: user778Data,
    user72Props: user779Data,
    user73Props: user780Data,
    user74Props: user781Data,
    user75Props: user782Data,
    user76Props: user783Data,
    user77Props: user784Data,
    footer3Props: footer310Data,
};

const navbar315Data = {
    dashboardLayout: "/img/dashboard-layout-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    spanText5: "Login",
    spanText6: "Wallet",
};

const step31Data = {
    codeFork: "/img/code-fork-2@2x.png",
    spanText: "Commit your code for review",
};

const step32Data = {
    codeFork: "/img/performance-macbook-1@2x.png",
    spanText: "Create Dashboard Login",
    className: "step-1",
};

const step33Data = {
    codeFork: "/img/github-3@2x.png",
    spanText: "Connect your GitHub",
    className: "step-2",
};

const step34Data = {
    codeFork: "/img/source-code-1@2x.png",
    spanText: "Get Paid to be a Developer",
    className: "step-4",
};

const button39Data = {
    children: "Login",
    className: "button-14",
};

const button310Data = {
    children: "Wallet",
    className: "button-15",
};

const footer52Data = {
    button1Props: button39Data,
    button2Props: button310Data,
};

const organizationsData = {
    spanText1: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    reactNative: "/img/react-native-1@2x.png",
    laptop: "/img/laptop-1@2x.png",
    spanText2: "JOIN A DAO",
    spanText3: "Creative E-commerce Co.",
    spanText4: "TerraSolstice",
    spanText5: "Tradent",
    timeline: "/img/-timeline-1@2x.png",
    spanText6: "Minor Organizations",
    wave: "/img/-wave-1@2x.png",
    navbarProps: navbar315Data,
    step31Props: step31Data,
    step32Props: step32Data,
    step33Props: step33Data,
    step34Props: step34Data,
    footerProps: footer52Data,
};

