import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomeMockup from "./components/HomeMockup";
import IPadMiniiPad97Landsape from "./components/IPadMiniiPad97Landsape";
import GenericDesktop from "./components/GenericDesktop";
import IPhone12ProMax from "./components/IPhone12ProMax";
import IPadMiniiPad97Portrait from "./components/IPadMiniiPad97Portrait";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import OpenSource2 from "./components/OpenSource2";
import Organizations from "./components/Organizations";
import X3RUPT from "./components/X3RUPT";
import Bitcellular4 from "./components/Bitcellular4";
import CEC from "./components/CEC";
import Cheers from "./components/Cheers";
import HalfAndHalf from "./components/HalfAndHalf";
import ThePublic from "./components/ThePublic";
import KnottBank from "./components/KnottBank";
import TS from "./components/TS";
import Hooden from "./components/Hooden";
import Blockify from "./components/Blockify";
import UNIMETA from "./components/UNIMETA";
import TDT from "./components/TDT";
import Financer from "./components/Financer";
import HireMe3 from "./components/HireMe3";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home-mockup">
          <HomeMockup {...homeMockupData} />
        </Route>
        <Route path="/ipad-mini-ipad-9-7-landsape">
          <IPadMiniiPad97Landsape {...iPadMiniiPad97LandsapeData} />
        </Route>
        <Route path="/generic-desktop">
          <GenericDesktop {...genericDesktopData} />
        </Route>
        <Route path="/iphone-12-pro-max">
          <IPhone12ProMax {...iPhone12ProMaxData} />
        </Route>
        <Route path="/ipad-mini-ipad-9-7-portrait">
          <IPadMiniiPad97Portrait {...iPadMiniiPad97PortraitData} />
        </Route>
        <Route path="/dashboard">
          <Dashboard {...dashboardData} />
        </Route>
        <Route path="/home">
          <Home {...homeData} />
        </Route>
        <Route path="/login-form">
          <LoginForm />
        </Route>
        <Route path="/open-source">
          <OpenSource2 {...openSource22Data} />
        </Route>
        <Route path="/:path(|organizations)">
          <Organizations {...organizationsData} />
        </Route>
        <Route path="/3rupt">
          <X3RUPT {...x3RUPTData} />
        </Route>
        <Route path="/bitcellular">
          <Bitcellular4 {...bitcellular4Data} />
        </Route>
        <Route path="/cec">
          <CEC {...cECData} />
        </Route>
        <Route path="/cheers">
          <Cheers {...cheersData} />
        </Route>
        <Route path="/half-and-half">
          <HalfAndHalf {...halfAndHalfData} />
        </Route>
        <Route path="/the-public">
          <ThePublic {...thePublicData} />
        </Route>
        <Route path="/knott-bank">
          <KnottBank {...knottBankData} />
        </Route>
        <Route path="/ts">
          <TS {...tSData} />
        </Route>
        <Route path="/hooden">
          <Hooden {...hoodenData} />
        </Route>
        <Route path="/blockify">
          <Blockify {...blockifyData} />
        </Route>
        <Route path="/uni-meta">
          <UNIMETA {...uNIMETAData} />
        </Route>
        <Route path="/tdt">
          <TDT {...tDTData} />
        </Route>
        <Route path="/financer">
          <Financer {...financerData} />
        </Route>
        <Route path="/hire-me">
          <HireMe3 {...hireMe3Data} />
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
};

const xButton1Data = {
    children: "Hire Me",
};

const heroInfo1Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    buttonProps: xButton1Data,
};

const hero221Data = {
    heroInfoProps: heroInfo1Data,
};

const userGithub1Data = {
    children: "GitHub Username",
};

const bitcellSignup1Data = {
    userGithubProps: userGithub1Data,
};

const bitcellular21Data = {
    bitcellSignupProps: bitcellSignup1Data,
};

const bitcellular51Data = {
    bitcellular2Props: bitcellular21Data,
};

const ethereum1Data = {
    className: "",
};

const bitcoin1Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "",
};

const xButton2Data = {
    children: "Gitcoin",
    className: "button-10",
};

const blockchain21Data = {
    ethereumProps: ethereum1Data,
    ethereumProps2: bitcoin1Data,
    buttonProps: xButton2Data,
};

const blockchain41Data = {
    blockchain2Props: blockchain21Data,
};

const recommendation11Data = {
    className: "",
};

const recommendation21Data = {
    article1: "Article #2",
    className: "",
};

const recommendation22Data = {
    article1: "Article #3",
    className: "recommendation",
};

const posts1Data = {
    className: "",
    recommendation1Props: recommendation11Data,
    recommendation21Props: recommendation21Data,
    recommendation22Props: recommendation22Data,
};

const recommendedMaterial31Data = {
    postsProps2: posts1Data,
};

const xButton3Data = {
    children: "Login",
    className: "button-11",
};

const xButton4Data = {
    children: "Wallet",
    className: "button-12",
};

const footerMenu1Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "",
    button1Props: xButton3Data,
    button2Props: xButton4Data,
};

const xFooter1Data = {
    image8: "/img/image-8@1x.png",
    footerMenuProps: footerMenu1Data,
};

const homeMockupData = {
    subscribeToGetAccess: "Subscribe to get access",
    inputType: "email",
    inputPlaceholder: "Enter your email",
    submit: "Submit",
    functionSnippets: <React.Fragment>function snippets() =&gt; {<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Est senectus placerat est sem malesuada interdum.  Morbi at aliquam ac nunc adipiscing ut.<br />}</React.Fragment>,
    snippetOfTheDay: "Snippet of the Day",
    navbarProps: navbar1Data,
    hero22Props: hero221Data,
    bitcellular5Props: bitcellular51Data,
    blockchain4Props: blockchain41Data,
    recommendedMaterial3Props: recommendedMaterial31Data,
    xFooterProps: xFooter1Data,
};

const buttonLogin2Data = {
    className: "button-login-3",
};

const buttonWallet2Data = {
    className: "button-wallet-3",
};

const navbar422Data = {
    dashboardLayout: "/img/dashboard-layout@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    buttonLoginProps: buttonLogin2Data,
    buttonWalletProps: buttonWallet2Data,
};

const xButton5Data = {
    children: "Hire Me",
};

const heroInfo2Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-3",
    buttonProps: xButton5Data,
};

const iconGithub2Data = {
    className: "icon-github-2",
};

const githubLink2Data = {
    className: "github-link-2",
};

const userGithub2Data = {
    children: "GitHub Username",
    className: "user-github-2",
};

const buttonSignup2Data = {
    className: "button-signup-2",
};

const ethereum2Data = {
    className: "ethereum-8",
};

const bitcoin2Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "bitcoin-8",
};

const xButton6Data = {
    children: "Gitcoin",
    className: "button-14",
};

const blockchain22Data = {
    className: "blockchain-7",
    ethereumProps: ethereum2Data,
    ethereumProps2: bitcoin2Data,
    buttonProps: xButton6Data,
};

const text22Data = {
    className: "text-8",
};

const recommendation12Data = {
    className: "recommendation-1-2",
};

const recommendation23Data = {
    article1: "Article #2",
    className: "recommendation-4-1",
};

const recommendation24Data = {
    article1: "Article #3",
    className: "recommendation-4",
};

const posts21Data = {
    recommendation1Props: recommendation12Data,
    recommendation21Props: recommendation23Data,
    recommendation22Props: recommendation24Data,
};

const xButton7Data = {
    children: "Login",
    className: "button",
};

const xButton8Data = {
    children: "Wallet",
    className: "button",
};

const footer422Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    image8: "/img/image-8@1x.png",
    button1Props: xButton7Data,
    button2Props: xButton8Data,
};

const iPadMiniiPad97LandsapeData = {
    componentLottieHttpsAssets8Lottiefi: "/img/-component-lottie-https---assets8-lottiefiles-com-packages-lf20--1@1x.png",
    globe: "/img/globe-3@2x.png",
    wellRoundedAndHighlyGrounded: "Well-Rounded and Highly-Grounded",
    aSelfTaughtWebDe: <React.Fragment>A self-taught web developer with a passion for e-commerce and blockchain applications. I have a background in Geographic Information Systems, ESRI products and Databases. I have a strong interest in the blockchain space and am currently working on developing a blockchain based e-commerce platform which relies of AWS infrastructures. <br /> <br />I just completed my undergrad at the University of California, Santa Barbara and plan on persuing a certification as a Salesforce Developer and Administrator, with future plans for a Master’s degree in Business (emphasizing in Location Analysis).</React.Fragment>,
    subscribeToGetAccess: "Subscribe to get access",
    inputType: "email",
    inputPlaceholder: "Enter your email",
    submit: "Submit",
    functionSnippets: <React.Fragment>function snippets() =&gt; {<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Est senectus placerat est sem malesuada interdum.  Morbi at aliquam ac nunc adipiscing ut.<br />}</React.Fragment>,
    snippetOfTheDay: "Snippet of the Day",
    openSourceProjectsContributions: "Open-Source Projects & Contributions",
    viewMyProfileToS: "View my profile to see more about my work on personal projects and on other initiatives I have contributed to:",
    eliImg: "/img/-eli-img@2x.png",
    spanText1: "Got a question? Fill out the ",
    spanText2: "Query Form",
    spanText3: " below.",
    ifYouHaveAnyCuri: "If you have any curiousities about a possible job, my qualifications or a general question, please fill out the form below. I will respond as soon as I can.",
    spanText4: <React.Fragment>In order to access my private repositories you must have a token. Learn how to get<br />a token </React.Fragment>,
    spanText5: "here",
    spanText6: " and visit this ",
    spanText7: "article",
    spanText8: " to learn more about the implementation.",
    privateRepositories: "Private Repositories",
    blockchainNewLogo: "/img/blockchain-new-logo@2x.png",
    buildABitcellAnd: "Build a Bitcell and join the rest of the Metaverse!",
    emailAddress: "Email Address",
    twitch: "/img/twitch-1@2x.png",
    iconMail: "/img/mail@2x.png",
    iconLinkedin: "/img/linkedin@2x.png",
    iconPaper_Plane: "/img/telegram-app@2x.png",
    discordNew: "/img/discord-new-3@2x.png",
    navbar422Props: navbar422Data,
    heroInfoProps: heroInfo2Data,
    iconGithubProps: iconGithub2Data,
    githubLinkProps: githubLink2Data,
    userGithubProps: userGithub2Data,
    buttonSignupProps: buttonSignup2Data,
    blockchain2Props: blockchain22Data,
    text2Props: text22Data,
    posts2Props: posts21Data,
    footer422Props: footer422Data,
};

const buttonLogin3Data = {
    className: "button-login-4",
};

const buttonWallet3Data = {
    className: "button-wallet-4",
};

const links1Data = {
    buttonLoginProps: buttonLogin3Data,
    buttonWalletProps: buttonWallet3Data,
};

const navbar221Data = {
    dashboardLayout: "/img/dashboard-layout@2x.png",
    linksProps: links1Data,
};

const xButton9Data = {
    children: "Hire Me",
};

const heroInfo3Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    buttonProps: xButton9Data,
};

const hero1Data = {
    heroInfoProps: heroInfo3Data,
};

const aboutMe222Data = {
    className: "about-me-3",
};

const openSource2Data = {
    className: "open-source-4",
};

const openSourceContribution1Data = {
    openSourceProps: openSource2Data,
};

const text3Data = {
    className: "text-3",
};

const privateRepositories22Data = {
    className: "private-repositories-6",
};

const privateRepositories1Data = {
    privateRepositories2Props: privateRepositories22Data,
};

const userGithub3Data = {
    children: "GitHub Username",
};

const bitcellSignup2Data = {
    userGithubProps: userGithub3Data,
};

const bitcellular22Data = {
    className: "bitcellular-4",
    bitcellSignupProps: bitcellSignup2Data,
};

const bitcellular1Data = {
    bitcellular2Props: bitcellular22Data,
};

const ethereum3Data = {
    className: "ethereum-11",
};

const bitcoin3Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "bitcoin-11",
};

const xButton10Data = {
    children: "Gitcoin",
    className: "button-16",
};

const blockchain23Data = {
    className: "blockchain-8",
    ethereumProps: ethereum3Data,
    ethereumProps2: bitcoin3Data,
    buttonProps: xButton10Data,
};

const blockchain1Data = {
    blockchain2Props: blockchain23Data,
};

const icons2Data = {
    className: "icons-2",
};

const socials1Data = {
    iconsProps: icons2Data,
};

const text23Data = {
    className: "text-9",
};

const recommendation13Data = {
    className: "",
};

const recommendation25Data = {
    article1: "Article #2",
    className: "",
};

const recommendation26Data = {
    article1: "Article #3",
    className: "recommendation-2",
};

const posts3Data = {
    className: "posts-2",
    recommendation1Props: recommendation13Data,
    recommendation21Props: recommendation25Data,
    recommendation22Props: recommendation26Data,
};

const recommendedMaterial1Data = {
    postsProps: text23Data,
    postsProps2: posts3Data,
};

const xButton11Data = {
    children: "Login",
    className: "button-17",
};

const xButton12Data = {
    children: "Wallet",
    className: "button-18",
};

const footerMenu21Data = {
    xButton1Props: xButton11Data,
    xButton2Props: xButton12Data,
};

const footer3Data = {
    image8: "/img/image-8@1x.png",
    snippetOfTheDay: "Snippet of the Day",
    subscribeToGetAccess: "Subscribe to get access",
    enterEmailHere: "Enter email here",
    submit: "Submit",
    footerMenu2Props: footerMenu21Data,
};

const genericDesktopData = {
    subscribeToGetAccess: "Subscribe to get access",
    inputType: "email",
    inputPlaceholder: "Enter your email",
    submit: "Submit",
    functionSnippets: <React.Fragment>function snippets() =&gt; {<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Est senectus placerat est sem malesuada interdum.  Morbi at aliquam ac nunc adipiscing ut.<br />}</React.Fragment>,
    snippetOfTheDay: "Snippet of the Day",
    navbar22Props: navbar221Data,
    heroProps: hero1Data,
    aboutMe22Props: aboutMe222Data,
    openSourceContributionProps: openSourceContribution1Data,
    textProps: text3Data,
    privateRepositoriesProps: privateRepositories1Data,
    bitcellularProps: bitcellular1Data,
    blockchainProps: blockchain1Data,
    socialsProps: socials1Data,
    recommendedMaterialProps: recommendedMaterial1Data,
    footer3Props: footer3Data,
};

const xButton13Data = {
    children: "Hire Me",
    className: "button-19",
};

const heroInfo22Data = {
    name: "Elias Estrada",
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    buttonProps: xButton13Data,
};

const iconGithub4Data = {
    className: "icon-github-4",
};

const githubLink4Data = {
    className: "github-link-4",
};

const userGithub4Data = {
    children: "GitHub Username",
    className: "user-github-4",
};

const buttonSignup4Data = {
    className: "button-signup-4",
};

const bitcoin4Data = {
    bitcoin1: "/img/bitcoin-3@2x.png",
};

const xButton14Data = {
    children: "Gitcoin",
    className: "button-20",
};

const recommendation14Data = {
    className: "recommendation-1-4",
};

const recommendation27Data = {
    article1: "Article #2",
    className: "recommendation-5-1",
};

const recommendation28Data = {
    article1: "Article #3",
    className: "recommendation-5",
};

const posts22Data = {
    className: "posts-5",
    recommendation1Props: recommendation14Data,
    recommendation21Props: recommendation27Data,
    recommendation22Props: recommendation28Data,
};

const xButton15Data = {
    children: "Login",
    className: "button-8-1",
};

const xButton16Data = {
    children: "Wallet",
    className: "button-8",
};

const footer42Data = {
    footerMenu: "/img/-cec-logo@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    snippetOfTheDay: "Snippet of the Day",
    subscribeToGetAccess: "Subscribe to get access",
    image8: "/img/image-8-2@2x.png",
    button1Props: xButton15Data,
    button2Props: xButton16Data,
};

const iPhone12ProMaxData = {
    componentLottieHttpsAssets8Lottiefi: "/img/-component-lottie-https---assets8-lottiefiles-com-packages-lf20--1@2x.png",
    globe: "/img/globe-2@2x.png",
    aSelfTaughtWebDe: <React.Fragment>A self-taught web developer with a passion for e-commerce and blockchain applications. I have a background in Geographic Information Systems, ESRI products and Databases. I have a strong interest in the blockchain space and am currently working on developing a blockchain based e-commerce platform which relies of AWS infrastructures. <br /> <br />I just completed my undergrad at the University of California, Santa Barbara and plan on persuing a certification as a Salesforce Developer and Administrator, with future plans for a Master’s degree in Business (emphasizing in Location Analysis).</React.Fragment>,
    wellRoundedAndHighlyGrounded: "Well-Rounded and Highly-Grounded",
    subscribeToGetAccess: "Subscribe to get access",
    inputType: "email",
    inputPlaceholder: "Enter your email",
    submit: "Submit",
    functionSnippets: <React.Fragment>function snippets() =&gt; {<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Est senectus placerat est sem malesuada interdum.  Morbi at aliquam ac nunc adipiscing ut.<br />}</React.Fragment>,
    snippetOfTheDay: "Snippet of the Day",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    react: "React",
    python: "Python",
    sql: "SQL",
    c1: "C++",
    c2: "C#",
    java: "Java",
    swift: "Swift",
    price: "PHP",
    typescript: "TypeScript",
    name: "Ruby",
    go: "Go",
    place1: "Kotlin",
    place2: "Rust",
    webECommerceDevelopment: "Web & E-commerce Development",
    projectManagement: "Project Management",
    salesforce: "Salesforce",
    fullStack: "Full-Stack",
    gis: "GIS",
    blockchain: "Blockchain",
    pythonScripting: "Python & Scripting",
    apiIntegrations: "API & Integrations",
    cloudDevelopment: "Cloud Development",
    openSourceProjectsContributions: "Open-Source Projects & Contributions",
    eliImg: "/img/-eli-img@2x.png",
    viewMyProfileToS: "View my profile to see more about my work on personal projects and on other initiatives I have contributed to:",
    ifYouHaveAnyCuri: "If you have any curiousities about a possible job, my qualifications or a general question, please fill out the form below. I will respond as soon as I can.",
    spanText1: "Got a question? Fill out the ",
    spanText2: "Query Form",
    spanText3: " below.",
    privateRepositories: "Private Repositories",
    spanText4: <React.Fragment>In order to access my private repositories you must have a token. Learn how to get<br />a token </React.Fragment>,
    spanText5: "here",
    spanText6: " and visit this ",
    spanText7: "article",
    spanText8: " to learn more about the implementation.",
    blockchainNewLogo: "/img/blockchain-new-logo@2x.png",
    buildABitcellAnd: "Build a Bitcell and join the rest of the Metaverse!",
    emailAddress: "Email Address",
    tradentLogo5Transparent2: "/img/tradent-logo5-transparent-2@2x.png",
    weHaveExperienceW: "We have experience with the following blockchains:",
    blockchainBountyHuntingTeamTdto: "Blockchain Bounty Hunting: Team TDTO",
    telegramApp: "/img/twitch-1@2x.png",
    discordNew: "/img/twitch-1@2x.png",
    twitch: "/img/twitch-1@2x.png",
    iconMail: "/img/mail@2x.png",
    linkedin: "/img/linkedin-3@2x.png",
    recommendedMaterial: "Recommended Material",
    aFewOfTheMostRe: "A few of the most recent and relevant articles from my personal news feed:",
    heroInfo2Props: heroInfo22Data,
    iconGithubProps: iconGithub4Data,
    githubLinkProps: githubLink4Data,
    userGithubProps: userGithub4Data,
    buttonSignupProps: buttonSignup4Data,
    bitcoinProps: bitcoin4Data,
    xButtonProps: xButton14Data,
    posts2Props: posts22Data,
    footer42Props: footer42Data,
};

const xButton17Data = {
    children: "Hire Me",
};

const heroInfo4Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-5",
    buttonProps: xButton17Data,
};

const iconGithub5Data = {
    className: "icon-github-5",
};

const githubLink5Data = {
    className: "github-link-5",
};

const userGithub5Data = {
    children: "GitHub Username",
    className: "user-1",
};

const userGithub6Data = {
    children: "Email Address",
    className: "user",
};

const buttonSignup5Data = {
    className: "button-signup-5",
};

const ethereum5Data = {
    className: "ethereum-17",
};

const bitcoin5Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "bitcoin-17",
};

const xButton18Data = {
    children: "Gitcoin",
    className: "button-22",
};

const blockchain24Data = {
    className: "blockchain-9",
    ethereumProps: ethereum5Data,
    ethereumProps2: bitcoin5Data,
    buttonProps: xButton18Data,
};

const recommendation15Data = {
    className: "recommendation-1-5",
};

const recommendation29Data = {
    article1: "Article #2",
    className: "recommendation-6-1",
};

const recommendation210Data = {
    article1: "Article #3",
    className: "recommendation-6",
};

const posts23Data = {
    className: "posts-6",
    recommendation1Props: recommendation15Data,
    recommendation21Props: recommendation29Data,
    recommendation22Props: recommendation210Data,
};

const xButton19Data = {
    children: "Login",
    className: "button-1",
};

const xButton20Data = {
    children: "Wallet",
    className: "button-1",
};

const snippets222Data = {
    className: "snippets-7",
};

const footer52Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    image8: "/img/image-8@1x.png",
    button1Props: xButton19Data,
    button2Props: xButton20Data,
    button1Props2: snippets222Data,
};

const iPadMiniiPad97PortraitData = {
    componentLottieHttpsAssets8Lottiefi: "/img/-component-lottie-https---assets8-lottiefiles-com-packages-lf20--2@1x.png",
    subscribeToGetAccess: "Subscribe to get access",
    inputType: "email",
    inputPlaceholder: "Enter your email",
    submit: "Submit",
    functionSnippets: <React.Fragment>function snippets() =&gt; {<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Est senectus placerat est sem malesuada interdum.  Morbi at aliquam ac nunc adipiscing ut.<br />}</React.Fragment>,
    snippetOfTheDay: "Snippet of the Day",
    viewMyProfileToS: "View my profile to see more about my work on personal projects and on other initiatives I have contributed to:",
    openSourceProjectsContributions: "Open-Source Projects & Contributions",
    eliImg: "/img/-eli-img@2x.png",
    spanText1: "Got a question? Fill out the ",
    spanText2: "Query Form",
    spanText3: " below.",
    ifYouHaveAnyCuri: "If you have any curiousities about a possible job, my qualifications or a general question, please fill out the form below. I will respond as soon as I can.",
    privateRepositories: "Private Repositories",
    spanText4: <React.Fragment>In order to access my private repositories you must have a token. Learn how to get<br />a token </React.Fragment>,
    spanText5: "here",
    spanText6: " and visit this ",
    spanText7: "article",
    spanText8: " to learn more about the implementation.",
    blockchainNewLogo: "/img/blockchain-new-logo@2x.png",
    buildABitcellAnd: "Build a Bitcell and join the rest of the Metaverse!",
    iconMail: "/img/mail@2x.png",
    iconLinkedin: "/img/linkedin@2x.png",
    iconPaper_Plane: "/img/telegram-app@2x.png",
    discordNew: "/img/discord-new@2x.png",
    twitch: "/img/twitch@2x.png",
    recommendedMaterial: "Recommended Material",
    aFewOfTheMostRe: "A few of the most recent and relevant articles from my personal news feed:",
    heroInfoProps: heroInfo4Data,
    iconGithubProps: iconGithub5Data,
    githubLinkProps: githubLink5Data,
    userGithub1Props: userGithub5Data,
    userGithub2Props: userGithub6Data,
    buttonSignupProps: buttonSignup5Data,
    blockchain2Props: blockchain24Data,
    posts2Props: posts23Data,
    footer52Props: footer52Data,
};

const group231Data = {
    number: "300",
};

const group232Data = {
    number: "200",
    className: "group-24",
};

const group233Data = {
    number: "100",
    className: "group-25",
};

const frame121Data = {
    place: "Home",
};

const messages1Data = {
    messages: "Messages",
};

const messages2Data = {
    messages: "Toolboxes",
};

const frame122Data = {
    place: "Cloud",
    className: "frame-23",
};

const dashboardData = {
    welcomeUser_Name: "Welcome {user_name}!",
    hereIsProject_Nam: "Here is {project_name} it is currently in the works",
    searchYourQuery: "Search your query",
    profileImage: "/img/-profile-image@2x.png",
    price1: "$ 102.50",
    totalHours: "Total Hours",
    mar14: "Mar 14",
    price2: "$28",
    worked1: "Worked",
    forecasted1: "Forecasted",
    today: "Today",
    x100Hrs: "100hrs",
    x50Hrs: "50hrs",
    x10Hrs: "10hrs",
    feb: "FEB",
    place: "MAR",
    apr: "APR",
    name: "MAY",
    jun: "JUN",
    jul: "JUL",
    bugsReported: "Bugs Reported",
    thisMonth: "This month",
    reported: "Reported",
    x10K: "10K",
    fixed: "Fixed",
    x4K: "4K",
    developerActivity: "Developer Activity",
    thisWeek: "This week",
    spanText1: "00",
    spanText2: "0",
    m: "M",
    t: "T",
    w: "W",
    th: "Th",
    f: "F",
    price3: "S",
    newTicket: "/img/new-ticket@2x.png",
    number: "300",
    ticketsCreated: "Tickets Created",
    price4: "$660.00",
    totalEarned: "Total Earned",
    upcomingStatusMeeting: "Upcoming Status Meeting",
    x12ThAug2022: "12th Aug, 2022",
    x9_Pragmatica_3D_Metal_Calendar: "/img/9-pragmatica-3d-metal-calendar@2x.png",
    sendRsvp: "Send RSVP",
    spanText3: "Digit",
    spanText4: "X",
    forecast: "Forecast",
    developers: "Developers",
    directories: "Directories",
    settings: "Settings",
    group231Props: group231Data,
    group232Props: group232Data,
    group233Props: group233Data,
    frame121Props: frame121Data,
    messages1Props: messages1Data,
    messages2Props: messages2Data,
    frame122Props: frame122Data,
};

const navbar2Data = {
    dashboardLayout: "/img/dashboard-layout@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
};

const xButton21Data = {
    children: "Hire Me",
};

const heroInfo5Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    buttonProps: xButton21Data,
};

const hero222Data = {
    heroInfoProps: heroInfo5Data,
};

const snippets1Data = {
    className: "",
};

const aboutMe1Data = {
    snippetsProps2: snippets1Data,
};

const userGithub7Data = {
    children: "GitHub Username",
};

const bitcellSignup3Data = {
    userGithubProps: userGithub7Data,
};

const bitcellular23Data = {
    bitcellSignupProps: bitcellSignup3Data,
};

const bitcellular52Data = {
    bitcellular2Props: bitcellular23Data,
};

const ethereum6Data = {
    className: "",
};

const bitcoin6Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "",
};

const xButton22Data = {
    children: "Gitcoin",
    className: "button-3-1",
};

const blockchain25Data = {
    ethereumProps: ethereum6Data,
    ethereumProps2: bitcoin6Data,
    buttonProps: xButton22Data,
};

const blockchain42Data = {
    blockchain2Props: blockchain25Data,
};

const recommendation16Data = {
    className: "",
};

const recommendation211Data = {
    article1: "Article #2",
    className: "recommendation-3-2",
};

const recommendation212Data = {
    article1: "Article #3",
    className: "recommendation-3-1",
};

const posts4Data = {
    className: "",
    recommendation1Props: recommendation16Data,
    recommendation21Props: recommendation211Data,
    recommendation22Props: recommendation212Data,
};

const recommendedMaterial32Data = {
    postsProps2: posts4Data,
};

const xButton23Data = {
    children: "Login",
    className: "button-4",
};

const xButton24Data = {
    children: "Wallet",
    className: "button-5",
};

const footerMenu3Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "",
    button1Props: xButton23Data,
    button2Props: xButton24Data,
};

const xFooter2Data = {
    image8: "/img/image-8@1x.png",
    footerMenuProps: footerMenu3Data,
};

const buttonLogin5Data = {
    className: "button-login",
};

const buttonWallet5Data = {
    className: "button-wallet",
};

const links2Data = {
    buttonLoginProps: buttonLogin5Data,
    buttonWalletProps: buttonWallet5Data,
};

const navbar222Data = {
    dashboardLayout: "/img/dashboard-layout@2x.png",
    linksProps: links2Data,
};

const xButton25Data = {
    children: "Hire Me",
};

const heroInfo6Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    buttonProps: xButton25Data,
};

const hero2Data = {
    heroInfoProps: heroInfo6Data,
};

const aboutMe224Data = {
    className: "about-me-4",
};

const snippets2Data = {
    className: "snippets-18",
};

const openSource4Data = {
    className: "open-source-5",
};

const openSourceContribution2Data = {
    openSourceProps: openSource4Data,
};

const text5Data = {
    className: "text-4",
};

const hireMeData = {
    textProps: text5Data,
};

const privateRepositories24Data = {
    className: "private-repositories-8",
};

const privateRepositories3Data = {
    privateRepositories2Props: privateRepositories24Data,
};

const userGithub8Data = {
    children: "GitHub Username",
};

const bitcellSignup4Data = {
    userGithubProps: userGithub8Data,
};

const bitcellular24Data = {
    className: "bitcellular-5",
    bitcellSignupProps: bitcellSignup4Data,
};

const bitcellular3Data = {
    bitcellular2Props: bitcellular24Data,
};

const ethereum7Data = {
    className: "ethereum-9",
};

const bitcoin7Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "bitcoin-9",
};

const xButton26Data = {
    children: "Gitcoin",
    className: "button-3-2",
};

const blockchain26Data = {
    className: "blockchain-10",
    ethereumProps: ethereum7Data,
    ethereumProps2: bitcoin7Data,
    buttonProps: xButton26Data,
};

const blockchain3Data = {
    blockchain2Props: blockchain26Data,
};

const icons4Data = {
    className: "icons-3",
};

const socials2Data = {
    iconsProps: icons4Data,
};

const text25Data = {
    className: "text-10",
};

const recommendation17Data = {
    className: "recommendation-1",
};

const recommendation213Data = {
    article1: "Article #2",
    className: "recommendation-3-3",
};

const recommendation214Data = {
    article1: "Article #3",
    className: "recommendation-3-4",
};

const posts5Data = {
    className: "posts-3",
    recommendation1Props: recommendation17Data,
    recommendation21Props: recommendation213Data,
    recommendation22Props: recommendation214Data,
};

const recommendedMaterial2Data = {
    postsProps: text25Data,
    postsProps2: posts5Data,
};

const xButton27Data = {
    children: "Login",
    className: "button-23",
};

const xButton28Data = {
    children: "Wallet",
    className: "button-5",
};

const footerMenu22Data = {
    xButton1Props: xButton27Data,
    xButton2Props: xButton28Data,
};

const footer22Data = {
    cecLogo: "/img/image-8@1x.png",
    github: "Snippet of the Day",
    hireMe: "Subscribe to get access",
    button1Props: footerMenu22Data,
};

const buttonLogin6Data = {
    className: "button-login",
};

const buttonWallet6Data = {
    className: "button-wallet",
};

const links3Data = {
    buttonLoginProps: buttonLogin6Data,
    buttonWalletProps: buttonWallet6Data,
};

const navbar6Data = {
    dashboardLayout: "/img/dashboard-layout@2x.png",
    linksProps: links3Data,
};

const skills43Data = {
    className: "skills",
};

const openSourceContribution33Data = {
    className: "open-source-contribution",
};

const hireMe42Data = {
    className: "hire-me-36",
};

const privateRepositories43Data = {
    className: "private-repositories",
};

const userGithub9Data = {
    children: "GitHub Username",
};

const bitcellSignup5Data = {
    userGithubProps: userGithub9Data,
};

const bitcellular25Data = {
    bitcellSignupProps: bitcellSignup5Data,
};

const bitcellular53Data = {
    className: "bitcellular",
    bitcellular2Props: bitcellular25Data,
};

const ethereum8Data = {
    className: "ethereum-12",
};

const bitcoin8Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "bitcoin-3",
};

const xButton29Data = {
    children: "Gitcoin",
    className: "button-3-3",
};

const blockchain27Data = {
    ethereumProps: ethereum8Data,
    ethereumProps2: bitcoin8Data,
    buttonProps: xButton29Data,
};

const blockchain43Data = {
    className: "blockchain-3",
    blockchain2Props: blockchain27Data,
};

const recommendation18Data = {
    className: "recommendation-1",
};

const recommendation215Data = {
    article1: "Article #2",
    className: "recommendation-3-2",
};

const xButton30Data = {
    children: "Login",
    className: "button-4",
};

const xButton31Data = {
    children: "Wallet",
    className: "button-5",
};

const footerMenu4Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "footer-menu",
    button1Props: xButton30Data,
    button2Props: xButton31Data,
};

const xFooter3Data = {
    image8: "/img/image-8@1x.png",
    className: "footer-6",
    footerMenuProps: footerMenu4Data,
};

const buttonLogin7Data = {
    className: "button-login-1",
};

const buttonWallet7Data = {
    className: "button-wallet-1",
};

const xButton32Data = {
    children: "Hire Me",
};

const heroInfo7Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-1",
    buttonProps: xButton32Data,
};

const snippets3Data = {
    className: "snippets-17",
};

const aboutMe2Data = {
    className: "about-me-19",
    snippetsProps2: snippets3Data,
};

const skills44Data = {
    className: "skills",
};

const openSourceContribution34Data = {
    className: "open-source-contribution",
};

const hireMe43Data = {
    className: "hire-me-36",
};

const privateRepositories44Data = {
    className: "private-repositories",
};

const userGithub10Data = {
    children: "GitHub Username",
};

const bitcellSignup6Data = {
    userGithubProps: userGithub10Data,
};

const bitcellular26Data = {
    bitcellSignupProps: bitcellSignup6Data,
};

const bitcellular54Data = {
    className: "bitcellular",
    bitcellular2Props: bitcellular26Data,
};

const ethereum9Data = {
    className: "ethereum-3",
};

const bitcoin9Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "bitcoin-12",
};

const xButton33Data = {
    children: "Gitcoin",
    className: "button-3-4",
};

const blockchain28Data = {
    ethereumProps: ethereum9Data,
    ethereumProps2: bitcoin9Data,
    buttonProps: xButton33Data,
};

const blockchain44Data = {
    className: "blockchain-3",
    blockchain2Props: blockchain28Data,
};

const socials33Data = {
    className: "socials",
};

const recommendation19Data = {
    className: "recommendation-1",
};

const recommendation216Data = {
    article1: "Article #2",
    className: "recommendation-3-2",
};

const recommendation217Data = {
    article1: "Article #3",
    className: "recommendation-3-5",
};

const posts6Data = {
    className: "posts",
    recommendation1Props: recommendation19Data,
    recommendation21Props: recommendation216Data,
    recommendation22Props: recommendation217Data,
};

const recommendedMaterial33Data = {
    className: "recommended-material",
    postsProps2: posts6Data,
};

const xButton34Data = {
    children: "Login",
    className: "button-4",
};

const xButton35Data = {
    children: "Wallet",
    className: "button-5",
};

const footerMenu5Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "footer-menu",
    button1Props: xButton34Data,
    button2Props: xButton35Data,
};

const xFooter4Data = {
    image8: "/img/image-8@1x.png",
    className: "footer-7",
    footerMenuProps: footerMenu5Data,
};

const buttonLogin8Data = {
    className: "button-login-1",
};

const buttonWallet8Data = {
    className: "button-wallet-1",
};

const xButton36Data = {
    children: "Hire Me",
};

const heroInfo8Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-1",
    buttonProps: xButton36Data,
};

const snippets4Data = {
    className: "snippets-17",
};

const aboutMe3Data = {
    className: "about-me-19",
    snippetsProps2: snippets4Data,
};

const skills45Data = {
    className: "skills",
};

const openSourceContribution35Data = {
    className: "open-source-contribution",
};

const hireMe44Data = {
    className: "hire-me-36",
};

const privateRepositories45Data = {
    className: "private-repositories",
};

const userGithub11Data = {
    children: "GitHub Username",
};

const bitcellSignup7Data = {
    userGithubProps: userGithub11Data,
};

const bitcellular27Data = {
    bitcellSignupProps: bitcellSignup7Data,
};

const bitcellular55Data = {
    className: "bitcellular",
    bitcellular2Props: bitcellular27Data,
};

const ethereum10Data = {
    className: "",
};

const bitcoin10Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "",
};

const xButton37Data = {
    children: "Gitcoin",
    className: "button-3-5",
};

const blockchain29Data = {
    ethereumProps: ethereum10Data,
    ethereumProps2: bitcoin10Data,
    buttonProps: xButton37Data,
};

const blockchain45Data = {
    className: "blockchain-3",
    blockchain2Props: blockchain29Data,
};

const socials34Data = {
    className: "socials",
};

const recommendation110Data = {
    className: "recommendation-1",
};

const recommendation218Data = {
    article1: "Article #2",
    className: "recommendation-3-2",
};

const recommendation219Data = {
    article1: "Article #3",
    className: "recommendation-3-6",
};

const posts7Data = {
    className: "posts",
    recommendation1Props: recommendation110Data,
    recommendation21Props: recommendation218Data,
    recommendation22Props: recommendation219Data,
};

const recommendedMaterial34Data = {
    className: "recommended-material",
    postsProps2: posts7Data,
};

const xButton38Data = {
    children: "Login",
    className: "button-4",
};

const xButton39Data = {
    children: "Wallet",
    className: "button-5",
};

const footerMenu6Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "footer-menu",
    button1Props: xButton38Data,
    button2Props: xButton39Data,
};

const xFooter5Data = {
    image8: "/img/image-8@1x.png",
    className: "footer-8",
    footerMenuProps: footerMenu6Data,
};

const buttonLogin9Data = {
    className: "button-login-1",
};

const buttonWallet9Data = {
    className: "button-wallet-1",
};

const xButton40Data = {
    children: "Hire Me",
};

const heroInfo9Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-1",
    buttonProps: xButton40Data,
};

const snippets5Data = {
    className: "snippets-17",
};

const aboutMe4Data = {
    className: "about-me-19",
    snippetsProps2: snippets5Data,
};

const skills46Data = {
    className: "skills",
};

const openSourceContribution36Data = {
    className: "open-source-contribution",
};

const hireMe45Data = {
    className: "hire-me-36",
};

const privateRepositories46Data = {
    className: "private-repositories",
};

const userGithub12Data = {
    children: "GitHub Username",
};

const bitcellSignup8Data = {
    userGithubProps: userGithub12Data,
};

const bitcellular28Data = {
    bitcellSignupProps: bitcellSignup8Data,
};

const bitcellular56Data = {
    className: "bitcellular",
    bitcellular2Props: bitcellular28Data,
};

const ethereum11Data = {
    className: "ethereum-20",
};

const bitcoin11Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "bitcoin-18",
};

const xButton41Data = {
    children: "Gitcoin",
    className: "button-3-6",
};

const blockchain210Data = {
    ethereumProps: ethereum11Data,
    ethereumProps2: bitcoin11Data,
    buttonProps: xButton41Data,
};

const blockchain46Data = {
    className: "blockchain-3",
    blockchain2Props: blockchain210Data,
};

const recommendation111Data = {
    className: "recommendation-1",
};

const recommendation220Data = {
    article1: "Article #2",
    className: "recommendation-3-2",
};

const xButton42Data = {
    children: "Login",
    className: "button-4",
};

const xButton43Data = {
    children: "Wallet",
    className: "button-5",
};

const footerMenu7Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "footer-menu",
    button1Props: xButton42Data,
    button2Props: xButton43Data,
};

const xFooter6Data = {
    image8: "/img/image-8@1x.png",
    className: "footer-9",
    footerMenuProps: footerMenu7Data,
};

const xButton44Data = {
    children: "Hire Me",
};

const heroInfo10Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-6",
    buttonProps: xButton44Data,
};

const skills322Data = {
    className: "skills-9",
};

const privateRepositories47Data = {
    className: "private-repositories",
};

const userGithub13Data = {
    children: "GitHub Username",
};

const bitcellSignup9Data = {
    userGithubProps: userGithub13Data,
};

const ethereum12Data = {
    className: "ethereum-21",
};

const xButton45Data = {
    children: "Gitcoin",
    className: "button-3-7",
};

const recommendation112Data = {
    className: "recommendation-1",
};

const xButton46Data = {
    children: "Login",
    className: "button-4",
};

const xButton47Data = {
    children: "Wallet",
    className: "button-5",
};

const footer6Data = {
    cecLogo: "/img/-cec-logo-15@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    image8: "/img/image-8@1x.png",
    snippetOfTheDay: "Snippet of the Day",
    subscribeToGetAccess: "Subscribe to get access",
    button1Props: xButton46Data,
    button2Props: xButton47Data,
};

const buttonLogin10Data = {
    className: "button-login-1",
};

const buttonWallet10Data = {
    className: "button-wallet-1",
};

const xButton48Data = {
    children: "Hire Me",
};

const heroInfo11Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-1",
    buttonProps: xButton48Data,
};

const hero31Data = {
    frame: "/img/frame-11@1x.png",
    heroInfoProps: heroInfo11Data,
};

const snippets6Data = {
    className: "snippets-17",
};

const aboutMe5Data = {
    className: "about-me-19",
    snippetsProps2: snippets6Data,
};

const skills47Data = {
    className: "skills",
};

const openSourceContribution37Data = {
    className: "open-source-contribution",
};

const hireMe46Data = {
    className: "hire-me-36",
};

const privateRepositories48Data = {
    className: "private-repositories",
};

const userGithub14Data = {
    children: "GitHub Username",
};

const bitcellSignup10Data = {
    userGithubProps: userGithub14Data,
};

const bitcellular29Data = {
    bitcellSignupProps: bitcellSignup10Data,
};

const bitcellular57Data = {
    className: "bitcellular",
    bitcellular2Props: bitcellular29Data,
};

const ethereum13Data = {
    className: "ethereum-22",
};

const bitcoin12Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "bitcoin-20",
};

const xButton49Data = {
    children: "Gitcoin",
    className: "button-3-8",
};

const blockchain211Data = {
    ethereumProps: ethereum13Data,
    ethereumProps2: bitcoin12Data,
    buttonProps: xButton49Data,
};

const blockchain47Data = {
    className: "blockchain-3",
    blockchain2Props: blockchain211Data,
};

const recommendation113Data = {
    className: "recommendation-1",
};

const recommendation221Data = {
    article1: "Article #2",
    className: "recommendation-3-2",
};

const xButton50Data = {
    children: "Login",
    className: "button-4",
};

const xButton51Data = {
    children: "Wallet",
    className: "button-5",
};

const footerMenu8Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "footer-menu",
    button1Props: xButton50Data,
    button2Props: xButton51Data,
};

const xFooter7Data = {
    image8: "/img/image-8@1x.png",
    className: "footer-10",
    footerMenuProps: footerMenu8Data,
};

const buttonLogin11Data = {
    className: "button-login-1",
};

const buttonWallet11Data = {
    className: "button-wallet-1",
};

const xButton52Data = {
    children: "Hire Me",
};

const heroInfo12Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-1",
    buttonProps: xButton52Data,
};

const snippets7Data = {
    className: "snippets-17",
};

const aboutMe6Data = {
    className: "about-me-19",
    snippetsProps2: snippets7Data,
};

const skills48Data = {
    className: "skills",
};

const openSourceContribution38Data = {
    className: "open-source-contribution",
};

const privateRepositories49Data = {
    className: "private-repositories",
};

const userGithub15Data = {
    children: "GitHub Username",
};

const bitcellSignup11Data = {
    userGithubProps: userGithub15Data,
};

const bitcellular210Data = {
    bitcellSignupProps: bitcellSignup11Data,
};

const bitcellular58Data = {
    className: "bitcellular",
    bitcellular2Props: bitcellular210Data,
};

const ethereum14Data = {
    className: "ethereum-23",
};

const xButton53Data = {
    children: "Gitcoin",
    className: "button-3-9",
};

const recommendation114Data = {
    className: "recommendation-1",
};

const xButton54Data = {
    children: "Login",
    className: "button-4",
};

const xButton55Data = {
    children: "Wallet",
    className: "button-5",
};

const footerMenu9Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "footer-menu",
    button1Props: xButton54Data,
    button2Props: xButton55Data,
};

const xFooter8Data = {
    image8: "/img/image-8@1x.png",
    className: "footer-11",
    footerMenuProps: footerMenu9Data,
};

const buttonLogin12Data = {
    className: "button-login-1",
};

const buttonWallet12Data = {
    className: "button-wallet-1",
};

const xButton56Data = {
    children: "Hire Me",
};

const heroInfo13Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-1",
    buttonProps: xButton56Data,
};

const snippets8Data = {
    className: "snippets-17",
};

const aboutMe7Data = {
    className: "about-me-19",
    snippetsProps2: snippets8Data,
};

const skills49Data = {
    className: "skills",
};

const openSourceContribution39Data = {
    className: "open-source-contribution",
};

const hireMe47Data = {
    className: "hire-me-36",
};

const privateRepositories410Data = {
    className: "private-repositories",
};

const userGithub16Data = {
    children: "GitHub Username",
};

const bitcellSignup12Data = {
    userGithubProps: userGithub16Data,
};

const bitcellular211Data = {
    bitcellSignupProps: bitcellSignup12Data,
};

const bitcellular59Data = {
    className: "bitcellular",
    bitcellular2Props: bitcellular211Data,
};

const ethereum15Data = {
    className: "ethereum-24",
};

const bitcoin13Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "bitcoin-21",
};

const xButton57Data = {
    children: "Gitcoin",
    className: "button-3-10",
};

const blockchain212Data = {
    ethereumProps: ethereum15Data,
    ethereumProps2: bitcoin13Data,
    buttonProps: xButton57Data,
};

const blockchain48Data = {
    className: "blockchain-3",
    blockchain2Props: blockchain212Data,
};

const recommendation115Data = {
    className: "recommendation-1",
};

const recommendation222Data = {
    article1: "Article #2",
    className: "recommendation-3-2",
};

const xButton58Data = {
    children: "Login",
    className: "button-4",
};

const xButton59Data = {
    children: "Wallet",
    className: "button-5",
};

const footerMenu10Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "footer-menu",
    button1Props: xButton58Data,
    button2Props: xButton59Data,
};

const xFooter9Data = {
    image8: "/img/image-8@1x.png",
    className: "footer-12",
    footerMenuProps: footerMenu10Data,
};

const buttonLogin13Data = {
    className: "button-login-1",
};

const buttonWallet13Data = {
    className: "button-wallet-1",
};

const xButton60Data = {
    children: "Hire Me",
};

const heroInfo14Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-1",
    buttonProps: xButton60Data,
};

const hero32Data = {
    frame: "/img/frame-8@1x.png",
    heroInfoProps: heroInfo14Data,
};

const snippets9Data = {
    className: "snippets-17",
};

const aboutMe8Data = {
    className: "about-me-19",
    snippetsProps2: snippets9Data,
};

const skills410Data = {
    className: "skills",
};

const openSourceContribution310Data = {
    className: "open-source-contribution",
};

const hireMe48Data = {
    className: "hire-me-36",
};

const privateRepositories411Data = {
    className: "private-repositories",
};

const userGithub17Data = {
    children: "GitHub Username",
};

const bitcellSignup13Data = {
    userGithubProps: userGithub17Data,
};

const bitcellular212Data = {
    bitcellSignupProps: bitcellSignup13Data,
};

const bitcellular510Data = {
    className: "bitcellular",
    bitcellular2Props: bitcellular212Data,
};

const ethereum16Data = {
    className: "ethereum-25",
};

const bitcoin14Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "bitcoin-22",
};

const xButton61Data = {
    children: "Gitcoin",
    className: "button-3-11",
};

const blockchain213Data = {
    ethereumProps: ethereum16Data,
    ethereumProps2: bitcoin14Data,
    buttonProps: xButton61Data,
};

const blockchain49Data = {
    className: "blockchain-3",
    blockchain2Props: blockchain213Data,
};

const recommendation116Data = {
    className: "recommendation-1",
};

const recommendation223Data = {
    article1: "Article #2",
    className: "recommendation-3-2",
};

const xButton62Data = {
    children: "Login",
    className: "button-4",
};

const xButton63Data = {
    children: "Wallet",
    className: "button-5",
};

const footerMenu11Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "footer-menu",
    button1Props: xButton62Data,
    button2Props: xButton63Data,
};

const xFooter10Data = {
    image8: "/img/image-8@1x.png",
    className: "footer-13",
    footerMenuProps: footerMenu11Data,
};

const buttonLogin14Data = {
    className: "button-login-1",
};

const buttonWallet14Data = {
    className: "button-wallet-1",
};

const xButton64Data = {
    children: "Hire Me",
};

const heroInfo15Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-1",
    buttonProps: xButton64Data,
};

const hero41Data = {
    frame: "/img/frame-7@1x.png",
    heroInfoProps: heroInfo15Data,
};

const snippets10Data = {
    className: "snippets-17",
};

const aboutMe9Data = {
    className: "about-me-19",
    snippetsProps2: snippets10Data,
};

const skills411Data = {
    className: "skills",
};

const openSourceContribution311Data = {
    className: "open-source-contribution",
};

const hireMe49Data = {
    className: "hire-me-36",
};

const privateRepositories412Data = {
    className: "private-repositories",
};

const userGithub18Data = {
    children: "GitHub Username",
};

const bitcellSignup14Data = {
    userGithubProps: userGithub18Data,
};

const bitcellular213Data = {
    bitcellSignupProps: bitcellSignup14Data,
};

const bitcellular511Data = {
    className: "bitcellular",
    bitcellular2Props: bitcellular213Data,
};

const ethereum17Data = {
    className: "ethereum-26",
};

const bitcoin15Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "bitcoin-23",
};

const xButton65Data = {
    children: "Gitcoin",
    className: "button-3-12",
};

const blockchain214Data = {
    ethereumProps: ethereum17Data,
    ethereumProps2: bitcoin15Data,
    buttonProps: xButton65Data,
};

const blockchain410Data = {
    className: "blockchain-3",
    blockchain2Props: blockchain214Data,
};

const recommendation117Data = {
    className: "recommendation-1",
};

const recommendation224Data = {
    article1: "Article #2",
    className: "recommendation-3-2",
};

const recommendation225Data = {
    article1: "Article #3",
    className: "recommendation-3-7",
};

const posts8Data = {
    className: "posts",
    recommendation1Props: recommendation117Data,
    recommendation21Props: recommendation224Data,
    recommendation22Props: recommendation225Data,
};

const recommendedMaterial35Data = {
    className: "recommended-material",
    postsProps2: posts8Data,
};

const xButton66Data = {
    children: "Login",
    className: "button-4",
};

const xButton67Data = {
    children: "Wallet",
    className: "button-5",
};

const footerMenu12Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "footer-menu",
    button1Props: xButton66Data,
    button2Props: xButton67Data,
};

const xFooter11Data = {
    image8: "/img/image-8@1x.png",
    className: "footer-14",
    footerMenuProps: footerMenu12Data,
};

const buttonLogin15Data = {
    className: "button-login-1",
};

const buttonWallet15Data = {
    className: "button-wallet-1",
};

const xButton68Data = {
    children: "Hire Me",
};

const heroInfo16Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-1",
    buttonProps: xButton68Data,
};

const snippets11Data = {
    className: "snippets-17",
};

const aboutMe10Data = {
    className: "about-me-19",
    snippetsProps2: snippets11Data,
};

const skills412Data = {
    className: "skills",
};

const openSourceContribution312Data = {
    className: "open-source-contribution",
};

const privateRepositories413Data = {
    className: "private-repositories",
};

const userGithub19Data = {
    children: "GitHub Username",
};

const bitcellSignup15Data = {
    userGithubProps: userGithub19Data,
};

const bitcellular214Data = {
    bitcellSignupProps: bitcellSignup15Data,
};

const bitcellular512Data = {
    className: "bitcellular",
    bitcellular2Props: bitcellular214Data,
};

const ethereum18Data = {
    className: "ethereum-27",
};

const bitcoin16Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "bitcoin-24",
};

const xButton69Data = {
    children: "Gitcoin",
    className: "button-3-13",
};

const blockchain215Data = {
    ethereumProps: ethereum18Data,
    ethereumProps2: bitcoin16Data,
    buttonProps: xButton69Data,
};

const blockchain411Data = {
    className: "blockchain-3",
    blockchain2Props: blockchain215Data,
};

const recommendation118Data = {
    className: "recommendation-1",
};

const recommendation226Data = {
    article1: "Article #2",
    className: "recommendation-3-2",
};

const xButton70Data = {
    children: "Login",
    className: "button-4",
};

const xButton71Data = {
    children: "Wallet",
    className: "button-5",
};

const footerMenu13Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "footer-menu",
    button1Props: xButton70Data,
    button2Props: xButton71Data,
};

const xFooter12Data = {
    image8: "/img/image-8@1x.png",
    className: "footer-15",
    footerMenuProps: footerMenu13Data,
};

const buttonLogin16Data = {
    className: "button-login-1",
};

const buttonWallet16Data = {
    className: "button-wallet-1",
};

const xButton72Data = {
    children: "Hire Me",
};

const heroInfo17Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-1",
    buttonProps: xButton72Data,
};

const snippets12Data = {
    className: "snippets-17",
};

const aboutMe11Data = {
    className: "about-me-19",
    snippetsProps2: snippets12Data,
};

const skills413Data = {
    className: "skills",
};

const openSourceContribution313Data = {
    className: "open-source-contribution",
};

const hireMe410Data = {
    className: "hire-me-36",
};

const privateRepositories414Data = {
    className: "private-repositories",
};

const userGithub20Data = {
    children: "GitHub Username",
};

const bitcellSignup16Data = {
    userGithubProps: userGithub20Data,
};

const bitcellular215Data = {
    bitcellSignupProps: bitcellSignup16Data,
};

const bitcellular513Data = {
    className: "bitcellular",
    bitcellular2Props: bitcellular215Data,
};

const ethereum19Data = {
    className: "ethereum-28",
};

const bitcoin17Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "bitcoin-25",
};

const xButton73Data = {
    children: "Gitcoin",
    className: "button-3-14",
};

const blockchain216Data = {
    ethereumProps: ethereum19Data,
    ethereumProps2: bitcoin17Data,
    buttonProps: xButton73Data,
};

const blockchain412Data = {
    className: "blockchain-3",
    blockchain2Props: blockchain216Data,
};

const socials35Data = {
    className: "socials",
};

const recommendation119Data = {
    className: "recommendation-1",
};

const recommendation227Data = {
    article1: "Article #2",
    className: "recommendation-3-2",
};

const recommendation228Data = {
    article1: "Article #3",
    className: "recommendation-3-8",
};

const posts9Data = {
    className: "posts",
    recommendation1Props: recommendation119Data,
    recommendation21Props: recommendation227Data,
    recommendation22Props: recommendation228Data,
};

const recommendedMaterial36Data = {
    className: "recommended-material",
    postsProps2: posts9Data,
};

const xButton74Data = {
    children: "Login",
    className: "button-4",
};

const xButton75Data = {
    children: "Wallet",
    className: "button-5",
};

const footerMenu14Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "footer-menu",
    button1Props: xButton74Data,
    button2Props: xButton75Data,
};

const xFooter13Data = {
    image8: "/img/image-8@1x.png",
    className: "footer-16",
    footerMenuProps: footerMenu14Data,
};

const buttonLogin17Data = {
    className: "button-login-1",
};

const buttonWallet17Data = {
    className: "button-wallet-1",
};

const xButton76Data = {
    children: "Hire Me",
};

const heroInfo18Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-1",
    buttonProps: xButton76Data,
};

const snippets13Data = {
    className: "snippets-17",
};

const aboutMe12Data = {
    className: "about-me-19",
    snippetsProps2: snippets13Data,
};

const skills414Data = {
    className: "skills",
};

const openSourceContribution314Data = {
    className: "open-source-contribution",
};

const privateRepositories415Data = {
    className: "private-repositories",
};

const userGithub21Data = {
    children: "GitHub Username",
};

const bitcellSignup17Data = {
    userGithubProps: userGithub21Data,
};

const bitcellular216Data = {
    bitcellSignupProps: bitcellSignup17Data,
};

const bitcellular514Data = {
    className: "bitcellular",
    bitcellular2Props: bitcellular216Data,
};

const ethereum20Data = {
    className: "ethereum-29",
};

const bitcoin18Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "bitcoin-26",
};

const xButton77Data = {
    children: "Gitcoin",
    className: "button-3-15",
};

const blockchain217Data = {
    ethereumProps: ethereum20Data,
    ethereumProps2: bitcoin18Data,
    buttonProps: xButton77Data,
};

const blockchain413Data = {
    className: "blockchain-3",
    blockchain2Props: blockchain217Data,
};

const recommendation120Data = {
    className: "recommendation-1",
};

const recommendation229Data = {
    article1: "Article #2",
    className: "recommendation-3-2",
};

const xButton78Data = {
    children: "Login",
    className: "button-4",
};

const xButton79Data = {
    children: "Wallet",
    className: "button-5",
};

const footerMenu15Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "footer-menu",
    button1Props: xButton78Data,
    button2Props: xButton79Data,
};

const xFooter14Data = {
    image8: "/img/image-8@1x.png",
    className: "footer-17",
    footerMenuProps: footerMenu15Data,
};

const buttonLogin18Data = {
    className: "button-login-1",
};

const buttonWallet18Data = {
    className: "button-wallet-1",
};

const xButton80Data = {
    children: "Hire Me",
};

const heroInfo19Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-1",
    buttonProps: xButton80Data,
};

const hero42Data = {
    frame: "/img/frame-3@1x.png",
    className: "hero-15",
    heroInfoProps: heroInfo19Data,
};

const snippets14Data = {
    className: "snippets-17",
};

const aboutMe13Data = {
    className: "about-me-19",
    snippetsProps2: snippets14Data,
};

const skills415Data = {
    className: "skills",
};

const openSourceContribution315Data = {
    className: "open-source-contribution",
};

const hireMe411Data = {
    className: "hire-me-36",
};

const privateRepositories416Data = {
    className: "private-repositories",
};

const userGithub22Data = {
    children: "GitHub Username",
};

const bitcellSignup18Data = {
    userGithubProps: userGithub22Data,
};

const bitcellular217Data = {
    bitcellSignupProps: bitcellSignup18Data,
};

const bitcellular515Data = {
    className: "bitcellular",
    bitcellular2Props: bitcellular217Data,
};

const ethereum21Data = {
    className: "ethereum",
};

const bitcoin19Data = {
    bitcoin1: "/img/bitcoin@2x.png",
    className: "bitcoin",
};

const xButton81Data = {
    children: "Gitcoin",
    className: "button-3-16",
};

const blockchain218Data = {
    ethereumProps: ethereum21Data,
    ethereumProps2: bitcoin19Data,
    buttonProps: xButton81Data,
};

const blockchain414Data = {
    className: "blockchain-3",
    blockchain2Props: blockchain218Data,
};

const recommendation121Data = {
    className: "recommendation-1",
};

const recommendation230Data = {
    article1: "Article #2",
    className: "recommendation-3-2",
};

const recommendation231Data = {
    article1: "Article #3",
    className: "recommendation-3",
};

const posts10Data = {
    className: "posts",
    recommendation1Props: recommendation121Data,
    recommendation21Props: recommendation230Data,
    recommendation22Props: recommendation231Data,
};

const recommendedMaterial37Data = {
    className: "recommended-material",
    postsProps2: posts10Data,
};

const xButton82Data = {
    children: "Login",
    className: "button-4",
};

const xButton83Data = {
    children: "Wallet",
    className: "button-5",
};

const footerMenu16Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "footer-menu",
    button1Props: xButton82Data,
    button2Props: xButton83Data,
};

const xFooter15Data = {
    image8: "/img/image-8@1x.png",
    className: "footer",
    footerMenuProps: footerMenu16Data,
};

const navbar423Data = {
    className: "navbar-6",
};

const xButton84Data = {
    children: "Hire Me",
    className: "button-24",
};

const heroInfo32Data = {
    name: "Elias Estrada",
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    buttonProps: xButton84Data,
};

const snippets15Data = {
    className: "snippets-17",
};

const skills416Data = {
    className: "skills-1",
};

const text20Data = {
    className: "text-1",
};

const userGithub23Data = {
    children: "GitHub Username",
};

const bitcellSignup19Data = {
    userGithubProps: userGithub23Data,
};

const blockchainsText21Data = {
    className: "blockchains-text-1",
};

const xButton85Data = {
    children: "Gitcoin",
    className: "button-3-17",
};

const recommendation122Data = {
    className: "recommendation-1",
};

const recommendation2321Data = {
    article1: "Article #2",
};

const recommendation2322Data = {
    article1: "Article #3",
    className: "recommendation-9",
};

const xButton86Data = {
    children: "Login",
    className: "button-6",
};

const xButton87Data = {
    children: "Wallet",
    className: "button-7",
};

const footer7Data = {
    cecLogo: "/img/twitch-1@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    image8: "/img/image-8-16@1x.png",
    snippetOfTheDay: "Snippet of the Day",
    subscribeToGetAccess: "Subscribe to get access",
    button1Props: xButton86Data,
    button2Props: xButton87Data,
};

const buttonLogin19Data = {
    className: "button-login-1",
};

const buttonWallet19Data = {
    className: "button-wallet-1",
};

const xButton88Data = {
    children: "Hire Me",
};

const heroInfo20Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-1",
    buttonProps: xButton88Data,
};

const snippets16Data = {
    className: "snippets-17",
};

const skills417Data = {
    className: "skills-1",
};

const text21Data = {
    className: "text-1",
};

const userGithub24Data = {
    children: "GitHub Username",
};

const bitcellSignup20Data = {
    userGithubProps: userGithub24Data,
};

const blockchainsText22Data = {
    className: "blockchains-text-1",
};

const xButton89Data = {
    children: "Gitcoin",
    className: "button-3-18",
};

const recommendation2421Data = {
    article1: "Article #2",
};

const recommendation2422Data = {
    article1: "Article #3",
    className: "recommendation-10",
};

const xButton90Data = {
    children: "Login",
    className: "button-6",
};

const xButton91Data = {
    children: "Wallet",
    className: "button-7",
};

const footer8Data = {
    cecLogo: "/img/twitch-1@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    image8: "/img/image-8-17@1x.png",
    snippetOfTheDay: "Snippet of the Day",
    subscribeToGetAccess: "Subscribe to get access",
    button1Props: xButton90Data,
    button2Props: xButton91Data,
};

const buttonLogin20Data = {
    className: "button-login-1",
};

const buttonWallet20Data = {
    className: "button-wallet-1",
};

const xButton92Data = {
    children: "Hire Me",
};

const heroInfo21Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-1",
    buttonProps: xButton92Data,
};

const snippets17Data = {
    className: "snippets-17",
};

const skills418Data = {
    className: "skills-1",
};

const text30Data = {
    className: "text-1",
};

const userGithub25Data = {
    children: "GitHub Username",
};

const bitcellSignup21Data = {
    userGithubProps: userGithub25Data,
};

const blockchainsText23Data = {
    className: "blockchains-text-1",
};

const xButton93Data = {
    children: "Gitcoin",
    className: "button-3-19",
};

const recommendation2521Data = {
    article1: "Article #2",
};

const recommendation2522Data = {
    article1: "Article #3",
    className: "recommendation-11",
};

const xButton94Data = {
    children: "Login",
    className: "button-6",
};

const xButton95Data = {
    children: "Wallet",
    className: "button-7",
};

const footer9Data = {
    cecLogo: "/img/twitch-1@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    image8: "/img/image-8-18@1x.png",
    snippetOfTheDay: "Snippet of the Day",
    subscribeToGetAccess: "Subscribe to get access",
    button1Props: xButton94Data,
    button2Props: xButton95Data,
};

const buttonLogin21Data = {
    className: "button-login-1",
};

const buttonWallet21Data = {
    className: "button-wallet-1",
};

const xButton96Data = {
    children: "Hire Me",
};

const heroInfo23Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-1",
    buttonProps: xButton96Data,
};

const snippets18Data = {
    className: "snippets-17",
};

const skills419Data = {
    className: "skills-1",
};

const text31Data = {
    className: "text-1",
};

const userGithub26Data = {
    children: "GitHub Username",
};

const bitcellSignup22Data = {
    userGithubProps: userGithub26Data,
};

const blockchainsText24Data = {
    className: "blockchains-text-1",
};

const xButton97Data = {
    children: "Gitcoin",
    className: "button-3",
};

const recommendation262Data = {
    article1: "Article #2",
};

const recommendation263Data = {
    article1: "Article #3",
    className: "recommendation-12",
};

const xButton98Data = {
    children: "Login",
    className: "button-6",
};

const xButton99Data = {
    children: "Wallet",
    className: "button-7",
};

const footer10Data = {
    cecLogo: "/img/twitch-1@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    image8: "/img/image-8-19@1x.png",
    snippetOfTheDay: "Snippet of the Day",
    subscribeToGetAccess: "Subscribe to get access",
    button1Props: xButton98Data,
    button2Props: xButton99Data,
};

const homeData = {
    heroImage: "/img/-hero-image-1@1x.png",
    heroInfo: "/img/hero-info@1x.png",
    globe1: "/img/globe-4@2x.png",
    wellRoundedAndHighlyGrounded1: "Well-Rounded and Highly-Grounded",
    aSelfTaughtWebDe1: <React.Fragment>A self-taught web developer with a passion for e-commerce and blockchain applications. I have a background in Geographic Information Systems, ESRI products and Databases. I have a strong interest in the blockchain space and am currently working on developing a blockchain based e-commerce platform which relies of AWS infrastructures. <br /> <br />I just completed my undergrad at the University of California, Santa Barbara and plan on persuing a certification as a Salesforce Developer and Administrator, with future plans for a Master’s degree in Business (emphasizing in Location Analysis).</React.Fragment>,
    subscribeToGetAccess1: "Subscribe to get access",
    enterYourEmail1: "Enter your email",
    submit1: "Submit",
    functionSnippets1: <React.Fragment>function snippets() =&gt; {<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Est senectus placerat est sem malesuada interdum.  Morbi at aliquam ac nunc adipiscing ut.<br />}</React.Fragment>,
    snippetOfTheDay1: "Snippet of the Day",
    iconMail1: "/img/mail@2x.png",
    iconLinkedin1: "/img/linkedin@2x.png",
    iconPaper_Plane1: "/img/telegram-app@2x.png",
    discordNew1: "/img/discord-new@2x.png",
    twitch1: "/img/twitch-1@2x.png",
    article11: "Article #3",
    line11: "/img/line-1-12@2x.png",
    loremIpsumDolorSi1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    dashboardLayout1: "/img/dashboard-layout@2x.png",
    hireMe1: "HIRE ME",
    github1: "GITHUB",
    openSource1: "OPEN-SOURCE",
    organizations1: "ORGANIZATIONS",
    frame1: "/img/frame-2@1x.png",
    dashboardLayout2: "/img/dashboard-layout@2x.png",
    hireMe2: "HIRE ME",
    github2: "GITHUB",
    openSource2: "OPEN-SOURCE",
    organizations2: "ORGANIZATIONS",
    frame2: "/img/frame-1@1x.png",
    dashboardLayout3: "/img/dashboard-layout@2x.png",
    hireMe3: "HIRE ME",
    github3: "GITHUB",
    openSource3: "OPEN-SOURCE",
    organizations3: "ORGANIZATIONS",
    frame3: "/img/frame@1x.png",
    twitch2: "/img/twitch-1@2x.png",
    iconMail2: "/img/mail@2x.png",
    iconLinkedin2: "/img/linkedin@2x.png",
    iconPaper_Plane2: "/img/telegram-app@2x.png",
    discordNew2: "/img/discord-new@2x.png",
    article12: "Article #3",
    line12: "/img/line-1-3@2x.png",
    loremIpsumDolorSi2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    frame4: "/img/frame-12@1x.png",
    subscribeToGetAccess2: "Subscribe to get access",
    enterYourEmail2: "Enter your email",
    submit2: "Submit",
    functionSnippets2: <React.Fragment>function snippets() =&gt; {<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Est senectus placerat est sem malesuada interdum.  Morbi at aliquam ac nunc adipiscing ut.<br />}</React.Fragment>,
    snippetOfTheDay2: "Snippet of the Day",
    viewMyProfileToS1: "View my profile to see more about my work on personal projects and on other initiatives I have contributed to:",
    openSourceProjectsContributions1: "Open-Source Projects & Contributions",
    eliImg1: "/img/-eli-img-15@2x.png",
    clickUp1: "/img/-click-up-15@1x.png",
    blockchainNewLogo1: "/img/blockchain-new-logo-15@2x.png",
    buildABitcellAnd1: "Build a Bitcell and join the rest of the Metaverse!",
    tradentLogo5Transparent21: "/img/tradent-logo5-transparent-2-15@2x.png",
    bitcoin1: "/img/twitch-1@2x.png",
    bitcoin2: "Bitcoin",
    discordNew3: "/img/twitch-1@2x.png",
    twitch3: "/img/twitch-1@2x.png",
    mail1: "/img/mail@2x.png",
    linkedin1: "/img/linkedin@2x.png",
    telegramApp1: "/img/telegram-app-15@2x.png",
    article13: "Article #2",
    line13: "/img/line-1-46@2x.png",
    loremIpsumDolorSi3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    line14: "/img/line-1-21@2x.png",
    article14: "Article #3",
    loremIpsumDolorSi4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    dashboardLayout4: "/img/dashboard-layout@2x.png",
    hireMe4: "HIRE ME",
    github4: "GITHUB",
    openSource4: "OPEN-SOURCE",
    organizations4: "ORGANIZATIONS",
    twitch4: "/img/twitch-1@2x.png",
    mail2: "/img/mail@2x.png",
    linkedin2: "/img/linkedin@2x.png",
    telegramApp2: "/img/telegram-app@2x.png",
    discordNew4: "/img/discord-new-11@2x.png",
    line15: "/img/line-1-21@2x.png",
    article15: "Article #3",
    loremIpsumDolorSi5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    dashboardLayout5: "/img/dashboard-layout@2x.png",
    hireMe5: "HIRE ME",
    github5: "GITHUB",
    openSource5: "OPEN-SOURCE",
    organizations5: "ORGANIZATIONS",
    frame5: "/img/frame-10@1x.png",
    clickUp2: "/img/-click-up-13@1x.png",
    tradentLogo5Transparent22: "/img/tradent-logo5-transparent-2@2x.png",
    bitcoin3: "/img/bitcoin-13@2x.png",
    bitcoin4: "Bitcoin",
    discordNew5: "/img/twitch-1@2x.png",
    twitch5: "/img/twitch-1@2x.png",
    iconMail3: "/img/mail@2x.png",
    iconLinkedin3: "/img/linkedin@2x.png",
    iconPaper_Plane3: "/img/telegram-app@2x.png",
    article16: "Article #2",
    line16: "/img/line-1-40@2x.png",
    loremIpsumDolorSi6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    line17: "/img/line-1-21@2x.png",
    article17: "Article #3",
    loremIpsumDolorSi7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    dashboardLayout6: "/img/dashboard-layout@2x.png",
    hireMe6: "HIRE ME",
    github6: "GITHUB",
    openSource6: "OPEN-SOURCE",
    organizations6: "ORGANIZATIONS",
    frame6: "/img/frame-9@1x.png",
    twitch6: "/img/twitch-1@2x.png",
    iconMail4: "/img/mail@2x.png",
    iconLinkedin4: "/img/linkedin@2x.png",
    iconPaper_Plane4: "/img/telegram-app@2x.png",
    discordNew6: "/img/discord-new@2x.png",
    article18: "Article #3",
    line18: "/img/line-1-36@2x.png",
    loremIpsumDolorSi8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    dashboardLayout7: "/img/dashboard-layout@2x.png",
    hireMe7: "HIRE ME",
    github7: "GITHUB",
    openSource7: "OPEN-SOURCE",
    organizations7: "ORGANIZATIONS",
    twitch7: "/img/twitch-1@2x.png",
    iconMail5: "/img/mail@2x.png",
    iconLinkedin5: "/img/linkedin@2x.png",
    iconPaper_Plane5: "/img/telegram-app@2x.png",
    discordNew7: "/img/discord-new-11@2x.png",
    line19: "/img/line-1-21@2x.png",
    article19: "Article #3",
    loremIpsumDolorSi9: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    dashboardLayout8: "/img/dashboard-layout@2x.png",
    hireMe8: "HIRE ME",
    github8: "GITHUB",
    openSource8: "OPEN-SOURCE",
    organizations8: "ORGANIZATIONS",
    iconMail6: "/img/mail@2x.png",
    iconLinkedin6: "/img/linkedin@2x.png",
    iconPaper_Plane6: "/img/telegram-app@2x.png",
    discordNew8: "/img/discord-new@2x.png",
    twitch8: "/img/twitch-10@2x.png",
    dashboardLayout9: "/img/dashboard-layout@2x.png",
    hireMe9: "HIRE ME",
    github9: "GITHUB",
    openSource9: "OPEN-SOURCE",
    organizations9: "ORGANIZATIONS",
    frame7: "/img/frame-6@1x.png",
    clickUp3: "/img/-click-up-9@1x.png",
    discordNew9: "/img/twitch-1@2x.png",
    twitch9: "/img/twitch-1@2x.png",
    iconMail7: "/img/mail@2x.png",
    iconLinkedin7: "/img/linkedin@2x.png",
    iconPaper_Plane7: "/img/telegram-app@2x.png",
    line110: "/img/line-1-21@2x.png",
    article110: "Article #3",
    loremIpsumDolorSi10: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    dashboardLayout10: "/img/dashboard-layout@2x.png",
    hireMe10: "HIRE ME",
    github10: "GITHUB",
    openSource10: "OPEN-SOURCE",
    organizations10: "ORGANIZATIONS",
    frame8: "/img/frame-5@1x.png",
    dashboardLayout11: "/img/dashboard-layout@2x.png",
    hireMe11: "HIRE ME",
    github11: "GITHUB",
    openSource11: "OPEN-SOURCE",
    organizations11: "ORGANIZATIONS",
    frame9: "/img/frame-4@1x.png",
    clickUp4: "/img/-click-up-7@1x.png",
    discordNew10: "/img/twitch-1@2x.png",
    twitch10: "/img/twitch-1@2x.png",
    iconMail8: "/img/mail@2x.png",
    iconLinkedin8: "/img/linkedin@2x.png",
    iconPaper_Plane8: "/img/telegram-app@2x.png",
    line111: "/img/line-1-21@2x.png",
    article111: "Article #3",
    loremIpsumDolorSi11: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    dashboardLayout12: "/img/dashboard-layout@2x.png",
    hireMe12: "HIRE ME",
    github12: "GITHUB",
    openSource12: "OPEN-SOURCE",
    organizations12: "ORGANIZATIONS",
    iconMail9: "/img/mail@2x.png",
    iconLinkedin9: "/img/linkedin@2x.png",
    iconPaper_Plane9: "/img/telegram-app@2x.png",
    discordNew11: "/img/discord-new@2x.png",
    twitch11: "/img/twitch-6@2x.png",
    frame10: "/img/frame-13@1x.png",
    wellRoundedAndHighlyGrounded2: "Well-Rounded and Highly-Grounded",
    aSelfTaughtWebDe2: <React.Fragment>A self-taught web developer with a passion for e-commerce and blockchain applications. I have a background in Geographic Information Systems, ESRI products and Databases. I have a strong interest in the blockchain space and am currently working on developing a blockchain based e-commerce platform which relies of AWS infrastructures. <br /> <br />I just completed my undergrad at the University of California, Santa Barbara and plan on persuing a certification as a Salesforce Developer and Administrator, with future plans for a Master’s degree in Business (emphasizing in Location Analysis).</React.Fragment>,
    globe2: "/img/twitch-1@2x.png",
    eliImg2: "/img/twitch-1@2x.png",
    openSourceProjectsContributions2: "Open-Source Projects & Contributions",
    viewMyProfileToS2: "View my profile to see more about my work on personal projects and on other initiatives I have contributed to:",
    github13: "/img/twitch-1@2x.png",
    github14: "GitHub",
    clickUp5: "/img/-click-up-16@1x.png",
    privateRepositories1: "Private Repositories",
    spanText1: <React.Fragment>In order to access my private repositories you must have a token. Learn how to get<br />a token </React.Fragment>,
    spanText2: "here",
    spanText3: " and visit this ",
    spanText4: "article",
    spanText5: " to learn more about the implementation.",
    github15: "/img/twitch-1@2x.png",
    github16: "GitHub",
    blockchainNewLogo2: "/img/twitch-1@2x.png",
    buildABitcellAnd2: "Build a Bitcell and join the rest of the Metaverse!",
    tradentLogo5Transparent23: "/img/twitch-1@2x.png",
    ethereum1: "/img/twitch-1@2x.png",
    ethereum2: "Ethereum",
    bitcoin5: "/img/twitch-1@2x.png",
    bitcoin6: "Bitcoin",
    telegramApp3: "/img/twitch-1@2x.png",
    discordNew12: "/img/twitch-1@2x.png",
    twitch12: "/img/twitch-1@2x.png",
    mail3: "/img/mail@2x.png",
    linkedin3: "/img/linkedin-16@2x.png",
    dashboardLayout13: "/img/dashboard-layout@2x.png",
    hireMe13: "HIRE ME",
    github17: "GITHUB",
    openSource13: "OPEN-SOURCE",
    organizations13: "ORGANIZATIONS",
    frame11: "/img/frame-14@1x.png",
    wellRoundedAndHighlyGrounded3: "Well-Rounded and Highly-Grounded",
    aSelfTaughtWebDe3: <React.Fragment>A self-taught web developer with a passion for e-commerce and blockchain applications. I have a background in Geographic Information Systems, ESRI products and Databases. I have a strong interest in the blockchain space and am currently working on developing a blockchain based e-commerce platform which relies of AWS infrastructures. <br /> <br />I just completed my undergrad at the University of California, Santa Barbara and plan on persuing a certification as a Salesforce Developer and Administrator, with future plans for a Master’s degree in Business (emphasizing in Location Analysis).</React.Fragment>,
    globe3: "/img/twitch-1@2x.png",
    eliImg3: "/img/twitch-1@2x.png",
    openSourceProjectsContributions3: "Open-Source Projects & Contributions",
    viewMyProfileToS3: "View my profile to see more about my work on personal projects and on other initiatives I have contributed to:",
    github18: "/img/twitch-1@2x.png",
    github19: "GitHub",
    clickUp6: "/img/-click-up-16@1x.png",
    privateRepositories2: "Private Repositories",
    spanText6: <React.Fragment>In order to access my private repositories you must have a token. Learn how to get<br />a token </React.Fragment>,
    spanText7: "here",
    spanText8: " and visit this ",
    spanText9: "article",
    spanText10: " to learn more about the implementation.",
    github20: "/img/twitch-1@2x.png",
    github21: "GitHub",
    blockchainNewLogo3: "/img/twitch-1@2x.png",
    buildABitcellAnd3: "Build a Bitcell and join the rest of the Metaverse!",
    tradentLogo5Transparent24: "/img/twitch-1@2x.png",
    ethereum3: "/img/twitch-1@2x.png",
    ethereum4: "Ethereum",
    bitcoin7: "/img/twitch-1@2x.png",
    bitcoin8: "Bitcoin",
    linkedin4: "/img/twitch-1@2x.png",
    telegramApp4: "/img/twitch-1@2x.png",
    discordNew13: "/img/twitch-1@2x.png",
    twitch13: "/img/twitch-1@2x.png",
    iconMail10: "/img/mail@2x.png",
    article112: "Type-script version 1/4",
    line112: "/img/line-1-53@2x.png",
    loremIpsumDolorSi12: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    dashboardLayout14: "/img/dashboard-layout@2x.png",
    hireMe14: "HIRE ME",
    github22: "GITHUB",
    openSource14: "OPEN-SOURCE",
    organizations14: "ORGANIZATIONS",
    frame12: "/img/frame-15@1x.png",
    wellRoundedAndHighlyGrounded4: "Well-Rounded and Highly-Grounded",
    aSelfTaughtWebDe4: <React.Fragment>A self-taught web developer with a passion for e-commerce and blockchain applications. I have a background in Geographic Information Systems, ESRI products and Databases. I have a strong interest in the blockchain space and am currently working on developing a blockchain based e-commerce platform which relies of AWS infrastructures. <br /> <br />I just completed my undergrad at the University of California, Santa Barbara and plan on persuing a certification as a Salesforce Developer and Administrator, with future plans for a Master’s degree in Business (emphasizing in Location Analysis).</React.Fragment>,
    globe4: "/img/twitch-1@2x.png",
    eliImg4: "/img/twitch-1@2x.png",
    openSourceProjectsContributions4: "Open-Source Projects & Contributions",
    viewMyProfileToS4: "View my profile to see more about my work on personal projects and on other initiatives I have contributed to:",
    github23: "/img/twitch-1@2x.png",
    github24: "GitHub",
    clickUp7: "/img/-click-up-16@1x.png",
    privateRepositories3: "Private Repositories",
    spanText11: <React.Fragment>In order to access my private repositories you must have a token. Learn how to get<br />a token </React.Fragment>,
    spanText12: "here",
    spanText13: " and visit this ",
    spanText14: "article",
    spanText15: " to learn more about the implementation.",
    github25: "/img/twitch-1@2x.png",
    github26: "GitHub",
    blockchainNewLogo4: "/img/twitch-1@2x.png",
    buildABitcellAnd4: "Build a Bitcell and join the rest of the Metaverse!",
    tradentLogo5Transparent25: "/img/twitch-1@2x.png",
    ethereum5: "/img/twitch-1@2x.png",
    ethereum6: "Ethereum",
    bitcoin9: "/img/twitch-1@2x.png",
    bitcoin10: "Bitcoin",
    linkedin5: "/img/twitch-1@2x.png",
    telegramApp5: "/img/twitch-1@2x.png",
    discordNew14: "/img/twitch-1@2x.png",
    twitch14: "/img/twitch-1@2x.png",
    iconMail11: "/img/mail@2x.png",
    article113: "Type-script version 1/4",
    line113: "/img/line-1-56@2x.png",
    loremIpsumDolorSi13: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    dashboardLayout15: "/img/dashboard-layout@2x.png",
    hireMe15: "HIRE ME",
    github27: "GITHUB",
    openSource15: "OPEN-SOURCE",
    organizations15: "ORGANIZATIONS",
    frame13: "/img/frame-16@1x.png",
    wellRoundedAndHighlyGrounded5: "Well-Rounded and Highly-Grounded",
    aSelfTaughtWebDe5: <React.Fragment>A self-taught web developer with a passion for e-commerce and blockchain applications. I have a background in Geographic Information Systems, ESRI products and Databases. I have a strong interest in the blockchain space and am currently working on developing a blockchain based e-commerce platform which relies of AWS infrastructures. <br /> <br />I just completed my undergrad at the University of California, Santa Barbara and plan on persuing a certification as a Salesforce Developer and Administrator, with future plans for a Master’s degree in Business (emphasizing in Location Analysis).</React.Fragment>,
    globe5: "/img/twitch-1@2x.png",
    eliImg5: "/img/twitch-1@2x.png",
    openSourceProjectsContributions5: "Open-Source Projects & Contributions",
    viewMyProfileToS5: "View my profile to see more about my work on personal projects and on other initiatives I have contributed to:",
    github28: "/img/twitch-1@2x.png",
    github29: "GitHub",
    clickUp8: "/img/-click-up-16@1x.png",
    privateRepositories4: "Private Repositories",
    spanText16: <React.Fragment>In order to access my private repositories you must have a token. Learn how to get<br />a token </React.Fragment>,
    spanText17: "here",
    spanText18: " and visit this ",
    spanText19: "article",
    spanText20: " to learn more about the implementation.",
    github30: "/img/twitch-1@2x.png",
    github31: "GitHub",
    blockchainNewLogo5: "/img/twitch-1@2x.png",
    buildABitcellAnd5: "Build a Bitcell and join the rest of the Metaverse!",
    tradentLogo5Transparent26: "/img/twitch-1@2x.png",
    ethereum7: "/img/twitch-1@2x.png",
    ethereum8: "Ethereum",
    bitcoin11: "/img/twitch-1@2x.png",
    bitcoin12: "Bitcoin",
    linkedin6: "/img/twitch-1@2x.png",
    telegramApp6: "/img/twitch-1@2x.png",
    discordNew15: "/img/twitch-1@2x.png",
    twitch15: "/img/twitch-1@2x.png",
    iconMail12: "/img/mail@2x.png",
    article114: "Type-script version 1/4",
    line114: "/img/line-1-59@2x.png",
    loremIpsumDolorSi14: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim. Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut purus. Aliquam ullamcorper.",
    navbarProps: navbar2Data,
    hero2Props: hero222Data,
    aboutMe1Props: aboutMe1Data,
    bitcellular51Props: bitcellular52Data,
    blockchain41Props: blockchain42Data,
    recommendedMaterial31Props: recommendedMaterial32Data,
    footer1Props: xFooter2Data,
    navbar22Props: navbar222Data,
    heroProps: hero2Data,
    heroInfo3Props2: aboutMe224Data,
    snippets1Props: snippets2Data,
    openSourceContribution32Props: openSourceContribution2Data,
    hireMe42Props: hireMeData,
    privateRepositories42Props: privateRepositories3Data,
    bitcellularProps: bitcellular3Data,
    blockchainProps: blockchain3Data,
    socials32Props: socials2Data,
    recommendedMaterialProps: recommendedMaterial2Data,
    footer22Props: footer22Data,
    navbar6Props: navbar6Data,
    skills41Props: skills43Data,
    openSourceContribution32Props2: openSourceContribution33Data,
    hireMe42Props2: hireMe42Data,
    privateRepositories42Props2: privateRepositories43Data,
    bitcellular52Props: bitcellular53Data,
    blockchain42Props: blockchain43Data,
    navbar52Props: recommendation18Data,
    recommendation21Props: recommendation215Data,
    footer2Props: xFooter3Data,
    buttonLogin1Props: buttonLogin7Data,
    buttonWallet1Props: buttonWallet7Data,
    heroInfo1Props: heroInfo7Data,
    aboutMe2Props: aboutMe2Data,
    skills42Props: skills44Data,
    openSourceContribution33Props: openSourceContribution34Data,
    hireMe43Props: hireMe43Data,
    privateRepositories43Props: privateRepositories44Data,
    bitcellular53Props: bitcellular54Data,
    blockchain43Props: blockchain44Data,
    socials32Props2: socials33Data,
    recommendedMaterial32Props: recommendedMaterial33Data,
    footer3Props: xFooter4Data,
    buttonLogin2Props: buttonLogin8Data,
    buttonWallet2Props: buttonWallet8Data,
    heroInfo2Props: heroInfo8Data,
    aboutMe3Props: aboutMe3Data,
    skills43Props: skills45Data,
    openSourceContribution34Props: openSourceContribution35Data,
    hireMe44Props: hireMe44Data,
    privateRepositories44Props: privateRepositories45Data,
    bitcellular54Props: bitcellular55Data,
    blockchain44Props: blockchain45Data,
    socials33Props: socials34Data,
    recommendedMaterial33Props: recommendedMaterial34Data,
    footer4Props: xFooter5Data,
    buttonLogin3Props: buttonLogin9Data,
    buttonWallet3Props: buttonWallet9Data,
    heroInfo3Props: heroInfo9Data,
    aboutMe4Props: aboutMe4Data,
    skills44Props: skills46Data,
    openSourceContribution35Props: openSourceContribution36Data,
    hireMe45Props: hireMe45Data,
    privateRepositories45Props: privateRepositories46Data,
    bitcellular55Props: bitcellular56Data,
    blockchain45Props: blockchain46Data,
    navbar52Props2: recommendation111Data,
    recommendation22Props: recommendation220Data,
    footer5Props: xFooter6Data,
    heroInfo4Props: heroInfo10Data,
    skills3Props: skills322Data,
    privateRepositories46Props: privateRepositories47Data,
    bitcellSignup1Props: bitcellSignup9Data,
    ethereum1Props: ethereum12Data,
    button1Props: xButton45Data,
    navbar52Props3: recommendation112Data,
    footer6Props: footer6Data,
    buttonLogin4Props: buttonLogin10Data,
    buttonWallet4Props: buttonWallet10Data,
    hero31Props: hero31Data,
    aboutMe5Props: aboutMe5Data,
    skills45Props: skills47Data,
    openSourceContribution36Props: openSourceContribution37Data,
    hireMe46Props: hireMe46Data,
    privateRepositories47Props: privateRepositories48Data,
    bitcellular56Props: bitcellular57Data,
    blockchain46Props: blockchain47Data,
    navbar52Props4: recommendation113Data,
    recommendation23Props: recommendation221Data,
    footer6Props2: xFooter7Data,
    buttonLogin5Props: buttonLogin11Data,
    buttonWallet5Props: buttonWallet11Data,
    heroInfo5Props: heroInfo12Data,
    aboutMe6Props: aboutMe6Data,
    skills46Props: skills48Data,
    openSourceContribution37Props: openSourceContribution38Data,
    privateRepositories48Props: privateRepositories49Data,
    bitcellular57Props: bitcellular58Data,
    ethereum2Props: ethereum14Data,
    button2Props: xButton53Data,
    navbar52Props5: recommendation114Data,
    footer7Props: xFooter8Data,
    buttonLogin6Props: buttonLogin12Data,
    buttonWallet6Props: buttonWallet12Data,
    heroInfo6Props: heroInfo13Data,
    aboutMe7Props: aboutMe7Data,
    skills47Props: skills49Data,
    openSourceContribution38Props: openSourceContribution39Data,
    hireMe47Props: hireMe47Data,
    privateRepositories49Props: privateRepositories410Data,
    bitcellular58Props: bitcellular59Data,
    blockchain47Props: blockchain48Data,
    navbar52Props6: recommendation115Data,
    recommendation24Props: recommendation222Data,
    footer8Props: xFooter9Data,
    buttonLogin7Props: buttonLogin13Data,
    buttonWallet7Props: buttonWallet13Data,
    hero32Props: hero32Data,
    aboutMe8Props: aboutMe8Data,
    skills48Props: skills410Data,
    openSourceContribution39Props: openSourceContribution310Data,
    hireMe48Props: hireMe48Data,
    privateRepositories410Props: privateRepositories411Data,
    bitcellular59Props: bitcellular510Data,
    blockchain48Props: blockchain49Data,
    navbar52Props7: recommendation116Data,
    recommendation25Props: recommendation223Data,
    footer9Props: xFooter10Data,
    buttonLogin8Props: buttonLogin14Data,
    buttonWallet8Props: buttonWallet14Data,
    hero41Props: hero41Data,
    aboutMe9Props: aboutMe9Data,
    skills49Props: skills411Data,
    openSourceContribution310Props: openSourceContribution311Data,
    hireMe49Props: hireMe49Data,
    privateRepositories411Props: privateRepositories412Data,
    bitcellular510Props: bitcellular511Data,
    blockchain49Props: blockchain410Data,
    recommendedMaterial34Props: recommendedMaterial35Data,
    footer10Props: xFooter11Data,
    buttonLogin9Props: buttonLogin15Data,
    buttonWallet9Props: buttonWallet15Data,
    heroInfo7Props: heroInfo16Data,
    aboutMe10Props: aboutMe10Data,
    skills410Props: skills412Data,
    openSourceContribution311Props: openSourceContribution312Data,
    privateRepositories412Props: privateRepositories413Data,
    bitcellular511Props: bitcellular512Data,
    blockchain410Props: blockchain411Data,
    skills3Props2: recommendation118Data,
    recommendation26Props: recommendation226Data,
    footer11Props: xFooter12Data,
    buttonLogin10Props: buttonLogin16Data,
    buttonWallet10Props: buttonWallet16Data,
    heroInfo8Props: heroInfo17Data,
    aboutMe11Props: aboutMe11Data,
    skills411Props: skills413Data,
    openSourceContribution312Props: openSourceContribution313Data,
    hireMe410Props: hireMe410Data,
    privateRepositories413Props: privateRepositories414Data,
    bitcellular512Props: bitcellular513Data,
    blockchain411Props: blockchain412Data,
    socials34Props: socials35Data,
    recommendedMaterial35Props: recommendedMaterial36Data,
    footer12Props: xFooter13Data,
    buttonLogin11Props: buttonLogin17Data,
    buttonWallet11Props: buttonWallet17Data,
    heroInfo9Props: heroInfo18Data,
    aboutMe12Props: aboutMe12Data,
    skills412Props: skills414Data,
    openSourceContribution313Props: openSourceContribution314Data,
    privateRepositories414Props: privateRepositories415Data,
    bitcellular513Props: bitcellular514Data,
    blockchain412Props: blockchain413Data,
    skills3Props3: recommendation120Data,
    recommendation27Props: recommendation229Data,
    footer13Props: xFooter14Data,
    buttonLogin12Props: buttonLogin18Data,
    buttonWallet12Props: buttonWallet18Data,
    hero42Props: hero42Data,
    aboutMe13Props: aboutMe13Data,
    skills413Props: skills415Data,
    openSourceContribution314Props: openSourceContribution315Data,
    hireMe411Props: hireMe411Data,
    privateRepositories415Props: privateRepositories416Data,
    bitcellular514Props: bitcellular515Data,
    blockchain413Props: blockchain414Data,
    recommendedMaterial36Props: recommendedMaterial37Data,
    footer14Props: xFooter15Data,
    navbar52Props8: navbar423Data,
    heroInfo3Props22: heroInfo32Data,
    snippets2Props: snippets15Data,
    skills414Props: skills416Data,
    text5Props: text20Data,
    bitcellSignup2Props: bitcellSignup19Data,
    blockchainsText1Props: blockchainsText21Data,
    button3Props: xButton85Data,
    navbar52Props9: recommendation122Data,
    recommendation231Props: recommendation2321Data,
    recommendation232Props: recommendation2322Data,
    footer7Props2: footer7Data,
    buttonLogin13Props: buttonLogin19Data,
    buttonWallet13Props: buttonWallet19Data,
    heroInfo10Props: heroInfo20Data,
    snippets3Props: snippets16Data,
    skills415Props: skills417Data,
    text6Props: text21Data,
    bitcellSignup3Props: bitcellSignup20Data,
    blockchainsText2Props: blockchainsText22Data,
    button4Props: xButton89Data,
    recommendation241Props: recommendation2421Data,
    recommendation242Props: recommendation2422Data,
    footer8Props2: footer8Data,
    buttonLogin14Props: buttonLogin20Data,
    buttonWallet14Props: buttonWallet20Data,
    heroInfo11Props: heroInfo21Data,
    snippets4Props: snippets17Data,
    skills416Props: skills418Data,
    text7Props: text30Data,
    bitcellSignup4Props: bitcellSignup21Data,
    blockchainsText3Props: blockchainsText23Data,
    button5Props: xButton93Data,
    recommendation251Props: recommendation2521Data,
    recommendation252Props: recommendation2522Data,
    footer9Props2: footer9Data,
    buttonLogin15Props: buttonLogin21Data,
    buttonWallet15Props: buttonWallet21Data,
    heroInfo12Props: heroInfo23Data,
    snippets5Props: snippets18Data,
    skills417Props: skills419Data,
    text8Props: text31Data,
    bitcellSignup5Props: bitcellSignup22Data,
    blockchainsText4Props: blockchainsText24Data,
    button6Props: xButton97Data,
    recommendation261Props: recommendation262Data,
    recommendation262Props: recommendation263Data,
    footer10Props2: footer10Data,
};

const buttonLogin22Data = {
    className: "button-login-6",
};

const buttonWallet22Data = {
    className: "button-wallet-6",
};

const xButton100Data = {
    children: "Hire Me",
};

const heroInfo24Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-7",
    buttonProps: xButton100Data,
};

const python1Data = {
    python: "/img/python@2x.png",
    pythonDevelopment: "Python Development",
};

const python2Data = {
    python: "/img/amazon-web-services@2x.png",
    pythonDevelopment: "Cloud Development",
    className: "t-div-item",
};

const classroomContainersData = {
    iconSettings: "/img/rest-api@2x.png",
    apiDevelopment: "API Development",
    workWithApexAndB1: "Work with APEX and build custom Lightning Web Components.",
    decentralizedNetwork: "/img/decentralized-network@2x.png",
    web30Development: "Web 3.0 Development",
    workWithApexAndB2: "Work with APEX and build custom Lightning Web Components.",
    python1Props: python1Data,
    python2Props: python2Data,
};

const xButton101Data = {
    children: "Login",
    className: "button-26",
};

const xButton102Data = {
    children: "Wallet",
    className: "button-27",
};

const footerMenu17Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "footer-menu-3",
    button1Props: xButton101Data,
    button2Props: xButton102Data,
};

const xFooter16Data = {
    image8: "/img/image-8@1x.png",
    className: "footer-3",
    footerMenuProps: footerMenu17Data,
};

const openSource22Data = {
    dashboardLayout: "/img/dashboard-layout@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    componentLottieHttpsAssets4Lottiefi: "/img/-component-lottie-https---assets4-lottiefiles-com-packages-lf20-@1x.png",
    collaborateImg: "/img/-collaborate-img@1x.png",
    bangobongo17: "#bangobongo17",
    discordBubble: "/img/discord-bubble@2x.png",
    letsWorkTogether: "Let’s work together",
    overlapGroup3: "/img/-livestream@1x.png",
    twitch: "/img/twitch@2x.png",
    githubClassrooms: "GitHub Classrooms",
    theseClassesAreSm: "These classes are small tutorials through the subjects with increasing content as updates roll through and others contribute.",
    buttonLoginProps: buttonLogin22Data,
    buttonWalletProps: buttonWallet22Data,
    heroInfoProps: heroInfo24Data,
    classroomContainersProps: classroomContainersData,
    footerProps: xFooter16Data,
};

const buttonLogin23Data = {
    className: "button-login-7",
};

const buttonWallet23Data = {
    className: "button-wallet-7",
};

const step41Data = {
    sourceCode: "/img/source-code@2x.png",
    getPaidToBeADeveloper: "Get Paid to be a Developer",
};

const step42Data = {
    sourceCode: "/img/code-fork@2x.png",
    getPaidToBeADeveloper: "Commit your code for review",
    className: "step-3",
};

const step43Data = {
    sourceCode: "/img/github@2x.png",
    getPaidToBeADeveloper: "Connect your GitHub",
    className: "step-2",
};

const step44Data = {
    sourceCode: "/img/performance-macbook@2x.png",
    getPaidToBeADeveloper: "Create Dashboard Login",
    className: "step-1",
};

const xButton103Data = {
    children: "Login",
    className: "button-28",
};

const xButton104Data = {
    children: "Wallet",
    className: "button-29",
};

const footerMenu18Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "footer-menu-4",
    button1Props: xButton103Data,
    button2Props: xButton104Data,
};

const xFooter17Data = {
    image8: "/img/image-8@1x.png",
    className: "footer-4",
    footerMenuProps: footerMenu18Data,
};

const organizationsData = {
    dashboardLayout: "/img/dashboard-layout@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    reactNative: "/img/react-native@2x.png",
    laptop: "/img/laptop@2x.png",
    heroText: "JOIN A DAO",
    eceDappsChannelOp: "ECE dapps channel open-source potential into blockchain based solutions in-order to contribute to problem solving platforms.",
    heroButton1: "Creative E-commerce Co.",
    heroButton2: "TerraSolstice",
    heroButton3: "Tradent",
    minorOrganizations: "Minor Organizations",
    logo3Rupt: "/img/-logo-3rupt@2x.png",
    logoBitcell: "/img/-logo-bitcell@2x.png",
    logoCheers: "/img/-logo-cheers@2x.png",
    logoHalfAndHalf: "/img/-logo-half-and-half@2x.png",
    logoThePublic: "/img/-logo-the-public@2x.png",
    logoKnottBank: "/img/-logo-knott-bank@2x.png",
    logoHooden: "/img/-logo-hooden@2x.png",
    logoUniMeta: "/img/-logo-uni-meta@2x.png",
    logoBlockify: "/img/-logo-blockify@2x.png",
    buttonLoginProps: buttonLogin23Data,
    buttonWalletProps: buttonWallet23Data,
    step41Props: step41Data,
    step42Props: step42Data,
    step43Props: step43Data,
    step44Props: step44Data,
    xFooterProps: xFooter17Data,
};

const buttonLogin24Data = {
    className: "button-login-8",
};

const buttonWallet24Data = {
    className: "button-wallet-8",
};

const navbar71Data = {
    buttonLoginProps: buttonLogin24Data,
    buttonWalletProps: buttonWallet24Data,
};

const button2Data = {
    children: "DASHBOARD",
};

const downloads1Data = {
    className: "",
};

const products1Data = {
    downloadsProps: downloads1Data,
};

const packages1Data = {
    children: "Packages",
    className: "",
};

const packages2Data = {
    children: "README.md",
    className: "read-me",
};

const packages3Data = {
    children: "FAQs",
    className: "faq",
};

const tools1Data = {
    packages1Props: packages1Data,
    packages2Props: packages2Data,
    packages3Props: packages3Data,
};

const user71Data = {
    ellipse2: "/img/ellipse-2@2x.png",
};

const user72Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_6",
};

const user73Data = {
    ellipse2: "/img/ellipse-5@2x.png",
    className: "user_5",
};

const user74Data = {
    ellipse2: "/img/ellipse-4@2x.png",
    className: "user_4",
};

const user75Data = {
    ellipse2: "/img/ellipse-3@2x.png",
    className: "user_3",
};

const user76Data = {
    ellipse2: "/img/ellipse-2@2x.png",
    className: "user_2",
};

const user77Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_1",
};

const avatars1Data = {
    user71Props: user71Data,
    user72Props: user72Data,
    user73Props: user73Data,
    user74Props: user74Data,
    user75Props: user75Data,
    user76Props: user76Data,
    user77Props: user77Data,
};

const button22Data = {
    children: "WORK NOW",
};

const footerMenu222Data = {
    x3RuptLogo1: "/img/3rupt-logo-1@2x.png",
    button1: "/img/-button-1@1x.png",
    button2: "/img/-button@1x.png",
};

const footer111Data = {
    footerMenu2Props: footerMenu222Data,
};

const x3RUPTData = {
    x3Rupt: "3RUPT",
    thisWeb30Applica: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    contribute: "CONTRIBUTE",
    x3RuptLogo2: "/img/3rupt-logo-2@1x.png",
    spanText1: "Become a ",
    spanText2: "contributor",
    learnHow: "LEARN HOW",
    navbar7Props: navbar71Data,
    button2Props: button2Data,
    productsProps: products1Data,
    toolsProps: tools1Data,
    avatarsProps: avatars1Data,
    button22Props: button22Data,
    footer11Props: footer111Data,
};

const buttonLogin25Data = {
    className: "button-login-9",
};

const buttonWallet25Data = {
    className: "button-wallet-9",
};

const navbar72Data = {
    className: "navbar-15",
    buttonLoginProps: buttonLogin25Data,
    buttonWalletProps: buttonWallet25Data,
};

const button23Data = {
    children: "DASHBOARD",
};

const downloads2Data = {
    className: "",
};

const products2Data = {
    className: "products-1",
    downloadsProps: downloads2Data,
};

const packages4Data = {
    children: "Packages",
    className: "packages-2",
};

const packages5Data = {
    children: "README.md",
    className: "read-me-1",
};

const packages6Data = {
    children: "FAQs",
    className: "faq-1",
};

const tools2Data = {
    className: "tools-1",
    packages1Props: packages4Data,
    packages2Props: packages5Data,
    packages3Props: packages6Data,
};

const user78Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user-2",
};

const user79Data = {
    ellipse2: "/img/ellipse-2@2x.png",
    className: "user_2-1",
};

const user710Data = {
    ellipse2: "/img/ellipse-3@2x.png",
    className: "user_3-1",
};

const user711Data = {
    ellipse2: "/img/ellipse-4@2x.png",
    className: "user_4-1",
};

const user712Data = {
    ellipse2: "/img/ellipse-5@2x.png",
    className: "user_5-1",
};

const user713Data = {
    ellipse2: "/img/ellipse-2@2x.png",
    className: "user-2",
};

const user714Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_6-1",
};

const footerMenu223Data = {
    x3RuptLogo1: "/img/-logo-bitcell-1@2x.png",
    button1: "/img/-button-3@1x.png",
    button2: "/img/-button-2@1x.png",
};

const devEnvironment2Data = {
    className: "dev-environment-1",
};

const button24Data = {
    children: "WORK NOW",
};

const bitcellular4Data = {
    bitcellular: "Bitcellular",
    thisWeb30Applica: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    contribute: "CONTRIBUTE",
    logoBitcell: "/img/-logo-bitcell-2@1x.png",
    spanText1: "Become a ",
    spanText2: "contributor",
    image8: "/img/image-8@1x.png",
    snippetOfTheDay: "Snippet of the Day",
    subscribeToGetAccess: "Subscribe to get access",
    learnHow: "LEARN HOW",
    navbar7Props: navbar72Data,
    button23Props: button23Data,
    productsProps: products2Data,
    toolsProps: tools2Data,
    user71Props: user78Data,
    user72Props: user79Data,
    user73Props: user710Data,
    user74Props: user711Data,
    user75Props: user712Data,
    user76Props: user713Data,
    user77Props: user714Data,
    footerMenu22Props: footerMenu223Data,
    devEnvironmentProps: devEnvironment2Data,
    button24Props: button24Data,
};

const buttonLogin26Data = {
    className: "button-login-10",
};

const buttonWallet26Data = {
    className: "button-wallet-10",
};

const navbar73Data = {
    className: "navbar-16",
    buttonLoginProps: buttonLogin26Data,
    buttonWalletProps: buttonWallet26Data,
};

const button25Data = {
    children: "DASHBOARD",
};

const downloads3Data = {
    className: "downloads-14",
};

const products3Data = {
    className: "products-2",
    downloadsProps: downloads3Data,
};

const packages7Data = {
    children: "Packages",
    className: "packages-4",
};

const packages8Data = {
    children: "README.md",
    className: "read-me-2",
};

const packages9Data = {
    children: "FAQs",
    className: "faq-2",
};

const tools3Data = {
    className: "tools-2",
    packages1Props: packages7Data,
    packages2Props: packages8Data,
    packages3Props: packages9Data,
};

const user715Data = {
    ellipse2: "/img/ellipse-2@2x.png",
};

const user716Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_6-2",
};

const user717Data = {
    ellipse2: "/img/ellipse-5@2x.png",
    className: "user_5-2",
};

const user718Data = {
    ellipse2: "/img/ellipse-4@2x.png",
    className: "user_4-2",
};

const user719Data = {
    ellipse2: "/img/ellipse-3@2x.png",
    className: "user_3-2",
};

const user720Data = {
    ellipse2: "/img/ellipse-2@2x.png",
    className: "user_2-2",
};

const user721Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_1-1",
};

const avatars2Data = {
    user71Props: user715Data,
    user72Props: user716Data,
    user73Props: user717Data,
    user74Props: user718Data,
    user75Props: user719Data,
    user76Props: user720Data,
    user77Props: user721Data,
};

const devEnvironment3Data = {
    className: "dev-environment-2",
};

const button26Data = {
    children: "WORK NOW",
};

const footerMenu224Data = {
    x3RuptLogo1: "/img/-cec-logo@2x.png",
    button1: "/img/-button-5@1x.png",
    button2: "/img/-button-4@1x.png",
};

const footer112Data = {
    className: "footer-29",
    footerMenu2Props: footerMenu224Data,
};

const cECData = {
    creativeECommerceCo: <React.Fragment>Creative <br />E-commerce <br />Co.</React.Fragment>,
    thisWeb30Applica: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    contribute: "CONTRIBUTE",
    cecLogo: "/img/-cec-logo-2@1x.png",
    spanText1: "Become a ",
    spanText2: "contributor",
    learnHow: "LEARN HOW",
    navbar7Props: navbar73Data,
    button25Props: button25Data,
    productsProps: products3Data,
    toolsProps: tools3Data,
    avatarsProps: avatars2Data,
    devEnvironmentProps: devEnvironment3Data,
    button26Props: button26Data,
    footer11Props: footer112Data,
};

const buttonLogin27Data = {
    className: "button-login-11",
};

const buttonWallet27Data = {
    className: "button-wallet-11",
};

const navbar74Data = {
    className: "navbar-17",
    buttonLoginProps: buttonLogin27Data,
    buttonWalletProps: buttonWallet27Data,
};

const button27Data = {
    children: "DASHBOARD",
};

const downloads4Data = {
    className: "",
};

const products4Data = {
    className: "products-3",
    downloadsProps: downloads4Data,
};

const packages10Data = {
    children: "Packages",
    className: "packages-6",
};

const packages11Data = {
    children: "README.md",
    className: "read-me-3",
};

const packages12Data = {
    children: "FAQs",
    className: "faq-3",
};

const tools4Data = {
    className: "tools-3",
    packages1Props: packages10Data,
    packages2Props: packages11Data,
    packages3Props: packages12Data,
};

const user722Data = {
    ellipse2: "/img/ellipse-2@2x.png",
};

const user723Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_6-3",
};

const user724Data = {
    ellipse2: "/img/ellipse-5@2x.png",
    className: "user_5-3",
};

const user725Data = {
    ellipse2: "/img/ellipse-4@2x.png",
    className: "user_4-3",
};

const user726Data = {
    ellipse2: "/img/ellipse-3@2x.png",
    className: "user_3-3",
};

const user727Data = {
    ellipse2: "/img/ellipse-2@2x.png",
    className: "user_2-3",
};

const user728Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_1-2",
};

const avatars22Data = {
    user71Props: user722Data,
    user72Props: user723Data,
    user73Props: user724Data,
    user74Props: user725Data,
    user75Props: user726Data,
    user76Props: user727Data,
    user77Props: user728Data,
};

const devEnvironment4Data = {
    className: "dev-environment-3",
};

const button28Data = {
    children: "WORK NOW",
};

const footerMenu225Data = {
    x3RuptLogo1: "/img/-logo-cheers-1@2x.png",
    button1: "/img/-button-7@1x.png",
    button2: "/img/-button-6@1x.png",
};

const footer113Data = {
    className: "footer-30",
    footerMenu2Props: footerMenu225Data,
};

const cheersData = {
    cheers: "Cheers",
    thisWeb30Applica: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    contribute: "CONTRIBUTE",
    logoCheers: "/img/-logo-cheers-2@1x.png",
    spanText1: "Become a ",
    spanText2: "contributor",
    learnHow: "LEARN HOW",
    navbar7Props: navbar74Data,
    button27Props: button27Data,
    productsProps: products4Data,
    toolsProps: tools4Data,
    avatars2Props: avatars22Data,
    devEnvironmentProps: devEnvironment4Data,
    button28Props: button28Data,
    footer11Props: footer113Data,
};

const buttonLogin28Data = {
    className: "button-login-12",
};

const buttonWallet28Data = {
    className: "button-wallet-12",
};

const navbar75Data = {
    className: "navbar-18",
    buttonLoginProps: buttonLogin28Data,
    buttonWalletProps: buttonWallet28Data,
};

const button29Data = {
    children: "DASHBOARD",
};

const downloads5Data = {
    className: "",
};

const products5Data = {
    className: "products-4",
    downloadsProps: downloads5Data,
};

const packages13Data = {
    children: "Packages",
    className: "packages-8",
};

const packages14Data = {
    children: "README.md",
    className: "read-me-4",
};

const packages15Data = {
    children: "FAQs",
    className: "faq-4",
};

const tools5Data = {
    className: "tools-4",
    packages1Props: packages13Data,
    packages2Props: packages14Data,
    packages3Props: packages15Data,
};

const user729Data = {
    ellipse2: "/img/ellipse-2@2x.png",
};

const user730Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_6-4",
};

const user731Data = {
    ellipse2: "/img/ellipse-5@2x.png",
    className: "user_5-4",
};

const user732Data = {
    ellipse2: "/img/ellipse-4@2x.png",
    className: "user_4-4",
};

const user733Data = {
    ellipse2: "/img/ellipse-3@2x.png",
    className: "user_3-4",
};

const user734Data = {
    ellipse2: "/img/ellipse-2@2x.png",
    className: "user_2-4",
};

const user735Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_1-3",
};

const avatars23Data = {
    user71Props: user729Data,
    user72Props: user730Data,
    user73Props: user731Data,
    user74Props: user732Data,
    user75Props: user733Data,
    user76Props: user734Data,
    user77Props: user735Data,
};

const devEnvironment5Data = {
    className: "dev-environment-4",
};

const button210Data = {
    children: "WORK NOW",
};

const footerMenu226Data = {
    x3RuptLogo1: "/img/-logo-half-and-half-1@2x.png",
    button1: "/img/-button-9@1x.png",
    button2: "/img/-button-8@1x.png",
};

const footer114Data = {
    className: "footer-31",
    footerMenu2Props: footerMenu226Data,
};

const halfAndHalfData = {
    halfHalf: "Half & Half",
    thisWeb30Applica: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    contribute: "CONTRIBUTE",
    logoHalfAndHalf: "/img/-logo-half-and-half-2@1x.png",
    spanText1: "Become a ",
    spanText2: "contributor",
    learnHow: "LEARN HOW",
    navbar7Props: navbar75Data,
    button29Props: button29Data,
    productsProps: products5Data,
    toolsProps: tools5Data,
    avatars2Props: avatars23Data,
    devEnvironmentProps: devEnvironment5Data,
    button210Props: button210Data,
    footer11Props: footer114Data,
};

const buttonLogin29Data = {
    className: "button-login-13",
};

const buttonWallet29Data = {
    className: "button-wallet-13",
};

const navbar76Data = {
    className: "navbar-19",
    buttonLoginProps: buttonLogin29Data,
    buttonWalletProps: buttonWallet29Data,
};

const button211Data = {
    children: "DASHBOARD",
};

const downloads6Data = {
    className: "",
};

const products6Data = {
    className: "products-5",
    downloadsProps: downloads6Data,
};

const packages16Data = {
    children: "Packages",
    className: "packages-10",
};

const packages17Data = {
    children: "README.md",
    className: "read-me-5",
};

const packages18Data = {
    children: "FAQs",
    className: "faq-5",
};

const tools6Data = {
    className: "tools-5",
    packages1Props: packages16Data,
    packages2Props: packages17Data,
    packages3Props: packages18Data,
};

const user736Data = {
    ellipse2: "/img/ellipse-2@2x.png",
};

const user737Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_6-5",
};

const user738Data = {
    ellipse2: "/img/ellipse-5@2x.png",
    className: "user_5-5",
};

const user739Data = {
    ellipse2: "/img/ellipse-4@2x.png",
    className: "user_4-5",
};

const user740Data = {
    ellipse2: "/img/ellipse-3@2x.png",
    className: "user_3-5",
};

const user741Data = {
    ellipse2: "/img/ellipse-2@2x.png",
    className: "user_2-5",
};

const user742Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_1-4",
};

const avatars3Data = {
    user71Props: user736Data,
    user72Props: user737Data,
    user73Props: user738Data,
    user74Props: user739Data,
    user75Props: user740Data,
    user76Props: user741Data,
    user77Props: user742Data,
};

const devEnvironment6Data = {
    className: "dev-environment-5",
};

const button212Data = {
    children: "WORK NOW",
};

const footerMenu227Data = {
    x3RuptLogo1: "/img/-logo-the-public-1@2x.png",
    button1: "/img/-button-11@1x.png",
    button2: "/img/-button-10@1x.png",
};

const footer115Data = {
    className: "footer-32",
    footerMenu2Props: footerMenu227Data,
};

const thePublicData = {
    thePublic: "The Public",
    thisWeb30Applica: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    contribute: "CONTRIBUTE",
    logoThePublic: "/img/-logo-the-public-2@1x.png",
    spanText1: "Become a ",
    spanText2: "contributor",
    learnHow: "LEARN HOW",
    navbar7Props: navbar76Data,
    button211Props: button211Data,
    productsProps: products6Data,
    toolsProps: tools6Data,
    avatarsProps: avatars3Data,
    devEnvironmentProps: devEnvironment6Data,
    button212Props: button212Data,
    footer11Props: footer115Data,
};

const buttonLogin30Data = {
    className: "button-login-14",
};

const buttonWallet30Data = {
    className: "button-wallet-14",
};

const navbar77Data = {
    className: "navbar-20",
    buttonLoginProps: buttonLogin30Data,
    buttonWalletProps: buttonWallet30Data,
};

const button213Data = {
    children: "DASHBOARD",
};

const downloads7Data = {
    className: "",
};

const products7Data = {
    className: "products-6",
    downloadsProps: downloads7Data,
};

const packages19Data = {
    children: "Packages",
    className: "packages-12",
};

const packages20Data = {
    children: "README.md",
    className: "read-me-6",
};

const packages21Data = {
    children: "FAQs",
    className: "faq-6",
};

const tools7Data = {
    className: "tools-6",
    packages1Props: packages19Data,
    packages2Props: packages20Data,
    packages3Props: packages21Data,
};

const user743Data = {
    ellipse2: "/img/ellipse-2@2x.png",
};

const user744Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_6-6",
};

const user745Data = {
    ellipse2: "/img/ellipse-5@2x.png",
    className: "user_5-6",
};

const user746Data = {
    ellipse2: "/img/ellipse-4@2x.png",
    className: "user_4-6",
};

const user747Data = {
    ellipse2: "/img/ellipse-3@2x.png",
    className: "user_3-6",
};

const user748Data = {
    ellipse2: "/img/ellipse-2@2x.png",
    className: "user_2-6",
};

const user749Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_1-5",
};

const avatars4Data = {
    user71Props: user743Data,
    user72Props: user744Data,
    user73Props: user745Data,
    user74Props: user746Data,
    user75Props: user747Data,
    user76Props: user748Data,
    user77Props: user749Data,
};

const devEnvironment7Data = {
    className: "dev-environment-6",
};

const button214Data = {
    children: "WORK NOW",
};

const footerMenu228Data = {
    x3RuptLogo1: "/img/-logo-knott-bank-1@2x.png",
    button1: "/img/-button-13@1x.png",
    button2: "/img/-button-12@1x.png",
};

const footer116Data = {
    className: "footer-33",
    footerMenu2Props: footerMenu228Data,
};

const knottBankData = {
    knottBank: "Knott Bank",
    thisWeb30Applica: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    contribute: "CONTRIBUTE",
    logoKnottBank: "/img/-logo-knott-bank-2@1x.png",
    spanText1: "Become a ",
    spanText2: "contributor",
    learnHow: "LEARN HOW",
    navbar7Props: navbar77Data,
    button213Props: button213Data,
    productsProps: products7Data,
    toolsProps: tools7Data,
    avatarsProps: avatars4Data,
    devEnvironmentProps: devEnvironment7Data,
    button214Props: button214Data,
    footer11Props: footer116Data,
};

const buttonLogin31Data = {
    className: "button-login-15",
};

const buttonWallet31Data = {
    className: "button-wallet-15",
};

const navbar78Data = {
    className: "navbar-21",
    buttonLoginProps: buttonLogin31Data,
    buttonWalletProps: buttonWallet31Data,
};

const button215Data = {
    children: "DASHBOARD",
};

const downloads8Data = {
    className: "downloads-19",
};

const products8Data = {
    className: "products-7",
    downloadsProps: downloads8Data,
};

const packages22Data = {
    children: "Packages",
    className: "packages-14",
};

const packages23Data = {
    children: "README.md",
    className: "read-me-7",
};

const packages24Data = {
    children: "FAQs",
    className: "faq-7",
};

const tools8Data = {
    className: "tools-7",
    packages1Props: packages22Data,
    packages2Props: packages23Data,
    packages3Props: packages24Data,
};

const user750Data = {
    ellipse2: "/img/ellipse-2@2x.png",
};

const user751Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_6-7",
};

const user752Data = {
    ellipse2: "/img/ellipse-5@2x.png",
    className: "user_5-7",
};

const user753Data = {
    ellipse2: "/img/ellipse-4@2x.png",
    className: "user_4-7",
};

const user754Data = {
    ellipse2: "/img/ellipse-3@2x.png",
    className: "user_3-7",
};

const user755Data = {
    ellipse2: "/img/ellipse-2@2x.png",
    className: "user_2-7",
};

const user756Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_1-6",
};

const avatars5Data = {
    user71Props: user750Data,
    user72Props: user751Data,
    user73Props: user752Data,
    user74Props: user753Data,
    user75Props: user754Data,
    user76Props: user755Data,
    user77Props: user756Data,
};

const devEnvironment8Data = {
    className: "dev-environment-7",
};

const button216Data = {
    children: "WORK NOW",
};

const tSData = {
    terrasolstice: "TerraSolstice",
    thisWeb30Applica: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    contribute: "CONTRIBUTE",
    terrasolsticeLogo11: "/img/terrasolstice-logo-1-1@1x.png",
    spanText1: "Become a ",
    spanText2: "contributor",
    learnHow: "LEARN HOW",
    terrasolsticeLogo12: "/img/terrasolstice-logo-1@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    button1: "/img/-button-23@1x.png",
    button2: "/img/-button-22@1x.png",
    image8: "/img/image-8@1x.png",
    snippetOfTheDay: "Snippet of the Day",
    subscribeToGetAccess: "Subscribe to get access",
    navbar7Props: navbar78Data,
    button215Props: button215Data,
    productsProps: products8Data,
    toolsProps: tools8Data,
    avatarsProps: avatars5Data,
    devEnvironmentProps: devEnvironment8Data,
    button216Props: button216Data,
};

const buttonLogin32Data = {
    className: "button-login-16",
};

const buttonWallet32Data = {
    className: "button-wallet-16",
};

const navbar79Data = {
    className: "navbar-22",
    buttonLoginProps: buttonLogin32Data,
    buttonWalletProps: buttonWallet32Data,
};

const button217Data = {
    children: "DASHBOARD",
};

const downloads9Data = {
    className: "",
};

const products9Data = {
    className: "products-8",
    downloadsProps: downloads9Data,
};

const packages25Data = {
    children: "Packages",
    className: "packages-16",
};

const packages26Data = {
    children: "README.md",
    className: "read-me-8",
};

const packages27Data = {
    children: "FAQs",
    className: "faq-8",
};

const tools9Data = {
    className: "tools-8",
    packages1Props: packages25Data,
    packages2Props: packages26Data,
    packages3Props: packages27Data,
};

const user757Data = {
    ellipse2: "/img/ellipse-2@2x.png",
};

const user758Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_6-8",
};

const user759Data = {
    ellipse2: "/img/ellipse-5@2x.png",
    className: "user_5-8",
};

const user760Data = {
    ellipse2: "/img/ellipse-4@2x.png",
    className: "user_4-8",
};

const user761Data = {
    ellipse2: "/img/ellipse-3@2x.png",
    className: "user_3-8",
};

const user762Data = {
    ellipse2: "/img/ellipse-2@2x.png",
    className: "user_2-8",
};

const user763Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_1-7",
};

const avatars6Data = {
    user71Props: user757Data,
    user72Props: user758Data,
    user73Props: user759Data,
    user74Props: user760Data,
    user75Props: user761Data,
    user76Props: user762Data,
    user77Props: user763Data,
};

const devEnvironment9Data = {
    className: "dev-environment-8",
};

const button218Data = {
    children: "WORK NOW",
};

const footerMenu229Data = {
    x3RuptLogo1: "/img/-logo-hooden-1@2x.png",
    button1: "/img/-button-15@1x.png",
    button2: "/img/-button-14@1x.png",
};

const footer117Data = {
    className: "footer-34",
    footerMenu2Props: footerMenu229Data,
};

const hoodenData = {
    hooden: "HOODEN",
    thisWeb30Applica: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    contribute: "CONTRIBUTE",
    logoHooden: "/img/-logo-hooden-2@1x.png",
    spanText1: "Become a ",
    spanText2: "contributor",
    learnHow: "LEARN HOW",
    navbar7Props: navbar79Data,
    button217Props: button217Data,
    productsProps: products9Data,
    toolsProps: tools9Data,
    avatarsProps: avatars6Data,
    devEnvironmentProps: devEnvironment9Data,
    button218Props: button218Data,
    footer11Props: footer117Data,
};

const buttonLogin33Data = {
    className: "button-login-17",
};

const buttonWallet33Data = {
    className: "button-wallet-17",
};

const navbar710Data = {
    className: "navbar-23",
    buttonLoginProps: buttonLogin33Data,
    buttonWalletProps: buttonWallet33Data,
};

const button219Data = {
    children: "DASHBOARD",
};

const downloads10Data = {
    className: "",
};

const products10Data = {
    className: "products-9",
    downloadsProps: downloads10Data,
};

const packages28Data = {
    children: "Packages",
    className: "packages-18",
};

const packages29Data = {
    children: "README.md",
    className: "read-me-9",
};

const packages30Data = {
    children: "FAQs",
    className: "faq-9",
};

const tools10Data = {
    className: "tools-9",
    packages1Props: packages28Data,
    packages2Props: packages29Data,
    packages3Props: packages30Data,
};

const user764Data = {
    ellipse2: "/img/ellipse-2@2x.png",
};

const user765Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_6-9",
};

const user766Data = {
    ellipse2: "/img/ellipse-5@2x.png",
    className: "user_5-9",
};

const user767Data = {
    ellipse2: "/img/ellipse-4@2x.png",
    className: "user_4-9",
};

const user768Data = {
    ellipse2: "/img/ellipse-3@2x.png",
    className: "user_3-9",
};

const user769Data = {
    ellipse2: "/img/ellipse-2@2x.png",
    className: "user_2-9",
};

const user770Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_1-8",
};

const avatars7Data = {
    user71Props: user764Data,
    user72Props: user765Data,
    user73Props: user766Data,
    user74Props: user767Data,
    user75Props: user768Data,
    user76Props: user769Data,
    user77Props: user770Data,
};

const devEnvironment10Data = {
    className: "dev-environment-9",
};

const button220Data = {
    children: "WORK NOW",
};

const footerMenu2210Data = {
    x3RuptLogo1: "/img/-logo-blockify-1@2x.png",
    button1: "/img/-button-19@1x.png",
    button2: "/img/-button-18@1x.png",
};

const footer118Data = {
    className: "footer-35",
    footerMenu2Props: footerMenu2210Data,
};

const blockifyData = {
    blockify: "Blockify",
    thisWeb30Applica: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    contribute: "CONTRIBUTE",
    logoBlockify: "/img/-logo-blockify-2@1x.png",
    spanText1: "Become a ",
    spanText2: "contributor",
    learnHow: "LEARN HOW",
    navbar7Props: navbar710Data,
    button219Props: button219Data,
    productsProps: products10Data,
    toolsProps: tools10Data,
    avatarsProps: avatars7Data,
    devEnvironmentProps: devEnvironment10Data,
    button220Props: button220Data,
    footer11Props: footer118Data,
};

const buttonLogin34Data = {
    className: "button-login-18",
};

const buttonWallet34Data = {
    className: "button-wallet-18",
};

const navbar711Data = {
    className: "navbar-24",
    buttonLoginProps: buttonLogin34Data,
    buttonWalletProps: buttonWallet34Data,
};

const button221Data = {
    children: "DASHBOARD",
};

const downloads11Data = {
    className: "",
};

const products11Data = {
    className: "products-10",
    downloadsProps: downloads11Data,
};

const packages31Data = {
    children: "Packages",
    className: "packages-20",
};

const packages32Data = {
    children: "README.md",
    className: "read-me-10",
};

const packages33Data = {
    children: "FAQs",
    className: "faq-10",
};

const tools11Data = {
    className: "tools-10",
    packages1Props: packages31Data,
    packages2Props: packages32Data,
    packages3Props: packages33Data,
};

const user771Data = {
    ellipse2: "/img/ellipse-2@2x.png",
};

const user772Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_6-10",
};

const user773Data = {
    ellipse2: "/img/ellipse-5@2x.png",
    className: "user_5-10",
};

const user774Data = {
    ellipse2: "/img/ellipse-4@2x.png",
    className: "user_4-10",
};

const user775Data = {
    ellipse2: "/img/ellipse-3@2x.png",
    className: "user_3-10",
};

const user776Data = {
    ellipse2: "/img/ellipse-2@2x.png",
    className: "user_2-10",
};

const user777Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_1-9",
};

const avatars8Data = {
    user71Props: user771Data,
    user72Props: user772Data,
    user73Props: user773Data,
    user74Props: user774Data,
    user75Props: user775Data,
    user76Props: user776Data,
    user77Props: user777Data,
};

const devEnvironment11Data = {
    className: "dev-environment-10",
};

const button222Data = {
    children: "WORK NOW",
};

const footerMenu2211Data = {
    x3RuptLogo1: "/img/-logo-uni-meta-1@2x.png",
    button1: "/img/-button-17@1x.png",
    button2: "/img/-button-16@1x.png",
};

const footer119Data = {
    className: "footer-36",
    footerMenu2Props: footerMenu2211Data,
};

const uNIMETAData = {
    uniMeta: "UNI-META",
    thisWeb30Applica: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    contribute: "CONTRIBUTE",
    logoUniMeta: "/img/-logo-uni-meta-2@1x.png",
    spanText1: "Become a ",
    spanText2: "contributor",
    learnHow: "LEARN HOW",
    navbar7Props: navbar711Data,
    button221Props: button221Data,
    productsProps: products11Data,
    toolsProps: tools11Data,
    avatarsProps: avatars8Data,
    devEnvironmentProps: devEnvironment11Data,
    button222Props: button222Data,
    footer11Props: footer119Data,
};

const buttonLogin35Data = {
    className: "button-login-19",
};

const buttonWallet35Data = {
    className: "button-wallet-19",
};

const navbar712Data = {
    className: "navbar-25",
    buttonLoginProps: buttonLogin35Data,
    buttonWalletProps: buttonWallet35Data,
};

const button223Data = {
    children: "DASHBOARD",
};

const downloads12Data = {
    className: "downloads-23",
};

const products12Data = {
    className: "products-11",
    downloadsProps: downloads12Data,
};

const packages34Data = {
    children: "Packages",
    className: "packages-22",
};

const packages35Data = {
    children: "README.md",
    className: "read-me-11",
};

const packages36Data = {
    children: "FAQs",
    className: "faq-11",
};

const tools12Data = {
    className: "tools-11",
    packages1Props: packages34Data,
    packages2Props: packages35Data,
    packages3Props: packages36Data,
};

const user778Data = {
    ellipse2: "/img/ellipse-2@2x.png",
};

const user779Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_6-11",
};

const user780Data = {
    ellipse2: "/img/ellipse-5@2x.png",
    className: "user_5-11",
};

const user781Data = {
    ellipse2: "/img/ellipse-4@2x.png",
    className: "user_4-11",
};

const user782Data = {
    ellipse2: "/img/ellipse-3@2x.png",
    className: "user_3-11",
};

const user783Data = {
    ellipse2: "/img/ellipse-2@2x.png",
    className: "user_2-11",
};

const user784Data = {
    ellipse2: "/img/ellipse-1@2x.png",
    className: "user_1-10",
};

const avatars9Data = {
    user71Props: user778Data,
    user72Props: user779Data,
    user73Props: user780Data,
    user74Props: user781Data,
    user75Props: user782Data,
    user76Props: user783Data,
    user77Props: user784Data,
};

const devEnvironment12Data = {
    className: "dev-environment-11",
};

const button224Data = {
    children: "WORK NOW",
};

const footerMenu2212Data = {
    x3RuptLogo1: "/img/tradent-logo5-transparent-2@2x.png",
    button1: "/img/-button-21@1x.png",
    button2: "/img/-button-20@1x.png",
};

const footer1110Data = {
    className: "footer-37",
    footerMenu2Props: footerMenu2212Data,
};

const tDTData = {
    tradent: "Tradent",
    thisWeb30Applica: "This Web 3.0 application is meant to help DeFi investors monitor important tokens that are about to erupt.",
    contribute: "CONTRIBUTE",
    tradentLogo5Transparent1: "/img/tradent-logo5-transparent-1@1x.png",
    spanText1: "Become a ",
    spanText2: "contributor",
    learnHow: "LEARN HOW",
    navbar7Props: navbar712Data,
    button223Props: button223Data,
    productsProps: products12Data,
    toolsProps: tools12Data,
    avatarsProps: avatars9Data,
    devEnvironmentProps: devEnvironment12Data,
    button224Props: button224Data,
    footer11Props: footer1110Data,
};

const xButton105Data = {
    children: "Hire Me",
};

const heroInfo25Data = {
    spanText1: <React.Fragment>An E-commerce and Full-Stack Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText2: "Coach CEC",
    spanText3: ".",
    name: "Elias Estrada",
    className: "hero-info-8",
    buttonProps: xButton105Data,
};

const python3Data = {
    python: "/img/python@2x.png",
    pythonDevelopment: "Python Development",
};

const classroomContainers2Data = {
    restApi: "/img/rest-api@2x.png",
    apiDevelopment: "API Development",
    workWithApexAndB1: "Work with APEX and build custom Lightning Web Components.",
    amazonWebServices: "/img/amazon-web-services@2x.png",
    cloudDevelopment: "Cloud Development",
    workWithApexAndB2: "Work with APEX and build custom Lightning Web Components.",
    decentralizedNetwork: "/img/decentralized-network@2x.png",
    web30Development: "Web 3.0 Development",
    workWithApexAndB3: "Work with APEX and build custom Lightning Web Components.",
    pythonProps: python3Data,
};

const xButton106Data = {
    children: "Login",
    className: "button-31",
};

const xButton107Data = {
    children: "Wallet",
    className: "button-32",
};

const footerMenu19Data = {
    cecLogo: "/img/-cec-logo@2x.png",
    className: "footer-menu-5",
    button1Props: xButton106Data,
    button2Props: xButton107Data,
};

const xFooter18Data = {
    image8: "/img/image-8@1x.png",
    className: "footer-5",
    footerMenuProps: footerMenu19Data,
};

const financerData = {
    dashboardLayout: "/img/dashboard-layout@2x.png",
    hireMe: "HIRE ME",
    github: "GITHUB",
    openSource: "OPEN-SOURCE",
    organizations: "ORGANIZATIONS",
    letsDiscussYourPortfolio: "Let’s discuss your portfolio",
    planner: "/img/planner@2x.png",
    bookAnAppointment: "book an appointment!",
    overlapGroup3: "/img/-livestream@1x.png",
    bot: "/img/bot@2x.png",
    decentralizedFinances: "Decentralized Finances",
    spanText1: "Building a investment portfolio in the world of decentralized finance is all about managing volatitly, expecations and safety. To learn more ",
    spanText2: "read this article",
    spanText3: " and to see how defi fits in your investment plan ",
    spanText4: "book an appointment",
    spanText5: ".",
    heroInfoProps: heroInfo25Data,
    classroomContainers2Props: classroomContainers2Data,
    footerProps: xFooter18Data,
};

const button31Data = {
    children: "Hire Me",
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

const button32Data = {
    children: "Hire Me",
    className: "button-56",
};

const button33Data = {
    children: "Hire Me",
    className: "button-56",
};

const button34Data = {
    children: "Hire Me",
    className: "button-56",
};

const button35Data = {
    children: "Login",
    className: "button-58",
};

const button36Data = {
    children: "Wallet",
    className: "button-59",
};

const hireMe3Data = {
    dashboardLayout: "/img/dashboard-layout-1@2x.png",
    spanText1: "HIRE ME",
    spanText2: "GITHUB",
    spanText3: "OPEN-SOURCE",
    spanText4: "ORGANIZATIONS",
    spanText5: "Login",
    spanText6: "Wallet",
    componentLottieHttpsAssets4Lottiefi: "/img/-component-lottie-https---assets4-lottiefiles-com-packages-lf20--3@2x.png",
    spanText7: "A",
    spanText8: "n E-commerce and ",
    spanText9: "Full-Stack ",
    spanText10: <React.Fragment>Blockchain Developer. <br />Also known as </React.Fragment>,
    spanText11: "Coach CEC",
    spanText12: ".",
    spanText13: "Elias Estrada",
    spanText14: "Sign In/ Create a profile",
    iconUser: "/img/registration-1@2x.png",
    codeFork: "/img/code-fork-1@2x.png",
    spanText15: "Milestones vs Completion",
    payDate: "/img/pay-date-1@2x.png",
    spanText16: "Dashboard to Monitor Progess",
    newTicket: "/img/new-ticket-2@2x.png",
    x9_Pragmatica_3D_Metal_Calendar: "/img/9-pragmatica-3d-metal-calendar-2@2x.png",
    rectangle: "/img/rectangle-1@2x.png",
    spanText17: "I have experience studying under a project manager and building out a plan using tools like Kanbans, Gantt charts, Burn-up/Burn-downs and Sprints.",
    spanText18: "Project Management",
    spanText19: "Previous",
    spanText20: "https://github.com/elicharlese/monday-crm",
    spanText21: "https://github.com/elicharlese/monday-crm",
    spanText22: "https://github.com/elicharlese/monday-crm",
    spanText23: "Upcoming",
    spanText24: "Breakdown of Skills",
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
    spanText25: "840",
    spanText26: "262",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
    spanText27: "365",
    vector4: "/img/vector-3@2x.png",
    spanText28: "985",
    vector5: "/img/vector-7@2x.png",
    spanText29: "998",
    vector6: "/img/vector-2@2x.png",
    spanText30: "490",
    vector7: "/img/vector-1@2x.png",
    spanText31: "629",
    vector8: "/img/vector-10@2x.png",
    spanText32: "5",
    vector9: "/img/vector-9@2x.png",
    spanText33: "611",
    vector10: "/img/vector-8@2x.png",
    spanText34: "508",
    spanText35: "Degrees",
    spanText36: "Courses",
    spanText37: "Certifications",
    spanText38: "Affiliations",
    spanText39: "Build Your Dapp",
    spanText40: "There are a few different methods for building a dapp, suggesting are below. Anything else can be described in a submission through a ",
    spanText41: "direct hire form",
    spanText42: ".",
    spanText43: "Choose your framework",
    spanText44: "Choose your framework",
    spanText45: "Choose your framework",
    cecLogo: "/img/-cec-logo-1@2x.png",
    spanText46: "HIRE ME",
    spanText47: "GITHUB",
    spanText48: "OPEN-SOURCE",
    spanText49: "ORGANIZATIONS",
    image8: "/img/image-8-1@2x.png",
    spanText50: "Snippet of the Day",
    spanText51: "Subscribe to get access",
    button31Props: button31Data,
    leftScroll1Props: leftScroll1Data,
    row1Props: row12Data,
    leftScroll2Props: leftScroll2Data,
    button32Props: button32Data,
    button33Props: button33Data,
    button34Props: button34Data,
    button35Props: button35Data,
    button36Props: button36Data,
};

