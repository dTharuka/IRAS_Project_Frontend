import React, {useEffect, useState} from 'react';
import ChartOne from "./components/ChartOne";
import {getChartOne} from "../../service/Service";
import {toast} from "react-toastify";


const Chart3 = () => {


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

    return (
        <div className="text-center">
            <div className="row">

                <div className="col-xl-12 px-xl-4 py-xl-2 rounded-4 shadow">
                    <h1>Monthly reach of your Instagram account</h1>
                </div>

                <div className="col-xl-12 mt-xl-0 px-xl-5 py-xl-5">

                    <div className="text-center">
                        <div className="row">
                            <div className="col-xl-1">

                            </div>
                            <div className="col-xl-10 rounded-4 shadow d-flex justify-content-center align-items-center" style={{height:"60vh"}}>
                                <ChartOne base64String={base64String}/>
                            </div>
                            <div className="col-xl-1">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Chart3;
