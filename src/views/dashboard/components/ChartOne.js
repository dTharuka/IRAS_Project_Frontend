import React, {useEffect, useRef, useState} from 'react';
import Chart from 'chart.js/auto';

const ChartOne = ({base64String}) => {


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

export default ChartOne;
