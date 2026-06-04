export default function AssetCard({
  asset
}) {

  return (
    <div className="card">

      <h3>{asset.assetName}</h3>

      <p>
        Health Score:
        {asset.healthScore}
      </p>

      <p>
        Status:
        {asset.status}
      </p>

    </div>
  );
}