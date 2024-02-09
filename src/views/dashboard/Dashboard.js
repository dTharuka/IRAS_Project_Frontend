import React, {useEffect, useState} from 'react';
import "./Dashboard.css";
import ChartOne from "./components/ChartOne";
import ChartTwo from "./components/ChartTwo";
import ChartThree from "./components/ChartThree";
import {useNavigate} from "react-router";
import {getChartOne} from "../../service/Service";
import {toast} from "react-toastify";


const Dashboard = () => {

  const navigate=useNavigate();

  const handleNavigateToChartOne = () => {
    navigate('/dashboard/chartThree');
  }

  const handleNavigateToChartTwo = () => {
    navigate('/dashboard/chartTwo');
  }

  const handleNavigateToChartThree = () => {
    navigate('/dashboard/chartOne');
  }

  // ==================================================================================
  const [chartData, setChartData] = useState({ Day: [], Frequency: [] });

  useEffect(() => {
    fetchAllAnalyzedDataFunc().then(() => {console.log("Fetched data")} );
  }, []);

  const fetchAllAnalyzedDataFunc = async () => {
    try {
      const response = await getChartOne();
      console.log("Fetched data:", response);
      setChartData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Error fetching data');
    }
  };

  const base64String = chartData.image_data || '';

  // ==============================================================================================

  return (
      <div className="text-center">
        <div className="row">

          <div className="col-xl-12 px-xl-3">
            <div className="col-xl-12 rounded-4 shadow pb-xl-2 pt-xl-2">

              <div className="col-xl-12">
                <h1>Welcome To IRAS</h1>
              </div>

              <div className="col-xl-12">
                <h5>Instagram Reach Analyse System</h5>
              </div>

            </div>
          </div>

          <div className="col-xl-4 mt-xl-5">

            <div id="chart_1" onClick={handleNavigateToChartOne} className="col-xl-12  py-xl-4 px-xl-4 mt-xl-4 mb-xl-4 rounded-4 shadow">
              {/*<ChartOne base64String={base64String}/>*/}
              <ChartTwo/>
            </div>

            <div className="col-xl-12 px-xl-4 py-xl-4 rounded-4 shadow">
              <h5 style={{fontSize:"15px"}}>Monthly reach of your Instagram account</h5>
            </div>

          </div>

          <div className="col-xl-4  mt-xl-5">
            <div id='chart_2' onClick={handleNavigateToChartTwo} className="col-xl-12  py-xl-4 px-xl-4 mt-xl-4 mb-xl-4 rounded-4 shadow">
              <ChartTwo/>
            </div>

            <div className="col-xl-12 px-xl-4 py-xl-4 rounded-4 shadow">
              <h5 style={{fontSize:"15px"}}>Annual reach of your Instagram account</h5>
            </div>
          </div>

          <div className="col-xl-4  mt-xl-5">
            <div id="chart_3" onClick={handleNavigateToChartThree} className="col-xl-12  py-xl-4 px-xl-4 mt-xl-4 mb-xl-4 rounded-4 shadow">
              <ChartThree/>
            </div>

            <div className="col-xl-12 px-xl-4 py-xl-4 rounded-4 shadow">
              <h5 style={{fontSize:"15px"}}>Totally reach of your Instagram account</h5>
            </div>
          </div>

        </div>
      </div>
  );
};

export default Dashboard;
