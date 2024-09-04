<?php 

namespace App\Http\Services;
use App\Models\TokenManagement;

class ApiTokenService {

    public static function registerApiToken($user)
    {
        // generate custom hash sebagai auth token
        $generateToken = base64_encode(sha1(rand(1, 1000). uniqid(). time()));
        // manage expire token
        $expired = date('Y-m-d H:i:s', strtotime('+1 day'));
        
        // simpan token ke database
       $token_ins = TokenManagement::create([
            'user_id' => $user->id,
            'token' => $generateToken,
            'expired_at' => $expired,
            'is_active' => 1
        ]);

        return $token_ins;
    }

    public static function nonActiveToken($user)
    {
        // simpan token ke database
       $token_out = TokenManagement::where('user_id', $user->id)->update([
            'is_active' => 0
        ]);

        return $token_out;
    }
}