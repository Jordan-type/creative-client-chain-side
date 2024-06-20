import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend,
} from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
);

interface ChartProps {
    usersSubscriptionDetails?: number[];
}

export const DoughnutChart: React.FC<ChartProps> = ({
    usersSubscriptionDetails = [],
}) => {
    // Generate fake data
    const fakeData = [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
    ];

    const data = {
        labels: ["Active", "Cancelled", "Completed"],
        datasets: [
            {
                label: "Orders",
                data: usersSubscriptionDetails.length > 0 ? usersSubscriptionDetails : fakeData,
                borderColor: ["rgba(0, 0, 0, 0.5)"],
                backgroundColor: [
                    "rgba(230, 230, 250, 1)",
                    "rgba(220, 198, 224, 1)",
                    "rgba(255, 240, 245, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: "right" as const, // Set legend position to the right
                labels: {
                    color: "white", // Set the label text color
                    boxWidth: 20, // Set the width of the colored box next to the label
                    boxHeight: 20, // Set the height of the colored box next to the label
                    padding: 30, // Set padding around the label text
                },
            },
        },
    };

    return <Doughnut data={data} options={options} />;
};

export const PieChart: React.FC<ChartProps> = ({
    usersSubscriptionDetails = [],
}) => {
    // Generate fake data
    const fakeData = [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
    ];

    const data = {
        labels: ["Posted", "Hire"],
        datasets: [
            {
                label: "Job Post",
                data: usersSubscriptionDetails.length > 0 ? usersSubscriptionDetails : fakeData,
                borderColor: ["rgba(0, 0, 0, 0.5)"],
                backgroundColor: [
                    "rgba(200, 162, 200, 1)",
                    "rgba(157, 124, 193, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: "right" as const, // Set legend position to the right
                labels: {
                    color: "white", // Set the label text color
                    boxWidth: 20, // Set the width of the colored box next to the label
                    boxHeight: 20, // Set the height of the colored box next to the label
                    padding: 30, // Set padding around the label text
                },
            },
        },
    };

    return <Pie data={data} options={options} />;
};
