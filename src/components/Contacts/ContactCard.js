import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { forFirstCharUppercase } from "../../Helpers";

//Generate Classes for Style
const useStyles = makeStyles({
  card: {
    minWidth: "310px",
  },
  contactsContainer: {
    padding: "20px 50px 0 50px",
  },
  cardMedia: {
    width: "50px",
    height: "40px",
    margin: "1rem auto",
    borderRadius: "50%",
  },
  typographyStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: " 0.5rem",
    paddingRight: " 0.5rem",
  },
  cardFocus: {
    backgroundColor: "yellow",
  },
});

function ContactCard({ filter, person }) {
  const classes = useStyles();
  const { gender, name, email, phone, picture } = person;
  let { thumbnail } = picture;

  //For Gender Icon
  let genderIcon;
  if (gender === "male") {
    genderIcon = <MaleIcon />;
  } else {
    genderIcon = <FemaleIcon />;
  }

  return (
    <Grid item xs={12} sm={6} md={4} key={phone}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={thumbnail}></CardMedia>
        <CardContent className={filter.nameFilter ? classes.cardFocus : ""}>
          <Typography className={classes.typographyStyle}>
            {`${forFirstCharUppercase(name.first)} ${forFirstCharUppercase(
              name.last
            )} `}
            {genderIcon}
          </Typography>
          <Typography className={classes.typographyStyle}>
            <EmailIcon /> {email}
          </Typography>
          <Typography className={classes.typographyStyle}>
            <PhoneIcon />
            {phone}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ContactCard;
