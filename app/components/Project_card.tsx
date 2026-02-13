import Image from "next/image";

export default function Project_card({
  title,
  date,
  info,
}: {
  title: string;
  date: string;
  info: string;
}) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <p>{info}</p>
    </div>
  );
}