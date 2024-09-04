<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Helpers\RequirementFormatter;   

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'thumbnail' => $this->thumbnail,
            'price' => $this->price,
            'stock' => $this->stock,
            'details' => $this->productDetail ? [
                'tag' => $this->productDetail->tag,
                'workson' => $this->productDetail->workson,
                'release_date' => $this->productDetail->release_date,
                'company_name' => $this->productDetail->company_name,
                'size' => $this->productDetail->size,
                'language' => $this->productDetail->language,
            ] : null,
            // 'requirements' => $this->productRequirements->pluck('masterSystemRequirement.requirement') ?? [],
            'requirements' => RequirementFormatter::getFormattedRequirements($this->id),
            'images' => $this->galleries->pluck('image_url') ?? [],
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
    
}
