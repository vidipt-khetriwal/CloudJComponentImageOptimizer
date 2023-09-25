type StepsCardProps = {
  step: string;
  title: string;
  description: string;
  image: string;
};

export const StepsCard = ({
  step,
  title,
  description,
  image,
}: StepsCardProps) => {
  return (
    <div className="relative h-[483px] min-w-[350px] max-w-[413px] flex-1 overflow-hidden rounded-2xl bg-amber-50  xl:w-[413px]">
      {/* step and number */}
      <div className="flex flex-row justify-between py-10 pl-5">
        <div className="inline-flex h-7 flex-col items-start justify-start gap-2.5 rounded-3xl bg-neutral-950 bg-opacity-5 px-4 py-1">
          <div className="inline-flex items-center justify-start gap-1.5">
            <div className="text-sm font-bold leading-snug text-emerald-400">
              Step {step}
            </div>
          </div>
        </div>
        {/* <span className="w-1/5 border-b dark:border-gray-600"></span> */}
        {/* Negative margin added here */}
        <div
          className={`absolute ${
            Number(step) === 1 ? "right-0" : "right-[-40px]"
          } top-[50px] text-[236px] font-black leading-10 text-neutral-950 text-opacity-10`}
        >
          {step}
        </div>
      </div>

      <div className="absolute left-[32px] top-[122px] text-2xl font-bold leading-loose text-neutral-950">
        {title}
      </div>
      <div className="absolute left-[32px] top-[166px] w-72 text-sm font-medium leading-snug text-neutral-950 text-opacity-50">
        {description}
      </div>
    </div>
  );
};
