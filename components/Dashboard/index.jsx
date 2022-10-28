import React from "react";
import Group23 from "../Group23";
import TimeFrame from "../TimeFrame";
import Frame12 from "../Frame12";
import Messages from "../Messages";
import "./Dashboard.css";

function Dashboard(props) {
  const {
    welcomeUser_Name,
    hereIsProject_Nam,
    searchYourQuery,
    profileImage,
    price1,
    totalHours,
    mar14,
    price2,
    worked1,
    forecasted1,
    today,
    x100Hrs,
    x50Hrs,
    x10Hrs,
    feb,
    place,
    apr,
    name,
    jun,
    jul,
    bugsReported,
    thisMonth,
    reported,
    x10K,
    fixed,
    x4K,
    developerActivity,
    thisWeek,
    spanText1,
    spanText2,
    m,
    t,
    w,
    th,
    f,
    price3,
    newTicket,
    number,
    ticketsCreated,
    price4,
    totalEarned,
    upcomingStatusMeeting,
    x12ThAug2022,
    x9_Pragmatica_3D_Metal_Calendar,
    sendRsvp,
    spanText3,
    spanText4,
    forecast,
    developers,
    directories,
    settings,
    group231Props,
    group232Props,
    group233Props,
    frame121Props,
    messages1Props,
    messages2Props,
    frame122Props,
  } = props;

  return (
    <div className="dashboard screen">
      <div className="home">
        <div className="dashboard-content">
          <div className="top-bar">
            <div className="welcome-message">
              <div className="welcome-user_name">{welcomeUser_Name}</div>
              <p className="here-is-project_nam">{hereIsProject_Nam}</p>
            </div>
            <div className="search-bar">
              <img className="icon-search" src="/img/bi-search-heart-fill@2x.svg" alt="icon-search" />
              <div className="search-your-query">{searchYourQuery}</div>
            </div>
            <div className="group-7">
              <div className="ellipse-1"></div>
            </div>
            <div className="account">
              <img className="profile-image" src={profileImage} alt="profile-image" />
              <img className="account-menu" src="/img/-account-menu@2x.svg" alt="account-menu" />
            </div>
          </div>
          <div className="flex-row-21">
            <div className="flex-col">
              <div className="sprints">
                <div className="overlap-group6-3">
                  <div className="overlap-group3-7">
                    <div className="flex-row-22">
                      <div className="flex-col-1">
                        <div className="price-19 poppins-semi-bold-cherry-pie-28px">{price1}</div>
                        <div className="total-hours poppins-medium-purple-heart-15px">{totalHours}</div>
                      </div>
                      <div className="overlap-group2-15">
                        <div className="mar-14 poppins-regular-normal-mountain-mist-13px-2">{mar14}</div>
                        <div className="price-20">{price2}</div>
                      </div>
                      <div className="data-1">
                        <div className="ellipse-5"></div>
                        <div className="worked poppins-regular-normal-mountain-mist-13px-2">{worked1}</div>
                      </div>
                      <div className="data-2">
                        <div className="ellipse"></div>
                        <div className="forecasted poppins-regular-normal-mountain-mist-13px-2">{forecasted1}</div>
                      </div>
                      <div className="time-frame-selector">
                        <div className="today poppins-medium-mountain-mist-13px">{today}</div>
                        <img
                          className="time-frame-selector-1"
                          src="/img/-time-frame-selector@2x.svg"
                          alt="time-frame-selector"
                        />
                      </div>
                    </div>
                    <div className="line-chart">
                      <div className="overlap-group1-17">
                        <div className="y-axis poppins-regular-normal-mountain-mist-13px">
                          <div className="x100hrs">{x100Hrs}</div>
                          <div className="x50hrs">{x50Hrs}</div>
                          <div className="x10hrs">{x10Hrs}</div>
                        </div>
                        <div className="overlap-group-45">
                          <img className="line-0" src="/img/-line-0@1x.svg" alt="line-0" />
                          <img className="line-1-12" src="/img/-line-0@1x.svg" alt="line-1" />
                          <img className="line-2" src="/img/-line-2@1x.svg" alt="line-2" />
                          <img className="forecasted-1" src="/img/-forecasted@1x.svg" alt="forecasted" />
                          <img className="worked-1" src="/img/-worked@1x.svg" alt="worked" />
                        </div>
                      </div>
                      <div className="x-axis poppins-regular-normal-mountain-mist-13px">
                        <div className="feb">{feb}</div>
                        <div className="place-44">{place}</div>
                        <div className="apr">{apr}</div>
                        <div className="name-29">{name}</div>
                        <div className="jun">{jun}</div>
                        <div className="jul">{jul}</div>
                      </div>
                    </div>
                  </div>
                  <img className="x-axis-meter" src="/img/-x-axis-meter@2x.svg" alt="x-axis-meter" />
                  <div className="data-pointer"></div>
                </div>
              </div>
              <div className="flex-row-23">
                <div className="bugs">
                  <div className="overlap-group5-3">
                    <div className="title">
                      <div className="bugs-reported poppins-medium-cherry-pie-17px">{bugsReported}</div>
                      <div className="time-frame-selector-2">
                        <div className="this-month poppins-medium-mountain-mist-13px-2">{thisMonth}</div>
                        <img className="group-3" src="/img/group-3@2x.svg" alt="Group 3" />
                      </div>
                    </div>
                    <div className="flex-row-24">
                      <div className="overlap-group2-16">
                        <div className="overlap-group-46">
                          <img className="ellipse-8" src="/img/ellipse-8@2x.svg" alt="Ellipse 8" />
                        </div>
                        <div className="inner-circle">
                          <div className="ellipse-container">
                            <img className="ellipse-9" src="/img/ellipse-9-1@2x.svg" alt="Ellipse 9" />
                            <img className="ellipse-8-1" src="/img/ellipse-8-1@2x.svg" alt="Ellipse 8" />
                          </div>
                        </div>
                      </div>
                      <div className="data-legend">
                        <div className="data-2-1">
                          <div className="group-18">
                            <div className="ellipse-5"></div>
                            <div className="reported encodesans-regular-normal-mountain-mist-13px">{reported}</div>
                          </div>
                          <div className="x10-k encodesans-semi-bold-gravel-17px">{x10K}</div>
                        </div>
                        <div className="data-1-1">
                          <div className="group-36">
                            <div className="ellipse"></div>
                            <div className="fixed encodesans-regular-normal-mountain-mist-13px">{fixed}</div>
                          </div>
                          <div className="x4-k encodesans-semi-bold-gravel-17px">{x4K}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="activity">
                  <div className="overlap-group4-5">
                    <div className="flex-row-25">
                      <div className="developer-activity poppins-medium-cherry-pie-17px">{developerActivity}</div>
                      <div className="time-frame">
                        <div className="this-week poppins-medium-mountain-mist-13px-2">{thisWeek}</div>
                        <img className="toggle-menu" src="/img/-toggle-menu@2x.svg" alt="toggle-menu" />
                      </div>
                    </div>
                    <div className="bar-chart">
                      <div className="overlap-group-47">
                        <div className="y-axis-1">
                          <Group23 number={group231Props.number} />
                          <Group23 number={group232Props.number} className={group232Props.className} />
                          <Group23 number={group233Props.number} className={group233Props.className} />
                          <div className="group-26">
                            <div className="number">
                              <span className="poppins-regular-normal-white-12px">{spanText1}</span>
                              <span className="poppins-regular-normal-mountain-mist-12px">{spanText2}</span>
                            </div>
                            <img className="line-13" src="/img/line-12@2x.svg" alt="Line 13" />
                          </div>
                        </div>
                        <div className="bars">
                          <div className="group-27"></div>
                          <div className="group-28"></div>
                          <div className="group-29"></div>
                          <div className="group-30"></div>
                          <div className="group-31"></div>
                          <div className="group-32"></div>
                        </div>
                      </div>
                      <div className="x-axis-1 poppins-regular-normal-mountain-mist-12px">
                        <div className="m">{m}</div>
                        <div className="x-axis-item">{t}</div>
                        <div className="w">{w}</div>
                        <div className="th">{th}</div>
                        <div className="x-axis-item">{f}</div>
                        <div className="price-21">{price3}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col-2">
              <div className="vendors">
                <div className="overlap-group3-8">
                  <div className="icon-1">
                    <img className="new-ticket" src={newTicket} alt="New Ticket" />
                  </div>
                  <div className="data">
                    <div className="data-3">
                      <div className="number-1">{number}</div>
                      <div className="tickets-created poppins-medium-purple-heart-15px">{ticketsCreated}</div>
                    </div>
                    <TimeFrame />
                  </div>
                </div>
              </div>
              <div className="profits">
                <div className="overlap-group2-17">
                  <div className="icon-2">
                    <img className="currency-eur" src="/img/currencyeur@2x.svg" alt="CurrencyEur" />
                  </div>
                  <div className="data-4">
                    <div className="data-5">
                      <div className="price-22 poppins-semi-bold-cherry-pie-28px">{price4}</div>
                      <div className="total-earned poppins-medium-purple-heart-15px">{totalEarned}</div>
                    </div>
                    <TimeFrame />
                  </div>
                </div>
              </div>
              <div className="calendar">
                <div className="overlap-group-48">
                  <div className="upcoming-status-meeting poppins-medium-cherry-pie-17px">{upcomingStatusMeeting}</div>
                  <div className="overlap-group1-18">
                    <div className="x12th-aug-2022">{x12ThAug2022}</div>
                    <img
                      className="x9_-pragmatica_3-d_-metal_-calendar"
                      src={x9_Pragmatica_3D_Metal_Calendar}
                      alt="9_Pragmatica_3D_Metal_Calendar"
                    />
                  </div>
                  <div className="button-15">
                    <div className="send-rsvp">{sendRsvp}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-expanded">
          <div className="overlap-group7">
            <div className="side-menu">
              <div className="logo-top">
                <div className="overlap-group-49">
                  <img className="group-46" src="/img/group-46@2x.svg" alt="Group 46" />
                </div>
                <div className="digit-x">
                  <span className="span0">{spanText3}</span>
                  <span className="span1-6">{spanText4}</span>
                </div>
              </div>
              <div className="container">
                <div className="home-1">
                  <Frame12 place={frame121Props.place} />
                </div>
                <div className="forecast">
                  <div className="frame-13">
                    <img className="trend-up" src="/img/trendup@2x.svg" alt="TrendUp" />
                    <div className="forecast-1">{forecast}</div>
                  </div>
                </div>
                <div className="vendors-1">
                  <div className="frame">
                    <img className="users" src="/img/users@2x.svg" alt="Users" />
                    <div className="developers poppins-regular-normal-white-12px">{developers}</div>
                  </div>
                </div>
                <Messages messages={messages1Props.messages} />
                <Messages messages={messages2Props.messages} />
                <div className="folders">
                  <div className="frame">
                    <img className="icon-folder" src="/img/folderopen@2x.svg" alt="icon-folder" />
                    <div className="directories poppins-regular-normal-white-12px">{directories}</div>
                  </div>
                </div>
              </div>
              <div className="bottom-buttons">
                <div className="frame-22">
                  <div className="frame">
                    <img className="gear-six" src="/img/gearsix@2x.svg" alt="GearSix" />
                    <div className="settings poppins-regular-normal-white-12px">{settings}</div>
                  </div>
                </div>
                <div className="frame-24">
                  <Frame12 place={frame122Props.place} className={frame122Props.className} />
                </div>
              </div>
            </div>
            <img className="selector" src="/img/-selector@2x.svg" alt="selector" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
