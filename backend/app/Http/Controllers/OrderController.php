<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Helpers\ResponseFormatter;
use App\Models\Cart;


class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            // Get the authenticated user
            $user = $request->user;

            $carts = $request->cart_id;

            // Get cart items based on the provided cart IDs
            $cartItems = Cart::whereIn('id', $carts)
                ->where('user_id', $user->id)
                ->with('product')
                ->get();

            if ($cartItems->isEmpty()) {
                return ResponseFormatter::error(
                    null,
                    'No valid cart items found for the given cart IDs',
                    404
                );
            }

            // Create a new order for the user
            $order = Order::create([
                'user_id' => $user->id,
                'order_number' => 'INV-' . uniqid(), // Generate a unique order number
                'total_price' => 0, // Initialize total price, to be updated later
                'status' => 'pending', // Set initial status
            ]);

            // Initialize total price
            $totalPrice = 0;

            // Create order items and calculate total price
            foreach ($cartItems as $cartItem) {
                $order->orderItems()->create([
                    'product_id' => $cartItem->product_id,
                    'quantity' => $cartItem->quantity,
                    'price' => $cartItem->price,
                ]);

                $totalPrice += $cartItem->quantity * $cartItem->price;
            }

            // Update the order's total price
            $order->update(['total_price' => $totalPrice]);

            // Remove the items from the cart
            Cart::whereIn('id', $carts)->delete();

            return ResponseFormatter::success(
                $order,
                'Order created successfully'
            );
        } catch (\Exception $e) {
            Log::channel('daily')->error('Error creating order: ' . $e->getMessage(), [
                'exception' => $e,
                'user_id' => $user->id,
            ]);

            return ResponseFormatter::error(
                null,
                'An error occurred while creating the order: ' . $e->getMessage(),
                500
            );
        }
    }

    /**
     * Get orders for the authenticated user.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function myOrders(Request $request)
    {
        try {
            $user = $request->user;
            $orders = Order::where('user_id', $user->id)
                ->with(['orderItems.product'])
                ->orderBy('created_at', 'desc')
                ->get();


            if ($orders->isEmpty()) {
                return ResponseFormatter::success([], 'No orders found');
            }

            $formattedOrders = $orders->map(function ($order) {
                return [
                    'id' => $order->id,
                    'order_number' => $order->order_number,
                    'total_price' => $order->total_price,
                    'status' => $order->status,
                    'created_at' => $order->created_at,
                    'items' => $order->orderItems->map(function ($item) {
                        return [
                            'product_id' => $item->product_id,
                            'product_name' => $item->product->name,
                            'quantity' => $item->quantity,
                            'price' => $item->price,
                        ];
                    }),
                ];
            });

            return ResponseFormatter::success($formattedOrders, 'Orders retrieved successfully');
        } catch (\Exception $e) {
            Log::channel('daily')->error('Error retrieving orders: ' . $e->getMessage(), [
                'exception' => $e,
                'user_id' => $request->user->id,
            ]);

            return ResponseFormatter::error(
                null,
                'An error occurred while retrieving orders: ' . $e->getMessage(),
                500
            );
        }
    }

    /**
     * Update the payment status of an order.
     *
     * @param Request $request
     * @param int $orderId
     * @return \Illuminate\Http\JsonResponse
     */
    public function updatePaymentStatus(Request $request, $orderId)
    {
        try {
            $user = $request->user;
            $order = Order::where('id', $orderId)
                ->where('user_id', $user->id)
                ->first();


            if (!$order) {
                return ResponseFormatter::error(null, 'Order not found', 404);
            }

            $validatedData = $request->validate([
                'status' => 'required|string|in:pending,paid,failed',
            ]);

            $order->status = $validatedData['status'];
            $order->save();

            return ResponseFormatter::success($order, 'Payment status updated successfully');
        } catch (\Exception $e) {
            Log::channel('daily')->error('Error updating payment status: ' . $e->getMessage(), [
                'exception' => $e,
                'user_id' => $request->user->id,
                'order_id' => $orderId,
            ]);

            return ResponseFormatter::error(
                null,
                'An error occurred while updating payment status: ' . $e->getMessage(),
                500
            );
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
