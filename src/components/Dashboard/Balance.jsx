import React from "react";
import AreaChart from '../Extras/AreaChart';

const Balance = ({ total, data, loading }) => {
    const initialBalance = 4100;

    const earnings = total - initialBalance;

    const earningsPercentage = (earnings / total) * 100;

    let sales;

    try {
        sales = data.filter(element => element.status === 'Paid').reduce((total, element) => element.amount + total, 0);
    } catch (err) {
        console.error(err);
    }

    return (
        <div className="flex flex-col h-full pb-0">

            {loading ? <p>Loading...</p> : (
                <div className="h-full pb-0">

                    <div className="flex flex-row justify-between items-center p-2 h-1/6">
                        <p className="p-3 text-lg font-semibold">Balance</p>
                        <button className="p-1 px-4 border rounded text-[9px] font-light text-gray-500">Monthly</button>
                    </div>

                    <hr />

                    <div className="flex flex-row justify-evenly 2xl:flex-wrap">
                        <div className="flex flex-col border rounded p-2 px-4 m-4 w-full">
                            <p className="text-left text-[9px] font-light text-gray-500">Earnings</p>
                            <p className="font-bold text-2xl flex items-center">{earningsPercentage.toFixed(2)}%
                                <span className="text-[10px] border rounded-full text-white bg-green-500 font-normal flex items-center p-1 h-5 ml-1">+6.9%</span>
                            </p>
                        </div>
                        <div className="flex flex-col border rounded p-2 px-4 m-4 w-full">
                            <p className="text-left text-[9px] font-light text-gray-500">Sales Value</p>
                            <p className="font-bold text-2xl flex items-center">₹{sales}
                            <span className="text-[10px] border rounded-full text-white bg-green-500 font-normal flex items-center p-1 h-5 ml-1">+6.9%</span>
                            </p>
                        </div>
                    </div>

                    <div className="pb-0 m-0">
                        <AreaChart data={data} />
                    </div>

                </div>
            )}

        </div>

    );
}

export default Balance;