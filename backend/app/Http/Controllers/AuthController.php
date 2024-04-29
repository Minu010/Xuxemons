<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Obtén el correo electrónico y la contraseña del usuario desde la solicitud
        $credentials = $request->only('email', 'password');

        // Busca un usuario en la base de datos con el correo electrónico proporcionado
        $user = User::where('email', $credentials['email'])->first();

        if ($user) {
            // Si el usuario existe, verifica si la contraseña proporcionada es correcta
            if (Hash::check($credentials['password'], $user->password)) {
                // La contraseña es correcta, el usuario está autenticado correctamente
                return response()->json(['authenticated' => true]);
            } else {
                // La contraseña es incorrecta
                return response()->json(['authenticated' => false, 'message' => 'La contraseña es incorrecta'], 401);
            }
        } else {
            // El usuario no existe en la base de datos
            return response()->json(['authenticated' => false, 'message' => 'El usuario no existe'], 404);
        }
    }
}
