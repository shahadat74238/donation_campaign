import { PieChart } from "@mui/x-charts";

const Statistics = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "series A" },
                { id: 1, value: 15, label: "series B" },
                { id: 2, value: 20, label: "series C" },
              ],
            },
          ]}
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Statistics;
