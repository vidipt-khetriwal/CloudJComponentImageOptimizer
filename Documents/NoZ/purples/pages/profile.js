import Calender from "../components/Calender";
import { meetings } from "../mock/calender";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <h1 className="text-center text-4xl font-bold text-green-900">Profile</h1>
      <Calender meetings={meetings} />
    </div>
  );
}
