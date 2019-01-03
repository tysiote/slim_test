<?php
function createStatus($code) {
    return array(
        "code" => $code,
        "http_code" => httpCode($code),
        "message" => translateCode($code)
        );
}

function translateCode($code) {
    if (!$code) {
        return "unknown_code";
    }
    if ($code === 100) return "ok";
    if ($code === 101) return "logged_in";
}

function httpCode($code) {
    if (!$code) {
        return 500;
    }
    if ($code === 100) return 200;
    if ($code === 101) return 200;
    return 500;
}

function parseCode($output) {
    $result = $output[0];
    $result["status"] = createStatus($output[1]);
    return $result;
}