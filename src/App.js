import logo from "./logo.svg";
import "./App.css";
const number = 5555;
const singers = [
  { name: "Dr.Mahfuj", job: "singer" },
  { name: "Eva rahman", job: "singer" },
  { name: "Agun", job: "pathor" },
  { name: "Suvro", job: "kosto" },
];

const singerStyle = {
  color: "lightgreen",
  backgroundColor: "blue",
  padding: "20px",
  borderRadius: "10px",
};

function App() {
  const actorsPair = [
    ["Rubel", "Mowshumi"],
    ["BppaRaz", "Cheka"],
    ["Kuber", "Eva"],
    ["joshim", "Notuni"],
    ["Riyaz", "Purnima"],
    ["Salman Sha", "Shbnur"],
  ];
  return (
    <div className="App">
      {actorsPair.map((pair) => (
        <Person nayok={pair[0]} nayika={pair[1]}></Person>
      ))}

      {/* {nayoks.map((nayok) => (
        <Person name={nayok}></Person>
      ))} */}

      {singers.map((singer) => (
        <Person name={singer.name} job={singer.job}></Person>
      ))}

      {/* <Person name={nayoks[0]} nayika="Moushumi"></Person>
      <Person name={nayoks[1]} nayika="Chika"></Person>
      <Person name={nayoks[2]} nayika="Popi"></Person>
      <Person name={nayoks[3]} nayika="Shabana"></Person> */}
      {/* <Person></Person> */}
      <h5>new component</h5>
      {/* <Friend name="Ajaira Prottoy" job="Youtuber"></Friend>
      <Friend name="Ashish Concole" job="Joker"></Friend>
      <Friend></Friend> */}
    </div>
  );
}

function Person(props) {
  // console.log(props);
  // const { name, nayika } = props;
  // console.log(name, nayika);
  return (
    <div className="person">
      {/* <h1>{props.nayok}</h1> */}

      <h1>
        {props.nayok}
        {props.name}
      </h1>
      {/* 
      <h1>
        {props.nayok}?{props.nayok}:{props.name}
      </h1> */}

      <h4>
        {props.nayika}
        {props.job}
      </h4>
    </div>
  );
}

const Friend = (props) => {
  return (
    <div className="container">
      <h3>{props.name}</h3>
      <p>{props.job}</p>
    </div>
  );
};
export default App;
