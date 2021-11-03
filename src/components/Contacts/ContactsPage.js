import React from "react";
import { useState } from "react";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ContactCard from "./ContactCard";
import { forFirstCharUppercase } from "../../Helpers";

//Generate Classes for Style
const useStyles = makeStyles({
  contactsContainer: {
    padding: "20px 50px 0 50px",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80px",
  },
});

const ContactsPage = ({ contactsData, filter }) => {
  //For Showing Only 9 Contacts
  const [dataToShow, setDataToShow] = useState(9);

  const slice = contactsData.slice(0, dataToShow);

  //Filtering Functions
  function genderCheck(gFilter, person) {
    let personGender = forFirstCharUppercase(person.gender);
    if (gFilter == "All Genders") {
      return true;
    } else {
      return personGender.includes(gFilter);
    }
  }
  function nameCheck(nFilter, person) {
    let personName = forFirstCharUppercase(person.name.first);

    return personName.includes(nFilter);
  }

  //Load more Function
  const loadMore = () => {
    setDataToShow(dataToShow + dataToShow);
  };

  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1} className={classes.contactsContainer}>
        {slice.map(
          (person) =>
            genderCheck(filter.genderFilter, person) &&
            nameCheck(filter.nameFilter, person) && (
              <ContactCard person={person} />
            )
        )}
      </Grid>
      <div className={classes.buttonsContainer}>
        <Button onClick={() => loadMore()} variant='contained'>
          Load More
        </Button>
      </div>
    </>
  );
};

export default ContactsPage;
