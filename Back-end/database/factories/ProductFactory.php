<?php

namespace Database\Factories;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {   
        
        return [
            'name' => fake()->name,
            'description' => fake()->text,
            'price' => fake()->numberBetween(50, 200), // Generate random price between 10 and 100 with 2 decimal places
            'image' => $this->image(), // Call a custom method to generate image path
            'created_at' => fake()->dateTimeThisMonth,
            'updated_at' => null,
        ];
    }
    protected function image()
    {
        $imageUrls = [
            'https://via.placeholder.com/300x300/007bff',
            'https://via.placeholder.com/300x300/c2f0f0',
            'https://via.placeholder.com/300x300/ff9900',
            // Add more image URLs here
        ];

        return $imageUrls[array_rand($imageUrls)];
    }
}
