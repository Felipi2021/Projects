<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('city_old', function(){
    return "text";
});

Route::get("city", function(){
    return (view('city'));
});

Route::get("info", function(){
    return view('city', ['firstName' => 'Janusz', 'lastName' => 'Nowak', 'city' => 'Poznan']);
});

Route::get("info_age/{age}", function($age){
    return view('city', ['firstName' => 'Janusz', 'lastName' => 'Nowak', 'city' => 'Poznan', 'age' => $age ]);
});

Route::get('/address', function(){
    echo "Miasto: ";
});

Route::get('/address1/{city}', function(string $city){
    echo "Miasto: $city";
});

Route::get('/address1/{city}/{street}', function(string $city, string $street, $zipCode){
    echo <<< ADDRESS
    Kod pocztowy: $zipCode <br>
    Miasto: $city <br>
    Ulica: $street
    <hr>
    ADDRESS;
});


Route::get('/address1/{city}/{street}/{zipCode}', function(string $city, string $street, $zipCode = null){ //po wpisaniu localhost:8000/address1/poznan/fredry/55555 wyskoczy miasto: poznan, ulica: fredry, a to czy kod pocztowy wypisze to zalezy czy zostal wpisany
    if(is_null($zipCode))
    $zipCode = "brak danych";
    else
    $zipCode = substr($zipCode, 0 ,2)."-".substr($zipCode, 2, 3); //laczymy indeksy z 55555 myslnikiem zeby wypisalo 55-555
    echo <<< ADDRESS

    Kod pocztowy: $zipCode <br>
    Miasto: $city<br>
    Ulica: $street
    <hr>
    ADDRESS;
})->name("x");

Route::redirect('main','/');
Route::redirect('gloma','main');


