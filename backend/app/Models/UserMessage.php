<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserMessage extends Model
{
    protected $fillable=[
"user_id","name","email","phone","message"
    ];

    
}
