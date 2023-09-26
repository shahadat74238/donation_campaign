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
    { value: totalDonation, color: "#00C49F" },
    { value: donation, color: "#FF444A" },
  ];

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };

  return (
    <div className="mx-10">
      <div className="h-screen max-w-7xl mx-aut0">
        <div className="flex flex-col justify-center items-center">
          <div>
            <PieChart
              series={[
                {
                  outerRadius: 160,
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
              width={500}
              height={400}
            />
          </div>
          <div className="flex gap-5 mt-20 items-center">
            <h1 className="text-lg font-semibold">Your Donation</h1>
            <p className="h-2 w-20 bg-[#00C49F]"></p>
            <h1 className="text-lg font-semibold">Total Donation</h1>
            <p className="h-2 w-20 bg-[#FF444A]"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
