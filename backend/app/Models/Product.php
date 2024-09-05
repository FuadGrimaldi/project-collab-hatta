<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'seller_id',
        'name',
        'description',
        'price',
        'stock',
        'thumbnail',
    ];

    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id', 'id');
    }
    public function productDetail()
    {
        return $this->hasOne(ProductDetail::class, 'product_id', 'id');
    }

    public function galleries()
    {
        return $this->hasMany(Gallery::class, 'product_id', 'id');
    }
    public function productRequirements()
    {
        return $this->hasMany(ProductRequirements::class, 'product_id', 'id');
    }
}
