// 'use client'

// import { BikePerson, Car } from '@/components/Icons/Mobilitaet'
// import { useState } from 'react'
// import MyMap from './leaflet'
// import Slider from '@/components/Inputs/Slider'

// interface IntensitySliderProps {
//   sliderValue: number
//   intensityThreshold: number
// }

// const IntensitySlider:IntensitySliderProps[] =[
//   {
//     sliderValue: 0.1,
//     intensityThreshold: 0.4,
//   },
//   {
//     sliderValue: 1.5,
//     intensityThreshold: 0.7,
//   },
//   {
//     sliderValue: 5,
//     intensityThreshold: 1.0,
//   },
// ]

// export default function OvertakingContent() {
//   const data: number[] = [0.1, 1.5, 5]
//   const sliderLabels = data.map(e => e.toString() + ' M')
//   const [sliderValue, setSliderValue] = useState(0)

//   return (
//     <>
//       <div className="flex h-full justify-between text-center">
//         <div className="h-full w-[48%] overflow-hidden rounded-3xl border-2 border-mobility">
//           <MyMap intensityThreshold={0.4} />
//         </div>
//         <div className="mt-8 flex h-full w-[48%] flex-col gap-5">
//           <div>
//             <div className="mx-auto mb-4 flex justify-between">
//               <BikePerson width={50} />
//               <Car width={100} />
//             </div>
//             <div className="relative mx-auto h-2 w-[80%]  transform bg-mobility before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded-md before:bg-mobility after:absolute after:right-0 after:top-1/2 after:h-4 after:w-1 after:-translate-y-1/2 after:rounded-md after:bg-mobility"></div>
//             <div className="mt-4 flex justify-between text-mobility">
//               <p className="w-1/2"> Alle Überholabstände* bis zu dem Wert:</p>
//               <span className="w-[40%] text-4xl underline">3,40 m</span>
//             </div>
//           </div>

//           <div>
//             <div className=" flex w-full justify-between pb-1">
//               <span className="">0.1 M</span>
//               <span className="">5 M</span>
//             </div>

//             <div
//               style={{
//                 background:
//                   'linear-gradient(68deg, rgba(252,12,3,1) 7%, rgba(246,98,15,1) 27%, rgba(239,235,37,1) 48%, rgba(153,255,87,1) 69%, rgba(28,26,215,0.9809173669467787) 100%)',
//               }}
//               className="relative flex h-2 w-full justify-center rounded-full border after:absolute after:right-[20%] after:top-1/2 after:h-5 after:w-5 after:-translate-y-1/2 after:transform after:rounded-full after:bg-black after:content-['']"
//             ></div>
//           </div>

//           <div>
//             <Slider
//               defaultValue={[sliderLabels.length - 1]}
//               firstValueMobile={sliderLabels.length - 1}
//               labels={sliderLabels}
//               max={sliderLabels.length - 1}
//               min={0}
//               onValueChange={([index]) => setSliderValue(index)}
//               style={{
//                 background:
//                   'linear-gradient(68deg, rgba(252,12,3,1) 7%, rgba(246,98,15,1) 27%, rgba(239,235,37,1) 48%, rgba(153,255,87,1) 69%, rgba(28,26,215,0.9809173669467787) 100%)',
//               }}
//             />
//           </div>
//           <p className="mt-8 w-[90%] text-left text-sm">
//             *Die angezeigte Distanz basiert auf einer Wahrscheinlichkeit von
//             über 50%
//           </p>
//         </div>
//       </div>
//     </>
//   )
// }

'use client'

import { BikePerson, Car } from '@/components/Icons/Mobilitaet'
import { useState } from 'react'
import MyMap from './leaflet'
import Slider from '@/components/Inputs/Slider'

interface IntensityMapping {
  sliderValue: number
  intensityThreshold: number
}

// Mapping between slider values and intensity thresholds
const IntensitySlider: IntensityMapping[] = [
  {
    sliderValue: 0.1,
    intensityThreshold: 0.4,
  },
  {
    sliderValue: 1.5,
    intensityThreshold: 0.7,
  },
  {
    sliderValue: 5,
    intensityThreshold: 1.0,
  },
]

export default function OvertakingContent() {
  const data: number[] = [0.1, 1.5, 5]
  const sliderLabels = data.map(e => e.toString() + ' M')
  const [sliderIndex, setSliderIndex] = useState(2)

  const intensityThreshold = IntensitySlider[sliderIndex].intensityThreshold

  return (
    <>
      <div className="flex h-full justify-between text-center">
        <div className="h-96 w-[48%]  overflow-hidden rounded-3xl border-2 border-mobility">
          <MyMap intensityThreshold={intensityThreshold} />
        </div>
        <div className="flex h-96 w-[48%] flex-col gap-5 pt-3 ">
          <div className="flex content-between justify-between">
            <BikePerson width={40} className="md:w-[20px] lg:w-[40px]" />
            <Car width={100} className="md:w-[50px] lg:w-[100px]" />
          </div>

          <div className="relative left-[20px] right-[50px] h-2 w-[calc(100%-70px)] bg-mobility before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded-md before:bg-mobility before:content-[''] after:absolute after:right-0 after:top-1/2 after:h-4 after:w-1 after:-translate-y-1/2 after:rounded-md after:bg-mobility after:content-[''] md:left-[10px] md:right-[25px] md:w-[calc(100%-35px)] lg:left-[20px] lg:right-[50px] lg:w-[calc(100%-70px)]"></div>

          <div className="mt-4 flex justify-between gap-2 text-mobility md:flex-col lg:flex-row">
            <p className="w-[60%] text-sm md:w-[100%] md:text-xs lg:w-[60%] lg:text-base">
              Alle Überholabstände* bis zu dem Wert:
            </p>
            <span className="w-[40%] text-4xl underline md:w-[100%] md:text-base lg:w-[40%] lg:text-4xl">
              {data[sliderIndex]} m
            </span>
          </div>

          {/* <div>
            <div className="flex w-full justify-between pb-1">
              <span>0.1 M</span>
              <span>5 M</span>
            </div>

            <div
              style={{
                background:
                  'linear-gradient(68deg, rgba(252,12,3,1) 7%, rgba(246,98,15,1) 27%, rgba(239,235,37,1) 48%, rgba(153,255,87,1) 69%, rgba(28,26,215,0.9809173669467787) 100%)',
              }}
              className="relative flex h-2 w-full justify-center rounded-full border after:absolute after:right-[20%] after:top-1/2 after:h-5 after:w-5 after:-translate-y-1/2 after:transform after:rounded-full after:bg-black after:content-['']"
            ></div>
          </div> */}

          <div className="mb-3">
            <Slider
              defaultValue={[sliderLabels.length - 1]}
              firstValueMobile={sliderLabels.length - 1}
              labels={sliderLabels}
              max={sliderLabels.length - 1}
              min={0}
              onValueChange={([index]) => setSliderIndex(index)}
              trackHeight="md:h-2"
              thumbHeight="md:h-5 bg-black"
              style={{
                background:
                  'linear-gradient(68deg, rgba(252,12,3,1) 7%, rgba(246,98,15,1) 27%, rgba(239,235,37,1) 48%, rgba(153,255,87,1) 69%, rgba(28,26,215,0.9809173669467787) 100%)',
                borderRadius: '9999px',
              }}
            />
          </div>
          <p className="w-[90%] text-left text-sm md:text-xs lg:text-base">
            *Die angezeigte Distanz basiert auf einer Wahrscheinlichkeit von
            über 50%
          </p>
        </div>
      </div>
    </>
  )
}
