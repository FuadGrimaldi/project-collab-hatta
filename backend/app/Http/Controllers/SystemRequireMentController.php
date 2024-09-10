<?php

namespace App\Http\Controllers;

use App\Http\Requests\SystemRequireMentCreateRequest;
use App\Helpers\ResponseFormatter;
use App\Models\SystemRequirement;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class SystemRequireMentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $systemRequirements = SystemRequirement::orderBy('requirement', 'asc')->get();

            return ResponseFormatter::success(
                $systemRequirements,
                'System requirements retrieved successfully'
            );
        } catch (\Exception $e) {
            Log::channel('daily')->error('Error retrieving system requirements: ' . $e->getMessage());

            return ResponseFormatter::error(
                null,
                'An error occurred while retrieving system requirements',
                500
            );
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SystemRequireMentCreateRequest $request)
    {
        try {

            $data = $request->validated();

            $systemRequirement = SystemRequirement::create($data);

            return ResponseFormatter::success(
                $systemRequirement,
                'System requirement created successfully',
                201
            );
        } catch (\Exception $e) {
            Log::channel('daily')->error('Error creating system requirement: ' . $e->getMessage());
            return ResponseFormatter::error(
                null,
                'An error occurred while creating the system requirement',
                500
            );
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $systemRequirement = SystemRequirement::findOrFail($id);

            return ResponseFormatter::success(
                $systemRequirement,
                'System requirement retrieved successfully'
            );
        } catch (ModelNotFoundException $e) {
            Log::channel('daily')->warning('System requirement not found: ' . $e->getMessage());
            return ResponseFormatter::error(
                null,
                'System requirement not found',
                404
            );
        } catch (\Exception $e) {
            Log::channel('daily')->error('Error retrieving system requirement: ' . $e->getMessage());
            return ResponseFormatter::error(
                null,
                'An error occurred while retrieving the system requirement',
                500
            );
        }
    }

   

    /**
     * Update the specified resource in storage.
     */
    public function update(SystemRequireMentCreateRequest $request, string $id)
    {
        try {

            $data = $request->validated();

            $systemRequirement = SystemRequirement::findOrFail($id);


            $systemRequirement->update($data);

            return ResponseFormatter::success(
                $systemRequirement,
                'System requirement updated successfully'
            );
        } catch (ModelNotFoundException $e) {
            Log::channel('daily')->warning('System requirement not found: ' . $e->getMessage());
            return ResponseFormatter::error(
                null,
                'System requirement not found',
                404
            );
        } catch (\Exception $e) {
            Log::channel('daily')->error('Error updating system requirement: ' . $e->getMessage());
            return ResponseFormatter::error(
                null,
                'An error occurred while updating the system requirement',
                500
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $systemRequirement = SystemRequirement::findOrFail($id);

            $systemRequirement->delete();

            return ResponseFormatter::success(
                null,
                'System requirement deleted successfully'
            );
        } catch (ModelNotFoundException $e) {
            Log::channel('daily')->warning('System requirement not found: ' . $e->getMessage());
            return ResponseFormatter::error(
                null,
                'System requirement not found',
                404
            );
        } catch (\Exception $e) {
            Log::channel('daily')->error('Error deleting system requirement: ' . $e->getMessage());
            return ResponseFormatter::error(
                null,
                'An error occurred while deleting the system requirement',
                500
            );
        }
    }
}
