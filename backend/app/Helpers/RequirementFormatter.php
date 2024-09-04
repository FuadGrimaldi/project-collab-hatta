<?php

namespace App\Helpers;

use App\Models\ProductRequirements;

class RequirementFormatter
{
    /**
     * Get the formatted requirements for the product.
     *
     * @param int $productId
     * @return array
     */
    public static function getFormattedRequirements($productId)
    {
        $requirements = ProductRequirements::where('product_id', $productId)
            ->with(['masterSystemRequirement', 'detailSystemRequirement'])
            ->get()
            ->groupBy('master_system_requirement_id')
            ->map(function ($items, $masterSystemRequirementId) {
                $masterRequirement = $items->first()->masterSystemRequirement;
                
                return [
                    'name' => $masterRequirement->requirement,
                    'details' => $items->map(function ($item) {
                        return $item->detailSystemRequirement;
                    })->filter()->unique()->values()->all(),
                ];
            })
            ->values()
            ->all();

        return $requirements;
    }
}
