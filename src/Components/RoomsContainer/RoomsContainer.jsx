import React from "react";
import { withRoomConsumer } from "../../Context/Context";
import Loadings from "../Loading/Loading";
import RoomFilter from "./RoomsFilter";
import RoomList from "./RoomsList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loadings />;
  }

  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);
