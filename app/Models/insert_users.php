<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class insert_users extends Model
{
    use HasFactory;

    protected $table = 'users';
    protected $fillable = [
        'first_name',
        'last_name',
        'country',
        'street_adress',
        'town_city',
        'zip_code',
        'phone',
        'email',
    ];
}
