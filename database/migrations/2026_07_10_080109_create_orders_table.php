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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('number')->nullable();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->enum('status', ['created', 'processing', 'finished', 'canceled'])->default('created');
            $table->timestamps();
        });
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->string('number')->nullable();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('order_id')->constrained()->cascadeOnDelete();
            $table->integer('quantity')->nullable();
            $table->string('price')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
        Schema::dropIfExists('order_items');
    }
};
