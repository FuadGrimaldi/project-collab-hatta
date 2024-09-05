<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use App\Helpers\ResponseFormatter;

class ProductRequest extends FormRequest
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
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'name' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'tag' => 'required|string',
            'workson' => 'required|string',
            'release_date' => 'required|date',
            'company_name' => 'required|string',
            'size' => 'required|string',
            'language' => 'required|string',
            'seller_id' => 'required|integer', // Pastikan seller_id ada di sini
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new ValidationException($validator, ResponseFormatter::error($validator->errors(),null,422));

    }



}
