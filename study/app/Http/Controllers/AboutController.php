<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index ()
    {
        return view('about', [
            'title' => 'About',
            'name' => 'Bagus Daffa Firmansyah',
            'email' => 'bagusdaffaf01@gmail.com',
            'gender' => 'male'
        ]);
    }
}
