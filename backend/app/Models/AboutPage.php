<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AboutPage extends Model
{
    use HasFactory;
    protected $table = 'about_page';
   
    protected $fillable = [
        'banner_img',
       
        'faq_section',
        'blog_card',
    
        
    ];
    protected $casts = [
        'faq_section' => 'array',
        'blog_card' => 'array',
    ];
}
