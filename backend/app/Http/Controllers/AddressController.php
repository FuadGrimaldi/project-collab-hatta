<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Address;
use App\Helpers\ResponseFormatter;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\AddressCreateRequest;
use App\Http\Requests\AddressUpdateRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Models\User;

class AddressController extends Controller
{
    public function getAddressByUser(int $userId)
    {
        try {
            $user = User::findOrFail($userId);
            if (!$user) {
                return ResponseFormatter::error(null, 'User not found', 404);
            }

            $address = Address::where('user_id', $user->id)->with('user')->get();
            
            if ($address->isEmpty()) {
                return ResponseFormatter::success([], 'No addresses found for this user');
            }

            return ResponseFormatter::success($address, 'Address retrieved successfully');
        } catch (\Exception $e) {
            Log::error('Error retrieving address: ' . $e->getMessage());
            return ResponseFormatter::error($e->getMessage(), 'Address retrieval failed', 500);
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $address = Address::all();
            return ResponseFormatter::success($address, 'Address retrieved successfully');
        } catch (\Exception $e) {
            Log::error('Error retrieving address: ' . $e->getMessage());
            return ResponseFormatter::error($e->getMessage(), 'Address retrieval failed', 500);
        }
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
    public function store(AddressCreateRequest $request)
    {
        try {
            $address = Address::create($request->validated());  
            return ResponseFormatter::success($address, 'Address created successfully');
        } catch (\Exception $e) {
            // Log the error
            Log::error('Failed to create address: ' . $e->getMessage(), [
                'exception' => $e,
                'request' => $request->all()
            ]);
            return ResponseFormatter::error($e->getMessage(), 'Address creation failed', 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $address = Address::with('user')->findOrFail($id);
            return ResponseFormatter::success($address, 'Address retrieved successfully');
        } catch (ModelNotFoundException $e) {
            Log::channel('daily')->warning('Address not found: ' . $e->getMessage());
            return ResponseFormatter::error(
                null,
                'Address not found',
                404
            );
        } catch (\Exception $e) {
            Log::error('Error retrieving address: ' . $e->getMessage());
            return ResponseFormatter::error($e->getMessage(), 'Address retrieval failed', 500);
        }
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(AddressUpdateRequest $request, string $id)
    {
        try {
            $address = Address::findOrFail($id);
            $address->update($request->validated());

            return ResponseFormatter::success($address, 'Address updated successfully');
        } catch (\Exception $e) {
            Log::error('Error updating address: ' . $e->getMessage());
            return ResponseFormatter::error($e->getMessage(), 'Address update failed', 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $address = Address::findOrFail($id);
            $address->delete();

            return ResponseFormatter::success(null, 'Address deleted successfully');
        } catch (\Exception $e) {
            Log::error('Error deleting address: ' . $e->getMessage());
            return ResponseFormatter::error($e->getMessage(), 'Address deletion failed', 500);
        }
    }
}
