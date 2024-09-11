import CartItem from "./CartItem";

export default function CartList({
  items,
  selectedItems,
  updateQuantity,
  removeItem,
  toggleItemSelection,
}) {
  return (
    <div className="w-full border border-primary-gray px-4 ">
      <div className="flex items-center px-0 lg:px-12">
        <h1 className="text-2xl font-bold mb-6 mr-4 mt-6">Your Cart</h1>
        <span className="text-sm text-[#808080]">{`(${items.length} items)`}</span>
      </div>

      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          isSelected={selectedItems[item.id]}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
          toggleSelection={toggleItemSelection}
        />
      ))}
    </div>
  );
}
