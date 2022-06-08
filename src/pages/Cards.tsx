import { Card1, Card2 } from "../components/Cards";

export default function Cards() {
  return (
    <>
      <div className="w-full h-full p-4 m-8 overflow-y-auto">
        <Card1 />
        <br/>
        <Card2 />
      </div>
    </>
  );
}
