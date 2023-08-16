import React, { useState } from "react";
import Logo from "../../resources/assets/logo.png";
import Image1 from "../../resources/assets/loginImage1.png";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  AMBER_YELLOW,
  BlUE_VIOLET,
} from "../../resources/constants/colors/theme";
import { LOGIN } from "../../resources/constants/strings/string";
import { PATH_DASHBOARD } from "../../resources/constants/url/Url";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const validateUser = () => {
    if (email === "stuart@gmail.com" && password === "Stuart123") {
      sessionStorage.setItem("user", "hola");
      navigate(PATH_DASHBOARD);
    } else {
      alert("Your password or email does not match");
    }
  };
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          minWidth: "60%",
          height: "100vh",
          backgroundColor: BlUE_VIOLET,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={Image1} alt=""></img>
      </div>
      <div
        style={{
          display: "flex",
          width: "40%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            // height: "100px",

            margin: 50,
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              fontFamily: "monospace",
              fontSize: "40px",
              fontWeight: 600,
              marginBottom: 70,
            }}
            color={BlUE_VIOLET}
          >
            {LOGIN}
          </Typography>
          <img
            src={Logo}
            alt=""
            style={{ maxWidt: "60%", maxHeight: "60%", marginBottom: "10px" }}
          ></img>
          <TextField
            id="outlined-basic"
            label="Email-Id"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            variant="outlined"
            placeholder="Enter Email Id"
            fullWidth
            style={{ marginBottom: "10px" }}
          />
          <TextField
            id="outlined-basic"
            type="password"
            label="Password"
            placeholder="Enter Password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{ marginBottom: "10px" }}
          />
          <Button
            variant="contained"
            style={{
              marginBottom: "10px",
              color: BlUE_VIOLET,
              backgroundColor: AMBER_YELLOW,
            }}
            fullWidth
            onClick={validateUser}
          >
            {LOGIN}
          </Button>
        </div>
      </div>
    </div>
  );
}
