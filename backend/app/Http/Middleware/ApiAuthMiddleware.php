<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Helpers\ResponseFormatter;
use App\Models\TokenManagement;
use App\Models\User;

class ApiAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->header('Authorization');
        if (empty($token)) {
           return ResponseFormatter::error([
                'message' => 'Something went wrong',
                'error' => 'Authorization Header is empty'
             ]);
        }

        $access_token = $token;
        $split_token = explode(" ", $token);
        if (count($split_token) <> 2) {
            return ResponseFormatter::error([
                'message' => 'Something went wrong',
                'error' => 'Invalid Authorization format'
             ]);
        }

        if (trim($split_token[0]) <> 'Bearer') {
            return ResponseFormatter::error([
                'message' => 'Something went wrong',
                'error' => 'Authorization header must be a Bearer'
             ]);
        }

        $access_token =  trim($split_token[1]);

        // cek ketersediaan token
        $cek = TokenManagement::where('token', $access_token)->first();
        if (empty($cek)) {
            return ResponseFormatter::error([
                'message' => 'Something went wrong',
                'error' => 'Forbidden : Invalid access token'
             ]);
        }

        // cek expired token
        if (strtotime($cek->expired_at) <  time() || $cek->is_active != 1) {
           return ResponseFormatter::error([
                'message' => 'Something went wrong',
                'error' => 'Forbidden : Token is already expired. '
             ]);
        }

        // Fetch user data associated with the token
        $user = User::find($cek->user_id);

        // Attach user data to the request
        $request->merge(['user' => $user]);
        return $next($request);
    }
}
