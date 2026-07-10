<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'number' => $this->number,
            'user_id' => $this->user_id, // masz literówkę: było uer_id
            'status' => $this->status,
            'items' => OrderItemResource::collection(
                $this->whenLoaded('items')
            ),
        ];
    }
}
