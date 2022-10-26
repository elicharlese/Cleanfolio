<template>
  <div class="container-center-horizontal">
    <div class="dashboard-24 screen">
      <div class="home-5">
        <div class="overlap-group7">
          <div class="overlap-group8">
            <div class="side-menu">
              <div class="logo-top">
                <div class="overlap-group-107"><img class="group-46" :src="group46" alt="Group 46" /></div>
                <div class="digit-x">
                  <span class="span0-12">{{ spanText1 }}</span
                  ><span class="span1-18">{{ spanText2 }}</span>
                </div>
              </div>
              <div class="container">
                <div class="home-6"><frame12 :group2="frame121Props.group2" :spanText="frame121Props.spanText" /></div>
                <div class="container-item">
                  <div class="frame-13-1">
                    <img class="trend-up" :src="trendup" alt="TrendUp" />
                    <div class="forecast poppins-bold-white-12px">
                      <span class="poppins-bold-white-12px">{{ spanText3 }}</span>
                    </div>
                  </div>
                </div>
                <div class="container-item">
                  <div class="frame-14">
                    <img class="users" :src="users" alt="Users" />
                    <div class="developers poppins-regular-normal-white-12px">
                      <span class="poppins-regular-normal-white-12px">{{ spanText4 }}</span>
                    </div>
                  </div>
                </div>
                <messages :envelope="messages1Props.envelope" :spanText="messages1Props.spanText" />
                <messages :envelope="messages2Props.envelope" :spanText="messages2Props.spanText" />
                <div class="folders">
                  <div class="frame-19">
                    <img class="icon-folder" :src="iconFolder" alt="icon-folder" />
                    <div class="directories poppins-regular-normal-white-12px">
                      <span class="poppins-regular-normal-white-12px">{{ spanText5 }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bottom-buttons">
                <div class="frame-22">
                  <div class="frame-21">
                    <img class="gear-six" :src="gearsix" alt="GearSix" />
                    <div class="settings poppins-regular-normal-white-12px">
                      <span class="poppins-regular-normal-white-12px">{{ spanText6 }}</span>
                    </div>
                  </div>
                </div>
                <div class="frame-24">
                  <frame12 :group2="frame122Props.group2" :spanText="frame122Props.spanText" />
                </div>
              </div>
            </div>
            <img class="selector" :src="selector" alt="selector" />
          </div>
          <div class="home-7">
            <div class="top-bar">
              <div class="welcome-message">
                <div class="welcome-user_name poppins-semi-bold-white-42px">
                  <span class="poppins-semi-bold-white-42px">{{ spanText7 }}</span>
                </div>
                <p class="here-is-project_nam poppins-semi-bold-white-14px">
                  <span class="poppins-semi-bold-white-14px">{{ spanText8 }}</span>
                </p>
              </div>
              <div class="search-bar">
                <img class="icon-search" :src="iconSearch" alt="icon-search" />
                <div class="search-your-query poppins-medium-white-14px">
                  <span class="poppins-medium-white-14px">{{ spanText9 }}</span>
                </div>
              </div>
              <div class="group-7" :style="{ 'background-image': 'url(' + group7 + ')' }">
                <div class="ellipse-1-1"></div>
              </div>
              <div class="account">
                <img class="profile-image" :src="profileImage" alt="profile-image" /><img
                  class="account-menu"
                  :src="accountMenu"
                  alt="account-menu"
                />
              </div>
            </div>
            <div class="flex-row-109">
              <div class="flex-col-26">
                <div class="sprints">
                  <div class="overlap-group6-3">
                    <div class="overlap-group2-23">
                      <div class="flex-row-110">
                        <div class="flex-col-27">
                          <div class="price-19 poppins-semi-bold-cherry-pie-28px">
                            <span class="poppins-semi-bold-cherry-pie-28px">{{ spanText10 }}</span>
                          </div>
                          <div class="total-hours poppins-medium-purple-heart-15px">
                            <span class="poppins-medium-purple-heart-15px">{{ spanText11 }}</span>
                          </div>
                        </div>
                        <div class="data-1">
                          <div class="ellipse-5-1"></div>
                          <div class="worked poppins-regular-normal-mountain-mist-13px-2">
                            <span class="poppins-regular-normal-mountain-mist-13px-2">{{ spanText12 }}</span>
                          </div>
                        </div>
                        <div class="data-2">
                          <div class="ellipse-12"></div>
                          <div class="forecasted poppins-regular-normal-mountain-mist-13px-2">
                            <span class="poppins-regular-normal-mountain-mist-13px-2">{{ spanText13 }}</span>
                          </div>
                        </div>
                        <div class="time-frame-selector">
                          <div class="today poppins-medium-mountain-mist-13px">
                            <span class="poppins-medium-mountain-mist-13px">{{ spanText14 }}</span>
                          </div>
                          <img class="time-frame-selector-1" :src="timeFrameSelector" alt="time-frame-selector" />
                        </div>
                      </div>
                      <div class="overlap-group1-31" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
                        <div class="mar-14 poppins-regular-normal-mountain-mist-13px-2">
                          <span class="poppins-regular-normal-mountain-mist-13px-2">{{ spanText15 }}</span>
                        </div>
                        <div class="price-20 poppins-medium-cherry-pie-13px">
                          <span class="poppins-medium-cherry-pie-13px">{{ spanText16 }}</span>
                        </div>
                      </div>
                      <div class="line-chart">
                        <div class="y-axis poppins-regular-normal-mountain-mist-13px">
                          <div class="x100hrs">
                            <span class="poppins-regular-normal-mountain-mist-13px">{{ spanText17 }}</span>
                          </div>
                          <div class="x50hrs">
                            <span class="poppins-regular-normal-mountain-mist-13px">{{ spanText18 }}</span>
                          </div>
                          <div class="x10hrs">
                            <span class="poppins-regular-normal-mountain-mist-13px">{{ spanText19 }}</span>
                          </div>
                        </div>
                        <div class="flex-col-28">
                          <div class="data">
                            <div class="overlap-group-108">
                              <img class="line-1-30" :src="line1" alt="line-1" /><img
                                class="line-2"
                                :src="line2"
                                alt="line-2"
                              /><img class="forecasted-1" :src="forecasted" alt="forecasted" /><img
                                class="worked-1"
                                :src="worked"
                                alt="worked"
                              />
                            </div>
                            <img class="line-0" :src="line0" alt="line-0" />
                          </div>
                          <div class="x-axis poppins-regular-normal-mountain-mist-13px">
                            <div class="feb">
                              <span class="poppins-regular-normal-mountain-mist-13px">{{ spanText20 }}</span>
                            </div>
                            <div class="place-44">
                              <span class="poppins-regular-normal-mountain-mist-13px">{{ spanText21 }}</span>
                            </div>
                            <div class="apr">
                              <span class="poppins-regular-normal-mountain-mist-13px">{{ spanText22 }}</span>
                            </div>
                            <div class="name-30">
                              <span class="poppins-regular-normal-mountain-mist-13px">{{ spanText23 }}</span>
                            </div>
                            <div class="jun">
                              <span class="poppins-regular-normal-mountain-mist-13px">{{ spanText24 }}</span>
                            </div>
                            <div class="jul">
                              <span class="poppins-regular-normal-mountain-mist-13px">{{ spanText25 }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img class="x-axis-meter" :src="xAxisMeter" alt="x-axis-meter" />
                    <div class="data-pointer"></div>
                  </div>
                </div>
                <div class="flex-row-111">
                  <div class="bugs">
                    <div class="overlap-group5-17">
                      <div class="title">
                        <div class="bugs-reported poppins-medium-cherry-pie-17px">
                          <span class="poppins-medium-cherry-pie-17px">{{ spanText26 }}</span>
                        </div>
                        <div class="time-frame-selector-2">
                          <div class="this-month poppins-medium-mountain-mist-13px-2">
                            <span class="poppins-medium-mountain-mist-13px-2">{{ spanText27 }}</span>
                          </div>
                          <img class="group-3" :src="group3" alt="Group 3" />
                        </div>
                      </div>
                      <div class="flex-row-112">
                        <div class="overlap-group1-32">
                          <div class="ellipse-container">
                            <div class="ellipse-9-1"></div>
                            <div class="ellipse-8-1"></div>
                          </div>
                          <div class="inner-circle">
                            <div class="ellipse-8-2"></div>
                          </div>
                        </div>
                        <div class="data-legend">
                          <div class="data-2-1">
                            <div class="group-18">
                              <div class="ellipse-5-1"></div>
                              <div class="reported encodesans-regular-normal-mountain-mist-13px">
                                <span class="encodesans-regular-normal-mountain-mist-13px">{{ spanText28 }}</span>
                              </div>
                            </div>
                            <div class="x10-k encodesans-semi-bold-gravel-17px">
                              <span class="encodesans-semi-bold-gravel-17px">{{ spanText29 }}</span>
                            </div>
                          </div>
                          <div class="data-1-1">
                            <div class="group-36">
                              <div class="ellipse-12"></div>
                              <div class="fixed encodesans-regular-normal-mountain-mist-13px">
                                <span class="encodesans-regular-normal-mountain-mist-13px">{{ spanText30 }}</span>
                              </div>
                            </div>
                            <div class="x4-k encodesans-semi-bold-gravel-17px">
                              <span class="encodesans-semi-bold-gravel-17px">{{ spanText31 }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="activity">
                    <div class="overlap-group4-10">
                      <div class="flex-row-113">
                        <div class="developer-activity poppins-medium-cherry-pie-17px">
                          <span class="poppins-medium-cherry-pie-17px">{{ spanText32 }}</span>
                        </div>
                        <div class="time-frame">
                          <div class="this-week poppins-medium-mountain-mist-13px-2">
                            <span class="poppins-medium-mountain-mist-13px-2">{{ spanText33 }}</span>
                          </div>
                          <img class="toggle-menu" :src="toggleMenu" alt="toggle-menu" />
                        </div>
                      </div>
                      <div class="bar-chart">
                        <div class="overlap-group-109">
                          <div class="y-axis-1">
                            <group23 :spanText="group231Props.spanText" />
                            <group23 :spanText="group232Props.spanText" :className="group232Props.className" />
                            <group23 :spanText="group233Props.spanText" :className="group233Props.className" />
                            <div class="group-26">
                              <div class="number poppins-regular-normal-mountain-mist-12px">
                                <span class="poppins-regular-normal-white-12px">{{ spanText34 }}</span
                                ><span class="poppins-regular-normal-mountain-mist-12px">{{ spanText35 }}</span>
                              </div>
                              <img class="line-13" :src="line13" alt="Line 13" />
                            </div>
                          </div>
                          <div class="bars">
                            <div class="group-27"></div>
                            <div class="group-28"></div>
                            <div class="group-29"></div>
                            <div class="group-30"></div>
                            <div class="group-31"></div>
                            <div class="group-32"></div>
                          </div>
                        </div>
                        <div class="x-axis-1 poppins-regular-normal-mountain-mist-12px">
                          <div class="m">
                            <span class="poppins-regular-normal-mountain-mist-12px">{{ spanText36 }}</span>
                          </div>
                          <div class="x-axis-item">
                            <span class="poppins-regular-normal-mountain-mist-12px">{{ spanText37 }}</span>
                          </div>
                          <div class="w">
                            <span class="poppins-regular-normal-mountain-mist-12px">{{ spanText38 }}</span>
                          </div>
                          <div class="th">
                            <span class="poppins-regular-normal-mountain-mist-12px">{{ spanText39 }}</span>
                          </div>
                          <div class="x-axis-item">
                            <span class="poppins-regular-normal-mountain-mist-12px">{{ spanText40 }}</span>
                          </div>
                          <div class="price-21">
                            <span class="poppins-regular-normal-mountain-mist-12px">{{ spanText41 }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-col-29">
                <div class="vendors">
                  <div class="overlap-group3-13">
                    <div class="icon-2"><img class="new-ticket" :src="newTicket" alt="New Ticket" /></div>
                    <div class="data-3">
                      <div class="data-4">
                        <div class="number-1 poppins-semi-bold-seagull-28px">
                          <span class="poppins-semi-bold-seagull-28px">{{ spanText42 }}</span>
                        </div>
                        <div class="tickets-created poppins-medium-purple-heart-15px">
                          <span class="poppins-medium-purple-heart-15px">{{ spanText43 }}</span>
                        </div>
                      </div>
                      <time-frame />
                    </div>
                  </div>
                </div>
                <div class="profits">
                  <div class="overlap-group2-24">
                    <div class="icon-3"><img class="currency-eur" :src="currencyeur" alt="CurrencyEur" /></div>
                    <div class="data-5">
                      <div class="data-6">
                        <div class="price-22 poppins-semi-bold-cherry-pie-28px">
                          <span class="poppins-semi-bold-cherry-pie-28px">{{ spanText44 }}</span>
                        </div>
                        <div class="total-earned poppins-medium-purple-heart-15px">
                          <span class="poppins-medium-purple-heart-15px">{{ spanText45 }}</span>
                        </div>
                      </div>
                      <time-frame />
                    </div>
                  </div>
                </div>
                <div class="calendar">
                  <div class="overlap-group-110">
                    <div class="upcoming-status-meeting poppins-medium-cherry-pie-17px">
                      <span class="poppins-medium-cherry-pie-17px">{{ spanText46 }}</span>
                    </div>
                    <div class="overlap-group1-33">
                      <div class="x12th-aug-2022 poppins-semi-bold-cherry-pie-20px">
                        <span class="poppins-semi-bold-cherry-pie-20px">{{ spanText47 }}</span>
                      </div>
                      <img
                        class="x9_-pragmatica_3-d_-metal_-calendar"
                        :src="x9_Pragmatica_3D_Metal_Calendar"
                        alt="9_Pragmatica_3D_Metal_Calendar"
                      />
                    </div>
                    <div class="button-55">
                      <div class="send-rsvp poppins-bold-white-15px">
                        <span class="poppins-bold-white-15px">{{ spanText48 }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame12 from "./Frame12";
import Messages from "./Messages";
import Group23 from "./Group23";
import TimeFrame from "./TimeFrame";
export default {
  name: "Dashboard",
  components: {
    Frame12,
    Messages,
    Group23,
    TimeFrame,
  },
  props: [
    "group46",
    "spanText1",
    "spanText2",
    "trendup",
    "spanText3",
    "users",
    "spanText4",
    "iconFolder",
    "spanText5",
    "gearsix",
    "spanText6",
    "selector",
    "spanText7",
    "spanText8",
    "iconSearch",
    "spanText9",
    "group7",
    "profileImage",
    "accountMenu",
    "spanText10",
    "spanText11",
    "spanText12",
    "spanText13",
    "spanText14",
    "timeFrameSelector",
    "overlapGroup1",
    "spanText15",
    "spanText16",
    "spanText17",
    "spanText18",
    "spanText19",
    "line1",
    "line2",
    "forecasted",
    "worked",
    "line0",
    "spanText20",
    "spanText21",
    "spanText22",
    "spanText23",
    "spanText24",
    "spanText25",
    "xAxisMeter",
    "spanText26",
    "spanText27",
    "group3",
    "spanText28",
    "spanText29",
    "spanText30",
    "spanText31",
    "spanText32",
    "spanText33",
    "toggleMenu",
    "spanText34",
    "spanText35",
    "line13",
    "spanText36",
    "spanText37",
    "spanText38",
    "spanText39",
    "spanText40",
    "spanText41",
    "newTicket",
    "spanText42",
    "spanText43",
    "currencyeur",
    "spanText44",
    "spanText45",
    "spanText46",
    "spanText47",
    "x9_Pragmatica_3D_Metal_Calendar",
    "spanText48",
    "frame121Props",
    "messages1Props",
    "messages2Props",
    "frame122Props",
    "group231Props",
    "group232Props",
    "group233Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.dashboard-24
  align-items: flex-start
  border: 1px none
  display: flex
  min-width: 1512px

.home-5
  align-items: flex-start
  background-color: $mercury
  border: 1px none
  display: flex
  width: 1512px

.overlap-group7
  -webkit-backdrop-filter: blur(51px) brightness(100%)
  align-items: flex-start
  backdrop-filter: blur(51px) brightness(100%)
  background-color: #41414133
  box-shadow: 10px 28px 36px 17px #00000040
  display: flex
  gap: 70px
  height: 940px
  min-width: 1512px
  padding: 31px 33px

.overlap-group8
  height: 876px
  position: relative
  width: 163px

.side-menu
  align-items: flex-start
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgba(36, 18, 106, 0.53) 100%)
  border: 1px none
  border-radius: 25px
  display: flex
  flex-direction: column
  height: 876px
  left: 3px
  overflow: hidden
  padding: 42px 0
  position: absolute
  top: 0
  width: 160px

.logo-top
  align-items: center
  align-self: center
  display: flex
  flex-direction: column
  gap: 3px
  min-height: 72px
  width: 60px

.overlap-group-107
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px solid
  border-color: #9a989b3b
  border-radius: 30px
  display: flex
  height: 60px
  margin-right: 2.0px
  margin-top: -1px
  min-width: 60px
  padding: 1.6px 2.8px

.group-46
  height: 55px
  width: 52px

.digit-x
  color: $dark-blue
  font-family: $font-family-encode_sans-bold
  font-size: 8px
  font-weight: 700
  letter-spacing: 0
  line-height: normal
  margin-right: 3.0px
  min-height: 9px
  width: 25px

.span0-12
  color: $material-themereferrorerror100
  font-family: $font-family-poppins-bold

.span1-18
  color: $paris-m
  font-family: $font-family-poppins-bold

.container
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  gap: 20px
  margin-left: 1px
  margin-top: 37px
  min-height: 364px
  position: relative
  width: 158px

.home-6
  align-items: center
  background-color: #6367b4
  border: 1px none
  border-radius: 7px
  display: flex
  height: 44px
  min-width: 158px
  padding: 0 20px
  position: relative

.container-item
  align-items: center
  border: 1px none
  border-radius: 7px
  display: flex
  height: 44px
  min-width: 158px
  padding: 0 20px

.frame-13-1
  align-items: center
  border: 1px none
  display: flex
  gap: 16px
  min-width: 94px

.trend-up,
.users,
.icon-folder,
.gear-six
  height: 24px
  width: 24px

.forecast
  letter-spacing: 0
  line-height: normal
  margin-bottom: 2.0px
  min-height: 18px
  min-width: 54px

.frame-14
  align-items: center
  border: 1px none
  display: flex
  gap: 16px
  min-width: 108px

.developers
  letter-spacing: 0
  line-height: normal
  margin-bottom: 2.0px
  min-height: 18px
  min-width: 68px

.folders
  align-items: center
  border: 1px none
  border-radius: 7px
  display: flex
  height: 44px
  overflow: hidden
  padding: 0 20px
  width: 158px

.frame-19
  align-items: center
  border: 1px none
  display: flex
  gap: 16px
  min-width: 104px

.directories
  letter-spacing: 0
  line-height: normal
  margin-bottom: 2.0px
  min-height: 18px
  min-width: 64px

.bottom-buttons
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 13px
  margin-left: 1px
  margin-top: 152px
  min-height: 101px
  width: 130px

.frame-22
  align-items: center
  border: 1px none
  display: flex
  height: 44px
  min-width: 130px
  padding: 0 20px

.frame-21
  align-items: center
  border: 1px none
  display: flex
  gap: 16px
  min-width: 89px

.settings
  letter-spacing: 0
  line-height: normal
  margin-bottom: 2.0px
  min-height: 18px
  min-width: 49px

.frame-24
  align-items: center
  border: 1px none
  display: flex
  height: 44px
  min-width: 130px
  padding: 0 20px
  position: relative

.selector
  height: 32px
  left: 0
  position: absolute
  top: 157px
  width: 24px

.home-7
  align-items: center
  align-self: center
  display: flex
  flex-direction: column
  gap: 38px
  margin-bottom: 12.04px
  min-height: 842px
  width: 1183px

.top-bar
  align-items: center
  display: flex
  height: 90px
  margin-left: 2.87px
  min-width: 1164px

.welcome-message
  align-items: flex-start
  display: flex
  flex-direction: column
  min-height: 90px
  width: 555px

.welcome-user_name
  letter-spacing: 0
  line-height: normal
  margin-top: -1px
  min-height: 67px
  width: 551px

.here-is-project_nam
  letter-spacing: 0
  line-height: normal
  margin-left: 9px
  min-height: 23px
  width: 422px

.search-bar
  align-items: center
  align-self: flex-end
  background-color: $material-themeread-onlylighton-erroropacity-012
  border-radius: 8px
  display: flex
  gap: 9px
  height: 52px
  margin-bottom: 9.01px
  margin-left: 107px
  min-width: 326px
  padding: 13.8px 26.4px

.icon-search
  height: 17px
  margin-top: 1.07px
  width: 18px

.search-your-query
  align-self: flex-end
  letter-spacing: 0
  line-height: normal
  min-height: 22px
  width: 142px

.group-7
  align-items: flex-start
  background-size: 100% 100%
  display: flex
  height: 26px
  justify-content: flex-end
  margin-left: 35px
  margin-top: 18.69px
  min-width: 26px

.ellipse-1-1
  background-color: $paris-m
  border: 1px none
  border-radius: 6.61px/6.39px
  height: 13px
  margin-top: 0
  width: 13px

.account
  align-items: center
  display: flex
  gap: 10px
  margin-left: 35px
  margin-top: 18.69px
  min-width: 78px
  padding: 0 0.0px

.profile-image
  height: 49px
  object-fit: cover
  width: 51px

.account-menu
  height: 17px
  margin-top: 4.26px
  width: 18px

.flex-row-109
  align-items: flex-start
  display: flex
  gap: 18px
  height: 714px
  margin-right: 1.65px
  min-width: 1181px

.flex-col-26
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 21px
  min-height: 707px
  width: 829px

.sprints
  align-items: flex-start
  border: 1px none
  display: flex
  height: 358px
  min-width: 826px

.overlap-group6-3
  border-radius: 12px
  height: 336px
  position: relative
  width: 750px

.overlap-group2-23
  align-items: center
  background-color: $material-themereferrorerror100
  border-radius: 12px
  display: flex
  flex-direction: column
  left: 0
  min-height: 336px
  padding: 26.1px 0
  position: absolute
  top: 0
  width: 750px

.flex-row-110
  align-items: center
  display: flex
  height: 63px
  margin-right: 15.0px
  min-width: 669px

.flex-col-27
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 8px
  min-height: 63px
  width: 122px

.price-19
  letter-spacing: 0
  line-height: normal
  min-height: 32px
  width: 122px

.total-hours,
.tickets-created,
.total-earned,
.send-rsvp
  letter-spacing: 0
  line-height: normal
  min-height: 23px

.data-1
  align-items: flex-start
  display: flex
  gap: 8px
  height: 20px
  margin-left: 275px
  margin-top: 6.87px
  min-width: 72px

.ellipse-5-1
  align-self: center
  background-color: $seagull
  border: 1px none
  border-radius: 6px
  height: 12px
  width: 12px

.worked,
.forecasted
  letter-spacing: 0
  line-height: normal
  margin-top: -1px
  min-height: 20px

.data-2
  align-items: flex-start
  display: flex
  gap: 8px
  height: 20px
  margin-left: 8px
  margin-top: 6.87px
  min-width: 95px

.ellipse-12
  align-self: center
  background-color: $paris-m
  border: 1px none
  border-radius: 6px
  height: 12px
  width: 12px

.time-frame-selector
  align-items: flex-start
  border: 1px solid
  border-color: $mountain-mist-3
  border-radius: 2px
  display: flex
  gap: 8px
  height: 38px
  margin-left: 21px
  margin-top: 6.87px
  min-width: 76px
  padding: 8px

.today,
.mar-14
  letter-spacing: 0
  line-height: normal
  min-height: 20px
  min-width: 41px

.time-frame-selector-1,
.group-3,
.toggle-menu
  align-self: center
  height: 9px
  margin-bottom: 2.0px
  width: 9px

.overlap-group1-31
  align-items: flex-start
  background-size: 100% 100%
  display: flex
  gap: 10px
  height: 37px
  margin-right: 217.0px
  min-width: 111px
  padding: 4px 13px

.price-20
  letter-spacing: 0
  line-height: normal
  min-height: 20px

.line-chart
  align-items: center
  display: flex
  gap: 1px
  height: 165px
  margin-top: 14px
  min-width: 686px

.y-axis
  align-items: center
  display: flex
  flex-direction: column
  gap: 30px
  margin-bottom: 12.99px
  min-height: 120px
  width: 49px

.x100hrs
  letter-spacing: 0
  line-height: normal
  margin-right: 8.0px
  margin-top: -1px
  min-height: 20px
  min-width: 41px

.x50hrs
  letter-spacing: 0
  line-height: normal
  min-height: 20px
  min-width: 37px

.x10hrs
  letter-spacing: 0
  line-height: normal
  min-height: 20px
  min-width: 33px

.flex-col-28
  align-items: center
  display: flex
  flex-direction: column
  gap: 17px
  min-height: 165px
  width: 636px

.data
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 11px
  min-height: 128px
  width: 636px

.overlap-group-108
  height: 117px
  position: relative
  width: 636px

.line-1-30
  height: 1px
  left: 0
  position: absolute
  top: 78px
  width: 636px

.line-2
  height: 1px
  left: 0
  position: absolute
  top: 28px
  width: 636px

.forecasted-1
  height: 103px
  left: 8px
  position: absolute
  top: 14px
  width: 628px

.worked-1
  height: 102px
  left: 6px
  position: absolute
  top: 0
  width: 630px

.line-0
  height: 1px
  width: 636px

.x-axis
  align-items: flex-start
  display: flex
  height: 20px
  margin-left: 14.0px
  min-width: 558px

.feb
  letter-spacing: 0
  line-height: normal
  margin-top: -1px
  min-height: 20px
  min-width: 22px

.place-44
  letter-spacing: 0
  line-height: normal
  margin-left: 81px
  margin-top: -1px
  min-height: 20px
  min-width: 28px

.apr
  letter-spacing: 0
  line-height: normal
  margin-left: 80px
  margin-top: -1px
  min-height: 20px
  min-width: 25px

.name-30
  letter-spacing: 0
  line-height: normal
  margin-left: 80px
  margin-top: -1px
  min-height: 20px
  min-width: 28px

.jun
  letter-spacing: 0
  line-height: normal
  margin-left: 78px
  margin-top: -1px
  min-height: 20px
  min-width: 25px

.jul
  letter-spacing: 0
  line-height: normal
  margin-left: 77px
  margin-top: -1px
  min-height: 20px

.x-axis-meter
  height: 116px
  left: 264px
  position: absolute
  top: 152px
  width: 1px

.data-pointer
  background-color: $seagull
  border: 5px solid
  border-color: $material-themereferrorerror100
  border-radius: 8px
  box-shadow: 0px 4px 6px #2b174d38
  height: 16px
  left: 256px
  position: absolute
  top: 132px
  width: 16px

.flex-row-111
  align-items: flex-start
  display: flex
  gap: 22px
  min-width: 829px

.bugs
  align-items: flex-start
  border: 1px none
  display: flex
  height: 327px
  min-width: 404px

.overlap-group5-17
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border-radius: 12px
  display: flex
  flex-direction: column
  gap: 23px
  min-height: 307px
  padding: 25.0px 25px
  width: 367px

.title
  align-items: flex-start
  align-self: flex-end
  border-radius: 2px
  display: flex
  gap: 69px
  height: 36px
  margin-top: 6px
  min-width: 305px

.bugs-reported
  align-self: center
  letter-spacing: 0
  line-height: normal
  min-height: 26px
  min-width: 126px

.time-frame-selector-2
  align-items: flex-start
  border: 1px solid
  border-color: $mountain-mist-3
  border-radius: 2px
  display: flex
  gap: 8px
  height: 38px
  margin-top: -1px
  min-width: 109px
  padding: 8px

.this-month
  letter-spacing: 0
  line-height: normal
  min-height: 20px
  min-width: 74px

.flex-row-112
  align-items: flex-start
  display: flex
  gap: 29px
  margin-left: 2.0px
  min-width: 295px

.overlap-group1-32
  height: 192px
  position: relative
  width: 192px

.ellipse-container
  height: 192px
  left: 0
  position: absolute
  top: 0
  width: 192px

.ellipse-9-1
  background-color: $gallery
  border: 1px none
  border-radius: 78.38px
  height: 157px
  left: 18px
  position: absolute
  top: 18px
  width: 157px

.ellipse-8-1
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgba(254.68, 254.36, 255, 0) 100%)
  border: 1px none
  border-radius: 78.38px
  height: 157px
  left: 18px
  position: absolute
  top: 18px
  transform: rotate(-15.00deg)
  width: 157px

.inner-circle
  align-items: flex-start
  background-color: $gallery-2
  border-radius: 253px
  display: flex
  height: 92px
  left: 50px
  min-width: 92px
  position: absolute
  top: 50px

.ellipse-8-2
  background: linear-gradient(180deg, rgb(36, 18, 106) 0%, rgba(36, 18, 106, 0) 100%)
  border: 1px none
  border-radius: 45.81px
  height: 92px
  width: 92px

.data-legend
  align-items: flex-start
  align-self: center
  display: flex
  flex-direction: column
  gap: 24px
  margin-bottom: 0
  min-height: 130px
  width: 74px

.data-2-1
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 15px
  min-height: 53px
  width: 76px

.group-18
  align-items: flex-start
  display: flex
  gap: 8px
  height: 16px
  min-width: 76px

.reported,
.fixed
  letter-spacing: 0
  line-height: normal
  margin-top: -1px
  min-height: 16px

.x10-k
  letter-spacing: 0
  line-height: normal
  margin-left: 2px
  min-height: 21px

.data-1-1
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 15px
  min-height: 53px
  width: 53px

.group-36
  align-items: flex-start
  display: flex
  gap: 8px
  height: 16px
  min-width: 53px

.x4-k
  letter-spacing: 0
  line-height: normal
  min-height: 21px

.activity
  align-items: flex-start
  border: 1px none
  display: flex
  height: 327px
  min-width: 402px

.overlap-group4-10
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border-radius: 12px
  display: flex
  flex-direction: column
  gap: 21px
  min-height: 307px
  padding: 30px 27px
  width: 365px

.flex-row-113
  align-items: center
  display: flex
  gap: 56px
  min-width: 310px

.developer-activity
  letter-spacing: 0
  line-height: normal
  margin-bottom: 2.0px
  min-height: 26px
  min-width: 155px

.time-frame
  align-items: flex-start
  border: 1px solid
  border-color: $mountain-mist-3
  border-radius: 2px
  display: flex
  gap: 8px
  height: 38px
  min-width: 99px
  padding: 8px

.this-week
  letter-spacing: 0
  line-height: normal
  min-height: 20px
  min-width: 64px

.bar-chart
  align-items: flex-end
  align-self: center
  display: flex
  flex-direction: column
  gap: 8px
  min-height: 188px
  width: 309px

.overlap-group-109
  height: 162px
  position: relative
  width: 309px

.y-axis-1
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 30px
  left: 0
  min-height: 162px
  position: absolute
  top: 0
  width: 309px

.group-26
  align-items: flex-start
  display: flex
  gap: 16px
  height: 18px
  margin-left: 2px
  min-width: 309px

.number
  letter-spacing: 0
  line-height: normal
  margin-top: -1px
  text-align: center
  width: 28px

.line-13
  align-self: center
  height: 1px
  margin-bottom: 2.0px
  width: 263px

.bars
  align-items: flex-end
  display: flex
  height: 143px
  left: 60px
  min-width: 233px
  position: absolute
  top: 8px

.group-27
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgba(125, 190, 227, 0.03) 100%)
  height: 95px
  width: 15px

.group-28
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgba(125, 190, 227, 0.03) 100%)
  height: 143px
  margin-left: 28px
  width: 15px

.group-29
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgba(125, 190, 227, 0.03) 100%)
  height: 76px
  margin-left: 28px
  width: 15px

.group-30
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgba(125, 190, 227, 0.03) 100%)
  height: 113px
  margin-left: 31px
  width: 15px

.group-31
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgba(125, 190, 227, 0.03) 100%)
  height: 126px
  margin-left: 30px
  width: 15px

.group-32
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgba(125, 190, 227, 0.03) 100%)
  height: 33px
  margin-left: 26px
  width: 15px

.x-axis-1
  align-items: flex-start
  display: flex
  height: 18px
  margin-right: 8px
  min-width: 239px

.m
  letter-spacing: 0
  line-height: normal
  margin-top: -1px
  min-height: 18px
  min-width: 11px
  text-align: center

.x-axis-item
  letter-spacing: 0
  line-height: normal
  margin-left: 34px
  margin-top: -1px
  min-height: 18px
  min-width: 7px
  text-align: center

.w
  letter-spacing: 0
  line-height: normal
  margin-left: 33px
  margin-top: -1px
  min-height: 18px
  min-width: 12px
  text-align: center

.th
  letter-spacing: 0
  line-height: normal
  margin-left: 33px
  margin-top: -1px
  min-height: 18px
  min-width: 15px
  text-align: center

.price-21
  letter-spacing: 0
  line-height: normal
  margin-left: 33px
  margin-top: -1px
  min-height: 18px
  min-width: 8px
  text-align: center

.flex-col-29
  align-items: center
  display: flex
  flex-direction: column
  min-height: 714px
  width: 334px

.vendors
  align-items: flex-start
  border: 1px none
  display: flex
  height: 168px
  margin-right: 5.06px
  min-width: 326px

.overlap-group3-13
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border-radius: 12px
  box-shadow: 8px 24px 31px #7dbee363
  display: flex
  gap: 26px
  height: 158px
  min-width: 296px
  padding: 22px 30px

.icon-2
  align-items: flex-end
  background-color: #e9e5ff
  border-radius: 31px
  display: flex
  height: 62px
  margin-top: 4px
  min-width: 62px
  padding: 13.8px 13.6px

.new-ticket
  height: 34px
  width: 34px

.data-3
  align-items: flex-start
  border-radius: 2px
  display: flex
  flex-direction: column
  gap: 11px
  min-height: 110px
  position: relative
  width: 119px

.data-4
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 8px
  min-height: 62px
  width: 123px

.number-1
  letter-spacing: 0
  line-height: normal
  margin-top: -1px
  min-height: 31px
  width: 53px

.profits
  align-items: flex-start
  border: 1px none
  display: flex
  height: 168px
  margin-right: 7.91px
  margin-top: 16px
  min-width: 326px

.overlap-group2-24
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border-radius: 12px
  box-shadow: 8px 24px 31px #1e0f3e63
  display: flex
  gap: 26px
  height: 158px
  justify-content: flex-end
  min-width: 296px
  padding: 22px 29px

.icon-3
  align-items: flex-end
  background-color: #24126a33
  border-radius: 31px
  display: flex
  height: 62px
  margin-top: 4px
  min-width: 62px
  padding: 13.9px 13px

.currency-eur
  height: 34px
  width: 35px

.data-5
  align-items: flex-start
  border-radius: 2px
  display: flex
  flex-direction: column
  gap: 9px
  min-height: 110px
  position: relative
  width: 149px

.data-6
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 8px
  min-height: 64px
  width: 153px

.price-22
  letter-spacing: 0
  line-height: normal
  margin-top: -1px
  min-height: 33px
  width: 149px

.calendar
  align-items: flex-start
  border: 1px none
  display: flex
  height: 327px
  margin-left: 7.06px
  margin-top: 34px
  min-width: 327px
  transform: rotate(0.58deg)

.overlap-group-110
  align-items: center
  background-color: $material-themereferrorerror100
  border-radius: 12px
  display: flex
  flex-direction: column
  min-height: 307px
  padding: 20.1px 28.2px
  width: 297px

.upcoming-status-meeting
  align-self: flex-start
  letter-spacing: 0
  line-height: normal
  min-height: 26px

.overlap-group1-33
  height: 150px
  margin-left: 3.31px
  margin-top: 4px
  position: relative
  width: 143px

.x12th-aug-2022
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 120px

.x9_-pragmatica_3-d_-metal_-calendar
  height: 130px
  left: 6px
  object-fit: cover
  position: absolute
  top: 0
  transform: rotate(-0.58deg)
  width: 131px

.button-55
  align-items: flex-start
  background-color: $dark-blue
  border: 1px none
  border-radius: 17px
  display: flex
  height: 59px
  margin-left: 1.0px
  margin-top: 23px
  min-width: 236px
  padding: 17px 77px
</style>
