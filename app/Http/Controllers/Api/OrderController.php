<?php

namespace App\Http\Controllers\Api;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateOrderRequest;
use App\Http\Resources\OrderResource;
use Illuminate\Support\Str;
class OrderController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->search;

        $order = Order::query()
            ->when($search, function ($query) use ($search) {
                $query->where(function ($q) use ($search) {
                    $q->where('number', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->paginate(10);

        return OrderResource::collection($order);
    }

    public function store()
    {
        $order = Order::create([
            'user_id' => auth()->id(),
            'number' => 'ORD-' . Str::upper(Str::random(8)),
            'status' => 'created',
        ]);

        return new OrderResource($order);
    }

    public function show(Order $order)
    {
        return new OrderResource($order);
    }

    public function update(UpdateOrderRequest $request, Order $order)
    {
        $order->update($request->validated());

        return new OrderResource($order);
    }

    public function destroy(Order $order)
    {
        $order->delete();

        return response()->json([
            'message' => 'Order deleted'
        ]);
    }
}
