<?php

namespace App\Http\Services;

use App\Models\Product;
use App\Models\ProductDetail;
use App\Models\Gallery;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Log;

class ProductService
{
    /**
     * Create a new product along with details and images.
     *
     * @param array $data
     * @return array
     * @throws ValidationException
     */
    public function createProduct(array $data): array
    {
        DB::beginTransaction();

        try {
            // Insert into the products table
            $product = Product::create([
                'name' => $data['name'],
                'description' => $data['description'],
                'thumbnail' => $data['thumbnail']->store('product_images', 'public'), // Process the image
                'price' => $data['price'],
                'stock' => $data['stock'],
                'seller_id' => $data['seller_id'],
                // Add other product fields as needed
            ]);

            // Debugging: Check if $product is an object
            // dd($product);

            // Insert into the product_details table
            $productDetail = ProductDetail::create([
                'product_id' => $product->id,
                'tag' => $data['tag'],
                'workson' => $data['workson'],
                'release_date' => $data['release_date'],
                'company_name' => $data['company_name'],
                'size' => $data['size'],
                'language' => $data['language'],
                // Add other product details fields as needed
            ]);

            // dd($productDetail);
            // Insert multiple images into the product_images table
            $galleries = [];
            if (isset($data['images']) && is_array($data['images'])) {
                foreach ($data['images'] as $image) {
                    if ($image instanceof \Illuminate\Http\UploadedFile) {
                        $imagePath = $image->store('product_images', 'public');

                        // Log::info('Processing image:', $imagePath);

                        $gallery = Gallery::create([
                            'product_id' => $product->id,
                            'image_url' => $imagePath,
                        ]);
                        $galleries[] = $gallery;
                    }
                }
            } else {
                Log::info('No images provided.');
            }
            // dd($galleries);
            DB::commit();
            return [
                'product' => $product,
                'product_detail' => $productDetail,
                'galleries' => $galleries
            ];

        } catch (\Exception $e) {
            DB::rollBack();

            throw ValidationException::withMessages([
                'error' => ['Failed to create product: ' . $e->getMessage()],
            ]);
        }
    }
}
