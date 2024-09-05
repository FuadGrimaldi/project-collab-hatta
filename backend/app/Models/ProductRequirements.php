<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\SystemRequirement;

class ProductRequirements extends Model
{
    use HasFactory;

    protected $table = 'product_requirements';

    protected $fillable = [
        'product_id',
        'master_system_requirement_id',
        'detail_requirement_id',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }

    public function masterSystemRequirement()
    {
        return $this->belongsTo(SystemRequirement::class, 'master_system_requirement_id', 'id');
    }

    public function detailSystemRequirement()
    {
        return $this->belongsTo(DetailSystemRequirement::class, 'detail_requirement_id', 'id');
    }
}
