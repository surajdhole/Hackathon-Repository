
import { CalendarTodayOutlined, MapsHomeWorkOutlined, MasksOutlined, WindowOutlined } from "@mui/icons-material";
import LeftLogo from "../__Components/LeftLogo";
import Calendar from "../__Components/Calendar";
import AirPSummary from "../__Components/Dashboard/Airpollution";

export default function Dashboard() {
    return ( 
        <main className="flex min-h-screen flex-col p-10 overflow-scroll">

            <div className="flex flex-row justify-between">
                <LeftLogo/>
                <CalendarTodayOutlined/>
            </div>

            <div className="items-center text-center">
                <p className="font-medium text-base"> Shaftesbury, England</p>
                <h2 className="text-[64px] text-bold my-5"> 49 AQI </h2>
                <p className="font-normal text-sm my-2"> Good air quality. The air is clean or contains only a negligible amount of pollutants. There are no known health risks</p>
                
                <div className="flex flex-row justify-between items-center my-4">
                    <div className="block bg-input min-w-20 min-h-20 rounded-lg py-4">
                        <p className="font-normal text-sm">PM2.5</p>
                        <p className="text-xl font-medium">10</p>
                    </div>
                    <div className="block bg-input min-w-20 min-h-20 rounded-lg py-4">
                        <p className="font-normal text-sm">PM10</p>
                        <p className="text-xl font-medium">32</p>
                    </div>
                    <div className="block bg-input min-w-20 min-h-20 rounded-lg py-4">
                        <p className="font-normal text-sm" >Ozone</p>
                        <p className="text-xl font-medium">27</p>
                    </div>
                    <div className="block bg-input min-w-20 min-h-20 rounded-lg py-4">
                        <p className="font-normal text-sm">NO2</p>
                        <p className="text-xl font-medium">4</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bg-input h-50 rounded-lg p-4 mb-4 overflow-x-auto space-x-8 w-full">
                <div className="flex flex-row flex-start">
                    <p className="font-medium text-base pb-8">Health Advice For Belfast</p>
                </div> 
                <div className="flex flex-row text-lightred gap-8">
                    <div className="flex flex-col flex-start min-w-28">
                         <MasksOutlined/>
                         <p className="text-white">Wear Mask</p>
                         <p className="text-txtgrey no-wrap">Not Required</p>
                    </div>
                    <div className="flex flex-col flex-start min-w-28">
                         <MapsHomeWorkOutlined/>
                         <p className="text-white">Stay Indoor</p>
                         <p className="text-txtgrey no-wrap">Not Required</p>
                    </div>

                    <div className="flex flex-col flex-start text-green min-w-28">
                         <WindowOutlined className="text-green"/>
                         <p className="text-white">Stay Indoor</p>
                         <p className="text-txtgrey no-wrap">Keep Open</p>
                    </div>
    
                   
                </div> 
            </div>


            <div className="flex flex-col flex-start">
                <p className="font-medium text-base mb-4"> Monthly Overview</p>
                <Calendar/>
            </div>

            <AirPSummary/>

            <div className="mb-10">
               
            </div>


            

        
        </main>
    )
}