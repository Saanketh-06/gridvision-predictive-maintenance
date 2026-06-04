import { useEffect, useState } from "react";

import AssetCard
from "../components/AssetCard";

import HealthGauge
from "../components/HealthGauge";

import { getAssets }
from "../services/api";

export default function Dashboard() {

  const [assets, setAssets] =
    useState([]);

  useEffect(() => {

    getAssets()
      .then((res) =>
        setAssets(res.data)
      )
      .catch(console.error);

  }, []);

  return (
    <div className="container">

      <h1>
        Smart Grid Dashboard
      </h1>

      <HealthGauge score={92} />

      <div className="grid">

        {assets.map((asset) => (

          <AssetCard
            key={asset.id}
            asset={asset}
          />

        ))}

      </div>

    </div>
  );
}