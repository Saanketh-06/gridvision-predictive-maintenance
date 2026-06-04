export default function AlertTable({
  alerts
}) {

  return (
    <table>

      <thead>
        <tr>
          <th>Asset</th>
          <th>Alert</th>
          <th>Severity</th>
        </tr>
      </thead>

      <tbody>

        {alerts.map((a, i) => (

          <tr key={i}>
            <td>{a.asset}</td>
            <td>{a.message}</td>
            <td>{a.severity}</td>
          </tr>

        ))}

      </tbody>

    </table>
  );
}