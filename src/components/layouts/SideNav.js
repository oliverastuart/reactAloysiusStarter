import React from "react";
import {
  AMBER_YELLOW,
  BlUE_VIOLET,
  WHITE,
} from "../../resources/constants/colors/theme";
import Logo from "../../resources/assets/logo.png";
import { Button, Typography } from "@mui/material";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import {
  ABOUT_ME,
  DASHBOARD,
  HOME,
} from "../../resources/constants/strings/string";
import { useNavigate } from "react-router-dom";
import {
  PATH_ABOUT_ME,
  PATH_DASHBOARD,
  PATH_HOME,
  PATH_LOGIN,
} from "../../resources/constants/url/Url";
export default function SideNav({ children, CurrentComponent }) {
  const navigate = useNavigate();

  const data = [
    {
      name: DASHBOARD,
      icon: DashboardCustomizeRoundedIcon,
      path: PATH_DASHBOARD,
    },
    { name: HOME, icon: HomeRoundedIcon, path: PATH_HOME },
    { name: ABOUT_ME, icon: PersonRoundedIcon, path: PATH_ABOUT_ME },
  ];

  return (
    // below div is main div container

    <div
      style={{
        display: "flex",
        // flexDirection: "column",

        // position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: BlUE_VIOLET,
          minHeight: "100vh",
          minWidth: "18%",
          // maxWidth: "20%",
          alignItems: "center",
          // position: "relative",
          left: "",
        }}
      >
        <img
          src={Logo}
          alt=""
          style={{ marginTop: "10%", marginBottom: "10%" }}
        ></img>
        {data.map((data) => (
          <div
            style={{
              display: "flex",
              //  backgroundColor: "red",
              padding: 6,
              marginTop: 10,
              width: "68%",
              userSelect: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate(data.path);
            }}
          >
            {
              <data.icon
                style={{
                  color: WHITE,
                  opacity: data.name === CurrentComponent ? 1 : 0.4,
                  marginRight: 4,
                }}
              />
            }
            <Typography
              color={WHITE}
              style={{ opacity: data.name === CurrentComponent ? 1 : 0.4 }}
            >
              {data.name}{" "}
            </Typography>
          </div>
        ))}

        <Button
          variant="contained"
          style={{
            bottom: 0,
            position: "fixed",
            marginBottom: "10px",
            color: BlUE_VIOLET,
            backgroundColor: AMBER_YELLOW,
            width: "15%",
          }}
          startIcon={<ExitToAppRoundedIcon />}
          onClick={() => {
            navigate(PATH_LOGIN);
          }}
        >
          LOGOUT
        </Button>
      </div>
      <div
        style={{
          // backgroundColor: "yellow",
          margin: 11,
          //   marginLeft: "18%",
          width: "82%",
          //   left: 0,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
    // main div container ends
  );
}
