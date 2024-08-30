<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('detail_requirements', function (Blueprint $table) {
            $table->id();
            $table->foreignId('master_system_requirement_id')->constrained('master_system_requirements');
            $table->string('system_operation')->nullable();
            $table->string('processor')->nullable();
            $table->string('memory')->nullable();
            $table->string('graphics')->nullable();
            $table->string('directx')->nullable();
            $table->string('storage')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_requirements');
    }
};
