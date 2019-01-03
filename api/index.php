<?php
if (PHP_SAPI == 'cli-server') {
    // To help the built-in PHP dev server, check if the request was actually for
    // something which should probably be served as a static file
    $url  = parse_url($_SERVER['REQUEST_URI']);
    $file = __DIR__ . $url['path'];
    if (is_file($file)) {
        return false;
    }
}

require __DIR__ . '/../vendor/autoload.php';

session_start();

// Instantiate the app
$settings = require __DIR__ . '/../server/settings.php';
$app = new \Slim\App($settings);
$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
        ->withHeader('Access-Control-Allow-Origin', '*')
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

// Register APIs
require __DIR__ . '/../api/API.php';

// Set up dependencies
require __DIR__ . '/../server/dependencies.php';

// Register middleware
require __DIR__ . '/../server/middleware.php';

// Register routes
require __DIR__ . '/../server/routes.php';

// Run app
global $container;
$container = $app->getContainer();
try {
    $app->run();
} catch (Exception $exception) {
    echo $exception;
}

