import WishlistItem from "./WishlistItem";

export default function WishlistCard({ items, removeItem }) {
  return (
    <div className="w-full">
      <div className="flex items-center px-0 lg:px-4">
        <h1 className="text-2xl font-bold mb-6 mr-4 mt-6">Wishlist</h1>
        <span className="text-sm text-secondary-gray">{`(${items.length} items)`}</span>
      </div>

      {items.map((item) => (
        <WishlistItem key={item.id} item={item} removeItem={removeItem} />
      ))}
    </div>
  );
}
