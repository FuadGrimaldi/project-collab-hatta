<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use Illuminate\Http\Request;
use App\Helpers\ResponseFormatter;
use App\Http\Requests\WishlistCreateRequest;
use Illuminate\Support\Facades\Log;
use App\Models\Cart;

class WishlistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    /**
     * Add a product to the user's wishlist.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function add(WishlistCreateRequest $request)
    {
        try {

            $data = $request->validated();

            $userId = $request->user->id;

            // Check if the product is already in the wishlist
            $existingWishlistItem = Wishlist::where('user_id', $userId)
                ->where('product_id', $data['product_id'])
                ->first();

            if ($existingWishlistItem) {
                return ResponseFormatter::success(null, 'Product is already in the wishlist');
            }

            // Add the product to the wishlist
            $wishlistItem = Wishlist::create([
                'user_id' => $userId,
                'product_id' => $data['product_id'],
            ]);

            return ResponseFormatter::success($wishlistItem, 'Product added to wishlist successfully');

        } catch (\Exception $e) {
            Log::channel('daily')->error('Error adding product to wishlist: ' . $e->getMessage());
            return ResponseFormatter::error(null, 'Failed to add product to wishlist', 500);
        }
    }

    /**
     * Get the authenticated user's wishlist.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function myWishlist(Request $request)
    {
        try {
            $userId = $request->user->id;

            
            $wishlistItems = Wishlist::where('user_id', $userId)
                ->with('product')
                ->get();


            if ($wishlistItems->isEmpty()) {
                return ResponseFormatter::success([], 'Wishlist is empty');
            }

            $formattedWishlist = $wishlistItems->map(function ($item) {
                return [
                    'id' => $item->id,
                    'product_id' => $item->product_id,
                    'product_name' => $item->product->name,
                    'product_price' => $item->product->price,
                    'added_at' => $item->created_at,
                ];
            });

            return ResponseFormatter::success($formattedWishlist, 'Wishlist retrieved successfully');
        } catch (\Exception $e) {
            Log::channel('daily')->error('Error retrieving wishlist: ' . $e->getMessage());
            return ResponseFormatter::error(null, 'Failed to retrieve wishlist', 500);
        }
    }

    /**
     * Remove a specific item from the user's wishlist.
     *
     * @param Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function removeMyWishlist(Request $request, int $id)
    {
        try {
            $userId = $request->user->id;

            $wishlistItem = Wishlist::where('id', $id)
                ->where('user_id', $userId)
                ->first();

            if (!$wishlistItem) {
                return ResponseFormatter::error(null, 'Wishlist item not found', 404);
            }

            $wishlistItem->delete();

            return ResponseFormatter::success(null, 'Wishlist item removed successfully');
        } catch (\Exception $e) {
            Log::channel('daily')->error('Error removing wishlist item: ' . $e->getMessage());
            return ResponseFormatter::error(null, 'Failed to remove wishlist item', 500);
        }
    }

    /**
     * Move a wishlist item to the cart.
     *
     * @param Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function moveToCart(Request $request, int $id)
    {
        try {
            $userId = $request->user->id;

            $wishlistItem = Wishlist::where('id', $id)
                ->where('user_id', $userId)
                ->with('product')
                ->first();

            if (!$wishlistItem) {
                return ResponseFormatter::error(null, 'Wishlist item not found', 404);
            }

            // Check if the item already exists in the cart
            $existingCartItem = Cart::where('user_id', $userId)
                ->where('product_id', $wishlistItem->product_id)
                ->first();

            if ($existingCartItem) {
                // If the item exists, update the quantity
                $existingCartItem->quantity += 1;
                $existingCartItem->save();
            } else {
                // If the item doesn't exist, create a new cart item
                Cart::create([
                    'user_id' => $userId,
                    'product_id' => $wishlistItem->product_id,
                    'quantity' => 1,
                    'price' => $wishlistItem->product->price,
                ]);
            }

            // Remove the item from the wishlist
            $wishlistItem->delete();

            return ResponseFormatter::success(null, 'Item moved to cart successfully');
        } catch (\Exception $e) {
            Log::channel('daily')->error('Error moving wishlist item to cart: ' . $e->getMessage());
            return ResponseFormatter::error(null, 'Failed to move item to cart', 500);
        }
    }

}
