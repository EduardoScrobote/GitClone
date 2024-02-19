import { BoxContent } from "./BoxProps";

function Box() {
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {BoxContent.map((prop, i) => (
        <div
          key={i}
          className="flex w-[29rem] rounded-md h-16 items-center hover:cursor-pointer bg-[#23282f] hover:bg-[#414955]"
        >
          <div className="w-24 h-[100%] bg-center bg-cover rounded-md bg-playlist"></div>
          <p className="ml-2">{prop.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Box;
