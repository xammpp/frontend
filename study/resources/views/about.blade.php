@extends('layouts.main')

@section('title', 'About')

    @section('container')
        <h1>Halaman About</h1>
        <p>name: {{$name}}</p>
        <p>email: {{$email}}</p>
        <p>gender: {{$gender}}</p>
    @endsection