import { Button, InputAdornment,TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export default function SignUp() {
    return ( 
        <main className="flex min-h-screen flex-col  p-10  text-center text-white">
          {" "}
          <Image
            src="/LogoIcon.svg"
            alt="Eco Path Logo"
            // className="dark:invert"
            className="mb-10 text-left"
            width={41}
            height={41}
            priority
          />
        <p className="font-normal text-base my-5 text-txtgrey items-center">
            Personalised solution for CO2 consumption and air pollution control,
            enhancing initial health and wellbeing
          </p> 
          <h1 className="font-bold text-[32px] leading-10 my-5 text-left">
            {" "}
            Sign up
          </h1>
          <div className="my-4 text-white">
                  <TextField 
                  hiddenLabel
                  sx={{ input: { color: 'white' } }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailOutlinedIcon className="text-icongrey"/>
                      </InputAdornment>
                    ),
                  }}
                  className="w-full rounded-lg bg-input text-white">
                    
                  </TextField>
          </div>
          <div className="my-4">
                  <TextField 
                  hiddenLabel
                  sx={{ input: { color: 'white' } }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                       <LockOutlinedIcon className="text-red"/>
                      </InputAdornment>
                    ),
                  }}
                  className="w-full rounded-lg bg-input text-white"></TextField>
          </div>

          <div className="mt-52">
            <div className="flex flex-row gap-3 justify-center">
                <CalendarTodayOutlinedIcon/>
                <p>Connect Calendar</p>
            </div>
       <div className="my-8 min-w-[350px]">
            <Link href="/dashboard">
              <Button
                variant="contained"
                sx={{ textTransform: "none" }}
                className="block w-full bg-primary rounded-lg py-[9px] pl-5 mt-5 text-md"
              >
                {" "}
                Next{" "}
              </Button>
            </Link>
          </div>
          </div>

   

        </main>
    )
}