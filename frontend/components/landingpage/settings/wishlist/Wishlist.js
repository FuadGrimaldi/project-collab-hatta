import WishlistCard from "./WishlistCard";

const initialWishItems = [
  {
    id: 1,
    title: "Minecraft: Windows 10 Edition (PC) - Microsoft Key - GLOBAL",
    price: 100000,
    coverImage: "/images/detail1.png",
    dateAdded: "2024-02-14",
  },
  {
    id: 2,
    title: "Minecraft: Windows 10 Edition (PC) - Microsoft Key - GLOBAL",
    price: 200000,
    coverImage: "/images/detail1.png",
    dateAdded: "2024-02-14",
  },
  {
    id: 3,
    title: "Minecraft: Windows 10 Edition (PC) - Microsoft Key - GLOBAL",
    price: 150000,
    coverImage: "/images/detail1.png",
    dateAdded: "2024-02-14",
  },
  {
    id: 4,
    title: "Minecraft: Windows 10 Edition (PC) - Microsoft Key - GLOBAL",
    price: 150000,
    coverImage: "/images/detail1.png",
    dateAdded: "2024-02-14",
  },
];

export default function Wishlist() {
  return (
    <div>
      <WishlistCard items={initialWishItems} />
    </div>
  );
}
