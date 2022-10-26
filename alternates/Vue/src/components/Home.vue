<template>
  <div class="home screen">
    <div class="home-mockup-1">
      <navbar
        :dashboardLayout="navbarProps.dashboardLayout"
        :hireMe="navbarProps.hireMe"
        :github="navbarProps.github"
        :openSource="navbarProps.openSource"
        :organizations="navbarProps.organizations"
      />
      <hero22 :heroInfoProps="hero22Props.heroInfoProps" />
      <about-me3 :snippets2Props="aboutMe31Props.snippets2Props" />
      <skills4 />
      <open-source-contribution3 />
      <hire-me2 />
      <private-repositories4 />
      <bitcellular5 :bitcellular2Props="bitcellular51Props.bitcellular2Props" />
      <blockchain :blockchain2Props="blockchain1Props.blockchain2Props" />
      <socials />
      <recommended-material :postsProps="recommendedMaterial1Props.postsProps" />
      <x-footer :image8="xFooter1Props.image8" :footerMenuProps="xFooter1Props.footerMenuProps" />
    </div>
    <div class="home-desktop">
      <div class="flex-row-23">
        <div class="generic-desktop-1">
          <div class="body-4">
            <navbar3 :linksProps="navbar3Props.linksProps" />
            <hero2 :heroInfoProps="hero2Props.heroInfoProps" />
            <div class="about-me-15">
              <about-me22 :className="aboutMe22Props.className" />
              <snippets2 :className="snippets21Props.className" />
            </div>
            <skills2 />
            <open-source-contribution2 :openSourceProps="openSourceContribution2Props.openSourceProps" />
            <hire-me :textProps="hireMeProps.textProps" />
            <private-repositories3 :privateRepositories2Props="privateRepositories3Props.privateRepositories2Props" />
            <bitcellular3 :bitcellular2Props="bitcellular3Props.bitcellular2Props" />
            <blockchain3 :blockchain2Props="blockchain3Props.blockchain2Props" />
            <socials2 :iconsProps="socials2Props.iconsProps" />
            <recommended-material2
              :text2Props="recommendedMaterial2Props.text2Props"
              :postsProps="recommendedMaterial2Props.postsProps"
            />
            <x-footer3 :xButton1Props="xFooter3Props.xButton1Props" :xButton2Props="xFooter3Props.xButton2Props" />
          </div>
        </div>
        <div class="mac-book">
          <div class="body-6">
            <navbar6 :dashboardLayout="navbar6Props.dashboardLayout" :linksProps="navbar6Props.linksProps" />
            <div class="hero-10">
              <div class="hero-i-container-4">
                <img class="hero-image-4" :src="heroImage" alt="hero-image" /><img
                  class="hero-info-11"
                  :src="heroInfo"
                  alt="hero-info"
                />
              </div>
            </div>
            <div class="about-me-16">
              <div class="about-me-17">
                <img class="globe-7" :src="globe1" alt="Globe" />
                <div class="well-rounded-and-highly-grounded-8 valign-text-middle raleway-bold-cape-cod-32px">
                  {{ wellRoundedAndHighlyGrounded1 }}
                </div>
                <p
                  class="a-self-taught-web-de-8 valign-text-middle raleway-normal-cape-cod-22px"
                  v-html="aSelfTaughtWebDe1"
                ></p>
              </div>
              <div class="snippets-14">
                <div class="overlap-group4-5">
                  <div class="overlap-group2-15">
                    <div class="subscribe-to-get-access-15 valign-text-middle raleway-bold-white-20px">
                      {{ subscribeToGetAccess1 }}
                    </div>
                    <div class="overlap-group-50">
                      <div class="enter-your-email-5 valign-text-middle raleway-bold-seagull-20px">
                        {{ enterYourEmail1 }}
                      </div>
                    </div>
                    <div class="overlap-group1-17">
                      <div class="submit-5 valign-text-middle raleway-bold-white-20px">{{ submit1 }}</div>
                    </div>
                  </div>
                  <div class="overlap-group3-7">
                    <p class="function-snippets-5 raleway-bold-white-16px" v-html="functionSnippets1"></p>
                  </div>
                  <div class="snippet-of-the-day-15 valign-text-middle raleway-bold-white-36px">
                    {{ snippetOfTheDay1 }}
                  </div>
                </div>
              </div>
            </div>
            <skills4 :className="skills41Props.className" />
            <open-source-contribution3 :className="openSourceContribution31Props.className" />
            <hire-me2 :className="hireMe21Props.className" />
            <private-repositories4 :className="privateRepositories41Props.className" />
            <bitcellular5
              :className="bitcellular52Props.className"
              :bitcellular2Props="bitcellular52Props.bitcellular2Props"
            />
            <blockchain :className="blockchain2Props.className" :blockchain2Props="blockchain2Props.blockchain2Props" />
            <div class="socials-7">
              <div class="icons-8">
                <img class="icon-1" :src="iconMail1" alt="icon-mail" /><img
                  class="icon-linkedin-3"
                  :src="iconLinkedin1"
                  alt="icon-linkedin"
                /><img class="icon-paper_plane-3" :src="iconPaper_Plane1" alt="icon-paper_plane" /><img
                  class="discord-new-6"
                  :src="discordNew1"
                  alt="Discord New"
                /><img class="twitch-7" :src="twitch1" alt="Twitch" />
              </div>
            </div>
            <div class="recommended-material-13">
              <text2 />
              <div class="posts-7">
                <recommendation1 :className="recommendation11Props.className" />
                <recommendation2 :article1="recommendation21Props.article1" />
                <div class="recommendation-7">
                  <div class="overlap-group-46">
                    <div class="article-1-12 raleway-bold-white-36px">{{ article11 }}</div>
                    <img class="line-1-12" :src="line11" alt="Line 1" />
                    <p class="lorem-ipsum-dolor-si-12 raleway-bold-white-22px">{{ loremIpsumDolorSi1 }}</p>
                  </div>
                </div>
              </div>
            </div>
            <x-footer
              :image8="xFooter2Props.image8"
              :className="xFooter2Props.className"
              :footerMenuProps="xFooter2Props.footerMenuProps"
            />
          </div>
        </div>
        <div class="mac-book-pro">
          <div class="body-4">
            <div class="navbar-9 raleway-bold-cape-cod-20px">
              <img class="dashboard-layout-9" :src="dashboardLayout1" alt="Dashboard Layout" />
              <div class="hire-me-30">{{ hireMe1 }}</div>
              <div class="github-15">{{ github1 }}</div>
              <div class="open-source-20">{{ openSource1 }}</div>
              <div class="organizations-15">{{ organizations1 }}</div>
              <button-login :className="buttonLogin1Props.className" />
              <button-wallet :className="buttonWallet1Props.className" />
            </div>
            <div class="hero-7">
              <div class="overlap-group5-3">
                <img class="frame" :src="frame1" alt="Frame" /><hero-info
                  :spanText1="heroInfo1Props.spanText1"
                  :spanText2="heroInfo1Props.spanText2"
                  :spanText3="heroInfo1Props.spanText3"
                  :name="heroInfo1Props.name"
                  :className="heroInfo1Props.className"
                  :buttonProps="heroInfo1Props.buttonProps"
                />
              </div>
            </div>
            <about-me3 :className="aboutMe32Props.className" :snippets2Props="aboutMe32Props.snippets2Props" />
            <skills4 :className="skills42Props.className" />
            <open-source-contribution3 :className="openSourceContribution32Props.className" />
            <hire-me2 :className="hireMe22Props.className" />
            <private-repositories4 :className="privateRepositories42Props.className" />
            <bitcellular5
              :className="bitcellular53Props.className"
              :bitcellular2Props="bitcellular53Props.bitcellular2Props"
            />
            <blockchain
              :className="blockchain3Props2.className"
              :blockchain2Props="blockchain3Props2.blockchain2Props"
            />
            <socials :className="socials1Props.className" />
            <recommended-material
              :className="recommendedMaterial2Props2.className"
              :postsProps="recommendedMaterial2Props2.postsProps"
            />
            <x-footer
              :image8="xFooter3Props2.image8"
              :className="xFooter3Props2.className"
              :footerMenuProps="xFooter3Props2.footerMenuProps"
            />
          </div>
        </div>
        <div class="surface-book">
          <div class="body-7">
            <div class="navbar-9 raleway-bold-cape-cod-20px">
              <img class="dashboard-layout-9" :src="dashboardLayout2" alt="Dashboard Layout" />
              <div class="hire-me-30">{{ hireMe2 }}</div>
              <div class="github-15">{{ github2 }}</div>
              <div class="open-source-20">{{ openSource2 }}</div>
              <div class="organizations-15">{{ organizations2 }}</div>
              <button-login :className="buttonLogin2Props.className" />
              <button-wallet :className="buttonWallet2Props.className" />
            </div>
            <div class="hero-11">
              <div class="overlap-group5-5">
                <img class="frame-1" :src="frame2" alt="Frame" /><hero-info
                  :spanText1="heroInfo2Props.spanText1"
                  :spanText2="heroInfo2Props.spanText2"
                  :spanText3="heroInfo2Props.spanText3"
                  :name="heroInfo2Props.name"
                  :className="heroInfo2Props.className"
                  :buttonProps="heroInfo2Props.buttonProps"
                />
              </div>
            </div>
            <about-me3 :className="aboutMe33Props.className" :snippets2Props="aboutMe33Props.snippets2Props" />
            <skills4 :className="skills43Props.className" />
            <open-source-contribution3 :className="openSourceContribution33Props.className" />
            <hire-me2 :className="hireMe23Props.className" />
            <private-repositories4 :className="privateRepositories43Props.className" />
            <bitcellular5
              :className="bitcellular54Props.className"
              :bitcellular2Props="bitcellular54Props.bitcellular2Props"
            />
            <blockchain :className="blockchain4Props.className" :blockchain2Props="blockchain4Props.blockchain2Props" />
            <socials :className="socials2Props2.className" />
            <recommended-material
              :className="recommendedMaterial3Props.className"
              :postsProps="recommendedMaterial3Props.postsProps"
            />
            <x-footer
              :image8="xFooter4Props.image8"
              :className="xFooter4Props.className"
              :footerMenuProps="xFooter4Props.footerMenuProps"
            />
          </div>
        </div>
        <div class="i-mac">
          <div class="body-8">
            <div class="navbar-9 raleway-bold-cape-cod-20px">
              <img class="dashboard-layout-9" :src="dashboardLayout3" alt="Dashboard Layout" />
              <div class="hire-me-30">{{ hireMe3 }}</div>
              <div class="github-15">{{ github3 }}</div>
              <div class="open-source-20">{{ openSource3 }}</div>
              <div class="organizations-15">{{ organizations3 }}</div>
              <button-login :className="buttonLogin3Props.className" />
              <button-wallet :className="buttonWallet3Props.className" />
            </div>
            <div class="hero-8">
              <div class="overlap-group5-6">
                <img class="frame-2" :src="frame3" alt="Frame" /><hero-info
                  :spanText1="heroInfo3Props.spanText1"
                  :spanText2="heroInfo3Props.spanText2"
                  :spanText3="heroInfo3Props.spanText3"
                  :name="heroInfo3Props.name"
                  :className="heroInfo3Props.className"
                  :buttonProps="heroInfo3Props.buttonProps"
                />
              </div>
            </div>
            <about-me3 :className="aboutMe34Props.className" :snippets2Props="aboutMe34Props.snippets2Props" />
            <skills4 :className="skills44Props.className" />
            <open-source-contribution3 :className="openSourceContribution34Props.className" />
            <hire-me2 :className="hireMe24Props.className" />
            <private-repositories4 :className="privateRepositories44Props.className" />
            <bitcellular5
              :className="bitcellular55Props.className"
              :bitcellular2Props="bitcellular55Props.bitcellular2Props"
            />
            <blockchain :className="blockchain5Props.className" :blockchain2Props="blockchain5Props.blockchain2Props" />
            <div class="socials-7">
              <div class="icons-8">
                <img class="twitch-8" :src="twitch2" alt="Twitch" /><img
                  class="icon-mail-5"
                  :src="iconMail2"
                  alt="icon-mail"
                /><img class="icon-linkedin-4" :src="iconLinkedin2" alt="icon-linkedin" /><img
                  class="icon-paper_plane-4"
                  :src="iconPaper_Plane2"
                  alt="icon-paper_plane"
                /><img class="discord-new-6" :src="discordNew2" alt="Discord New" />
              </div>
            </div>
            <div class="recommended-material-13">
              <text2 />
              <div class="posts-7">
                <recommendation1 :className="recommendation12Props.className" />
                <recommendation2 :article1="recommendation22Props.article1" />
                <div class="recommendation-7">
                  <div class="overlap-group-46">
                    <div class="article-1-12 raleway-bold-white-36px">{{ article12 }}</div>
                    <img class="line-1-13" :src="line12" alt="Line 1" />
                    <p class="lorem-ipsum-dolor-si-12 raleway-bold-white-22px">{{ loremIpsumDolorSi2 }}</p>
                  </div>
                </div>
              </div>
            </div>
            <x-footer
              :image8="xFooter5Props.image8"
              :className="xFooter5Props.className"
              :footerMenuProps="xFooter5Props.footerMenuProps"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="home-tablet">
      <div class="flex-row-24">
        <div class="i-pad-minii-pad-97-portrait">
          <div class="body-9">
            <navbar4 />
            <div class="hero-12">
              <div class="overlap-group5-7">
                <img class="frame-3" :src="frame4" alt="Frame" /><hero-info
                  :spanText1="heroInfo4Props.spanText1"
                  :spanText2="heroInfo4Props.spanText2"
                  :spanText3="heroInfo4Props.spanText3"
                  :name="heroInfo4Props.name"
                  :className="heroInfo4Props.className"
                  :buttonProps="heroInfo4Props.buttonProps"
                />
              </div>
            </div>
            <div class="about-me-18">
              <about-me2 />
              <div class="snippets-15">
                <div class="overlap-group4-6">
                  <div class="overlap-group2-16">
                    <div class="subscribe-to-get-access-16 valign-text-middle raleway-bold-white-20px">
                      {{ subscribeToGetAccess2 }}
                    </div>
                    <div class="overlap-group-51">
                      <div class="enter-your-email-6 valign-text-middle raleway-bold-seagull-20px">
                        {{ enterYourEmail2 }}
                      </div>
                    </div>
                    <div class="overlap-group1-18">
                      <div class="submit-6 valign-text-middle raleway-bold-white-20px">{{ submit2 }}</div>
                    </div>
                  </div>
                  <div class="overlap-group3-8">
                    <p class="function-snippets-6 raleway-bold-white-16px" v-html="functionSnippets2"></p>
                  </div>
                  <div class="snippet-of-the-day-16 valign-text-middle raleway-bold-white-36px">
                    {{ snippetOfTheDay2 }}
                  </div>
                </div>
              </div>
            </div>
            <div class="overlap-group6-2">
              <div class="open-source-contribution-8">
                <div class="open-source-21">
                  <div class="overlap-group-52">
                    <div class="snippets-16"></div>
                    <icon-github />
                    <p class="view-my-profile-to-s-7 valign-text-middle raleway-normal-cape-cod-22px">
                      {{ viewMyProfileToS1 }}
                    </p>
                    <div class="open-source-projects-contributions-7 valign-text-middle raleway-bold-cape-cod-32px">
                      {{ openSourceProjectsContributions1 }}
                    </div>
                    <img class="eli-img-6" :src="eliImg1" alt="eli-img" />
                  </div>
                </div>
              </div>
              <skills3 :className="skills3Props.className" />
            </div>
            <div class="hire-me-32">
              <text />
              <img class="click-up-6" :src="clickUp1" alt="click-up" />
            </div>
            <private-repositories4 :className="privateRepositories45Props.className" />
            <div class="bitcellular-16">
              <div class="bitcellular-14">
                <img class="blockchain-new-logo-6" :src="blockchainNewLogo1" alt="Blockchain New Logo" />
                <p class="build-a-bitcell-and-7 valign-text-middle raleway-bold-cape-cod-32px">
                  {{ buildABitcellAnd1 }}
                </p>
                <bitcell-signup :userGithubProps="bitcellSignup1Props.userGithubProps" />
              </div>
            </div>
            <div class="blockchain-22">
              <div class="blockchain-23">
                <img
                  class="tradent-logo5-transparent-2-6"
                  :src="tradentLogo5Transparent21"
                  alt="tradent-logo5-transparent 2"
                /><blockchains-text />
                <div class="blockchains-tech-6">
                  <ethereum :className="ethereum1Props.className" />
                  <div class="bitcoin-27">
                    <img class="bitcoin-28" :src="bitcoin1" alt="Bitcoin" />
                    <div class="bitcoin-4 inter-bold-cape-cod-22px">{{ bitcoin2 }}</div>
                  </div>
                </div>
                <x-button :children="xButton1Props.children" :className="xButton1Props.className" />
              </div>
            </div>
            <div class="socials-7">
              <div class="icons-8">
                <img class="discord-new-10" :src="discordNew3" alt="Discord New" /><img
                  class="twitch-9"
                  :src="twitch3"
                  alt="Twitch"
                /><img class="mail-2" :src="mail1" alt="Mail" /><img
                  class="linked-in-3"
                  :src="linkedin1"
                  alt="LinkedIn"
                /><img class="telegram-app-3" :src="telegramApp1" alt="Telegram App" />
              </div>
            </div>
            <div class="recommended-material-13">
              <text2 />
              <div class="posts-7">
                <recommendation1 :className="recommendation13Props.className" />
                <div class="recommendation-7">
                  <div class="overlap-group1-16">
                    <div class="article-1-12 raleway-bold-white-36px">{{ article13 }}</div>
                    <img class="line-1-14" :src="line13" alt="Line 1" />
                    <p class="lorem-ipsum-dolor-si-12 raleway-bold-white-22px">{{ loremIpsumDolorSi3 }}</p>
                  </div>
                </div>
                <div class="recommendation-3-4">
                  <img class="line-1-15" :src="line14" alt="Line 1" />
                  <div class="overlap-group-47">
                    <div class="article-1-12 raleway-bold-white-36px">{{ article14 }}</div>
                    <p class="lorem-ipsum-dolor-si-12 raleway-bold-white-22px">{{ loremIpsumDolorSi4 }}</p>
                  </div>
                </div>
              </div>
            </div>
            <x-footer6 v-bind="xFooter6Props" />
          </div>
        </div>
        <div class="i-pad">
          <div class="body-5">
            <div class="navbar-9 raleway-bold-cape-cod-20px">
              <img class="dashboard-layout-9" :src="dashboardLayout4" alt="Dashboard Layout" />
              <div class="hire-me-30">{{ hireMe4 }}</div>
              <div class="github-15">{{ github4 }}</div>
              <div class="open-source-20">{{ openSource4 }}</div>
              <div class="organizations-15">{{ organizations4 }}</div>
              <button-login :className="buttonLogin4Props.className" />
              <button-wallet :className="buttonWallet4Props.className" />
            </div>
            <hero3 :frame="hero31Props.frame" :heroInfoProps="hero31Props.heroInfoProps" />
            <about-me3 :className="aboutMe35Props.className" :snippets2Props="aboutMe35Props.snippets2Props" />
            <skills4 :className="skills45Props.className" />
            <open-source-contribution3 :className="openSourceContribution35Props.className" />
            <hire-me2 :className="hireMe25Props.className" />
            <private-repositories4 :className="privateRepositories46Props.className" />
            <bitcellular5
              :className="bitcellular56Props.className"
              :bitcellular2Props="bitcellular56Props.bitcellular2Props"
            />
            <blockchain :className="blockchain6Props.className" :blockchain2Props="blockchain6Props.blockchain2Props" />
            <div class="socials-7">
              <div class="icons-8">
                <img class="twitch-10" :src="twitch4" alt="Twitch" /><img class="mail-3" :src="mail2" alt="Mail" /><img
                  class="linked-in-4"
                  :src="linkedin2"
                  alt="LinkedIn"
                /><img class="telegram-app-4" :src="telegramApp2" alt="Telegram App" /><img
                  class="discord-new-7"
                  :src="discordNew4"
                  alt="Discord New"
                />
              </div>
            </div>
            <div class="recommended-material-13">
              <text2 />
              <div class="posts-7">
                <recommendation1 :className="recommendation14Props.className" />
                <recommendation2 :article1="recommendation23Props.article1" />
                <div class="recommendation-3-5">
                  <img class="line-1-16" :src="line15" alt="Line 1" />
                  <div class="overlap-group-47">
                    <div class="article-1-12 raleway-bold-white-36px">{{ article15 }}</div>
                    <p class="lorem-ipsum-dolor-si-12 raleway-bold-white-22px">{{ loremIpsumDolorSi5 }}</p>
                  </div>
                </div>
              </div>
            </div>
            <x-footer
              :image8="xFooter6Props2.image8"
              :className="xFooter6Props2.className"
              :footerMenuProps="xFooter6Props2.footerMenuProps"
            />
          </div>
        </div>
        <div class="i-pad-pro-105-portrait">
          <div class="body-10">
            <div class="navbar-9 raleway-bold-cape-cod-20px">
              <img class="dashboard-layout-9" :src="dashboardLayout5" alt="Dashboard Layout" />
              <div class="hire-me-30">{{ hireMe5 }}</div>
              <div class="github-15">{{ github5 }}</div>
              <div class="open-source-20">{{ openSource5 }}</div>
              <div class="organizations-15">{{ organizations5 }}</div>
              <button-login :className="buttonLogin5Props.className" />
              <button-wallet :className="buttonWallet5Props.className" />
            </div>
            <div class="hero-8">
              <div class="overlap-group5-8">
                <img class="frame-4" :src="frame5" alt="Frame" /><hero-info
                  :spanText1="heroInfo5Props.spanText1"
                  :spanText2="heroInfo5Props.spanText2"
                  :spanText3="heroInfo5Props.spanText3"
                  :name="heroInfo5Props.name"
                  :className="heroInfo5Props.className"
                  :buttonProps="heroInfo5Props.buttonProps"
                />
              </div>
            </div>
            <about-me3 :className="aboutMe36Props.className" :snippets2Props="aboutMe36Props.snippets2Props" />
            <skills4 :className="skills46Props.className" />
            <open-source-contribution3 :className="openSourceContribution36Props.className" />
            <div class="hire-me-31">
              <text />
              <img class="click-up-7" :src="clickUp2" alt="click-up" />
            </div>
            <private-repositories4 :className="privateRepositories47Props.className" />
            <bitcellular5
              :className="bitcellular57Props.className"
              :bitcellular2Props="bitcellular57Props.bitcellular2Props"
            />
            <div class="blockchain-22">
              <div class="blockchain-23">
                <img
                  class="tradent-logo5-transparent-2-7"
                  :src="tradentLogo5Transparent22"
                  alt="tradent-logo5-transparent 2"
                /><blockchains-text />
                <div class="blockchains-tech-6">
                  <ethereum :className="ethereum2Props.className" />
                  <div class="bitcoin-29">
                    <img class="bitcoin-30" :src="bitcoin3" alt="Bitcoin" />
                    <div class="bitcoin-4 inter-bold-cape-cod-22px">{{ bitcoin4 }}</div>
                  </div>
                </div>
                <x-button :children="xButton2Props.children" :className="xButton2Props.className" />
              </div>
            </div>
            <div class="socials-7">
              <div class="icons-8">
                <img class="discord-new-11" :src="discordNew5" alt="Discord New" /><img
                  class="twitch-11"
                  :src="twitch5"
                  alt="Twitch"
                /><img class="icon-mail-6" :src="iconMail3" alt="icon-mail" /><img
                  class="icon-linkedin-5"
                  :src="iconLinkedin3"
                  alt="icon-linkedin"
                /><img class="icon-paper_plane-5" :src="iconPaper_Plane3" alt="icon-paper_plane" />
              </div>
            </div>
            <div class="recommended-material-13">
              <text2 />
              <div class="posts-7">
                <recommendation1 :className="recommendation15Props.className" />
                <div class="recommendation-7">
                  <div class="overlap-group1-16">
                    <div class="article-1-12 raleway-bold-white-36px">{{ article16 }}</div>
                    <img class="line-1-17" :src="line16" alt="Line 1" />
                    <p class="lorem-ipsum-dolor-si-12 raleway-bold-white-22px">{{ loremIpsumDolorSi6 }}</p>
                  </div>
                </div>
                <div class="recommendation-3-6">
                  <img class="line-1-18" :src="line17" alt="Line 1" />
                  <div class="overlap-group-47">
                    <div class="article-1-12 raleway-bold-white-36px">{{ article17 }}</div>
                    <p class="lorem-ipsum-dolor-si-12 raleway-bold-white-22px">{{ loremIpsumDolorSi7 }}</p>
                  </div>
                </div>
              </div>
            </div>
            <x-footer
              :image8="xFooter7Props.image8"
              :className="xFooter7Props.className"
              :footerMenuProps="xFooter7Props.footerMenuProps"
            />
          </div>
        </div>
        <div class="i-pad-pro-105-landscape">
          <div class="body-11">
            <div class="navbar-9 raleway-bold-cape-cod-20px">
              <img class="dashboard-layout-9" :src="dashboardLayout6" alt="Dashboard Layout" />
              <div class="hire-me-30">{{ hireMe6 }}</div>
              <div class="github-15">{{ github6 }}</div>
              <div class="open-source-20">{{ openSource6 }}</div>
              <div class="organizations-15">{{ organizations6 }}</div>
              <button-login :className="buttonLogin6Props.className" />
              <button-wallet :className="buttonWallet6Props.className" />
            </div>
            <div class="hero-8">
              <div class="overlap-group5-9">
                <img class="frame-5" :src="frame6" alt="Frame" /><hero-info
                  :spanText1="heroInfo6Props.spanText1"
                  :spanText2="heroInfo6Props.spanText2"
                  :spanText3="heroInfo6Props.spanText3"
                  :name="heroInfo6Props.name"
                  :className="heroInfo6Props.className"
                  :buttonProps="heroInfo6Props.buttonProps"
                />
              </div>
            </div>
            <about-me3 :className="aboutMe37Props.className" :snippets2Props="aboutMe37Props.snippets2Props" />
            <skills4 :className="skills47Props.className" />
            <open-source-contribution3 :className="openSourceContribution37Props.className" />
            <hire-me2 :className="hireMe26Props.className" />
            <private-repositories4 :className="privateRepositories48Props.className" />
            <bitcellular5
              :className="bitcellular58Props.className"
              :bitcellular2Props="bitcellular58Props.bitcellular2Props"
            />
            <blockchain :className="blockchain7Props.className" :blockchain2Props="blockchain7Props.blockchain2Props" />
            <div class="socials-7">
              <div class="icons-8">
                <img class="twitch-12" :src="twitch6" alt="Twitch" /><img
                  class="icon-mail-7"
                  :src="iconMail4"
                  alt="icon-mail"
                /><img class="icon-linkedin-6" :src="iconLinkedin4" alt="icon-linkedin" /><img
                  class="icon-paper_plane-6"
                  :src="iconPaper_Plane4"
                  alt="icon-paper_plane"
                /><img class="discord-new-6" :src="discordNew6" alt="Discord New" />
              </div>
            </div>
            <div class="recommended-material-13">
              <text2 />
              <div class="posts-7">
                <recommendation1 :className="recommendation16Props.className" />
                <recommendation2 :article1="recommendation24Props.article1" />
                <div class="recommendation-7">
                  <div class="overlap-group-46">
                    <div class="article-1-12 raleway-bold-white-36px">{{ article18 }}</div>
                    <img class="line-1-19" :src="line18" alt="Line 1" />
                    <p class="lorem-ipsum-dolor-si-12 raleway-bold-white-22px">{{ loremIpsumDolorSi8 }}</p>
                  </div>
                </div>
              </div>
            </div>
            <x-footer
              :image8="xFooter8Props.image8"
              :className="xFooter8Props.className"
              :footerMenuProps="xFooter8Props.footerMenuProps"
            />
          </div>
        </div>
        <div class="i-pad">
          <div class="body-5">
            <div class="navbar-9 raleway-bold-cape-cod-20px">
              <img class="dashboard-layout-9" :src="dashboardLayout7" alt="Dashboard Layout" />
              <div class="hire-me-30">{{ hireMe7 }}</div>
              <div class="github-15">{{ github7 }}</div>
              <div class="open-source-20">{{ openSource7 }}</div>
              <div class="organizations-15">{{ organizations7 }}</div>
              <button-login :className="buttonLogin7Props.className" />
              <button-wallet :className="buttonWallet7Props.className" />
            </div>
            <hero3 :frame="hero32Props.frame" :heroInfoProps="hero32Props.heroInfoProps" />
            <about-me3 :className="aboutMe38Props.className" :snippets2Props="aboutMe38Props.snippets2Props" />
            <skills4 :className="skills48Props.className" />
            <open-source-contribution3 :className="openSourceContribution38Props.className" />
            <hire-me2 :className="hireMe27Props.className" />
            <private-repositories4 :className="privateRepositories49Props.className" />
            <bitcellular5
              :className="bitcellular59Props.className"
              :bitcellular2Props="bitcellular59Props.bitcellular2Props"
            />
            <blockchain :className="blockchain8Props.className" :blockchain2Props="blockchain8Props.blockchain2Props" />
            <div class="socials-7">
              <div class="icons-8">
                <img class="twitch-13" :src="twitch7" alt="Twitch" /><img
                  class="icon-mail-8"
                  :src="iconMail5"
                  alt="icon-mail"
                /><img class="icon-linkedin-7" :src="iconLinkedin5" alt="icon-linkedin" /><img
                  class="icon-paper_plane-7"
                  :src="iconPaper_Plane5"
                  alt="icon-paper_plane"
                /><img class="discord-new-7" :src="discordNew7" alt="Discord New" />
              </div>
            </div>
            <div class="recommended-material-13">
              <text2 />
              <div class="posts-7">
                <recommendation1 :className="recommendation17Props.className" />
                <recommendation2 :article1="recommendation25Props.article1" />
                <div class="recommendation-3-7">
                  <img class="line-1-20" :src="line19" alt="Line 1" />
                  <div class="overlap-group-47">
                    <div class="article-1-12 raleway-bold-white-36px">{{ article19 }}</div>
                    <p class="lorem-ipsum-dolor-si-12 raleway-bold-white-22px">{{ loremIpsumDolorSi9 }}</p>
                  </div>
                </div>
              </div>
            </div>
            <x-footer
              :image8="xFooter9Props.image8"
              :className="xFooter9Props.className"
              :footerMenuProps="xFooter9Props.footerMenuProps"
            />
          </div>
        </div>
        <div class="i-pad-pro-129-landscape">
          <div class="body-12">
            <div class="navbar-9 raleway-bold-cape-cod-20px">
              <img class="dashboard-layout-9" :src="dashboardLayout8" alt="Dashboard Layout" />
              <div class="hire-me-30">{{ hireMe8 }}</div>
              <div class="github-15">{{ github8 }}</div>
              <div class="open-source-20">{{ openSource8 }}</div>
              <div class="organizations-15">{{ organizations8 }}</div>
              <button-login :className="buttonLogin8Props.className" />
              <button-wallet :className="buttonWallet8Props.className" />
            </div>
            <hero4 :frame="hero41Props.frame" :heroInfoProps="hero41Props.heroInfoProps" />
            <about-me3 :className="aboutMe39Props.className" :snippets2Props="aboutMe39Props.snippets2Props" />
            <skills4 :className="skills49Props.className" />
            <open-source-contribution3 :className="openSourceContribution39Props.className" />
            <hire-me2 :className="hireMe28Props.className" />
            <private-repositories4 :className="privateRepositories410Props.className" />
            <bitcellular5
              :className="bitcellular510Props.className"
              :bitcellular2Props="bitcellular510Props.bitcellular2Props"
            />
            <blockchain :className="blockchain9Props.className" :blockchain2Props="blockchain9Props.blockchain2Props" />
            <div class="socials-7">
              <div class="icons-9">
                <img class="icon-1" :src="iconMail6" alt="icon-mail" /><img
                  class="icon-1"
                  :src="iconLinkedin6"
                  alt="icon-linkedin"
                /><img class="icon-1" :src="iconPaper_Plane6" alt="icon-paper_plane" /><img
                  class="discord-new-8"
                  :src="discordNew8"
                  alt="Discord New"
                /><img class="twitch-14" :src="twitch8" alt="Twitch" />
              </div>
            </div>
            <recommended-material
              :className="recommendedMaterial4Props.className"
              :postsProps="recommendedMaterial4Props.postsProps"
            />
            <x-footer
              :image8="xFooter10Props.image8"
              :className="xFooter10Props.className"
              :footerMenuProps="xFooter10Props.footerMenuProps"
            />
          </div>
        </div>
        <div class="surface-pro-3-portrait">
          <div class="body-13">
            <div class="navbar-9 raleway-bold-cape-cod-20px">
              <img class="dashboard-layout-9" :src="dashboardLayout9" alt="Dashboard Layout" />
              <div class="hire-me-30">{{ hireMe9 }}</div>
              <div class="github-15">{{ github9 }}</div>
              <div class="open-source-20">{{ openSource9 }}</div>
              <div class="organizations-15">{{ organizations9 }}</div>
              <button-login :className="buttonLogin9Props.className" />
              <button-wallet :className="buttonWallet9Props.className" />
            </div>
            <div class="hero-8">
              <div class="overlap-group5-10">
                <img class="frame-6" :src="frame7" alt="Frame" /><hero-info
                  :spanText1="heroInfo7Props.spanText1"
                  :spanText2="heroInfo7Props.spanText2"
                  :spanText3="heroInfo7Props.spanText3"
                  :name="heroInfo7Props.name"
                  :className="heroInfo7Props.className"
                  :buttonProps="heroInfo7Props.buttonProps"
                />
              </div>
            </div>
            <about-me3 :className="aboutMe310Props.className" :snippets2Props="aboutMe310Props.snippets2Props" />
            <skills4 :className="skills410Props.className" />
            <open-source-contribution3 :className="openSourceContribution310Props.className" />
            <div class="hire-me-31">
              <text />
              <img class="click-up-8" :src="clickUp3" alt="click-up" />
            </div>
            <private-repositories4 :className="privateRepositories411Props.className" />
            <bitcellular5
              :className="bitcellular511Props.className"
              :bitcellular2Props="bitcellular511Props.bitcellular2Props"
            />
            <blockchain
              :className="blockchain10Props.className"
              :blockchain2Props="blockchain10Props.blockchain2Props"
            />
            <div class="socials-7">
              <div class="icons-8">
                <img class="discord-new-12" :src="discordNew9" alt="Discord New" /><img
                  class="twitch-15"
                  :src="twitch9"
                  alt="Twitch"
                /><img class="icon-mail-9" :src="iconMail7" alt="icon-mail" /><img
                  class="icon-linkedin-8"
                  :src="iconLinkedin7"
                  alt="icon-linkedin"
                /><img class="icon-paper_plane-8" :src="iconPaper_Plane7" alt="icon-paper_plane" />
              </div>
            </div>
            <div class="recommended-material-13">
              <text2 />
              <div class="posts-7">
                <recommendation1 :className="recommendation18Props.className" />
                <recommendation2 :article1="recommendation26Props.article1" />
                <div class="recommendation-3-8">
                  <img class="line-1-21" :src="line110" alt="Line 1" />
                  <div class="overlap-group-47">
                    <div class="article-1-12 raleway-bold-white-36px">{{ article110 }}</div>
                    <p class="lorem-ipsum-dolor-si-12 raleway-bold-white-22px">{{ loremIpsumDolorSi10 }}</p>
                  </div>
                </div>
              </div>
            </div>
            <x-footer
              :image8="xFooter11Props.image8"
              :className="xFooter11Props.className"
              :footerMenuProps="xFooter11Props.footerMenuProps"
            />
          </div>
        </div>
        <div class="surface-pro-3-landscape">
          <div class="body-4">
            <div class="navbar-9 raleway-bold-cape-cod-20px">
              <img class="dashboard-layout-9" :src="dashboardLayout10" alt="Dashboard Layout" />
              <div class="hire-me-30">{{ hireMe10 }}</div>
              <div class="github-15">{{ github10 }}</div>
              <div class="open-source-20">{{ openSource10 }}</div>
              <div class="organizations-15">{{ organizations10 }}</div>
              <button-login :className="buttonLogin10Props.className" />
              <button-wallet :className="buttonWallet10Props.className" />
            </div>
            <div class="hero-7">
              <div class="overlap-group5-3">
                <img class="frame" :src="frame8" alt="Frame" /><hero-info
                  :spanText1="heroInfo8Props.spanText1"
                  :spanText2="heroInfo8Props.spanText2"
                  :spanText3="heroInfo8Props.spanText3"
                  :name="heroInfo8Props.name"
                  :className="heroInfo8Props.className"
                  :buttonProps="heroInfo8Props.buttonProps"
                />
              </div>
            </div>
            <about-me3 :className="aboutMe311Props.className" :snippets2Props="aboutMe311Props.snippets2Props" />
            <skills4 :className="skills411Props.className" />
            <open-source-contribution3 :className="openSourceContribution311Props.className" />
            <hire-me2 :className="hireMe29Props.className" />
            <private-repositories4 :className="privateRepositories412Props.className" />
            <bitcellular5
              :className="bitcellular512Props.className"
              :bitcellular2Props="bitcellular512Props.bitcellular2Props"
            />
            <blockchain
              :className="blockchain11Props.className"
              :blockchain2Props="blockchain11Props.blockchain2Props"
            />
            <socials :className="socials3Props.className" />
            <recommended-material
              :className="recommendedMaterial5Props.className"
              :postsProps="recommendedMaterial5Props.postsProps"
            />
            <x-footer
              :image8="xFooter12Props.image8"
              :className="xFooter12Props.className"
              :footerMenuProps="xFooter12Props.footerMenuProps"
            />
          </div>
        </div>
        <div class="surface-pro-4-portrait">
          <div class="body-14">
            <div class="navbar-9 raleway-bold-cape-cod-20px">
              <img class="dashboard-layout-9" :src="dashboardLayout11" alt="Dashboard Layout" />
              <div class="hire-me-30">{{ hireMe11 }}</div>
              <div class="github-15">{{ github11 }}</div>
              <div class="open-source-20">{{ openSource11 }}</div>
              <div class="organizations-15">{{ organizations11 }}</div>
              <button-login :className="buttonLogin11Props.className" />
              <button-wallet :className="buttonWallet11Props.className" />
            </div>
            <div class="hero-8">
              <div class="overlap-group5-11">
                <img class="frame-7" :src="frame9" alt="Frame" /><hero-info
                  :spanText1="heroInfo9Props.spanText1"
                  :spanText2="heroInfo9Props.spanText2"
                  :spanText3="heroInfo9Props.spanText3"
                  :name="heroInfo9Props.name"
                  :className="heroInfo9Props.className"
                  :buttonProps="heroInfo9Props.buttonProps"
                />
              </div>
            </div>
            <about-me3 :className="aboutMe312Props.className" :snippets2Props="aboutMe312Props.snippets2Props" />
            <skills4 :className="skills412Props.className" />
            <open-source-contribution3 :className="openSourceContribution312Props.className" />
            <div class="hire-me-31">
              <text />
              <img class="click-up-9" :src="clickUp4" alt="click-up" />
            </div>
            <private-repositories4 :className="privateRepositories413Props.className" />
            <bitcellular5
              :className="bitcellular513Props.className"
              :bitcellular2Props="bitcellular513Props.bitcellular2Props"
            />
            <blockchain
              :className="blockchain12Props.className"
              :blockchain2Props="blockchain12Props.blockchain2Props"
            />
            <div class="socials-7">
              <div class="icons-8">
                <img class="discord-new-13" :src="discordNew10" alt="Discord New" /><img
                  class="twitch-16"
                  :src="twitch10"
                  alt="Twitch"
                /><img class="icon-mail-10" :src="iconMail8" alt="icon-mail" /><img
                  class="icon-linkedin-9"
                  :src="iconLinkedin8"
                  alt="icon-linkedin"
                /><img class="icon-paper_plane-9" :src="iconPaper_Plane8" alt="icon-paper_plane" />
              </div>
            </div>
            <div class="recommended-material-13">
              <text2 />
              <div class="posts-7">
                <recommendation1 :className="recommendation19Props.className" />
                <recommendation2 :article1="recommendation27Props.article1" />
                <div class="recommendation-3-9">
                  <img class="line-1-22" :src="line111" alt="Line 1" />
                  <div class="overlap-group-47">
                    <div class="article-1-12 raleway-bold-white-36px">{{ article111 }}</div>
                    <p class="lorem-ipsum-dolor-si-12 raleway-bold-white-22px">{{ loremIpsumDolorSi11 }}</p>
                  </div>
                </div>
              </div>
            </div>
            <x-footer
              :image8="xFooter13Props.image8"
              :className="xFooter13Props.className"
              :footerMenuProps="xFooter13Props.footerMenuProps"
            />
          </div>
        </div>
        <div class="surface-pro-4-landscape">
          <div class="body-15">
            <div class="navbar-9 raleway-bold-cape-cod-20px">
              <img class="dashboard-layout-9" :src="dashboardLayout12" alt="Dashboard Layout" />
              <div class="hire-me-30">{{ hireMe12 }}</div>
              <div class="github-15">{{ github12 }}</div>
              <div class="open-source-20">{{ openSource12 }}</div>
              <div class="organizations-15">{{ organizations12 }}</div>
              <button-login :className="buttonLogin12Props.className" />
              <button-wallet :className="buttonWallet12Props.className" />
            </div>
            <hero4
              :frame="hero42Props.frame"
              :className="hero42Props.className"
              :heroInfoProps="hero42Props.heroInfoProps"
            />
            <about-me3 :className="aboutMe313Props.className" :snippets2Props="aboutMe313Props.snippets2Props" />
            <skills4 :className="skills413Props.className" />
            <open-source-contribution3 :className="openSourceContribution313Props.className" />
            <hire-me2 :className="hireMe210Props.className" />
            <private-repositories4 :className="privateRepositories414Props.className" />
            <bitcellular5
              :className="bitcellular514Props.className"
              :bitcellular2Props="bitcellular514Props.bitcellular2Props"
            />
            <blockchain
              :className="blockchain13Props.className"
              :blockchain2Props="blockchain13Props.blockchain2Props"
            />
            <div class="socials-7">
              <div class="icons-9">
                <img class="icon-1" :src="iconMail9" alt="icon-mail" /><img
                  class="icon-1"
                  :src="iconLinkedin9"
                  alt="icon-linkedin"
                /><img class="icon-1" :src="iconPaper_Plane9" alt="icon-paper_plane" /><img
                  class="discord-new-8"
                  :src="discordNew11"
                  alt="Discord New"
                /><img class="twitch-17" :src="twitch11" alt="Twitch" />
              </div>
            </div>
            <recommended-material
              :className="recommendedMaterial6Props.className"
              :postsProps="recommendedMaterial6Props.postsProps"
            />
            <x-footer
              :image8="xFooter14Props.image8"
              :className="xFooter14Props.className"
              :footerMenuProps="xFooter14Props.footerMenuProps"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="home-mobile">
      <div class="iphone-container">
        <div class="i-phone-12-pro-max">
          <div class="home-1">
            <div class="body-16">
              <div class="flex-col">
                <navbar2 :className="navbar2Props.className" />
                <div class="hero-13">
                  <div class="overlap-group5-12">
                    <img class="frame-8" :src="frame10" alt="Frame" /><hero-info3
                      :name="heroInfo3Props2.name"
                      :spanText1="heroInfo3Props2.spanText1"
                      :spanText2="heroInfo3Props2.spanText2"
                      :spanText3="heroInfo3Props2.spanText3"
                      :xButtonProps="heroInfo3Props2.xButtonProps"
                    />
                  </div>
                </div>
                <div class="about-me-13">
                  <div class="about-me-14">
                    <div class="well-rounded-and-highly-grounded-7 valign-text-middle raleway-bold-cape-cod-32px">
                      {{ wellRoundedAndHighlyGrounded2 }}
                    </div>
                    <p
                      class="a-self-taught-web-de-7 valign-text-middle raleway-normal-cape-cod-22px"
                      v-html="aSelfTaughtWebDe2"
                    ></p>
                    <img class="globe-8" :src="globe2" alt="Globe" />
                  </div>
                  <snippets2 :className="snippets22Props.className" />
                </div>
                <skills4 :className="skills414Props.className" />
                <div class="open-source-contribution-7">
                  <div class="open-source-22">
                    <img class="eli-img-7" :src="eliImg2" alt="eli-img" />
                    <div class="overlap-group-48">
                      <div class="open-source-projects-contributions-6 valign-text-middle raleway-bold-cape-cod-32px">
                        {{ openSourceProjectsContributions2 }}
                      </div>
                      <p class="view-my-profile-to-s-6 valign-text-middle raleway-normal-cape-cod-22px">
                        {{ viewMyProfileToS2 }}
                      </p>
                      <div class="icon-github-6">
                        <img class="git-hub-26" :src="github13" alt="GitHub" />
                        <div class="git-hub-24 valign-text-middle raleway-bold-cape-cod-16px">{{ github14 }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hire-me-33">
                  <img class="click-up-10" :src="clickUp5" alt="click-up" /><text :className="text1Props.className" />
                </div>
                <div class="private-repositories-20">
                  <div class="private-repositories-21">
                    <div class="overlap-group-49">
                      <div class="private-repositories-22 valign-text-middle raleway-bold-cape-cod-32px">
                        {{ privateRepositories1 }}
                      </div>
                      <p class="in-order-to-access-m-6 valign-text-middle raleway-normal-cape-cod-22px">
                        <span
                          ><span class="raleway-normal-cape-cod-22px">{{ spanText1 }}</span
                          ><span class="raleway-bold-cape-cod-22px">{{ spanText2 }}</span
                          ><span class="raleway-normal-cape-cod-22px">{{ spanText3 }}</span
                          ><span class="raleway-bold-cape-cod-22px">{{ spanText4 }}</span
                          ><span class="raleway-normal-cape-cod-22px">{{ spanText5 }}</span>
                        </span>
                      </p>
                      <div class="github-link-6">
                        <img class="git-hub-27" :src="github15" alt="GitHub" />
                        <div class="git-hub-25 valign-text-middle raleway-bold-cape-cod-22px">{{ github16 }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bitcellular-15">
                  <div class="bitcellular-14">
                    <img class="blockchain-new-logo-7" :src="blockchainNewLogo2" alt="Blockchain New Logo" />
                    <p class="build-a-bitcell-and-6 valign-text-middle raleway-bold-cape-cod-32px">
                      {{ buildABitcellAnd2 }}
                    </p>
                    <bitcell-signup :userGithubProps="bitcellSignup2Props.userGithubProps" />
                  </div>
                </div>
                <div class="blockchain-24">
                  <div class="blockchain-23">
                    <img
                      class="tradent-logo5-transparent-2-8"
                      :src="tradentLogo5Transparent23"
                      alt="tradent-logo5-transparent 2"
                    /><blockchains-text :className="blockchainsText1Props.className" />
                    <div class="blockchains-tech-7">
                      <div class="ethereum-30">
                        <img class="ethereum-31" :src="ethereum1" alt="Ethereum" />
                        <div class="ethereum-4 inter-bold-cape-cod-22px">{{ ethereum2 }}</div>
                      </div>
                      <div class="bitcoin-31">
                        <img class="bitcoin-32" :src="bitcoin5" alt="Bitcoin" />
                        <div class="bitcoin-4 inter-bold-cape-cod-22px">{{ bitcoin6 }}</div>
                      </div>
                    </div>
                    <x-button :children="xButton3Props.children" :className="xButton3Props.className" />
                  </div>
                </div>
                <div class="socials-8">
                  <div class="icons-8">
                    <img class="telegram-app-5" :src="telegramApp3" alt="Telegram App" /><img
                      class="discord-new-9"
                      :src="discordNew12"
                      alt="Discord New"
                    /><img class="twitch-18" :src="twitch12" alt="Twitch" /><img
                      class="mail-4"
                      :src="mail3"
                      alt="Mail"
                    /><img class="linked-in-5" :src="linkedin3" alt="LinkedIn" />
                  </div>
                </div>
                <div class="recommended-material-14">
                  <text2 />
                  <div class="posts-8">
                    <recommendation1 :className="recommendation110Props.className" />
                    <recommendation22 :article1="recommendation221Props.article1" />
                    <recommendation22
                      :article1="recommendation222Props.article1"
                      :className="recommendation222Props.className"
                    />
                  </div>
                </div>
                <x-footer7 v-bind="xFooter7Props2" />
              </div>
            </div>
          </div>
        </div>
        <div class="i-phone-12-pro">
          <div class="home-2">
            <div class="body-17">
              <div class="flex-col">
                <div class="navbar-10 raleway-bold-cape-cod-20px">
                  <img class="dashboard-layout-9" :src="dashboardLayout13" alt="Dashboard Layout" />
                  <div class="hire-me-30">{{ hireMe13 }}</div>
                  <div class="github-15">{{ github17 }}</div>
                  <div class="open-source-20">{{ openSource13 }}</div>
                  <div class="organizations-15">{{ organizations13 }}</div>
                  <button-login :className="buttonLogin13Props.className" />
                  <button-wallet :className="buttonWallet13Props.className" />
                </div>
                <div class="hero-9">
                  <div class="overlap-group5-4">
                    <img class="frame-9" :src="frame11" alt="Frame" /><hero-info
                      :spanText1="heroInfo10Props.spanText1"
                      :spanText2="heroInfo10Props.spanText2"
                      :spanText3="heroInfo10Props.spanText3"
                      :name="heroInfo10Props.name"
                      :className="heroInfo10Props.className"
                      :buttonProps="heroInfo10Props.buttonProps"
                    />
                  </div>
                </div>
                <div class="about-me-13">
                  <div class="about-me-14">
                    <div class="well-rounded-and-highly-grounded-7 valign-text-middle raleway-bold-cape-cod-32px">
                      {{ wellRoundedAndHighlyGrounded3 }}
                    </div>
                    <p class="a-self-taught-web-de-7 valign-text-middle raleway-normal-cape-cod-22px">
                      {{ aSelfTaughtWebDe3 }}
                    </p>
                    <img class="globe-9" :src="globe3" alt="Globe" />
                  </div>
                  <snippets2 :className="snippets23Props.className" />
                </div>
                <skills4 :className="skills415Props.className" />
                <div class="open-source-contribution-7">
                  <div class="open-source-23">
                    <img class="eli-img-8" :src="eliImg3" alt="eli-img" />
                    <div class="overlap-group-48">
                      <div class="open-source-projects-contributions-6 valign-text-middle raleway-bold-cape-cod-32px">
                        {{ openSourceProjectsContributions3 }}
                      </div>
                      <p class="view-my-profile-to-s-6 valign-text-middle raleway-normal-cape-cod-22px">
                        {{ viewMyProfileToS3 }}
                      </p>
                      <div class="icon-github-7">
                        <img class="git-hub-28" :src="github18" alt="GitHub" />
                        <div class="git-hub-24 valign-text-middle raleway-bold-cape-cod-16px">{{ github19 }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hire-me-34">
                  <img class="click-up-11" :src="clickUp6" alt="click-up" /><text :className="text2Props.className" />
                </div>
                <div class="private-repositories-20">
                  <div class="private-repositories-21">
                    <div class="overlap-group-49">
                      <div class="private-repositories-22 valign-text-middle raleway-bold-cape-cod-32px">
                        {{ privateRepositories2 }}
                      </div>
                      <p class="in-order-to-access-m-6 valign-text-middle raleway-normal-cape-cod-22px">
                        <span
                          ><span class="raleway-normal-cape-cod-22px">{{ spanText6 }}</span
                          ><span class="raleway-bold-cape-cod-22px">{{ spanText7 }}</span
                          ><span class="raleway-normal-cape-cod-22px">{{ spanText8 }}</span
                          ><span class="raleway-bold-cape-cod-22px">{{ spanText9 }}</span
                          ><span class="raleway-normal-cape-cod-22px">{{ spanText10 }}</span>
                        </span>
                      </p>
                      <div class="github-link-7">
                        <img class="git-hub-29" :src="github20" alt="GitHub" />
                        <div class="git-hub-25 valign-text-middle raleway-bold-cape-cod-22px">{{ github21 }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bitcellular-15">
                  <div class="bitcellular-14">
                    <img class="blockchain-new-logo-8" :src="blockchainNewLogo3" alt="Blockchain New Logo" />
                    <p class="build-a-bitcell-and-6 valign-text-middle raleway-bold-cape-cod-32px">
                      {{ buildABitcellAnd3 }}
                    </p>
                    <bitcell-signup :userGithubProps="bitcellSignup3Props.userGithubProps" />
                  </div>
                </div>
                <div class="blockchain-24">
                  <div class="blockchain-23">
                    <img
                      class="tradent-logo5-transparent-2-9"
                      :src="tradentLogo5Transparent24"
                      alt="tradent-logo5-transparent 2"
                    /><blockchains-text :className="blockchainsText2Props.className" />
                    <div class="blockchains-tech-7">
                      <div class="ethereum-32">
                        <img class="ethereum-33" :src="ethereum3" alt="Ethereum" />
                        <div class="ethereum-4 inter-bold-cape-cod-22px">{{ ethereum4 }}</div>
                      </div>
                      <div class="bitcoin-33">
                        <img class="bitcoin-34" :src="bitcoin7" alt="Bitcoin" />
                        <div class="bitcoin-4 inter-bold-cape-cod-22px">{{ bitcoin8 }}</div>
                      </div>
                    </div>
                    <x-button :children="xButton4Props.children" :className="xButton4Props.className" />
                  </div>
                </div>
                <div class="socials-8">
                  <div class="icons-8">
                    <img class="linked-in-6" :src="linkedin4" alt="LinkedIn" /><img
                      class="telegram-app-6"
                      :src="telegramApp4"
                      alt="Telegram App"
                    /><img class="discord-new-9" :src="discordNew13" alt="Discord New" /><img
                      class="twitch-19"
                      :src="twitch13"
                      alt="Twitch"
                    /><img class="icon-mail-11" :src="iconMail10" alt="icon-mail" />
                  </div>
                </div>
                <div class="recommended-material-14">
                  <text2 />
                  <div class="posts-7">
                    <div class="recommendation-7">
                      <div class="overlap-group2-14">
                        <div class="article-1-13 valign-text-middle raleway-bold-white-24px">{{ article112 }}</div>
                        <img class="line-1-23" :src="line112" alt="Line 1" />
                        <p class="lorem-ipsum-dolor-si-13 raleway-bold-white-22px">{{ loremIpsumDolorSi12 }}</p>
                      </div>
                    </div>
                    <recommendation23 :article1="recommendation231Props.article1" />
                    <recommendation23
                      :article1="recommendation232Props.article1"
                      :className="recommendation232Props.className"
                    />
                  </div>
                </div>
                <x-footer8 v-bind="xFooter8Props2" />
              </div>
            </div>
          </div>
        </div>
        <div class="i-phone-12-mini">
          <div class="home-3">
            <div class="body-18">
              <div class="flex-col">
                <div class="navbar-10 raleway-bold-cape-cod-20px">
                  <img class="dashboard-layout-9" :src="dashboardLayout14" alt="Dashboard Layout" />
                  <div class="hire-me-30">{{ hireMe14 }}</div>
                  <div class="github-15">{{ github22 }}</div>
                  <div class="open-source-20">{{ openSource14 }}</div>
                  <div class="organizations-15">{{ organizations14 }}</div>
                  <button-login :className="buttonLogin14Props.className" />
                  <button-wallet :className="buttonWallet14Props.className" />
                </div>
                <div class="hero-9">
                  <div class="overlap-group5-4">
                    <img class="frame-10" :src="frame12" alt="Frame" /><hero-info
                      :spanText1="heroInfo11Props.spanText1"
                      :spanText2="heroInfo11Props.spanText2"
                      :spanText3="heroInfo11Props.spanText3"
                      :name="heroInfo11Props.name"
                      :className="heroInfo11Props.className"
                      :buttonProps="heroInfo11Props.buttonProps"
                    />
                  </div>
                </div>
                <div class="about-me-13">
                  <div class="about-me-14">
                    <div class="well-rounded-and-highly-grounded-7 valign-text-middle raleway-bold-cape-cod-32px">
                      {{ wellRoundedAndHighlyGrounded4 }}
                    </div>
                    <p class="a-self-taught-web-de-7 valign-text-middle raleway-normal-cape-cod-22px">
                      {{ aSelfTaughtWebDe4 }}
                    </p>
                    <img class="globe-10" :src="globe4" alt="Globe" />
                  </div>
                  <snippets2 :className="snippets24Props.className" />
                </div>
                <skills4 :className="skills416Props.className" />
                <div class="open-source-contribution-7">
                  <div class="open-source-24">
                    <img class="eli-img-9" :src="eliImg4" alt="eli-img" />
                    <div class="overlap-group-48">
                      <div class="open-source-projects-contributions-6 valign-text-middle raleway-bold-cape-cod-32px">
                        {{ openSourceProjectsContributions4 }}
                      </div>
                      <p class="view-my-profile-to-s-6 valign-text-middle raleway-normal-cape-cod-22px">
                        {{ viewMyProfileToS4 }}
                      </p>
                      <div class="icon-github-8">
                        <img class="git-hub-30" :src="github23" alt="GitHub" />
                        <div class="git-hub-24 valign-text-middle raleway-bold-cape-cod-16px">{{ github24 }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hire-me-35">
                  <img class="click-up-12" :src="clickUp7" alt="click-up" /><text :className="text3Props.className" />
                </div>
                <div class="private-repositories-20">
                  <div class="private-repositories-21">
                    <div class="overlap-group-49">
                      <div class="private-repositories-22 valign-text-middle raleway-bold-cape-cod-32px">
                        {{ privateRepositories3 }}
                      </div>
                      <p class="in-order-to-access-m-6 valign-text-middle raleway-normal-cape-cod-22px">
                        <span
                          ><span class="raleway-normal-cape-cod-22px">{{ spanText11 }}</span
                          ><span class="raleway-bold-cape-cod-22px">{{ spanText12 }}</span
                          ><span class="raleway-normal-cape-cod-22px">{{ spanText13 }}</span
                          ><span class="raleway-bold-cape-cod-22px">{{ spanText14 }}</span
                          ><span class="raleway-normal-cape-cod-22px">{{ spanText15 }}</span>
                        </span>
                      </p>
                      <div class="github-link-8">
                        <img class="git-hub-31" :src="github25" alt="GitHub" />
                        <div class="git-hub-25 valign-text-middle raleway-bold-cape-cod-22px">{{ github26 }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bitcellular-15">
                  <div class="bitcellular-14">
                    <img class="blockchain-new-logo-9" :src="blockchainNewLogo4" alt="Blockchain New Logo" />
                    <p class="build-a-bitcell-and-6 valign-text-middle raleway-bold-cape-cod-32px">
                      {{ buildABitcellAnd4 }}
                    </p>
                    <bitcell-signup :userGithubProps="bitcellSignup4Props.userGithubProps" />
                  </div>
                </div>
                <div class="blockchain-24">
                  <div class="blockchain-23">
                    <img
                      class="tradent-logo5-transparent-2-10"
                      :src="tradentLogo5Transparent25"
                      alt="tradent-logo5-transparent 2"
                    /><blockchains-text :className="blockchainsText3Props.className" />
                    <div class="blockchains-tech-7">
                      <div class="ethereum-34">
                        <img class="ethereum-35" :src="ethereum5" alt="Ethereum" />
                        <div class="ethereum-4 inter-bold-cape-cod-22px">{{ ethereum6 }}</div>
                      </div>
                      <div class="bitcoin-35">
                        <img class="bitcoin-36" :src="bitcoin9" alt="Bitcoin" />
                        <div class="bitcoin-4 inter-bold-cape-cod-22px">{{ bitcoin10 }}</div>
                      </div>
                    </div>
                    <x-button :children="xButton5Props.children" :className="xButton5Props.className" />
                  </div>
                </div>
                <div class="socials-8">
                  <div class="icons-8">
                    <img class="linked-in-7" :src="linkedin5" alt="LinkedIn" /><img
                      class="telegram-app-7"
                      :src="telegramApp5"
                      alt="Telegram App"
                    /><img class="discord-new-9" :src="discordNew14" alt="Discord New" /><img
                      class="twitch-20"
                      :src="twitch14"
                      alt="Twitch"
                    /><img class="icon-mail-12" :src="iconMail11" alt="icon-mail" />
                  </div>
                </div>
                <div class="recommended-material-14">
                  <text2 />
                  <div class="posts-7">
                    <div class="recommendation-7">
                      <div class="overlap-group2-14">
                        <div class="article-1-13 valign-text-middle raleway-bold-white-24px">{{ article113 }}</div>
                        <img class="line-1-24" :src="line113" alt="Line 1" />
                        <p class="lorem-ipsum-dolor-si-13 raleway-bold-white-22px">{{ loremIpsumDolorSi13 }}</p>
                      </div>
                    </div>
                    <recommendation24 :article1="recommendation241Props.article1" />
                    <recommendation24
                      :article1="recommendation242Props.article1"
                      :className="recommendation242Props.className"
                    />
                  </div>
                </div>
                <x-footer9 v-bind="xFooter9Props2" />
              </div>
            </div>
          </div>
        </div>
        <div class="i-phone-se">
          <div class="home-4">
            <div class="body-19">
              <div class="flex-col">
                <div class="navbar-10 raleway-bold-cape-cod-20px">
                  <img class="dashboard-layout-9" :src="dashboardLayout15" alt="Dashboard Layout" />
                  <div class="hire-me-30">{{ hireMe15 }}</div>
                  <div class="github-15">{{ github27 }}</div>
                  <div class="open-source-20">{{ openSource15 }}</div>
                  <div class="organizations-15">{{ organizations15 }}</div>
                  <button-login :className="buttonLogin15Props.className" />
                  <button-wallet :className="buttonWallet15Props.className" />
                </div>
                <div class="hero-9">
                  <div class="overlap-group5-4">
                    <img class="frame-11" :src="frame13" alt="Frame" /><hero-info
                      :spanText1="heroInfo12Props.spanText1"
                      :spanText2="heroInfo12Props.spanText2"
                      :spanText3="heroInfo12Props.spanText3"
                      :name="heroInfo12Props.name"
                      :className="heroInfo12Props.className"
                      :buttonProps="heroInfo12Props.buttonProps"
                    />
                  </div>
                </div>
                <div class="about-me-13">
                  <div class="about-me-14">
                    <div class="well-rounded-and-highly-grounded-7 valign-text-middle raleway-bold-cape-cod-32px">
                      {{ wellRoundedAndHighlyGrounded5 }}
                    </div>
                    <p class="a-self-taught-web-de-7 valign-text-middle raleway-normal-cape-cod-22px">
                      {{ aSelfTaughtWebDe5 }}
                    </p>
                    <img class="globe-11" :src="globe5" alt="Globe" />
                  </div>
                  <snippets2 :className="snippets25Props.className" />
                </div>
                <skills4 :className="skills417Props.className" />
                <div class="open-source-contribution-7">
                  <div class="open-source-25">
                    <img class="eli-img-10" :src="eliImg5" alt="eli-img" />
                    <div class="overlap-group-48">
                      <div class="open-source-projects-contributions-6 valign-text-middle raleway-bold-cape-cod-32px">
                        {{ openSourceProjectsContributions5 }}
                      </div>
                      <p class="view-my-profile-to-s-6 valign-text-middle raleway-normal-cape-cod-22px">
                        {{ viewMyProfileToS5 }}
                      </p>
                      <div class="icon-github-9">
                        <img class="git-hub-32" :src="github28" alt="GitHub" />
                        <div class="git-hub-24 valign-text-middle raleway-bold-cape-cod-16px">{{ github29 }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hire-me-36">
                  <img class="click-up-13" :src="clickUp8" alt="click-up" /><text :className="text4Props.className" />
                </div>
                <div class="private-repositories-20">
                  <div class="private-repositories-21">
                    <div class="overlap-group-49">
                      <div class="private-repositories-22 valign-text-middle raleway-bold-cape-cod-32px">
                        {{ privateRepositories4 }}
                      </div>
                      <p class="in-order-to-access-m-6 valign-text-middle raleway-normal-cape-cod-22px">
                        <span
                          ><span class="raleway-normal-cape-cod-22px">{{ spanText16 }}</span
                          ><span class="raleway-bold-cape-cod-22px">{{ spanText17 }}</span
                          ><span class="raleway-normal-cape-cod-22px">{{ spanText18 }}</span
                          ><span class="raleway-bold-cape-cod-22px">{{ spanText19 }}</span
                          ><span class="raleway-normal-cape-cod-22px">{{ spanText20 }}</span>
                        </span>
                      </p>
                      <div class="github-link-9">
                        <img class="git-hub-33" :src="github30" alt="GitHub" />
                        <div class="git-hub-25 valign-text-middle raleway-bold-cape-cod-22px">{{ github31 }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bitcellular-15">
                  <div class="bitcellular-14">
                    <img class="blockchain-new-logo-10" :src="blockchainNewLogo5" alt="Blockchain New Logo" />
                    <p class="build-a-bitcell-and-6 valign-text-middle raleway-bold-cape-cod-32px">
                      {{ buildABitcellAnd5 }}
                    </p>
                    <bitcell-signup :userGithubProps="bitcellSignup5Props.userGithubProps" />
                  </div>
                </div>
                <div class="blockchain-24">
                  <div class="blockchain-23">
                    <img
                      class="tradent-logo5-transparent-2-11"
                      :src="tradentLogo5Transparent26"
                      alt="tradent-logo5-transparent 2"
                    /><blockchains-text :className="blockchainsText4Props.className" />
                    <div class="blockchains-tech-7">
                      <div class="ethereum-36">
                        <img class="ethereum-37" :src="ethereum7" alt="Ethereum" />
                        <div class="ethereum-4 inter-bold-cape-cod-22px">{{ ethereum8 }}</div>
                      </div>
                      <div class="bitcoin-37">
                        <img class="bitcoin-38" :src="bitcoin11" alt="Bitcoin" />
                        <div class="bitcoin-4 inter-bold-cape-cod-22px">{{ bitcoin12 }}</div>
                      </div>
                    </div>
                    <x-button :children="xButton6Props.children" :className="xButton6Props.className" />
                  </div>
                </div>
                <div class="socials-8">
                  <div class="icons-8">
                    <img class="linked-in-8" :src="linkedin6" alt="LinkedIn" /><img
                      class="telegram-app-8"
                      :src="telegramApp6"
                      alt="Telegram App"
                    /><img class="discord-new-9" :src="discordNew15" alt="Discord New" /><img
                      class="twitch-21"
                      :src="twitch15"
                      alt="Twitch"
                    /><img class="icon-mail-13" :src="iconMail12" alt="icon-mail" />
                  </div>
                </div>
                <div class="recommended-material-14">
                  <text2 />
                  <div class="posts-7">
                    <div class="recommendation-7">
                      <div class="overlap-group2-14">
                        <div class="article-1-13 valign-text-middle raleway-bold-white-24px">{{ article114 }}</div>
                        <img class="line-1-25" :src="line114" alt="Line 1" />
                        <p class="lorem-ipsum-dolor-si-13 raleway-bold-white-22px">{{ loremIpsumDolorSi14 }}</p>
                      </div>
                    </div>
                    <recommendation25 :article1="recommendation251Props.article1" />
                    <recommendation25
                      :article1="recommendation252Props.article1"
                      :className="recommendation252Props.className"
                    />
                  </div>
                </div>
                <x-footer10 v-bind="xFooter10Props2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Hero22 from "./Hero22";
import AboutMe3 from "./AboutMe3";
import Skills4 from "./Skills4";
import OpenSourceContribution3 from "./OpenSourceContribution3";
import HireMe2 from "./HireMe2";
import PrivateRepositories4 from "./PrivateRepositories4";
import Bitcellular5 from "./Bitcellular5";
import Blockchain from "./Blockchain";
import Socials from "./Socials";
import RecommendedMaterial from "./RecommendedMaterial";
import xFooter from "./xFooter";
import Navbar3 from "./Navbar3";
import Hero2 from "./Hero2";
import AboutMe22 from "./AboutMe22";
import Snippets2 from "./Snippets2";
import Skills2 from "./Skills2";
import OpenSourceContribution2 from "./OpenSourceContribution2";
import HireMe from "./HireMe";
import PrivateRepositories3 from "./PrivateRepositories3";
import Bitcellular3 from "./Bitcellular3";
import Blockchain3 from "./Blockchain3";
import Socials2 from "./Socials2";
import RecommendedMaterial2 from "./RecommendedMaterial2";
import xFooter3 from "./xFooter3";
import Navbar6 from "./Navbar6";
import Text2 from "./Text2";
import Recommendation1 from "./Recommendation1";
import Recommendation2 from "./Recommendation2";
import ButtonLogin from "./ButtonLogin";
import ButtonWallet from "./ButtonWallet";
import HeroInfo from "./HeroInfo";
import Navbar4 from "./Navbar4";
import AboutMe2 from "./AboutMe2";
import IconGithub from "./IconGithub";
import Skills3 from "./Skills3";
import Text from "./Text";
import BitcellSignup from "./BitcellSignup";
import BlockchainsText from "./BlockchainsText";
import Ethereum from "./Ethereum";
import xButton from "./xButton";
import xFooter6 from "./xFooter6";
import Hero3 from "./Hero3";
import Hero4 from "./Hero4";
import Navbar2 from "./Navbar2";
import HeroInfo3 from "./HeroInfo3";
import Recommendation22 from "./Recommendation22";
import xFooter7 from "./xFooter7";
import Recommendation23 from "./Recommendation23";
import xFooter8 from "./xFooter8";
import Recommendation24 from "./Recommendation24";
import xFooter9 from "./xFooter9";
import Recommendation25 from "./Recommendation25";
import xFooter10 from "./xFooter10";
export default {
  name: "Home",
  components: {
    Navbar,
    Hero22,
    AboutMe3,
    Skills4,
    OpenSourceContribution3,
    HireMe2,
    PrivateRepositories4,
    Bitcellular5,
    Blockchain,
    Socials,
    RecommendedMaterial,
    xFooter,
    Navbar3,
    Hero2,
    AboutMe22,
    Snippets2,
    Skills2,
    OpenSourceContribution2,
    HireMe,
    PrivateRepositories3,
    Bitcellular3,
    Blockchain3,
    Socials2,
    RecommendedMaterial2,
    xFooter3,
    Navbar6,
    Text2,
    Recommendation1,
    Recommendation2,
    ButtonLogin,
    ButtonWallet,
    HeroInfo,
    Navbar4,
    AboutMe2,
    IconGithub,
    Skills3,
    Text,
    BitcellSignup,
    BlockchainsText,
    Ethereum,
    xButton,
    xFooter6,
    Hero3,
    Hero4,
    Navbar2,
    HeroInfo3,
    Recommendation22,
    xFooter7,
    Recommendation23,
    xFooter8,
    Recommendation24,
    xFooter9,
    Recommendation25,
    xFooter10,
  },
  props: [
    "heroImage",
    "heroInfo",
    "globe1",
    "wellRoundedAndHighlyGrounded1",
    "aSelfTaughtWebDe1",
    "subscribeToGetAccess1",
    "enterYourEmail1",
    "submit1",
    "functionSnippets1",
    "snippetOfTheDay1",
    "iconMail1",
    "iconLinkedin1",
    "iconPaper_Plane1",
    "discordNew1",
    "twitch1",
    "article11",
    "line11",
    "loremIpsumDolorSi1",
    "dashboardLayout1",
    "hireMe1",
    "github1",
    "openSource1",
    "organizations1",
    "frame1",
    "dashboardLayout2",
    "hireMe2",
    "github2",
    "openSource2",
    "organizations2",
    "frame2",
    "dashboardLayout3",
    "hireMe3",
    "github3",
    "openSource3",
    "organizations3",
    "frame3",
    "twitch2",
    "iconMail2",
    "iconLinkedin2",
    "iconPaper_Plane2",
    "discordNew2",
    "article12",
    "line12",
    "loremIpsumDolorSi2",
    "frame4",
    "subscribeToGetAccess2",
    "enterYourEmail2",
    "submit2",
    "functionSnippets2",
    "snippetOfTheDay2",
    "viewMyProfileToS1",
    "openSourceProjectsContributions1",
    "eliImg1",
    "clickUp1",
    "blockchainNewLogo1",
    "buildABitcellAnd1",
    "tradentLogo5Transparent21",
    "bitcoin1",
    "bitcoin2",
    "discordNew3",
    "twitch3",
    "mail1",
    "linkedin1",
    "telegramApp1",
    "article13",
    "line13",
    "loremIpsumDolorSi3",
    "line14",
    "article14",
    "loremIpsumDolorSi4",
    "dashboardLayout4",
    "hireMe4",
    "github4",
    "openSource4",
    "organizations4",
    "twitch4",
    "mail2",
    "linkedin2",
    "telegramApp2",
    "discordNew4",
    "line15",
    "article15",
    "loremIpsumDolorSi5",
    "dashboardLayout5",
    "hireMe5",
    "github5",
    "openSource5",
    "organizations5",
    "frame5",
    "clickUp2",
    "tradentLogo5Transparent22",
    "bitcoin3",
    "bitcoin4",
    "discordNew5",
    "twitch5",
    "iconMail3",
    "iconLinkedin3",
    "iconPaper_Plane3",
    "article16",
    "line16",
    "loremIpsumDolorSi6",
    "line17",
    "article17",
    "loremIpsumDolorSi7",
    "dashboardLayout6",
    "hireMe6",
    "github6",
    "openSource6",
    "organizations6",
    "frame6",
    "twitch6",
    "iconMail4",
    "iconLinkedin4",
    "iconPaper_Plane4",
    "discordNew6",
    "article18",
    "line18",
    "loremIpsumDolorSi8",
    "dashboardLayout7",
    "hireMe7",
    "github7",
    "openSource7",
    "organizations7",
    "twitch7",
    "iconMail5",
    "iconLinkedin5",
    "iconPaper_Plane5",
    "discordNew7",
    "line19",
    "article19",
    "loremIpsumDolorSi9",
    "dashboardLayout8",
    "hireMe8",
    "github8",
    "openSource8",
    "organizations8",
    "iconMail6",
    "iconLinkedin6",
    "iconPaper_Plane6",
    "discordNew8",
    "twitch8",
    "dashboardLayout9",
    "hireMe9",
    "github9",
    "openSource9",
    "organizations9",
    "frame7",
    "clickUp3",
    "discordNew9",
    "twitch9",
    "iconMail7",
    "iconLinkedin7",
    "iconPaper_Plane7",
    "line110",
    "article110",
    "loremIpsumDolorSi10",
    "dashboardLayout10",
    "hireMe10",
    "github10",
    "openSource10",
    "organizations10",
    "frame8",
    "dashboardLayout11",
    "hireMe11",
    "github11",
    "openSource11",
    "organizations11",
    "frame9",
    "clickUp4",
    "discordNew10",
    "twitch10",
    "iconMail8",
    "iconLinkedin8",
    "iconPaper_Plane8",
    "line111",
    "article111",
    "loremIpsumDolorSi11",
    "dashboardLayout12",
    "hireMe12",
    "github12",
    "openSource12",
    "organizations12",
    "iconMail9",
    "iconLinkedin9",
    "iconPaper_Plane9",
    "discordNew11",
    "twitch11",
    "frame10",
    "wellRoundedAndHighlyGrounded2",
    "aSelfTaughtWebDe2",
    "globe2",
    "eliImg2",
    "openSourceProjectsContributions2",
    "viewMyProfileToS2",
    "github13",
    "github14",
    "clickUp5",
    "privateRepositories1",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "github15",
    "github16",
    "blockchainNewLogo2",
    "buildABitcellAnd2",
    "tradentLogo5Transparent23",
    "ethereum1",
    "ethereum2",
    "bitcoin5",
    "bitcoin6",
    "telegramApp3",
    "discordNew12",
    "twitch12",
    "mail3",
    "linkedin3",
    "dashboardLayout13",
    "hireMe13",
    "github17",
    "openSource13",
    "organizations13",
    "frame11",
    "wellRoundedAndHighlyGrounded3",
    "aSelfTaughtWebDe3",
    "globe3",
    "eliImg3",
    "openSourceProjectsContributions3",
    "viewMyProfileToS3",
    "github18",
    "github19",
    "clickUp6",
    "privateRepositories2",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "github20",
    "github21",
    "blockchainNewLogo3",
    "buildABitcellAnd3",
    "tradentLogo5Transparent24",
    "ethereum3",
    "ethereum4",
    "bitcoin7",
    "bitcoin8",
    "linkedin4",
    "telegramApp4",
    "discordNew13",
    "twitch13",
    "iconMail10",
    "article112",
    "line112",
    "loremIpsumDolorSi12",
    "dashboardLayout14",
    "hireMe14",
    "github22",
    "openSource14",
    "organizations14",
    "frame12",
    "wellRoundedAndHighlyGrounded4",
    "aSelfTaughtWebDe4",
    "globe4",
    "eliImg4",
    "openSourceProjectsContributions4",
    "viewMyProfileToS4",
    "github23",
    "github24",
    "clickUp7",
    "privateRepositories3",
    "spanText11",
    "spanText12",
    "spanText13",
    "spanText14",
    "spanText15",
    "github25",
    "github26",
    "blockchainNewLogo4",
    "buildABitcellAnd4",
    "tradentLogo5Transparent25",
    "ethereum5",
    "ethereum6",
    "bitcoin9",
    "bitcoin10",
    "linkedin5",
    "telegramApp5",
    "discordNew14",
    "twitch14",
    "iconMail11",
    "article113",
    "line113",
    "loremIpsumDolorSi13",
    "dashboardLayout15",
    "hireMe15",
    "github27",
    "openSource15",
    "organizations15",
    "frame13",
    "wellRoundedAndHighlyGrounded5",
    "aSelfTaughtWebDe5",
    "globe5",
    "eliImg5",
    "openSourceProjectsContributions5",
    "viewMyProfileToS5",
    "github28",
    "github29",
    "clickUp8",
    "privateRepositories4",
    "spanText16",
    "spanText17",
    "spanText18",
    "spanText19",
    "spanText20",
    "github30",
    "github31",
    "blockchainNewLogo5",
    "buildABitcellAnd5",
    "tradentLogo5Transparent26",
    "ethereum7",
    "ethereum8",
    "bitcoin11",
    "bitcoin12",
    "linkedin6",
    "telegramApp6",
    "discordNew15",
    "twitch15",
    "iconMail12",
    "article114",
    "line114",
    "loremIpsumDolorSi14",
    "navbarProps",
    "hero22Props",
    "aboutMe31Props",
    "bitcellular51Props",
    "blockchain1Props",
    "recommendedMaterial1Props",
    "xFooter1Props",
    "navbar3Props",
    "hero2Props",
    "aboutMe22Props",
    "snippets21Props",
    "openSourceContribution2Props",
    "hireMeProps",
    "privateRepositories3Props",
    "bitcellular3Props",
    "blockchain3Props",
    "socials2Props",
    "recommendedMaterial2Props",
    "xFooter3Props",
    "navbar6Props",
    "skills41Props",
    "openSourceContribution31Props",
    "hireMe21Props",
    "privateRepositories41Props",
    "bitcellular52Props",
    "blockchain2Props",
    "recommendation11Props",
    "recommendation21Props",
    "xFooter2Props",
    "buttonLogin1Props",
    "buttonWallet1Props",
    "heroInfo1Props",
    "aboutMe32Props",
    "skills42Props",
    "openSourceContribution32Props",
    "hireMe22Props",
    "privateRepositories42Props",
    "bitcellular53Props",
    "blockchain3Props2",
    "socials1Props",
    "recommendedMaterial2Props2",
    "xFooter3Props2",
    "buttonLogin2Props",
    "buttonWallet2Props",
    "heroInfo2Props",
    "aboutMe33Props",
    "skills43Props",
    "openSourceContribution33Props",
    "hireMe23Props",
    "privateRepositories43Props",
    "bitcellular54Props",
    "blockchain4Props",
    "socials2Props2",
    "recommendedMaterial3Props",
    "xFooter4Props",
    "buttonLogin3Props",
    "buttonWallet3Props",
    "heroInfo3Props",
    "aboutMe34Props",
    "skills44Props",
    "openSourceContribution34Props",
    "hireMe24Props",
    "privateRepositories44Props",
    "bitcellular55Props",
    "blockchain5Props",
    "recommendation12Props",
    "recommendation22Props",
    "xFooter5Props",
    "heroInfo4Props",
    "skills3Props",
    "privateRepositories45Props",
    "bitcellSignup1Props",
    "ethereum1Props",
    "xButton1Props",
    "recommendation13Props",
    "xFooter6Props",
    "buttonLogin4Props",
    "buttonWallet4Props",
    "hero31Props",
    "aboutMe35Props",
    "skills45Props",
    "openSourceContribution35Props",
    "hireMe25Props",
    "privateRepositories46Props",
    "bitcellular56Props",
    "blockchain6Props",
    "recommendation14Props",
    "recommendation23Props",
    "xFooter6Props2",
    "buttonLogin5Props",
    "buttonWallet5Props",
    "heroInfo5Props",
    "aboutMe36Props",
    "skills46Props",
    "openSourceContribution36Props",
    "privateRepositories47Props",
    "bitcellular57Props",
    "ethereum2Props",
    "xButton2Props",
    "recommendation15Props",
    "xFooter7Props",
    "buttonLogin6Props",
    "buttonWallet6Props",
    "heroInfo6Props",
    "aboutMe37Props",
    "skills47Props",
    "openSourceContribution37Props",
    "hireMe26Props",
    "privateRepositories48Props",
    "bitcellular58Props",
    "blockchain7Props",
    "recommendation16Props",
    "recommendation24Props",
    "xFooter8Props",
    "buttonLogin7Props",
    "buttonWallet7Props",
    "hero32Props",
    "aboutMe38Props",
    "skills48Props",
    "openSourceContribution38Props",
    "hireMe27Props",
    "privateRepositories49Props",
    "bitcellular59Props",
    "blockchain8Props",
    "recommendation17Props",
    "recommendation25Props",
    "xFooter9Props",
    "buttonLogin8Props",
    "buttonWallet8Props",
    "hero41Props",
    "aboutMe39Props",
    "skills49Props",
    "openSourceContribution39Props",
    "hireMe28Props",
    "privateRepositories410Props",
    "bitcellular510Props",
    "blockchain9Props",
    "recommendedMaterial4Props",
    "xFooter10Props",
    "buttonLogin9Props",
    "buttonWallet9Props",
    "heroInfo7Props",
    "aboutMe310Props",
    "skills410Props",
    "openSourceContribution310Props",
    "privateRepositories411Props",
    "bitcellular511Props",
    "blockchain10Props",
    "recommendation18Props",
    "recommendation26Props",
    "xFooter11Props",
    "buttonLogin10Props",
    "buttonWallet10Props",
    "heroInfo8Props",
    "aboutMe311Props",
    "skills411Props",
    "openSourceContribution311Props",
    "hireMe29Props",
    "privateRepositories412Props",
    "bitcellular512Props",
    "blockchain11Props",
    "socials3Props",
    "recommendedMaterial5Props",
    "xFooter12Props",
    "buttonLogin11Props",
    "buttonWallet11Props",
    "heroInfo9Props",
    "aboutMe312Props",
    "skills412Props",
    "openSourceContribution312Props",
    "privateRepositories413Props",
    "bitcellular513Props",
    "blockchain12Props",
    "recommendation19Props",
    "recommendation27Props",
    "xFooter13Props",
    "buttonLogin12Props",
    "buttonWallet12Props",
    "hero42Props",
    "aboutMe313Props",
    "skills413Props",
    "openSourceContribution313Props",
    "hireMe210Props",
    "privateRepositories414Props",
    "bitcellular514Props",
    "blockchain13Props",
    "recommendedMaterial6Props",
    "xFooter14Props",
    "navbar2Props",
    "heroInfo3Props2",
    "snippets22Props",
    "skills414Props",
    "text1Props",
    "bitcellSignup2Props",
    "blockchainsText1Props",
    "xButton3Props",
    "recommendation110Props",
    "recommendation221Props",
    "recommendation222Props",
    "xFooter7Props2",
    "buttonLogin13Props",
    "buttonWallet13Props",
    "heroInfo10Props",
    "snippets23Props",
    "skills415Props",
    "text2Props",
    "bitcellSignup3Props",
    "blockchainsText2Props",
    "xButton4Props",
    "recommendation231Props",
    "recommendation232Props",
    "xFooter8Props2",
    "buttonLogin14Props",
    "buttonWallet14Props",
    "heroInfo11Props",
    "snippets24Props",
    "skills416Props",
    "text3Props",
    "bitcellSignup4Props",
    "blockchainsText3Props",
    "xButton5Props",
    "recommendation241Props",
    "recommendation242Props",
    "xFooter9Props2",
    "buttonLogin15Props",
    "buttonWallet15Props",
    "heroInfo12Props",
    "snippets25Props",
    "skills417Props",
    "text4Props",
    "bitcellSignup5Props",
    "blockchainsText4Props",
    "xButton6Props",
    "recommendation251Props",
    "recommendation252Props",
    "xFooter10Props2",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.home
  align-items: flex-start
  border: 1px none
  display: flex
  gap: 660px
  height: 100vh
  min-height: 7273px
  min-width: 24500px
  width: 100%

.home-mockup-1
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  justify-content: center
  position: relative
  width: fit-content

.home-desktop
  height: 7273px
  min-width: 7292px

.flex-row-23
  align-items: flex-start
  display: flex
  gap: 120px
  min-width: 7292px

.generic-desktop-1,
.mac-book-pro,
.surface-pro-3-landscape
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  width: 1440px

.body-4
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 7273px
  overflow: hidden
  position: relative
  width: 1440px

.about-me-15
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 111.3px
  height: 982px
  position: relative

.mac-book
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  width: 1152px

.body-6
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 7273px
  overflow: hidden
  position: relative
  width: 1152px

.hero-10
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 963px
  padding: 154.5px 0
  width: 1152px

.hero-i-container-4
  height: 604px
  margin-left: 79px
  position: relative
  width: 1073px

.hero-image-4
  height: 604px
  left: 220px
  position: absolute
  top: 0
  width: 853px

.hero-info-11
  height: 355px
  left: 0
  position: absolute
  top: 21px
  width: 669px

.about-me-16
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 62.3px
  height: 982px
  width: 1160px

.about-me-17
  display: flex
  flex-direction: column
  height: 456.71px
  margin-left: 195px
  width: 756px

.globe-7
  height: 57.87px
  margin-left: 361.2px
  width: 30.31px

.well-rounded-and-highly-grounded-8
  height: 63.78px
  letter-spacing: 0
  line-height: normal
  margin-left: 195.7px
  margin-top: 39.0px
  text-align: center
  width: 361.27px

.a-self-taught-web-de-8
  height: 261.85px
  letter-spacing: 0
  line-height: normal
  margin-top: 34.2px
  text-align: center
  width: 752px

.snippets-14
  align-items: flex-start
  display: flex
  margin-left: 167px
  min-width: 800px

.overlap-group4-5
  border-radius: 16px
  height: 371px
  position: relative
  width: 798px

.overlap-group2-15
  align-items: flex-end
  background-color: $seagull
  border-radius: 16px
  display: flex
  height: 371px
  justify-content: flex-end
  left: 0
  min-width: 798px
  padding: 42.8px 34.8px
  position: absolute
  top: 0

.subscribe-to-get-access-15
  height: 31px
  letter-spacing: 0
  line-height: normal
  margin-bottom: 12.14px
  text-align: center
  width: 189px

.overlap-group-50
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border-radius: 16px
  display: flex
  height: 57px
  margin-left: 46px
  min-width: 356px
  padding: 12.4px 22.7px

.enter-your-email-5
  height: 31px
  letter-spacing: 0
  line-height: normal
  width: 189px

.overlap-group1-17
  align-items: flex-end
  background-color: $white
  border-radius: 16px
  display: flex
  height: 57px
  justify-content: flex-end
  margin-left: 24px
  min-width: 114px
  padding: 6.2px 14.9px

.submit-5
  height: 44px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 84px

.overlap-group3-7
  align-items: flex-end
  background-color: $white
  border-radius: 16px
  display: flex
  height: 124px
  left: 54px
  min-width: 702px
  padding: 12.8px 17.4px
  position: absolute
  top: 120px

.function-snippets-5
  letter-spacing: 0
  line-height: normal
  min-height: 97px
  width: 666px

.snippet-of-the-day-15
  height: 51px
  left: 185px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 31px
  width: 427px

.socials-7
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 337px
  margin-left: -2px
  width: 1512px

.icons-8
  display: flex
  margin-left: 136px
  margin-top: 129px
  width: 1240px

.icon-1
  height: 70px
  margin-top: 10px
  width: 70px

.icon-linkedin-3,
.icon-paper_plane-3,
.icon-linkedin-4,
.icon-paper_plane-4,
.linked-in-3,
.linked-in-4,
.telegram-app-4,
.icon-linkedin-5,
.icon-paper_plane-5,
.icon-linkedin-6,
.icon-paper_plane-6,
.icon-linkedin-7,
.icon-paper_plane-7,
.icon-linkedin-8,
.icon-paper_plane-8,
.icon-linkedin-9,
.icon-paper_plane-9
  height: 70px
  margin-left: 220px
  margin-top: 10px
  width: 70px

.discord-new-6
  height: 80px
  margin-left: 220px
  width: 80px

.twitch-7
  height: 70px
  margin-left: 319px
  margin-top: -3744px
  width: 70px

.recommended-material-13
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 114px
  height: 863px
  position: relative
  width: 1512px

.posts-7
  display: flex
  gap: 92px
  margin-left: 100px
  position: relative
  width: 1311px

.recommendation-7
  align-items: flex-start
  display: flex
  height: 394px
  min-width: 377px

.overlap-group-46
  align-items: center
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%, rgb(36, 18, 106) 100%)
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 18px
  min-height: 394px
  padding: 33px 0
  width: 373px

.article-1-12
  letter-spacing: 0
  line-height: normal
  margin-left: 3.0px
  min-height: 42px
  min-width: 170px

.line-1-12
  align-self: flex-start
  height: 4px
  margin-left: 56px
  width: 58px

.lorem-ipsum-dolor-si-12
  letter-spacing: 0
  line-height: normal
  min-height: 238px
  text-align: center
  width: 317px

.navbar-9
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 90px
  position: relative
  width: 1512px

.dashboard-layout-9
  height: 60px
  margin-left: 23px
  margin-top: 15px
  width: 60px

.hire-me-30
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 539px
  margin-top: 34px
  text-align: center
  width: 81px

.github-15
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 19px
  margin-top: 34px
  text-align: center
  width: 77px

.open-source-20
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 19px
  margin-top: 33px
  text-align: center
  width: 145px

.organizations-15
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 19px
  margin-top: 34px
  text-align: center
  width: 163px

.hero-7
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  padding: 0 72px
  width: 1512px

.overlap-group5-3
  height: 963px
  margin-left: 7px
  position: relative
  width: 1361px

.frame
  height: 963px
  left: 216px
  position: absolute
  top: 0
  width: 1145px

.surface-book
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  width: 1500px

.body-7
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 7273px
  overflow: hidden
  position: relative
  width: 1500px

.hero-11
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  padding: 0 12px
  width: 1512px

.overlap-group5-5
  height: 963px
  margin-left: 67px
  position: relative
  width: 1421px

.frame-1
  height: 963px
  left: 216px
  position: absolute
  top: 0
  width: 1205px

.i-mac
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  width: 1280px

.body-8
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 7273px
  overflow: hidden
  position: relative
  width: 1280px

.hero-8
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  padding: 0 79px
  width: 1512px

.overlap-group5-6
  height: 963px
  position: relative
  width: 1201px

.frame-2
  height: 963px
  left: 216px
  position: absolute
  top: 0
  width: 985px

.twitch-8
  height: 70px
  margin-left: -3183px
  margin-top: -3744px
  width: 70px

.icon-mail-5
  height: 70px
  margin-left: 3113px
  margin-top: 10px
  width: 70px

.line-1-13
  height: 4px
  margin-right: 75.0px
  width: 186px

.home-tablet
  height: 7273px
  min-width: 11918px

.flex-row-24
  align-items: flex-start
  display: flex
  gap: 120px
  min-width: 11918px

.i-pad-minii-pad-97-portrait
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  width: 768px

.body-9
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 7273px
  overflow: hidden
  position: relative
  width: 768px

.hero-12
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 867px
  width: 769px

.overlap-group5-7
  height: 761px
  position: relative
  width: 768px

.frame-3
  height: 584px
  left: 0
  position: absolute
  top: 177px
  width: 768px

.about-me-18
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 1054px
  position: relative
  width: 769px

.snippets-15
  align-items: flex-start
  display: flex
  margin-left: 83px
  min-width: 605px

.overlap-group4-6
  border-radius: 16px
  height: 371px
  position: relative
  width: 603px

.overlap-group2-16
  align-items: flex-end
  background-color: $seagull
  border-radius: 16px
  display: flex
  height: 371px
  justify-content: flex-end
  left: 0
  min-width: 603px
  padding: 42.8px 26.3px
  position: absolute
  top: 0

.subscribe-to-get-access-16
  height: 31px
  letter-spacing: 0
  line-height: normal
  margin-bottom: 12.14px
  text-align: center
  width: 143px

.overlap-group-51
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border-radius: 16px
  display: flex
  height: 57px
  margin-left: 34px
  min-width: 269px
  padding: 12.4px 17.1px

.enter-your-email-6
  height: 31px
  letter-spacing: 0
  line-height: normal
  width: 143px

.overlap-group1-18
  align-items: flex-end
  background-color: $white
  border-radius: 16px
  display: flex
  height: 57px
  justify-content: flex-end
  margin-left: 18px
  min-width: 86px
  padding: 6.2px 11.3px

.submit-6
  height: 44px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 64px

.overlap-group3-8
  align-items: flex-end
  background-color: $white
  border-radius: 16px
  display: flex
  height: 124px
  left: 41px
  min-width: 530px
  padding: 12.8px 13.1px
  position: absolute
  top: 120px

.function-snippets-6
  letter-spacing: 0
  line-height: normal
  min-height: 97px
  width: 504px

.snippet-of-the-day-16
  height: 51px
  left: 214px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 35px
  width: 176px

.overlap-group6-2
  height: 784px
  margin-top: 55px
  position: relative
  width: 769px

.open-source-contribution-8
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 525px
  left: 0
  overflow: hidden
  position: absolute
  top: 259px
  width: 769px

.open-source-21
  align-items: flex-start
  display: flex
  margin-left: 129px
  margin-top: 93px
  min-width: 1257px

.overlap-group-52
  height: 339px
  position: relative
  width: 1253px

.snippets-16
  background-color: $seagull-2
  border: 1px none
  border-radius: 16px
  height: 261px
  left: 0
  position: absolute
  top: 78px
  width: 1253px

.view-my-profile-to-s-7
  height: 26px
  left: 75px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 235px

.open-source-projects-contributions-7
  height: 38px
  left: 335px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 171px

.eli-img-6
  height: 150px
  left: 552px
  object-fit: cover
  position: absolute
  top: 0
  width: 87px

.hire-me-32
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 30px
  height: 1046px
  margin-top: 41px
  position: relative
  width: 1512px

.click-up-6
  height: 753px
  margin-left: 489px
  object-fit: cover
  width: 279px

.bitcellular-16
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 401px
  width: 1512px

.bitcellular-14
  display: flex
  flex-direction: column
  height: 254px
  margin-left: 229px
  margin-top: 74px
  position: relative
  width: 1056px

.blockchain-new-logo-6
  height: 90px
  margin-left: 482px
  width: 57px

.build-a-bitcell-and-7
  height: 38px
  letter-spacing: 0
  line-height: normal
  margin-left: 156px
  margin-top: 32px
  text-align: center
  width: 742px

.blockchain-22
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 610px
  margin-top: 2px
  width: 1512px

.blockchain-23
  display: flex
  flex-direction: column
  height: 442px
  margin-left: 451px
  margin-top: 81px
  position: relative
  width: 609px

.tradent-logo5-transparent-2-6
  height: 120px
  margin-left: 244px
  object-fit: cover
  width: 73px

.blockchains-tech-6
  display: flex
  gap: 52.5px
  margin-left: 100px
  margin-top: 29px
  position: relative
  width: 409px

.bitcoin-27
  display: flex
  gap: 6310.4px
  width: 160.86px

.bitcoin-28
  height: 45px
  margin-left: -6295.0px
  margin-top: -3144px
  width: 53.35px

.bitcoin-4
  height: 27px
  letter-spacing: 0
  line-height: normal
  margin-top: 9px
  width: 90.1px

.discord-new-10
  height: 80px
  margin-left: -5423px
  margin-top: -3754px
  width: 80px

.twitch-9,
.twitch-11,
.twitch-15,
.twitch-16,
.twitch-18,
.telegram-app-6,
.twitch-19,
.telegram-app-7,
.twitch-20,
.telegram-app-8,
.twitch-21
  height: 70px
  margin-left: 220px
  margin-top: -3744px
  width: 70px

.mail-2
  height: 70px
  margin-left: 5053px
  margin-top: 10px
  width: 70px

.telegram-app-3
  height: 70px
  margin-left: 220px
  margin-top: 10px
  width: 54px

.overlap-group1-16
  align-items: center
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%)
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 18px
  min-height: 394px
  padding: 33px 0
  width: 373px

.line-1-14
  align-self: flex-start
  height: 4px
  margin-left: 56px
  width: 143px

.recommendation-3-4
  align-items: flex-start
  display: flex
  gap: 5977px
  height: 394px
  min-width: 377px

.line-1-15
  height: 1px
  margin-left: -6239px
  margin-top: -3994px
  width: 262px

.overlap-group-47
  align-items: center
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%, rgb(36, 18, 106) 100%)
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 40px
  min-height: 394px
  padding: 33px 0
  width: 373px

.i-pad
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  width: 1024px

.body-5
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 7273px
  overflow: hidden
  position: relative
  width: 1024px

.twitch-10
  height: 70px
  margin-left: -6011px
  margin-top: -3744px
  width: 70px

.mail-3
  height: 70px
  margin-left: 5941px
  margin-top: 10px
  width: 70px

.discord-new-7
  height: 80px
  margin-left: 220px
  width: 20px

.recommendation-3-5
  align-items: flex-start
  display: flex
  gap: 6865px
  height: 394px
  min-width: 377px

.line-1-16
  height: 1px
  margin-left: -7127px
  margin-top: -3994px
  width: 262px

.i-pad-pro-105-portrait
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  width: 834px

.body-10
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 7273px
  overflow: hidden
  position: relative
  width: 834px

.overlap-group5-8
  height: 963px
  position: relative
  width: 755px

.frame-4
  height: 963px
  left: 216px
  position: absolute
  top: 0
  width: 539px

.hire-me-31
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 30px
  height: 1046px
  position: relative
  width: 1512px

.click-up-7
  height: 753px
  margin-left: 489px
  object-fit: cover
  width: 345px

.tradent-logo5-transparent-2-7
  height: 120px
  margin-left: 244px
  object-fit: cover
  width: 120px

.bitcoin-29
  display: flex
  gap: 35.9px
  width: 160.86px

.bitcoin-30
  height: 45px
  margin-left: 0
  width: 32.86px

.discord-new-11
  height: 80px
  margin-left: -7455px
  margin-top: -3754px
  width: 80px

.icon-mail-6
  height: 70px
  margin-left: 7085px
  margin-top: 10px
  width: 70px

.line-1-17
  height: 4px
  margin-right: 52.0px
  width: 209px

.recommendation-3-6
  align-items: flex-start
  display: flex
  gap: 8009px
  height: 394px
  min-width: 377px

.line-1-18
  height: 1px
  margin-left: -8271px
  margin-top: -3994px
  width: 262px

.i-pad-pro-105-landscape
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  width: 1112px

.body-11
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 7273px
  overflow: hidden
  position: relative
  width: 1112px

.overlap-group5-9
  height: 963px
  position: relative
  width: 1033px

.frame-5
  height: 963px
  left: 216px
  position: absolute
  top: 0
  width: 817px

.twitch-12
  height: 70px
  margin-left: -8109px
  margin-top: -3744px
  width: 70px

.icon-mail-7
  height: 70px
  margin-left: 8039px
  margin-top: 10px
  width: 70px

.line-1-19
  align-self: flex-start
  height: 4px
  margin-left: 56px
  width: 18px

.twitch-13
  height: 70px
  margin-left: -9341px
  margin-top: -3744px
  width: 70px

.icon-mail-8
  height: 70px
  margin-left: 9271px
  margin-top: 10px
  width: 70px

.recommendation-3-7
  align-items: flex-start
  display: flex
  gap: 10195px
  height: 394px
  min-width: 377px

.line-1-20
  height: 1px
  margin-left: -10457px
  margin-top: -3994px
  width: 262px

.i-pad-pro-129-landscape
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  width: 1366px

.body-12
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 7273px
  overflow: hidden
  position: relative
  width: 1366px

.icons-9
  display: flex
  gap: 220px
  margin-left: 136px
  margin-top: 129px
  width: 1240px

.discord-new-8
  height: 80px
  width: 80px

.twitch-14
  height: 70px
  margin-top: 10px
  width: 62px

.surface-pro-3-portrait
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  width: 990px

.body-13
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 7273px
  overflow: hidden
  position: relative
  width: 990px

.overlap-group5-10
  height: 963px
  position: relative
  width: 911px

.frame-6
  height: 963px
  left: 216px
  position: absolute
  top: 0
  width: 695px

.click-up-8
  height: 753px
  margin-left: 489px
  object-fit: cover
  width: 501px

.discord-new-12
  height: 80px
  margin-left: -12271px
  margin-top: -3754px
  width: 80px

.icon-mail-9
  height: 70px
  margin-left: 11901px
  margin-top: 10px
  width: 70px

.recommendation-3-8
  align-items: flex-start
  display: flex
  gap: 12825px
  height: 394px
  min-width: 377px

.line-1-21
  height: 1px
  margin-left: -13087px
  margin-top: -3994px
  width: 262px

.surface-pro-4-portrait
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  width: 912px

.body-14
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 7273px
  overflow: hidden
  position: relative
  width: 912px

.overlap-group5-11
  height: 963px
  position: relative
  width: 833px

.frame-7
  height: 963px
  left: 216px
  position: absolute
  top: 0
  width: 617px

.click-up-9
  height: 753px
  margin-left: 489px
  object-fit: cover
  width: 423px

.discord-new-13
  height: 80px
  margin-left: -14941px
  margin-top: -3754px
  width: 80px

.icon-mail-10
  height: 70px
  margin-left: 14571px
  margin-top: 10px
  width: 70px

.recommendation-3-9
  align-items: flex-start
  display: flex
  gap: 15495px
  height: 394px
  min-width: 377px

.line-1-22
  height: 1px
  margin-left: -15757px
  margin-top: -3994px
  width: 262px

.surface-pro-4-landscape
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  width: 1368px

.body-15
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 7273px
  overflow: hidden
  position: relative
  width: 1368px

.twitch-17
  height: 70px
  margin-top: 10px
  width: 64px

.home-mobile
  height: 7273px
  min-width: 1798px

.iphone-container
  align-items: flex-start
  display: flex
  gap: 100px
  min-width: 1798px

.i-phone-12-pro-max
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 7273px
  width: 428px

.home-1
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 10px
  height: 926px
  width: 428px

.body-16
  background-color: $material-themereferrorerror100
  border: 1px none
  height: 7273px
  margin-bottom: -6347.00px
  margin-right: -1084.00px
  min-width: 1512px
  overflow: hidden

.flex-col
  align-items: flex-start
  display: flex
  flex-direction: column
  left: -2px
  min-height: 7273px
  position: relative
  width: 1514px

.hero-13
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 963px
  margin-left: 2px
  width: 426px

.overlap-group5-12
  height: 838px
  position: relative
  width: 426px

.frame-8
  height: 521px
  left: 0
  position: absolute
  top: 317px
  width: 426px

.about-me-13
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 118.3px
  height: 982px
  margin-left: 2px
  position: relative
  width: 1512px

.about-me-14
  display: flex
  flex-direction: column
  height: 386.71px
  margin-left: 160px
  margin-top: 18px
  width: 1195px

.well-rounded-and-highly-grounded-7
  height: 54.01px
  letter-spacing: 0
  line-height: normal
  margin-left: 310px
  margin-top: 82px
  text-align: center
  width: 572.17px

.a-self-taught-web-de-7
  height: 221.71px
  letter-spacing: 0
  line-height: normal
  margin-top: 29.0px
  text-align: center
  width: 1191px

.globe-8
  height: 49px
  margin-left: -18301px
  margin-top: 287.3px
  width: 48px

.open-source-contribution-7
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 525px
  margin-left: 2px
  width: 1512px

.open-source-22
  align-items: flex-start
  display: flex
  gap: 18171px
  height: 339px
  margin-left: 129px
  margin-top: 93px
  min-width: 1257px

.eli-img-7
  height: 150px
  margin-left: -18321px
  margin-top: -639px
  object-fit: cover
  width: 150px

.overlap-group-48
  align-items: center
  align-self: flex-end
  background-color: $seagull-2
  border-radius: 16px
  display: flex
  flex-direction: column
  min-height: 261px
  padding: 23px 73px
  width: 1253px

.open-source-projects-contributions-6
  height: 38px
  letter-spacing: 0
  line-height: normal
  margin-left: 1.0px
  margin-top: 70px
  min-width: 584px
  text-align: center

.view-my-profile-to-s-6
  align-self: flex-end
  height: 26px
  letter-spacing: 0
  line-height: normal
  margin-top: 26px
  min-width: 1105px
  text-align: center

.icon-github-6
  display: flex
  gap: 18880px
  margin-right: 8.0px
  margin-top: 25px
  width: 93px

.git-hub-26
  height: 30px
  margin-left: -18873px
  margin-top: -639px
  width: 30px

.git-hub-24
  height: 19px
  letter-spacing: 0
  line-height: normal
  margin-top: 5px
  text-align: center
  width: 54px

.hire-me-33
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 18073px
  height: 1046px
  margin-left: 2px
  overflow: hidden
  position: relative
  width: 1512px

.click-up-10
  height: 753px
  margin-left: -18384px
  margin-top: -909px
  object-fit: cover
  width: 533px

.private-repositories-20
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 529px
  margin-left: 2px
  margin-top: 2px
  width: 1512px

.private-repositories-21
  align-items: flex-start
  display: flex
  height: 263px
  margin-left: 129px
  margin-top: 133px
  min-width: 1257px

.overlap-group-49
  align-items: center
  background-color: $seagull-2
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 29px
  min-height: 263px
  padding: 31px 100px
  width: 1253px

.private-repositories-22
  height: 38px
  letter-spacing: 0
  line-height: normal
  margin-left: 1.0px
  margin-top: 8px
  min-width: 306px
  text-align: center

.in-order-to-access-m-6
  align-self: flex-start
  height: 52px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 1052px

.github-link-6
  display: flex
  gap: 18883px
  width: 131px

.git-hub-27
  height: 45px
  margin-left: -18873px
  margin-top: -2212px
  width: 45px

.git-hub-25
  height: 26px
  letter-spacing: 0
  line-height: normal
  margin-top: 10px
  text-align: center
  width: 74px

.bitcellular-15
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 401px
  margin-left: 2px
  width: 1512px

.blockchain-new-logo-7
  height: 90px
  margin-left: -18391px
  margin-top: -2741px
  width: 90px

.build-a-bitcell-and-6
  height: 38px
  letter-spacing: 0
  line-height: normal
  margin-left: 156px
  margin-top: 2773px
  text-align: center
  width: 742px

.blockchain-24
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 610px
  margin-left: 2px
  margin-top: 2px
  width: 1512px

.tradent-logo5-transparent-2-8
  height: 120px
  margin-left: -18629px
  margin-top: -3144px
  object-fit: cover
  width: 120px

.blockchains-tech-7
  display: flex
  gap: 52.5px
  margin-left: 100px
  margin-top: 29px
  width: 409px

.ethereum-30
  display: flex
  gap: 18890.8px
  width: 197.61px

.ethereum-31,
.bitcoin-32
  height: 45px
  margin-left: -18873.0px
  margin-top: -3144px
  width: 53.35px

.ethereum-4
  height: 27px
  letter-spacing: 0
  line-height: normal
  margin-top: 9px
  width: 124.48px

.bitcoin-31
  display: flex
  gap: 18888.4px
  width: 160.86px

.socials-8
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 337px
  width: 1512px

.telegram-app-5
  height: 70px
  margin-left: -18291px
  margin-top: -3744px
  width: 70px

.discord-new-9
  height: 80px
  margin-left: 220px
  margin-top: -3754px
  width: 80px

.mail-4
  height: 70px
  margin-left: 17631px
  margin-top: 10px
  width: 70px

.linked-in-5
  height: 70px
  margin-left: 220px
  margin-top: 10px
  width: 4px

.recommended-material-14
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 114px
  height: 863px
  margin-left: 2px
  position: relative
  width: 1512px

.posts-8
  display: flex
  gap: 92px
  height: 394px
  margin-left: 100px
  position: relative
  width: 1311px

.i-phone-12-pro
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 7273px
  width: 390px

.home-2
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 10px
  height: 844px
  width: 390px

.body-17
  background-color: $material-themereferrorerror100
  border: 1px none
  height: 7273px
  margin-bottom: -6429.00px
  margin-right: -1122.00px
  min-width: 1512px
  overflow: hidden

.navbar-10
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 90px
  margin-left: 2px
  position: relative
  width: 1512px

.hero-9
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  margin-left: 2px
  padding: 0 79px
  width: 1512px

.overlap-group5-4
  height: 963px
  position: relative
  width: 669px

.frame-9
  height: 963px
  left: 216px
  position: absolute
  top: 0
  width: 95px

.globe-9
  height: 49px
  margin-left: -18829px
  margin-top: 287.3px
  width: 48px

.open-source-23
  align-items: flex-start
  display: flex
  gap: 18699px
  height: 339px
  margin-left: 129px
  margin-top: 93px
  min-width: 1257px

.eli-img-8
  height: 150px
  margin-left: -18849px
  margin-top: -639px
  object-fit: cover
  width: 150px

.icon-github-7
  display: flex
  gap: 19408px
  margin-right: 8.0px
  margin-top: 25px
  width: 93px

.git-hub-28
  height: 30px
  margin-left: -19401px
  margin-top: -639px
  width: 30px

.hire-me-34
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 18601px
  height: 1046px
  margin-left: 2px
  overflow: hidden
  position: relative
  width: 1512px

.click-up-11
  height: 753px
  margin-left: -18912px
  margin-top: -909px
  object-fit: cover
  width: 533px

.github-link-7
  display: flex
  gap: 19411px
  width: 131px

.git-hub-29
  height: 45px
  margin-left: -19401px
  margin-top: -2212px
  width: 45px

.blockchain-new-logo-8
  height: 90px
  margin-left: -18919px
  margin-top: -2741px
  width: 90px

.tradent-logo5-transparent-2-9
  height: 120px
  margin-left: -19157px
  margin-top: -3144px
  object-fit: cover
  width: 120px

.ethereum-32
  display: flex
  gap: 19418.8px
  width: 197.61px

.ethereum-33,
.bitcoin-34
  height: 45px
  margin-left: -19401.0px
  margin-top: -3144px
  width: 53.35px

.bitcoin-33
  display: flex
  gap: 19416.4px
  width: 160.86px

.linked-in-6
  height: 70px
  margin-left: -19109px
  margin-top: -3744px
  width: 70px

.icon-mail-11
  height: 70px
  margin-left: 18159px
  margin-top: 10px
  width: 70px

.overlap-group2-14
  align-items: center
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%)
  border-radius: 16px
  display: flex
  flex-direction: column
  min-height: 394px
  padding: 27px 0
  width: 373px

.article-1-13
  height: 53px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 267px

.line-1-23
  height: 4px
  margin-right: 27.0px
  margin-top: 13px
  width: 234px

.lorem-ipsum-dolor-si-13
  letter-spacing: 0
  line-height: normal
  margin-top: 18px
  min-height: 238px
  text-align: center
  width: 317px

.i-phone-12-mini
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 7273px
  width: 360px

.home-3
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 10px
  height: 780px
  width: 360px

.body-18
  background-color: $material-themereferrorerror100
  border: 1px none
  height: 7273px
  margin-bottom: -6493.00px
  margin-right: -1152.00px
  min-width: 1512px
  overflow: hidden

.frame-10
  height: 963px
  left: 216px
  position: absolute
  top: 0
  width: 65px

.globe-10
  height: 49px
  margin-left: -19319px
  margin-top: 287.3px
  width: 48px

.open-source-24
  align-items: flex-start
  display: flex
  gap: 19189px
  height: 339px
  margin-left: 129px
  margin-top: 93px
  min-width: 1257px

.eli-img-9
  height: 150px
  margin-left: -19339px
  margin-top: -639px
  object-fit: cover
  width: 150px

.icon-github-8
  display: flex
  gap: 19898px
  margin-right: 8.0px
  margin-top: 25px
  width: 93px

.git-hub-30
  height: 30px
  margin-left: -19891px
  margin-top: -639px
  width: 30px

.hire-me-35
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 19091px
  height: 1046px
  margin-left: 2px
  overflow: hidden
  position: relative
  width: 1512px

.click-up-12
  height: 753px
  margin-left: -19402px
  margin-top: -909px
  object-fit: cover
  width: 533px

.github-link-8
  display: flex
  gap: 19901px
  width: 131px

.git-hub-31
  height: 45px
  margin-left: -19891px
  margin-top: -2212px
  width: 45px

.blockchain-new-logo-9
  height: 90px
  margin-left: -19409px
  margin-top: -2741px
  width: 90px

.tradent-logo5-transparent-2-10
  height: 120px
  margin-left: -19647px
  margin-top: -3144px
  object-fit: cover
  width: 120px

.ethereum-34
  display: flex
  gap: 19908.8px
  width: 197.61px

.ethereum-35,
.bitcoin-36
  height: 45px
  margin-left: -19891.0px
  margin-top: -3144px
  width: 53.35px

.bitcoin-35
  display: flex
  gap: 19906.4px
  width: 160.86px

.linked-in-7
  height: 70px
  margin-left: -19599px
  margin-top: -3744px
  width: 70px

.icon-mail-12
  height: 70px
  margin-left: 18649px
  margin-top: 10px
  width: 70px

.line-1-24
  height: 4px
  margin-right: 57.0px
  margin-top: 13px
  width: 204px

.i-phone-se
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 7273px
  width: 320px

.home-4
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 10px
  height: 568px
  width: 320px

.body-19
  background-color: $material-themereferrorerror100
  border: 1px none
  height: 7273px
  margin-bottom: -6705.00px
  margin-right: -1192.00px
  min-width: 1512px
  overflow: hidden

.frame-11
  height: 963px
  left: 216px
  position: absolute
  top: 0
  width: 25px

.globe-11
  height: 49px
  margin-left: -19779px
  margin-top: 287.3px
  width: 48px

.open-source-25
  align-items: flex-start
  display: flex
  gap: 19649px
  height: 339px
  margin-left: 129px
  margin-top: 93px
  min-width: 1257px

.eli-img-10
  height: 150px
  margin-left: -19799px
  margin-top: -639px
  object-fit: cover
  width: 150px

.icon-github-9
  display: flex
  gap: 20358px
  margin-right: 8.0px
  margin-top: 25px
  width: 93px

.git-hub-32
  height: 30px
  margin-left: -20351px
  margin-top: -639px
  width: 30px

.hire-me-36
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 19551px
  height: 1046px
  margin-left: 2px
  overflow: hidden
  position: relative
  width: 1512px

.click-up-13
  height: 753px
  margin-left: -19862px
  margin-top: -909px
  object-fit: cover
  width: 533px

.github-link-9
  display: flex
  gap: 20361px
  width: 131px

.git-hub-33
  height: 45px
  margin-left: -20351px
  margin-top: -2212px
  width: 45px

.blockchain-new-logo-10
  height: 90px
  margin-left: -19869px
  margin-top: -2741px
  width: 90px

.tradent-logo5-transparent-2-11
  height: 120px
  margin-left: -20107px
  margin-top: -3144px
  object-fit: cover
  width: 120px

.ethereum-36
  display: flex
  gap: 20368.8px
  width: 197.61px

.ethereum-37,
.bitcoin-38
  height: 45px
  margin-left: -20351.0px
  margin-top: -3144px
  width: 53.35px

.bitcoin-37
  display: flex
  gap: 20366.4px
  width: 160.86px

.linked-in-8
  height: 70px
  margin-left: -20059px
  margin-top: -3744px
  width: 70px

.icon-mail-13
  height: 70px
  margin-left: 19109px
  margin-top: 10px
  width: 70px

.line-1-25
  height: 4px
  margin-right: 97.0px
  margin-top: 13px
  width: 164px
</style>
