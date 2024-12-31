<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'phone',
        
    ];

    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }
    
}
