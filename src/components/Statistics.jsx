
import { useLoaderData } from "react-router-dom";
import {
  BarChart as BrChart,
  Bar,
  Legend,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { Helmet } from "react-helmet-async";


const Statistics = () => {

  const barChartData = useLoaderData([]);
  return (
    <div>
      <Helmet>
        <title>Statistics  | Gadget Heaven</title>
      </Helmet>
      <div>
        <div className="rounded-xl mb-12 container text-white mx-auto">

      <div className="pt-5 bg-purple-600 rounded-b-xl text-white mb-10">
      <div className="max-w-4xl text-center space-y-5 pb-10 mx-auto">
        <h2 className="text-5xl font-bold">Statistics</h2>
        <p className="font-medium max-w-2xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
      </div>
    </div>
     <div key={barChartData.product_id} className="px-32 bg-slate-100 py-20 mx-auto">
        <div>
          <h2 className="font-bold ml-5 text-3xl pb-4">Statistics</h2>
        </div>
        <div className="mx-auto">
          <BrChart
            width={1150}
            height={450}
            barChartData={barChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis barChartDataKey="product_title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar barChartDataKey={barChartData.price} fill="#8884d8" />
            <Bar barChartDataKey="rating" fill="red" />
          </BrChart>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Statistics;