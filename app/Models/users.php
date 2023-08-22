<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class users extends Model
{
    protected $table = 'users'; // Replace 'table_name' with your actual table name

    protected $fillable = [
        'name',
        // Add more columns as needed
    ];
}
