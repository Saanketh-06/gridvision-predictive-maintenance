export default function HealthGauge({
  score
}) {

  return (
    <div className="card">

      <h3>Asset Health</h3>

      <h1>{score}%</h1>

    </div>
  );
}