<?php

namespace App\Http\Controllers\Api;

use App\Models\OrderItem;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderItemRequest;
use App\Http\Requests\UpdateOrderItemRequest;
use App\Http\Resources\OrderItemResource;
use App\Models\Product;
use Illuminate\Support\Str;

class OrderItemController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->search;
        $orderId = $request->order_id;

        $item = OrderItem::with(['order', 'product'])
            ->when($orderId, function ($query) use ($orderId) {
                $query->where('order_id', $orderId);
            })
            ->when($search, function ($query) use ($search) {
                $query->where('number', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10);

        return OrderItemResource::collection($item);
    }

    public function store(StoreOrderItemRequest $request)
    {
        $validated = $request->validated();

        $product = Product::findOrFail($validated['product_id']);

        $item = OrderItem::create([
            'number' => Str::upper(Str::random(12)),
            'order_id' => $validated['order_id'],
            'product_id' => $product->id,
            'quantity' => $validated['quantity'],
            'price' => $product->price,
        ]);

        return new OrderItemResource($item);
    }

    public function show(OrderItem $item)
    {
        return new OrderItemResource($item);
    }

    public function update(UpdateOrderItemRequest $request, OrderItem $item)
    {
        $item->update($request->validated());

        return new OrderItemResource($item);
    }

    public function destroy(OrderItem $item)
    {
        $item->delete();

        return response()->json([
            'message' => 'OrderItem deleted'
        ]);
    }
}
