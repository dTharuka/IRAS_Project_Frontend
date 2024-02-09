import React, {useEffect, useRef, useState} from 'react';
import Chart from 'chart.js/auto';

const ChartTwo = ({base64String}) => {
    // const chartRef = useRef(null);
    //
    // useEffect(() => {
    //     if (chartRef.current) {
    //         const myChart = new Chart(chartRef.current, {
    //             type: 'pie',
    //             data: {
    //                 labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //                 datasets: [{
    //                     label: 'Bar Chart',
    //                     data: [12, 19, 3, 5, 8, 3],
    //                     borderWidth: 1,
    //                     backgroundColor: [
    //                         'rgba(255, 99, 132, 0.2)',
    //                         'rgba(54, 162, 235, 0.2)',
    //                         'rgba(255, 206, 86, 0.2)',
    //                         'rgba(75, 192, 192, 0.2)',
    //                         'rgba(153, 102, 255, 0.2)',
    //                         'rgba(255, 159, 64, 0.2)',
    //                     ],
    //                     borderColor: [
    //                         'rgba(255, 99, 132, 1)',
    //                         'rgba(54, 162, 235, 1)',
    //                         'rgba(255, 206, 86, 1)',
    //                         'rgba(75, 192, 192, 1)',
    //                         'rgba(153, 102, 255, 1)',
    //                         'rgba(255, 159, 64, 1)',
    //                     ],
    //                 }]
    //             },
    //             options: {
    //                 scales: {}
    //             }
    //         });
    //
    //
    //
    //         return () => {
    //
    //             myChart.destroy();
    //         };
    //     }
    // }, [chartRef]);

    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const decodeBase64 = () => {
            try {
                const binaryData = atob(base64String);

                const mime = 'image/png'; // Update this based on your image type
                const arrayBuffer = new ArrayBuffer(binaryData.length);
                const uint8Array = new Uint8Array(arrayBuffer);

                for (let i = 0; i < binaryData.length; i++) {
                    uint8Array[i] = binaryData.charCodeAt(i);
                }

                const blob = new Blob([arrayBuffer], { type: mime });
                const dataUrl = URL.createObjectURL(blob);

                setImageSrc(dataUrl);

                return () => URL.revokeObjectURL(dataUrl);
            } catch (error) {
                console.error('Error decoding base64 string:', error);
            }
        };

        if (base64String) {
            decodeBase64();
        }

    }, [base64String]);

    return (
        // <div style={{ width: '90%',height:"90%" }}>
        //     <canvas ref={chartRef}> </canvas>
        // </div>
        <div style={{ width: '90%',height:"90%" }}>
            <img src={imageSrc} alt="Base64 Image" />
        </div>
    );
};

export default ChartTwo;
