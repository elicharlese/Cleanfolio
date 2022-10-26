<template>
  <div class="container-center-horizontal">
    <div class="hire-me-61 screen">
      <div class="body-35">
        <div class="navbar-27 raleway-bold-cape-cod-20px">
          <img class="dashboard-layout-26" :src="dashboardLayout" alt="Dashboard Layout" />
          <div class="hire-me-62">
            <span class="raleway-bold-cape-cod-20px">{{ spanText1 }}</span>
          </div>
          <div class="github-48">
            <span class="raleway-bold-cape-cod-20px">{{ spanText2 }}</span>
          </div>
          <div class="open-source-60">
            <span class="raleway-bold-cape-cod-20px">{{ spanText3 }}</span>
          </div>
          <div class="organizations-50">
            <span class="raleway-bold-cape-cod-20px">{{ spanText4 }}</span>
          </div>
          <div class="button-login-20">
            <div class="hero-button-41 raleway-bold-white-26px">
              <span class="raleway-bold-white-26px">{{ spanText5 }}</span>
            </div>
          </div>
          <div class="button-wallet-5">
            <div class="hero-button-42 raleway-bold-white-26px">
              <span class="raleway-bold-white-26px">{{ spanText6 }}</span>
            </div>
          </div>
        </div>
        <div class="hero-31">
          <div class="overlap-group6-4">
            <img
              class="componentlottiehttps-5"
              :src="componentLottieHttpsAssets4Lottiefi"
              alt="component:lottie:https://assets4.lottiefiles.com/packages/lf20_efx3aac9.json]"
            />
            <div class="hero-info-13">
              <div class="overlap-group-112">
                <p class="an-e-commerce-and-fu-9 raleway-bold-cape-cod-22px">
                  <span class="raleway-bold-cape-cod-22px">{{ spanText7 }}</span
                  ><span class="raleway-bold-cape-cod-22px">{{ spanText8 }}</span
                  ><span class="raleway-bold-cape-cod-22px">{{ spanText9 }}</span
                  ><span class="raleway-bold-cape-cod-22px">{{ spanText10 }}</span
                  ><span class="raleway-bold-seagull-22px">{{ spanText11 }}</span
                  ><span class="raleway-bold-cape-cod-22px">{{ spanText12 }}</span>
                </p>
                <div class="name-31 raleway-normal-cape-cod-100px">
                  <span class="raleway-normal-cape-cod-100px">{{ spanText13 }}</span>
                </div>
              </div>
              <x-button2 :spanText="xButton21Props.spanText" />
            </div>
          </div>
        </div>
        <div class="jobs">
          <p class="sign-in-create-a-profile raleway-normal-cape-cod-100px">
            <span class="raleway-normal-cape-cod-100px">{{ spanText14 }}</span>
          </p>
          <div class="overlap-group5-18">
            <div class="rectangle-18"></div>
            <div class="icon-profile"><img class="icon-user" :src="iconUser" alt="icon-user" /></div>
            <div class="icon-code"><img class="code-fork-1" :src="codeFork" alt="Code Fork" /></div>
          </div>
        </div>
        <div class="payment">
          <div class="milestones-vs-completion raleway-normal-cape-cod-100px">
            <span class="raleway-normal-cape-cod-100px">{{ spanText15 }}</span>
          </div>
          <div class="overlap-group4-11">
            <div class="rectangle-18-1"></div>
            <div class="ellipse-13"></div>
            <img class="pay-date" :src="payDate" alt="Pay Date" />
          </div>
        </div>
        <div class="dashboard-25">
          <div class="dashboard-to-monitor-progess raleway-normal-cape-cod-100px">
            <span class="raleway-normal-cape-cod-100px">{{ spanText16 }}</span>
          </div>
          <div class="flex-row-114">
            <div class="features">
              <div class="icon-4"><img class="new-ticket-1" :src="newTicket" alt="New Ticket" /></div>
              <div class="icon-5">
                <div class="overlap-group1-34">
                  <div class="ellipse-container-1">
                    <div class="ellipse-9-2"></div>
                    <div class="ellipse-8-3"></div>
                  </div>
                  <div class="inner-circle-1">
                    <div class="ellipse-8-4"></div>
                  </div>
                </div>
              </div>
              <div class="icon-6">
                <img
                  class="x9_-pragmatica_3-d_-metal_-calendar-1"
                  :src="x9_Pragmatica_3D_Metal_Calendar"
                  alt="9_Pragmatica_3D_Metal_Calendar"
                />
              </div>
            </div>
            <div class="laptop-1"><img class="rectangle" :src="rectangle" alt="Rectangle" /></div>
          </div>
        </div>
        <div class="overlap-group7-1">
          <div class="projects">
            <left-scroll :src="leftScroll1Props.src" />
            <div class="pm-projects">
              <div class="overlap-group-113">
                <p class="i-have-experience-st valign-text-middle raleway-normal-cape-cod-22px">
                  <span
                    ><span class="raleway-normal-cape-cod-22px">{{ spanText17 }}</span>
                  </span>
                </p>
                <div class="project-management-8 valign-text-middle raleway-bold-cape-cod-36px">
                  <span
                    ><span class="raleway-bold-cape-cod-36px">{{ spanText18 }}</span>
                  </span>
                </div>
              </div>
              <div class="table-external-links">
                <div class="previous-work">
                  <div class="previous valign-text-middle raleway-bold-cape-cod-22px">
                    <span
                      ><span class="raleway-bold-cape-cod-22px">{{ spanText19 }}</span>
                    </span>
                  </div>
                  <row1 />
                  <div class="httpsgithubcome-1 valign-text-middle raleway-normal-cape-cod-22px">
                    <span
                      ><span class="raleway-normal-cape-cod-22px">{{ spanText20 }}</span>
                    </span>
                  </div>
                  <div class="httpsgithubcome valign-text-middle raleway-normal-cape-cod-22px">
                    <span
                      ><span class="raleway-normal-cape-cod-22px">{{ spanText21 }}</span>
                    </span>
                  </div>
                  <div class="httpsgithubcome valign-text-middle raleway-normal-cape-cod-22px">
                    <span
                      ><span class="raleway-normal-cape-cod-22px">{{ spanText22 }}</span>
                    </span>
                  </div>
                </div>
                <div class="upcoming-work">
                  <div class="upcoming valign-text-middle raleway-bold-cape-cod-22px">
                    <span
                      ><span class="raleway-bold-cape-cod-22px">{{ spanText23 }}</span>
                    </span>
                  </div>
                  <row1 :className="row1Props.className" />
                </div>
              </div>
            </div>
            <left-scroll :src="leftScroll2Props.src" :className="leftScroll2Props.className" />
          </div>
          <div class="skills-10">
            <div class="breakdown-of-skills raleway-normal-cape-cod-64px">
              <span class="raleway-normal-cape-cod-64px">{{ spanText24 }}</span>
            </div>
            <div class="overlap-group3-14">
              <div class="github-repos">
                <div class="group-container">
                  <img class="group" :src="group1" alt="Group" /><img class="group-1" :src="group2" alt="Group" /><img
                    class="group-4"
                    :src="group3"
                    alt="Group"
                  /><img class="group-5" :src="group4" alt="Group" /><img
                    class="group-6"
                    :src="group5"
                    alt="Group"
                  /><img class="group-8" :src="group6" alt="Group" /><img
                    class="group-9"
                    :src="group7"
                    alt="Group"
                  /><img class="group-10" :src="group8" alt="Group" /><img
                    class="group-11"
                    :src="group9"
                    alt="Group"
                  /><img class="group-12" :src="group10" alt="Group" />
                  <div class="group-13">
                    <div class="group-container-1">
                      <div class="group-14">
                        <div class="number-3 inter-normal-paris-m-12px">
                          <span class="inter-normal-paris-m-12px">{{ spanText25 }}</span>
                        </div>
                        <img
                          class="vector-13"
                          src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/6338ef14129a3c9f74314c25/img/vector-4@2x.png"
                          alt="Vector"
                        />
                      </div>
                      <div class="group-15">
                        <div class="number-3 inter-normal-paris-m-12px">
                          <span class="inter-normal-paris-m-12px">{{ spanText26 }}</span>
                        </div>
                        <img class="vector-14" :src="vector2" alt="Vector" />
                      </div>
                      <div class="group-16">
                        <img class="vector-15" :src="vector3" alt="Vector" />
                        <div class="number-4 inter-normal-paris-m-12px">
                          <span class="inter-normal-paris-m-12px">{{ spanText27 }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex-row-115">
                      <div class="group-container-2">
                        <div class="group-17">
                          <img class="vector-16" :src="vector4" alt="Vector" />
                          <div class="number-4 inter-normal-paris-m-12px">
                            <span class="inter-normal-paris-m-12px">{{ spanText28 }}</span>
                          </div>
                        </div>
                        <div class="group-19">
                          <img class="vector-17" :src="vector5" alt="Vector" />
                          <div class="number-5 inter-normal-paris-m-12px">
                            <span class="inter-normal-paris-m-12px">{{ spanText29 }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="group-container-3">
                        <div class="group-20">
                          <img class="vector-18" :src="vector6" alt="Vector" />
                          <div class="number-6 inter-normal-paris-m-12px">
                            <span class="inter-normal-paris-m-12px">{{ spanText30 }}</span>
                          </div>
                        </div>
                        <div class="group-21">
                          <img class="vector-19" :src="vector7" alt="Vector" />
                          <div class="number-7 inter-normal-paris-m-12px">
                            <span class="inter-normal-paris-m-12px">{{ spanText31 }}</span>
                          </div>
                        </div>
                        <div class="group-22">
                          <img class="vector-20" :src="vector8" alt="Vector" />
                          <div class="number-8 inter-normal-paris-m-12px">
                            <span class="inter-normal-paris-m-12px">{{ spanText32 }}</span>
                          </div>
                        </div>
                        <div class="group-33">
                          <img class="vector-21" :src="vector9" alt="Vector" />
                          <div class="number-9 inter-normal-paris-m-12px">
                            <span class="inter-normal-paris-m-12px">{{ spanText33 }}</span>
                          </div>
                        </div>
                        <div class="group-34">
                          <img class="vector-22" :src="vector10" alt="Vector" />
                          <div class="number-10 inter-normal-paris-m-12px">
                            <span class="inter-normal-paris-m-12px">{{ spanText34 }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accomplishments">
                <div class="rectangle-6-27"></div>
                <div class="data-links inter-normal-cape-cod-32px">
                  <div class="degrees">
                    <span class="inter-normal-cape-cod-32px">{{ spanText35 }}</span>
                  </div>
                  <div class="courses">
                    <span class="inter-normal-cape-cod-32px">{{ spanText36 }}</span>
                  </div>
                  <div class="ations">
                    <span class="inter-normal-cape-cod-32px">{{ spanText37 }}</span>
                  </div>
                  <div class="ations">
                    <span class="inter-normal-cape-cod-32px">{{ spanText38 }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="e-commerce">
          <div class="build-your-dapp raleway-normal-cape-cod-64px">
            <span class="raleway-normal-cape-cod-64px">{{ spanText39 }}</span>
          </div>
          <p class="there-are-a-few-diff raleway-normal-cape-cod-16px">
            <span class="raleway-normal-cape-cod-16px">{{ spanText40 }}</span
            ><span class="span1-19">{{ spanText41 }}</span
            ><span class="raleway-normal-cape-cod-16px">{{ spanText42 }}</span>
          </p>
          <div class="overlap-group-container">
            <div class="overlap-group-111">
              <div class="choose-your-framework raleway-bold-white-24px">
                <span class="raleway-bold-white-24px">{{ spanText43 }}</span>
              </div>
              <x-button2 :spanText="xButton22Props.spanText" :className="xButton22Props.className" />
            </div>
            <div class="overlap-group-111">
              <div class="choose-your-framework raleway-bold-white-24px">
                <span class="raleway-bold-white-24px">{{ spanText44 }}</span>
              </div>
              <x-button2 :spanText="xButton23Props.spanText" :className="xButton23Props.className" />
            </div>
            <div class="overlap-group-111">
              <div class="choose-your-framework raleway-bold-white-24px">
                <span class="raleway-bold-white-24px">{{ spanText45 }}</span>
              </div>
              <x-button2 :spanText="xButton24Props.spanText" :className="xButton24Props.className" />
            </div>
          </div>
        </div>
        <div class="footer-40">
          <div class="footer-menu-28">
            <img class="cec-logo-16" :src="cecLogo" alt="cec-logo" />
            <div class="flex-row-116 raleway-bold-cape-cod-20px">
              <div class="hire-me-63">
                <span class="raleway-bold-cape-cod-20px">{{ spanText46 }}</span>
              </div>
              <div class="github-49">
                <span class="raleway-bold-cape-cod-20px">{{ spanText47 }}</span>
              </div>
              <div class="open-source-61">
                <span class="raleway-bold-cape-cod-20px">{{ spanText48 }}</span>
              </div>
              <div class="organizations-51">
                <span class="raleway-bold-cape-cod-20px">{{ spanText49 }}</span>
              </div>
              <x-button2 :spanText="xButton25Props.spanText" :className="xButton25Props.className" />
              <x-button2 :spanText="xButton26Props.spanText" :className="xButton26Props.className" />
            </div>
          </div>
          <div class="flex-row-117">
            <img class="image-8-27" :src="image8" alt="image 8" />
            <div class="overlap-group-114">
              <div class="snippet-of-the-day-35 valign-text-middle raleway-bold-white-36px">
                <span
                  ><span class="raleway-bold-white-36px">{{ spanText50 }}</span>
                </span>
              </div>
              <div class="flex-row-118">
                <div class="subscribe-to-get-access-35 valign-text-middle raleway-bold-white-20px">
                  <span
                    ><span class="raleway-bold-white-20px">{{ spanText51 }}</span>
                  </span>
                </div>
                <div class="rectangle-6-28"></div>
                <div class="rectangle-7-28"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import xButton2 from "./xButton2";
import LeftScroll from "./LeftScroll";
import Row1 from "./Row1";
export default {
  name: "HireMe3",
  components: {
    xButton2,
    LeftScroll,
    Row1,
  },
  props: [
    "dashboardLayout",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
    "componentLottieHttpsAssets4Lottiefi",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "spanText11",
    "spanText12",
    "spanText13",
    "spanText14",
    "iconUser",
    "codeFork",
    "spanText15",
    "payDate",
    "spanText16",
    "newTicket",
    "x9_Pragmatica_3D_Metal_Calendar",
    "rectangle",
    "spanText17",
    "spanText18",
    "spanText19",
    "spanText20",
    "spanText21",
    "spanText22",
    "spanText23",
    "spanText24",
    "group1",
    "group2",
    "group3",
    "group4",
    "group5",
    "group6",
    "group7",
    "group8",
    "group9",
    "group10",
    "spanText25",
    "spanText26",
    "vector2",
    "vector3",
    "spanText27",
    "vector4",
    "spanText28",
    "vector5",
    "spanText29",
    "vector6",
    "spanText30",
    "vector7",
    "spanText31",
    "vector8",
    "spanText32",
    "vector9",
    "spanText33",
    "vector10",
    "spanText34",
    "spanText35",
    "spanText36",
    "spanText37",
    "spanText38",
    "spanText39",
    "spanText40",
    "spanText41",
    "spanText42",
    "spanText43",
    "spanText44",
    "spanText45",
    "cecLogo",
    "spanText46",
    "spanText47",
    "spanText48",
    "spanText49",
    "image8",
    "spanText50",
    "spanText51",
    "xButton21Props",
    "leftScroll1Props",
    "row1Props",
    "leftScroll2Props",
    "xButton22Props",
    "xButton23Props",
    "xButton24Props",
    "xButton25Props",
    "xButton26Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.hire-me-61
  align-items: flex-start
  background-color: #7981e5
  border: 1px none
  display: flex
  min-width: 1512px

.body-35
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 7457px
  width: 1512px

.navbar-27
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 90px
  padding: 0 23px
  width: 1512px

.dashboard-layout-26
  height: 60px
  width: 60px

.hire-me-62
  letter-spacing: 0
  line-height: normal
  margin-bottom: 1.0px
  margin-left: 539px
  min-height: 23px
  min-width: 81px
  text-align: center

.github-48
  letter-spacing: 0
  line-height: normal
  margin-bottom: 1.0px
  margin-left: 19px
  min-height: 23px
  min-width: 77px
  text-align: center

.open-source-60
  letter-spacing: 0
  line-height: normal
  margin-bottom: 3.0px
  margin-left: 19px
  min-height: 23px
  min-width: 145px
  text-align: center

.organizations-50
  letter-spacing: 0
  line-height: normal
  margin-bottom: 1.0px
  margin-left: 19px
  min-height: 23px
  min-width: 163px
  text-align: center

.button-login-20
  align-items: flex-start
  background-color: $seagull
  border: 1px none
  border-radius: 16px
  display: flex
  height: 50px
  margin-left: 19px
  min-width: 150px
  padding: 6px 38.2px

.hero-button-41
  letter-spacing: 0
  line-height: normal
  min-height: 28px
  text-align: center
  width: 74px

.button-wallet-5
  align-items: flex-start
  background-color: $seagull
  border: 1px none
  border-radius: 16px
  display: flex
  height: 50px
  justify-content: flex-end
  margin-left: 19px
  min-width: 150px
  padding: 6px 22.8px

.hero-button-42
  letter-spacing: 0
  line-height: normal
  min-height: 28px
  text-align: center
  width: 104px

.hero-31
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 982px
  padding: 25.5px 79px
  width: 1512px

.overlap-group6-4
  height: 762px
  position: relative
  width: 1339px

.componentlottiehttps-5
  height: 762px
  left: 531px
  position: absolute
  top: 0
  width: 808px

.hero-info-13
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  gap: 67px
  left: 0
  min-height: 355px
  position: absolute
  top: 200px
  width: 669px

.overlap-group-112
  height: 229px
  margin-top: -1px
  position: relative
  width: 669px

.an-e-commerce-and-fu-9
  left: 1px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 134px
  width: 668px

.name-31
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 0
  width: 669px

.jobs
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 58px
  height: 982px
  padding: 18px 200px
  width: 1512px

.sign-in-create-a-profile
  letter-spacing: 0
  line-height: normal
  min-height: 117px

.overlap-group5-18
  align-self: center
  height: 617px
  position: relative
  width: 992px

.rectangle-18
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  box-shadow: 0px 4px 50px #00000040
  height: 617px
  left: 85px
  position: absolute
  top: 0
  width: 822px

.icon-profile
  align-items: center
  background-color: $material-themereferrorerror100
  border-radius: 85px
  box-shadow: 0px 4px 50px #00000040
  display: flex
  height: 170px
  left: 0
  min-width: 170px
  padding: 0 37px
  position: absolute
  top: 51px

.icon-user
  height: 96px
  width: 96px

.icon-code
  align-items: center
  background-color: $material-themereferrorerror100
  border-radius: 85px
  box-shadow: 0px 4px 50px #00000040
  display: flex
  height: 170px
  justify-content: flex-end
  left: 822px
  min-width: 170px
  padding: 0 15px
  position: absolute
  top: 401px

.code-fork-1,
.new-ticket-1
  height: 120px
  width: 120px

.payment
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 73px
  height: 982px
  padding: 22px 0
  width: 1512px

.milestones-vs-completion
  letter-spacing: 0
  line-height: normal
  min-height: 117px
  min-width: 1190px

.overlap-group4-11
  height: 676px
  margin-left: 78.0px
  position: relative
  width: 900px

.rectangle-18-1
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  box-shadow: 0px 4px 50px #00000040
  height: 617px
  left: 0
  position: absolute
  top: 59px
  width: 822px

.ellipse-13
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 100px
  box-shadow: 0px 4px 50px #00000040
  height: 200px
  left: 700px
  position: absolute
  top: 0
  width: 200px

.pay-date
  height: 120px
  left: 740px
  position: absolute
  top: 40px
  width: 120px

.dashboard-25
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 1px
  height: 982px
  overflow: hidden
  width: 1512px

.dashboard-to-monitor-progess
  align-self: center
  letter-spacing: 0
  line-height: normal
  margin-top: 48px
  min-height: 117px
  min-width: 1396px

.flex-row-114
  align-items: center
  display: flex
  gap: 314px
  min-width: 1454px

.features
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 46px
  margin-top: 23.0px
  min-height: 692px
  width: 201px

.icon-4
  align-items: center
  background-color: $material-themereferrorerror100
  border-radius: 100px
  box-shadow: 0px 4px 50px #00000040
  display: flex
  height: 200px
  min-width: 200px
  padding: 0 40px

.icon-5
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border-radius: 100px
  box-shadow: 0px 4px 50px #00000040
  display: flex
  margin-left: 1px
  min-width: 200px

.overlap-group1-34
  height: 200px
  margin-bottom: 0
  position: relative
  width: 200px

.ellipse-container-1
  height: 200px
  left: 0
  position: absolute
  top: 0
  width: 200px

.ellipse-9-2
  background-color: $gallery
  border: 1px none
  border-radius: 81.65px
  height: 163px
  left: 18px
  position: absolute
  top: 18px
  width: 163px

.ellipse-8-3
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgba(254.68, 254.36, 255, 0) 100%)
  border: 1px none
  border-radius: 81.65px
  height: 163px
  left: 18px
  position: absolute
  top: 18px
  transform: rotate(-15.00deg)
  width: 163px

.inner-circle-1
  align-items: flex-start
  background-color: $gallery-2
  border-radius: 253px
  display: flex
  height: 95px
  left: 52px
  min-width: 95px
  position: absolute
  top: 52px

.ellipse-8-4
  background: linear-gradient(180deg, rgb(36, 18, 106) 0%, rgba(36, 18, 106, 0) 100%)
  border: 1px none
  border-radius: 47.5px
  height: 95px
  width: 95px

.icon-6
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border-radius: 100px
  box-shadow: 0px 4px 50px #00000040
  display: flex
  height: 200px
  margin-left: 1px
  min-width: 200px
  padding: 20px 19.0px

.x9_-pragmatica_3-d_-metal_-calendar-1
  height: 160px
  object-fit: cover
  width: 162px

.laptop-1
  align-items: flex-end
  background: radial-gradient(50% 50% at 50% 50%, rgb(125, 190, 227) 0%, rgba(125, 190, 227, 0.05) 100%)
  border-radius: 469.5px/412.5px
  display: flex
  height: 825px
  justify-content: flex-end
  min-width: 939px
  padding: 162px 69.8px

.rectangle
  height: 500px
  object-fit: cover
  width: 798px

.overlap-group7-1
  height: 1865px
  position: relative
  width: 1512px

.projects
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 982px
  left: 0
  padding: 50px 52px
  position: absolute
  top: 883px
  width: 1512px

.pm-projects
  align-items: flex-end
  align-self: flex-end
  background-color: $seagull-2
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 55px
  margin-left: 96px
  min-height: 856px
  padding: 67.0px 35px
  width: 1095px

.overlap-group-113
  align-self: center
  height: 140px
  position: relative
  width: 804px

.i-have-experience-st
  height: 83px
  left: 9px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 57px
  width: 786px

.project-management-8
  height: 57px
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 0
  width: 804px

.table-external-links
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 39px
  min-height: 347px
  width: 1024px

.previous-work
  align-items: flex-start
  display: flex
  flex-direction: column
  min-height: 228px
  position: relative
  width: 1026px

.previous
  align-self: center
  height: 26px
  letter-spacing: 0
  line-height: normal
  margin-right: 3.0px
  margin-top: -1px
  text-align: center
  width: 131px

.httpsgithubcome-1
  height: 31px
  letter-spacing: 0
  line-height: normal
  margin-top: 15px
  width: 470px

.httpsgithubcome
  height: 31px
  letter-spacing: 0
  line-height: normal
  margin-top: 16px
  width: 470px

.upcoming-work
  align-items: center
  display: flex
  flex-direction: column
  gap: 24px
  min-height: 80px
  position: relative
  width: 1026px

.upcoming
  height: 26px
  letter-spacing: 0
  line-height: normal
  margin-right: 3.0px
  margin-top: -1px
  text-align: center
  width: 131px

.skills-10
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 56px
  height: 982px
  left: 0
  padding: 81px 0
  position: absolute
  top: 0
  width: 1512px

.breakdown-of-skills
  letter-spacing: 0
  line-height: normal
  min-height: 75px
  min-width: 578px

.overlap-group3-14
  height: 639px
  margin-left: 5.0px
  position: relative
  width: 1507px

.github-repos
  align-items: flex-start
  border: 1px none
  display: flex
  height: 541px
  left: 0
  padding: 0 255px
  position: absolute
  top: 41px
  width: 1507px

.group-container
  height: 533px
  margin-left: 397px
  position: relative
  width: 600px

.group
  height: 130px
  left: 304px
  position: absolute
  top: 149px
  width: 203px

.group-1
  height: 191px
  left: 304px
  position: absolute
  top: 87px
  width: 156px

.group-4
  height: 203px
  left: 165px
  position: absolute
  top: 76px
  width: 205px

.group-5
  height: 170px
  left: 101px
  position: absolute
  top: 130px
  width: 203px

.group-6
  height: 78px
  left: 102px
  position: absolute
  top: 278px
  width: 201px

.group-8
  height: 145px
  left: 117px
  position: absolute
  top: 278px
  width: 187px

.group-9
  height: 203px
  left: 162px
  position: absolute
  top: 278px
  width: 207px

.group-10
  height: 192px
  left: 304px
  position: absolute
  top: 278px
  width: 158px

.group-11
  height: 127px
  left: 304px
  position: absolute
  top: 278px
  width: 203px

.group-12
  height: 1px
  left: 304px
  position: absolute
  top: 278px
  width: 203px

.group-13
  align-items: flex-start
  display: flex
  gap: 52px
  height: 533px
  justify-content: flex-end
  left: 0
  min-width: 600px
  padding: 0.0px 0
  position: absolute
  top: 0

.group-container-1
  align-items: flex-start
  align-self: center
  display: flex
  flex-direction: column
  margin-top: 55.06px
  min-height: 269px
  width: 138px

.group-14
  align-items: flex-start
  align-self: center
  display: flex
  height: 48px
  margin-right: 14.62px
  min-width: 108px

.number-3
  letter-spacing: 0
  line-height: normal
  margin-top: -1px
  min-height: 38px
  text-align: right
  width: 58px

.vector-13
  align-self: flex-end
  height: 18px
  margin-bottom: 0
  width: 47px

.group-15
  align-items: flex-start
  display: flex
  height: 38px
  margin-top: 103px
  min-width: 109px

.vector-14
  align-self: center
  height: 13px
  margin-top: 10.16px
  width: 49px

.group-16
  align-self: flex-end
  height: 38px
  margin-top: 41px
  position: relative
  width: 102px

.vector-15
  height: 29px
  left: 58px
  position: absolute
  top: 2px
  width: 42px

.number-4
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: right
  top: -1px
  width: 58px

.flex-row-115
  align-items: center
  display: flex
  gap: 155px
  height: 533px
  min-width: 412px

.group-container-2
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 396px
  min-height: 533px
  width: 74px

.group-17
  height: 80px
  margin-left: 3.14px
  position: relative
  width: 71px

.vector-16
  height: 50px
  left: 58px
  position: absolute
  top: 30px
  width: 10px

.group-19
  height: 57px
  position: relative
  width: 71px

.vector-17
  height: 49px
  left: 58px
  position: absolute
  top: 0
  width: 11px

.number-5
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: right
  top: 18px
  width: 58px

.group-container-3
  align-items: flex-end
  display: flex
  flex-direction: column
  margin-top: 0.04px
  min-height: 454px
  width: 183px

.group-20
  align-items: flex-start
  align-self: flex-start
  display: flex
  height: 72px
  min-width: 89px

.vector-18
  align-self: flex-end
  height: 42px
  margin-bottom: 0
  width: 29px

.number-6
  letter-spacing: 0
  line-height: normal
  margin-top: -1.0px
  min-height: 38px
  width: 58px

.group-21
  height: 48px
  margin-top: 50px
  position: relative
  width: 108px

.vector-19
  height: 17px
  left: 0
  position: absolute
  top: 30px
  width: 48px

.number-7
  left: 48px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: -1px
  width: 58px

.group-22
  height: 38px
  margin-right: 22.89px
  margin-top: 39px
  position: relative
  width: 73px

.vector-20
  height: 1px
  left: 0
  position: absolute
  top: 30px
  width: 51px

.number-8
  left: 51px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: -1px
  width: 20px

.group-33
  height: 38px
  margin-right: 9.75px
  margin-top: 46px
  position: relative
  width: 98px

.vector-21
  height: 17px
  left: 0
  position: absolute
  top: 13px
  width: 48px

.number-9
  left: 48px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: -1px
  width: 48px

.group-34
  align-items: flex-start
  align-self: flex-start
  display: flex
  height: 49px
  margin-left: 0.73px
  margin-top: 73px
  min-width: 89px
  padding: 0 0.0px

.vector-22
  height: 42px
  margin-top: 0
  width: 29px

.number-10
  align-self: flex-end
  letter-spacing: 0
  line-height: normal
  margin-bottom: 1.0px
  min-height: 38px
  width: 58px

.accomplishments
  align-items: flex-end
  border-radius: 16px
  display: flex
  gap: 30px
  height: 639px
  left: 66px
  min-width: 396px
  position: absolute
  top: 0

.rectangle-6-27
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%)
  border: 1px none
  border-radius: 16px
  height: 639px
  width: 91px

.data-links
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 67px
  margin-bottom: 7.25px
  min-height: 606px
  width: 283px

.degrees
  letter-spacing: 0
  line-height: normal
  margin-top: -1px
  min-height: 101px
  width: 172px

.courses
  letter-spacing: 0
  line-height: normal
  min-height: 101px
  width: 169px

.ations
  letter-spacing: 0
  line-height: normal
  min-height: 101px
  width: 275px

.e-commerce
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 982px
  padding: 38px 0
  width: 1507px

.build-your-dapp
  letter-spacing: 0
  line-height: normal
  margin-top: 57px
  min-height: 75px
  min-width: 475px
  text-align: center

.there-are-a-few-diff
  letter-spacing: 0
  line-height: normal
  margin-right: 1.0px
  margin-top: 18px
  min-height: 19px
  min-width: 1112px
  text-align: center

.span1-19
  color: $seagull
  font-family: $font-family-raleway
  font-size: $font-size-xs
  font-weight: 400

.overlap-group-container
  align-items: flex-start
  display: flex
  gap: 93px
  height: 618px
  margin-top: 119px
  min-width: 1317px

.overlap-group-111
  align-items: flex-start
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%)
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 468px
  min-height: 618px
  padding: 31px 51px
  position: relative
  width: 377px

.choose-your-framework
  letter-spacing: 0
  line-height: normal
  min-height: 28px
  min-width: 274px
  text-align: center

.footer-40
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 33px
  height: 592px
  padding: 47px 27.1px
  width: 1512px

.footer-menu-28
  align-items: center
  display: flex
  flex-direction: column
  gap: 53px
  min-height: 233px
  width: 1411px

.cec-logo-16
  height: 120px
  margin-right: 46.85px
  object-fit: cover
  width: 120px

.flex-row-116
  align-items: center
  display: flex
  height: 60px
  margin-right: 8.0px
  min-width: 1403px
  position: relative

.hire-me-63
  letter-spacing: 0
  line-height: normal
  margin-bottom: 1.0px
  text-align: center
  width: 127px

.github-49
  letter-spacing: 0
  line-height: normal
  margin-bottom: 1.0px
  margin-left: 31px
  text-align: center
  width: 121px

.open-source-61
  letter-spacing: 0
  line-height: normal
  margin-bottom: 3.0px
  margin-left: 28px
  text-align: center
  width: 229px

.organizations-51
  letter-spacing: 0
  line-height: normal
  margin-bottom: 1.0px
  margin-left: 30px
  text-align: center
  width: 256px

.flex-row-117
  align-items: flex-end
  display: flex
  gap: 100px
  margin-right: 7.85px
  min-width: 1403px

.image-8-27
  height: 225px
  object-fit: cover
  width: 640px

.overlap-group-114
  align-items: flex-start
  background-color: $seagull
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 21px
  min-height: 164px
  padding: 18px 14px
  width: 663px

.snippet-of-the-day-35
  align-self: center
  height: 51px
  letter-spacing: 0
  line-height: normal
  margin-left: 1.54px
  text-align: center
  width: 367px

.flex-row-118
  align-items: flex-end
  display: flex
  gap: 18px
  height: 50px
  min-width: 620px

.subscribe-to-get-access-35
  align-self: flex-start
  height: 49px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 167px

.rectangle-6-28
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 316px

.rectangle-7-28
  background-color: $white
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 101px
</style>
