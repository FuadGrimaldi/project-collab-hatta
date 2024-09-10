<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use App\Helpers\ResponseFormatter;
use App\Http\Requests\CartCreateRequest;
use App\Http\Resources\CartResource;

class CartController extends Controller
{
   
    public function getMyCart(Request $request)
    {
        try {

            $userId = $request->user->id;
            
            $cartItems = Cart::where('user_id', $userId)
                ->with('product') // Assuming you have a relationship defined in the Cart model
                ->get();

            if ($cartItems->isEmpty()) {
                return ResponseFormatter::success([], 'Cart is empty');
            }
            $formattedCart = $cartItems->map(function ($item) {
                return new CartResource($item);
            });

            return ResponseFormatter::success($formattedCart, 'Cart data retrieved successfully');

        } catch (\Exception $e) {
            Log::channel('daily')->error('Error retrieving cart data: ' . $e->getMessage());
            return ResponseFormatter::error(null, 'Failed to retrieve cart data', 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CartCreateRequest $request)
    {
        try {
            
            $validatedData = $request->validated();

            // Get product details
            $product = DB::table('products')->find($validatedData['product_id']);
            
            if (!$product) {
                return ResponseFormatter::error(null, 'Product not found', 404);
            }
            
            // Update the price in the validated data with the current product price
            $validatedData['price'] = $product->price;
            $validatedData['user_id'] = $request->user->id;

            // Check if the item already exists in the cart
            $existingCartItem = Cart::where('user_id', $validatedData['user_id'])
                ->where('product_id', $validatedData['product_id'])
                ->first();

            if ($existingCartItem) {
                // If the item exists, update the quantity
                $existingCartItem->quantity += $validatedData['quantity'];
                $existingCartItem->save();
                
                return ResponseFormatter::success($existingCartItem, 'Cart item quantity updated successfully');
            }else{

                $cart = Cart::create($validatedData);
            }


            return ResponseFormatter::success($cart, 'Cart item added successfully');

        } catch (\Exception $e) {
            Log::channel('daily')->error('Error adding item to cart: ' . $e->getMessage());
            return ResponseFormatter::error(null, 'Failed to add item to cart', 500);
        }
    }

    /**
     * Delete all items from the user's cart.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function deleteMyCart(Request $request, int $product_id)
    {
        try {
            $userId = $request->user->id;

            // Delete all cart items for the user
            $deletedCount = Cart::where('user_id', $userId)->where('product_id',$product_id)->delete();

            if ($deletedCount > 0) {
                return ResponseFormatter::success(null, 'Cart items deleted successfully');
            } else {
                return ResponseFormatter::success(null, 'Cart is already empty');
            }
        } catch (\Exception $e) {
            Log::channel('daily')->error('Error deleting cart items: ' . $e->getMessage());
            return ResponseFormatter::error(null, 'Failed to delete cart items', 500);
        }
    }

    /**
     * Update the quantity of a specific cart item.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $cartId
     * @return \Illuminate\Http\Response
     */
    public function updateMyCart(Request $request, int $cartId)
    {
        try {
            $userId = $request->user->id;

            $validatedData = $request->validate([
                'quantity' => 'required|integer|min:1',
            ]);

            $cartItem = Cart::where('id', $cartId)
                            ->with(['product'])
                            ->where('user_id', $userId)
                            ->first();

            if (!$cartItem) {
                return ResponseFormatter::error(null, 'Cart item not found', 404);
            }

            // Fetch the associated product to get its price
            $product = $cartItem->product;
            if (!$product) {
                return ResponseFormatter::error(null, 'Associated product not found', 404);
            }

            // Calculate the new total price based on the updated quantity

            $cartItem->quantity = $validatedData['quantity'];
            $cartItem->save();

            return ResponseFormatter::success(new CartResource($cartItem), 'Cart item updated successfully');
        } catch (\Exception $e) {
            Log::channel('daily')->error('Error updating cart item: ' . $e->getMessage());
            return ResponseFormatter::error(null, 'Failed to update cart item', 500);
        }
    }

}
