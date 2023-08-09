import React from "react";
import AgDataGrid from "./Dashboard/AgDataGrid";
import Balance from "./Dashboard/Balance";
import TotalIncome from "./Dashboard/TotalIncome";
import NewUser from "./Dashboard/NewUser";


const Dashboard = ({ data, loading }) => {

    const handleDownload = () => {
        const confirm = window.confirm("Are you sure want to download the Recent Transactions?");

        if (confirm) {
            const jsonData = JSON.stringify(data);

            // Create a Blob from the JSON data
            const blob = new Blob([jsonData], { type: "application/json" });

            // Create a temporary URL for the Blob
            const url = URL.createObjectURL(blob);

            // Create a link element and click it to trigger the download
            const link = document.createElement("a");
            link.href = url;
            link.download = "RecentTransactions.json"; // You can customize the filename here
            link.click();

            // Clean up the temporary URL
            URL.revokeObjectURL(url);
        }
    }
    let total;

    try{
        total = data.filter(element => element.status).reduce((total, element) => total + element.amount, 0);
    }catch(err) {
        console.error(err);
    }

    return (
        <div className="w-3/4 h-full flex flex-col">
            <div className="flex flex-row h-1/2">
                <div className=" w-1/2 flex flex-col justify-between m-4">
                    <div className="h-2/5 w-full bg-white ">
                        <TotalIncome total={total} loading={loading} />
                    </div>
                    <div className="h-1/2 w-full bg-white">
                        <NewUser data={data} loading={loading} />
                    </div>
                </div>
                <div className="bg-white w-1/2 m-4">
                    <Balance total={total} data={data} loading={loading}/>
                </div>
            </div>


            <div className="bg-white h-1/2 m-2">
                <div className="flex flex-col">
                    <div className="flex justify-between p-3">
                        <p className="font-semibold">Recent Transactions</p>
                        <button onClick={handleDownload} className="flex items-center bg-primary text-white p-2 h-8 rounded-md text-[10px] font-light"><img className="mr-1" width="18" height="18" src="https://img.icons8.com/external-regular-kawalan-studio/24/FFFFFF/external-export-arrows-regular-kawalan-studio.png" alt="external-export-arrows-regular-kawalan-studio" />
                            Export</button>
                    </div>
                    <div className="h-80 w-full">
                        <AgDataGrid data={data} loading={loading} />
                    </div>

                </div>

            </div>
        </div>
    );
}


export default Dashboard;