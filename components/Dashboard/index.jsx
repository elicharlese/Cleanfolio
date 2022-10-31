import React from "react";
import Frame12 from "../Frame12";
import Messages from "../Messages";
import Group23 from "../Group23";
import TimeFrame from "../TimeFrame";
import styled from "styled-components";
import {
  PoppinsMediumMountainMist13px2,
  PoppinsMediumMountainMist13px,
  PoppinsMediumCherryPie13px,
  PoppinsMediumWhite14px,
  PoppinsSemiBoldCherryPie20px,
  PoppinsSemiBoldCherryPie28px,
  PoppinsBoldWhite12px,
  EncodesansSemiBoldGravel17px,
  PoppinsSemiBoldWhite14px,
  PoppinsSemiBoldSeagull28px,
  PoppinsRegularNormalMountainMist12p,
  PoppinsRegularNormalMountainMist13p1,
  PoppinsMediumPurpleHeart15px,
  EncodesansRegularNormalMountainMist,
  PoppinsRegularNormalWhite12px,
  PoppinsSemiBoldWhite42px,
  PoppinsMediumCherryPie17px,
  PoppinsRegularNormalMountainMist13p,
  PoppinsBoldWhite15px,
} from "../../styledMixins";
import "./Dashboard.css";

function Dashboard(props) {
  const {
    group46,
    spanText1,
    spanText2,
    trendup,
    spanText3,
    users,
    spanText4,
    folderopen,
    spanText5,
    gearsix,
    spanText6,
    selector,
    spanText7,
    spanText8,
    biSearchHeartFill,
    spanText9,
    group7,
    profileImage,
    accountMenu,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    timeFrameSelector,
    overlapGroup1,
    spanText15,
    spanText16,
    spanText17,
    spanText18,
    spanText19,
    line1,
    line2,
    forecasted,
    worked,
    line0,
    spanText20,
    spanText21,
    spanText22,
    spanText23,
    spanText24,
    spanText25,
    xAxisMeter,
    spanText26,
    spanText27,
    group3,
    spanText28,
    spanText29,
    spanText30,
    spanText31,
    spanText32,
    spanText33,
    toggleMenu,
    spanText34,
    spanText35,
    line13,
    spanText36,
    spanText37,
    spanText38,
    spanText39,
    spanText40,
    spanText41,
    newTicket,
    spanText42,
    spanText43,
    currencyeur,
    spanText44,
    spanText45,
    spanText46,
    spanText47,
    x9_Pragmatica_3D_Metal_Calendar,
    spanText48,
    frame121Props,
    messages1Props,
    messages2Props,
    frame122Props,
    group231Props,
    group232Props,
    group233Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashboard screen">
        <Home>
          <OverlapGroup7>
            <OverlapGroup8>
              <SideMenu>
                <LogoTop>
                  <OverlapGroup>
                    <Group46 src={group46} alt="Group 46" />
                  </OverlapGroup>
                  <DigitX>
                    <Span05>{spanText1}</Span05>
                    <Span15>{spanText2}</Span15>
                  </DigitX>
                </LogoTop>
                <Container>
                  <Home1>
                    <Frame12 group2={frame121Props.group2} spanText={frame121Props.spanText} />
                  </Home1>
                  <Forecast>
                    <Frame13>
                      <TrendUp src={trendup} alt="TrendUp" />
                      <Forecast1>
                        <span className="poppins-bold-white-12px">{spanText3}</span>
                      </Forecast1>
                    </Frame13>
                  </Forecast>
                  <Forecast>
                    <Frame14>
                      <TrendUp src={users} alt="Users" />
                      <Developers>
                        <span className="poppins-regular-normal-white-12px">{spanText4}</span>
                      </Developers>
                    </Frame14>
                  </Forecast>
                  <Messages envelope={messages1Props.envelope} spanText={messages1Props.spanText} />
                  <Messages envelope={messages2Props.envelope} spanText={messages2Props.spanText} />
                  <Folders>
                    <Frame19>
                      <TrendUp src={folderopen} alt="icon-folder" />
                      <Directories>
                        <span className="poppins-regular-normal-white-12px">{spanText5}</span>
                      </Directories>
                    </Frame19>
                  </Folders>
                </Container>
                <BottomButtons>
                  <Frame22>
                    <Frame21>
                      <TrendUp src={gearsix} alt="GearSix" />
                      <Settings>
                        <span className="poppins-regular-normal-white-12px">{spanText6}</span>
                      </Settings>
                    </Frame21>
                  </Frame22>
                  <Frame24>
                    <Frame12 group2={frame122Props.group2} spanText={frame122Props.spanText} />
                  </Frame24>
                </BottomButtons>
              </SideMenu>
              <Selector src={selector} alt="selector" />
            </OverlapGroup8>
            <Home2>
              <TopBar>
                <WelcomeMessage>
                  <WelcomeuserName>
                    <span className="poppins-semi-bold-white-42px">{spanText7}</span>
                  </WelcomeuserName>
                  <HereIsprojectNam>
                    <span className="poppins-semi-bold-white-14px">{spanText8}</span>
                  </HereIsprojectNam>
                </WelcomeMessage>
                <SearchBar>
                  <IconSearch src={biSearchHeartFill} alt="icon-search" />
                  <SearchYourQuery>
                    <span className="poppins-medium-white-14px">{spanText9}</span>
                  </SearchYourQuery>
                </SearchBar>
                <Group7 style={{ backgroundImage: `url(${group7})` }}>
                  <Ellipse1></Ellipse1>
                </Group7>
                <Account>
                  <ProfileImage src={profileImage} alt="profile-image" />
                  <AccountMenu src={accountMenu} alt="account-menu" />
                </Account>
              </TopBar>
              <FlexRow>
                <FlexCol>
                  <Sprints>
                    <OverlapGroup6>
                      <OverlapGroup2>
                        <FlexRow1>
                          <FlexCol1>
                            <Price>
                              <span className="poppins-semi-bold-cherry-pie-28px">{spanText10}</span>
                            </Price>
                            <TotalHours>
                              <span className="poppins-medium-purple-heart-15px">{spanText11}</span>
                            </TotalHours>
                          </FlexCol1>
                          <Data1>
                            <Ellipse5></Ellipse5>
                            <Worked>
                              <span className="poppins-regular-normal-mountain-mist-13px-2">{spanText12}</span>
                            </Worked>
                          </Data1>
                          <Data2>
                            <Ellipse6></Ellipse6>
                            <Worked>
                              <span className="poppins-regular-normal-mountain-mist-13px-2">{spanText13}</span>
                            </Worked>
                          </Data2>
                          <TimeFrameSelector>
                            <Today>
                              <span className="poppins-medium-mountain-mist-13px">{spanText14}</span>
                            </Today>
                            <TimeFrameSelector1 src={timeFrameSelector} alt="time-frame-selector" />
                          </TimeFrameSelector>
                        </FlexRow1>
                        <OverlapGroup1 style={{ backgroundImage: `url(${overlapGroup1})` }}>
                          <Mar14>
                            <span className="poppins-regular-normal-mountain-mist-13px-2">{spanText15}</span>
                          </Mar14>
                          <Price1>
                            <span className="poppins-medium-cherry-pie-13px">{spanText16}</span>
                          </Price1>
                        </OverlapGroup1>
                        <LineChart>
                          <YAxis>
                            <X100hrs>
                              <span className="poppins-regular-normal-mountain-mist-13px">{spanText17}</span>
                            </X100hrs>
                            <X50hrs>
                              <span className="poppins-regular-normal-mountain-mist-13px">{spanText18}</span>
                            </X50hrs>
                            <X10hrs>
                              <span className="poppins-regular-normal-mountain-mist-13px">{spanText19}</span>
                            </X10hrs>
                          </YAxis>
                          <FlexCol2>
                            <Data>
                              <OverlapGroup3>
                                <Line1 src={line1} alt="line-1" />
                                <Line2 src={line2} alt="line-2" />
                                <Forecasted src={forecasted} alt="forecasted" />
                                <Worked1 src={worked} alt="worked" />
                              </OverlapGroup3>
                              <Line0 src={line0} alt="line-0" />
                            </Data>
                            <XAxis>
                              <FEB>
                                <span className="poppins-regular-normal-mountain-mist-13px">{spanText20}</span>
                              </FEB>
                              <Place>
                                <span className="poppins-regular-normal-mountain-mist-13px">{spanText21}</span>
                              </Place>
                              <APR>
                                <span className="poppins-regular-normal-mountain-mist-13px">{spanText22}</span>
                              </APR>
                              <Name>
                                <span className="poppins-regular-normal-mountain-mist-13px">{spanText23}</span>
                              </Name>
                              <JUN>
                                <span className="poppins-regular-normal-mountain-mist-13px">{spanText24}</span>
                              </JUN>
                              <JUL>
                                <span className="poppins-regular-normal-mountain-mist-13px">{spanText25}</span>
                              </JUL>
                            </XAxis>
                          </FlexCol2>
                        </LineChart>
                      </OverlapGroup2>
                      <XAxisMeter src={xAxisMeter} alt="x-axis-meter" />
                      <DataPointer></DataPointer>
                    </OverlapGroup6>
                  </Sprints>
                  <FlexRow2>
                    <Bugs>
                      <OverlapGroup5>
                        <Title>
                          <BugsReported>
                            <span className="poppins-medium-cherry-pie-17px">{spanText26}</span>
                          </BugsReported>
                          <TimeFrameSelector2>
                            <ThisMonth>
                              <span className="poppins-medium-mountain-mist-13px-2">{spanText27}</span>
                            </ThisMonth>
                            <TimeFrameSelector1 src={group3} alt="Group 3" />
                          </TimeFrameSelector2>
                        </Title>
                        <FlexRow3>
                          <OverlapGroup11>
                            <EllipseContainer>
                              <Ellipse9></Ellipse9>
                              <Ellipse8></Ellipse8>
                            </EllipseContainer>
                            <InnerCircle>
                              <Ellipse81></Ellipse81>
                            </InnerCircle>
                          </OverlapGroup11>
                          <DataLegend>
                            <Data21>
                              <Group18>
                                <Ellipse5></Ellipse5>
                                <Reported>
                                  <span className="encodesans-regular-normal-mountain-mist-13px">{spanText28}</span>
                                </Reported>
                              </Group18>
                              <X10K>
                                <span className="encodesans-semi-bold-gravel-17px">{spanText29}</span>
                              </X10K>
                            </Data21>
                            <Data11>
                              <Group36>
                                <Ellipse6></Ellipse6>
                                <Reported>
                                  <span className="encodesans-regular-normal-mountain-mist-13px">{spanText30}</span>
                                </Reported>
                              </Group36>
                              <X4K>
                                <span className="encodesans-semi-bold-gravel-17px">{spanText31}</span>
                              </X4K>
                            </Data11>
                          </DataLegend>
                        </FlexRow3>
                      </OverlapGroup5>
                    </Bugs>
                    <Activity>
                      <OverlapGroup4>
                        <FlexRow4>
                          <DeveloperActivity>
                            <span className="poppins-medium-cherry-pie-17px">{spanText32}</span>
                          </DeveloperActivity>
                          <TimeFrame1>
                            <ThisWeek>
                              <span className="poppins-medium-mountain-mist-13px-2">{spanText33}</span>
                            </ThisWeek>
                            <TimeFrameSelector1 src={toggleMenu} alt="toggle-menu" />
                          </TimeFrame1>
                        </FlexRow4>
                        <BarChart>
                          <OverlapGroup9>
                            <YAxis1>
                              <Group23 spanText={group231Props.spanText} />
                              <Group23 spanText={group232Props.spanText} className={group232Props.className} />
                              <Group23 spanText={group233Props.spanText} className={group233Props.className} />
                              <Group26>
                                <Number>
                                  <span className="poppins-regular-normal-white-12px">{spanText34}</span>
                                  <span className="poppins-regular-normal-mountain-mist-12px">{spanText35}</span>
                                </Number>
                                <Line13 src={line13} alt="Line 13" />
                              </Group26>
                            </YAxis1>
                            <Bars>
                              <Group27></Group27>
                              <Group28></Group28>
                              <Group29></Group29>
                              <Group30></Group30>
                              <Group31></Group31>
                              <Group32></Group32>
                            </Bars>
                          </OverlapGroup9>
                          <XAxis1>
                            <M>
                              <span className="poppins-regular-normal-mountain-mist-12px">{spanText36}</span>
                            </M>
                            <T>
                              <span className="poppins-regular-normal-mountain-mist-12px">{spanText37}</span>
                            </T>
                            <W>
                              <span className="poppins-regular-normal-mountain-mist-12px">{spanText38}</span>
                            </W>
                            <Th>
                              <span className="poppins-regular-normal-mountain-mist-12px">{spanText39}</span>
                            </Th>
                            <T>
                              <span className="poppins-regular-normal-mountain-mist-12px">{spanText40}</span>
                            </T>
                            <Price2>
                              <span className="poppins-regular-normal-mountain-mist-12px">{spanText41}</span>
                            </Price2>
                          </XAxis1>
                        </BarChart>
                      </OverlapGroup4>
                    </Activity>
                  </FlexRow2>
                </FlexCol>
                <FlexCol3>
                  <Vendors>
                    <OverlapGroup31>
                      <Icon>
                        <NewTicket src={newTicket} alt="New Ticket" />
                      </Icon>
                      <Data3>
                        <Data4>
                          <Number1>
                            <span className="poppins-semi-bold-seagull-28px">{spanText42}</span>
                          </Number1>
                          <TotalHours>
                            <span className="poppins-medium-purple-heart-15px">{spanText43}</span>
                          </TotalHours>
                        </Data4>
                        <TimeFrame />
                      </Data3>
                    </OverlapGroup31>
                  </Vendors>
                  <Profits>
                    <OverlapGroup21>
                      <Icon1>
                        <CurrencyEur src={currencyeur} alt="CurrencyEur" />
                      </Icon1>
                      <Data5>
                        <Data6>
                          <Price3>
                            <span className="poppins-semi-bold-cherry-pie-28px">{spanText44}</span>
                          </Price3>
                          <TotalHours>
                            <span className="poppins-medium-purple-heart-15px">{spanText45}</span>
                          </TotalHours>
                        </Data6>
                        <TimeFrame />
                      </Data5>
                    </OverlapGroup21>
                  </Profits>
                  <Calendar>
                    <OverlapGroup10>
                      <UpcomingStatusMeeting>
                        <span className="poppins-medium-cherry-pie-17px">{spanText46}</span>
                      </UpcomingStatusMeeting>
                      <OverlapGroup12>
                        <X12thAug2022>
                          <span className="poppins-semi-bold-cherry-pie-20px">{spanText47}</span>
                        </X12thAug2022>
                        <X9Pragmatica3DMetalCalendar
                          src={x9_Pragmatica_3D_Metal_Calendar}
                          alt="9_Pragmatica_3D_Metal_Calendar"
                        />
                      </OverlapGroup12>
                      <Button>
                        <SendRSVP>
                          <span className="poppins-bold-white-15px">{spanText48}</span>
                        </SendRSVP>
                      </Button>
                    </OverlapGroup10>
                  </Calendar>
                </FlexCol3>
              </FlexRow>
            </Home2>
          </OverlapGroup7>
        </Home>
      </div>
    </div>
  );
}

const Home = styled.div`
  width: 1512px;
  display: flex;
  align-items: flex-start;
  background-color: var(--mercury);
  border: 1px none;
`;

const OverlapGroup7 = styled.div`
  height: 940px;
  display: flex;
  padding: 31px 33px;
  align-items: flex-start;
  min-width: 1512px;
  gap: 70px;
  background-color: #41414133;
  box-shadow: 10px 28px 36px 17px #00000040;
  backdrop-filter: blur(51px) brightness(100%);
  -webkit-backdrop-filter: blur(51px) brightness(100%);
`;

const OverlapGroup8 = styled.div`
  width: 163px;
  height: 876px;
  position: relative;
`;

const SideMenu = styled.div`
  position: absolute;
  width: 160px;
  height: 876px;
  top: 0;
  left: 3px;
  display: flex;
  flex-direction: column;
  padding: 42px 0;
  align-items: flex-start;
  border-radius: 25px;
  overflow: hidden;
  border: 1px none;
  background: linear-gradient(
    180deg,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgba(36.00000165402889, 18.000000827014446, 106.00000128149986, 0.5299999713897705) 100%
  );
`;

const LogoTop = styled.div`
  width: 60px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 72px;
  gap: 3px;
`;

const OverlapGroup = styled.div`
  height: 60px;
  margin-top: -1px;
  margin-right: 2px;
  display: flex;
  padding: 1.6px 2.8px;
  align-items: flex-end;
  min-width: 60px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 30px;
  border: 1px solid;
  border-color: #9a989b3b;
`;

const Group46 = styled.img`
  width: 52px;
  height: 55px;
`;

const DigitX = styled.div`
  width: 25px;
  min-height: 9px;
  margin-right: 3px;
  font-family: var(--font-family-encode_sans-bold);
  font-weight: 700;
  color: var(--dark-blue);
  font-size: 8px;
  letter-spacing: 0;
`;

const Span05 = styled.span`
  font-family: var(--font-family-poppins-bold);
  color: var(--material-themereferrorerror100);
`;

const Span15 = styled.span`
  font-family: var(--font-family-poppins-bold);
  color: var(--paris-m);
`;

const Container = styled.div`
  width: 158px;
  position: relative;
  margin-top: 37px;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 364px;
  gap: 20px;
  border: 1px none;
`;

const Home1 = styled.div`
  height: 44px;
  position: relative;
  display: flex;
  padding: 0 20px;
  align-items: center;
  min-width: 158px;
  background-color: #6367b4;
  border-radius: 7px;
  border: 1px none;
`;

const Forecast = styled.div`
  height: 44px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  min-width: 158px;
  border-radius: 7px;
  border: 1px none;
`;

const Frame13 = styled.div`
  display: flex;
  align-items: center;
  min-width: 94px;
  gap: 16px;
  border: 1px none;
`;

const TrendUp = styled.img`
  width: 24px;
  height: 24px;
`;

const Forecast1 = styled.div`
  ${PoppinsBoldWhite12px}
  min-height: 18px;
  margin-bottom: 2px;
  min-width: 54px;
  letter-spacing: 0;
`;

const Frame14 = styled.div`
  display: flex;
  align-items: center;
  min-width: 108px;
  gap: 16px;
  border: 1px none;
`;

const Developers = styled.div`
  ${PoppinsRegularNormalWhite12px}
  min-height: 18px;
  margin-bottom: 2px;
  min-width: 68px;
  letter-spacing: 0;
`;

const Folders = styled.div`
  width: 158px;
  height: 44px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  border-radius: 7px;
  overflow: hidden;
  border: 1px none;
`;

const Frame19 = styled.div`
  display: flex;
  align-items: center;
  min-width: 104px;
  gap: 16px;
  border: 1px none;
`;

const Directories = styled.div`
  ${PoppinsRegularNormalWhite12px}
  min-height: 18px;
  margin-bottom: 2px;
  min-width: 64px;
  letter-spacing: 0;
`;

const BottomButtons = styled.div`
  width: 130px;
  margin-top: 152px;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 101px;
  gap: 13px;
`;

const Frame22 = styled.div`
  height: 44px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  min-width: 130px;
  border: 1px none;
`;

const Frame21 = styled.div`
  display: flex;
  align-items: center;
  min-width: 89px;
  gap: 16px;
  border: 1px none;
`;

const Settings = styled.div`
  ${PoppinsRegularNormalWhite12px}
  min-height: 18px;
  margin-bottom: 2px;
  min-width: 49px;
  letter-spacing: 0;
`;

const Frame24 = styled.div`
  height: 44px;
  position: relative;
  display: flex;
  padding: 0 20px;
  align-items: center;
  min-width: 130px;
  border: 1px none;
`;

const Selector = styled.img`
  position: absolute;
  width: 24px;
  height: 32px;
  top: 157px;
  left: 0;
`;

const Home2 = styled.div`
  width: 1183px;
  align-self: center;
  margin-bottom: 12.04px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 842px;
  gap: 38px;
`;

const TopBar = styled.div`
  height: 90px;
  margin-left: 2.87px;
  display: flex;
  align-items: center;
  min-width: 1164px;
`;

const WelcomeMessage = styled.div`
  width: 555px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 90px;
`;

const WelcomeuserName = styled.div`
  ${PoppinsSemiBoldWhite42px}
  width: 551px;
  margin-top: -1px;
  min-height: 67px;
  letter-spacing: 0;
`;

const HereIsprojectNam = styled.p`
  ${PoppinsSemiBoldWhite14px}
  width: 422px;
  min-height: 23px;
  margin-left: 9px;
  letter-spacing: 0;
`;

const SearchBar = styled.div`
  height: 52px;
  align-self: flex-end;
  margin-left: 107px;
  margin-bottom: 9.01px;
  display: flex;
  padding: 13.8px 26.4px;
  align-items: center;
  min-width: 326px;
  gap: 9px;
  background-color: var(--material-themeread-onlylighton-erroropacity-012);
  border-radius: 8px;
`;

const IconSearch = styled.img`
  width: 18px;
  height: 17px;
  margin-top: 1.07px;
`;

const SearchYourQuery = styled.div`
  ${PoppinsMediumWhite14px}
  width: 142px;
  min-height: 22px;
  align-self: flex-end;
  letter-spacing: 0;
`;

const Group7 = styled.div`
  height: 26px;
  margin-left: 35px;
  margin-top: 18.69px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 26px;
  background-size: 100% 100%;
`;

const Ellipse1 = styled.div`
  width: 13px;
  height: 13px;
  margin-top: 0;
  background-color: var(--paris-m);
  border-radius: 6.61px/6.39px;
  border: 1px none;
`;

const Account = styled.div`
  margin-left: 35px;
  margin-top: 18.69px;
  display: flex;
  padding: 0 0px;
  align-items: center;
  min-width: 78px;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 51px;
  height: 49px;
  object-fit: cover;
`;

const AccountMenu = styled.img`
  width: 18px;
  height: 17px;
  margin-top: 4.26px;
`;

const FlexRow = styled.div`
  height: 714px;
  margin-right: 1.65px;
  display: flex;
  align-items: flex-start;
  min-width: 1181px;
  gap: 18px;
`;

const FlexCol = styled.div`
  width: 829px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 707px;
  gap: 21px;
`;

const Sprints = styled.div`
  height: 358px;
  display: flex;
  align-items: flex-start;
  min-width: 826px;
  border: 1px none;
`;

const OverlapGroup6 = styled.div`
  width: 750px;
  height: 336px;
  position: relative;
  border-radius: 12px;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 750px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 26.1px 0;
  align-items: center;
  min-height: 336px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 12px;
`;

const FlexRow1 = styled.div`
  height: 63px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  min-width: 669px;
`;

const FlexCol1 = styled.div`
  width: 122px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 63px;
  gap: 8px;
`;

const Price = styled.div`
  ${PoppinsSemiBoldCherryPie28px}
  width: 122px;
  min-height: 32px;
  letter-spacing: 0;
`;

const TotalHours = styled.div`
  ${PoppinsMediumPurpleHeart15px}
  min-height: 23px;
  letter-spacing: 0;
`;

const SendRSVP = styled.div`
  ${PoppinsBoldWhite15px}
  min-height: 23px;
  letter-spacing: 0;
`;

const Data1 = styled.div`
  height: 20px;
  margin-left: 275px;
  margin-top: 6.87px;
  display: flex;
  align-items: flex-start;
  min-width: 72px;
  gap: 8px;
`;

const Ellipse5 = styled.div`
  width: 12px;
  height: 12px;
  align-self: center;
  background-color: var(--seagull);
  border-radius: 6px;
  border: 1px none;
`;

const Worked = styled.div`
  ${PoppinsRegularNormalMountainMist13p1}
  min-height: 20px;
  margin-top: -1px;
  letter-spacing: 0;
`;

const Data2 = styled.div`
  height: 20px;
  margin-left: 8px;
  margin-top: 6.87px;
  display: flex;
  align-items: flex-start;
  min-width: 95px;
  gap: 8px;
`;

const Ellipse6 = styled.div`
  width: 12px;
  height: 12px;
  align-self: center;
  background-color: var(--paris-m);
  border-radius: 6px;
  border: 1px none;
`;

const TimeFrameSelector = styled.div`
  height: 38px;
  margin-left: 21px;
  margin-top: 6.87px;
  display: flex;
  padding: 8px;
  align-items: flex-start;
  min-width: 76px;
  gap: 8px;
  border-radius: 2px;
  border: 1px solid;
  border-color: var(--mountain-mist-3);
`;

const Today = styled.div`
  ${PoppinsMediumMountainMist13px}
  min-height: 20px;
  min-width: 41px;
  letter-spacing: 0;
`;

const Mar14 = styled.div`
  ${PoppinsRegularNormalMountainMist13p1}
  min-height: 20px;
  min-width: 41px;
  letter-spacing: 0;
`;

const TimeFrameSelector1 = styled.img`
  width: 9px;
  height: 9px;
  align-self: center;
  margin-bottom: 2px;
`;

const OverlapGroup1 = styled.div`
  height: 37px;
  margin-right: 217px;
  display: flex;
  padding: 4px 13px;
  align-items: flex-start;
  min-width: 111px;
  gap: 10px;
  background-size: 100% 100%;
`;

const Price1 = styled.div`
  ${PoppinsMediumCherryPie13px}
  min-height: 20px;
  letter-spacing: 0;
`;

const LineChart = styled.div`
  height: 165px;
  margin-top: 14px;
  display: flex;
  align-items: center;
  min-width: 686px;
  gap: 1px;
`;

const YAxis = styled.div`
  ${PoppinsRegularNormalMountainMist13p}
  width: 49px;
  margin-bottom: 12.99px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120px;
  gap: 30px;
`;

const X100hrs = styled.div`
  margin-top: -1px;
  min-height: 20px;
  margin-right: 8px;
  min-width: 41px;
  letter-spacing: 0;
`;

const X50hrs = styled.div`
  min-height: 20px;
  min-width: 37px;
  letter-spacing: 0;
`;

const X10hrs = styled.div`
  min-height: 20px;
  min-width: 33px;
  letter-spacing: 0;
`;

const FlexCol2 = styled.div`
  width: 636px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 165px;
  gap: 17px;
`;

const Data = styled.div`
  width: 636px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 128px;
  gap: 11px;
`;

const OverlapGroup3 = styled.div`
  width: 636px;
  height: 117px;
  position: relative;
`;

const Line1 = styled.img`
  position: absolute;
  width: 636px;
  height: 1px;
  top: 78px;
  left: 0;
`;

const Line2 = styled.img`
  position: absolute;
  width: 636px;
  height: 1px;
  top: 28px;
  left: 0;
`;

const Forecasted = styled.img`
  position: absolute;
  width: 628px;
  height: 103px;
  top: 14px;
  left: 8px;
`;

const Worked1 = styled.img`
  position: absolute;
  width: 630px;
  height: 102px;
  top: 0;
  left: 6px;
`;

const Line0 = styled.img`
  width: 636px;
  height: 1px;
`;

const XAxis = styled.div`
  ${PoppinsRegularNormalMountainMist13p}
  height: 20px;
  margin-left: 14px;
  display: flex;
  align-items: flex-start;
  min-width: 558px;
`;

const FEB = styled.div`
  min-height: 20px;
  margin-top: -1px;
  min-width: 22px;
  letter-spacing: 0;
`;

const Place = styled.div`
  min-height: 20px;
  margin-left: 81px;
  margin-top: -1px;
  min-width: 28px;
  letter-spacing: 0;
`;

const APR = styled.div`
  min-height: 20px;
  margin-left: 80px;
  margin-top: -1px;
  min-width: 25px;
  letter-spacing: 0;
`;

const Name = styled.div`
  min-height: 20px;
  margin-left: 80px;
  margin-top: -1px;
  min-width: 28px;
  letter-spacing: 0;
`;

const JUN = styled.div`
  min-height: 20px;
  margin-left: 78px;
  margin-top: -1px;
  min-width: 25px;
  letter-spacing: 0;
`;

const JUL = styled.div`
  min-height: 20px;
  margin-left: 77px;
  margin-top: -1px;
  letter-spacing: 0;
`;

const XAxisMeter = styled.img`
  position: absolute;
  width: 1px;
  height: 116px;
  top: 152px;
  left: 264px;
`;

const DataPointer = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 132px;
  left: 256px;
  background-color: var(--seagull);
  border-radius: 8px;
  border: 5px solid;
  border-color: var(--material-themereferrorerror100);
  box-shadow: 0px 4px 6px #2b174d38;
`;

const FlexRow2 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 829px;
  gap: 22px;
`;

const Bugs = styled.div`
  height: 327px;
  display: flex;
  align-items: flex-start;
  min-width: 404px;
  border: 1px none;
`;

const OverlapGroup5 = styled.div`
  width: 367px;
  display: flex;
  flex-direction: column;
  padding: 25px 25px;
  align-items: flex-start;
  min-height: 307px;
  gap: 23px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 12px;
`;

const Title = styled.div`
  height: 36px;
  align-self: flex-end;
  margin-top: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 305px;
  gap: 69px;
  border-radius: 2px;
`;

const BugsReported = styled.div`
  ${PoppinsMediumCherryPie17px}
  min-height: 26px;
  align-self: center;
  min-width: 126px;
  letter-spacing: 0;
`;

const TimeFrameSelector2 = styled.div`
  height: 38px;
  margin-top: -1px;
  display: flex;
  padding: 8px;
  align-items: flex-start;
  min-width: 109px;
  gap: 8px;
  border-radius: 2px;
  border: 1px solid;
  border-color: var(--mountain-mist-3);
`;

const ThisMonth = styled.div`
  ${PoppinsMediumMountainMist13px2}
  min-height: 20px;
  min-width: 74px;
  letter-spacing: 0;
`;

const FlexRow3 = styled.div`
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 295px;
  gap: 29px;
`;

const OverlapGroup11 = styled.div`
  width: 192px;
  height: 192px;
  position: relative;
`;

const EllipseContainer = styled.div`
  position: absolute;
  width: 192px;
  height: 192px;
  top: 0;
  left: 0;
`;

const Ellipse9 = styled.div`
  position: absolute;
  width: 157px;
  height: 157px;
  top: 18px;
  left: 18px;
  background-color: var(--gallery);
  border-radius: 78.38px;
  border: 1px none;
`;

const Ellipse8 = styled.div`
  position: absolute;
  width: 157px;
  height: 157px;
  top: 18px;
  left: 18px;
  border-radius: 78.38px;
  border: 1px none;
  transform: rotate(-15deg);
  background: linear-gradient(
    180deg,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgba(254.68127310276031, 254.3625310063362, 255, 0) 100%
  );
`;

const InnerCircle = styled.div`
  position: absolute;
  height: 92px;
  top: 50px;
  left: 50px;
  display: flex;
  align-items: flex-start;
  min-width: 92px;
  background-color: var(--gallery-2);
  border-radius: 253px;
`;

const Ellipse81 = styled.div`
  width: 92px;
  height: 92px;
  border-radius: 45.81px;
  border: 1px none;
  background: linear-gradient(
    180deg,
    rgb(36.00000165402889, 18.000000827014446, 106.00000128149986) 0%,
    rgba(36.00000165402889, 18.000000827014446, 106.00000128149986, 0) 100%
  );
`;

const DataLegend = styled.div`
  width: 74px;
  align-self: center;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 130px;
  gap: 24px;
`;

const Data21 = styled.div`
  width: 76px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 53px;
  gap: 15px;
`;

const Group18 = styled.div`
  height: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 76px;
  gap: 8px;
`;

const Reported = styled.div`
  ${EncodesansRegularNormalMountainMist}
  min-height: 16px;
  margin-top: -1px;
  letter-spacing: 0;
`;

const X10K = styled.div`
  ${EncodesansSemiBoldGravel17px}
  min-height: 21px;
  margin-left: 2px;
  letter-spacing: 0;
`;

const Data11 = styled.div`
  width: 53px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 53px;
  gap: 15px;
`;

const Group36 = styled.div`
  height: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 53px;
  gap: 8px;
`;

const X4K = styled.div`
  ${EncodesansSemiBoldGravel17px}
  min-height: 21px;
  letter-spacing: 0;
`;

const Activity = styled.div`
  height: 327px;
  display: flex;
  align-items: flex-start;
  min-width: 402px;
  border: 1px none;
`;

const OverlapGroup4 = styled.div`
  width: 365px;
  display: flex;
  flex-direction: column;
  padding: 30px 27px;
  align-items: flex-end;
  min-height: 307px;
  gap: 21px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 12px;
`;

const FlexRow4 = styled.div`
  display: flex;
  align-items: center;
  min-width: 310px;
  gap: 56px;
`;

const DeveloperActivity = styled.div`
  ${PoppinsMediumCherryPie17px}
  min-height: 26px;
  margin-bottom: 2px;
  min-width: 155px;
  letter-spacing: 0;
`;

const TimeFrame1 = styled.div`
  height: 38px;
  display: flex;
  padding: 8px;
  align-items: flex-start;
  min-width: 99px;
  gap: 8px;
  border-radius: 2px;
  border: 1px solid;
  border-color: var(--mountain-mist-3);
`;

const ThisWeek = styled.div`
  ${PoppinsMediumMountainMist13px2}
  min-height: 20px;
  min-width: 64px;
  letter-spacing: 0;
`;

const BarChart = styled.div`
  width: 309px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 188px;
  gap: 8px;
`;

const OverlapGroup9 = styled.div`
  width: 309px;
  height: 162px;
  position: relative;
`;

const YAxis1 = styled.div`
  position: absolute;
  width: 309px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 162px;
  gap: 30px;
`;

const Group26 = styled.div`
  height: 18px;
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 309px;
  gap: 16px;
`;

const Number = styled.div`
  ${PoppinsRegularNormalMountainMist12p}
  width: 28px;
  min-height: 18px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
`;

const Line13 = styled.img`
  width: 263px;
  height: 1px;
  align-self: center;
  margin-bottom: 2px;
`;

const Bars = styled.div`
  position: absolute;
  height: 143px;
  top: 8px;
  left: 60px;
  display: flex;
  align-items: flex-end;
  min-width: 233px;
`;

const Group27 = styled.div`
  width: 15px;
  height: 95px;
  background: linear-gradient(
    180deg,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgba(125.00000014901161, 190.0000038743019, 227.00000166893005, 0.029999999329447746) 100%
  );
`;

const Group28 = styled.div`
  width: 15px;
  height: 143px;
  margin-left: 28px;
  background: linear-gradient(
    180deg,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgba(125.00000014901161, 190.0000038743019, 227.00000166893005, 0.029999999329447746) 100%
  );
`;

const Group29 = styled.div`
  width: 15px;
  height: 76px;
  margin-left: 28px;
  background: linear-gradient(
    180deg,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgba(125.00000014901161, 190.0000038743019, 227.00000166893005, 0.029999999329447746) 100%
  );
`;

const Group30 = styled.div`
  width: 15px;
  height: 113px;
  margin-left: 31px;
  background: linear-gradient(
    180deg,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgba(125.00000014901161, 190.0000038743019, 227.00000166893005, 0.029999999329447746) 100%
  );
`;

const Group31 = styled.div`
  width: 15px;
  height: 126px;
  margin-left: 30px;
  background: linear-gradient(
    180deg,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgba(125.00000014901161, 190.0000038743019, 227.00000166893005, 0.029999999329447746) 100%
  );
`;

const Group32 = styled.div`
  width: 15px;
  height: 33px;
  margin-left: 26px;
  background: linear-gradient(
    180deg,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgba(125.00000014901161, 190.0000038743019, 227.00000166893005, 0.029999999329447746) 100%
  );
`;

const XAxis1 = styled.div`
  ${PoppinsRegularNormalMountainMist12p}
  height: 18px;
  margin-right: 8px;
  display: flex;
  align-items: flex-start;
  min-width: 239px;
`;

const M = styled.div`
  min-height: 18px;
  margin-top: -1px;
  min-width: 11px;
  text-align: center;
  letter-spacing: 0;
`;

const T = styled.div`
  min-height: 18px;
  margin-left: 34px;
  margin-top: -1px;
  min-width: 7px;
  text-align: center;
  letter-spacing: 0;
`;

const W = styled.div`
  min-height: 18px;
  margin-left: 33px;
  margin-top: -1px;
  min-width: 12px;
  text-align: center;
  letter-spacing: 0;
`;

const Th = styled.div`
  min-height: 18px;
  margin-left: 33px;
  margin-top: -1px;
  min-width: 15px;
  text-align: center;
  letter-spacing: 0;
`;

const Price2 = styled.div`
  min-height: 18px;
  margin-left: 33px;
  margin-top: -1px;
  min-width: 8px;
  text-align: center;
  letter-spacing: 0;
`;

const FlexCol3 = styled.div`
  width: 334px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 714px;
`;

const Vendors = styled.div`
  height: 168px;
  margin-right: 5.06px;
  display: flex;
  align-items: flex-start;
  min-width: 326px;
  border: 1px none;
`;

const OverlapGroup31 = styled.div`
  height: 158px;
  display: flex;
  padding: 22px 30px;
  align-items: flex-start;
  min-width: 296px;
  gap: 26px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 12px;
  box-shadow: 8px 24px 31px #7dbee363;
`;

const Icon = styled.div`
  height: 62px;
  margin-top: 4px;
  display: flex;
  padding: 13.8px 13.6px;
  align-items: flex-end;
  min-width: 62px;
  background-color: #e9e5ff;
  border-radius: 31px;
`;

const NewTicket = styled.img`
  width: 34px;
  height: 34px;
`;

const Data3 = styled.div`
  width: 119px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 110px;
  gap: 11px;
  border-radius: 2px;
`;

const Data4 = styled.div`
  width: 123px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 62px;
  gap: 8px;
`;

const Number1 = styled.div`
  ${PoppinsSemiBoldSeagull28px}
  width: 53px;
  margin-top: -1px;
  min-height: 31px;
  letter-spacing: 0;
`;

const Profits = styled.div`
  height: 168px;
  margin-top: 16px;
  margin-right: 7.91px;
  display: flex;
  align-items: flex-start;
  min-width: 326px;
  border: 1px none;
`;

const OverlapGroup21 = styled.div`
  height: 158px;
  display: flex;
  padding: 22px 29px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 296px;
  gap: 26px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 12px;
  box-shadow: 8px 24px 31px #1e0f3e63;
`;

const Icon1 = styled.div`
  height: 62px;
  margin-top: 4px;
  display: flex;
  padding: 13.9px 13px;
  align-items: flex-end;
  min-width: 62px;
  background-color: #24126a33;
  border-radius: 31px;
`;

const CurrencyEur = styled.img`
  width: 35px;
  height: 34px;
`;

const Data5 = styled.div`
  width: 149px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 110px;
  gap: 9px;
  border-radius: 2px;
`;

const Data6 = styled.div`
  width: 153px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 64px;
  gap: 8px;
`;

const Price3 = styled.div`
  ${PoppinsSemiBoldCherryPie28px}
  width: 149px;
  margin-top: -1px;
  min-height: 33px;
  letter-spacing: 0;
`;

const Calendar = styled.div`
  height: 327px;
  margin-top: 34px;
  margin-left: 7.06px;
  display: flex;
  align-items: flex-start;
  min-width: 327px;
  border: 1px none;
  transform: rotate(0.58deg);
`;

const OverlapGroup10 = styled.div`
  width: 297px;
  display: flex;
  flex-direction: column;
  padding: 20.1px 28.2px;
  align-items: center;
  min-height: 307px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 12px;
`;

const UpcomingStatusMeeting = styled.div`
  ${PoppinsMediumCherryPie17px}
  min-height: 26px;
  align-self: flex-start;
  letter-spacing: 0;
`;

const OverlapGroup12 = styled.div`
  width: 143px;
  height: 150px;
  position: relative;
  margin-top: 4px;
  margin-left: 3.31px;
`;

const X12thAug2022 = styled.div`
  ${PoppinsSemiBoldCherryPie20px}
  position: absolute;
  top: 120px;
  left: 0;
  letter-spacing: 0;
`;

const X9Pragmatica3DMetalCalendar = styled.img`
  position: absolute;
  width: 131px;
  height: 130px;
  top: 0;
  left: 6px;
  transform: rotate(-0.58deg);
  object-fit: cover;
`;

const Button = styled.div`
  height: 59px;
  margin-top: 23px;
  margin-left: 1px;
  display: flex;
  padding: 17px 77px;
  align-items: flex-start;
  min-width: 236px;
  background-color: var(--dark-blue);
  border-radius: 17px;
  border: 1px none;
`;

export default Dashboard;
