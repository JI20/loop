import Friendlistentry from "../../components/friends/FriendListEntry";

function Friends() {
  return (
    <>
      <div className="grid grid-cols-1 divide-y">
        <Friendlistentry name="Leon" age="19" />
        <Friendlistentry name="Ola" age="24" />
        <Friendlistentry name="Helen" age="18" />
        <Friendlistentry name="Leon" age="20" />
        <Friendlistentry name="Talia" age="21" />
      </div>
    </>
  );
}

export default Friends;
