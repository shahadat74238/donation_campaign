import { useEffect, useState } from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";

const Statistics = () => {
  const [donatedData, setDonationData] = useState([]);

  useEffect(() => {
    const donatedData = JSON.parse(localStorage.getItem("donation")) || [];
    setDonationData(donatedData);
  }, []);

  const donation = 12 - donatedData.length;
  const totalDonation = donatedData.length;

  const data = [
    { label: "Donated", value: totalDonation, color: "#00C49F" },
    { label: "Is Left", value: donation, color: "#FF444A" },
  ];

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(2)}%`;
  };

  return (
    <div className="mx-5 lg:0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div>
            <PieChart
              series={[
                {
                  outerRadius: 120,
                  data,
                  arcLabel: getArcLabel,
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontSize: 20,
                },
              }}
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 my-20 items-center">
            <div className="flex gap-3 items-center">
              <h1 className="text-lg font-semibold">Your Donation</h1>
              <p className="h-2 w-20 bg-[#00C49F]"></p>
            </div>
            <div className="flex gap-3 items-center">
              <h1 className="text-lg font-semibold">Total Donation</h1>
              <p className="h-2 w-20 bg-[#FF444A]"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
