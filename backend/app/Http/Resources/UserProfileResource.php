<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserProfileResource extends JsonResource
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
            'email' => $this->email,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'role' => $this->role,
            'img_profile' => $this->img_profile,
            'phone_number' => $this->phone_number,
            'birthdate' => $this->birthdate,
            'gender' => $this->gender,
        ];
    }
}
