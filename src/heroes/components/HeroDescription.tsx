interface HeroDescription {
  description: string;
  label: string;
}
export const HeroDescription = ({ description, label }: HeroDescription) => {
  return (
    <p>
      <span className="font-bold">{label}: </span>
      {description}
    </p>
  );
};
