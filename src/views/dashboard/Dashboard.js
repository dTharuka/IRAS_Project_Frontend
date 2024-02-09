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

          <div className="col-xl-12 px-xl-3 mb-xl-5">
            <div className="col-xl-12 rounded-4 shadow pb-xl-2 pt-xl-2">

              <div className="col-xl-12">
                <h1>Welcome To IRAS</h1>
              </div>

              <div className="col-xl-12">
                <h5>Instagram Reach Analyse System</h5>
              </div>

            </div>
          </div>

          <div className="col-xl-4 mt-xl-5 pt-xl-5">

            <div id="chart_1" onClick={handleNavigateToChartThree} className="col-xl-12  py-xl-4 px-xl-4 mt-xl-5 mb-xl-4 rounded-4 shadow">
              {/*<ChartOne base64String={base64String}/>*/}
              <h5 style={{fontSize:"20px"}}>You can easily access the chart by clicking on it.</h5>
            </div>

            <div className="col-xl-12 px-xl-4 py-xl-5 rounded-4 shadow">
              <h5 style={{fontSize:"15px"}}>We strive to give you an understanding</h5>
              <h5 style={{fontSize:"15px"}}>of the reach of your Instagram</h5>
              <h5 style={{fontSize:"15px"}}>account with a graph.</h5>
            </div>

          </div>

          <div className="col-xl-4  mt-xl-5">
            <div id='chart_2' onClick={handleNavigateToChartTwo} className="col-xl-12  py-xl-4 px-xl-4 mt-xl-4 mb-xl-4 rounded-4 shadow">
              <h5 style={{fontSize:"20px"}}>You can easily access the chart by clicking on it.</h5>
            </div>

            <div className="col-xl-12 px-xl-4 py-xl-5 rounded-4 shadow">
              <h5 style={{fontSize:"15px"}}>We believe that it is more useful for you</h5>
              <h5 style={{fontSize:"15px"}}>to know about the attention</h5>
              <h5 style={{fontSize:"15px"}}>that your post receives</h5>
            </div>
          </div>

          <div className="col-xl-4  mt-xl-5 pt-xl-5">
            <div id="chart_3" onClick={handleNavigateToChartOne} className="col-xl-12  py-xl-4 px-xl-4 mt-xl-5 mb-xl-4 rounded-4 shadow">
              <h5 style={{fontSize:"20px"}}>You can easily access the chart by clicking on it.</h5>
            </div>

            <div className="col-xl-12 px-xl-4 py-xl-5 rounded-4 shadow">
              <h5 style={{fontSize:"15px"}}>Things like likes, profile visits, shares</h5>
              <h5 style={{fontSize:"15px"}}>and comments on your post will give you an</h5>
              <h5 style={{fontSize:"15px"}}>idea about the response you have.</h5>
            </div>
          </div>

        </div>
      </div>
  );
};

export default Dashboard;
