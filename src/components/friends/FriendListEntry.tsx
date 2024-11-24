interface FriendListProps {
  name: string; // The "name" prop should be a string
  age: number; // The "age" prop should be a number
}

function Friendlistentry({ name, age }: FriendListProps) {
  return (
    <>
      <div className="p-1.5">
        <div className="fixed z-[2000] bg-blue rounded-full w-[50px] h-[50px] flex justify-center items-center">
          <p className="text-white">{name[0]}</p>
        </div>
        <p className="text-center text-blue font-sans text-lg">{name}</p>
        <p className="text-center text-grey font-sans text-sm">{age}</p>
      </div>
    </>
  );
}

export default Friendlistentry;
