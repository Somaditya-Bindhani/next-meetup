import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head  from "next/head";
const NewMeetPage = () => {
  const router = useRouter();
  const addMettupHandler = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.replace("/");
  };
  return (
    <div>
      <Head>
        <title>Add New Meetups</title>
        <meta
          name="description"
          content="Add a meetup and create amazing network."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMettupHandler} />
    </div>
  );
};

export default NewMeetPage;
