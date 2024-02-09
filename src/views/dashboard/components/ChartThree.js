import React, {useEffect, useRef, useState} from 'react';
import Chart from 'chart.js/auto';

const ChartThree = ({base64String}) => {
    // const chartRef = useRef(null);
    //
    // useEffect(() => {
    //     if (chartRef.current) {
    //         const myChart = new Chart(chartRef.current, {
    //             type: 'bubble',
    //             data: {
    //                 datasets: [{
    //                     label: 'Bubble Chart',
    //                     data: [
    //                         { x: 10, y: 20, r: 5 },
    //                         { x: 15, y: 10, r: 8 },
    //                         { x: 25, y: 18, r: 6 },
    //                         { x: 7, y: 15, r: 10 },
    //                         { x: 30, y: 12, r: 7 },
    //                         { x: 18, y: 25, r: 8 },
    //                     ],
    //                     backgroundColor: [
    //                         'rgba(255, 99, 132, 0.6)',
    //                         'rgba(54, 162, 235, 0.6)',
    //                         'rgba(255, 206, 86, 0.6)',
    //                         'rgba(75, 192, 192, 0.6)',
    //                         'rgba(153, 102, 255, 0.6)',
    //                         'rgba(255, 159, 64, 0.6)',
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
    //                 scales: {
    //                     x: {
    //                         grid: {
    //                             display: false
    //                         }
    //                     },
    //                     y: {
    //                         beginAtZero: true,
    //                         grid: {
    //                             display: false
    //                         }
    //                     }
    //                 }
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
        <div style={{ width: '90%',height:"90%" }}>
            <img src={imageSrc} alt="Base64 Image" />
        </div>
    );
};

export default ChartThree;
