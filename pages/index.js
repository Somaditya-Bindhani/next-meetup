import React, { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import  Head  from "next/head";
const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list og highl;y active meetup data"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};
// export const getServerSideProps = async (context) => {
//   const res = context.res;
//   const req = context.req;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };
export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://somadityaUser:qwerty123@cluster0.dlg8e.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};
export default HomePage;
