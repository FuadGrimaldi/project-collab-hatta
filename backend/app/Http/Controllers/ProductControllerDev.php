<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ProductRequest;
use App\Http\Requests\ProductUpdateRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\ProductResource;
use App\Helpers\ResponseFormatter;
use App\Models\Product;
use App\Http\Services\ProductService;


class ProductControllerDev extends Controller
{
    protected $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $user = $request->user;

            if (!$user) {
                return ResponseFormatter::error(null, 'User not found', 404);
            }

            // $products = Product::all();
            // Eager load relasi productDetail dan galleries
            $products = Product::with(['productDetail', 'galleries'])->get();

            return ResponseFormatter::success(
                ProductResource::collection($products),
                'Products retrieved successfully'
            );  
        } catch (\Exception $e) {
            Log::channel('daily')->error($e->getMessage());
            return ResponseFormatter::error(
                null,
                'Products retrieval failed: ' . $e->getMessage(),
                500
            );
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
    public function store(ProductRequest $request)
    {
        try {
            DB::beginTransaction();

            // The ProductRequest will handle the validation
            $data = $request->validated();

            $result = $this->productService->createProduct($data);

            // Validate the structure of $result
            $product = $result['product'];
            $productDetail = $result['product_detail'];
            $galleries = $result['galleries'];

            DB::commit();
            return ResponseFormatter::success(new ProductResource($product), 'Product created successfully', 201);

        } catch (\Exception $e) {
            DB::rollBack();
            Log::channel('daily')->error($e->getMessage());
            return ResponseFormatter::error(
                null,
                'Product creation failed: ' . $e->getMessage(),
                500
            );
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, $id)
    {
        try {
            $user = $request->user;

            if (!$user) {
                return ResponseFormatter::error(null, 'User not found', 404);
            }

            $product = Product::findOrFail($id);
            return ResponseFormatter::success(new ProductResource($product), 'Product retrieved successfully');
        } catch (\Exception $e) {
            Log::channel('daily')->error($e->getMessage());
            return ResponseFormatter::error(
                null,
                'Product retrieval failed: ' . $e->getMessage(),
                404
            );
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductUpdateRequest $request, string $id)
    {
        // Log::channel('daily')->info('Request Data', $request->all());
        try {
            DB::beginTransaction();

            $result = $this->productService->updateProduct($request->validated(), $id); 

            $product = $result['product'];

            $productDetail = $result['product_detail'];
            $galleries = $result['galleries'];

            DB::commit();
            return ResponseFormatter::success(new ProductResource($product), 'Product updated successfully');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::channel('daily')->error($e->getMessage());
            return ResponseFormatter::error(
                null,
                'Product update failed: ' . $e->getMessage(),
                500
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
