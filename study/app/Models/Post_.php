<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PhpParser\Node\Stmt\Return_;

class Post
{
    private static $post_details = [
            [
                "title" => "Judul Post Pertama",
                "slug" => "judul-post-pertama",
                "author" => "Bagus",
                "body" => "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora minus odit quas possimus, fugiat eaque dolorem numquam accusamus. Rem iste unde similique odio aspernatur, cum earum quo minima eligendi obcaecati."
            ],
            [
                "title" => "Judul Post Kedua",
                "slug" => "judul-post-kedua",
                "author" => "Daffa",
                "body" => "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi optio rerum, aspernatur pariatur animi unde corporis, a minus fugiat eos rem sint vero nulla voluptatibus! Explicabo asperiores inventore quibusdam aspernatur accusamus rerum provident ducimus aut, quasi dicta voluptatem magnam alias eligendi laudantium quas maxime deserunt rem illum laborum dolorum. Nobis."
            ]
        ];

        public static function all()
        {
            return collect(self::$post_details);
        }

        public static function find($slug)
        {
            $posts = static::all();
            return $posts->firstWhere('slug', $slug);
        }

        
}
