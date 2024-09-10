<?php

namespace App\Http\Controllers;

use App\Http\Requests\DetailSystemRequireMentCreateRequest;
use App\Http\Requests\DetailSystemRequireMentUpdateRequest;
use App\Models\DetailSystemRequireMent;
use App\Helpers\ResponseFormatter;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class DetailSystemRequireMentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $detailSystemRequirements = DetailSystemRequireMent::with('systemRequirement')
                ->orderBy('created_at', 'desc')
                ->get();

            return ResponseFormatter::success(
                $detailSystemRequirements,
                'Detail system requirements retrieved successfully'
            );
        } catch (\Exception $e) {
            Log::error('Error retrieving detail system requirements: ' . $e->getMessage());

            return ResponseFormatter::error(
                null,
                'An error occurred while retrieving detail system requirements',
                500
            );
        }
    }

   
    public function store(DetailSystemRequireMentCreateRequest $request)
    {
        try {
            $detailSystemRequirement = DetailSystemRequireMent::create($request->validated());
            return ResponseFormatter::success($detailSystemRequirement, 'Detail system requirement created successfully');
        } catch (\Exception $e) {
            // Log the error
            Log::error('Failed to create detail system requirement: ' . $e->getMessage(), [
                'exception' => $e,
                'request' => $request->all()
            ]);
            return ResponseFormatter::error(null, 'Failed to create detail system requirement: ' . $e->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        try {

            $detailSystemRequireMent = DetailSystemRequireMent::with('systemRequirement')->findOrFail($id);
            
            return ResponseFormatter::success(
                $detailSystemRequireMent,
                'Detail system requirement retrieved successfully'
            );
        } catch (ModelNotFoundException $e) {
            Log::channel('daily')->warning('Detail system requirement not found: ' . $e->getMessage());
            return ResponseFormatter::error(
                null,
                'Detail system requirement not found',
                404
            );
        } catch (\Exception $e) {
            Log::channel('daily')->error('Error retrieving detail system requirement: ' . $e->getMessage());
            return ResponseFormatter::error(
                null,
                'An error occurred while retrieving the detail system requirement',
                500
            );
        }
    }

   
    /**
     * Update the specified resource in storage.
     */
    public function update(DetailSystemRequireMentUpdateRequest $request, int $id)
    {

        try {

            $detailSystemRequireMent = DetailSystemRequireMent::findOrFail($id);

            $detailSystemRequireMent->update($request->validated());

            return ResponseFormatter::success(
                $detailSystemRequireMent,
                'Detail system requirement updated successfully'
            );
        } catch (ModelNotFoundException $e) {
            Log::channel('daily')->warning('Detail system requirement not found: ' . $e->getMessage());
            return ResponseFormatter::error(
                null,
                'Detail system requirement not found',
                404
            );
        } catch (\Exception $e) {
            // Log the error
            Log::channel('daily')->error('Error updating detail system requirement: ' . $e->getMessage());
            return ResponseFormatter::error(
                null,
                'Failed to update detail system requirement: ' . $e->getMessage(),
                500
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        try {

            $detailSystemRequireMent = DetailSystemRequireMent::findOrFail($id);
            $detailSystemRequireMent->delete();

            return ResponseFormatter::success(
                null,
                'Detail system requirement deleted successfully'
            );
        } catch (ModelNotFoundException $e) {
            Log::channel('daily')->warning('Detail system requirement not found: ' . $e->getMessage());
            return ResponseFormatter::error(
                null,
                'Detail system requirement not found',
                404
            );
        } catch (\Exception $e) {
            Log::channel('daily')->error('Error deleting detail system requirement: ' . $e->getMessage());
            return ResponseFormatter::error(
                null,
                'An error occurred while deleting the detail system requirement',
                500
            );
        }
    }
}
