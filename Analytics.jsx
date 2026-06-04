import FaultTrendChart
from "../components/FaultTrendChart";

const data = [

  {
    month: "Jan",
    faults: 10
  },

  {
    month: "Feb",
    faults: 7
  },

  {
    month: "Mar",
    faults: 5
  },

  {
    month: "Apr",
    faults: 3
  }

];

export default function Analytics() {

  return (
    <div className="container">

      <h1>
        Predictive Analytics
      </h1>

      <FaultTrendChart
        data={data}
      />

    </div>
  );
}