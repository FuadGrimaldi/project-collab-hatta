<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use App\Helpers\ResponseFormatter;

class DetailSystemRequireMentUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'master_system_requirement_id' => 'required|exists:master_system_requirements,id',
            'type' => 'required|string|in:minimum,recommended',
            'system_operation' => 'required|string',
            'processor' => 'required|string',
            'memory' => 'required|string',
            'graphics' => 'required|string',
            'directx' => 'required|string',
            'storage' => 'required|string',
        ];

    }

    protected function failedValidation(Validator $validator)
    {
        throw new ValidationException($validator, ResponseFormatter::error($validator->errors(),null,422));

    }
}
