import React from "react";
import Navbar3 from "../Navbar3";
import HeroInfo3 from "../HeroInfo3";
import LeftScroll from "../LeftScroll";
import Row1 from "../Row1";
import Button3 from "../Button3";
import Footer5 from "../Footer5";
import styled from "styled-components";
import {
  RalewayBoldCapeCod36px,
  RalewayNormalCapeCod16px,
  InterRegularNormalCapeCod32px,
  RalewayNormalCapeCod100px,
  InterRegularNormalParisM12px,
  RalewayNormalCapeCod64px,
  RalewayNormalCapeCod22px,
  RalewayBoldWhite24px,
  RalewayBoldCapeCod22px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./HireMe.css";

function HireMe(props) {
  const {
    componentLottieHttpsAssets4Lottiefi,
    spanText1,
    registration,
    codeFork,
    spanText2,
    payDate,
    spanText3,
    newTicket,
    x9_Pragmatica_3D_Metal_Calendar,
    rectangle,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    group1,
    group2,
    group3,
    group4,
    group5,
    group6,
    group7,
    group8,
    group9,
    group10,
    spanText12,
    spanText13,
    vector2,
    vector3,
    spanText14,
    vector4,
    spanText15,
    vector5,
    spanText16,
    vector6,
    spanText17,
    vector7,
    spanText18,
    vector8,
    spanText19,
    vector9,
    spanText20,
    vector10,
    spanText21,
    spanText22,
    spanText23,
    spanText24,
    spanText25,
    spanText26,
    spanText27,
    spanText28,
    spanText29,
    spanText30,
    spanText31,
    spanText32,
    navbarProps,
    heroInfoProps,
    leftScroll1Props,
    row1Props,
    leftScroll2Props,
    button1Props,
    button2Props,
    button3Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hire-me screen">
        <Body>
          <Navbar3 {...navbarProps} />
          <Hero>
            <OverlapGroup6>
              <Componentlottiehttpsassets4lottiefi
                src={componentLottieHttpsAssets4Lottiefi}
                alt="component:lottie:https://assets4.lottiefiles.com/packages/lf20_efx3aac9.json]"
              />
              <HeroInfo3 {...heroInfoProps} />
            </OverlapGroup6>
          </Hero>
          <Jobs>
            <SignInCreateAProfile>
              <span className="raleway-normal-cape-cod-100px">{spanText1}</span>
            </SignInCreateAProfile>
            <OverlapGroup5>
              <Rectangle18></Rectangle18>
              <IconProfile>
                <IconUser src={registration} alt="icon-user" />
              </IconProfile>
              <IconCode>
                <CodeFork src={codeFork} alt="Code Fork" />
              </IconCode>
            </OverlapGroup5>
          </Jobs>
          <Payment>
            <MilestonesVsCompletion>
              <span className="raleway-normal-cape-cod-100px">{spanText2}</span>
            </MilestonesVsCompletion>
            <OverlapGroup4>
              <Rectangle181></Rectangle181>
              <Ellipse13></Ellipse13>
              <PayDate src={payDate} alt="Pay Date" />
            </OverlapGroup4>
          </Payment>
          <Dashboard>
            <DashboardToMonitorProgess>
              <span className="raleway-normal-cape-cod-100px">{spanText3}</span>
            </DashboardToMonitorProgess>
            <FlexRow>
              <Features>
                <Icon>
                  <CodeFork src={newTicket} alt="New Ticket" />
                </Icon>
                <Icon1>
                  <OverlapGroup1>
                    <EllipseContainer>
                      <Ellipse9></Ellipse9>
                      <Ellipse8></Ellipse8>
                    </EllipseContainer>
                    <InnerCircle>
                      <Ellipse81></Ellipse81>
                    </InnerCircle>
                  </OverlapGroup1>
                </Icon1>
                <Icon2>
                  <X9Pragmatica3DMetalCalendar
                    src={x9_Pragmatica_3D_Metal_Calendar}
                    alt="9_Pragmatica_3D_Metal_Calendar"
                  />
                </Icon2>
              </Features>
              <Laptop>
                <Rectangle src={rectangle} alt="Rectangle" />
              </Laptop>
            </FlexRow>
          </Dashboard>
          <OverlapGroup7>
            <Projects>
              <LeftScroll src={leftScroll1Props.src} />
              <PmProjects>
                <OverlapGroup>
                  <IHaveExperienceSt>
                    <span>
                      <span className="raleway-normal-cape-cod-22px">{spanText4}</span>
                    </span>
                  </IHaveExperienceSt>
                  <ProjectManagement>
                    <span>
                      <span className="raleway-bold-cape-cod-36px">{spanText5}</span>
                    </span>
                  </ProjectManagement>
                </OverlapGroup>
                <TableExternalLinks>
                  <PreviousWork>
                    <Previous>
                      <span>
                        <span className="raleway-bold-cape-cod-22px">{spanText6}</span>
                      </span>
                    </Previous>
                    <Row1 />
                    <Httpsgithubcome>
                      <span>
                        <span className="raleway-normal-cape-cod-22px">{spanText7}</span>
                      </span>
                    </Httpsgithubcome>
                    <Httpsgithubcome1>
                      <span>
                        <span className="raleway-normal-cape-cod-22px">{spanText8}</span>
                      </span>
                    </Httpsgithubcome1>
                    <Httpsgithubcome1>
                      <span>
                        <span className="raleway-normal-cape-cod-22px">{spanText9}</span>
                      </span>
                    </Httpsgithubcome1>
                  </PreviousWork>
                  <UpcomingWork>
                    <Upcoming>
                      <span>
                        <span className="raleway-bold-cape-cod-22px">{spanText10}</span>
                      </span>
                    </Upcoming>
                    <Row1 className={row1Props.className} />
                  </UpcomingWork>
                </TableExternalLinks>
              </PmProjects>
              <LeftScroll src={leftScroll2Props.src} className={leftScroll2Props.className} />
            </Projects>
            <Skills>
              <BreakdownOfSkills>
                <span className="raleway-normal-cape-cod-64px">{spanText11}</span>
              </BreakdownOfSkills>
              <OverlapGroup3>
                <GithubRepos>
                  <GroupContainer>
                    <Group src={group1} alt="Group" />
                    <Group1 src={group2} alt="Group" />
                    <Group2 src={group3} alt="Group" />
                    <Group3 src={group4} alt="Group" />
                    <Group4 src={group5} alt="Group" />
                    <Group5 src={group6} alt="Group" />
                    <Group6 src={group7} alt="Group" />
                    <Group7 src={group8} alt="Group" />
                    <Group8 src={group9} alt="Group" />
                    <Group9 src={group10} alt="Group" />
                    <Group10>
                      <GroupContainer1>
                        <Group11>
                          <Number>
                            <span className="inter-regular-normal-paris-m-12px">{spanText12}</span>
                          </Number>
                          <Vector src="/img/vector-4@2x.png" alt="Vector" />
                        </Group11>
                        <Group12>
                          <Number>
                            <span className="inter-regular-normal-paris-m-12px">{spanText13}</span>
                          </Number>
                          <Vector1 src={vector2} alt="Vector" />
                        </Group12>
                        <Group13>
                          <Vector2 src={vector3} alt="Vector" />
                          <Number1>
                            <span className="inter-regular-normal-paris-m-12px">{spanText14}</span>
                          </Number1>
                        </Group13>
                      </GroupContainer1>
                      <FlexRow1>
                        <GroupContainer2>
                          <Group14>
                            <Vector3 src={vector4} alt="Vector" />
                            <Number1>
                              <span className="inter-regular-normal-paris-m-12px">{spanText15}</span>
                            </Number1>
                          </Group14>
                          <Group15>
                            <Vector4 src={vector5} alt="Vector" />
                            <Number2>
                              <span className="inter-regular-normal-paris-m-12px">{spanText16}</span>
                            </Number2>
                          </Group15>
                        </GroupContainer2>
                        <GroupContainer3>
                          <Group16>
                            <Vector5 src={vector6} alt="Vector" />
                            <Number3>
                              <span className="inter-regular-normal-paris-m-12px">{spanText17}</span>
                            </Number3>
                          </Group16>
                          <Group17>
                            <Vector6 src={vector7} alt="Vector" />
                            <Number4>
                              <span className="inter-regular-normal-paris-m-12px">{spanText18}</span>
                            </Number4>
                          </Group17>
                          <Group18>
                            <Vector7 src={vector8} alt="Vector" />
                            <Number5>
                              <span className="inter-regular-normal-paris-m-12px">{spanText19}</span>
                            </Number5>
                          </Group18>
                          <Group19>
                            <Vector8 src={vector9} alt="Vector" />
                            <Number6>
                              <span className="inter-regular-normal-paris-m-12px">{spanText20}</span>
                            </Number6>
                          </Group19>
                          <Group20>
                            <Vector9 src={vector10} alt="Vector" />
                            <Number7>
                              <span className="inter-regular-normal-paris-m-12px">{spanText21}</span>
                            </Number7>
                          </Group20>
                        </GroupContainer3>
                      </FlexRow1>
                    </Group10>
                  </GroupContainer>
                </GithubRepos>
                <Accomplishments>
                  <Rectangle6></Rectangle6>
                  <DataLinks>
                    <Degrees>
                      <span className="inter-regular-normal-cape-cod-32px">{spanText22}</span>
                    </Degrees>
                    <Courses>
                      <span className="inter-regular-normal-cape-cod-32px">{spanText23}</span>
                    </Courses>
                    <Certifications>
                      <span className="inter-regular-normal-cape-cod-32px">{spanText24}</span>
                    </Certifications>
                    <Certifications>
                      <span className="inter-regular-normal-cape-cod-32px">{spanText25}</span>
                    </Certifications>
                  </DataLinks>
                </Accomplishments>
              </OverlapGroup3>
            </Skills>
          </OverlapGroup7>
          <ECommerce>
            <BuildYourDapp>
              <span className="raleway-normal-cape-cod-64px">{spanText26}</span>
            </BuildYourDapp>
            <ThereAreAFewDiff>
              <span className="raleway-normal-cape-cod-16px">{spanText27}</span>
              <Span16>{spanText28}</Span16>
              <span className="raleway-normal-cape-cod-16px">{spanText29}</span>
            </ThereAreAFewDiff>
            <OverlapGroupContainer>
              <OverlapGroup2>
                <ChooseYourFramework>
                  <span className="raleway-bold-white-24px">{spanText30}</span>
                </ChooseYourFramework>
                <Button3 className={button1Props.className}>{button1Props.children}</Button3>
              </OverlapGroup2>
              <OverlapGroup2>
                <ChooseYourFramework>
                  <span className="raleway-bold-white-24px">{spanText31}</span>
                </ChooseYourFramework>
                <Button3 className={button2Props.className}>{button2Props.children}</Button3>
              </OverlapGroup2>
              <OverlapGroup2>
                <ChooseYourFramework>
                  <span className="raleway-bold-white-24px">{spanText32}</span>
                </ChooseYourFramework>
                <Button3 className={button3Props.className}>{button3Props.children}</Button3>
              </OverlapGroup2>
            </OverlapGroupContainer>
          </ECommerce>
          <Footer5 button1Props={footerProps.button1Props} button2Props={footerProps.button2Props} />
        </Body>
      </div>
    </div>
  );
}

const Body = styled.div`
  width: 1512px;
  height: 7457px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const Hero = styled.div`
  width: 1512px;
  height: 982px;
  display: flex;
  padding: 25.5px 79px;
  align-items: flex-start;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const OverlapGroup6 = styled.div`
  width: 1339px;
  height: 762px;
  position: relative;
`;

const Componentlottiehttpsassets4lottiefi = styled.img`
  position: absolute;
  width: 808px;
  height: 762px;
  top: 0;
  left: 531px;
`;

const Jobs = styled.div`
  width: 1512px;
  height: 982px;
  display: flex;
  flex-direction: column;
  padding: 18px 200px;
  align-items: flex-start;
  gap: 58px;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const SignInCreateAProfile = styled.div`
  ${RalewayNormalCapeCod100px}
  min-height: 117px;
  letter-spacing: 0;
`;

const OverlapGroup5 = styled.div`
  width: 992px;
  height: 617px;
  position: relative;
  align-self: center;
`;

const Rectangle18 = styled.div`
  position: absolute;
  width: 822px;
  height: 617px;
  top: 0;
  left: 85px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 16px;
  border: 1px none;
  box-shadow: 0px 4px 50px #00000040;
`;

const IconProfile = styled.div`
  position: absolute;
  height: 170px;
  top: 51px;
  left: 0;
  display: flex;
  padding: 0 37px;
  align-items: center;
  min-width: 170px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 85px;
  box-shadow: 0px 4px 50px #00000040;
`;

const IconUser = styled.img`
  width: 96px;
  height: 96px;
`;

const IconCode = styled.div`
  position: absolute;
  height: 170px;
  top: 401px;
  left: 822px;
  display: flex;
  padding: 0 15px;
  justify-content: flex-end;
  align-items: center;
  min-width: 170px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 85px;
  box-shadow: 0px 4px 50px #00000040;
`;

const CodeFork = styled.img`
  width: 120px;
  height: 120px;
`;

const Payment = styled.div`
  width: 1512px;
  height: 982px;
  display: flex;
  flex-direction: column;
  padding: 22px 0;
  align-items: center;
  gap: 73px;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const MilestonesVsCompletion = styled.div`
  ${RalewayNormalCapeCod100px}
  min-height: 117px;
  min-width: 1190px;
  letter-spacing: 0;
`;

const OverlapGroup4 = styled.div`
  width: 900px;
  height: 676px;
  position: relative;
  margin-left: 78px;
`;

const Rectangle181 = styled.div`
  position: absolute;
  width: 822px;
  height: 617px;
  top: 59px;
  left: 0;
  background-color: var(--material-themereferrorerror100);
  border-radius: 16px;
  border: 1px none;
  box-shadow: 0px 4px 50px #00000040;
`;

const Ellipse13 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 0;
  left: 700px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 100px;
  border: 1px none;
  box-shadow: 0px 4px 50px #00000040;
`;

const PayDate = styled.img`
  position: absolute;
  width: 120px;
  height: 120px;
  top: 40px;
  left: 740px;
`;

const Dashboard = styled.div`
  width: 1512px;
  height: 982px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
  background-color: var(--material-themereferrorerror100);
  overflow: hidden;
  border: 1px none;
`;

const DashboardToMonitorProgess = styled.div`
  ${RalewayNormalCapeCod100px}
  min-height: 117px;
  align-self: center;
  margin-top: 48px;
  min-width: 1396px;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  min-width: 1454px;
  gap: 314px;
`;

const Features = styled.div`
  width: 201px;
  margin-top: 23px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 692px;
  gap: 46px;
`;

const Icon = styled.div`
  height: 200px;
  display: flex;
  padding: 0 40px;
  align-items: center;
  min-width: 200px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 100px;
  box-shadow: 0px 4px 50px #00000040;
`;

const Icon1 = styled.div`
  margin-left: 1px;
  display: flex;
  align-items: flex-end;
  min-width: 200px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 100px;
  box-shadow: 0px 4px 50px #00000040;
`;

const OverlapGroup1 = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  margin-bottom: 0;
`;

const EllipseContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 0;
  left: 0;
`;

const Ellipse9 = styled.div`
  position: absolute;
  width: 163px;
  height: 163px;
  top: 18px;
  left: 18px;
  background-color: var(--gallery);
  border-radius: 81.65px;
  border: 1px none;
`;

const Ellipse8 = styled.div`
  position: absolute;
  width: 163px;
  height: 163px;
  top: 18px;
  left: 18px;
  border-radius: 81.65px;
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
  height: 95px;
  top: 52px;
  left: 52px;
  display: flex;
  align-items: flex-start;
  min-width: 95px;
  background-color: var(--gallery-2);
  border-radius: 253px;
`;

const Ellipse81 = styled.div`
  width: 95px;
  height: 95px;
  border-radius: 47.5px;
  border: 1px none;
  background: linear-gradient(
    180deg,
    rgb(36.00000165402889, 18.000000827014446, 106.00000128149986) 0%,
    rgba(36.00000165402889, 18.000000827014446, 106.00000128149986, 0) 100%
  );
`;

const Icon2 = styled.div`
  height: 200px;
  margin-left: 1px;
  display: flex;
  padding: 20px 19px;
  align-items: flex-start;
  min-width: 200px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 100px;
  box-shadow: 0px 4px 50px #00000040;
`;

const X9Pragmatica3DMetalCalendar = styled.img`
  width: 162px;
  height: 160px;
  object-fit: cover;
`;

const Laptop = styled.div`
  height: 825px;
  display: flex;
  padding: 162px 69.8px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 939px;
  border-radius: 469.5px/412.5px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgba(125.00000014901161, 189.9999886751175, 227.00000166893005, 0.05000000074505806) 100%
  );
`;

const Rectangle = styled.img`
  width: 798px;
  height: 500px;
  object-fit: cover;
`;

const OverlapGroup7 = styled.div`
  width: 1512px;
  height: 1865px;
  position: relative;
`;

const Projects = styled.div`
  position: absolute;
  width: 1512px;
  height: 982px;
  top: 883px;
  left: 0;
  display: flex;
  padding: 50px 52px;
  align-items: center;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const PmProjects = styled.div`
  width: 1095px;
  align-self: flex-end;
  margin-left: 96px;
  display: flex;
  flex-direction: column;
  padding: 67px 35px;
  align-items: flex-end;
  min-height: 856px;
  gap: 55px;
  background-color: var(--seagull-2);
  border-radius: 16px;
`;

const OverlapGroup = styled.div`
  width: 804px;
  height: 140px;
  position: relative;
  align-self: center;
`;

const IHaveExperienceSt = styled.div`
  ${ValignTextMiddle}
  ${RalewayNormalCapeCod22px}
            position: absolute;
  width: 786px;
  height: 83px;
  top: 57px;
  left: 9px;
  text-align: center;
  letter-spacing: 0;
`;

const ProjectManagement = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldCapeCod36px}
            position: absolute;
  width: 804px;
  height: 57px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const TableExternalLinks = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 347px;
  gap: 39px;
`;

const PreviousWork = styled.div`
  width: 1026px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 228px;
`;

const Previous = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldCapeCod22px}
            width: 131px;
  height: 26px;
  margin-top: -1px;
  align-self: center;
  margin-right: 3px;
  text-align: center;
  letter-spacing: 0;
`;

const Httpsgithubcome = styled.div`
  ${ValignTextMiddle}
  ${RalewayNormalCapeCod22px}
            width: 470px;
  height: 31px;
  margin-top: 15px;
  letter-spacing: 0;
`;

const Httpsgithubcome1 = styled.div`
  ${ValignTextMiddle}
  ${RalewayNormalCapeCod22px}
            width: 470px;
  height: 31px;
  margin-top: 16px;
  letter-spacing: 0;
`;

const UpcomingWork = styled.div`
  width: 1026px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80px;
  gap: 24px;
`;

const Upcoming = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldCapeCod22px}
            width: 131px;
  height: 26px;
  margin-top: -1px;
  margin-right: 3px;
  text-align: center;
  letter-spacing: 0;
`;

const Skills = styled.div`
  position: absolute;
  width: 1512px;
  height: 982px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 81px 0;
  align-items: center;
  gap: 56px;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const BreakdownOfSkills = styled.div`
  ${RalewayNormalCapeCod64px}
  min-height: 75px;
  min-width: 578px;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  width: 1507px;
  height: 639px;
  position: relative;
  margin-left: 5px;
`;

const GithubRepos = styled.div`
  position: absolute;
  width: 1507px;
  height: 541px;
  top: 41px;
  left: 0;
  display: flex;
  padding: 0 255px;
  align-items: flex-start;
  border: 1px none;
`;

const GroupContainer = styled.div`
  width: 600px;
  height: 533px;
  position: relative;
  margin-left: 397px;
`;

const Group = styled.img`
  position: absolute;
  width: 203px;
  height: 130px;
  top: 149px;
  left: 304px;
`;

const Group1 = styled.img`
  position: absolute;
  width: 156px;
  height: 191px;
  top: 87px;
  left: 304px;
`;

const Group2 = styled.img`
  position: absolute;
  width: 205px;
  height: 203px;
  top: 76px;
  left: 165px;
`;

const Group3 = styled.img`
  position: absolute;
  width: 203px;
  height: 170px;
  top: 130px;
  left: 101px;
`;

const Group4 = styled.img`
  position: absolute;
  width: 201px;
  height: 78px;
  top: 278px;
  left: 102px;
`;

const Group5 = styled.img`
  position: absolute;
  width: 187px;
  height: 145px;
  top: 278px;
  left: 117px;
`;

const Group6 = styled.img`
  position: absolute;
  width: 207px;
  height: 203px;
  top: 278px;
  left: 162px;
`;

const Group7 = styled.img`
  position: absolute;
  width: 158px;
  height: 192px;
  top: 278px;
  left: 304px;
`;

const Group8 = styled.img`
  position: absolute;
  width: 203px;
  height: 127px;
  top: 278px;
  left: 304px;
`;

const Group9 = styled.img`
  position: absolute;
  width: 203px;
  height: 1px;
  top: 278px;
  left: 304px;
`;

const Group10 = styled.div`
  position: absolute;
  height: 533px;
  top: 0;
  left: 0;
  display: flex;
  padding: 0px 0;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 600px;
  gap: 52px;
`;

const GroupContainer1 = styled.div`
  width: 138px;
  align-self: center;
  margin-top: 55.06px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 269px;
`;

const Group11 = styled.div`
  height: 48px;
  align-self: center;
  margin-right: 14.62px;
  display: flex;
  align-items: flex-start;
  min-width: 108px;
`;

const Number = styled.div`
  ${InterRegularNormalParisM12px}
  width: 58px;
  min-height: 38px;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
`;

const Vector = styled.img`
  width: 47px;
  height: 18px;
  align-self: flex-end;
  margin-bottom: 0;
`;

const Group12 = styled.div`
  height: 38px;
  margin-top: 103px;
  display: flex;
  align-items: flex-start;
  min-width: 109px;
`;

const Vector1 = styled.img`
  width: 49px;
  height: 13px;
  align-self: center;
  margin-top: 10.16px;
`;

const Group13 = styled.div`
  width: 102px;
  height: 38px;
  position: relative;
  align-self: flex-end;
  margin-top: 41px;
`;

const Vector2 = styled.img`
  position: absolute;
  width: 42px;
  height: 29px;
  top: 2px;
  left: 58px;
`;

const Number1 = styled.div`
  ${InterRegularNormalParisM12px}
  position: absolute;
  width: 58px;
  top: -1px;
  left: 0;
  text-align: right;
  letter-spacing: 0;
`;

const FlexRow1 = styled.div`
  height: 533px;
  display: flex;
  align-items: center;
  min-width: 412px;
  gap: 155px;
`;

const GroupContainer2 = styled.div`
  width: 74px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 533px;
  gap: 396px;
`;

const Group14 = styled.div`
  width: 71px;
  height: 80px;
  position: relative;
  margin-left: 3.14px;
`;

const Vector3 = styled.img`
  position: absolute;
  width: 10px;
  height: 50px;
  top: 30px;
  left: 58px;
`;

const Group15 = styled.div`
  width: 71px;
  height: 57px;
  position: relative;
`;

const Vector4 = styled.img`
  position: absolute;
  width: 11px;
  height: 49px;
  top: 0;
  left: 58px;
`;

const Number2 = styled.div`
  ${InterRegularNormalParisM12px}
  position: absolute;
  width: 58px;
  top: 18px;
  left: 0;
  text-align: right;
  letter-spacing: 0;
`;

const GroupContainer3 = styled.div`
  width: 183px;
  margin-top: 0.04px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 454px;
`;

const Group16 = styled.div`
  height: 72px;
  align-self: flex-start;
  display: flex;
  align-items: flex-start;
  min-width: 89px;
`;

const Vector5 = styled.img`
  width: 29px;
  height: 42px;
  align-self: flex-end;
  margin-bottom: 0;
`;

const Number3 = styled.div`
  ${InterRegularNormalParisM12px}
  width: 58px;
  min-height: 38px;
  margin-top: -1px;
  letter-spacing: 0;
`;

const Group17 = styled.div`
  width: 108px;
  height: 48px;
  position: relative;
  margin-top: 50px;
`;

const Vector6 = styled.img`
  position: absolute;
  width: 48px;
  height: 17px;
  top: 30px;
  left: 0;
`;

const Number4 = styled.div`
  ${InterRegularNormalParisM12px}
  position: absolute;
  width: 58px;
  top: -1px;
  left: 48px;
  letter-spacing: 0;
`;

const Group18 = styled.div`
  width: 73px;
  height: 38px;
  position: relative;
  margin-top: 39px;
  margin-right: 22.89px;
`;

const Vector7 = styled.img`
  position: absolute;
  width: 51px;
  height: 1px;
  top: 30px;
  left: 0;
`;

const Number5 = styled.div`
  ${InterRegularNormalParisM12px}
  position: absolute;
  width: 20px;
  top: -1px;
  left: 51px;
  letter-spacing: 0;
`;

const Group19 = styled.div`
  width: 98px;
  height: 38px;
  position: relative;
  margin-top: 46px;
  margin-right: 9.75px;
`;

const Vector8 = styled.img`
  position: absolute;
  width: 48px;
  height: 17px;
  top: 13px;
  left: 0;
`;

const Number6 = styled.div`
  ${InterRegularNormalParisM12px}
  position: absolute;
  width: 48px;
  top: -1px;
  left: 48px;
  letter-spacing: 0;
`;

const Group20 = styled.div`
  height: 49px;
  align-self: flex-start;
  margin-top: 73px;
  margin-left: 0.73px;
  display: flex;
  padding: 0 0px;
  align-items: flex-start;
  min-width: 89px;
`;

const Vector9 = styled.img`
  width: 29px;
  height: 42px;
  margin-top: 0;
`;

const Number7 = styled.div`
  ${InterRegularNormalParisM12px}
  width: 58px;
  min-height: 38px;
  align-self: flex-end;
  margin-bottom: 1px;
  letter-spacing: 0;
`;

const Accomplishments = styled.div`
  position: absolute;
  height: 639px;
  top: 0;
  left: 66px;
  display: flex;
  align-items: flex-end;
  min-width: 396px;
  gap: 30px;
  border-radius: 16px;
`;

const Rectangle6 = styled.div`
  width: 91px;
  height: 639px;
  border-radius: 16px;
  border: 1px none;
  background: linear-gradient(
    180deg,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgb(36.00000165402889, 18.000000827014446, 106.00000128149986) 100%
  );
`;

const DataLinks = styled.div`
  ${InterRegularNormalCapeCod32px}
  width: 283px;
  margin-bottom: 7.25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 606px;
  gap: 67px;
`;

const Degrees = styled.div`
  width: 172px;
  margin-top: -1px;
  min-height: 101px;
  letter-spacing: 0;
`;

const Courses = styled.div`
  width: 169px;
  min-height: 101px;
  letter-spacing: 0;
`;

const Certifications = styled.div`
  width: 275px;
  min-height: 101px;
  letter-spacing: 0;
`;

const ECommerce = styled.div`
  width: 1507px;
  height: 982px;
  display: flex;
  flex-direction: column;
  padding: 38px 0;
  align-items: center;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const BuildYourDapp = styled.div`
  ${RalewayNormalCapeCod64px}
  min-height: 75px;
  margin-top: 57px;
  min-width: 475px;
  text-align: center;
  letter-spacing: 0;
`;

const ThereAreAFewDiff = styled.p`
  ${RalewayNormalCapeCod16px}
  min-height: 19px;
  margin-top: 18px;
  margin-right: 1px;
  min-width: 1112px;
  text-align: center;
  letter-spacing: 0;
`;

const Span16 = styled.span`
  font-family: var(--font-family-raleway);
  font-weight: 400;
  color: var(--seagull);
  font-size: var(--font-size-xs);
`;

const OverlapGroupContainer = styled.div`
  height: 618px;
  margin-top: 119px;
  display: flex;
  align-items: flex-start;
  min-width: 1317px;
  gap: 93px;
`;

const OverlapGroup2 = styled.div`
  width: 377px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 31px 51px;
  align-items: flex-start;
  min-height: 618px;
  gap: 468px;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgb(36.00000165402889, 18.000000827014446, 106.00000128149986) 100%
  );
`;

const ChooseYourFramework = styled.div`
  ${RalewayBoldWhite24px}
  min-height: 28px;
  min-width: 274px;
  text-align: center;
  letter-spacing: 0;
`;

export default HireMe;
