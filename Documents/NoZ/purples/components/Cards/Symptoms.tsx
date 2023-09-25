type SymptomsCardProps = {
  title: string;
  description: string;
  image: string;
};

export const SymptomCard = ({
  title,
  description,
  image,
}: SymptomsCardProps) => {
  return (
    <div className="flex flex-row">
      <div className="h-[300px] min-w-[400px] bg-red-600">
        <img src={image} alt={`symptom-${title}`} className="h-[60%] w-full" />
        <div className="text-center text-xl">{title}</div>
        <div className="text-center text-xl">{description}</div>
      </div>
    </div>
  );
};
