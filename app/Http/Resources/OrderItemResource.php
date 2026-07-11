<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderItemResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'number' => $this->number,
            'quantity' => $this->quantity,
            'price' => $this->price,
            'order' => new OrderResource($this->whenLoaded('order')),
            'product' => new ProductResource($this->whenLoaded('product')),
        ];
    }
}
