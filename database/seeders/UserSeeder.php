<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@test.com',
            'password' => Hash::make('admin')
        ]);

        $admin->assignRole('admin');

        $employee = User::create([
            'name' => 'Employee',
            'email' => 'employee@test.com',
            'password' => Hash::make('employee')
        ]);

        $employee->assignRole('employee');
    }
}
