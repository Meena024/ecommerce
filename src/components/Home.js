import { Button, Table } from "react-bootstrap";

const Home = () => {
  const events = [
    { date: "JUL 16", place: "Detroit", album: "Album1" },
    { date: "JUL 19", place: "Miami", album: "Album2" },
    { date: "JUL 22", place: "New York", album: "Album3" },
  ];

  const eventList = events.map((event) => {
    return (
      <tr style={{ fontFamily: "cursive" }}>
        <td>
          <h2>{event.date}</h2>
        </td>
        <td>
          <h2>{event.place}</h2>
        </td>
        <td>
          <h2>{event.album}</h2>
        </td>
        <td>
          <Button variant="info">Buy Tickets</Button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <h1 style={{ fontFamily: "cursive" }}>Albums</h1>
      <Table striped hover className="flex-column align-items-center m-5 p-5">
        <tbody>{eventList}</tbody>
      </Table>
    </>
  );
};

export default Home;
