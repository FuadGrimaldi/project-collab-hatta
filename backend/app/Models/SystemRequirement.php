<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SystemRequirement extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'master_system_requirements';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'requirement',
    ];

    /**
     * Get the detail system requirements for the master system requirement.
     */
    public function detailSystemRequirements()
    {
        return $this->hasMany(DetailSystemRequireMent::class, 'master_system_requirement_id');
    }
}
