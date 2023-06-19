@extends('layouts.main')

    @section('container')

        <h2 class="mb-5">{{ $post->title }}</h2>
        {!! $post->body !!}

        <a href="/posts" class="btn btn-primary">Back</a>

    @endsection 