import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { BsPerson } from "react-icons/bs";
import TitleAndSubTitle from "@/components/Shared/TitleAndSubTitle/TitleAndSubTitle";
import Container from "@/components/Shared/Container/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const index = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(
          "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [router.query.id]);
  return (
    <Container>
      <div className="min-h-[557px]">
        {data.map((item: any, index: number) => (
          <div key={index}>
            {Number(item.id) === Number(router.query.id) ? (
              <div className="w-[70%] mx-auto my-10 rounded-2xl border-[1px] bg-white border-gray-400">
                <img
                  src={item.coverImage}
                  alt="img"
                  className="w-full h-96 rounded-t-2xl"
                />
                <div className="w-[80%] mx-auto">
                  <p className="text-2xl my-5">{item.title}</p>
                  <p className=" my-5 flex items-center gap-1 text-blue-500 border-2 border-blue-500 rounded-full w-28 pl-1 text-lg">
                    <BsPerson className="text-xl" /> {item.roles.length || 0}{" "}
                    Roles
                  </p>
                  <div className="flex flex-col gap-5">
                    <TitleAndSubTitle
                      classNameOfTitle="text-2xl font-semibold"
                      classNameOfSubTitle="text-lg"
                      title="Expires At:"
                      subTitle={item.expirationDate?.split("T").shift()}
                    />
                    <TitleAndSubTitle
                      classNameOfTitle="text-2xl font-semibold"
                      classNameOfSubTitle="text-lg"
                      title="Production Company:"
                      subTitle={item.company}
                    />
                    {item.productionPersonnel
                      ?.split(",")
                      .map((item: any, index: number) => (
                        <TitleAndSubTitle
                          key={index}
                          classNameOfTitle="text-2xl font-semibold"
                          classNameOfSubTitle="text-lg"
                          title="Production Personnel:"
                          subTitle={item}
                        />
                      ))}

                    <TitleAndSubTitle
                      classNameOfTitle="text-2xl font-semibold"
                      classNameOfSubTitle="text-lg"
                      title="Description:"
                      subTitle={item.productionDescription}
                    />
                    <TitleAndSubTitle
                      classNameOfTitle="text-2xl font-semibold"
                      title="Roles:"
                    />
                  </div>

                  <div className="mb-10 mt-5 ">
                    {item.roles.map((item: any, index: number) => (
                      <div key={index}>
                        <Accordion className="!rounded-xl border-black border-[1px] shadow-none">
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography className="flex items-center gap-1">
                              <p className="text-xl font-semibold">
                                {item.name} ({item.type}):{" "}
                              </p>
                              {item.gender}, {item.minAge} - {item.maxAge}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography className="flex flex-col gap-3">
                              <TitleAndSubTitle
                                className="flex items-center gap-1"
                                title="Type Of Talent:"
                                subTitle={item.talentType}
                                classNameOfTitle="text-xl font-semibold"
                                classNameOfSubTitle="text-lg"
                              />
                              <TitleAndSubTitle
                                className="flex items-center gap-1"
                                title="Role Type:"
                                subTitle={item.type}
                                classNameOfTitle="text-xl font-semibold"
                                classNameOfSubTitle="text-lg"
                              />

                              <TitleAndSubTitle
                                title="Skills:"
                                classNameOfTitle="text-xl font-semibold"
                              />
                              <div className="flex gap-5">
                                {item.skills?.map(
                                  (item: any, index: number) => (
                                    <div key={index}>
                                      <TitleAndSubTitle
                                        className="flex items-center gap-1"
                                        subTitle={item.skill.title}
                                        classNameOfSubTitle="text-lg "
                                      />
                                    </div>
                                  )
                                )}
                              </div>

                              <TitleAndSubTitle
                                className="flex items-center gap-1"
                                title="Role Description:"
                                subTitle={item.description}
                                classNameOfTitle="text-xl font-semibold"
                                classNameOfSubTitle="text-lg"
                              />
                              {item.auditionDates?.map(
                                (item: any, index: number) => (
                                  <TitleAndSubTitle
                                    key={index}
                                    className="flex items-center gap-1"
                                    title="Audition/Meeting Dates:"
                                    subTitle={item.split("T").shift()}
                                    classNameOfTitle="text-xl font-semibold"
                                    classNameOfSubTitle="text-lg"
                                  />
                                )
                              )}
                              <TitleAndSubTitle
                                title="fliming Availability:"
                                classNameOfTitle="text-xl font-semibold"
                              />
                              <div className="flex gap-5">
                                {item.shootingAvailability?.map(
                                  (item: any, index: number) => (
                                    <div key={index}>
                                      <TitleAndSubTitle
                                        className="flex items-center gap-1"
                                        subTitle={item.split("T").shift()}
                                        classNameOfSubTitle="text-lg bg-blue-300 rounded-full"
                                      />
                                    </div>
                                  )
                                )}
                              </div>

                              <TitleAndSubTitle
                                className="flex items-center gap-1"
                                title="Accepting Taped Audition:"
                                subTitle={
                                  item.isAcceptingTapedAudition ? "Yes" : "No"
                                }
                                classNameOfTitle="text-xl font-semibold"
                                classNameOfSubTitle="text-lg"
                              />

                              <TitleAndSubTitle
                                className="flex items-center gap-1"
                                title="Citizenship:"
                                subTitle={item.citizenship}
                                classNameOfTitle="text-xl font-semibold"
                                classNameOfSubTitle="text-lg"
                              />
                              <TitleAndSubTitle
                                className="flex items-center gap-1"
                                title="Compensation & Contract Details:"
                                subTitle={item.isPaid ? "Paid" : "Not Paid"}
                                classNameOfTitle="text-xl font-semibold"
                                classNameOfSubTitle="text-lg"
                              />
                              <TitleAndSubTitle
                                className="flex items-center gap-1"
                                title="This is a firm requirement:"
                                subTitle={item.considerCitizen ? "Yes" : "No"}
                                classNameOfTitle="text-xl font-semibold"
                                classNameOfSubTitle="text-lg"
                              />
                              <TitleAndSubTitle
                                className="flex items-center gap-1"
                                title="This role will only consider gender:"
                                subTitle={item.considerGender ? "Yes" : "No"}
                                classNameOfTitle="text-xl font-semibold"
                                classNameOfSubTitle="text-lg"
                              />
                              <TitleAndSubTitle
                                className="flex items-center gap-1"
                                title="This role will only consider age:"
                                subTitle={item.considerAge ? "Yes" : "No"}
                                classNameOfTitle="text-xl font-semibold"
                                classNameOfSubTitle="text-lg"
                              />
                              <TitleAndSubTitle
                                className="flex items-center gap-1"
                                title="This role will only consider skills:"
                                subTitle={item.considerSkills ? "Yes" : "No"}
                                classNameOfTitle="text-xl font-semibold"
                                classNameOfSubTitle="text-lg"
                              />
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default index;
