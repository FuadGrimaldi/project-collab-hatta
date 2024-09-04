<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailSystemRequireMent extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'detail_requirements';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'master_system_requirement_id',
        'type',
        'system_operation',
        'processor',
        'memory',
        'graphics',
        'directx',
        'storage',
    ];

    /**
     * Get the master system requirement that owns the detail system requirement.
     */
    public function systemRequirement()
    {
        return $this->belongsTo(SystemRequirement::class, 'master_system_requirement_id');
    }
}
