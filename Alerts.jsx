import AlertTable
from "../components/AlertTable";

const alerts = [

  {
    asset: "TX-1001",
    message:
      "Overheating Detected",
    severity: "HIGH"
  },

  {
    asset: "TX-1002",
    message:
      "Voltage Drop",
    severity: "MEDIUM"
  }

];

export default function Alerts() {

  return (
    <div className="container">

      <h1>Alerts</h1>

      <AlertTable alerts={alerts} />

    </div>
  );
}