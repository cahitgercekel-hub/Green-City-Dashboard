import CreatingMap from './Map'

export default function OvertakingContent() {
  return (
    <>
      <div className="flex h-full justify-between text-center">
        <div className="h-96 w-[48%]  overflow-hidden rounded-3xl border-2 border-mobility">
          <CreatingMap />
        </div>
        <div className="mt-8 flex w-[48%] flex-col gap-5">
          <div>
            <div className="flex justify-between"></div>
            <div className="relative mx-auto h-2 w-[80%]  transform bg-mobility before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded-md before:bg-mobility after:absolute after:right-0 after:top-1/2 after:h-4 after:w-1 after:-translate-y-1/2 after:rounded-md after:bg-mobility"></div>
            <div className="mt-4 flex justify-between text-mobility">
              <p className="w-1/2"> Alle Überholabstände* bis zu dem Wert:</p>
              <span className="w-[40%] text-4xl underline">3,40 m</span>
            </div>
          </div>

          <div>
            <div className=" flex w-full justify-between pb-1">
              <span className="">0.1 M</span>
              <span className="">5 M</span>
            </div>

            <div
              style={{
                background:
                  'linear-gradient(68deg, rgba(252,12,3,1) 7%, rgba(246,98,15,1) 27%, rgba(239,235,37,1) 48%, rgba(153,255,87,1) 69%, rgba(28,26,215,0.9809173669467787) 100%)',
              }}
              className="relative flex h-2 w-full justify-center rounded-full border after:absolute after:right-[20%] after:top-1/2 after:h-5 after:w-5 after:-translate-y-1/2 after:transform after:rounded-full after:bg-black after:content-['']"
            ></div>
          </div>

          <p className="mt-8 w-[90%] text-left text-sm">
            *Die angezeigte Distanz basiert auf einer Wahrscheinlichkeit von
            über 50%
          </p>
        </div>
      </div>
    </>
  )
}
