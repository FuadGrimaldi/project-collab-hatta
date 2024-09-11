import NotificationItem from "./NotificationItem";

const initialNotificationItems = [
  {
    id: 1,
    title: "Order has been received",
    image: "/images/detail1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id condimentum semper libero tempor egestas facilisi quam accumsan, aliquam. Ac nunc eget interdum pellentesque et tortor. Pretium risus viverra mauris aliquam adipiscing ut pretium. Iaculis ipsum gravida tempus, eget pellentesque venenatis purus.",
  },
  {
    id: 2,
    title: "Order has been received",
    image: "/images/detail1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id condimentum semper libero tempor egestas facilisi quam accumsan, aliquam. Ac nunc eget interdum pellentesque et tortor. Pretium risus viverra mauris aliquam adipiscing ut pretium. Iaculis ipsum gravida tempus, eget pellentesque venenatis purus.",
  },
  {
    id: 3,
    title: "Order has been received",
    image: "/images/detail1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id condimentum semper libero tempor egestas facilisi quam accumsan, aliquam. Ac nunc eget interdum pellentesque et tortor. Pretium risus viverra mauris aliquam adipiscing ut pretium. Iaculis ipsum gravida tempus, eget pellentesque venenatis purus.",
  },
  {
    id: 4,
    title: "Order has been received",
    image: "/images/detail1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id condimentum semper libero tempor egestas facilisi quam accumsan, aliquam. Ac nunc eget interdum pellentesque et tortor. Pretium risus viverra mauris aliquam adipiscing ut pretium. Iaculis ipsum gravida tempus, eget pellentesque venenatis purus.",
  },
];

export default function Notification() {
  return (
    <div className="bg-secondary-black w-full pb-10 p-6 border border-white">
      <div className="flex items-center mx-0 lg:mx-6 border-b border-secondary-gray">
        <h1 className="text-2xl font-bold mb-3 lg:mb-6 mt-6">Notification</h1>
      </div>
      {initialNotificationItems.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </div>
  );
}
