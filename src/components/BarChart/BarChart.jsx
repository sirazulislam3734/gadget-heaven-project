import {
    BarChart as BrChart,
    Bar,
    Legend,
    Tooltip,
    CartesianGrid,
    XAxis,
    YAxis,
  } from "recharts";
  import PropTypes from "prop-types";
  
  const BarChart = ({ data }) => {
    return (
      <div className="px-32 bg-slate-100 py-20 mx-auto">
        <div>
          <h2 className="font-bold ml-5 text-3xl pb-4">Statistics</h2>
        </div>
        <div className="mx-auto">
          <BrChart
            width={1150}
            height={450}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#8884d8" />
            <Bar dataKey="rating" fill="red" />
          </BrChart>
        </div>
      </div>
    );
  };
  
  BarChart.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        product_title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  
  export default BarChart;
  